export function mergeSort(arr){

  const steps = [];

  function merge(left, right){

    let result = [];

    let i = 0;
    let j = 0;

    while(i < left.length && j < right.length){

      if(left[i] < right[j]){

        result.push(left[i]);
        i++;

      }

      else{

        result.push(right[j]);
        j++;

      }

    }

    const merged = [

      ...result,

      ...left.slice(i),

      ...right.slice(j)

    ];

    steps.push([...merged]);

    return merged;

  }

  function mergeSortHelper(array){

    if(array.length <= 1){

      return array;

    }

    const mid =
      Math.floor(array.length / 2);

    const left =
      mergeSortHelper(
        array.slice(0, mid)
      );

    const right =
      mergeSortHelper(
        array.slice(mid)
      );

    return merge(left, right);

  }

  let sortedArray = [];

  const start = performance.now();

  for(let run = 0; run < 500; run++){

    if(run === 0){

      sortedArray =
        mergeSortHelper([...arr]);

    }

    else{

      mergeSortHelper([...arr]);

    }

  }

  const end = performance.now();

  return {

    sortedArray,

    steps,

    time:
      (end - start).toFixed(4)

  };

}