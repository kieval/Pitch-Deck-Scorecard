// /api/subscribe.js - Vercel serverless function

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { firstName, lastName, email, company, score, recommendations } = req.body;

  try {
    // Add subscriber to Sender.net
    const senderResponse = await fetch('https://api.sender.net/v2/subscribers', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.SENDER_API_TOKEN}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        email,
        firstname: firstName,
        lastname: lastName,
        groups: ['eXplXl'], // your Sender group ID
        fields: {
          company: company || '',
          score,
          assessment_date: new Date().toISOString(),
          recommendations: recommendations.join('; ')
        }
      })
    });

    if (!senderResponse.ok) {
      const errorData = await senderResponse.json();
      throw new Error(`Sender API error: ${errorData.message}`);
    }

    const senderData = await senderResponse.json();

    return res.status(200).json({ 
      success: true, 
      message: 'Successfully subscribed',
      subscriber_id: senderData.id 
    });

  } catch (error) {
    console.error('Subscription error:', error);
    return res.status(500).json({ 
      success: false, 
      error: error.message 
    });
  }
}
