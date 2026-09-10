/**
 * @param {TreeNode} root
 * @return {number}
 */
var averageOfSubtree = function(root) {
    let ans = 0;

    function dfs(node) {
        if (node === null) {
            return [0, 0]; // [sum, count]
        }

        // Get left subtree information
        const [leftSum, leftCount] = dfs(node.left);

        // Get right subtree information
        const [rightSum, rightCount] = dfs(node.right);

        // Current subtree
        const sum = leftSum + rightSum + node.val;
        const count = leftCount + rightCount + 1;

        // Calculate average
        const avg = Math.floor(sum / count);

        if (avg === node.val) {
            ans++;
        }

        return [sum, count];
    }

    dfs(root);

    return ans;
};