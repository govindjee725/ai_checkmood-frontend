import { Brain } from "lucide-react";

export default function Navbar() {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 bg-white/10 backdrop-blur-lg border border-white/10 rounded-3xl px-6 py-4">
      <div className="flex items-center gap-3">
        <div className="p-3 bg-cyan-500 rounded-2xl">
          <Brain />
        </div>

        <div>
          <h1 className="text-3xl font-bold text-white">
            MindTrack AI
          </h1>
          <p className="text-slate-300 text-sm">
            Premium Mental Wellness
          </p>
        </div>
      </div>

      <div className="text-sm text-slate-300">
        Journal • Analyze • Heal
      </div>
    </div>
  );
}