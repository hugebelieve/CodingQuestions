// source - https://leetcode.com/problems/permutation-sequence/description/

/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
let getPermutation = function({
    arrayNumbers: n, kthPermutation: k
}) {
    const factorials = {0: 1};
    let arr = [];
    for (let i = 1; i <= n; i++) {
        arr.push(i);
        factorials[i] = factorials[i - 1] * i;
    }
    const KthComb = [];
    for (let i = 0; i < array.length; i++) {
        let swapValue = Math.floor(k / factorials[array.length - 1]);
        const start = factorials[element];
        const end = factorials[element + 1] ?? 0
    }
    return KthComb
};

const getFactorial = (number) => {
    let result = 1;
    for (let index = number; index >= 1; index--) {
        result = result * index;
    }
    return result;
}

module.exports = {
    runAlgo: getPermutation
}
