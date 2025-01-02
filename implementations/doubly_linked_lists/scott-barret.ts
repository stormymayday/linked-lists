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

    set(index: number, value: number): boolean {
        // Using the get method to retrieve the node at the specified index
        const node = this.get(index);

        // If the node exists at the index, update its value
        if (!node) {
            return false;
        } else {
            node.value = value;
            return true;
        }
    }

    insert(index: number, value: number): boolean {
        // Checking if index is out of bounds
        if (index < 0 || index > this.length) {
            return false;
        } else if (index === 0) {
            // Inserting at the beginning of the list
            this.unshift(value);
            return true;
        } else if (index === this.length) {
            // Inserting at the end of the list
            this.push(value);
            return true;
        } else {
            const before = this.get(index - 1);
            const after = before?.next;
            if (!before || !after) {
                return false;
            } else {
                // Inserting in the middle of the list
                const newNode = new Node(value);
                before.next = newNode;
                newNode.prev = before;
                newNode.next = after;
                after.prev = newNode;
                this.length++;
                return true;
            }
        }
    }

    remove(index: number): Node | null {
        // Edge Case: Index out of bounds
        if (index < 0 || index >= this.length) {
            return null;
        } else if (index === 0) {
            // Removing the first node
            return this.shift();
        } else if (index === this.length - 1) {
            // Removing the last node
            return this.pop();
        } else {
            // Retrieving node at the index to be removed
            const temp = this.get(index);

            // Checking if the node exists and has adjacent nodes
            if (!temp || !temp.next || !temp.prev) {
                return null;
            } else {
                // Re-linking the adjacent nodes
                temp.prev.next = temp.next;
                temp.next.prev = temp.prev;

                // Clearing the removed node's pointers
                temp.next = null;
                temp.prev = null;

                this.length--;
                return temp;
            }
        }
    }
}
