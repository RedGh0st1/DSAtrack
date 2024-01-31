// 21. Merge Two Sorted Lists
// You are given the heads of two sorted linked lists list1 and list2.
// Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.
// Return the head of the merged linked list.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

var mergeTwoLists = function (list1, list2) {
  // create a variable to store the head of the merged list
  let listHead = new ListNode(0);

  // create a variable to hold the current head of the list
  let prev = listHead;

  //  iterate through the list1 and list2 and merging the two lists
  while (list1 && list2) {
    // checking if the value of the first list is less than or equal the value of the second list
    //[1,2,4] [1,3,4]   1 <= 1 add it to the merged listHead, 2 <= 3 added it to the listHead, 4 <= 4 add it to the listHead
    if (list1.val <= list2.val) {
      // set the previous list to the first list  [1,2,4]
      prev.next = list1;
      // set the first list to the next list
      list1 = list1.next; //2,4
    } else {
      // set the prev list to the second list  [1,3,4]  [list1=1,list2=1,list1=2,list2=3,list1=4,list2=4]
      prev.next = list2;
      // set the second list to the next list
      list2 = list2.next; //3,4
      // update the prev list  value to the last node in the merging list
    }
    prev = prev.next;
  }
  // if the first list is not null, set the prev list to the first list
  if (list1) prev.next = list1;
  // if the first list is null, set the prev list to the second list
  else if (list2) prev.next = list2;
  // return the head of the merged list
  return listHead.next;
};

// Example 1:
// console.log(mergeTwoLists([1,2,4],[1,3,4]))
// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]

// Example 2:
// Input: list1 = [], list2 = []
// Output: []

// Example 3:
// Input: list1 = [], list2 = [0]
// Output: [0]

// Constraints:

// The number of nodes in both lists is in the range [0, 50].
// -100 <= Node.val <= 100
// Both list1 and list2 are sorted in non-decreasing order.
