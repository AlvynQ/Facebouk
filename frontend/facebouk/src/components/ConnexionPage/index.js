import React,{useEffect} from 'react';
import { Link } from 'react-router-dom';
import styles from './connexion.module.css';
import fetchco from "./connexion"
import fetchannul from '../Annuler/annuler';

const Connexion = () => { 
    useEffect(()=>{fetchco(); fetchannul();})                                                                                                            
    return(
        
        <div className={styles.container}>
            <div className={styles.f}> 
                <form className={styles.form} >
                    <label className={styles.titre}>Connexion</label>
                <input className={styles.inputConnexion} id="username" type="text" method="post" for="" placeholder="Identifiant ..."></input>
                <input className={styles.inputConnexion} id="password" type="password" method="post" for="password" placeholder="Mot de passe ..."></input>
                 

                <div className={styles.btn}>
                    <button className={styles.co} id="submit" type="submit">connecter</button>
                    <button className={styles.deada} id="cancel">Annuler</button>
                </div>
                </form>

                <p id='error'></p>
            </div>
        </div>
    ) 
}

export default Connexion