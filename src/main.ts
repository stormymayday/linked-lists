import "./style.css";
import LinkedList from "./linked-list";
import { MyLinkedList } from "./no-tail-pointer";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div class="linkedlist-visualizer">
  <div class="card">
    <div class="card-header">
      <h2>LinkedList Visualizer</h2>
    </div>
    <div class="card-content">
      <!-- List Visualization -->
      <div id="list-visualization" class="list-visualization"></div>

      <!-- Controls -->
      <div class="controls">
        <div class="input-group">
          <input type="number" id="value-input" placeholder="Enter value" class="input">
          <button id="push-btn" class="btn">Push</button>
          <button id="pop-btn" class="btn btn-outline">Pop</button>
          <button id="unshift-btn" class="btn">Unshift</button>
          <button id="shift-btn" class="btn btn-outline">Shift</button>
        </div>
        
        <div class="input-group">
          <button id="reverse-btn" class="btn btn-outline">Reverse</button>
          <button id="find-middle-btn" class="btn btn-outline">Find Middle</button>
        </div>
      </div>

      <!-- Status Message -->
      <div id="status-message" class="status-message"></div>

      <!-- List Information -->
      <div id="list-info" class="list-info"></div>
    </div>
  </div>
`;

class LinkedListVisualizer {
    private list: LinkedList<number>;
    private valueInput: HTMLInputElement;
    private listVisualization: HTMLElement;
    private statusMessage: HTMLElement;
    private listInfo: HTMLElement;

    constructor() {
        this.list = new LinkedList(1);
        this.valueInput = document.getElementById(
            "value-input"
        ) as HTMLInputElement;
        this.listVisualization = document.getElementById(
            "list-visualization"
        ) as HTMLElement;
        this.statusMessage = document.getElementById(
            "status-message"
        ) as HTMLElement;
        this.listInfo = document.getElementById("list-info") as HTMLElement;

        this.initializeEventListeners();
        this.updateVisualization();
    }

    private initializeEventListeners(): void {
        document
            .getElementById("push-btn")
            ?.addEventListener("click", () => this.handlePush());
        document
            .getElementById("pop-btn")
            ?.addEventListener("click", () => this.handlePop());
        document
            .getElementById("unshift-btn")
            ?.addEventListener("click", () => this.handleUnshift());
        document
            .getElementById("shift-btn")
            ?.addEventListener("click", () => this.handleShift());
        document
            .getElementById("reverse-btn")
            ?.addEventListener("click", () => this.handleReverse());
        document
            .getElementById("find-middle-btn")
            ?.addEventListener("click", () => this.handleFindMiddle());
    }

    private updateMessage(msg: string): void {
        this.statusMessage.textContent = msg;
        this.statusMessage.classList.add("show");
        setTimeout(() => {
            this.statusMessage.classList.remove("show");
        }, 3000);
    }

    private updateVisualization(): void {
        const values = this.list.printList();
        this.listVisualization.innerHTML = values
            .map(
                (value, index) => `
            <div class="node">
              <div class="node-content">${value}</div>
              <div class="node-index">Node ${index}</div>
            </div>
            ${index < values.length - 1 ? '<div class="arrow">→</div>' : ""}
          `
            )
            .join("");

        this.listInfo.textContent = `Length: ${this.list.getLength()} | Head: ${
            this.list.head?.value
        } | Tail: ${this.list.tail?.value} | Has Loop: ${
            this.list.hasLoop() ? "Yes" : "No"
        }`;
    }

    private handlePush(): void {
        const value = Number(this.valueInput.value);
        if (!isNaN(value)) {
            this.list.push(value);
            this.updateVisualization();
            this.updateMessage(`Added ${value} to the end`);
            this.valueInput.value = "";
        }
    }

    private handlePop(): void {
        const popped = this.list.pop();
        if (popped) {
            this.updateVisualization();
            this.updateMessage(`Removed ${popped.value} from the end`);
        }
    }

    private handleUnshift(): void {
        const value = Number(this.valueInput.value);
        if (!isNaN(value)) {
            this.list.unshift(value);
            this.updateVisualization();
            this.updateMessage(`Added ${value} to the start`);
            this.valueInput.value = "";
        }
    }

    private handleShift(): void {
        const shifted = this.list.shift();
        if (shifted) {
            this.updateVisualization();
            this.updateMessage(`Removed ${shifted.value} from the start`);
        }
    }

    private handleReverse(): void {
        this.list.reverse();
        this.updateVisualization();
        this.updateMessage("List reversed");
    }

    private handleFindMiddle(): void {
        const middle = this.list.findMiddleNode();
        if (middle) {
            this.updateMessage(`Middle node value: ${middle.value}`);
        }
    }
}

// Initialize the visualizer when the DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
    new LinkedListVisualizer();
});
