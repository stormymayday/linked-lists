import "./style.css";
import { Node } from "./linked-list.ts";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <h1>Linked Lists</h1>
  </div>
`;

const myNode = new Node({ name: "john", age: 23 });
console.log(myNode);
