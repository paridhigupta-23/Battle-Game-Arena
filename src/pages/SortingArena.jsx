import { useState } from "react";

import "../styles/sorting.css";

import { bubbleSort } from "../algorithms/bubbleSort";
import { quickSort } from "../algorithms/quickSort";
import { mergeSort } from "../algorithms/mergeSort";

function SortingArena({ player, setCurrentPage }) {

  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [time, setTime] = useState("");
  const [winner, setWinner] = useState("");
  const [battleData, setBattleData] = useState([]);
  const [loserReason, setLoserReason] = useState("");

  const [steps, setSteps] = useState([]);

const [bubbleSteps, setBubbleSteps] =
  useState([]);

const [quickSteps, setQuickSteps] =
  useState([]);

const [mergeSteps, setMergeSteps] =
  useState([]);

  const [count, setCount] = useState("");
  const [digits, setDigits] = useState("");

  const generateRandomNumbers = () => {

    const total = Number(count);

    const digitLength = Number(digits);

    if(total <= 0 || digitLength <= 0){

      alert("Enter valid values!");

      return;

    }

    const min =
      Math.pow(10, digitLength - 1);

    const max =
      Math.pow(10, digitLength) - 1;

    const numbers = [];

    for(let i = 0; i < total; i++){

      numbers.push(

        Math.floor(
          Math.random() *
          (max - min + 1)
        ) + min

      );

    }

    setInput(
      numbers.join(" ")
    );

  };

  const startBattle = () => {

    if(input.trim() === ""){

      alert("Arena Cannot Start With Empty Input!");

      return;

    }

    let arr;

    let isString = false;

    if(isNaN(input.replaceAll(" ", ""))){

      isString = true;

      arr = input
        .split("")
        .map(char =>
          char.charCodeAt(0)
        );

    }

    else{

      arr = input
        .split(" ")
        .map(Number);

      if(arr.length < 2){

        setWinner("☠ YOU LOST");

        setLoserReason(
          "Arena requires at least 2 fighters for battle."
        );

        setBattleData([]);

        setResult("");

        return;

      }

    }

   const bubble = bubbleSort(arr);

const quick = quickSort(arr);

const merge = mergeSort(arr);

setBubbleSteps(
  bubble.steps || []
);

setQuickSteps(
  quick.steps || []
);

setMergeSteps(
  merge.steps || []
);

setSteps(
  bubble.steps || []
);

    const results = [

      {
        name: "Bubble Knight",
        time: parseFloat(bubble.time)
      },

      {
        name: "Quick Assassin",
        time: parseFloat(quick.time)
      },

      {
        name: "Merge Mage",
        time: parseFloat(merge.time)
      }

    ];

    results.sort(
      (a,b) =>
      a.time - b.time
    );

    setWinner(
      results[0].name
    );

    const leaderboardData =
      JSON.parse(
        localStorage.getItem(
          "arenaPlayers"
        )
      ) || [];

    leaderboardData.push({

      name: player.name,

      title: results[0].name,

      wins:
        Math.floor(
          Math.random() * 100
        )

    });

    localStorage.setItem(

      "arenaPlayers",

      JSON.stringify(
        leaderboardData
      )

    );

    setBattleData(results);

    if(
      results[
        results.length - 1
      ].name ===
      "Bubble Knight"
    ){

      setLoserReason(
        "Bubble Knight lost because of excessive swaps and O(n²) complexity."
      );

    }

    else if(
      results[
        results.length - 1
      ].name ===
      "Merge Mage"
    ){

      setLoserReason(
        "Merge Mage lost because extra memory usage slowed the battle."
      );

    }

    else{

      setLoserReason(
        "Quick Assassin lost because poor pivot selection triggered worst-case recursion."
      );

    }

    let finalOutput;

    if(isString){

      finalOutput =
        bubble.sortedArray

        .map(code =>
          String.fromCharCode(code)
        )

        .join("");

    }

    else{

      finalOutput =
        bubble.sortedArray.join(
          " , "
        );

    }

    setResult(finalOutput);

    setTime(
      results[0].time
    );

  };

  return (

    <div className="page">

      <button
        className="back-btn"
        onClick={() =>
          setCurrentPage("home")
        }
      >
        ← Back To Arena
      </button>

      <h1>
        ⚔ SORTING BATTLE ARENA
      </h1>

      <p className="welcome-text">
        Welcome {player.name}
      </p>

      <div className="arena-box">

        <div className="random-box">

          <input
            type="number"
            placeholder="How Many Numbers?"
            value={count}
            onChange={(e) =>
              setCount(
                e.target.value
              )
            }
          />

          <input
            type="number"
            placeholder="Digits"
            value={digits}
            onChange={(e) =>
              setDigits(
                e.target.value
              )
            }
          />

          <button
            onClick={
              generateRandomNumbers
            }
          >
            🎲 RANDOM NUMBERS
          </button>

        </div>

        <textarea
          placeholder="Enter numbers or strings..."
          value={input}
          onChange={(e) =>
            setInput(
              e.target.value
            )
          }
        />

        <div className="button-group">

          <button
            onClick={startBattle}
          >
            START BATTLE
          </button>

        </div>

        <div className="result-box">

          <h2>
            ⚔ Battle Report
          </h2>

          <p className="result-title">
            Sorted Output
          </p>

          <div className="result-array">
            {result}
          </div>

          <p className="time-text">
            Fastest Time:
            {" "}
            {time}
            {" "}ms
          </p>

          <div className="winner-box">

            🏆 WINNER:
            {" "}
            {winner}

          </div>

          <div className="battle-stats">

            {battleData.map(
              (algo,index) => (

              <div
                className="stats-card"
                key={index}
              >

                {algo.name}

                <span>
                  {algo.time}
                  {" "}ms
                </span>

              </div>

            ))}

          </div>

          <div className="loser-box">

            <h3>
              ☠ Why Did The Fighter Lose?
            </h3>

            <p>
              {loserReason}
            </p>

          </div>
          <div className="button-group">

  <button
    onClick={() =>
      setSteps(bubbleSteps)
    }
  >
    🫧 Bubble Steps
  </button>

  <button
    onClick={() =>
      setSteps(quickSteps)
    }
  >
    ⚡ Quick Steps
  </button>

  <button
    onClick={() =>
      setSteps(mergeSteps)
    }
  >
    🔀 Merge Steps
  </button>

</div>

     <div className="queue-box">

  <h3>
    📜 Sorting Visualization
  </h3>

  {steps.length === 0 ? (

    <p>
      No Steps Available
    </p>

  ) : (

    steps.map(
      (step,index) => (

      <div
        key={index}
        className="queue-step"
      >

        <strong>
          Step {index + 1}
        </strong>

        {" → "}

        [
          {step.join(" , ")}
        ]

      </div>

    ))

  )}

</div>
        </div>

      </div>

    </div>

  );

}

export default SortingArena;