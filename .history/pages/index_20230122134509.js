import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import HomePage from './HomePage'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Dear-Diary</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <>
        <HomePage />
        </>
       
        </main>
    </div>
  )
}
