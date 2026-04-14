import { useEffect, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";

// ─── Audio Engine (Web Audio API — zero external files) ──────────────────────
function createAudio() {
  let ctx = null;
  function getCtx() {
    if (!ctx) ctx = new (window.AudioContext || window.webkitAudioContext)();
    if (ctx.state === "suspended") ctx.resume();
    return ctx;
  }
  function tone(freq, type, vol, decay, delay = 0) {
    try {
      const c = getCtx();
      const osc = c.createOscillator();
      const gain = c.createGain();
      osc.connect(gain); gain.connect(c.destination);
      osc.type = type;
      osc.frequency.setValueAtTime(freq, c.currentTime + delay);
      gain.gain.setValueAtTime(vol, c.currentTime + delay);
      gain.gain.exponentialRampToValueAtTime(0.001, c.currentTime + delay + decay);
      osc.start(c.currentTime + delay);
      osc.stop(c.currentTime + delay + decay);
    } catch (_) {}
  }
  function noise(vol, decay) {
    try {
      const c = getCtx();
      const buf = c.createBuffer(1, Math.ceil(c.sampleRate * decay), c.sampleRate);
      const d = buf.getChannelData(0);
      for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
      const src = c.createBufferSource();
      const gain = c.createGain();
      const filt = c.createBiquadFilter();
      filt.type = "bandpass"; filt.frequency.value = 600;
      src.buffer = buf;
      src.connect(filt); filt.connect(gain); gain.connect(c.destination);
      gain.gain.setValueAtTime(vol, c.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, c.currentTime + decay);
      src.start(); src.stop(c.currentTime + decay);
    } catch (_) {}
  }
  return {
    hit(combo = 1) {
      const freqs = [523, 659, 784, 1047];
      const f = freqs[Math.min(combo - 1, freqs.length - 1)];
      tone(f, "sine", 0.28, 0.18);
      tone(f * 1.5, "sine", 0.12, 0.14, 0.08);
    },
    combo(n) {
      if (n < 2) return;
      [1047, 1319, 1568].forEach((f, i) => tone(f, "sine", 0.22, 0.2, i * 0.06));
    },
    miss() {
      tone(220, "sawtooth", 0.18, 0.14);
      noise(0.1, 0.09);
    },
    tick()       { tone(880,  "sine",   0.06, 0.06); },
    urgentTick() { tone(1100, "square", 0.1,  0.05); },
    win() {
      [523, 659, 784, 1047, 1319].forEach((f, i) =>
        tone(f, "sine", 0.22, 0.32, i * 0.1));
    },
    lose() {
      [380, 280, 180].forEach((f, i) =>
        tone(f, "sawtooth", 0.18, 0.28, i * 0.12));
    },
  };
}

// ─── Prop Draw Functions ──────────────────────────────────────────────────────
function shiftHex(hex, amt) {
  try {
    const n = parseInt(hex.replace("#", ""), 16);
    const clamp = (v) => Math.min(255, Math.max(0, v));
    return `rgb(${clamp((n >> 16) + amt)},${clamp(((n >> 8) & 0xff) + amt)},${clamp((n & 0xff) + amt)})`;
  } catch { return hex; }
}

const PROP_TYPES = [
  { label: "monitor", w: 56, h: 40,
    draw(ctx, x, y, tint) {
      ctx.fillStyle = tint || "#2C2C2A"; ctx.fillRect(x, y, 56, 32);
      ctx.fillStyle = tint ? shiftHex(tint, 50) : "#378ADD"; ctx.fillRect(x + 4, y + 3, 48, 22);
      ctx.fillStyle = tint || "#2C2C2A"; ctx.fillRect(x + 21, y + 32, 14, 5);
      ctx.fillStyle = "#5a5a58"; ctx.fillRect(x + 12, y + 37, 32, 3);
    }},
  { label: "plant", w: 38, h: 54,
    draw(ctx, x, y, tint) {
      ctx.fillStyle = tint ? shiftHex(tint, -30) : "#7B5E3A"; ctx.fillRect(x + 11, y + 38, 16, 16);
      ctx.fillStyle = tint || "#3B6D11"; ctx.beginPath(); ctx.ellipse(x + 19, y + 22, 18, 22, 0, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = tint ? shiftHex(tint, -20) : "#27500A";
      ctx.beginPath(); ctx.ellipse(x + 9,  y + 30, 10, 14, -0.4, 0, Math.PI * 2); ctx.fill();
      ctx.beginPath(); ctx.ellipse(x + 28, y + 30, 10, 14,  0.4, 0, Math.PI * 2); ctx.fill();
    }},
  { label: "lamp", w: 32, h: 62,
    draw(ctx, x, y, tint) {
      ctx.fillStyle = "#888780"; ctx.fillRect(x + 14, y + 30, 4, 30); ctx.fillRect(x + 4, y + 58, 24, 4);
      ctx.fillStyle = tint || "#EF9F27";
      ctx.beginPath(); ctx.moveTo(x + 2, y + 30); ctx.lineTo(x + 30, y + 30);
      ctx.lineTo(x + 22, y + 2); ctx.lineTo(x + 10, y + 2); ctx.closePath(); ctx.fill();
    }},
  { label: "chair", w: 48, h: 54,
    draw(ctx, x, y, tint) {
      ctx.fillStyle = tint || "#185FA5";
      ctx.fillRect(x + 4, y + 4,  40, 26);
      ctx.fillRect(x + 4, y + 4,   7, 44);
      ctx.fillRect(x + 37, y + 4,  7, 44);
      ctx.fillRect(x + 4, y + 32, 40, 10);
    }},
  { label: "book", w: 26, h: 38,
    draw(ctx, x, y, tint) {
      ctx.fillStyle = tint || "#993C1D"; ctx.fillRect(x, y, 26, 38);
      ctx.fillStyle = tint ? "rgba(255,255,255,0.55)" : "#fff"; ctx.fillRect(x + 3, y + 3, 20, 32);
      ctx.fillStyle = "#D3D1C7"; for (let i = 0; i < 5; i++) ctx.fillRect(x + 5, y + 7 + i * 5, 14, 2);
    }},
  { label: "mug", w: 30, h: 32,
    draw(ctx, x, y, tint) {
      ctx.fillStyle = tint || "#534AB7"; ctx.fillRect(x, y + 4, 22, 28); ctx.fillRect(x, y, 22, 8);
      ctx.strokeStyle = tint || "#534AB7"; ctx.lineWidth = 3;
      ctx.beginPath(); ctx.arc(x + 26, y + 16, 8, -0.4, 1.2); ctx.stroke(); ctx.lineWidth = 1;
      ctx.fillStyle = "rgba(255,255,255,0.25)"; ctx.fillRect(x + 4, y + 12, 14, 2);
    }},
  { label: "keyboard", w: 62, h: 22,
    draw(ctx, x, y, tint) {
      ctx.fillStyle = tint || "#444441"; ctx.fillRect(x, y, 62, 22);
      for (let r = 0; r < 2; r++)
        for (let k = 0; k < 10; k++) { ctx.fillStyle = "#888780"; ctx.fillRect(x + 4 + k * 6, y + 3 + r * 9, 5, 5); }
    }},
  { label: "box", w: 44, h: 42,
    draw(ctx, x, y, tint) {
      ctx.fillStyle = tint || "#EF9F27"; ctx.fillRect(x, y, 44, 42);
      ctx.strokeStyle = tint ? shiftHex(tint, -40) : "#BA7517"; ctx.lineWidth = 1.5;
      ctx.beginPath(); ctx.moveTo(x + 22, y); ctx.lineTo(x + 22, y + 42); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(x, y + 14); ctx.lineTo(x + 44, y + 14); ctx.stroke(); ctx.lineWidth = 1;
    }},
  { label: "clock", w: 36, h: 36,
    draw(ctx, x, y, tint) {
      ctx.fillStyle = tint || "#D3D1C7";
      ctx.beginPath(); ctx.arc(x + 18, y + 18, 18, 0, Math.PI * 2); ctx.fill();
      ctx.strokeStyle = "#444441"; ctx.lineWidth = 2;
      ctx.beginPath(); ctx.arc(x + 18, y + 18, 18, 0, Math.PI * 2); ctx.stroke();
      ctx.lineWidth = 2.5; ctx.strokeStyle = "#2C2C2A";
      ctx.beginPath(); ctx.moveTo(x + 18, y + 18); ctx.lineTo(x + 18, y + 7); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(x + 18, y + 18); ctx.lineTo(x + 27, y + 18); ctx.stroke();
      ctx.lineWidth = 1;
    }},
  { label: "trash", w: 30, h: 40,
    draw(ctx, x, y, tint) {
      ctx.fillStyle = tint || "#888780"; ctx.fillRect(x + 3, y + 8, 24, 32); ctx.fillRect(x, y + 4, 30, 6);
      ctx.fillStyle = tint ? shiftHex(tint, -20) : "#5F5E5A"; ctx.fillRect(x + 10, y, 10, 6);
      ctx.strokeStyle = "#5F5E5A"; ctx.lineWidth = 1.5;
      for (let i = 0; i < 3; i++) { ctx.beginPath(); ctx.moveTo(x + 9 + i * 6, y + 12); ctx.lineTo(x + 9 + i * 6, y + 36); ctx.stroke(); }
      ctx.lineWidth = 1;
    }},
  { label: "bottle", w: 20, h: 46,
    draw(ctx, x, y, tint) {
      ctx.fillStyle = tint || "#1D9E75"; ctx.fillRect(x + 5, y + 14, 10, 32);
      ctx.beginPath(); ctx.moveTo(x + 5, y + 14); ctx.lineTo(x + 8, y + 2); ctx.lineTo(x + 12, y + 2); ctx.lineTo(x + 15, y + 14); ctx.closePath(); ctx.fill();
      ctx.fillStyle = "rgba(255,255,255,0.18)"; ctx.fillRect(x + 7, y + 18, 3, 20);
    }},
  { label: "painting", w: 48, h: 38,
    draw(ctx, x, y, tint) {
      ctx.fillStyle = "#7B5E3A"; ctx.fillRect(x, y, 48, 38);
      ctx.fillStyle = tint || "#C8DAEC"; ctx.fillRect(x + 4, y + 4, 40, 30);
      ctx.fillStyle = tint ? shiftHex(tint, 30) : "#378ADD";
      ctx.beginPath(); ctx.arc(x + 24, y + 19, 10, 0, Math.PI * 2); ctx.fill();
    }},
];

// ─── Difficulty Config ────────────────────────────────────────────────────────
const DIFFS = {
  easy:   { impostors: 3, decoys: 2, time: 45, pulseAmt: 2.2,  pulseEvery: 3.0, alpha: 0.78, missLimit: 7, label: "Easy",   color: "#1D9E75", desc: "3 impostors · 7 misses" },
  medium: { impostors: 5, decoys: 3, time: 32, pulseAmt: 1.2,  pulseEvery: 5.0, alpha: 0.88, missLimit: 5, label: "Medium", color: "#EF9F27", desc: "5 impostors · 5 misses" },
  hard:   { impostors: 7, decoys: 4, time: 24, pulseAmt: 0.55, pulseEvery: 7.5, alpha: 0.94, missLimit: 3, label: "Hard",   color: "#E24B4A", desc: "7 impostors · 3 misses" },
};

const randInt   = (a, b) => a + Math.floor(Math.random() * (b - a));
const randFloat = (a, b) => a + Math.random() * (b - a);
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) { const j = randInt(0, i + 1); [a[i], a[j]] = [a[j], a[i]]; }
  return a;
}

