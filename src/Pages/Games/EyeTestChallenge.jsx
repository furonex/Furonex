import React, { useState, useEffect } from "react";

const visionQuestions = [
  {
    text: "F P T O Z",
    options: [
      "F P T O Z",
      "F P T O X",
      "F P D O Z",
      "E P T O Z",
    ],
    answer: "F P T O Z",
    points: 10,
  },
  {
    text: "E F P T O Z",
    options: [
      "E F P T O Z",
      "E F P D O Z",
      "E P P T O Z",
      "F F P T O Z",
    ],
    answer: "E F P T O Z",
    points: 10,
  },
];

export default function EyeTestChallenge() {
  const [screen, setScreen] = useState("welcome");

  const [score, setScore] = useState(0);

  const [visionIndex, setVisionIndex] = useState(0);

  const [reactionStart, setReactionStart] = useState(null);
  const [reactionTime, setReactionTime] = useState(null);

  const [reactionReady, setReactionReady] = useState(false);

  const [colorAnswer, setColorAnswer] = useState("");

  const [finalScore, setFinalScore] = useState(0);

  const currentQuestion = visionQuestions[visionIndex];

  // -------------------------
  // Vision Test
  // -------------------------

  const handleVisionAnswer = (option) => {
    if (option === currentQuestion.answer) {
      setScore((prev) => prev + currentQuestion.points);
    }

    if (visionIndex < visionQuestions.length - 1) {
      setVisionIndex((prev) => prev + 1);
    } else {
      setScreen("reaction");
    }
  };

  // -------------------------
  // Reaction Test
  // -------------------------

  useEffect(() => {
    if (screen !== "reaction") return;

    const delay = Math.floor(Math.random() * 3000) + 2000;

    const timer = setTimeout(() => {
      setReactionReady(true);
      setReactionStart(Date.now());
    }, delay);

    return () => clearTimeout(timer);
  }, [screen]);

  const handleReactionClick = () => {
    if (!reactionReady) return;

    const result = Date.now() - reactionStart;

    setReactionTime(result);

    if (result < 250) {
      setScore((prev) => prev + 30);
    } else if (result < 400) {
      setScore((prev) => prev + 20);
    } else {
      setScore((prev) => prev + 10);
    }

    setScreen("color");
  };

  // -------------------------
  // Color Test
  // -------------------------

  const submitColorTest = () => {
    if (colorAnswer === "12") {
      setScore((prev) => prev + 30);
    }

    const total = score + (colorAnswer === "12" ? 30 : 0);

    setFinalScore(total);

    const bestScore = localStorage.getItem("eye_high_score");

    if (!bestScore || total > Number(bestScore)) {
      localStorage.setItem("eye_high_score", total);
    }

    setScreen("result");
  };

  // -------------------------
  // Welcome
  // -------------------------

  if (screen === "welcome") {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center p-6">
        <div className="max-w-lg w-full bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 text-center text-white">
          <h1 className="text-4xl font-bold mb-4">
            👁 Eye Test Challenge
          </h1>

          <p className="text-gray-300 mb-8">
            Test your vision, reflexes and color detection skills.
          </p>

          <button
            onClick={() => setScreen("vision")}
            className="bg-cyan-500 hover:bg-cyan-600 px-8 py-4 rounded-xl font-semibold transition"
          >
            Start Challenge
          </button>
        </div>
      </div>
    );
  }

  // -------------------------
  // Vision Screen
  // -------------------------

  if (screen === "vision") {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center p-6">
        <div className="max-w-xl w-full bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 text-white">

          <div className="mb-6">
            <div className="w-full h-3 bg-slate-700 rounded-full">
              <div
                className="h-3 bg-cyan-500 rounded-full"
                style={{
                  width: `${
                    ((visionIndex + 1) /
                      visionQuestions.length) *
                    100
                  }%`,
                }}
              />
            </div>
          </div>

          <h2 className="text-xl mb-3">
            Level {visionIndex + 1}
          </h2>

          <div className="text-center text-5xl font-bold tracking-widest mb-8">
            {currentQuestion.text}
          </div>

          <div className="grid gap-3">
            {currentQuestion.options.map((option) => (
              <button
                key={option}
                onClick={() =>
                  handleVisionAnswer(option)
                }
                className="bg-slate-800 hover:bg-slate-700 p-4 rounded-xl text-left"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // -------------------------
  // Reaction Test
  // -------------------------

  if (screen === "reaction") {
    return (
      <div
        onClick={handleReactionClick}
        className={`min-h-screen flex items-center justify-center cursor-pointer transition-all ${
          reactionReady
            ? "bg-green-500"
            : "bg-red-500"
        }`}
      >
        <div className="text-center text-white">
          {!reactionReady ? (
            <>
              <h1 className="text-5xl font-bold">
                Wait...
              </h1>

              <p className="mt-4">
                Click when screen turns green
              </p>
            </>
          ) : (
            <h1 className="text-6xl font-bold">
              CLICK!
            </h1>
          )}
        </div>
      </div>
    );
  }

  // -------------------------
  // Color Test
  // -------------------------

  if (screen === "color") {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center p-6">
        <div className="max-w-lg w-full bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 text-white text-center">

          <h2 className="text-3xl font-bold mb-6">
            Color Detection Test
          </h2>

          <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-br from-pink-400 via-orange-300 to-green-400 flex items-center justify-center text-5xl font-bold text-black mb-6">
            12
          </div>

          <p className="mb-4">
            Which number do you see?
          </p>

          <div className="grid grid-cols-2 gap-3">
            {["12", "17", "21", "None"].map(
              (option) => (
                <button
                  key={option}
                  onClick={() =>
                    setColorAnswer(option)
                  }
                  className={`p-3 rounded-xl ${
                    colorAnswer === option
                      ? "bg-cyan-500"
                      : "bg-slate-700"
                  }`}
                >
                  {option}
                </button>
              )
            )}
          </div>

          <button
            onClick={submitColorTest}
            className="mt-6 bg-green-500 px-8 py-3 rounded-xl"
          >
            Submit
          </button>
        </div>
      </div>
    );
  }

  // -------------------------
  // Result Screen
  // -------------------------

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-6">
      <div className="max-w-xl w-full bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 text-center text-white">

        <h1 className="text-5xl font-bold mb-6">
          🎉 Result
        </h1>

        <div className="text-7xl font-bold text-cyan-400 mb-6">
          {finalScore}
        </div>

        <div className="space-y-3 text-lg">
          <p>
            Reaction Time:{" "}
            <strong>{reactionTime} ms</strong>
          </p>

          <p>
            High Score:{" "}
            <strong>
              {localStorage.getItem(
                "eye_high_score"
              ) || 0}
            </strong>
          </p>
        </div>

        <div className="mt-8">
          <a
            href="https://wa.me/919911228912"
            target="_blank"
            rel="noreferrer"
            className="inline-block bg-green-500 px-8 py-4 rounded-xl font-semibold"
          >
            Book a Service Call
          </a>
        </div>

        <button
          onClick={() => window.location.reload()}
          className="mt-4 block mx-auto bg-cyan-500 px-8 py-3 rounded-xl"
        >
          Play Again
        </button>
      </div>
    </div>
  );
}