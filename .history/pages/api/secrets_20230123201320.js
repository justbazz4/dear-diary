import Data from '../../models/Data';
import dbConnect from '../../lib/dbConnect';


export default async function handler(req, res) {
  await dbConnect();
  if (req.method === 'GET') {
    // handle GET request
  }else if (req.method === 'POST') {
    try {
      const Confess = req.body.Confess;
      const Secret = await Data.create({
        Topic: Confess.cTopic,
        confess: Confess.cConfess,
      });
      d
      // send success status and message to client
      res.status(200).json({ success: true, message: 'Comment submitted successfully.' });
    } catch(err) {
      // send error status and message to client
      res.status(500).json({ success: false, message: 'Error submitting comment.' });
    }
  }
}