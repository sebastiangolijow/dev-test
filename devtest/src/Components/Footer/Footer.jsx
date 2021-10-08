import styles from './footer.module.scss'


export function Footer(){
    return (
        <div className={styles.container}>
            <h2 className={styles.footer}>Images are from Flickrs</h2>
        </div>
    )
}