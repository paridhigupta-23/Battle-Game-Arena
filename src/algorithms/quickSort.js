export function quickSort(arr){

  const steps = [];

  function partition(array, low, high){

    const pivot = array[high];

    let i = low - 1;

    for(let j = low; j < high; j++){

      if(array[j] < pivot){

        i++;

        [array[i], array[j]] =
        [array[j], array[i]];

        steps.push([...array]);

      }

    }

    [array[i + 1], array[high]] =
    [array[high], array[i + 1]];

    steps.push([...array]);

    return i + 1;

  }

  function quickSortHelper(
    array,
    low,
    high
  ){

    if(low < high){

      const pivotIndex =
        partition(
          array,
          low,
          high
        );

      quickSortHelper(
        array,
        low,
        pivotIndex - 1
      );

      quickSortHelper(
        array,
        pivotIndex + 1,
        high
      );

    }

  }

  let sortedArray = [];

  const start = performance.now();

  for(let run = 0; run < 500; run++){

    const newArr = [...arr];

    if(run === 0){

      steps.length = 0;

      quickSortHelper(
        newArr,
        0,
        newArr.length - 1
      );

      sortedArray = [...newArr];

    }

    else{

      quickSortHelper(
        newArr,
        0,
        newArr.length - 1
      );

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