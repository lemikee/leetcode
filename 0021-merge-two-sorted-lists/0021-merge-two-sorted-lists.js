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

class Node {
    constructor(next, val) {
        this.next = null;
        this.val = null;
    }
}

var mergeTwoLists = function(list1, list2) {
    const dummyHead = new Node(null);
    let current1 = list1;
    let current2 = list2;
    let tail = dummyHead;
    
    while (current1 && current2) {
        if (current1.val < current2.val) {
            tail.next = current1;
            current1 = current1.next;
        } else {
            tail.next = current2;
            current2 = current2.next;
        }
        
        tail = tail.next;
    }
    
    tail.next = current1 || current2;
    return dummyHead.next;
};


// time complexity: O(min(m, n)) - where m and n are the lengths of the two input LLs, because we're only going to traverse as "far" as the length of the shorter lists
// space complexity: O(m + n)


// idea: use dummyHead pattern and create a new linked list which we will return
//  to travser through both list1 and list2, using ptrs for each LL, we will attach the lesser value to the tail of the dummyHead LL
//  but were not guranteed that both input LL will be of the same length, so we'll need to add the rest of the longer LL to our dummyHead LL, if it exists
//  once we're done with our traversal and take care diff LL lengths, then we'll return dummyHead.next, which should be the head out our merged/sorted LL

