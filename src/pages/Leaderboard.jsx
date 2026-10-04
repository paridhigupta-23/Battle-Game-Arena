import "../styles/leaderboard.css";

function Leaderboard({ setCurrentPage }) {

  const players = JSON.parse(
    localStorage.getItem("arenaPlayers")
  ) || [];

  return (

    <div className="page">

      <button
        className="back-btn"
        onClick={() => setCurrentPage("home")}
      >
        ← Back To Arena
      </button>

      <h1>🏆 ARENA LEADERBOARD</h1>

      <div className="leaderboard-container">

        {players.length === 0 ? (

          <div className="leaderboard-card">

            No Arena Winners Yet

          </div>

        ) : (

          players.map((player,index) => (

            <div
              className="leaderboard-card"
              key={index}
            >

              <div className="leader-left">

                <h2>
                  #{index + 1}
                </h2>

                <div>

                  <h3>{player.name}</h3>

                  <p>{player.title}</p>

                </div>

              </div>

              <div className="wins-box">

                ⚔ {player.wins} Wins

              </div>

            </div>

          ))

        )}

      </div>

    </div>
  );
}

export default Leaderboard;