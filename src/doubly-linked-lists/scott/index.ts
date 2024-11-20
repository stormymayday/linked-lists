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
