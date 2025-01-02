class Node {
    value: number;
    next: Node | null;
    prev: Node | null;
    constructor(value: number) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

export default class MyLinkedList {
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
            let temp = null;
            if (index < this.length / 2) {
                temp = this.head;
                for (let i = 0; i < index; i++) {
                    temp = temp!.next;
                }
            } else {
                temp = this.tail;
                for (let i = this.length - 1; i > index; i--) {
                    temp = temp!.prev;
                }
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
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.length++;
    }

    removeAtHead(): void {
        if (!this.head || this.length === 0) {
            return;
        }
        const temp = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
            this.head!.prev = null;
            temp.next = null;
        }
        this.length--;
    }

    addAtTail(val: number): void {
        const newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail!.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
    }

    removeAtTail(): void {
        if (!this.head || !this.tail || this.length === 0) {
            return;
        }
        const temp = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = this.tail.prev;
            this.tail!.next = null;
            temp.prev = null;
        }
        this.length--;
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
            const after = before?.next;
            if (!before || !after) {
                return;
            } else {
                const newNode = new Node(val);
                before.next = newNode;
                newNode.prev = before;
                newNode.next = after;
                after.prev = newNode;
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
            const temp = this.getNode(index);
            if (!temp || !temp.next || !temp.prev) {
                return;
            } else {
                temp.prev.next = temp.next;
                temp.next.prev = temp.prev;
                temp.prev = null;
                temp.next = null;
                this.length--;
            }
        }
    }
}
