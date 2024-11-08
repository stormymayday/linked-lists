import "./style.css";
import LinkedList from "./linked-list";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <h1>Linked Lists</h1>
  </div>
`;

const myList = new LinkedList<string | number>(1);
console.log(myList.printList());
myList.unshift(0);
console.log(myList.printList());
// console.log(myList.get(-1));
console.log(myList.get(0));
console.log(myList.get(1));
// console.log(myList.get(2));
myList.pop();
myList.pop();
console.log(myList.get(0));
