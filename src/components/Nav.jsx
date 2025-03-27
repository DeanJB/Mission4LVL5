import React from "react";
import styles from "./Nav.module.css";
import logo from "../assets/TurnersLogo.jpg";

function Nav() {
      return (
            <div className={styles.nav}>
                  <div className={styles.logoContainer}>
                        <img src={logo} alt="Turners Logo" />
                  </div>
                  <ul>
                        <li>HOME</li>
                        <li>CONTACT US</li>
                  </ul>
            </div>
      );
}

export default Nav;
