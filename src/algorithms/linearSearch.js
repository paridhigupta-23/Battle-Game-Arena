export function linearSearch(arr, target) {
  const steps = [];

  // 🔒 Safety check (prevents blank screen crashes)
  if (!Array.isArray(arr)) {
    return {
      found: false,
      index: -1,
      steps: []
    };
  }

  for (let i = 0; i < arr.length; i++) {
    const value = arr[i];

    const isFound = value === target;

    steps.push({
      index: i,
      value,
      checking: true,
      found: isFound,
    });

    if (isFound) {
      return {
        found: true,
        index: i,
        steps,
      };
    }
  }

  // ❌ NOT FOUND CASE (safe return)
  return {
    found: false,
    index: -1,
    steps,
  };
}