import {React, useState} from 'react';
import styles from '../../styles/Home.module.css';



function Form() {
    const [cTopic, setCTopic] = useState('');
    const [cConfess, setCConfess] = useState('');
  
  
  const uri = process.MONGODB_URI;
  
    const submitComment = async( e) => {
      e.preventDefault();
    console.log(cConfess, cTopic)
      const Confess = { cTopic, cConfess};
      const response = await fetch('/api/secrets', {
        method: 'POST', 
        body: JSON.stringify({ Confess }),
        headers: {
          'Content-Type': 'application/json',
        },
      })
  
      const data =  await response.json()
      clearForm();
      console.log(data)    
  
    };
    const clearForm = () => {
      setCTopic('');
      setCConfess('');
    }
  
  return (
    <div>Form</div>
  )
}

export default Form