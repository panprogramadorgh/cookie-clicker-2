/* Imports */

// react & nextjs
import { FC, useEffect, useState } from "react";

// components
import Phrases from "@/ui/components/Home/Phrases";
import Cookie from "@/ui/components/Cookie/Cookie";
import Link from "next/link";
import Header from "@/ui/components/Generic/Header/Header";

// libs

// utils

// types & interfaces

// css
import styles from "@/app/page.module.css";

interface Props {}

const Home: FC<Props> = ({}) => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <section className={styles["phrases-container"]}>
          <Phrases switchDelay={3000} />
        </section>
        <section className={styles["explication"]}>
          <div className={styles["explication__cookie-container"]}>
            <Cookie chipsAmount={{ min: 3, max: 6 }} decorative size={250} />
          </div>
          <div className={styles["explication__text-container"]}>
            <p>
              To play simply <span>click on the cookies and their chips</span>.
              With cookies and chips you can <span> buy gadgets</span> that will
              allow you to <span>boost your earnings</span> from cookies and
              chips.
            </p>
          </div>
        </section>
        <section className={styles["play"]}>
          <Link href="/game">Play Game</Link>
        </section>
      </main>
    </>
  );
};

export default Home;
