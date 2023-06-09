/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    if (!(head)) return true;

    let values = [];
    let current = head;

    while (current) {
        values.push(current.val);
        current = current.next;
    }

    const stringfiedValues = values.join("");

    return palindromeCheck(stringfiedValues);
};

const palindromeCheck = (value) => {
    let i = 0;
    let j = value.length - 1;
    
    while (i <= j) {
        if (value[i] !== value[j]) return false;
        i++;
        j--;
    }
    
    return true;
};


// time complexity: O(n) - where n is the length of the input LL, driven by traversal through LL
// space complexity: O(n) - driven by need to store every value in the LL in our array



// idea: to traverse through the LL and then save the values at each node if their respecitve order to a string
//  then we'll use a helper function to see if that string is a palindrome
//      we'll leverage the reverse method to see if the string is the same forwards as it is backwards
//      return true if its the string is a palindrome and false otherwise












