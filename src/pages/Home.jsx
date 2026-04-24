import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import JournalForm from "../components/JournalForm";
import MoodCard from "../components/MoodCard";
import ResponseCard from "../components/ResponseCard";
import HistoryList from "../components/HistoryList";

export default function Home() {
  const API = `${import.meta.env.VITE_API_URL}/journal`;

  const [result, setResult] = useState(null);
  const [history, setHistory] = useState([]);

  const fetchHistory = async () => {
    const res = await fetch(`${API}/history`);
    const data = await res.json();
    setHistory(data.data || []);
  };

  useEffect(() => {
    fetchHistory();
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden bg-[#070816] text-white px-4 md:px-10 py-6">

      {/* Glow Background Effects */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/20 blur-[130px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-violet-500/20 blur-[130px] rounded-full"></div>

      <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-pink-500/10 blur-[100px] rounded-full"></div>

      {/* Main Content */}
      <div className="relative z-10">

        {/* Navbar */}
        <Navbar />

        {/* Hero Section */}
        <div className="mt-14 mb-12 max-w-4xl">
          <h2 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight">
            Heal Your Mind <br />

            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">
              With Beautiful AI
            </span>
          </h2>

          <p className="mt-5 text-slate-300 text-lg md:text-xl leading-8 max-w-2xl">
            Journal your emotions, understand your mental state,
            and receive elegant AI-powered emotional guidance
            crafted for your wellness journey.
          </p>

          {/* Mini Badges */}
          <div className="flex flex-wrap gap-3 mt-6">
            <span className="px-4 py-2 rounded-full bg-white/10 border border-white/10 text-sm text-cyan-300">
              AI Mood Detection
            </span>

            <span className="px-4 py-2 rounded-full bg-white/10 border border-white/10 text-sm text-violet-300">
              Smart Guidance
            </span>

            <span className="px-4 py-2 rounded-full bg-white/10 border border-white/10 text-sm text-pink-300">
              Personal Journal
            </span>
          </div>
        </div>

        {/* Main Layout */}
        <div className="grid lg:grid-cols-3 gap-6">

          {/* Left Content */}
          <div className="lg:col-span-2 space-y-6">

            <JournalForm
              setResult={setResult}
              fetchHistory={fetchHistory}
            />

            {result && (
              <>
                <MoodCard result={result} />
                <ResponseCard result={result} />
              </>
            )}
          </div>

          {/* Right Content */}
          <HistoryList
            history={history}
            fetchHistory={fetchHistory}
          />
        </div>

      </div>
    </div>
  );
}