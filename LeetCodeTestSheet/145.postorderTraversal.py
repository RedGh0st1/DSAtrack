# Given the root of a binary tree, return the postorder traversal of its nodes' values.

 # Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def postorderTraversal(self, root: Optional[TreeNode]) -> List[int]:

        # create empty array to add values to
        result = []

        # Define helper function. It can access result from function body
        def postorder(root: TreeNode):
            
            # return if null
            if root is None:
                 return 

            # call postorder function with root.left as argument  
            postorder(root.left)

            # call postorder function with root.right as argument  
            postorder(root.right)

            # add the root value to the empty array
            result.append(root.val)    
        
        # call the postorder function with the root as a argument
        postorder(root)   

        # return the new array
        return result 


# Example 1:
# Input: root = [1,null,2,3]
# Output: [3,2,1]


# Example 2:
# Input: root = []
# Output: []