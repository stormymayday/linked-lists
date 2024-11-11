// Node class represents each element in the LinkedList
// Generic type T allows for flexible data types
class Node<T> {
    value: T;
    next: Node<T> | null;

    constructor(value: T) {
        // Storing the data
        this.value = value;
        // Initializing next pointer to null
        this.next = null;
    }
}

export default class LinkedList<T> {
    // Head pointer - reference to first node in list
    head: Node<T> | null;
    // Tail pointer - reference to last node in list
    tail: Node<T> | null;
    // Number of nodes in list
    length: number;

    constructor(value: T) {
        // Creating new node with given value
        const newNode = new Node(value);

        // For first node, head and tail point to it
        this.head = newNode;
        this.tail = this.head;

        // List starts with one node
        this.length = 1;
    }

    /**
     * Adds a new node to the end of the list
     * @param value - The value to add
     * @returns The linked list instance
     */
    push(value: T): LinkedList<T> {
        // Creating a new node with a given value
        const newNode = new Node(value);

        // (Edge Case) Checking if the list is empty
        if (!this.head || !this.tail) {
            // If empty, setting head and tail to the new node
            this.head = newNode;
            this.tail = newNode;
        } else {
            // Connecting current tail's next pointer to the new node
            this.tail.next = newNode;

            // Moving the tail pointer to the new node
            this.tail = newNode;
        }

        // Incrementing the length
        this.length++;

        // Returning the entire list
        return this;
    }

    /**
     * Removes and returns the last node in the list
     * @returns The removed node or undefined if list is empty
     */
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

    /**
     * Adds a new node to the start of the list
     * @param value - The value to add
     * @returns The linked list instance
     */
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

    /**
     * Removes and returns the first node in the list
     * @returns {Node<T> | undefined} The removed node or undefined if list is empty
     */
    shift(): Node<T> | undefined {
        // Edge Case: If list is empty, return undefined
        if (!this.head) {
            return undefined;
        } else {
            // Storing the current head pointer
            let temp = this.head;

            // Move head pointer to the next node
            this.head = this.head.next;

            // Disconnect the removed node from list
            temp.next = null;

            // Decrement length
            this.length--;

            // Edge Case: If list is now empty (had only one node)
            if (this.length === 0) {
                // Set tail to null
                this.tail = null;
            }

            // Return the removed node
            return temp;
        }
    }

    /**
     * Retrieves the node at the specified index
     * @param index - Zero-based index of the node to retrieve
     * @returns {Node<T> | undefined} The node at the specified index or undefined if index is invalid or list is empty
     */
    get(index: number): Node<T> | undefined {
        // Edge Case: Checking if index is out of bounds or list is empty
        if (index < 0 || index >= this.length || !this.head) {
            return undefined;
        }

        // Storing the current head pointer
        let temp: Node<T> | null = this.head;

        // Traversing the list to the specified index
        for (let i = 0; i < index; i++) {
            // Moving temp to the next node
            temp = temp!.next;
        }

        // Return the node at the index
        return temp ?? undefined;
    }

    /**
     * Updates the value of the node at the specified index
     * @param index - Zero-based index of the node to update
     * @param value - New value to set for the node
     * @returns {boolean} True if the update was successful, false if the index is invalid
     */
    set(index: number, value: T): boolean {
        // // Checking if index is out of bounds or list is empty
        // if (index < 0 || index >= this.length || !this.head) {
        //     return false;
        // }

        // // Storing the current head pointer
        // let temp: Node<T> | null = this.head;

        // // Traversing the list to the specified index
        // for (let i = 0; i < index; i++) {
        //     // Moving temp to the next node
        //     temp = temp!.next;
        // }

        // Using the get method to retrieve the node at the specified index
        let temp = this.get(index);

        // If the node exists at the index, update its value
        if (temp) {
            temp.value = value;
            return true;
        } else {
            return false;
        }
    }

    /**
     * Inserts a new node at the specified index
     * @param index - Zero-based index where the node should be inserted
     * @param value - Value to store in the new node
     * @returns {boolean} True if insertion was successful, false if index is invalid
     */
    insert(index: number, value: T): boolean {
        // Checking if index is out of bounds
        if (index < 0 || index > this.length) {
            return false;
        }

        // Inserting at the beginning of the list
        if (index === 0) {
            this.unshift(value);
            return true;
        }

        // Inserting at the end of the list
        if (index === this.length) {
            this.push(value);
            return true;
        }

        // Inserting in the middle of the list
        const newNode = new Node(value);
        const temp = this.get(index - 1);
        if (temp) {
            newNode.next = temp.next;
            temp.next = newNode;
            this.length++;
            return true;
        } else {
            return false;
        }
    }

    /**
     * Removes the node at the specified index
     * @param index - Zero-based index of the node to remove
     * @returns {Node<T> | undefined} The removed node, or undefined if index is invalid
     */
    remove(index: number): Node<T> | undefined {
        // Edge Case: Checking if index is out of bounds
        if (index < 0 || index >= this.length) {
            return undefined;
        }

        // Removing the first node
        if (index === 0) {
            return this.shift();
        }

        // Removing the last node
        if (index === this.length - 1) {
            return this.pop();
        }

        // Retrieve the node before the one to be removed
        const before = this.get(index - 1);
        // `before` is guaranteed to be non-null here
        const temp = before!.next!;

        // Moving before's pointer past temp
        before!.next = temp.next;
        // Removing temp from the list
        temp.next = null;

        // Decrementing the length
        this.length--;

        // Returning the removed node
        return temp;
    }

    /**
     * Reverses the linked list in place
     * @returns {LinkedList<T>} The reversed linked list
     */
    reverse(): LinkedList<T> {
        // Swapping head and tail
        let temp = this.head;
        this.head = this.tail;
        this.tail = temp;

        // Initializing pointers for reversal
        let next: Node<T> | null = null;
        let prev: Node<T> | null = null;

        // Iterating through the list and reversing links
        for (let i = 0; i < this.length; i++) {
            // Storing next node
            next = temp!.next;

            // Reversing the current node's pointer
            temp!.next = prev;

            // Moving prev forward
            prev = temp;

            // Move temp forward to the next node
            temp = next;
        }

        return this;
    }

    // Utility method to print the list values
    printList(): T[] {
        const values: T[] = [];
        let current = this.head;
        while (current) {
            values.push(current.value);
            current = current.next;
        }
        return values;
    }

    // Utility method to get the length
    getLength(): number {
        return this.length;
    }

    // Utility method to check if list is empty
    isEmpty(): boolean {
        return this.length === 0;
    }
}
