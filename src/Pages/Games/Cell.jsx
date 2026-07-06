export default function Cell({
  value,
  ghost,
  valid,
}) {
  const filled = value !== null;

  return (
    <div
      className={`
        relative
        w-8
        h-8
        sm:w-10
        sm:h-10
        md:w-12
        md:h-12
        rounded-xl
        transition-all
        duration-150
        border

        ${
          filled
            ? ""
            : "bg-[#101827] border-[#1F2937]"
        }

        ${
          ghost
            ? valid
              ? "border-cyan-400 bg-cyan-500/20"
              : "border-red-400 bg-red-500/20"
            : ""
        }
      `}
      style={
        filled
          ? {
              background: value.color,
              borderColor: value.color,
              boxShadow: `0 0 16px ${value.color}`,
            }
          : undefined
      }
    >
      {filled && (
        <div
          className="
            absolute
            inset-0
            rounded-xl
            bg-white/10
          "
        />
      )}
    </div>
  );
}