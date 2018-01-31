import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.scss";

class Footer extends React.Component {
    static contextTypes = {
        t: PropTypes.func.isRequired
    }
    render(){
        console.log(this.context)
        return(
            <footer className={styles.footer}>
                <div className={styles.column}>
                    <nav className={styles.nav}>
                        <ul className={styles.list}>
                            <li className={styles.listItem}>{this.context.t("About Us")}</li>
                            <li className={styles.listItem}>About Us</li>
                            <li className={styles.listItem}>Blog</li>
                            <li className={styles.listItem}>Press</li>
                            <li className={styles.listItem}>API</li>
                            <li className={styles.listItem}>Jobs</li>
                            <li className={styles.listItem}>Jobs</li>
                            <li className={styles.listItem}>Jobs</li>
                            <li className={styles.listItem}>Jobs</li>
                        </ul>
                    </nav>
                </div >
        <div className={styles.column}>
        <span className={styles.copyright}>2017</span>
        </div> 
    </footer>
        )
    }

}

export default Footer;