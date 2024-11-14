class Node {
    value: number;
    next: Node | null;
    constructor(value?: number) {
        this.value = value === undefined ? 0 : value;
        this.next = null;
    }
}

class MyLinkedList {
    head: Node | null;
    length: number;

    constructor() {
        this.head = null;
        this.length = 0;
    }

    getNode(index: number): Node | null {
        if (index < 0 || index >= this.length) return null;
        let current = this.head;
        for (let i = 0; i < index; i++) {
            current = current!.next;
        }
        return current;
    }

    get(index: number): number {
        const node = this.getNode(index);
        return node ? node.value : -1;
    }

    addAtHead(val: number): void {
        const newNode = new Node(val);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
    }

    addAtTail(val: number): void {
        if (!this.head) {
            this.addAtHead(val);
            return;
        }
        const newNode = new Node(val);
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = newNode;
        this.length++;
    }

    addAtIndex(index: number, val: number): void {
        if (index < 0 || index > this.length) {
            return;
        }
        if (index === 0) {
            this.addAtHead(val);
            return;
        }

        const prev = this.getNode(index - 1);
        if (prev) {
            const newNode = new Node(val);
            newNode.next = prev.next;
            prev.next = newNode;
            this.length++;
        }
    }

    deleteAtIndex(index: number): void {
        if (index < 0 || index >= this.length) {
            return;
        }

        if (index === 0) {
            this.head = this.head!.next;
            this.length--;
            return;
        }
        const prev = this.getNode(index - 1);
        if (prev && prev.next) {
            prev.next = prev.next.next;
            this.length--;
        }
    }
}
