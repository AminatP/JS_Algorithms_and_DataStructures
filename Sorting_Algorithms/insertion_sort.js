let insertionSort = arr => {
  for(let i=1; i<arr.length; i++){
    let curVal = arr[i];
    let prevIdx = i - 1;
    while( prevIdx >= 0 && arr[prevIdx] > curVal){
      arr[prevIdx+1] = arr[prevIdx];
      prevIdx--;
    }
    arr[prevIdx+1] = curVal
  }
  return arr;
}
insertionSort([3, 8, 1, 12, -2, 0]);
