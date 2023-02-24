import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./App.module.css";


function Header(props) {
    return (
        <>
            <Link to="/" className={styles.Titlelink}> {/* '/'=첫 화면 */}
                <h1 className={styles.Title} > 나에게 생일편지를 써줄랭?</h1>
            </Link>
        </>
    );
}

export default Header;