const IMP_TINTS = ["#8CA8BE", "#9BAAB6", "#A2B2C2", "#B0BFCC", "#7A9CB5", "#9EB0C0"];

function buildScene(W, H, difficulty) {
  const cfg = DIFFS[difficulty];
  const types = shuffle([...PROP_TYPES]);
  const placed = [];
  const objects = [];
  const total = 18;

  const impSet = new Set();
  while (impSet.size < cfg.impostors) impSet.add(randInt(0, total));

  const decoySet = new Set();
  while (decoySet.size < cfg.decoys) {
    const idx = randInt(0, total);
    if (!impSet.has(idx)) decoySet.add(idx);
  }

  for (let i = 0; i < total; i++) {
    const pt = types[i % types.length];
    let x, y, tries = 0;
    do {
      x = randInt(14, W - pt.w - 14);
      y = randInt(Math.round(H * 0.37), H - pt.h - 14);
      tries++;
    } while (
      placed.some(p => x < p.x + p.w + 12 && x + pt.w > p.x - 12 && y < p.y + p.h + 12 && y + pt.h > p.y - 12)
      && tries < 70
    );
    placed.push({ x, y, w: pt.w, h: pt.h });

    const isImp   = impSet.has(i);
    const isDecoy = decoySet.has(i);

    objects.push({
      x, y, w: pt.w, h: pt.h, type: pt,
      isImp, isDecoy, found: false,
      tint: isImp ? IMP_TINTS[randInt(0, IMP_TINTS.length)] : null,
      pulseTimer:    randFloat(0, cfg.pulseEvery),
      pulseInterval: cfg.pulseEvery + randFloat(-1.2, 1.2),
      pulsing: false, pulseProgress: 0,
      decoyOffset: randFloat(0, Math.PI * 2),
    });
  }
  return objects;
}

