import "./style.css";
import LinkedList from "./linked-list";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <h1>Linked Lists</h1>
  </div>
`;

interface Person {
    name: string;
    age: number;
}

const personList = new LinkedList<Person>({ name: "John", age: 23 });
personList.push({ name: "Peter", age: 35 });
console.log(personList);
