# Given the root of a binary tree, invert the tree, and return its root.



# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def invertTree(self, root: Optional[TreeNode]) -> Optional[TreeNode]:
    
        # is the root is null or empty return the empty root
        if root is None:
           return root

        # swap the root left to root right 
        root.left, root.right = root.right, root.left

        # 1. recursively call function with the params of root.left   
        self.invertTree(root.left) 
        
        # then 

        # 2. recursively call function with the params of root.right 
        self.invertTree(root.right) 
       
        # return the changed root
        return root