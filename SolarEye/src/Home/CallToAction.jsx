
import React, { useState } from 'react';
import { ChevronRight, Mail, Phone, Calendar, CheckCircle, Star, Users, Award, ArrowRight } from 'lucide-react';

const CallToActionSection = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async () => {
  if (!email.trim()) {
    setError('Email is required');
    return;
  }
  
  if (!validateEmail(email)) {
    setError('Please enter a valid email address');
    return;
  }

  setIsSubmitting(true);
  setError('');
  setIsSuccess(false);

  try {
    const response = await fetch('https://solar-eye.onrender.com/api/newsletter/subscribe', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    });

    const data = await response.json();

    if (!response.ok) {
      setError(data.error || 'Subscription failed');
      setIsSubmitting(false);
      return;
    }

    setIsSuccess(true);
    setEmail('');
  } catch (err) {
    setError('Network error. Please try again.');
  } finally {
    setIsSubmitting(false);
  }
};

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (error) setError('');
    if (isSuccess) setIsSuccess(false);
  };

  return (
    <section className="relative py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Animated Grid */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        />
        {/* bg-gradient-to-r from-[#185B8D] to-[#4ACEF4] */}
        {/* Glowing Orbs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Social Proof Bar */}
        {/* <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-6 bg-white/10 backdrop-blur-sm rounded-full px-8 py-4 border border-white/20">
            <div className="flex items-center space-x-2">
              <Users className="w-5 h-5 text-blue-400" />
              <span className="text-white font-semibold">2,500+</span>
              <span className="text-slate-300 text-sm">Happy Clients</span>
            </div>
            <div className="w-px h-6 bg-white/20" />
            <div className="flex items-center space-x-2">
              <Star className="w-5 h-5 text-yellow-400 fill-current" />
              <span className="text-white font-semibold">4.9/5</span>
              <span className="text-slate-300 text-sm">Rating</span>
            </div>
            <div className="w-px h-6 bg-white/20" />
            <div className="flex items-center space-x-2">
              <Award className="w-5 h-5 text-green-400" />
              <span className="text-slate-300 text-sm">Industry Leader</span>
            </div>
          </div>
        </div> */}

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full text-sm font-semibold mb-4">
                Limited Time Offer
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
                Ready to Transform Your
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                  Solar Performance?
                </span>
              </h2>
              <p className="text-xl text-slate-300 leading-relaxed mb-8">
                Join thousands of satisfied customers who've increased their solar efficiency by up to 27% 
                with our AI-powered drone diagnostics. Get your free consultation today.
              </p>
            </div>

            {/* Benefits List */}
            <div className="space-y-4 mb-8">
              {[
                "Free comprehensive site analysis worth $500",
                "Custom optimization report within 24 hours", 
                "No upfront costs or commitments required",
                "Guaranteed ROI or money-back promise"
              ].map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                  <span className="text-slate-200">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Urgency Element */}
            <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30 rounded-xl p-4 mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-orange-500 rounded-full animate-pulse" />
                <span className="text-orange-300 font-semibold">
                  Only 12 free assessments left this month
                </span>
              </div>
            </div>
          </div>

          {/* Right CTA Form */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
              {isSuccess ? (
                // Success State
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-8 h-8 text-green-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Thank You!</h3>
                  <p className="text-slate-300 mb-6">
                    We've received your request. Our drone specialists will contact you within 2 hours to schedule your free site assessment.
                  </p>
                  <div className="bg-blue-500/20 border border-blue-500/30 rounded-xl p-4">
                    <p className="text-blue-300 text-sm">
                      Check your email for confirmation and next steps
                    </p>
                  </div>
                </div>
              ) : (
                // Form State
                <>
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-3">
                      Get Your Free Solar Analysis
                    </h3>
                    <p className="text-slate-300">
                      No obligation • Results in 24 hours • 100% confidential
                    </p>
                  </div>

                  {/* Email Input */}
                  <div className="space-y-4 mb-6">
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                      <input
                        type="email"
                        value={email}
                        onChange={handleEmailChange}
                        placeholder="Enter your email address"
                        className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-slate-400 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/50 transition-all"
                        disabled={isSubmitting}
                      />
                    </div>
                    
                    {error && (
                      <p className="text-red-400 text-sm flex items-center space-x-2">
                        <span>⚠️</span>
                        <span>{error}</span>
                      </p>
                    )}
                  </div>

                  {/* Primary CTA Button */}
                  <button
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none transition-all duration-200 mb-4"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center space-x-3">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white" />
                        <span>Processing...</span>
                      </div>
                    ) : (
                      <div className="flex items-center justify-center space-x-3">
                        <span>Get My Free Analysis Now</span>
                        <ArrowRight className="w-5 h-5" />
                      </div>
                    )}
                  </button>

                
                  <div className="text-center pt-4 border-t border-white/10">
                    <div className="flex justify-center items-center space-x-4 text-slate-400 text-sm">
                      <div className="flex items-center space-x-1">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span>100% Free</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span>No Spam</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span>Secure</span>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Floating Badge */}
            <div className="absolute -top-4 -right-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg animate-bounce">
              Save $300
            </div>
          </div>
        </div>

       
      </div>
    </section>
  );
};

export default CallToActionSection;