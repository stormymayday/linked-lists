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
        // Edge Case 1: If list is empty
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

    /**
     * Inserts a new node with the given value at the specified index.
     * @param index - The zero-based index at which to insert the new node.
     * @param value - The value of the new node.
     * @returns True if the insertion was successful, false if the index is out of bounds.
     */
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
            // Inserting in the middle of the list
            const pre = this.get(index - 1);
            if (!pre) {
                return false;
            } else {
                const newNode = new Node(value);
                newNode.next = pre?.next;
                pre.next = newNode;
                this.length++;
                return true;
            }
        }
    }

    /**
     * Removes the node at the specified index.
     * @param index - The zero-based index of the node to remove.
     * @returns The removed node, or null if the index is out of bounds.
     */
    remove(index: number): Node | null {
        // Edge Case: Checking if index is out of bounds
        if (index < 0 || index >= this.length) {
            return null;
        } else if (index === 0) {
            // Removing the first node
            return this.shift();
        } else if (index === this.length - 1) {
            // Removing the last node
            return this.pop();
        } else {
            // Retrieving the node before the one to be removed
            const pre = this.get(index - 1);

            // Checking if the node before and the one to be removed exist
            if (!pre || !pre.next) {
                return null;
            } else {
                // Retrieving the node to be removed
                const temp = pre.next;

                // Moving before's pointer past temp
                pre.next = temp?.next;

                // Unlinking temp
                temp.next = null;

                // Decrementing the length
                this.length--;

                // Returning the removed node
                return temp;
            }
        }
    }

    /**
     * Reverses the linked list in place.
     * @returns The reversed linked list.
     */
    reverse(): LinkedList {
        if (this.length === 0) {
            return this;
        }

        // Swapping head and tail
        let temp = this.head;
        this.head = this.tail;
        this.tail = temp;

        // Initializing pointers for reversal
        let before: Node | null = null;
        let after: Node | null = null;

        // Iterating through the list and reversing pointers
        for (let i = 0; i < this.length; i++) {
            after = temp!.next;
            temp!.next = before;
            before = temp;
            temp = after;
        }

        return this;
    }

    /**
     * Finds the middle node of the list.
     * @returns {Node | null} The middle node or null if list is empty.
     */
    findMiddleNode(): Node | null {
        // 1. Initialize slow pointer to the head of the list
        let slow: Node | null = this.head;

        // 2. Initialize fast pointer to the head of the list
        let fast: Node | null = this.head;

        // 3. Loop while fast pointer is not null and fast pointer's next node is not null
        while (fast !== null && fast.next !== null) {
            // a. Move slow pointer one step ahead in the list
            slow = slow!.next;

            // b. Move fast pointer two steps ahead in the list
            fast = fast.next.next;
        }

        // 4. Return slow pointer (middle node found)
        return slow;
    }

    /**
     * Detects if there is a loop in the linked list using Floyd's cycle-finding algorithm.
     * @returns {boolean} True if there is a loop, otherwise false.
     */
    hasLoop(): boolean {
        let slow: Node | null = this.head;
        let fast: Node | null = this.head;

        // Traverse the list with two pointers
        while (fast && fast.next) {
            // Move slow pointer by one step if it exists
            slow = slow ? slow.next : null;

            // Move fast pointer by two steps
            fast = fast.next.next;

            // If the slow and fast pointers meet, there is a cycle
            if (slow === fast) {
                return true;
            }
        }

        // If fast reaches the end (null), there is no cycle
        return false;
    }
}
