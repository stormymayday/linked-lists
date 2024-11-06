import "./style.css";
import LinkedList from "./linked-list";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <h1>Linked Lists</h1>
  </div>
`;

const myList = new LinkedList<string | number>(1);
myList.unshift(0);
console.log(myList.printList());
console.log(myList.getLength());
myList.pop();
myList.pop();
console.log(myList.isEmpty());
