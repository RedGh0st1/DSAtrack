

# 222. Count Complete Tree Nodes

# Given the root of a complete binary tree, return the number of the nodes in the tree.
# According to Wikipedia, every level, except possibly the last, is completely filled in a complete binary tree, and all nodes in the last level are as far left as possible. It can have between 1 and 2h nodes inclusive at the last level h.
# Design an algorithm that runs in less than O(n) time omplexity.


# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

# There are a couple of different approaches that could work:
# Traverse the tree (inorder, preorder, or postorder all work) and increment a count variable.
# Apply a recursive formula: the number of nodes in the tree = number of nodes in the left subtree + number of nodes in right subtree + 1


class Solution:
    def countNodes(self, root: Optional[TreeNode]) -> int:
    
        if root is None:
            return  0
       
        return self.countNodes(root.left) + self.countNodes(root.right) + 1
    
print(countNodes([1,2,3,4,5,6]))    