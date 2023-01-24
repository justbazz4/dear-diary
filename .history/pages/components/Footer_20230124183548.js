import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/Home.module.css';
import fbimg from '../../public/fbimg.png';
import instaimg from '../../public/instaimg.png';
import twitterimg from '../../public/twitterimg.png';


function Footer() {
  return (
    <footer className={styles.footer}>
        
      <div style={{
            display: 'flex',
            justifyContent: 'space-between',
               width: '70%',
               height: '70%',
               marginLeft: '5px',
               marginTop: '10px',
             
             
          }}>
           
            <Link href='https://www.instagram.com/diary_counsel?igshid=YmMyMTAzMzY='>
            <span >
            <Image src={instaimg} alt="Insta Logo" width={30} height={30} />
          </span>
            </Link>
            <Link href='https://twitter.com/diarycounsel?t=kmYHl8Ws9lwdca6pYkzQ3A&s=08'>
            <span >
            <Image src={twitterimg} alt="twitter Logo" width={30} height={30} />
          </span>
            </Link>
            <Link href='https://www.facebook.com/profile.php?id=100089608842545&mibextid=ZbWKwL'>
            <span >
            <Image src={fbimg} alt="faceB Logo" width={30}height={30}/>
          </span>
            </Link>
         
          </div>
      </footer>
  )
}

export default Footer