// ─── Inline responsive styles via <style> tag ─────────────────────────────────
const STYLES = `
  .gh-root { min-height:100vh; background:#0A0F1C; display:flex; flex-direction:column; align-items:center; justify-content:center; padding:12px; font-family:'Segoe UI',system-ui,sans-serif; color:#fff; position:relative; overflow:hidden; box-sizing:border-box; }
  .gh-wrap { position:relative; z-index:10; width:100%; max-width:720px; box-sizing:border-box; }

  /* ── Header ── */
  .gh-header { display:flex; align-items:center; justify-content:space-between; margin-bottom:10px; gap:8px; }
  .gh-title  { font-size:clamp(16px,5vw,26px); font-weight:700; color:#67E3F9; margin:0; letter-spacing:-0.5px; line-height:1.2; }
  .gh-sub    { font-size:11px; color:rgba(255,255,255,0.32); margin:2px 0 0; }
  .gh-mute   { flex-shrink:0; background:rgba(255,255,255,0.07); border:1px solid rgba(255,255,255,0.12); border-radius:8px; padding:6px 10px; font-size:16px; cursor:pointer; color:rgba(255,255,255,0.7); line-height:1; white-space:nowrap; }

  /* ── HUD: 2×2 on very small screens, 4-col on wider ── */
  .gh-hud { display:grid; grid-template-columns:repeat(4,1fr); gap:6px; margin-bottom:8px; }
  @media(max-width:360px){ .gh-hud { grid-template-columns:repeat(2,1fr); } }
  .gh-stat { background:rgba(255,255,255,0.05); border:1px solid rgba(255,255,255,0.08); border-radius:10px; padding:6px 4px; text-align:center; min-width:0; }
  .gh-stat-lbl { font-size:9px; color:rgba(255,255,255,0.32); text-transform:uppercase; letter-spacing:.07em; margin-bottom:2px; }
  .gh-stat-val { font-size:clamp(12px,3.5vw,20px); font-weight:700; transition:color .3s; line-height:1.2; }

  /* ── Difficulty row: wraps naturally, timer bar takes remaining space ── */
  .gh-diffrow { display:flex; align-items:center; gap:6px; margin-bottom:8px; flex-wrap:wrap; }
  .gh-diff-btn { padding:5px 10px; border-radius:7px; font-size:11px; font-weight:600; border:1px solid; transition:all .2s; white-space:nowrap; flex-shrink:0; }
  .gh-timerbar-wrap { flex:1; min-width:48px; height:5px; background:rgba(255,255,255,0.08); border-radius:4px; overflow:hidden; }
  .gh-timerbar-fill { height:100%; border-radius:4px; transition:width 1s linear, background .3s; }

  /* ── Canvas wrapper ── */
  .gh-canvas-wrap { width:100%; position:relative; border-radius:14px; overflow:hidden; border:1px solid rgba(255,255,255,0.1); }
  .gh-canvas { display:block; width:100%; height:auto; touch-action:none; user-select:none; }

  /* ── Hint ── */
  .gh-hint { text-align:center; font-size:12px; color:rgba(255,255,255,0.32); margin-top:8px; min-height:18px; }

  /* ── Combo badge (absolute inside gh-wrap) ── */
  .gh-combo-badge { position:absolute; top:0; right:0; background:#FFD700; color:#0A0F1C; font-weight:700; font-size:12px; border-radius:8px; padding:4px 10px; pointer-events:none; }

  /* ── Overlay ── */
  .gh-overlay { position:absolute; inset:0; background:rgba(10,15,28,0.78); display:flex; align-items:center; justify-content:center; z-index:20; padding:12px; box-sizing:border-box; overflow-x:hidden }
  .gh-card { background:rgba(12,20,40,0.97); border:1px solid rgba(103,227,249,0.16); border-radius:16px; padding:20px 18px 18px; text-align:center; width:100%; max-width:300px; color:#fff; box-sizing:border-box; }
  .gh-card h2 { font-size:clamp(15px,4vw,18px); font-weight:700; color:#67E3F9; margin:0 0 10px; }
  .gh-card ul { font-size:12px; color:rgba(255,255,255,0.6); line-height:1.9; margin:0 0 14px; text-align:left; padding-left:16px; }
  .gh-card-sub { font-size:11px; color:rgba(255,255,255,0.3); margin-bottom:12px; }

  /* ── Overlay button rows: wrap on small screens ── */
  .gh-btn-row { display:flex; gap:8px; justify-content:center; flex-wrap:wrap; }
  .gh-btn-pri { background:#67E3F9; color:#0A0F1C; border:none; border-radius:8px; padding:9px 16px; font-size:13px; font-weight:700; cursor:pointer; white-space:nowrap; }
  .gh-btn-sec { background:transparent; color:#fff; border:1px solid rgba(255,255,255,0.22); border-radius:8px; padding:9px 14px; font-size:13px; cursor:pointer; white-space:wrap; }
  .gh-diff-start { border:none; border-radius:8px; padding:9px 16px; font-size:12px; font-weight:700; cursor:pointer; white-space:nowrap; }

  /* ── End stats ── */
  .gh-end-stats { font-size:12px; color:rgba(255,255,255,0.55); line-height:2.1; margin-bottom:14px; }

  /* ── Combo burst ── */
  .gh-burst { position:absolute; top:38%; left:50%; transform:translateX(-50%); pointer-events:none; font-size:clamp(15px,4.5vw,24px); font-weight:700; color:#FFD700; white-space:nowrap; text-shadow:0 0 16px rgba(255,215,0,0.5); }
`;

