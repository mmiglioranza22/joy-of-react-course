"use client";
import React from "react";
import clsx from "clsx";
import { Play, Pause, RotateCcw } from "react-feather";

import Card from "@/components/Card";
import VisuallyHidden from "@/components/VisuallyHidden";

import styles from "./CircularColorsDemo.module.css";
import { motion, MotionConfig, LayoutGroup } from "framer-motion";

const COLORS = [
  { label: "red", value: "hsl(348deg 100% 60%)" },
  { label: "yellow", value: "hsl(50deg 100% 55%)" },
  { label: "blue", value: "hsl(235deg 100% 65%)" },
];

function CircularColorsDemo() {
  // TODO: This value should increase by 1 every second:
  const [timeElapsed, setTimeElapsed] = React.useState(0);
  const [timerStart, setTimerStart] = React.useState(false);

  React.useEffect(() => {
    let interval;
    if (timerStart) {
      interval = setInterval(() => {
        setTimeElapsed((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [timerStart]);

  // TODO: This value should cycle through the colors in the
  // COLORS array:
  const selectedColor = COLORS[timeElapsed % COLORS.length];

  const handleToggleTimer = () => {
    setTimerStart((prev) => !prev);
  };
  const handleResetTimer = () => {
    setTimerStart(false);
    setTimeElapsed(0);
  };

  return (
    <MotionConfig reducedMotion="user">
      <Card as="section" className={styles.wrapper}>
        <LayoutGroup>
          <ul className={styles.colorsWrapper}>
            {COLORS.map((color, index) => {
              const isSelected = color.value === selectedColor.value;

              return (
                <li className={styles.color} key={index}>
                  {isSelected && (
                    <motion.div
                      layoutId={selectedColor.label}
                      className={styles.selectedColorOutline}
                    />
                  )}
                  <div
                    className={clsx(
                      styles.colorBox,
                      isSelected && styles.selectedColorBox
                    )}
                    style={{
                      backgroundColor: color.value,
                    }}
                  >
                    <VisuallyHidden>{color.label}</VisuallyHidden>
                  </div>
                </li>
              );
            })}
          </ul>
        </LayoutGroup>

        <div className={styles.timeWrapper}>
          <dl className={styles.timeDisplay}>
            <dt>Time Elapsed</dt>
            <dd>{timeElapsed}</dd>
          </dl>
          <div className={styles.actions}>
            <button onClick={handleToggleTimer}>
              {!timerStart ? (
                <>
                  <Play />
                  <VisuallyHidden>Play</VisuallyHidden>
                </>
              ) : (
                <>
                  <Pause />
                  <VisuallyHidden>Pause</VisuallyHidden>
                </>
              )}
            </button>
            <button onClick={handleResetTimer}>
              <RotateCcw />
              <VisuallyHidden>Reset</VisuallyHidden>
            </button>
          </div>
        </div>
      </Card>
    </MotionConfig>
  );
}

export default CircularColorsDemo;
