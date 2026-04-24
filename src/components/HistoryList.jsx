import { useState } from "react";

export default function HistoryList({
  history,
  fetchHistory
}) {
  const API = `${import.meta.env.VITE_API_URL}/journal/analyze`;

  const [selected, setSelected] = useState(null);

  const deleteItem = async (id) => {
    await fetch(`${API}/history/${id}`, {
      method: "DELETE"
    });

    fetchHistory();
  };

  return (
    <>
      <div className="bg-slate-900 p-6 rounded-3xl">
        <h2 className="text-2xl font-semibold mb-4">
          History
        </h2>

        <div className="space-y-3 max-h-[600px] overflow-y-auto">
          {history.map((item) => (
            <div
              key={item._id}
              onClick={() => setSelected(item)}
              className="bg-slate-800 p-4 rounded-xl cursor-pointer hover:bg-slate-700 transition"
            >
              <p className="text-sm truncate">
                {item.text}
              </p>

              <div className="flex justify-between mt-3">
                <span className="text-cyan-400">
                  {item.mood}
                </span>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    deleteItem(item._id);
                  }}
                  className="text-red-400"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selected && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4">
          <div className="bg-slate-900 w-full max-w-2xl rounded-3xl p-6 relative">
            
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 text-slate-400"
            >
              ✖
            </button>

            <h2 className="text-2xl font-bold text-cyan-400 mb-4">
              Previous Analysis
            </h2>

            <p className="text-slate-300 mb-4">
              {selected.text}
            </p>

            <p className="text-xl font-semibold mb-2">
              Mood: {selected.mood}
            </p>

            <p className="text-slate-400 mb-4">
              Confidence: {Math.round(selected.score * 100)}%
            </p>

            <div className="bg-slate-800 p-4 rounded-2xl">
              <h3 className="font-semibold mb-2">
                AI Guidance
              </h3>

              <p className="text-slate-300 leading-7">
                {selected.response}
              </p>
            </div>

            <p className="text-sm text-slate-500 mt-4">
              {new Date(selected.createdAt).toLocaleString()}
            </p>
          </div>
        </div>
      )}
    </>
  );
}