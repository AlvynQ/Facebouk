import React,{useEffect} from 'react';
import { Link } from 'react-router-dom';
import styles from './inscription.module.css';
import fetchinsc from './inscription';

const Inscription = () => {                                                                                                             
useEffect(()=>{fetchinsc()})
    return(
        <div className={styles.container}>
            <div> 
                <form>
                    <label>Inscription</label>
                        <input className={styles.inputInscription} id="username" type="text" method="post" for="" placeholder="Identifiant ..."></input>
                        <input className={styles.inputInscription} id="email" type="text" method="post" for="email" placeholder="Adresse mail ..."></input>
                        <input className={styles.inputInscription} id="password" type="password" method="post" for="password" placeholder="Mot de passe ..."></input>
                        <input className={styles.inputInscription} type="password" method="post" for="password" placeholder="Confirmez le mot de passe ..."></input>     
                        <div> 
                            <span><Link to="/">Annuler</Link></span>
                        </div>             
                        <div>
                            <button id="submit" type="submit">Je m'inscris</button>
                        </div>
                </form>
            </div>
        </div>
    )
}

export default Inscription