export function dfs(graph, start) {

  if (!graph || !graph[start]) {

    return {
      path: [],
      time: "0.0000"
    };

  }

  let finalPath = [];

  const startTime = performance.now();

  for(let run = 0; run < 5000; run++){

    const visited = [];

    const stack = [start];

    while (stack.length > 0) {

      const node = stack.pop();

      if (!visited.includes(node)) {

        visited.push(node);

        const neighbors =
          [...(graph[node] || [])].reverse();

        for (const neighbor of neighbors) {

          stack.push(neighbor);

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