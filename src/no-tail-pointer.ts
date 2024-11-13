class Node {
    value: number;
    next: Node | null;
    constructor(value?: number) {
        this.value = value === undefined ? 0 : value;
        this.next = null;
    }
}

class LinkedList {
    head: Node | null;
    length: number;

    constructor() {
        this.head = null;
        this.length = 0;
    }
}
