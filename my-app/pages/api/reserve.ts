

import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      
      const formData = req.body;

      
      const formDataToSend = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        formDataToSend.append(key, value as any);
      });

      
      const response = await fetch('https://httpbin.org/post', {
        method: 'POST',
        body: formDataToSend,
      });

      
      const responseData = await response.json();

      
      console.log('Response from httpbin.org:', responseData);

      
      res.status(200).json({ message: 'Reservation saved successfully.' });
    } catch (error) {
      console.error('Error saving reservation:', error);
      res.status(500).json({ error: 'Failed to save reservation.' });
    }
  } else {
    
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
