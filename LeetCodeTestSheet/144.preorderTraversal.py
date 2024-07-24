# Given the root of a binary tree, return the preorder traversal of its nodes' values.


# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def preorderTraversal(self, root: Optional[TreeNode]) -> List[int]:

        # create empty array to add values to
        result = []

        # Define helper function. It can access result from function body
        def preorder(root: TreeNode):

            # return if null
            if root is None:
                 return   

            # add the root.val to the array
            result.append(root.val)

            # call preorder with root.left as argument
            preorder(root.left)

            # call preorder with root.right as argument
            preorder(root.right)

        # call helper with root as argument
        preorder(root)   

        # return array
        return result

# Example 1:
# Input: root = [1,null,2,3]
# Output: [1,2,3]

# Example 2:
# Input: root = []
# Output: []

# Example 3:
# Input: root = [1]
# Output: [1]
