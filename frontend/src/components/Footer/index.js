import React from "react";
import styles from "./styles.scss";

const Footer = (props,context) => (
    <footer className={styles.footer}>
        <div className={styles.column}>
            <nav className={styles.list}>
                <ul className={styles.list}>
                    <li clasName={styles.listItem}>About Us</li>
                    <li clasName={styles.listItem}>About Us</li>
                    <li clasName={styles.listItem}>Blog</li>
                    <li clasName={styles.listItem}>Press</li>
                    <li clasName={styles.listItem}>API</li>
                    <li clasName={styles.listItem}>Jobs</li>
                </ul>
            </nav>
        </div >
        <div className={styles.column}>
        <span className={styles.copyright}>2017</span>
        </div> 
    </footer>
 
);
export default Footer;