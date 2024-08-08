# A binary tree is uni-valued if every node in the tree has the same value.

# Given the root of a binary tree, return true if the given tree is uni-valued, or false otherwise.

 # Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isUnivalTree(self, root: Optional[TreeNode]) -> bool:
     
     # if root is null return 0
        if root is None:
           return True

     # if root.left is true or present and root.left is not equal to root.value return false
        if root.left and root.val != root.left.val:
           return False

     # if root.left is true or present and root.right is not equal to root.value return false   
        if root.right and root.val != root.right.val:
           return False

     # return  function isUnivalTree twice one with root.left param and one with root.right param 
        return self.isUnivalTree(root.left) and self.isUnivalTree(root.right)


# Example 1:
# Input: root = [1,1,1,1,1,null,1]
# Output: true

# Example 2:
# Input: root = [2,2,2,5,2]
# Output: false

# Constraints:

# The number of nodes in the tree is in the range [1, 100].
# 0 <= Node.val < 100