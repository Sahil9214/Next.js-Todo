import Image from "next/image";
import styles from "./page.module.css";
import Todo from "./components/Todo";

export default function Home() {
  return (
    <main>
      <Todo />
    </main>
  );
}
