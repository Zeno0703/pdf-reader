import React from 'react';
import styles from "../styles/Navbar.module.css";

export default function Navbar(){
    return(
        <div className={styles.navbar}>
            <h1 className={styles.text}>PDF-Reader</h1>
        </div>
    );
}