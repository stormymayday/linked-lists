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
}
