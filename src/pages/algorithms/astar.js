export function astar(graph, start, goal) {

  if (!graph || !graph[start]) {

    return {
      path: [],
      time: "0.0000"
    };

  }

  let finalPath = [];

  const startTime = performance.now();

  for(let run = 0; run < 5000; run++){

    const open = [start];

    const visited = [];

    while (open.length > 0) {

      const current = open.shift();

      if (!visited.includes(current)) {

        visited.push(current);

        if (current === goal) {

          break;

        }

        const neighbors =
          graph[current] || [];

        for (const neighbor of neighbors) {

          open.push(neighbor);

        }

      }

    }

    finalPath = visited;

  }

  const endTime = performance.now();

  return {

    path: finalPath,

    time: (endTime - startTime).toFixed(4)

  };

}