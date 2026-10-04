function ComparisonChart({ data }) {
  if (!data || data.length === 0) return null;

  const maxTime = Math.max(...data.map(d => d.time || 1), 1);
  const maxPath = Math.max(...data.map(d => d.path?.length || 1), 1);

  return (
    <div className="chart-container">

      <h2>📊 Navigation Performance (Time + Path Length)</h2>

      <div className="bar-container">

        {data.map((item, index) => {

          const timePercent = ((item.time || 1) / maxTime) * 100;
          const pathPercent = ((item.path?.length || 1) / maxPath) * 100;

          return (
            <div key={index} style={{ marginBottom: "16px" }}>

              {/* LABEL */}
              <div className="bar-label">
                {item.name}
              </div>

              {/* TIME BAR */}
              <div className="bar-row">
                <span style={{ width: "80px", fontSize: "12px" }}>
                  Time
                </span>

                <div className="bar-wrapper">
                  <div
                    className="bar-fill"
                    style={{ width: `${timePercent}%` }}
                  />
                </div>

                <span className="bar-time">
                  {item.time || 0} ms
                </span>
              </div>

              {/* PATH BAR */}
              <div className="bar-row">
                <span style={{ width: "80px", fontSize: "12px" }}>
                  Path
                </span>

                <div className="bar-wrapper">
                  <div
                    style={{
                      height: "100%",
                      width: `${pathPercent}%`,
                      background: "linear-gradient(90deg,#a855f7,#c084fc)",
                      borderRadius: "999px"
                    }}
                  />
                </div>

                <span className="bar-time">
                  {item.path?.length || 0} nodes
                </span>
              </div>

            </div>
          );
        })}

      </div>
    </div>
  );
}

export default ComparisonChart;