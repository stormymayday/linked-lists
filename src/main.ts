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
// console.log(myList.get(-1));
myList.set(0, "hello");
console.log(myList.get(0));
myList.set(1, [1, 2, 3]);
console.log(myList.get(1));
// console.log(myList.get(2));
