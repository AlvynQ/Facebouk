import React,{useEffect} from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.css';
import Header from '../Header';
import fetchhom from './homePage';



const HomePage = () => {
    useEffect(()=>{ fetchhom ()})
    return(
        <div> 
            <Header/>
            <div className={styles.container}>

                    <p className={styles.p}>Hello <span id="username"></span> !</p>
                    <p className={styles.p}>Pour l'instant c'est vide ici.</p>
                </div>
            </div>
    )
}

export default HomePage