import React from "react";
import styles from "../styles/topNav.module.css";
import Link from "next/link";

export default function TopNav() {
  return (
    <nav className={styles.topNav}>
      <p className="text-1.5xl font-bold">William Ramsay</p>
      <ul className={styles.links}>
        <Link href="/education">Education</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/skills">Skills</Link>
        <Link href="/">Home</Link>
      </ul>
    </nav>
  );
}
