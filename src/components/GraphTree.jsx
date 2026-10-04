import "../styles/graph.css";

function GraphTree({

  nodes,
  visited = [],
  currentNode = "",
  goalNode = ""

}) {

  const list = nodes
    .split(" ")
    .filter(node => node);

  const getClass = (node) => {

    return `
      tree-node
      ${visited.includes(node) ? "visited" : ""}
      ${currentNode === node ? "current" : ""}
      ${goalNode === node ? "goal" : ""}
    `;
  };

  return (

    <div className="tree-wrapper">

      <h2>
        🌳 Battlefield Tree
      </h2>

      <div className="tree-row">

        {list[0] && (
          <div className={getClass(list[0])}>
            {list[0]}
          </div>
        )}

      </div>

      <div className="tree-row">

        {list[1] && (
          <div className={getClass(list[1])}>
            {list[1]}
          </div>
        )}

        {list[2] && (
          <div className={getClass(list[2])}>
            {list[2]}
          </div>
        )}

      </div>

      <div className="tree-row">

        {list[3] && (
          <div className={getClass(list[3])}>
            {list[3]}
          </div>
        )}

        {list[4] && (
          <div className={getClass(list[4])}>
            {list[4]}
          </div>
        )}

        {list[5] && (
          <div className={getClass(list[5])}>
            {list[5]}
          </div>
        )}

      </div>

    </div>

  );
}

export default GraphTree;