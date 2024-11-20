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

export class DoublyLinkedList {
    head: Node | null;
    tail: Node | null;
    length: number;
    constructor(value: number) {
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = this.head;
        this.length = 1;
    }
}
