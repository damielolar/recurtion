
function
    
insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > current) {
    arr[j + 1] = arr[j];
    j--;
    }

    arr[j + 1] = current;
    }

    return arr;
}
Use code with caution. Learn more
Here is an example of how to use the insertionSort function:

JavaScript
const arr = [5, 2, 4, 1, 3];
const sortedArr = insertionSort(arr);
console.log(sortedArr); // Output: [1, 2, 3, 4, 5]