import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.scss";

const Footer = (props,context) => (
    <footer className={styles.footer}>
        <div className={styles.column}>
            <nav className={styles.nav}>
                <ul className={styles.list}>
                    <li className={styles.listItem}>{context.t("About Us")}</li>
                    <li className={styles.listItem}>{context.t("AA")}</li>
                    <li className={styles.listItem}>{context.t("Blog")}</li>
                    <li className={styles.listItem}>{context.t("Press")}</li>
                    <li className={styles.listItem}>{context.t("API")}</li>
                    <li className={styles.listItem}>{context.t("Job")}</li>
                    <li className={styles.listItem}>{context.t("AAA")}</li>
                    <li className={styles.listItem}>{context.t("BB")}</li>
                </ul>
            </nav>
        </div >
        <div className={styles.column}>
        <span className={styles.copyright}>2017</span>
        </div> 
    </footer>
 
);

Footer.contextTypes = {
    t: PropTypes.func.isRequired
}

export default Footer;