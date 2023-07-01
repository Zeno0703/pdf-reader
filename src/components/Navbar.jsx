import React from 'react';
import styles from "../styles/Navbar.module.css";

export default function Navbar({onClick}){

    return(
        <div className={styles.navbar}>
            <button type='button' className={styles.button} onClick={onClick}>Pick file</button>
            <h1 className={styles.text}>PDF-Reader</h1>
        </div>
    );
}