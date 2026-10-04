export function binarySearch(arr, target) {
  const steps = [];

  if (!Array.isArray(arr)) {
    return { found: false, index: -1, steps: [] };
  }

  let left = 0;
  let right = arr.length - 1;
  let foundIndex = -1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const midValue = arr[mid];

    steps.push({
      left,
      right,
      mid,
      midValue,
      checking: true,
      found: midValue === target,
    });

    if (midValue === undefined) break;

    if (midValue === target) {
      foundIndex = mid;
      break; // stop search but still return steps
    }

    if (midValue < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return {
    found: foundIndex !== -1,
    index: foundIndex,
    steps,
  };
}