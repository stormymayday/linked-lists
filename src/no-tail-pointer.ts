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

    get(index: number): number {
        if (index < 0 || index >= this.length) {
            return -1;
        }

        let temp = this.head;
        for (let i = 0; i < index; i++) {
            temp = temp!.next;
        }

        return temp!.value;
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
            let temp = this.head;
            while (temp.next) {
                temp = temp.next;
            }
            temp.next = newNode;
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

            let prev = this.head;
            for (let i = 0; i < index - 1; i++) {
                prev = prev!.next;
            }
            if (prev) {
                newNode.next = prev.next;
                prev.next = newNode;
                this.length++;
            }
        }
    }

    deleteAtIndex(index: number): void {
        if (index < 0 || index >= this.length) {
            return;
        } else if (index === 0) {
            this.head = this.head!.next;
            this.length--;
        } else {
            let prev = this.head;
            for (let i = 0; i < index - 1; i++) {
                prev = prev!.next;
            }
            if (prev && prev.next) {
                prev.next = prev.next.next;
                this.length--;
            }
        }
    }
}
