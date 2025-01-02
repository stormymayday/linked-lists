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
        // Creating a new node with the given value
        const newNode = new Node(value);

        // Edge Case: Checking if list is empty
        if (!this.head) {
            // If empty, set both head and tail to new node
            this.head = newNode;
            this.tail = newNode;
        } else {
            // Setting new node's next pointer pont to the head
            newNode.next = this.head;

            // Pointing head's prev pointer to the new node
            this.head.prev = newNode;

            // Pointing head to the new node
            this.head = newNode;
        }

        this.length++;
        return this;
    }

    shift(): Node | null {
        // Edge Case 1: If list is empty
        if (!this.head || this.length === 0) {
            return null;
        }
        const temp = this.head;
        // Edge Case 2: One Item
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            // Moving the head pointer to the next node
            this.head = this.head.next;

            // Disconnecting node from the list
            this.head!.prev = null;
            temp.next = null;
        }
        this.length--;
        return temp;
    }

    get(index: number): Node | null {
        // Edge Case: Index is out of bounds
        if (index < 0 || index >= this.length) {
            return null;
        } else {
            let temp = null;
            if (index < this.length / 2) {
                // Starting from head if index is in the first half of the list
                temp = this.head;
                for (let i = 0; i < index; i++) {
                    temp = temp!.next;
                }
            } else {
                // Otherwise, starting from tail
                temp = this.tail;
                for (let i = this.length - 1; i > index; i--) {
                    temp = temp!.prev;
                }
            }
            return temp;
        }
    }
}
