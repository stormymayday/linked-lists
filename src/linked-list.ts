class Node<T> {
    value: T;
    next: Node<T> | null;

    constructor(value: T) {
        this.value = value;
        this.next = null;
    }
}

export default class LinkedList<T> {
    head: Node<T> | null;
    // head: Node<T>;
    tail: Node<T> | null;
    // tail: Node<T>;
    length: number;

    constructor(value: T) {
        const newNode = new Node(value);

        this.head = newNode;
        this.tail = this.head;
        this.length = 1;
    }

    push(value: T): LinkedList<T> {
        // 1. Creating a new node with a given value
        const newNode = new Node(value);

        // 2. (Edge Case) Checking if the list is empty
        if (!this.head || !this.tail) {
            // 2a. If empty, setting head and tail to the new node
            this.head = newNode;
            this.tail = newNode;
        } else {
            // 3. Connecting current tail's next pointer to the new node
            this.tail.next = newNode;

            // 4. Moving the tail pointer to the new node
            this.tail = newNode;
        }

        // 5. Incrementing the length
        this.length++;

        // 6. Returning the entire list
        return this;
    }

    pop(): Node<T> | undefined {
        // Edge Case - 1: Empty List
        if (!this.head || !this.tail) {
            // If the list is empty (no head), return undefined since there's nothing to remove
            return undefined;
        }

        // Two or more items:
        // Initializing two pointers starting at the head:

        // temp - will move to the last node by the end of the while loop
        let temp = this.head;
        // prev - will be at the second to last node by the end of the while loop
        let prev = this.head;

        // When loop ends:
        // - temp will be at the last node
        // - prev will be at the second to last node
        while (temp.next) {
            prev = temp;
            temp = temp.next;
        }

        // Setting tail to the second to last node (prev)
        this.tail = prev;
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

    unshift(value: T): LinkedList<T> {
        // Creating a new node with the given value
        const newNode = new Node(value);

        // Edge Case: Check if list is empty
        if (!this.head) {
            // If empty, set both head and tail to new node
            this.head = newNode;
            this.tail = newNode;
        } else {
            // If list not empty:
            // Set new node's next pointer
            newNode.next = this.head;
            // Point head to the new node
            this.head = newNode;
        }

        // Increment length
        this.length++;
        // Return the list
        return this;
    }
}
