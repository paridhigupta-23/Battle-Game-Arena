import "../styles/about.css";

function About({ setCurrentPage }) {

  return (

    <div className="page">

      <button
        className="back-btn"
        onClick={() => setCurrentPage("home")}
      >
        ← Back To Arena
      </button>

      <h1>🎮 ABOUT BATTLE GAME ARENA</h1>

      <div className="about-container">

        <div className="about-card">

          <h2>⚔ Project Idea</h2>

          <p>
            Battle Game Arena is an interactive algorithm simulator
            designed as a strategy game. Players enter the arena and
            battle sorting, searching, and navigation algorithms to
            compare their performance, execution time, and complexity.
          </p>

        </div>

        <div className="about-card">

          <h2>🧠 Algorithm Warriors</h2>

          <ul>

            <li>Bubble Knight (Bubble Sort)</li>

            <li>Merge Mage (Merge Sort)</li>

            <li>Quick Assassin (Quick Sort)</li>

            <li>Linear Scout (Linear Search)</li>

            <li>Binary Sniper (Binary Search)</li>

            <li>BFS Scout (Breadth First Search)</li>

            <li>DFS Explorer (Depth First Search)</li>

            <li>GBFS Tracker (Greedy Best First Search)</li>

            <li>A* Pathfinder (A-Star Search)</li>

          </ul>

        </div>

        <div className="about-card">

          <h2>📊 Arena Features</h2>

          <ul>

            <li>⚔ Sorting Battle Arena</li>

            <li>🔍 Search Arena</li>

            <li>🗺 Navigation Arena</li>

            <li>🧠 Complexity & Strategy Lab</li>

            <li>🏆 Dynamic Leaderboard</li>

            <li>👤 Player Login System</li>

            <li>⏱ Execution Time Comparison</li>

            <li>🔤 String & Number Support</li>

          </ul>

        </div>

        <div className="about-card">

          <h2>🚀 Technologies Used</h2>

          <ul>

            <li>React JS</li>

            <li>JavaScript (ES6)</li>

            <li>HTML5</li>

            <li>CSS3</li>

            <li>Performance.now() API</li>

            <li>Local Storage</li>

          </ul>

        </div>

        <div className="about-card">

          <h2>🎯 Learning Objectives</h2>

          <ul>

            <li>Understand sorting algorithms</li>

            <li>Compare searching techniques</li>

            <li>Explore graph traversal methods</li>

            <li>Learn pathfinding algorithms</li>

            <li>Analyze time complexity</li>

            <li>Analyze space complexity</li>

          </ul>

        </div>

        <div className="about-card">

          <h2>🏆 Project Objective</h2>

          <p>
            The goal of Battle Game Arena is to transform algorithm
            learning into an engaging game experience. Instead of
            simply viewing results, users interact with algorithm
            warriors, compare their strengths and weaknesses, and
            understand how different algorithms perform in real-world
            scenarios.
          </p>

        </div>

      </div>

    </div>
  );
}

export default About;