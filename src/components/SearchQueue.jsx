import { useEffect, useState } from "react";

function SearchQueue({ steps, playing, onPause }) {
  const linear = steps?.linear || [];
  const binary = steps?.binary || [];

  const [lIndex, setLIndex] = useState(0);
  const [bIndex, setBIndex] = useState(0);

  // RESET WHEN NEW RUN STARTS
  useEffect(() => {
    setLIndex(0);
    setBIndex(0);
  }, [steps]);

  // ANIMATION ENGINE (CONTROLLED EXTERNALLY)
  useEffect(() => {
    if (!playing) return;

    const timer = setInterval(() => {
      setLIndex((prev) =>
        prev < linear.length - 1 ? prev + 1 : prev
      );

      setBIndex((prev) =>
        prev < binary.length - 1 ? prev + 1 : prev
      );
    }, 600);

    return () => clearInterval(timer);
  }, [playing, linear.length, binary.length]);

  // AUTO STOP (optional pause trigger)
  useEffect(() => {
    const doneLinear = lIndex >= linear.length - 1;
    const doneBinary = bIndex >= binary.length - 1;

    if (playing && doneLinear && doneBinary) {
      onPause?.();
    }
  }, [lIndex, bIndex, playing, linear.length, binary.length, onPause]);

  const renderTrack = (data, index, title, color) => (
    <div className="viz-card">
      <h3>{title}</h3>

      <div className="viz-track">
        {data.length === 0 ? (
          <div className="viz-step empty">No steps available</div>
        ) : (
          data.map((val, i) => {
            const isActive = i === index;
            const isDone = i < index;

            return (
              <div
                key={i}
                className={`viz-step ${color} ${isDone ? "done" : ""} ${
                  isActive ? "active" : ""
                }`}
              >
                <span className="pointer">{isActive ? "👈 " : ""}</span>
                Check → {val}
              </div>
            );
          })
        )}
      </div>
    </div>
  );

  return (
    <div className="viz-box">
      <div className="viz-header">
        <h2>⚔ Search Battle Visualization</h2>
      </div>

      <div className="viz-grid">
        {renderTrack(linear, lIndex, "🔵 Linear Scout", "linear")}
        {renderTrack(binary, bIndex, "🟣 Binary Sniper", "binary")}
      </div>
    </div>
  );
}

export default SearchQueue;