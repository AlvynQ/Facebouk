import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./welcome.module.css";


const WelcomePage = () => {
    return(
        <div className={styles.container}>

        <h1 className={styles.logo}>Facebouk</h1>

            <div className={styles.containerBt}>
                <Link className={styles.bt} to="/Connexion" >Se connecter</Link>
                <Link className={styles.bt} to="/Inscription" >S'inscrire</Link>
            </div>

        </div>
    )
}

export default WelcomePage