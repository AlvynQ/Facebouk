import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from "./profil.module.css";



const ProfilPage = () => {

    return(
        <div className={styles.container}>
        <p> Pseudo <span id="Pseudo"></span></p>
        <p> Email <span id="Email"></span></p>
        </div>
    )
}

export default ProfilPage