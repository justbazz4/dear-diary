import Link from 'next/link';
import styles from '../styles/Home.module.css';


function Grid() {
  return (
    <div>
        <h1 className={styles.hEad} ><a href='/'>&larr;Dear Diary</a> </h1>

<div className={styles.grid}>
          <Link href='./components/Form' className={styles.card}>
            <h2>SHARE A SECRET &rarr;</h2>
            <p></p>
            <p>Share that secret, free your mind. The pages of the diary is your ally.</p>
          </Link>

          <Link href="./components/ontact" className={styles.card}>
            <h2>SEEK COUNSELLING ?.. </h2>
            <p>Get anonymous counselling for free here.</p>
          </Link>

          <Link
            href="./components/Community"
            className={styles.card}
          >
            <h2>JOIN A COMMUNITY </h2>
            <p>A non-judgmental community where people share and learn.</p>
          </Link>

          <Link
            href="./components/FormList"
            className={styles.card }
          >
            <h2>FEEDBACKS &rarr;</h2>
            <p>
              Drop your feedbacks and suggestions here, We are Happy to hear from you. 
            </p>
          </Link>
          </div>
    </div>
  )
}

export default Grid