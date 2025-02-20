/////////////////USING SORT() METHOD
const mergeSort = (array) => {
  if (array.length <= 1) return array;

  const middle = Math.floor(array.length / 2);
  const leftSide = array.slice(0, middle);
  const rightSide = array.slice(middle);

  const mergeLeft = mergeSort(leftSide);
  const mergeRight = mergeSort(rightSide);

  return [...mergeLeft, ...mergeRight].sort((a, b) => a - b);
};

const test = mergeSort([4, 1, 0, 34, 21, 42, 9]);
console.log(test);

//////////////COMPARE EACH SUBARRAY DIRECTLY
const mergeSortDirectly = (array) => {
  if (array.length <= 1) return array;

  const middle = Math.floor(array.length / 2);
  const leftSide = array.slice(0, middle);
  const rightSide = array.slice(middle);

  const mergeLeft = mergeSortDirectly(leftSide);
  const mergeRight = mergeSortDirectly(rightSide);
  const result = [];

  while (mergeLeft.length && mergeRight.length) {
    if (mergeLeft[0] < mergeRight[0]) {
      result.push(mergeLeft.shift());
    } else {
      result.push(mergeRight.shift());
    }
  }
  return [...result, ...mergeLeft, ...mergeRight];
};

const mergeDirectly = mergeSortDirectly([5, 3, 6, 1, 2, 7, 10, 14]);
console.log(mergeDirectly);
