class Node<Type> {
    value: Type;
    next: Node<Type> | null;

    constructor(value: Type) {
        this.value = value;
        this.next = null;
    }
}

export default class LinkedList<Type> {
    head: Node<Type>;
    tail: Node<Type>;
    length: number;

    constructor(value: Type) {
        const newNode = new Node(value);

        this.head = newNode;
        this.tail = this.head;
        this.length = 1;
    }
}
