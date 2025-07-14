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
    recommendations,
    slideScores,
    individualSlideScores
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
          slide_scores: slideScores,
          // Individual slide scores for personalized emails
          title_score: individualSlideScores?.title_cover_slide || 0,
          problem_score: individualSlideScores?.problem || 0,
          solution_score: individualSlideScores?.solution || 0,
          product_score: individualSlideScores?.product_operations || 0,
          market_score: individualSlideScores?.market_opportunity || 0,
          business_model_score: individualSlideScores?.business_model || 0,
          traction_score: individualSlideScores?.traction || 0,
          gtm_score: individualSlideScores?.go_to_market_strategy || 0,
          competition_score: individualSlideScores?.competitive_landscape || 0,
          team_score: individualSlideScores?.team || 0,
          financials_score: individualSlideScores?.financials || 0,
          ask_score: individualSlideScores?.ask_use_of_funds || 0,
          impact_score: individualSlideScores?.impact || 0,
          close_score: individualSlideScores?.close_next_steps || 0
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
