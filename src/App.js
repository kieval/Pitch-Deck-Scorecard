import React, { useState } from 'react';
import { CheckCircle, AlertCircle, XCircle, Download, ArrowRight, Star } from 'lucide-react';

const PitchDeckScorecard = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [responses, setResponses] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [showEmailCapture, setShowEmailCapture] = useState(false);
  const [emailData, setEmailData] = useState({ firstName: '', lastName: '', email: '', company: '' });

  const slides = [
    {
      title: "Title/Cover Slide",
      description: "Company Name + Value Proposition with high-quality visuals",
      questions: [
        {
          id: "title_clarity",
          question: "Does your title slide clearly communicate what you do?",
          weight: 3
        },
        {
          id: "value_prop",
          question: "Is your value proposition compelling and memorable?",
          weight: 4
        },
        {
          id: "visual_quality",
          question: "Do you have high-quality visuals (product/facility photos)?",
          weight: 2
        },
        {
          id: "professionalism",
          question: "Does the slide convey professionalism and clarity?",
          weight: 3
        }
      ]
    },
    {
      title: "Problem",
      description: "What critical problem are you solving and why it's urgent",
      questions: [
        {
          id: "problem_clarity",
          question: "Is the problem clearly defined and specific?",
          weight: 4
        },
        {
          id: "target_audience",
          question: "Is it clear who experiences this problem?",
          weight: 3
        },
        {
          id: "urgency",
          question: "Do you communicate why solving this problem is urgent?",
          weight: 3
        },
        {
          id: "pain_point",
          question: "Is the pain point tangible and relatable?",
          weight: 3
        }
      ]
    },
    {
      title: "Solution",
      description: "Your product/service and key differentiators",
      questions: [
        {
          id: "solution_clarity",
          question: "Is your solution clearly explained?",
          weight: 4
        },
        {
          id: "differentiation",
          question: "Are your key differentiators clearly communicated?",
          weight: 4
        },
        {
          id: "solution_visuals",
          question: "Do you include compelling visuals of your solution?",
          weight: 2
        },
        {
          id: "market_status",
          question: "Is your current status clear (in market, export-ready, etc.)?",
          weight: 3
        }
      ]
    },
    {
      title: "Product/Operations",
      description: "Current state of your business with proof points",
      questions: [
        {
          id: "current_state",
          question: "Do you clearly show what you've built so far?",
          weight: 3
        },
        {
          id: "proof_points",
          question: "Do you include awards, testimonials, or other credibility markers?",
          weight: 3
        },
        {
          id: "operational_details",
          question: "Are your operational capabilities well-explained?",
          weight: 3
        },
        {
          id: "achievements",
          question: "Do you effectively showcase your achievements?",
          weight: 2
        }
      ]
    },
    {
      title: "Market Opportunity",
      description: "TAM, SAM, and target market analysis",
      questions: [
        {
          id: "market_size",
          question: "Do you provide realistic market size calculations?",
          weight: 4
        },
        {
          id: "target_segments",
          question: "Are your target segments clearly defined?",
          weight: 3
        },
        {
          id: "growth_potential",
          question: "Do you show market growth potential?",
          weight: 3
        },
        {
          id: "bottom_up_analysis",
          question: "Is your analysis bottom-up rather than top-down?",
          weight: 3
        }
      ]
    },
    {
      title: "Business Model",
      description: "How you make money with unit economics",
      questions: [
        {
          id: "revenue_model",
          question: "Is your revenue model clearly explained?",
          weight: 4
        },
        {
          id: "unit_economics",
          question: "Do you provide detailed unit economics?",
          weight: 4
        },
        {
          id: "pricing_strategy",
          question: "Is your pricing strategy well-justified?",
          weight: 3
        },
        {
          id: "margin_analysis",
          question: "Are current and projected margins clearly shown?",
          weight: 3
        }
      ]
    },
    {
      title: "Traction",
      description: "Revenue, customers, and proof your model works",
      questions: [
        {
          id: "revenue_data",
          question: "Do you provide specific revenue data?",
          weight: 4
        },
        {
          id: "customer_metrics",
          question: "Are customer numbers and growth clearly shown?",
          weight: 3
        },
        {
          id: "key_contracts",
          question: "Do you highlight key contracts or partnerships?",
          weight: 3
        },
        {
          id: "proof_of_concept",
          question: "Is there clear proof your model works?",
          weight: 4
        }
      ]
    },
    {
      title: "Go-to-Market Strategy",
      description: "Channels, marketing approach, and scaling plan",
      questions: [
        {
          id: "distribution_channels",
          question: "Are your distribution channels clearly defined?",
          weight: 3
        },
        {
          id: "marketing_strategy",
          question: "Is your marketing approach well-explained?",
          weight: 3
        },
        {
          id: "sales_pipeline",
          question: "Do you show your sales pipeline and timeline?",
          weight: 3
        },
        {
          id: "scaling_plan",
          question: "Is your scaling strategy realistic and detailed?",
          weight: 4
        }
      ]
    },
    {
      title: "Competitive Landscape",
      description: "Competition analysis and differentiation",
      questions: [
        {
          id: "competitor_analysis",
          question: "Do you clearly identify your competitors?",
          weight: 3
        },
        {
          id: "competitive_advantage",
          question: "Is your competitive advantage clearly articulated?",
          weight: 4
        },
        {
          id: "market_positioning",
          question: "Is your market positioning well-defined?",
          weight: 3
        },
        {
          id: "customer_choice",
          question: "Is it clear why customers would choose you?",
          weight: 3
        }
      ]
    },
    {
      title: "Team",
      description: "Founder(s), key team members, and expertise gaps",
      questions: [
        {
          id: "team_experience",
          question: "Does your team have relevant industry experience?",
          weight: 4
        },
        {
          id: "role_clarity",
          question: "Are team roles and responsibilities clear?",
          weight: 2
        },
        {
          id: "skill_gaps",
          question: "Do you acknowledge and address skill gaps?",
          weight: 3
        },
        {
          id: "advisory_support",
          question: "Do you leverage advisors to fill expertise holes?",
          weight: 2
        }
      ]
    },
    {
      title: "Financials",
      description: "Revenue projections with clear logic",
      questions: [
        {
          id: "financial_projections",
          question: "Are your financial projections realistic and well-supported?",
          weight: 4
        },
        {
          id: "revenue_logic",
          question: "Is the logic behind revenue projections clear?",
          weight: 4
        },
        {
          id: "unit_level_detail",
          question: "Do you include unit-level financial detail?",
          weight: 3
        },
        {
          id: "profitability_path",
          question: "Is your path to profitability clearly shown?",
          weight: 4
        }
      ]
    },
    {
      title: "Ask & Use of Funds",
      description: "Funding request with detailed breakdown",
      questions: [
        {
          id: "funding_amount",
          question: "Is your funding request specific and justified?",
          weight: 4
        },
        {
          id: "use_of_funds",
          question: "Do you provide a detailed breakdown of fund usage?",
          weight: 4
        },
        {
          id: "milestones",
          question: "Are funding milestones and outcomes clearly defined?",
          weight: 3
        },
        {
          id: "timeline",
          question: "Is your funding timeline realistic?",
          weight: 2
        }
      ]
    },
    {
      title: "Impact",
      description: "Economic development and measurable impact",
      questions: [
        {
          id: "impact_measurement",
          question: "Are your impact metrics measurable and realistic?",
          weight: 3
        },
        {
          id: "economic_development",
          question: "Do you clearly show economic development potential?",
          weight: 3
        },
        {
          id: "social_impact",
          question: "Is your social impact clearly articulated?",
          weight: 2
        },
        {
          id: "authenticity",
          question: "Does your impact feel authentic (no greenwashing)?",
          weight: 3
        }
      ]
    },
    {
      title: "Close & Next Steps",
      description: "Strong close with clear next steps",
      questions: [
        {
          id: "memorable_close",
          question: "Do you end with a memorable, strong close?",
          weight: 3
        },
        {
          id: "next_steps",
          question: "Are next steps clearly defined?",
          weight: 3
        },
        {
          id: "contact_info",
          question: "Is your contact information clearly provided?",
          weight: 2
        },
        {
          id: "call_to_action",
          question: "Is there a clear call to action?",
          weight: 3
        }
      ]
    }
  ];

  const handleResponse = (questionId, value) => {
    setResponses(prev => ({
      ...prev,
      [questionId]: value
    }));
  };

  const calculateScore = () => {
    let totalScore = 0;
    let maxScore = 0;
    
    slides.forEach(slide => {
      slide.questions.forEach(question => {
        const response = responses[question.id];
        if (response !== undefined) {
          totalScore += response * question.weight;
        }
        maxScore += 5 * question.weight;
      });
    });
    
    return Math.round((totalScore / maxScore) * 100);
  };

  const getScoreColor = (score) => {
    if (score >= 80) return 'text-emerald-850';
    if (score >= 60) return 'text-yellow-550';
    return 'text-red-700';
  };

  const getScoreIcon = (score) => {
    if (score >= 80) return <CheckCircle className="w-6 h-6 text-emerald-850" />;
    if (score >= 60) return <AlertCircle className="w-6 h-6 text-yellow-550" />;
    return <XCircle className="w-6 h-6 text-red-700" />;
  };

  const calculateSlideScore = (slideIndex) => {
    const slide = slides[slideIndex];
    let slideScore = 0;
    let maxSlideScore = 0;
    
    slide.questions.forEach(question => {
      const response = responses[question.id];
      if (response !== undefined) {
        slideScore += response * question.weight;
      }
      maxSlideScore += 5 * question.weight;
    });
    
    return maxSlideScore > 0 ? Math.round((slideScore / maxSlideScore) * 100) : 0;
  };
