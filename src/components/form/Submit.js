import styles from './Submit.module.css'

function Submit ({ text }) {

    return (
       <button className={styles.btn}>{text}</button>       
    )
}

export default Submit