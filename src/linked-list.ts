class Node<Type> {
    value: Type;
    next: Node<Type> | null;

    constructor(value: Type) {
        this.value = value;
        this.next = null;
    }
}

export default class LinkedList<Type> {
    head: Node<Type> | null;
    // head: Node<Type>;
    tail: Node<Type> | null;
    // tail: Node<Type>;
    length: number;

    constructor(value: Type) {
        const newNode = new Node(value);

        this.head = newNode;
        this.tail = this.head;
        this.length = 1;
    }

    push(value: Type): LinkedList<Type> {
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

    pop(): Node<Type> | undefined {
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
}
