class Node<Type> {
    value: Type;
    next: Node<Type> | null;

    constructor(value: Type) {
        this.value = value;
        this.next = null;
    }
}

export default class LinkedList<Type> {
    head: Node<Type>;
    tail: Node<Type>;
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
        if (!this.head) {
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

    pop() {
        // Edge Case - 1: Empty List
        if (!this.head) {
            return undefined;
        }
    }
}
