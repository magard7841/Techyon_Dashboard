import React from "react";
import styles from "./Navbar.module.scss";
import { FaSearch, FaBell, FaTh, FaBars } from "react-icons/fa";

const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <div className={styles.logo}>
                TECHYON
            </div>
            <div className={styles.actions}>
                <FaSearch className={styles.icon} />
                <FaTh className={styles.icon} />
                <FaBars className={styles.icon} />
                <div className={styles.notification}>
                    <FaBell />
                    <span className={styles.badge}>99+</span>
                </div>
                <div className={styles.profile}>
                    <img
                        src="./Images/User.png"
                        alt="User Profile"
                        className={styles.avatar}
                    />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
