import "../styles/complexity.css";

function ComplexityLab({ setCurrentPage }) {

  const algorithms = [
    {
      name: "Bubble Knight",
      best: "O(n)",
      worst: "O(n²)",
      space: "O(1)",
      usage: "Small datasets and educational demonstrations.",
      weakness: "Too many swaps slow the fighter."
    },
    {
      name: "Merge Mage",
      best: "O(n log n)",
      worst: "O(n log n)",
      space: "O(n)",
      usage: "Large stable sorting battles.",
      weakness: "Consumes extra memory."
    },
    {
      name: "Quick Assassin",
      best: "O(n log n)",
      worst: "O(n²)",
      space: "O(log n)",
      usage: "Fastest practical arena fighter.",
      weakness: "Bad pivot can destroy performance."
    },
    {
      name: "Linear Scout",
      best: "O(1)",
      worst: "O(n)",
      space: "O(1)",
      usage: "Useful for unsorted datasets.",
      weakness: "Checks one-by-one."
    },
    {
      name: "Binary Sniper",
      best: "O(1)",
      worst: "O(log n)",
      space: "O(1)",
      usage: "Extremely fast searching in sorted arrays.",
      weakness: "Requires sorted battlefield."
    },
    {
      name: "BFS Scout",
      best: "O(V + E)",
      worst: "O(V + E)",
      space: "O(V)",
      usage: "Finds shortest path in unweighted maps.",
      weakness: "Consumes more memory due to queue."
    },
    {
      name: "DFS Explorer",
      best: "O(V + E)",
      worst: "O(V + E)",
      space: "O(V)",
      usage: "Explores deep paths quickly.",
      weakness: "May miss shorter routes."
    },
    {
      name: "GBFS Tracker",
      best: "O(E)",
      worst: "O(E log V)",
      space: "O(V)",
      usage: "Uses heuristics to rush toward the goal.",
      weakness: "Can choose non-optimal paths."
    },
    {
      name: "A* Pathfinder",
      best: "O(E)",
      worst: "O(E log V)",
      space: "O(V)",
      usage: "Most intelligent navigator; balances cost and heuristic.",
      weakness: "Requires heuristic calculations."
    }
  ];

  return (
    <div className="page">

      <button
        className="back-btn"
        onClick={() => setCurrentPage("home")}
      >
        ← Back To Arena
      </button>

      <h1>🧠 COMPLEXITY LAB</h1>

      <div className="complexity-grid">

        {algorithms.map((algo, index) => (
          <div className="complexity-card" key={index}>
            <h2>{algo.name}</h2>

            <div className="complexity-info">
              <p><strong>Best Case:</strong> {algo.best}</p>
              <p><strong>Worst Case:</strong> {algo.worst}</p>
              <p><strong>Space Complexity:</strong> {algo.space}</p>
              <p><strong>Used In Arena:</strong> {algo.usage}</p>
              <p><strong>Weakness:</strong> {algo.weakness}</p>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}

export default ComplexityLab;