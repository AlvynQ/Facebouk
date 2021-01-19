import React,{useEffect} from 'react';
import { Link } from 'react-router-dom';
import styles from './inscription.module.css';

const Inscription = () => {                                                                                                             

    return(
        <div className={styles.container}>
            <div> 
                <form>
                    <label>Inscription</label>
                <input className={styles.inputInscription} id="username" type="text" method="post" for="" placeholder="Identifiant ..."></input>
                <input className={styles.inputInscription} id="email" type="text" method="post" for="email" placeholder="Adresse mail ..."></input>
                <input className={styles.inputInscription} id="password" type="password" method="post" for="password" placeholder="Mot de passe ..."></input>
                <input className={styles.inputInscription} type="password" method="post" for="password" placeholder="Confirmez le mot de passe ..."></input>
                </form>


            </div>
        </div>
    )
    
}

export default Inscription