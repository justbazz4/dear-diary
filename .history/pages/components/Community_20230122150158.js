import Image from 'next/image';
import Link from 'next/link';
import teleimg from '../../public/teleimg.png';
import styles from '../../styles/Home.module.css';




function Community() {
  return (
    <div style={{
        backgroundColor: 'white',
        padding: '10px',
        borderRadius: '5px',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
        marginBottom: '15px'
      }} >
          <div style={{ textAlign: 'center', Font: 'bolder',marginTop: '2rem', marginBottom:'4rem'}}>
          <h1 className={styles.hEad}>< href='../Grid'>&larr;Dear Diary</> </h1>
          <h3 style={{
            color: 'green', padding: '3px 2px'
          }}>
           Hi there , If you're struggling and looking for a supportive community, <span style={{
             textDecorationLine: 'underline', color: 'purple'
           }}><Link href='https://t.me/+Ho-_0WfZ21M4OWM8/'>Dear-Diary Anonymous</Link></span>  is a great place to visit.
            Reach out and share , connect and relate with likeminded people.</h3>
           <p>Click on the icon to join our Telegram community, where we share and learn from each other with no judgment. &rarr;<Link href='https://t.me/+Ho-_0WfZ21M4OWM8/'>
              <span style={{
                 margin: '6px 6px',
                 width: '80%',
                 height: '80%',
                 marginLeft: '10px',
              }}>
                
                <Image src={teleimg} alt="telegram Logo" width={25} height={20} />
             
            </span>
              </Link></p>
              <br />
              <h4>
                
                Click on the social media Icons below to  read and folllow our no comment posts.&rarr; 
              </h4>       
          </div>    
      </div>
  )
}

export default Community