import Feeds from '../../models/Feeds';
import dbConnect from '../../lib/dbConnect';


export default async function handler(req, res) {
  await dbConnect();
  if (req.method === 'GET') {
      // handle GET request
  } else if (req.method === 'POST') {
      try {
          const AllFeedback = req.body.AllFeedback;
          const Feeders = await Feeds.create({
              Feedbacks: AllFeedback.cfeedback,
          });
          // send success status and message to client
          res.status(201).json({ success: true, message: 'Feedback submitted successfully.' });
      } catch (err) {
          // send error status and message to client
          console.error(err);
          res.status(500).json({ success: false, message: 'Error submitting feedback.' });
      }
  }
}