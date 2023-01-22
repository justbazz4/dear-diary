import React from 'react'


function HomePage() {
  return (
    <div>
        const cardStyles = {
    width: '18rem',
    margin: 'auto',
    boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
    borderRadius: '1rem',
    overflow: 'hidden',
    textAlign: 'center',
    
  };

  const buttonStyles = {
    backgroundColor: '#007bff',
    color: 'white',
    padding: '12px 24px',
    fontSize: '1rem',
    borderRadius: '50%',
    boxShadow: '0 0 0 0 rgba(255, 165, 0, 0.7)',
    transition: 'box-shadow 0.3s ease-in-out',
    cursor: 'pointer',
    ':hover': {
      boxShadow: '0 0 0 20px rgba(255, 165, 0, 0)',
     
    },
  };
  return (
    <div>
     <h3 className={styles.title}>
       <a href='./Grid'>  Welcome to Dear-Diary</a>
  </h3>
     
  <p className={styles.description}>
         "Dear-Diary is a safe and anonymous online community where individuals can share their deepest secrets and thoughts 
         
         without fear of judgment or criticism. It is a platform designed for individuals to heal, learn, and grow by sharing their
         
          experiences with others who understand and relate to their struggles.

       The concept of Dear-Diary is based on the idea that many people carry around secrets that they are unable to share with their loved
       
        ones or friends. These secrets can weigh heavily on an individual, causing emotional turmoil and hindering personal growth.
        
         By providing a platform where individuals can share their secrets anonymously,

     Individuals can visit the website and post their secrets without providing any personal information. They can choose to remain
     
      anonymous or use a pseudonym. The secrets are then posted on our Social media handles  for others to read and relate to".
  </p>
  <div style={cardStyles}>
      <div>
        <Link href="./Grid" style={{ textDecoration: 'none', color: 'inherit' }}>
          <button style={buttonStyles} >
            Enter
          </button>
        </Link>
      </div>
    
    </div>
  )
}

export default HomePage;