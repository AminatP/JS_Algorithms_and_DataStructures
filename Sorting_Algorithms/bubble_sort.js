/*
~ Unoptimized naive BubbleSort
There is definetly some improvment can be done
The problem with this is that it still will loop
all the way to the end, even though the last elements
are being sorted and there is no need to check or swap them.
The Time Complexity is O(n^2)
*/
let bubbleSort = arr => {
  for(let i=0; i<arr.length; i++){
    for(let j=0; j<arr.length; j++){
      if(arr[j] > arr[j+1]){
        let temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
      }
    }
  }
  return arr;
}
bubbleSort([32, 4, 15, 21, 9, 0]);

/*
~ Slightly optimized Bubble Sort
The optimization made when we start looping from
the end of the array towards the beginning.
This way it help with reducing the number
of iterations that need to made.
The Time Complexity is O(n^2)
*/

let bubbleSort = arr => {
  for(let i = arr.length; i > 0; i--){
    for(let j = 0; j < i - 1; j++){
      if(arr[j] > arr[j+1]){
        let temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
      }
    }
  }
  return arr;
}
bubbleSort([32, 4, 15, 21, 9, 0]);

/**
~ Optimized BubbleSort with noSwaps
In cases where input data is nearly sorted
we can optimize bubble sort by introducing
variable that checks if swaps were made.
If no swaps were made there is no need to keep on looping
through already sorted array.

The Time Complexity for this case would be
O(n) instead of O(n^2);
*/

let bubbleSort = arr => {
  let noSwaps;
  for(let i = arr.length; i > 0; i--){
    noSwaps = true;
    for(let j = 0; j < i - 1; j++){
      if(arr[j] > arr[j+1]){
        let temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
        noSwaps = false;
      }
    }
    if(noSwaps) break;
  }
  return arr;
}
bubbleSort([8,1,2,3,4,5,6,7]);
