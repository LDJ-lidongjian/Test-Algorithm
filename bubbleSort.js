function bubbleSort(arr) {
    let swapped;
    for (let i = 0; i < arr.length; i++) {
        swapped = false;
        for (let j = 0; j < arr.length - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                swapped = true;
            }
        }
        if (!swapped) break;
    }
    return arr;
}

let arr = [11, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(bubbleSort(arr));
