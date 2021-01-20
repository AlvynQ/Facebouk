import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from "./profil.module.css";
import fetchprof from "./profile"


const ProfilPage = () => {
useEffect(()=>{fetchprof()})
    return(
        <div className={styles.container}>
        <p className={styles.titre}> Pseudo </p>
        <span id="username"></span>
        <p className={styles.titre}> Email </p>
        <span id="email"></span>
        </div>
    )
}

export default ProfilPage