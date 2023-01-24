import React, { useState } from 'react';
import styles from '../../styles/Home.module.css';




function FormList(props) {
    const [cfeedback, setcFeedback] = useState('');


    const uri = process.MONGODB_URI;
   
   
  const submitfeedBack = async (e) => {
    e.preventDefault();
    console.log(cfeedback);
    const AllFeedback = { cfeedback };
    try {
        const response = await fetch('/api/feedbacks', {
            method: 'POST',
            body: JSON.stringify({ AllFeedback }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error(response.statusText);
        }

        const datafeed = await response.json();
        Formclear();
        console.log(datafeed);
        if (datafeed.success) {
            alert("Your feedback has been submitted successfully!");
        }
    } catch (error) {
        console.log(error);
        alert("Error submitting feedback, please try again!");
    }
};
const Formclear = () => {
    setcFeedback('');
};

   
  return (
    <div style={{ textAlign: 'center',marginTop: '5rem', marginBottom: '4rem'}}>
      <h1 className={styles.hEad}><a href='../Grid'>&larr;Dear Diary</a> </h1>
      <h3>Did this help? </h3>
      <h4 style={{ color: 'green'}}>Drop a feedback...</h4>

      <form onSubmit={submitfeedBack}>
        <label >
          Comment: 
          <br />
          <textarea 
            value={cfeedback}
            maxLength={300}
            placeholder='No more than 300 words..'
            onChange={(e )=> setcFeedback(e.target.value)}
            style={{ backgroundColor: '#eee', width: '70%', height: '150px', fontSize: '16px' , }}
          />
        </label>
        <br />
        <button style={{ fontSize: '16px', backgroundColor: 'lightblue', cursor:'pointer' }} type='submit'>Share</button>
      </form>
    
    </div>
  )
}

export default FormList