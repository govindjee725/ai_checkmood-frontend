import { useState } from "react";

export default function JournalForm({ setResult, fetchHistory }) {
  const API = `${import.meta.env.VITE_API_URL}/journal`;

  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);

  const submitHandler = async () => {
    if (!text.trim()) return;

    setLoading(true);

    const res = await fetch(`${API}/analyze`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ text })
    });

    const data = await res.json();

    setResult(data.data);
    setText("");
    fetchHistory();
    setLoading(false);
  };

  return (
    <div className="bg-slate-900 p-6 rounded-3xl">
      <textarea
        rows="6"
        placeholder="How are you feeling today?"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-full bg-slate-800 p-4 rounded-2xl outline-none"
      />

      <button
        onClick={submitHandler}
        className="mt-4 w-full bg-cyan-500 hover:bg-cyan-600 py-3 rounded-xl font-semibold"
      >
        {loading ? "Analyzing..." : "Analyze Mood"}
      </button>
    </div>
  );
}