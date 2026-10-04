import { useState } from "react";
import "../styles/search.css";

import { linearSearch } from "../algorithms/linearSearch";
import { binarySearch } from "../algorithms/binarySearch";

function SearchArena({ setCurrentPage }) {
  const [input, setInput] = useState("");
  const [target, setTarget] = useState("");

  const [steps, setSteps] = useState({ linear: [], binary: [] });
  const [battleData, setBattleData] = useState([]);

  const [winner, setWinner] = useState("");
  const [searchResult, setSearchResult] = useState("");
  const [loserReason, setLoserReason] = useState("");

  const [count, setCount] = useState("");
  const [digits, setDigits] = useState("");

  // ---------------- RANDOM GENERATOR ----------------
  const generateRandomNumbers = () => {
    const total = Number(count);
    const digitLength = Number(digits);

    if (!total || !digitLength || total <= 0 || digitLength <= 0) {
      alert("Enter valid values!");
      return;
    }

    const min = Math.pow(10, digitLength - 1);
    const max = Math.pow(10, digitLength) - 1;

    const numbers = Array.from(
      { length: total },
      () => Math.floor(Math.random() * (max - min + 1)) + min
    );

    const randomTarget =
      numbers[Math.floor(Math.random() * numbers.length)];

    setInput(numbers.join(" "));
    setTarget(String(randomTarget));
  };

  // ---------------- SEARCH BATTLE ----------------
  const startSearchBattle = () => {
    try {
      if (!input.trim() || !target.trim()) {
        alert("Enter Battlefield Data And Target!");
        return;
      }

      let arr = [];
      let targetValue;

      const isNumericArray = input
        .trim()
        .split(/\s+/)
        .every(v => !isNaN(Number(v)));

      if (isNumericArray) {
        arr = input.trim().split(/\s+/).map(Number);
        targetValue = Number(target);
      } else {
        arr = input.split("").map(c => c.charCodeAt(0));
        targetValue = target.charCodeAt(0);
      }

      if (arr.length < 2) {
        setWinner("☠ YOU LOST");
        setSearchResult("");
        setLoserReason("Arena requires at least 2 fighters.");
        setSteps({ linear: [], binary: [] });
        setBattleData([]);
        return;
      }

      const sortedArr = [...arr].sort((a, b) => a - b);

      let linear = { found: false, index: -1, steps: [] };
      let binary = { found: false, index: -1, steps: [] };

      try {
        linear = linearSearch(arr, targetValue) || linear;
      } catch (err) {
        console.error("Linear Search Error:", err);
      }

      try {
        binary = binarySearch(sortedArr, targetValue) || binary;
      } catch (err) {
        console.error("Binary Search Error:", err);
      }

      setSteps({
        linear: Array.isArray(linear.steps) ? linear.steps : [],
        binary: Array.isArray(binary.steps) ? binary.steps : []
      });

      const linearFound = !!linear.found;
      const binaryFound = !!binary.found;

      const results = [
        { name: "Linear Scout", time: linear.steps?.length || 0, found: linearFound },
        { name: "Binary Sniper", time: binary.steps?.length || 0, found: binaryFound }
      ];

      setBattleData(results);

      let foundIndex = -1;
      if (linearFound) foundIndex = linear.index;
      else if (binaryFound) foundIndex = binary.index;

      if (linearFound || binaryFound) {
        const winnerAlgo = results
          .filter(r => r.found)
          .sort((a, b) => a.time - b.time)[0];

        setWinner(`🏆 ${winnerAlgo.name}`);
        setSearchResult(`🎯 Target Found`);

        setLoserReason(
          winnerAlgo.name === "Linear Scout"
            ? "Binary Sniper lost due to sorting overhead."
            : "Linear Scout lost due to full scanning."
        );
      } else {
        setWinner("☠ No Fighter Won");
        setSearchResult("❌ Target Not Found");
        setLoserReason("Both scouts failed to locate the target.");
      }

    } catch (err) {
      console.error(err);
      setWinner("❌ System Crash");
      setSearchResult("Something broke in the battle");
      setLoserReason(err.message);
    }
  };

  // ---------------- UI ----------------
  return (
    <div className="page">

      <button className="back-btn" onClick={() => setCurrentPage("home")}>
        ← Back To Arena
      </button>

      <h1>🔍 SEARCH ARENA</h1>

      <div className="arena-box">

        {/* RANDOM */}
        <div className="random-box">
          <input
            type="number"
            placeholder="How Many Numbers?"
            value={count}
            onChange={(e) => setCount(e.target.value)}
          />

          <input
            type="number"
            placeholder="Digits"
            value={digits}
            onChange={(e) => setDigits(e.target.value)}
          />

          <button className="viz-btn secondary" onClick={generateRandomNumbers}>
            🎲 RANDOM NUMBERS
          </button>
        </div>

        {/* INPUT */}
        <textarea
          placeholder="Enter numbers or strings..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <input
          className="search-input"
          type="text"
          placeholder="Enter target value"
          value={target}
          onChange={(e) => setTarget(e.target.value)}
        />

        <button className="viz-btn" onClick={startSearchBattle}>
          ⚔ START SEARCH BATTLE
        </button>

        {/* RESULT */}
        <div className="result-box">

          <h2>🎯 Search Report</h2>

          <div className="winner-box">{winner}</div>

          <div className="result-array">{searchResult}</div>

          {/* STATS */}
          <div className="battle-stats">
            {battleData.map((algo, index) => (
              <div className="stats-card" key={index}>
                <strong>{algo.name}</strong>
                <span>
                  {algo.time} steps {algo.found ? "✔" : "✖"}
                </span>
              </div>
            ))}
          </div>

          {/* STEPS */}
          <div className="step-section">

            <h3>🔵 Linear Search Path</h3>
            <div className="step-row">
              {steps.linear.length > 0
                ? steps.linear.map((s, i) => (
                    <div key={i} className="step-box">
                      {typeof s === "object"
                        ? `${s.value ?? "•"}`
                        : s}
                    </div>
                  ))
                : "No Steps"}
            </div>

            <h3>🟣 Binary Search Path</h3>
            <div className="step-row">
              {steps.binary.length > 0
                ? steps.binary.map((s, i) => (
                    <div key={i} className="step-box binary">
                      {typeof s === "object"
                        ? `${s.midValue ?? "•"}`
                        : s}
                    </div>
                  ))
                : "No Steps"}
            </div>

          </div>

          {/* REASON */}
          <div className="loser-box">
            <h3>☠ Why Did The Fighter Lose?</h3>
            <p>{loserReason}</p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default SearchArena;