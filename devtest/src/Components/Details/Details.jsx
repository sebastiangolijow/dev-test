import { useEffect } from "react"
import {getDetails} from '../../Redux/actions'
import  {useSelector, useDispatch} from "react-redux";
import styles from './details.module.scss';
import {Footer} from '../Footer/Footer'



export function Details({id}){

const dispatch = useDispatch();
useEffect(() => {dispatch(getDetails(id))}, []);
const Item = useSelector((state) => state.Item);

    return (
        <div>
            { Item && (
                <div>
                <img className={styles.img} src={Item.media.m} alt='img' />
                <h1 className={styles.title}>{Item.title}</h1>
                <div className={styles.cont2}>
                <h4 className={styles.description}>Published: {Item.published}</h4>                
                <h4 className={styles.description}>Author: {Item.author}</h4>  
                <h6 className={styles.description}>{Item.description}</h6>    
                </div> 
                </div>
            )}
            <div>
            <Footer/>
            </div>
        </div>
    )}