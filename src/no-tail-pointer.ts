class Node {
    value: number;
    next: Node | null;
    constructor(value?: number) {
        this.value = value === undefined ? 0 : value;
        this.next = null;
    }
}

export class MyLinkedList {
    head: Node | null;
    length: number;

    constructor() {
        this.head = null;
        this.length = 0;
    }

    get(index: number): number {
        if (index < 0 || index >= this.length) {
            return -1;
        } else {
            let current = this.head;
            for (let i = 0; i < index; i++) {
                current = current!.next;
            }
            return current!.value;
        }
    }

    addAtHead(val: number): void {
        const newNode = new Node(val);

        if (!this.head) {
            this.head = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }

        this.length++;
    }

    addAtTail(val: number): void {
        if (!this.head) {
            this.addAtHead(val);
        } else {
            const newNode = new Node(val);

            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
            this.length++;
        }
    }

    addAtIndex(index: number, val: number): void {
        if (index < 0 || index > this.length) {
            return;
        } else if (index === 0) {
            this.addAtHead(val);
        } else {
            const newNode = new Node(val);

            let current = this.head;
            for (let i = 0; i < index - 1; i++) {
                current = current!.next;
            }
            newNode.next = current!.next;
            current!.next = newNode;
            this.length++;
        }
    }

    deleteAtIndex(index: number): void {
        if (index < 0 || index >= this.length) {
            return;
        } else if (index === 0) {
            this.head = this.head!.next;
            this.length--;
        } else {
            let current = this.head;
            for (let i = 0; i < index - 1; i++) {
                current = current!.next;
            }
            current!.next = current!.next!.next;
            this.length--;
        }
    }
}
