import React,{useEffect} from 'react';
import { Link } from 'react-router-dom';
import styles from './connexion.module.css';

const Connexion = () => {                                                                                                             
    return(

        <div className={styles.container}>
            <div> 
                <form>
                    <label>Connexion</label>
                <input className={styles.inputInscription} id="username" type="text" method="post" for="" placeholder="Identifiant ..."></input>
                <input className={styles.inputInscription} id="password" type="password" method="post" for="password" placeholder="Mot de passe ..."></input>
                <div> 
                    <span><Link to="/">cancel</Link></span>
                </div>             
                <div>
                    <button id="submit" type="submit">connecter</button>
                </div>
                </form>
            </div>
        </div>
    ) 
}

export default Connexion