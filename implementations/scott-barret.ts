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

    unshift(value: number): LinkedList {
        // Creating a new node with the given value
        const newNode = new Node(value);

        // Edge Case: Checking if list is empty
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

    shift(): Node | null {
        // Edge Case 1: If list is empty, return undefined
        if (!this.head) return null;

        // Storing the current head pointer
        const temp = this.head;

        // Move head pointer to the next node
        this.head = this.head.next;

        // Disconnect the to be removed node from list
        temp.next = null;

        // Decrement length
        this.length--;

        // Edge Case 2: If list is now empty (had only one node)
        if (this.length === 0) {
            // Set tail to null
            this.tail = null;
        }

        // Return the removed node
        return temp;
    }

    /**
     * Retrieves the node at the specified index.
     * @param index - The zero-based index of the node to retrieve.
     * @returns The node at the given index, or null if the index is out of bounds.
     */
    get(index: number): Node | null {
        // Edge Case: Checking if index is out of bounds or list is empty
        if (index < 0 || index >= this.length || !this.head) {
            return null;
        }

        // Storing the current head pointer
        let temp: Node | null = this.head;

        // Traversing the list to the specified index
        for (let i = 0; i < index && temp; i++) {
            // Moving temp to the next node
            temp = temp.next;
        }

        // Return the node at the index
        return temp;
    }

    /**
     * Updates the value of the node at the specified index.
     * @param index - The zero-based index of the node to update.
     * @param value - The new value to set.
     * @returns True if the update was successful, false if the index is out of bounds.
     */
    set(index: number, value: number): boolean {
        // Using the get method to retrieve the node at the specified index
        const temp = this.get(index);

        // If the node exists at the index, update its value
        if (temp) {
            temp.value = value;
            return true;
        } else {
            return false;
        }
    }
}
