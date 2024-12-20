class Node {
    data: number;
    next: Node | null;
    constructor(data: number, next: Node | null = null) {
        this.data = data;
        this.next = next;
    }
}

export class LinkedList {
    head: Node | null;
    constructor() {
        this.head = null;
    }

    insertFirst(data: number): void {
        this.head = new Node(data, this.head);
    }

    size(): number {
        let count = 0;
        let current = this.head;
        while (current) {
            count++;
            current = current.next;
        }
        return count;
    }

    getFirst(): Node | null {
        return this.head;
    }

    getLast(): Node | null {
        if (!this.head) return null;
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        return current;
    }

    clear(): void {
        this.head = null;
    }

    removeFirst(): void {
        if (!this.head) return;
        this.head = this.head.next;
    }

    removeLast(): void {
        // Empty List
        if (!this.head) return;

        // One node
        if (!this.head.next) {
            this.head = null;
            return;
        }

        // Two or more nodes
        let prev = this.head;
        let current = this.head.next;
        while (current.next) {
            prev = current;
            current = current.next;
        }
        prev.next = null;
    }

    insertLast(data: number): void {
        // if (!this.head) {
        //     this.insertFirst(data);
        //     return;
        // }

        // const newNode = new Node(data);
        // let current = this.head;
        // while (current.next) {
        //     current = current.next;
        // }
        // current.next = newNode;
        // return;

        const lastNode = this.getLast();
        if (lastNode) {
            lastNode.next = new Node(data);
        } else {
            this.head = new Node(data);
        }
    }

    getAt(index: number): Node | null {
        if (index < 0) return null;
        let counter = 0;
        let node: Node | null = this.head;
        while (node) {
            if (counter === index) {
                return node;
            }
            counter++;
            node = node.next;
        }
        return null;
    }

    removeAt(index: number): void {
        if (index < 0 || !this.head) {
            return;
        }
        if (index === 0) {
            this.head = this.head.next;
            return;
        }
        const prev = this.getAt(index - 1);
        if (!prev || !prev.next) return;
        prev.next = prev.next.next;
    }

    insertAt(data: number, index: number): void {
        // if (index < 0) return;
        // if (index === 0) {
        //     this.insertFirst(data);
        //     return;
        // }
        // let prev = this.getAt(index - 1);
        // if(!prev) return;
        // let newNode = new Node(data);
        // if(!prev.next) {
        //     prev.next = newNode;
        // } else {
        //     newNode.next = prev.next;
        //     prev.next = newNode;
        // }

        if (!this.head) {
            this.head = new Node(data);
            return;
        }
        if (index === 0) {
            this.head = new Node(data, this.head);
            return;
        }
        const prev = this.getAt(index - 1) || this.getLast();
        if (!prev) return;
        const newNode = new Node(data, prev.next);
        prev.next = newNode;
    }

    forEach(fn: (node: Node) => void): void {
        let current = this.head;
        while (current) {
            fn(current);
            current = current.next;
        }
    }

    *[Symbol.iterator]() {
        let node = this.head;
        while (node) {
            yield node;
            node = node.next;
        }
    }

    midpoint(): Node | null {
        // List is empty
        if (!this.head) return null;

        // One node
        if (!this.head.next) return this.head;

        let slow: Node | null = this.head;
        let fast: Node | null = this.head;
        // For even lists, returns the left middle node
        while (fast.next && fast.next.next) {
            slow = slow!.next;
            fast = fast.next.next;
        }
        return slow;
    }

    circular(): boolean {
        if (!this.head) return false;

        let slow: Node | null = this.head;
        let fast: Node | null = this.head;

        while (fast && fast.next) {
            slow = slow!.next;
            fast = fast.next.next;
            if (slow === fast) {
                return true;
            }
        }
        return false;
    }

    fromLast(n: number): Node | null {
        if (n < 0) return null;

        let left: Node | null = this.head;
        let right: Node | null = this.head;

        for (let i = 0; i < n; i++) {
            if (!right) {
                return null;
            } else {
                right = right.next;
            }
        }

        while (right) {
            left = left!.next;
            right = right.next;
        }

        return left;
    }
}
