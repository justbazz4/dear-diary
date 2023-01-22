import { useState } from 'react';
import styles from '../../styles/Home.module.css';
import Toastify from 'toastify-js';




function FormList(props) {
    const [cfeedback, setcFeedback] = useState('');
 const uri = process.MONGODB_URI;

 
Toastify({
  duration: 3000,
  close: true,
  gravity: "top", // `top` or `bottom`
  position: 'right', // `left`, `center` or `right`
  backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)"
}).showToast();
   
   
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
              // Show success notification
              showNotification("Your feedback has been submitted successfully!", "success");
          }
      } catch (error) {
          console.log(error);
          // Show error notification
          showNotification("Error submitting feedback, please try again!", "error");
      }
  };
  
  const Formclear = () => {
      setcFeedback('');
  };
  
  const showNotification = (message, type) => {
      // Use a notification library or create a custom notification
      if (type === "success") {
          // Use toastify or similar library
          toast.success(message);
      } else {
          // Use toastify or similar library
          toast.error(message);
      }
  }
  
   
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
            maxLength={100}
            placeholder='No more than 100 words..'
            onChange={(e )=> setcFeedback(e.target.value)}
            style={{ backgroundColor: '#eee', width: '70%', height: '150px', fontSize: '16px' 
          ,}}
          />
        </label>
        <br />
        <button style={{ fontSize: '16px', backgroundColor: 'lightblue', cursor:'pointer' }} type='submit'>Share</button>
      </form>
    
    </div>
  )
}

export default FormList