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
