/* Imports */

// react & nextjs
import { FC } from "react";

// components

// libs

// utils

// types & interfaces

// css
import styles from "@/ui/components/Monitor/Monitor.module.css";

interface Props {}

const MonitorSkeleton: FC<Props> = ({}) => {
  return (
    <div className={styles["monitor-skeleton"]}>
      <div>
        <div></div>
        <div></div>
      </div>
      <div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default MonitorSkeleton;
