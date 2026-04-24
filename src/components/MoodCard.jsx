export default function MoodCard({ result }) {
  const moodMap = {
    Happy: "😊",
    Sad: "😔",
    Stress: "😰",
    Angry: "😡",
    Neutral: "😐"
  };

  return (
    <div className="bg-white/10 backdrop-blur-lg border border-white/10 p-6 rounded-3xl">
      <h2 className="text-2xl font-semibold text-white">
        Mood Result
      </h2>

      <div className="mt-4 text-5xl">
        {moodMap[result.mood]}
      </div>

      <p className="mt-3 text-cyan-400 text-2xl font-bold">
        {result.mood}
      </p>

      <p className="text-slate-300">
        Confidence: {Math.round(result.score * 100)}%
      </p>
    </div>
  );
}