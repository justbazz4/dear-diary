import Feeds from '../../models/Feeds';
import dbConnect from '../../lib/dbConnect';



export default async function handler(req, res) {
    await dbConnect();
    if (req.method === 'GET') {
    // res.status(200).json({ confessions  })
    }else if (req.method === 'POST') {
       const AllFeedback = req.body.AllFeedback
     const Feeders = await Feeds.create({
      Feedbacks: AllFeedback.cfeedback,
     });
     console.log(Feeders)
     res.status(200).json({sucess: 'sent feed'})
      
    }
  
   
  }