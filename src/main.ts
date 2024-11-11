import "./style.css";
import LinkedList from "./linked-list";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <h1>Linked Lists</h1>
  </div>
`;

const myList = new LinkedList<string | number | number[]>(1);
console.log(myList.printList());
myList.unshift(0);
console.log(myList.printList());

console.log(myList.insert(2, "insert value"));
console.log(myList.printList());

console.log(myList.remove(3));
console.log(myList.printList());

myList.reverse();
console.log(myList.printList());
