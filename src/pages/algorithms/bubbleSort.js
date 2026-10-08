export function bubbleSort(arr) {

  let sortedArray = [...arr];

  const steps = [];

  const start = performance.now();

  for(let run = 0; run < 500; run++){

    let newArr = [...arr];

    for(let i = 0; i < newArr.length; i++){

      for(let j = 0; j < newArr.length - i - 1; j++){

        if(newArr[j] > newArr[j + 1]){

          let temp = newArr[j];

          newArr[j] = newArr[j + 1];

          newArr[j + 1] = temp;

          // Save steps only during first run
          if(run === 0){

            steps.push([...newArr]);

          }

        }

      }

    }

    sortedArray = newArr;

  }

  const end = performance.now();

  return {

    sortedArray,

    steps,

    time: (end - start).toFixed(4)

  };

}