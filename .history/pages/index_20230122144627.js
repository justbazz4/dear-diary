import Head from 'next/head'
import styles from '../styles/Home.module.css'
import HomePage from './HomePage'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Dear-Diary</title>
        <meta name="description" content="Generated by Blockchain_Bazz Tech/Home" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
       <div></div>
      <main className={styles.main}>
        <>
        <HomePage />
        </>
       
        </main>
    </div>
  )
}
