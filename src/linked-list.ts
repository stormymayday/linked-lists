export class Node<Type> {
    value: Type;
    next: Node<Type> | null;

    constructor(value: Type) {
        this.value = value;
        this.next = null;
    }
}
