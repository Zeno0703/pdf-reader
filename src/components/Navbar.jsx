import React from 'react';
import styles from "../styles/Navbar.module.css";

export default function Navbar(){

    return(
        <div className={styles.navbar}>
            <button type='button' className={styles.openbutton}>Pick file</button>
            <h1 className={styles.text}>PDF-Reader</h1>
        </div>
    );
}