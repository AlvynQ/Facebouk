import React,{useEffect} from 'react';
import { Link } from 'react-router-dom';
import styles from './connexion.module.css';
import fetchco from "./connexion"

const Connexion = () => { 
    useEffect(()=>{fetchco()})                                                                                                            
    return(
        
        <div className={styles.container}>
            <div> 
                <form>
                    <label className={styles.titre}>Connexion</label>
                <input className={styles.inputConnexion} id="username" type="text" method="post" for="" placeholder="Identifiant ..."></input>
              
                <input className={styles.inputConnexion} id="password" type="password" method="post" for="password" placeholder="Mot de passe ..."></input>
                <div> 
                    <button><Link to="/">Annuler</Link></button>
                </div>             
                <div>
                    <button id="submit" type="submit">connecter</button>
                </div>
                </form>
                <p id='error'></p>
            </div>
        </div>
    ) 
}

export default Connexion