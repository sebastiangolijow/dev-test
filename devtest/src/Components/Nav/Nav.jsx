import styles from './nav.module.scss'
import {Link} from 'react-router-dom'

export function Nav(){
    return (
        <div className={styles.container}>
         <Link to='/'>   <h2 className={styles.nav}>Flick App</h2> </Link>
        </div>
    )
}