import React, { useState } from 'react';
import { CheckCircle, AlertCircle, XCircle, Download, ArrowRight, Star } from 'lucide-react';

const PitchDeckScorecard = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [responses, setResponses] = useState({});
  const [showResults, setShowResults] = useState(false);

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
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreIcon = (score) => {
    if (score >= 80) return <CheckCircle className="w-6 h-6 text-green-600" />;
    if (score >= 60) return <AlertCircle className="w-6 h-6 text-yellow-600" />;
    return <XCircle className="w-6 h-6 text-red-600" />;
  };

  const getRecommendations = (score) => {
    if (score >= 80) {
      return [
        "Your pitch deck is strong! Focus on perfecting your delivery and timing.",
        "Consider adding more compelling visuals to enhance emotional connection.",
        "Practice handling tough investor questions with confidence.",
        "Prepare detailed appendix slides for deep-dive discussions."
      ];
    } else if (score >= 60) {
      return [
        "Your pitch deck has good bones but needs strengthening in key areas.",
        "Focus on making your value proposition more compelling and memorable.",
        "Provide more concrete data to support your claims and projections.",
        "Clarify your competitive advantage and market positioning.",
        "Consider professional help to reach investment-ready standards."
      ];
    } else {
      return [
        "Your pitch deck needs significant improvement before investor meetings.",
        "Start with clarifying your core value proposition and target market.",
        "Develop realistic financial projections with clear supporting logic.",
        "Gather more traction data and proof points for credibility.",
        "Consider comprehensive pitch deck coaching to address fundamental gaps."
      ];
    }
  };

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      setShowResults(true);
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
  };

  if (showResults) {
    const score = calculateScore();
    const recommendations = getRecommendations(score);
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
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

            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-6 text-white mb-6">
              <h3 className="text-xl font-semibold mb-2">Ready to Take Your Pitch to the Next Level?</h3>
              <p className="mb-4">
                Join our comprehensive 3-month Investment Readiness Program and transform your pitch deck into a powerful funding tool.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Learn More About Our Program
                </button>
                <button className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                  Schedule a Consultation
                </button>
              </div>
            </div>

            <div className="flex justify-center space-x-4">
              <button
                onClick={resetAssessment}
                className="bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors"
              >
                Retake Assessment
              </button>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center space-x-2">
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
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
                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
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
                            ? 'bg-blue-600 text-white'
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
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center space-x-2"
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