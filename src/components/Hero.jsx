import React from "react";
import styles from "./Hero.module.css";

function Hero() {
      return (
            <section className={styles.hero}>
                  <div className={styles.container}>
                        <div className={styles.content}>
                              <span className={styles.topper}>Not sure which insurance policy fits your car?</span>
                              <div className={styles.textContainer}>
                                    <h1 className={styles.text1}>
                                          1. Click the message bubble on the right side of the screen
                                    </h1>
                                    <h1 className={styles.text2}> 2. Chat with Tina, your AI Assistant</h1>
                                    <h1 className={styles.text3}>
                                          3. Find the best insurance policies tailored to your needs.
                                    </h1>
                              </div>

                              <div className={styles.buttonGroup}></div>
                        </div>
                  </div>

                  <picture className={styles.background}></picture>
            </section>
      );
}

export default Hero;
