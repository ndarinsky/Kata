/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 function getLength(head) {
    let cur = head
    let length = 1
    while(cur.next) {
        cur = cur.next
        length++
    }
    return length
}

var addTwoNumbers = function(l1, l2) {
    const length1 = getLength(l1)
    const length2 = getLength(l2)
    
    let long = l1
    let short = l2
    if (length2 > length1) {
        long = l2
        short = l1
    }
    let dif = Math.abs(l1-l2)

    let cur1 = long
    let cur2 = short
    let resultHead = {val: 0, next: null}
    let curResult = resultHead
    for (let i=0; i<long; i++) {
        if (dif>0) {
            dif--
            result.push(cur1.val)
            cur1 = cur1.next
            continue
        }
        
        curResult.val = cur1.val + cur2.val
        curResult.next = {val: 0, next: null}
        curResult = result.next
        
        cur1 = cur1.next
        cur2 = cur2.next
    }
    
    return resultHead
};