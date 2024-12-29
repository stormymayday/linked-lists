class Node {
    value: number;
    next: Node | null;
    prev: Node | null;

    constructor(value: number) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

export default class DoublyLinkedList {
    head: Node | null;
    tail: Node | null;
    length: number;

    constructor(value: number) {
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = newNode;
        this.length = 1;
    }

    push(value: number): DoublyLinkedList {
        // Creating a new node with a given value
        const newNode = new Node(value);

        // (Edge Case) Checking if the list is empty
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            // Connecting current tail's next pointer to the new node
            this.tail!.next = newNode;

            // Connecting new node's prev pointer to the tail
            newNode.prev = this.tail;

            // Moving the tail pointer to the new node
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop(): Node | null {
        // Edge Case - 1: Empty List
        if (!this.head || !this.tail || this.length === 0) {
            return null;
        }

        const temp = this.tail;

        // Edge Case - 2: One Item
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            // Moving tail to the previous node
            this.tail = temp.prev;

            // Unlinking the last node from the list
            this.tail!.next = null;

            // Clearing the previous pointer of the last node
            temp.prev = null;
        }

        this.length--;
        return temp;
    }

    unshift(value: number): DoublyLinkedList {
        const newNode = new Node(value);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }

        this.length++;
        return this;
    }
}
