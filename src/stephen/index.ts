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
}
