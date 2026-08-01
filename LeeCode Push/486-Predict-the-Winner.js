/**
 * @param {number[]} nums
 * @return {boolean}
 */
var predictTheWinner = function(nums) {
    const n = nums.length;
    const memo = Array.from({ length: n }, () => Array(n).fill(undefined));

    function dp(left, right) {
        if (left === right) return nums[left];

        if (memo[left][right] !== undefined) {
            return memo[left][right];
        }

        const pickLeft = nums[left] - dp(left + 1, right);
        const pickRight = nums[right] - dp(left, right - 1);

        memo[left][right] = Math.max(pickLeft, pickRight);
        return memo[left][right];
    }

    return dp(0, n - 1) >= 0;
};