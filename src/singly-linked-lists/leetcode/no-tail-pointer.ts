class Node {
    value: number;
    next: Node | null;

    constructor(value: number) {
        this.value = value;
        this.next = null;
    }
}

export class LinkedList {
    head: Node | null;
    length: number;

    constructor() {
        this.head = null;
        this.length = 0;
    }

    private getNode(index: number): Node | null {
        if (index < 0 || index >= this.length) {
            return null;
        }

        let current = this.head;
        for (let i = 0; i < index && current !== null; i++) {
            current = current.next;
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
        if (this.length === 0) {
            this.addAtHead(val);
            return;
        }

        const newNode = new Node(val);
        const lastNode = this.getNode(this.length - 1);
        if (lastNode) {
            lastNode.next = newNode;
            this.length++;
        }
    }

    addAtIndex(index: number, val: number): void {
        if (index < 0 || index > this.length) {
            return;
        }

        if (index === 0) {
            this.addAtHead(val);
            return;
        }

        const newNode = new Node(val);
        const prevNode = this.getNode(index - 1);

        if (prevNode) {
            newNode.next = prevNode.next;
            prevNode.next = newNode;
            this.length++;
        }
    }

    deleteAtIndex(index: number): void {
        if (index < 0 || index >= this.length) {
            return;
        }

        if (index === 0) {
            if (this.head) {
                this.head = this.head.next;
                this.length--;
            }
            return;
        }

        const prevNode = this.getNode(index - 1);
        if (prevNode && prevNode.next) {
            prevNode.next = prevNode.next.next;
            this.length--;
        }
    }
}
