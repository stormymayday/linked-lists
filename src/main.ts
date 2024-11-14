import "./style.css";
import LinkedList from "./linked-list";
import { MyLinkedList } from "./no-tail-pointer";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <h1>Linked Lists</h1>
  </div>
`;

const myList = new LinkedList<string | number | number[]>(1);
// myList.push(2);
// myList.push(3);
// myList.push(4);
// myList.pop();
// console.log(myList.printList());
// console.log(myList.findMiddleNode());

const myLinkedList = new MyLinkedList();
myLinkedList.addAtHead(1);
console.log(myLinkedList);
myLinkedList.addAtTail(3);
console.log(myLinkedList);
myLinkedList.addAtIndex(1, 2);
console.log(myLinkedList);
console.log(myLinkedList.get(1));
myLinkedList.deleteAtIndex(1);
console.log(myLinkedList);
console.log(myLinkedList.get(0));
