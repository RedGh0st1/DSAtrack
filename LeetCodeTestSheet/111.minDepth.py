# Given a binary tree, find its minimum depth.
# The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.
# Note: A leaf is a node with no children.


# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def minDepth(self, root: Optional[TreeNode]) -> int:
        
        if root is None: 
            return 0

        if root.left is None and root.right is None:
            return 1

        if root.left is None:
            left = self.minDepth(root.right) + 1
            return left
       
        if root.right is None:
            right = self.minDepth(root.left) + 1
            return right
        
        left_depth = self.minDepth(root.left)
        right_depth = self.minDepth(root.right)
        
       
        return min(left_depth, right_depth) + 1

# Example 1:
# Input: root = [3,9,20,null,null,15,7]
# Output: 2

# Example 2:
# Input: root = [2,null,3,null,4,null,5,null,6]
# Output: 5