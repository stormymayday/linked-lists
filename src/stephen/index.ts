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
}
