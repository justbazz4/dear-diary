import Link from 'next/link';
import styles from '../../styles/Home.module.css';




function Contact() {
  return (
    <div style={{ textAlign: 'center',marginTop: '5rem', marginBottom: '4rem'}}>
    <h1 className={styles.hEad}><Link href='../Grid'>&larr;Dear Diary</Link> </h1>
    <br />
     <div >
         <h3 style={{ color: 'green'}}>&quot;GOT AN ITCH YOU WANT TO SCRATCH..?</h3>
         <p>Dear-Diary aims to create a safe space where people can unload their burdens and find the support they need.
       
              The process of reaching a concellor is simple and anonymous. </p>
              <div>
         <h4 >Email a Counsellor for free anonymously  &rarr;</h4>
        
         <a > deardiarycounsel@gmail.com</a>
         <br />
         <br />
         <h4 style={{color: 'purple'}}>"Use this email to book a phone call session for free"</h4>
          <a>counselor_anonymous@yahoo.com</a>
          </div>
       </div>    
 </div>
  )
}

export default Contact