/**
Implement Linked list
LC: https://leetcode.com/problems/design-linked-list/
LC: 707. Design Linked List
 */

function Node(val){
    this.val = val;
    this.next = null
}

var MyLinkedList = function() {
    this.head = null;
    this.size = 0;
};

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    // handling corner cases
    if(index < 0 || index >= this.size) return -1;

    let curr = this.head;
    for(let i=0;i<index;i++){
        curr = curr.next;
    }
    return curr.val;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    let newNode = new Node(val);
    // handling corner case
    if (!this.head) this.head = newNode;

    else {
        newNode.next = this.head;
        this.head = newNode;
    }
    this.size++;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    let newNode = new Node(val);

    // handling corner case as if we didnt handle this 
    // then curr.next on null (at first head will point to null) will fail
    if(this.head == null){
        this.head = newNode;
    } else {
        let curr = this.head;
        while(curr.next != null){
            curr = curr.next;
        }
        curr.next = newNode;
    }
    this.size++;
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    /**
     * Handling corner cases for invalid index and index for start and end
     */
    if (index < 0 || index > this.size) return;
    if (index === 0) return this.addAtHead(val);
    if (index === this.size) return this.addAtTail(val);
    const newNode = new Node(val);
    let curr = this.head;
    for (let i = 0; i < index - 1; i++) curr = curr.next;
    newNode.next = curr.next;
    curr.next = newNode;
    this.size++;
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    if(index < 0 || index >= this.size) return;

    if(index == 0){
        /**
         * handling corner cases
         * If the head is null, then head.next will throw error
         */
        this.head = this.head.next;
    } else {

        let curr = this.head;
        for (let i=0;i<index-1;i++){
            curr = curr.next;
        }
        curr.next = curr.next.next;
    }
    this.size--;
};

/** 
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */