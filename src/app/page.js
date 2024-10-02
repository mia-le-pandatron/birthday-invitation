"use client";
import React from "react";
import styles from "./page.module.css";
import Lottie from "lottie-react";
import birthdayAnimation from "./lotties/birthday-animations";
import paintBrush from "./lotties/paint-brush";
import foodIcon from "./lotties/food-and-drinks.json";
export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Lottie
          animationData={birthdayAnimation}
          loop={true}
          style={{
            width: "350px",
            height: "350px",
            trigger: "loop-on-hover",
            "margin-left": "auto",
            "margin-right": "auto",
          }}
        />
        <h1>You are invited to Mia Le's birthday party!</h1>
        <h3>In this party, we will: </h3>
        <div>
          <ol>
            <Lottie
              animationData={paintBrush}
              loop={true}
              style={{
                width: "40px",
                height: "40px",
                trigger: "loop-on-hover",
                "margin-left": "auto",
                "margin-right": "auto",
              }}
            />
            Paint your own keychain!
          </ol>
        </div>
        <div>
          <ol>
            <Lottie
              animationData={foodIcon}
              loop={true}
              style={{
                width: "40px",
                height: "40px",
                trigger: "loop-on-hover",
                "margin-left": "auto",
                "margin-right": "auto",
              }}
            />
            Have some snacks & drinks
          </ol>
        </div>
      </main>
      <footer className={styles.footer}>
        <div className={styles.row}>
          <div className={styles.column1}>
            <h4>When?</h4>
            <ol>November 2nd, 2024 14:00 - 18:00</ol>
            <a
              href="https://calendar.app.google/9oX1pMw3dhoMVUjS8"
              target="_blank"
            >
              Add to Google Calendar
            </a>
          </div>
          <div className={styles.column2}>
            <h4>Where?</h4>
            <a href="https://maps.app.goo.gl/3Hh1WPco55Weekbw8" target="_blank">
              Kyyhkysmäki 2, 02650 Espoo
            </a>
          </div>
          <div className={styles.column3}>
            <h4>Gift ideas?</h4>
            <a
              href="https://mywishlist.online/w/qc8nie/mias-wishlist"
              target="_blank"
            >
              View my online wishlist here
            </a>
            <ol>List has been sorted from cheapest item to most expensive</ol>
          </div>
        </div>
      </footer>
    </div>
  );
}
