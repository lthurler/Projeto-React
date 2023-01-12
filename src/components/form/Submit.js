import styles from './Submit.module.css'

function SubmitButton ({ text }) {

    return (
        <div>
            <button className={styles.btn}>{text}</button>
        </div>
    )
}

export default SubmitButton