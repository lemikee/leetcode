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
var mergeTwoLists = function(list1, list2) {
    const dummyHead = new ListNode(null);
    tail = dummyHead;
    current_one = list1;
    current_two = list2;
    
    while (current_one && current_two) {
        if (current_one.val < current_two.val) {
            tail.next = current_one;
            current_one = current_one.next;
        } else {
            tail.next = current_two;
            current_two = current_two.next;
        }
        
        tail = tail.next;
    }
    

    tail.next = current_one || current_two;
    
    return dummyHead.next;
};


// time complexity: O(min(m, n)), where m and n are the lengths of the two input lists
// space complexity: O(1)


// idea: create a dummyHead for our merged/sorted linked list
// traverse through each of our input LL and compare the values for each node we are focused on in the respecitve lists
// and then we're going to append the node of lesser value to the tail of our new merged/sorted LL
// append the end of the longer linked list, if it exists, to the tail of our new LL
// return the head of our new LL









