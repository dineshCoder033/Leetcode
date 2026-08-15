/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubsequence = function(nums) {
    let totalXor = 0;
    let hasNonZero = false;

    for (let num of nums) {
        totalXor ^= num;
        if (num !== 0) {
            hasNonZero = true;
        }
    }

    // If there are no non-zero elements, no valid subsequence exists
    if (!hasNonZero) {
        return 0;
    }

    // If total XOR is already non-zero, take the whole array
    if (totalXor !== 0) {
        return nums.length;
    }

    // If total XOR is zero, remove exactly one non-zero element
    return nums.length - 1;
};