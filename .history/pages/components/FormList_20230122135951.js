import { useState } from 'react';
import styles from '../../styles/Home.module.css';




function FormList() {
    const [cfeedback, setcFeedback] = useState('');


    const uri = process.MONGODB_URI;
   
   
   const submitfeedBack = async( e) => {     
     e.preventDefault();
     console.log(cfeedback)
       const AllFeedback = { cfeedback};
       const response = await fetch('/api/feedbacks', {
         method: 'POST', 
         body: JSON.stringify({ AllFeedback }),
         headers: {
           'Content-Type': 'application/json',
         },
       })
   
       const datafeed =  await response.json()
       Formclear();
       console.log(datafeed)   
    
   };
   const Formclear = () => {
     setcFeedback('');
    
   }
   
  return (
    <div>FormList</div>
  )
}

export default FormList