// ─── Game Component ───────────────────────────────────────────────────────────
const Game = () => {
  const canvasRef = useRef(null);
  const wrapRef   = useRef(null);
  const animRef   = useRef(null);
  const timerRef  = useRef(null);
  const globalT   = useRef(0);
  const flashes   = useRef([]);
  const objects   = useRef([]);
  const stateRef  = useRef("idle");
  const scoreR    = useRef(0);
  const foundR    = useRef(0);
  const comboR    = useRef(0);
  const missesR   = useRef(0);
  const timeLeftR = useRef(45);
  const audio     = useRef(null);
  const muteR     = useRef(false);
  const diffR     = useRef("easy");

  const [gameState,  setGameState]  = useState("idle");
  const [diff,       setDiff]       = useState("easy");
  const [score,      setScore]      = useState(0);
  const [found,      setFound]      = useState(0);
  const [timeLeft,   setTimeLeft]   = useState(45);
  const [totalImp,   setTotalImp]   = useState(3);
  const [misses,     setMisses]     = useState(0);
  const [combo,      setCombo]      = useState(0);
  const [hint,       setHint]       = useState("Impostors pulse briefly — blink and you'll miss it!");
  const [canvasSize, setCanvasSize] = useState({ w: 700, h: 430 });
  const [endResult,  setEndResult]  = useState(null);
  const [muted,      setMuted]      = useState(false);
  const [comboBurst, setComboBurst] = useState(null);

  useEffect(() => { audio.current = createAudio(); }, []);
  function sfx(fn, ...args) { if (!muteR.current && audio.current) audio.current[fn](...args); }

  useEffect(() => { diffR.current = diff; }, [diff]);

  // ─── Responsive canvas ──────────────────────────────────────────────────────
  useEffect(() => {
    function resize() {
      if (!wrapRef.current) return;
      const w = Math.min(Math.floor(wrapRef.current.getBoundingClientRect().width), 700);
      const h = Math.max(Math.round(w * 0.62), 220);
      setCanvasSize({ w, h });
    }
    resize();
    const ro = new ResizeObserver(resize);
    if (wrapRef.current) ro.observe(wrapRef.current);
    return () => ro.disconnect();
  }, []);

  // ─── Draw ───────────────────────────────────────────────────────────────────
  const drawFrame = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const { w, h } = canvasSize;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, w, h);

    ctx.fillStyle = "#C8DAEC"; ctx.fillRect(0, 0, w, Math.round(h * 0.54));
    ctx.fillStyle = "#B5C8D4"; ctx.fillRect(0, Math.round(h * 0.54), w, h);
    ctx.fillStyle = "rgba(0,0,0,0.06)"; ctx.fillRect(0, Math.round(h * 0.52), w, 8);
    ctx.fillStyle = "#C4B9AA"; ctx.fillRect(0, h - 10, w, 10);

    const wx = Math.round(w * 0.73), wy = 16, ww = Math.round(w * 0.19), wh = Math.round(h * 0.26);
    ctx.fillStyle = "#A8CCE8"; ctx.fillRect(wx, wy, ww, wh);
    ctx.strokeStyle = "#7FA8C4"; ctx.lineWidth = 2;
    ctx.strokeRect(wx, wy, ww, wh);
    ctx.beginPath(); ctx.moveTo(wx + ww / 2, wy); ctx.lineTo(wx + ww / 2, wy + wh); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(wx, wy + wh / 2); ctx.lineTo(wx + ww, wy + wh / 2); ctx.stroke();

    ctx.fillStyle = "#7B5E3A"; ctx.fillRect(Math.round(w * 0.07), 18, Math.round(w * 0.17), Math.round(h * 0.23));
    ctx.fillStyle = "#DDEAF5"; ctx.fillRect(Math.round(w * 0.08), 22, Math.round(w * 0.15), Math.round(h * 0.19));

    const cfg = DIFFS[diffR.current];
    const sorted = [...objects.current].sort((a, b) => a.y - b.y);
    globalT.current += 0.016;

    for (const o of sorted) {
      if (o.found) continue;
      o.pulseTimer += 0.016;
      if (o.isImp && o.pulseTimer >= o.pulseInterval) {
        o.pulsing = true; o.pulseProgress = 0; o.pulseTimer = 0;
        o.pulseInterval = cfg.pulseEvery + randFloat(-1.0, 1.0);
      }
      if (o.pulsing) {
        o.pulseProgress += 0.07;
        if (o.pulseProgress >= Math.PI) { o.pulsing = false; o.pulseProgress = 0; }
      }
      let offX = 0, offY = 0;
      if (o.isImp && o.pulsing) {
        const s = Math.sin(o.pulseProgress);
        offX = Math.cos(o.pulseProgress * 1.3) * cfg.pulseAmt * s;
        offY = s * cfg.pulseAmt * 0.5;
      } else if (o.isDecoy) {
        offX = Math.sin(globalT.current * 1.4 + o.decoyOffset) * 1.6;
        offY = Math.cos(globalT.current * 1.0 + o.decoyOffset) * 0.8;
      }
      ctx.save();
      ctx.globalAlpha = o.isImp ? cfg.alpha : 1.0;
      ctx.translate(o.x + o.w / 2 + offX, o.y + o.h / 2 + offY);
      o.type.draw(ctx, -o.w / 2, -o.h / 2, o.tint);
      ctx.restore();
    }

    flashes.current = flashes.current.filter(f => {
      ctx.save(); ctx.globalAlpha = f.a;
      if (f.hit) {
        ctx.strokeStyle = "#1D9E75"; ctx.lineWidth = 2.5;
        ctx.beginPath(); ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2); ctx.stroke();
        ctx.strokeStyle = "rgba(29,158,117,0.4)"; ctx.lineWidth = 6;
        ctx.beginPath(); ctx.arc(f.x, f.y, f.r * 0.5, 0, Math.PI * 2); ctx.stroke();
      } else {
        ctx.strokeStyle = "#E24B4A"; ctx.lineWidth = 2.5;
        ctx.beginPath(); ctx.moveTo(f.x - 10, f.y - 10); ctx.lineTo(f.x + 10, f.y + 10); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(f.x + 10, f.y - 10); ctx.lineTo(f.x - 10, f.y + 10); ctx.stroke();
      }
      ctx.restore();
      f.r += 2; f.a -= 0.065;
      return f.a > 0;
    });
  }, [canvasSize]);

  const animLoop = useCallback(() => {
    drawFrame();
    animRef.current = requestAnimationFrame(animLoop);
  }, [drawFrame]);

  // ─── Start ──────────────────────────────────────────────────────────────────
  const startGame = useCallback((overrideDiff) => {
    const d = overrideDiff || diffR.current;
    const cfg = DIFFS[d];
    const { w, h } = canvasSize;
    const objs = buildScene(w, h, d);
    objects.current = objs; flashes.current = []; globalT.current = 0;
    scoreR.current = 0; foundR.current = 0; comboR.current = 0;
    missesR.current = 0; timeLeftR.current = cfg.time;
    stateRef.current = "playing";

    setTotalImp(objs.filter(o => o.isImp).length);
    setFound(0); setScore(0); setMisses(0); setCombo(0);
    setTimeLeft(cfg.time);
    setHint("Impostors pulse briefly — blink and you'll miss it!");
    setGameState("playing"); setEndResult(null); setComboBurst(null);

    if (animRef.current) cancelAnimationFrame(animRef.current);
    animRef.current = requestAnimationFrame(animLoop);

    clearInterval(timerRef.current);
    let t = cfg.time;
    timerRef.current = setInterval(() => {
      t--; timeLeftR.current = t; setTimeLeft(t);
      if (t <= 5 && t > 0) sfx("urgentTick");
      else if (t > 5 && t % 10 === 0) sfx("tick");
      if (t <= 0) { clearInterval(timerRef.current); doEndGame(false); }
    }, 1000);
  }, [canvasSize, animLoop]); // eslint-disable-line

  // ─── End ────────────────────────────────────────────────────────────────────
  const doEndGame = useCallback((won) => {
    clearInterval(timerRef.current);
    cancelAnimationFrame(animRef.current);
    stateRef.current = "over";
    const objs = objects.current;
    const fnd   = objs.filter(o => o.isImp && o.found).length;
    const total = objs.filter(o => o.isImp).length;
    const bonus = won ? Math.round(timeLeftR.current * 6) : 0;
    const final = scoreR.current + bonus;
    won ? sfx("win") : sfx("lose");
    setEndResult({ won, score: scoreR.current, bonus, final, found: fnd, total, misses: missesR.current });
    setGameState("over");
  }, []); // eslint-disable-line

  // ─── Interaction ────────────────────────────────────────────────────────────
  const handleInteraction = useCallback((clientX, clientY) => {
    if (stateRef.current !== "playing") return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect  = canvas.getBoundingClientRect();
    const scale = canvasSize.w / rect.width;
    const mx = (clientX - rect.left) * scale;
    const my = (clientY - rect.top)  * scale;
    const cfg = DIFFS[diffR.current];

    let hit = false;
    for (const o of objects.current) {
      if (!o.isImp || o.found) continue;
      const offX = (o.pulsing) ? Math.cos(o.pulseProgress * 1.3) * cfg.pulseAmt * Math.sin(o.pulseProgress) : 0;
      const offY = (o.pulsing) ? Math.sin(o.pulseProgress) * cfg.pulseAmt * 0.5 : 0;
      const cx = o.x + o.w / 2 + offX, cy = o.y + o.h / 2 + offY;
      const pad = Math.max(10, Math.min(o.w, o.h) * 0.2);
      if (mx >= cx - o.w / 2 - pad && mx <= cx + o.w / 2 + pad &&
          my >= cy - o.h / 2 - pad && my <= cy + o.h / 2 + pad) {
        o.found = true; hit = true;
        comboR.current += 1; foundR.current += 1;
        const c = comboR.current;
        const earned = 15 + Math.round(timeLeftR.current * 2) + (c >= 3 ? c * 10 : 0);
        scoreR.current += earned;
        setScore(scoreR.current); setFound(foundR.current); setCombo(c);
        sfx("hit", c);
        if (c >= 2) { sfx("combo", c); setComboBurst({ n: c, key: Date.now() }); }
        flashes.current.push({ x: mx, y: my, r: 8, a: 1, hit: true });
        const left = objects.current.filter(o2 => o2.isImp && !o2.found).length;
        setHint(c >= 3 ? `COMBO x${c}! +${earned} pts · ${left} left` : `+${earned} pts! ${left} impostor${left !== 1 ? "s" : ""} left`);
        if (left === 0) setTimeout(() => doEndGame(true), 120);
        break;
      }
    }
    if (!hit) {
      comboR.current = 0; setCombo(0);
      missesR.current += 1; setMisses(missesR.current);
      scoreR.current = Math.max(0, scoreR.current - 5); setScore(scoreR.current);
      sfx("miss");
      flashes.current.push({ x: mx, y: my, r: 8, a: 1, hit: false });
      const left = cfg.missLimit - missesR.current;
      setHint(left <= 0 ? "No chances left!" : `Miss! −5 pts · ${left} chance${left !== 1 ? "s" : ""} left`);
      if (missesR.current >= cfg.missLimit) setTimeout(() => doEndGame(false), 120);
    }
  }, [canvasSize, doEndGame]);

  const onCanvasClick = (e) => handleInteraction(e.clientX, e.clientY);
  const onCanvasTouch = (e) => { e.preventDefault(); const t = e.touches[0]; handleInteraction(t.clientX, t.clientY); };

  useEffect(() => () => { clearInterval(timerRef.current); cancelAnimationFrame(animRef.current); }, []);

  const cfg      = DIFFS[diff];
  const timePct  = Math.round((timeLeft / cfg.time) * 100);
  const tColor   = timePct > 50 ? "#1D9E75" : timePct > 25 ? "#EF9F27" : "#E24B4A";
  const missLeft = cfg.missLimit - misses;

  return (
    <>
      <style>{STYLES}</style>
      <div className="gh-root">
        <StarField />
        <div className="gh-wrap">

          {/* Header */}
          <div className="gh-header">
            <div style={{ minWidth: 0 }}>
              <h1 className="gh-title">Prop Hunt</h1>
              <p className="gh-sub">Catch impostors hiding in plain sight</p>
            </div>
            <button className="gh-mute"
              onClick={() => { muteR.current = !muteR.current; setMuted(m => !m); }}
              title={muted ? "Unmute" : "Mute"}>
              {muted ? "🔇" : "🔊"}
            </button>
          </div>

          {/* HUD — 4 cols on ≥361px, 2×2 on tiny screens */}
          <div className="gh-hud">
            {[
              { label: "Score",   val: score,   col: "#fff" },
              { label: "Found",   val: `${found}/${totalImp}`, col: "#67E3F9" },
              { label: "Time",    val: timeLeft, col: tColor },
              { label: "Chances", val: gameState === "playing" ? `${missLeft}/${cfg.missLimit}` : "—",
                col: missLeft <= 1 && gameState === "playing" ? "#E24B4A" : "#fff" },
            ].map(s => (
              <div key={s.label} className="gh-stat">
                <div className="gh-stat-lbl">{s.label}</div>
                <div className="gh-stat-val" style={{ color: s.col }}>{s.val}</div>
              </div>
            ))}
          </div>

          {/* Difficulty buttons + timer bar */}
          <div className="gh-diffrow">
            {Object.entries(DIFFS).map(([key, d]) => (
              <button key={key} className="gh-diff-btn"
                onClick={() => { if (gameState !== "playing") { setDiff(key); diffR.current = key; } }}
                title={d.desc}
                style={{
                  background: diff === key ? d.color : "transparent",
                  borderColor: diff === key ? d.color : "rgba(255,255,255,0.16)",
                  color: diff === key ? "#fff" : "rgba(255,255,255,0.5)",
                  cursor: gameState === "playing" ? "not-allowed" : "pointer",
                  opacity: gameState === "playing" ? 0.55 : 1,
                }}>
                {d.label}
              </button>
            ))}
            <div className="gh-timerbar-wrap">
              <div className="gh-timerbar-fill" style={{ width: `${timePct}%`, background: tColor }} />
            </div>
          </div>

          {/* Canvas */}
          <div ref={wrapRef} className="gh-canvas-wrap"
            style={{ cursor: gameState === "playing" ? "crosshair" : "default" }}>
            <canvas ref={canvasRef} className="gh-canvas"
              width={canvasSize.w} height={canvasSize.h}
              onClick={onCanvasClick} onTouchStart={onCanvasTouch} />

            {/* Combo burst */}
            <AnimatePresence>
              {comboBurst && (
                <motion.div key={comboBurst.key} className="gh-burst"
                  initial={{ scale: 0.4, opacity: 1, y: 0 }}
                  animate={{ scale: 1.5, opacity: 0, y: -70 }}
                  transition={{ duration: 0.65, ease: "easeOut" }}
                  onAnimationComplete={() => setComboBurst(null)}>
                  COMBO x{comboBurst.n}!
                </motion.div>
              )}
            </AnimatePresence>

            {/* Idle overlay */}
            <AnimatePresence>
              {gameState === "idle" && (
                <div className="gh-overlay">
                  <motion.div className="gh-card"
                    initial={{ scale: 0.88, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}>
                    <div style={{ fontSize: 34, marginBottom: 8 }}>🕵️</div>
                    <h2>How to Play</h2>
                    <ul>
                      <li>Impostors <strong style={{ color: "#fff" }}>pulse briefly</strong> — subtle on hard</li>
                      <li><strong style={{ color: "#EF9F27" }}>Decoys</strong> move constantly to fool you</li>
                      <li>Chain hits for <strong style={{ color: "#FFD700" }}>COMBO bonuses</strong></li>
                      <li>Too many misses = <strong style={{ color: "#E24B4A" }}>game over</strong></li>
                    </ul>
                    <p className="gh-card-sub">Choose difficulty to start:</p>
                    <div className="gh-btn-row">
                      {Object.entries(DIFFS).map(([key, d]) => (
                        <button key={key} className="gh-diff-start"
                          style={{ background: d.color, color: "#fff" }}
                          onClick={() => { setDiff(key); diffR.current = key; setTimeout(() => startGame(key), 10); }}>
                          {d.label}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                </div>
              )}
            </AnimatePresence>

            {/* Game Over overlay */}
            <AnimatePresence>
              {gameState === "over" && endResult && (
                <div className="gh-overlay">
                  <motion.div className="gh-card"
                    initial={{ scale: 0.88, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}>
                    <div style={{ fontSize: 34, marginBottom: 8 }}>{endResult.won ? "🎉" : "💀"}</div>
                    <h2 style={{ color: endResult.won ? "#1D9E75" : "#E24B4A" }}>
                      {endResult.won ? "All Caught!" : "Game Over"}
                    </h2>
                    <div className="gh-end-stats">
                      <div>Found <strong style={{ color: "#fff" }}>{endResult.found}/{endResult.total}</strong></div>
                      <div>Misses <strong style={{ color: "#fff" }}>{endResult.misses}</strong></div>
                      <div>Score&nbsp;
                        <strong style={{ color: "#fff" }}>{endResult.score}</strong>
                        {endResult.won && endResult.bonus > 0 && (
                          <> + <span style={{ color: "#1D9E75" }}>+{endResult.bonus}</span> = <strong style={{ color: "#67E3F9", fontSize: 15 }}>{endResult.final}</strong></>
                        )}
                      </div>
                    </div>
                    <div className="gh-btn-row">
                      <button className="gh-btn-pri" onClick={() => startGame()}>Play Again</button>
                      {endResult.won && diff !== "hard" && (
                        <button className="gh-btn-sec" onClick={() => {
                          const nxt = diff === "easy" ? "medium" : "hard";
                          setDiff(nxt); diffR.current = nxt;
                          setTimeout(() => startGame(nxt), 20);
                        }}>
                          {diff === "easy" ? "Try Medium" : "Try Hard"} ▶
                        </button>
                      )}
                    </div>
                  </motion.div>
                </div>
              )}
            </AnimatePresence>
          </div>

          {/* Hint */}
          <p className="gh-hint">{hint}</p>

          {/* Combo badge */}
          <AnimatePresence>
            {combo >= 2 && gameState === "playing" && (
              <motion.div key={combo} className="gh-combo-badge"
                initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
                x{combo} COMBO
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </div>
    </>
  );
};

// ─── Star Background ──────────────────────────────────────────────────────────
const STARS = Array.from({ length: 34 }, (_, i) => ({
  top:  `${(i * 37.3) % 100}%`,
  left: `${(i * 53.7) % 100}%`,
  dur:  2 + (i % 5) * 0.55,
}));

const StarField = () => (
  <>
    {STARS.map((s, i) => (
      <motion.div key={i}
        style={{ position: "absolute", top: s.top, left: s.left, width: 2, height: 2, borderRadius: "50%", background: "#fff", pointerEvents: "none" }}
        animate={{ opacity: [0.12, 0.85, 0.12] }}
        transition={{ duration: s.dur, repeat: Infinity }}
      />
    ))}
  </>
);

export default Game;