/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left),
 * right(right) {}
 * };
 */
class Solution {
public:
    int fd(TreeNode*& root, bool& isBalanced) {
        if (!root)
            return 0;

        int left = fd(root->left, isBalanced);
        int right = fd(root->right, isBalanced);
        if (isBalanced && abs(left - right) > 1)
            isBalanced = false;

        return max(left, right) + 1;
    }

    bool isBalanced(TreeNode* root) {

        bool isBalanced = true;
        fd(root, isBalanced);
        return isBalanced;
    }
};