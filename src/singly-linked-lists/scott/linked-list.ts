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

    /**
     * Adds a new node to the end of the list.
     * @param value - The value to add.
     * @returns {LinkedList} The linked list instance.
     */
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

    /**
     * Removes and returns the last node in the list.
     * @returns {Node | undefined} The removed node or undefined if list is empty.
     */
    pop(): Node | undefined {
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
     * Adds a new node to the start of the list.
     * @param value - The value to add.
     * @returns {LinkedList} The linked list instance.
     */
    unshift(value: number): LinkedList {
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
     * @returns {Node | undefined} The removed node or undefined if list is empty
     */
    shift(): Node | undefined {
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
     * @returns {Node | undefined} The node at the specified index or undefined if index is invalid or list is empty
     */
    get(index: number): Node | undefined {
        // Edge Case: Checking if index is out of bounds or list is empty
        if (index < 0 || index >= this.length || !this.head) {
            return undefined;
        }

        // Storing the current head pointer
        let temp: Node | null = this.head;

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
    set(index: number, value: number): boolean {
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
    insert(index: number, value: number): boolean {
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
     * @returns {Node | undefined} The removed node, or undefined if index is invalid
     */
    remove(index: number): Node | undefined {
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
     * @returns {LinkedList} The reversed linked list
     */
    reverse(): LinkedList {
        // Swapping head and tail
        let temp = this.head;
        this.head = this.tail;
        this.tail = temp;

        // Initializing pointers for reversal
        let next: Node | null = null;
        let prev: Node | null = null;

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

    /**
     * Finds Kth node from the end
     * @param k - Kth number from the end
     * @returns {Node | null} Kth node from the end, or null
     */
    findKthFromEnd(k: number): Node | null {
        if (k < 0) return null;

        // Initializing left and right pointers at the head
        let left: Node | null = this.head;
        let right: Node | null = this.head;

        // Move right pointer k steps ahead
        for (let i = 0; i < k; i++) {
            // If right reaches null, k is out of range
            if (!right) {
                return null;
            }
            right = right.next;
        }

        // Iterating until right reaches the end
        while (right) {
            // Moving both pointers one step ahead
            left = left!.next;
            right = right.next;
        }

        // When right reaches end, left is at kth from end
        return left;
    }

    /**
     * Partitions the list around a value x, such that all nodes less than x come
     * before all nodes greater than or equal to x. The original relative order
     * of the nodes is preserved.
     * @param x - The value to partition around
     */
    partitionList(x: number): void {
        if (!this.head) return;

        let dummy1: Node | null = new Node(0);
        let dummy2: Node | null = new Node(0);

        let ptr1 = dummy1;
        let ptr2 = dummy2;

        let current: Node | null = this.head;

        while (current) {
            if (current.value < x) {
                ptr1.next = new Node(current.value);
                ptr1 = ptr1.next;
            } else {
                ptr2.next = new Node(current.value);
                ptr2 = ptr2.next;
            }
            current = current.next;
        }

        ptr1.next = dummy2.next;

        ptr2.next = null;

        this.head = dummy1.next;
        this.tail = ptr2;
    }

    /**
     * Removes all duplicate values from the linked list, keeping only the first occurrence of each value.
     * Uses a Set to track seen values, making it an O(n) time complexity operation.
     *
     * Example:
     * Before: 1 -> 2 -> 2 -> 3 -> 1 -> 4
     * After:  1 -> 2 -> 3 -> 4
     *
     * Time Complexity: O(n) where n is the number of nodes in the list
     * Space Complexity: O(n) to store the Set of unique values
     *
     * @returns {void}
     */
    removeDuplicates(): void {
        // Handle empty list case
        if (!this.head) return;

        // Create a Set to track unique values
        const uniqueValues: Set<number> = new Set();

        let prev: Node | null = null;
        let current: Node | null = this.head;

        // Traverse the list
        while (current) {
            if (uniqueValues.has(current.value)) {
                // Remove duplicate node
                prev!.next = current.next;

                // Update tail if we're removing the last node
                if (current === this.tail) {
                    this.tail = prev;
                }

                this.length--;
            } else {
                // Add new value to Set and move prev pointer
                uniqueValues.add(current.value);
                prev = current;
            }
            current = current.next;
        }
    }

    /**
     * Converts a binary number represented as a linked list to its decimal equivalent.
     * Each node should contain either 0 or 1, with the most significant bit at the head.
     *
     * Example:
     * List: 1 -> 0 -> 1 -> 1
     * Calculation: (1 * 2³) + (0 * 2²) + (1 * 2¹) + (1 * 2⁰) = 8 + 0 + 2 + 1 = 11
     *
     * Time Complexity: O(n) where n is the number of nodes in the list
     * Space Complexity: O(1) as we only use a single number variable
     *
     * @returns {number} The decimal equivalent of the binary number
     */
    binaryToDecimal(): number {
        // Handle empty list case
        if (!this.head) return 0;

        // Initialize decimal number
        let num: number = 0;
        let current: Node | null = this.head;

        // Traverse the list, building the decimal number
        while (current) {
            // For each digit, multiply current result by 2 and add current digit
            num = num * 2 + current.value;
            current = current.next;
        }

        return num;
    }

    /**
     * Reverses a portion of the linked list between positions m and n (inclusive).
     * Position counting starts at 0.
     *
     * Example:
     * Before: 1 -> 2 -> 3 -> 4 -> 5, m = 1, n = 3
     * After:  1 -> 4 -> 3 -> 2 -> 5
     *
     * Time Complexity: O(n) where n is the distance to position n
     * Space Complexity: O(1) as we only use a constant amount of extra space
     *
     * @param m - Starting position (0-based indexing)
     * @param n - Ending position (0-based indexing)
     * @returns {void}
     */
    reverseBetween(m: number, n: number): void {
        if (!this.head) return;

        let dummyNode: Node | null = new Node(0);
        dummyNode.next = this.head;

        let pre: Node | null = dummyNode;
        let curr: Node | null = this.head;

        for (let i = 0; i < m; i++) {
            pre = curr;
            if (curr.next) {
                curr = curr.next;
            } else {
                return;
            }
        }

        let beforeLeft: Node | null = pre;
        let leftNode: Node | null = curr;

        pre = null;
        curr = leftNode;
        let next: Node | null = null;
        for (let i = 0; i < n - m + 1; i++) {
            next = curr!.next;
            curr!.next = pre;
            pre = curr;
            curr = next;
        }

        let rightNode: Node | null = pre;
        let afterRight: Node | null = curr;

        beforeLeft.next = rightNode;
        leftNode.next = afterRight;

        this.head = dummyNode.next;
    }

    /**
     * Prints all values in the linked list.
     * @returns {number[]} An array of all values in the linked list.
     */
    printList(): number[] {
        const values: number[] = [];
        let current = this.head;
        while (current) {
            values.push(current.value);
            current = current.next;
        }
        return values;
    }

    /**
     * Utility method to get the current length of the linked list.
     * @returns {number} The number of nodes in the linked list.
     */
    getLength(): number {
        return this.length;
    }

    /**
     * Checks if the list is empty.
     * @returns {boolean} True if the list is empty, otherwise false.
     */
    isEmpty(): boolean {
        return this.length === 0;
    }
}
