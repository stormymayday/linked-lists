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
}
