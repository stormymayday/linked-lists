class Node {
    data: number;
    next: Node | null;
    constructor(data: number, next: Node | null = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
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
        if (index < 0) return;

        if (index === 0) {
            this.insertFirst(data);
            return;
        }

        const newNode = new Node(data);
    }
}
