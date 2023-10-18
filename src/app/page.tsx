import Link from "next/link";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      Hello NextJS
      <Link href="todo">Todo</Link>
    </main>
  );
}
