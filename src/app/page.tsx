import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Tech Blog!</h1>

      <div>
        <p>This is a blog about technology.</p>
        <p>
          I am a software developer and I am learning about web development.
        </p>
      </div>
    </main>
  );
}
