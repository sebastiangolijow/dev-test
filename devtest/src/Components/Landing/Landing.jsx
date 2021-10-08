import React, {useEffect, useState} from 'react';
import styles from './landing.module.scss';
import { useDispatch, useSelector } from "react-redux";
import {allItems} from '../../Redux/actions';
import {Card} from '../Card/Card'
import {Footer} from '../Footer/Footer'
export function Landing(){
const dispatch = useDispatch();

useEffect(() => {
    dispatch(allItems())
}, []);

const Items = useSelector((state) => state.Items)

const [Pag, setPag] = useState(0);
const [Pag2, setPag2] = useState(3);

return (
    <div style={{display:'flex', flexDirection:'column'}}>
    <div className={styles.container}>
        {
            Items && Items.slice(Pag, Pag2).map((item) => (
                <div className={styles.card}>
                    <Card item={item}/>
                </div>
            ))
        }
    </div>
    <div styles={{display:'flex', flexDirection:'row'}}>
    <button className={styles.button}
       onClick={(e) => {
        e.preventDefault();
        setPag(Pag - 3);
        setPag2(Pag2 - 3);
      }}> 
    Back
    </button> 
    <button className={styles.button} 
   onClick={(e) => {
    e.preventDefault();
    setPag(Pag + 3);
    setPag2(Pag2 + 3);
  }}>
    Go
    </button>
    </div>
    <Footer/>
    </div>
    )
}


