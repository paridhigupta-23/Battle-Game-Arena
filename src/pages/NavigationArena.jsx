import { useState } from "react";
import "../styles/navigation.css";

import { bfs } from "../algorithms/bfs";
import { dfs } from "../algorithms/dfs";
import { gbfs } from "../algorithms/gbfs";
import { astar } from "../algorithms/astar";

import GraphTree from "../components/GraphTree";
import ComparisonChart from "../components/ComparisonChart";

function NavigationArena({ setCurrentPage }) {

  const [nodes, setNodes] = useState("");
  const [edges, setEdges] = useState("");
  const [startNode, setStartNode] = useState("");
  const [goalNode, setGoalNode] = useState("");

  const [results, setResults] = useState([]);
  const [steps, setSteps] = useState([]);
  const [winner, setWinner] = useState("");
  const [selectedAlgo, setSelectedAlgo] = useState("");

  const buildGraph = () => {
    const graph = {};

    const nodeList = nodes.trim().split(" ").filter(Boolean);

    nodeList.forEach(n => {
      graph[n] = [];
    });

    edges.split(",").forEach(edge => {
      const [s, d] = edge.trim().split("-");

      if (graph[s] && graph[d]) {
        graph[s].push(d);
        graph[d].push(s);
      }
    });

    return graph;
  };

  // 🔥 IMPORTANT: ensures chart NEVER breaks
  const normalize = (name, result) => ({
    name,
    ...result,
    time: Number(result.time || result.path?.length || 1),
    path: result.path || []
  });

  const runAlgo = (algoFn, name, needGoal = false) => {

    if (!nodes.trim() || !edges.trim() || !startNode.trim()) {
      alert("Enter Nodes, Edges, Start Node!");
      return;
    }

    if (needGoal && !goalNode.trim()) {
      alert("Enter Goal Node!");
      return;
    }

    const result = algoFn(buildGraph(), startNode, goalNode);

    const final = normalize(name, result);

    setSelectedAlgo(name);
    setSteps(final.path);
    setWinner("");
    setResults([final]);
  };

  const compareAll = () => {

    if (!nodes.trim() || !edges.trim() || !startNode.trim() || !goalNode.trim()) {
      alert("Enter all inputs!");
      return;
    }

    const graph = buildGraph();

    const data = [
      normalize("BFS Scout", bfs(graph, startNode)),
      normalize("DFS Explorer", dfs(graph, startNode)),
      normalize("GBFS Tracker", gbfs(graph, startNode, goalNode)),
      normalize("A* Pathfinder", astar(graph, startNode, goalNode))
    ];

    data.sort((a, b) => a.time - b.time);

    setWinner(data[0]?.name || "");
    setSelectedAlgo("Compare All");
    setResults(data);
    setSteps(data[0]?.path || []);
  };

  return (
    <div className="page">

      <button className="back-btn" onClick={() => setCurrentPage("home")}>
        ← Back To Arena
      </button>

      <h1>🗺 NAVIGATION ARENA</h1>

      <div className="arena-box">

        <input
          placeholder="Nodes (A B C D E F)"
          value={nodes}
          onChange={(e) => setNodes(e.target.value)}
        />

        <input
          placeholder="Edges (A-B,A-C,B-D)"
          value={edges}
          onChange={(e) => setEdges(e.target.value)}
        />

        <input
          placeholder="Start Node"
          value={startNode}
          onChange={(e) => setStartNode(e.target.value)}
        />

        <input
          placeholder="Goal Node"
          value={goalNode}
          onChange={(e) => setGoalNode(e.target.value)}
        />

        <div className="button-group">

          <button onClick={() => runAlgo(bfs, "BFS Scout")}>BFS</button>
          <button onClick={() => runAlgo(dfs, "DFS Explorer")}>DFS</button>
          <button onClick={() => runAlgo(gbfs, "GBFS Tracker", true)}>GBFS</button>
          <button onClick={() => runAlgo(astar, "A* Pathfinder", true)}>A*</button>

          <button onClick={compareAll}>⚔ COMPARE ALL</button>

        </div>

        {/* GRAPH */}
        <GraphTree
          nodes={nodes}
          visited={steps}
          currentNode={steps[steps.length - 1] || ""}
          goalNode={goalNode}
        />

        {/* WINNER */}
        {winner && (
          <div className="winner-box">
            🏆 FASTEST NAVIGATOR: {winner}
          </div>
        )}

        {/* ✅ YOU REQUESTED THIS PART KEPT EXACTLY */}
        {selectedAlgo && (
          <div className="navigation-card">

            <h2> 📜 Traversal Steps </h2>

            <h3> {selectedAlgo} </h3>

            {steps.map((step, index) => (
              <p key={index}>
                Step {index + 1} {" → "} Visit {step}
              </p>
            ))}

          </div>
        )}

        {/* RESULTS */}
        {results.map((algo, index) => (
          <div className="navigation-card" key={index}>
            <h2>{algo.name}</h2>
            <p>Path: {algo.path.join(" → ")}</p>
            <p>Time: {algo.time} ms</p>
          </div>
        ))}

        {/* CHART FIXED */}
        {results.length > 1 && (
          <ComparisonChart data={results} />
        )}

      </div>
    </div>
  );
}

export default NavigationArena;