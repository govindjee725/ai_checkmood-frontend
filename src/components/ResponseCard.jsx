export default function ResponseCard({ result }) {
  return (
    <div className="bg-white/10 backdrop-blur-lg border border-white/10 p-6 rounded-3xl">
      <h2 className="text-2xl font-semibold mb-3 text-white">
        💙 AI Guidance
      </h2>

      <p className="text-slate-200 leading-8 text-lg">
        {result.response}
      </p>
    </div>
  );
}