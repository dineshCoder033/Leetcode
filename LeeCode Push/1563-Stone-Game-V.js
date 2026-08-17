/**
 * @param {number[]} stoneValue
 * @return {number}
 */
var stoneGameV = function (stoneValue) {
    const n = stoneValue.length;
    const f = Array(n)
        .fill()
        .map(() => Array(n).fill(0));

    const dfs = (left, right) => {
        if (left === right) {
            return 0;
        }
        if (f[left][right] !== 0) {
            return f[left][right];
        }

        let sum = 0;
        for (let i = left; i <= right; i++) {
            sum += stoneValue[i];
        }
        let suml = 0;
        for (let i = left; i < right; ++i) {
            suml += stoneValue[i];
            const sumr = sum - suml;
            if (suml < sumr) {
                f[left][right] = Math.max(f[left][right], dfs(left, i) + suml);
            } else if (suml > sumr) {
                f[left][right] = Math.max(
                    f[left][right],
                    dfs(i + 1, right) + sumr,
                );
            } else {
                f[left][right] = Math.max(
                    f[left][right],
                    Math.max(dfs(left, i), dfs(i + 1, right)) + suml,
                );
            }
        }
        return f[left][right];
    };

    return dfs(0, n - 1);
};