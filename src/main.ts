import "./style.css";
import LinkedList from "./linked-list";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <h1>Linked Lists</h1>
  </div>
`;

const numberList = new LinkedList<number>(1);
const stringList = new LinkedList<string>("Hello");

interface Person {
    name: string;
    age: number;
}

const personList = new LinkedList<Person>({ name: "John", age: 23 });
