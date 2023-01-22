import Data from '../../models/Data';
import dbConnect from '../../lib/dbConnect';



export default async function handler(req, res) {
   await dbConnect();
  if (req.method === 'GET') {
  res.status(200).({ confessions  })
  }else if (req.method === 'POST') {
     const Confess = req.body.Confess
   const Secret = await Data.create({
    Topic: Confess.cTopic,
    confess: Confess.cConfess,

   });
   console.log(Secret)
   res.status(200).json({sucess: 'sent'})
    
  }

 
}