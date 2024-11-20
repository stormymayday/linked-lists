import "./style.css";

// Singly Linked Lists:
import { LinkedList } from "./singly-linked-lists/scott/linked-list";
import { LinkedList as LeetCodeSLL } from "./singly-linked-lists/leetcode/no-tail-pointer";
import { LinkedList as StephenLL } from "./singly-linked-lists/stephen";

// Doubly Linked Lists:
import { DoublyLinkedList } from "./doubly-linked-lists/scott";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <h1>Linked Lists</h1>
  </div>
`;
