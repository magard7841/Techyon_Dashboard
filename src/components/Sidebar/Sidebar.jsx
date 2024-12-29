import React, { useState } from "react";
import styles from "./Sidebar.module.scss";
import { FaHome, FaPlus, FaFolder, FaGlobe, FaUser, FaChartPie, FaCog, FaComments } from "react-icons/fa";

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(true);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`${styles.sidebar} ${isOpen ? styles.open : ""}`}>
            <div className={styles.toggle} onClick={toggleSidebar}>
                ☰
            </div>
            <ul className={styles.menu}>
                <li>
                    <FaPlus />
                </li>
                <li>
                    <FaHome />
                </li>
                <li>
                    <FaFolder />
                </li>
                <li>
                    <FaGlobe />
                </li>
                <li>
                    <FaUser />
                </li>
                <li>
                    <FaChartPie />
                </li>
                <li>
                    <FaCog />
                </li>
                <li>
                    <FaComments />
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
