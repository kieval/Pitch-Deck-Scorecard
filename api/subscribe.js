// FILE: /api/subscribe.js - Vercel serverless function

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const {
    firstName,
    lastName,
    email,
    company,
    score,
assessment_date,
title_score,
problem_score,
solution_score,
product_score,
market_score,
business_model_score,
traction_score,
gtm_score,
competition_score,
team_score,
financials_score,
ask_score,
impact_score,
close_score,
    recommendations,
    slideScores // 
  } = req.body;

  try {
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
        groups: ['eXplXl'],
        fields: {
          company: company || '',
          score,
          assessment_date: new Date().toISOString(),
          recommendations: recommendations.join('; '),
problem_score: slideScores[1], 
solution_score: slideScores[2], 
product_score: slideScores[3], 
market_score: slideScores[4], 
business_model_score: slideScores[5], 
traction_score: slideScores[6], 
gtm_score: slideScores[7], 
competition_score: slideScores[8], 
team_score: slideScores[9], 
financials_score: slideScores[10], 
ask_score: slideScores[11],
 impact_score: slideScores[12], 
close_score: slideScores[13]
          slide_scores: slideScores // 
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
