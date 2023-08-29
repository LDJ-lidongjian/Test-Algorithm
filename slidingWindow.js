// 滑动窗口是双指针算法的一种,基本思路为维护一个窗口,然后从前往后遍历元素进行运算
// 两层的嵌套循环，拆解成单独的单层循环。降低时间复杂度

// 数组求滑动窗口内的最值问题
function burteForce(arr, windowSize) {
    if (arr.length < windowSize) {
        return null;
    }

    let maxSum = 0;
    for(let i = 0; i < arr.length - windowSize + 1; i++){
        let tempSum = 0;
        for(let j = 0; j < windowSize; j++){
            tempSum += arr[i + j];
        }
        maxSum = Math.max(maxSum, tempSum);
    }

    return maxSum;
}

// 滑动窗口
function slidingWindow(arr, windowSize) {
    if (arr.length < windowSize) {
        return null;
    }

    let maxSum = 0;
    let tempSum = 0;
    for(let i = 0; i < windowSize; i++){
        tempSum += arr[i];
    }
    maxSum = tempSum;

    for(let i = windowSize; i < arr.length; i++){
        tempSum = tempSum - arr[i - windowSize] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }

    return maxSum;
}

console.log('slidingWindow:' + slidingWindow([1,2,3,4,5], 3));
