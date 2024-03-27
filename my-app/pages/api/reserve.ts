// pages/api/reserve.ts

import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      // Extract form data from the request body
      const formData = req.body;

      // Construct the FormData object
      const formDataToSend = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        formDataToSend.append(key, value);
      });

      // Send reservation data to https://httpbin.org/post
      const response = await fetch('https://httpbin.org/post', {
        method: 'POST',
        body: formDataToSend,
      });

      // Parse response from httpbin.org
      const responseData = await response.json();

      // Handle response data as needed
      console.log('Response from httpbin.org:', responseData);

      // Respond to the client with a success message
      res.status(200).json({ message: 'Reservation saved successfully.' });
    } catch (error) {
      console.error('Error saving reservation:', error);
      res.status(500).json({ error: 'Failed to save reservation.' });
    }
  } else {
    // Method not allowed
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
