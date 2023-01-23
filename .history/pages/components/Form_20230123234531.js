import {React, useState} from 'react';
import styles from '../../styles/Home.module.css';



function Form(props) {
    const [cTopic, setCTopic] = useState('');
    const [cConfess, setCConfess] = useState('');
  
  
  const uri = process.MONGODB_URI;
  
  const submitComment = async (e) => {
    e.preventDefault();
    console.log( cTopic, cConfess);
    const Confess = { cTopic, cConfess };
    try {
        const response = await fetch("/api/secrets", {
            method: 'POST',
            body: JSON.stringify({ Confess }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error(response.statusText);
        }

        const data = await response.json();
        clearForm();
        console.log(data);
        if (data.success) {
            // Show success notification
            alert("Your confession has been submitted successfully!");
        }
    } catch (error) {
        console.log(error);
        // Show error notification
        alert("Error submitting confession, please try again!");
    }
};

const clearForm = () => {
    setCTopic('');
    setCConfess('');
};

  return (
    <div style={{
        textAlign: 'center' ,
      
      }}>
        <div >
        <h1 className={styles.hEad}><a href='../Grid'>&larr;Dear Diary</a> </h1>
        <br />
          <p style={{ color: 'green', fontStyle: 'italic', fontSize: '25px'}}>Share that secret and free your mind. </p>
          <p > Note your secret might be posted on twitter and anonymous community with no comments. </p>
        </div>
       <br />
        <form 
          onSubmit={submitComment}
          style={{ width: '400px', margin: '0 auto' }}
        >
          <label style={{ display: 'block' }}>
           Topic: <br />
           <input  onChange={(e) => setCTopic(e.target.value)} id="topic"
            type="text"
            value={cTopic}
            style={{ width: '350px',height: '40px', fontSize: '16px', backgroundColor: '#eee' }} />
            
            </label>
            <br />
  
          <label style={{  }}>
             Comment: 
             <textarea  onChange={(e) => setCConfess(e.target.value)} id="secret" placeholder='No more than 300 words..'
                maxLength={300}
                value={cConfess}
            style={{ backgroundColor: '#eee', width: '350px', height: '170px', fontSize: '16px',  }} />
          </label>
           <br />
         
          <button style={{ fontSize: '16px', backgroundColor: 'gray',  cursor: 'pointer', paddingTop: }}
           type="submit" >Share</button>
       
        </form>   
    
      </div>
  )
}

export default Form