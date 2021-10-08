import React, {useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";
import styles from './card.module.scss';
import {Link} from 'react-router-dom'


export function Card({item}){
    return (
        <div className={styles.container}>
        <Link to={`/details/${item.author_id}`}>  <img className={styles.img} src={item.media.m} alt='img' /> </Link>
          <h1 className={styles.title}>{item.title}</h1>
          <text className={styles.description}>{item.description}</text>
          <button className={styles.button}><Link to={`/details/${item.author_id}`}> Explore → </Link></button>
        </div>
    )
}