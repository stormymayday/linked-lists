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

    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    getNode(index: number): Node | null {
        if (index < 0 || index >= this.length) {
            return null;
        } else {
            let temp = this.head;
            for (let i = 0; i < index && temp; i++) {
                temp = temp.next;
            }
            return temp;
        }
    }

    get(index: number): number {
        const node = this.getNode(index);
        if (!node) {
            return -1;
        } else {
            return node.value;
        }
    }

    addAtHead(val: number): void {
        const newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
    }

    removeAtHead(): void {
        if (!this.head) {
            return;
        } else {
            const temp = this.head;
            this.head = this.head.next;
            temp.next = null;
            this.length--;
            if (this.length === 0) {
                this.tail = null;
            }
        }
    }

    addAtTail(val: number): void {
        const newNode = new Node(val);
        if (!this.head || !this.tail) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
    }

    removeAtTail(): void {
        if (!this.head) {
            return;
        } else {
            let before = this.head;
            let temp = this.head;
            while (temp.next) {
                before = temp;
                temp = temp.next;
            }
            this.tail = before;
            this.tail.next = null;
            this.length--;
            if (this.length === 0) {
                this.head = null;
                this.tail = null;
            }
        }
    }

    addAtIndex(index: number, val: number): void {
        if (index < 0 || index > this.length) {
            return;
        } else if (index === 0) {
            this.addAtHead(val);
            return;
        } else if (index === this.length) {
            this.addAtTail(val);
            return;
        } else {
            const before = this.getNode(index - 1);
            if (!before) {
                return;
            } else {
                const newNode = new Node(val);
                newNode.next = before.next;
                before.next = newNode;
                this.length++;
            }
        }
    }

    deleteAtIndex(index: number): void {
        if (index < 0 || index >= this.length) {
            return;
        } else if (index === 0) {
            this.removeAtHead();
            return;
        } else if (index === this.length - 1) {
            this.removeAtTail();
            return;
        } else {
            const before = this.getNode(index - 1);
            if (!before || !before.next) {
                return;
            } else {
                const temp = before.next;
                before.next = temp.next;
                temp.next = null;
                this.length--;
                return;
            }
        }
    }
}
