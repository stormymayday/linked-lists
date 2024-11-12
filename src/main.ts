import "./style.css";
import LinkedList from "./linked-list";

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
console.log(myList.printList());
console.log(myList.findMiddleNode());