const getSlideScoresAsString = () => {
  return slides.map((slide, index) => {
    return `${slide.title}: ${calculateSlideScore(index)}%`;
  }).join(', ');
};
  const getSlideRecommendations = () => {
    const slideScores = slides.map((_, index) => ({
      slide: slides[index],
      score: calculateSlideScore(index),
      index: index
    }));
    
    // Sort by lowest scores to identify weak areas
    const weakSlides = slideScores.filter(s => s.score < 70).sort((a, b) => a.score - b.score);
    
    const recommendations = [];
    
    // General recommendations based on overall score
    const overallScore = calculateScore();
    if (overallScore >= 80) {
      recommendations.push("Your pitch deck is strong! Focus on perfecting your delivery and timing.");
    } else if (overallScore >= 60) {
      recommendations.push("Your pitch deck has good bones but needs strengthening in key areas.");
    } else {
      recommendations.push("Your pitch deck needs significant improvement before investor meetings.");
    }
    
    // Specific recommendations for weak areas
    if (weakSlides.length > 0) {
      const weakestSlide = weakSlides[0];
      
      switch (weakestSlide.index) {
        case 0: // Title/Cover
          recommendations.push("Strengthen your cover slide with a clearer value proposition and professional visuals.");
          break;
        case 1: // Problem
          recommendations.push("Make your problem statement more specific and urgent - clearly define who experiences this pain.");
          break;
        case 2: // Solution
          recommendations.push("Better articulate what makes your solution unique and include compelling product visuals.");
          break;
        case 3: // Product/Operations
          recommendations.push("Add more proof points like customer testimonials, awards, or operational achievements.");
          break;
        case 4: // Market Opportunity
          recommendations.push("Develop a more realistic, bottom-up market analysis with clearly defined target segments.");
          break;
        case 5: // Business Model
          recommendations.push("Provide more detailed unit economics and clearer explanation of how you make money.");
          break;
        case 6: // Traction
          recommendations.push("Gather more concrete proof of demand - revenue data, customer numbers, or key partnerships.");
          break;
        case 7: // Go-to-Market
          recommendations.push("Develop a more detailed go-to-market strategy with specific channels and timelines.");
          break;
        case 8: // Competitive Landscape
          recommendations.push("Conduct deeper competitive analysis and more clearly articulate your unique advantages.");
          break;
        case 9: // Team
          recommendations.push("Highlight more relevant experience or add strategic advisors to fill obvious skill gaps.");
          break;
        case 10: // Financials
          recommendations.push("Create more realistic financial projections with clear logic and path to profitability.");
          break;
        case 11: // Ask & Use of Funds
          recommendations.push("Provide more specific funding breakdown tied to clear milestones and outcomes.");
          break;
        case 12: // Impact
          recommendations.push("Make your impact metrics more measurable and ensure they feel authentic.");
          break;
        case 13: // Close
          recommendations.push("Create a stronger, more memorable close with clearer next steps for investors.");
          break;
      }
    }
    
    // Add secondary weak area if exists
    if (weakSlides.length > 1) {
      const secondWeakest = weakSlides[1];
      if (secondWeakest.index === 10) { // Financials
        recommendations.push("Focus on developing realistic financial projections - this is critical for investor confidence.");
      } else if (secondWeakest.index === 6) { // Traction
        recommendations.push("Building more traction should be a priority before approaching investors.");
      } else if (secondWeakest.index === 4) { // Market Opportunity
        recommendations.push("Investors need to see a clear, large market opportunity - refine your market analysis.");
      }
    }
    
    // Always end with program CTA for scores under 85
    if (overallScore < 85) {
      recommendations.push("Consider enlisting professional support to address these gaps systematically.");
    }
    
    return recommendations;
  };

  // Generate PDF report
  const generatePDFReport = () => {
    const score = calculateScore();
    const recommendations = getSlideRecommendations();
    
    // Create HTML content for the report
    const reportContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>Pitch Deck Scorecard Report</title>
        <style>
          body { font-family: Arial, sans-serif; margin: 40px; line-height: 1.6; }
          .header { text-align: center; margin-bottom: 30px; border-bottom: 2px solid #3B82F6; padding-bottom: 20px; }
          .score { font-size: 48px; font-weight: bold; color: ${score >= 80 ? '#0d542b' : score >= 60 ? '#D97706' : '#C00000'}; }
          .section { margin: 30px 0; }
          .slide-score { margin: 10px 0; padding: 10px; background: #F3F4F6; border-radius: 5px; }
          .recommendation { margin: 10px 0; padding: 10px; background: #EFF6FF; border-left: 4px solid #3B82F6; }
          .footer { margin-top: 50px; text-align: center; font-size: 12px; color: #656; }
        </style>
      </head>
      <body>
        <div class="header">
          <h1>Pitch Deck Scorecard Report</h1>
          <div class="score">${score}%</div>
          <p>Generated on ${new Date().toLocaleDateString()}</p>
        </div>
        
        <div class="section">
          <h2>Overall Assessment</h2>
          <p>${score >= 80 ? 'Excellent! Your pitch deck is investment-ready.' :
               score >= 60 ? 'Good progress! Some areas need attention.' :
               'Needs work. Significant improvements required.'}</p>
        </div>
        
        <div class="section">
          <h2>Slide-by-Slide Scores</h2>
          ${slides.map((slide, index) => `
            <div class="slide-score">
              <strong>${slide.title}:</strong> ${calculateSlideScore(index)}%
            </div>
          `).join('')}
        </div>
        
        <div class="section">
          <h2>Key Recommendations</h2>
          ${recommendations.map(rec => `
            <div class="recommendation">
              ${rec}
            </div>
          `).join('')}
        </div>
        
        <div class="footer">
          <p>Pitch Deck Scorecard Tool by www.hikieran.com</p>
        </div>
      </body>
      </html>
    `;
    
    // Create and download the HTML file (since we can't generate actual PDFs in this environment)
    const blob = new Blob([reportContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `pitch-deck-scorecard-report-${new Date().toISOString().split('T')[0]}.html`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  // Handle email form submission
// Complete handleEmailSubmit function - replace your existing one with this:

const handleEmailSubmit = async (e) => {
  e.preventDefault();
  try {
    const response = await fetch('/api/subscribe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
     body: JSON.stringify({
  firstName: emailData.firstName,
  lastName: emailData.lastName,
  email: emailData.email,
  company: emailData.company,
  score: calculateScore(),
  recommendations: getSlideRecommendations(),
  slideScores: getSlideScoresAsString(),
  individualSlideScores: {
    title_cover_slide: calculateSlideScore(0),
    problem: calculateSlideScore(1),
    solution: calculateSlideScore(2),
    product_operations: calculateSlideScore(3),
    market_opportunity: calculateSlideScore(4),
    business_model: calculateSlideScore(5),
    traction: calculateSlideScore(6),
    go_to_market_strategy: calculateSlideScore(7),
    competitive_landscape: calculateSlideScore(8),
    team: calculateSlideScore(9),
    financials: calculateSlideScore(10),
    ask_use_of_funds: calculateSlideScore(11),
    impact: calculateSlideScore(12),
    close_next_steps: calculateSlideScore(13)
  }
});

    if (!response.ok) {
      throw new Error('Failed to subscribe');
    }

    const result = await response.json();
    alert('Thank you! Your detailed results have been sent to your email.');
    setShowEmailCapture(false);
    setShowResults(true);
  } catch (error) {
    console.error('Error submitting email:', error);
    alert('There was an error processing your request. Please try again.');
  }
};
const nextSlide = () => {
  if (currentSlide < slides.length - 1) {
    setCurrentSlide(currentSlide + 1);
  } else {
    // Go directly to email capture instead of results
    setShowEmailCapture(true);
  }
};
  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const resetAssessment = () => {
    setCurrentSlide(0);
    setResponses({});
    setShowResults(false);
    setShowEmailCapture(false);
  };

  if (showEmailCapture) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-800 to-gray-800 p-4">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-800 mb-4">Get Your Detailed Results</h1>
              <p className="text-gray-600 text-lg">
                Enter your details below and we'll email you your comprehensive pitch deck scorecard with personalized recommendations within minutes.
              </p>
            </div>

            <form onSubmit={handleEmailSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={emailData.firstName}
                    onChange={(e) => setEmailData({...emailData, firstName: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-700 focus:border-transparent"
                    placeholder="Enter your first name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={emailData.lastName}
                    onChange={(e) => setEmailData({...emailData, lastName: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-700 focus:border-transparent"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={emailData.email}
                  onChange={(e) => setEmailData({...emailData, email: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-700 focus:border-transparent"
                  placeholder="Enter your email address"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  value={emailData.company}
                  onChange={(e) => setEmailData({...emailData, company: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-700 focus:border-transparent"
                  placeholder="Enter your company name (optional)"
                />
              </div>

              <div className="bg-slate-50 border border-slate-800 rounded-lg p-4">
                <p className="text-sm text-emerald-800">
                  <strong>What you'll receive:</strong>
                </p>
                <ul className="text-sm text-emerald-800 mt-2 space-y-1">
                  <li>• Your detailed pitch deck scorecard with individual slide scores< /li>
                  <li>• Personalized improvement recommendations based on your responses</li>
                  <li>• Bonus: Free pitch deck template</li>
<li>• Bonus: Tips for investor-ready presentations</li>
                </ul>
              </div>

              <button
                type="submit"
                className="w-full bg-slate-700 text-white py-3 px-6 rounded-lg font-semibold hover:bg-slate-800 transition-colors flex items-center justify-center space-x-2"
              >
                <span>Get My Results</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>

            <p className="text-xs text-gray-500 text-center mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (showResults) {
    const score = calculateScore();
    const recommendations = getSlideRecommendations();
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-800 to-gray-800 p-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center mb-4">
                {getScoreIcon(score)}
              </div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">Your Pitch Deck Score</h1>
              <div className={`text-6xl font-bold ${getScoreColor(score)} mb-4`}>
                {score}%
              </div>
              <p className="text-gray-600 text-lg">
                {score >= 80 ? "Excellent! Your pitch deck is investment-ready." :
                 score >= 60 ? "Good progress! Some areas need attention." :
                 "Needs work. Significant improvements required."}
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Key Recommendations</h2>
              <div className="space-y-3">
                {recommendations.map((rec, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Star className="w-5 h-5 text-yellow-500 mt-1 flex-shrink-0" />
                    <p className="text-gray-700">{rec}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-slate-600 to-slate-900 rounded-xl p-6 text-white mb-6">
              <h3 className="text-xl font-semibold mb-2">Ready to Take Your Pitch to the Next Level?</h3>
              <p className="mb-4">
                The one-on-one Investment Readiness Engagement: 3 Months to Clear Numbers, A Strong Story and Confident Investor Conversations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://hikieran.com/work_with_me" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-slate-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
                >
                  Learn More
                </a>
                <a 
                  href="https://hikieran.com/contact" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-slate-600 transition-colors text-center"
                >
                  Schedule a Consultation
                </a>
              </div>
            </div>

            <div className="flex justify-center space-x-4">
              <button
                onClick={resetAssessment}
                className="bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors"
              >
                Retake Assessment
              </button>
              <button 
                onClick={generatePDFReport}
                className="bg-slate-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-slate-700 transition-colors flex items-center space-x-2"
              >
                <Download className="w-5 h-5" />
                <span>Download Report</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const slide = slides[currentSlide];
  const progress = ((currentSlide + 1) / slides.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-800 to-gray-800 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-2xl font-bold text-gray-800">Pitch Deck Scorecard</h1>
              <div className="text-sm text-gray-600">
                {currentSlide + 1} of {slides.length}
              </div>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-emerald-700 h-2 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>

          {/* Current Slide */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Slide {currentSlide + 1}: {slide.title}
            </h2>
            <p className="text-gray-600 mb-6">{slide.description}</p>

            <div className="space-y-6">
              {slide.questions.map((question, qIndex) => (
                <div key={question.id} className="border rounded-lg p-4">
                  <p className="font-medium text-gray-800 mb-3">{question.question}</p>
                  <div className="flex flex-wrap gap-2">
                    {[1, 2, 3, 4, 5].map(value => (
                      <button
                        key={value}
                        onClick={() => handleResponse(question.id, value)}
                        className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                          responses[question.id] === value
                            ? 'bg-emerald-700 text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        {value}
                      </button>
                    ))}
                  </div>
                  <p className="text-sm text-gray-500 mt-2">
                    1 = Strongly Disagree | 5 = Strongly Agree
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between">
            <button
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                currentSlide === 0
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  : 'bg-gray-600 text-white hover:bg-gray-700'
              }`}
            >
              Previous
            </button>
            <button
              onClick={nextSlide}
              className="bg-emerald-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-800 transition-colors flex items-center space-x-2"
            >
              <span>{currentSlide === slides.length - 1 ? 'See Results' : 'Next'}</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PitchDeckScorecard;
