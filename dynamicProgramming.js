function fib(n) {
    if (n <= 1) {
        return n;
    }

    return fib(n - 1) + fib(n - 2);
}

// 保存结果，大大提高效率
function fib(n) {
    const cache = [0, 1];
    for (let i = 2; i <= n; i++) {
        fib[n] = cache[i - 1] + cache[i - 2];
    }
    return fib[n];
}

// 动态规划、递归划分子问题、重叠子问题、最优子结构
// 重叠子问题 子问题可能重复出现
// 动态规划不适用于归并排序、重叠子问题
// 归并排序是分治思想
// 动态规划适用于背包问题、最长公共子序列、计算达到目的的走法数量