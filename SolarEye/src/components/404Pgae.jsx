import React from 'react';
import { Home, Sun, AlertCircle, ArrowLeft } from 'lucide-react';

const NotFoundPage = () => {
  const handleGoHome = () => {
    window.location.href = '/';
  };

  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#252B3B] via-[#252B3B]/900 to-[#252B3B] flex items-center justify-center p-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* Animated Solar Icon */}
        <div className="relative mb-8">
          <div className="absolute inset-0 animate-ping">
            <Sun className="w-24 h-24 mx-auto text-yellow-400/30" />
          </div>
          <Sun className="w-24 h-24 mx-auto text-yellow-500 animate-spin" style={{animationDuration: '8s'}} />
          <div className="absolute inset-0 flex items-center justify-center">
            <AlertCircle className="w-12 h-12 text-red-400 animate-pulse" />
          </div>
        </div>

        {/* 404 Text with Glow Effect */}
        <div className="relative mb-6">
          <h1 className="text-9xl font-bold bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent mb-4 animate-pulse">
            404
          </h1>
          <div className="absolute inset-0 text-9xl font-bold text-yellow-500/20 blur-lg">
            404
          </div>
        </div>

        {/* Main Message */}
        <div className="mb-8">
          <h2 className="text-3xl font-semibold text-white mb-4">
            Drone Connection Lost
          </h2>
          <p className="text-gray-300 text-lg mb-2">
            Oops! Our AI-powered drones couldn't locate this page in our solar grid.
          </p>
          <p className="text-gray-400 text-base">
            Don't worry - we solve problems before you see them, but this page seems to have drifted beyond our detection range.
          </p>
        </div>

        {/* SolarEye Branding */}
        <div className="mb-8 p-6 bg-slate-800/50 rounded-lg border border-yellow-500/20">
          <div className="flex items-center justify-center mb-3">
            <Sun className="w-6 h-6 text-yellow-500 mr-2" />
            <span className="text-yellow-400 font-bold text-xl">SolarEye</span>
          </div>
          <p className="text-yellow-300 text-sm font-medium mb-2">
            We Solve It Before You See It!
          </p>
          <p className="text-gray-400 text-sm leading-relaxed">
            Revolutionizing solar infrastructure with AI-powered drones that detect, diagnose, and repair solar panel issues with precision and efficiency.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={handleGoHome}
            className="group flex items-center justify-center space-x-2 bg-gradient-to-br from-[#1C1F2D] to-[#248DC0]  text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-[#248DC0]"
          >
            <Home className="w-5 h-5 group-hover:animate-bounce" />
            <span>Return Home</span>
          </button>
          
          <button
            onClick={handleGoBack}
            className="group flex items-center justify-center space-x-2 bg-slate-700 hover:bg-slate-600 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 border border-slate-600 hover:border-slate-500"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
            <span>Go Back</span>
          </button>
        </div>

        {/* Floating Solar Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-yellow-400 rounded-full animate-ping opacity-60"></div>
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-orange-400 rounded-full animate-pulse opacity-80" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-yellow-300 rounded-full animate-ping opacity-40" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-amber-400 rounded-full animate-pulse opacity-70" style={{animationDelay: '3s'}}></div>
        </div>

        {/* Help Text */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm">
            Need help? Our AI-powered support team is ready to diagnose and solve your navigation issues.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;