/* Imports */

// react & nextjs
import { FC, lazy } from "react";

// components
import Phrases from "@/ui/components/Home/Phrases/Phrases";
import Cookie from "@/ui/components/Cookie/Cookie";
import Footer from "@/ui/components/Generic/Footer/Footer";
import Card from "@/ui/components/Home/Card/Card";
import SwitchElementCard from "@/ui/components/Home/TwoElementsCard/TwoElementsCard";
import Header from "@/ui/components/Generic/Header/Header";
const Local = lazy(
  () => import("@/ui/components/Home/TwoElementsCard/Local/Local")
);
const WorldWide = lazy(
  () => import("@/ui/components/Home/TwoElementsCard/WorldWide/WorldWide")
);

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
        <section className={styles["phrases-section"]}>
          <Phrases switchDelay={5000} />
        </section>
        <section className={styles["cards-section"]}>
          <Card
            title="How to Play ?"
            element={
              <Cookie size={250} decorative chipsAmount={{ min: 3, max: 6 }} />
            }
            text={
              <p>
                To play simply <span>click on the cookies and their chips</span>
                . With cookies and chips you can <span> buy gadgets</span> that
                will allow you to <span>boost your earnings</span> from cookies
                and chips.
              </p>
            }
          />
          <SwitchElementCard
            title="Game Modes"
            firstElement={{
              element: <Local />,
              text: (
                <>
                  <h4>Play Locally</h4>
                  <p>
                    In this game mode <span>all progress</span> in the form of
                    cookies, chips and gadgets{" "}
                    <span>will be saved locally</span> in your browser.
                  </p>
                </>
              ),
            }}
            seccondElement={{
              element: <WorldWide />,
              text: (
                <>
                  <h4>Play in the World Wide</h4>
                  <p>
                    By choosing this game mode, <span>all</span> globally
                    connected <span>players will contribute</span> to a{" "}
                    <span>single cookie clicker game</span> at the same time.
                  </p>
                </>
              ),
            }}
          />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;
