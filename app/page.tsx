import LinkedList from "@/implementations/scott-barret";

export default function Home() {
    const myLinkedList = new LinkedList(4);

    console.log(myLinkedList);

    return (
        <main>
            <h1>Linked Lists</h1>
        </main>
    );
}
