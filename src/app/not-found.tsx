/* Imports */

// react & nextjs
import { FC } from "react";

// components
import Link from "next/link";

// libs

// utils

// types & interfaces

// css
import styles from "@/app/not-found.module.css";

interface Props {}

const NotFound: FC<Props> = ({}) => {
  return (
    <main className={styles.main}>
      <div className={styles.card}>
        <h2>There was a problem 😑</h2>
        <p>We could not find the page you were looking for.</p>
        <div className={styles.container}>
          <p>404</p>
          <div></div>
          <p>
            Go back to the <Link href="/">home page</Link>
          </p>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
