import { MongoClient } from 'mongodb';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const client = new MongoClient(process.env.MONGODB_URI);
    try {
      await client.connect();
      const database = client.db('vendor_management');
      const collection = database.collection('submissions');
      const result = await collection.insertOne(req.body);
      res.status(200).json({ message: 'Form submitted successfully', id: result.insertedId });
    } catch (error) {
      res.status(500).json({ message: 'Error submitting form', error: error.message });
    } finally {
      await client.close();
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}