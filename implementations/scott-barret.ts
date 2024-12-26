class Node {
    value: number;
    next: Node | null;

    constructor(value: number) {
        this.value = value;
        this.next = null;
    }
}

export default class LinkedList {
    head: Node | null;
    tail: Node | null;
    length: number;

    constructor(value: number) {
        const newNode = new Node(value);

        this.head = newNode;
        this.tail = this.head;

        this.length = 1;
    }

    push(value: number): LinkedList {
        // Creating a new node with a given value
        const newNode = new Node(value);

        // (Edge Case) Checking if the list is empty
        if (!this.head || !this.tail) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            // Connecting current tail's next pointer to the new node
            this.tail.next = newNode;

            // Moving the tail pointer to the new node
            this.tail = newNode;
        }

        this.length++;

        return this;
    }

    pop(): Node | null {
        // Edge Case - 1: Empty List
        if (!this.head) return null;

        // Two or more items:
        // Initializing two pointers starting at the head:
        // pre - will be at the second to last node by the end of the while loop
        let pre = this.head;
        // temp - will move to the last node by the end of the while loop
        let temp = this.head;

        while (temp.next) {
            pre = temp;
            temp = temp.next;
        }

        // Setting tail to the second to last node (pre)
        this.tail = pre;

        // Removing last node from the list
        this.tail.next = null;

        this.length--;

        // Edge Case - 2: One item
        if (this.length === 0) {
            // When length becomes 0, we need to set both head and tail to null
            this.head = null;
            this.tail = null;
        }

        // Returning removed (last) node
        return temp;
    }
}
