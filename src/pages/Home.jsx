import "../styles/home.css";
import logo from "../assets/pugame.png";

function Home({ setCurrentPage, player, setPlayer }) {

  const checkLogin = (page) => {

    if(player.name && player.id){

      setCurrentPage(page);

    }

    else{

      alert("Please login first!");
    }
  };

  return (

    <div className="home-container">

      <div className="home-content">

        <div className="left-section">

          <div className="logo-section">

            <img
              src={logo}
              alt="Battle Game Arena"
              className="game-logo"
            />

            <div>

              <h1 className="main-title">
                BATTLE GAME ARENA
              </h1>

              <p className="sub-title">
                Algorithm Warriors Enter The Arena
              </p>

            </div>

          </div>

          <p className="subtitle">
            Algorithm Combat Simulator
          </p>

          <div className="info-box">

            <h3>ABOUT THE GAME</h3>

            <p>
              Battle algorithms using sorting, searching and navigation
              strategies. Compare performance, pathfinding intelligence
              and complexity analysis.
            </p>

          </div>

        </div>

        <div className="right-section">

          <div className="form-card">

            <h2>ENTER ARENA</h2>

            <input
              type="text"
              placeholder="Player Name"
              value={player.name}
              onChange={(e) =>
                setPlayer({
                  ...player,
                  name: e.target.value
                })
              }
            />

            <input
              type="text"
              placeholder="Player ID"
              value={player.id}
              onChange={(e) =>
                setPlayer({
                  ...player,
                  id: e.target.value
                })
              }
            />

            <button
              onClick={() => {

                if(player.name && player.id){

                  alert(`Welcome To The Arena ${player.name}!`);

                }

                else{

                  alert("Enter Name and ID First!");
                }
              }}
            >
              ENTER ARENA
            </button>

          </div>

        </div>

      </div>

      <div className="menu-section">

        <div
          className="menu-card"
          onClick={() => checkLogin("sorting")}
        >
          <h2>⚔ SORTING BATTLE</h2>
          <p>Compare Bubble, Merge and Quick warriors.</p>
        </div>

        <div
          className="menu-card"
          onClick={() => checkLogin("search")}
        >
          <h2>🔍 SEARCH ARENA</h2>
          <p>Linear Scout vs Binary Sniper.</p>
        </div>

        <div
          className="menu-card"
          onClick={() => checkLogin("navigation")}
        >
          <h2>🗺 NAVIGATION ARENA</h2>
          <p>BFS, DFS, GBFS and A* battle for the best path.</p>
        </div>

        <div
          className="menu-card"
          onClick={() => checkLogin("complexity")}
        >
          <h2>🧠 COMPLEXITY LAB</h2>
          <p>Analyze time and space complexities.</p>
        </div>

        <div
          className="menu-card"
          onClick={() => checkLogin("leaderboard")}
        >
          <h2>🏆 LEADERBOARD</h2>
          <p>View top arena champions.</p>
        </div>

        <div
          className="menu-card"
          onClick={() => checkLogin("about")}
        >
          <h2>📘 ABOUT PROJECT</h2>

          <p>
            Learn about the arena system and algorithms.
          </p>
        </div>

      </div>

    </div>
  );
}

export default Home;