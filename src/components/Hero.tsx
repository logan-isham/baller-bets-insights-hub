
import { Button } from "@/components/ui/button";
import { ArrowRight, Smartphone } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-20 pb-16 bg-gradient-to-br from-blue-50 via-white to-purple-50 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Master Sports Betting with{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                AI Intelligence
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              BallerBets uses advanced AI to educate you on betting statistics, strategies, and how to make informed decisions. 
              Learn from the best and bet smarter, not harder.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg">
                Get Started Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-4 text-lg">
                Learn More
              </Button>
            </div>

            <div className="flex items-center space-x-8 text-sm text-gray-500">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                AI-Powered Education
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                Real-time Statistics
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                Expert Strategies
              </div>
            </div>
          </div>

          {/* Right Content - App Screenshot Space */}
          <div className="relative">
            <div className="relative mx-auto w-80 h-[600px] bg-gradient-to-br from-gray-900 to-gray-700 rounded-[3rem] p-2 shadow-2xl">
              {/* Phone Frame */}
              <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
                {/* Status Bar */}
                <div className="bg-gray-900 h-8 flex items-center justify-center">
                  <div className="w-20 h-1 bg-white rounded-full"></div>
                </div>
                
                {/* App Screenshot Placeholder */}
                <div className="h-full bg-gradient-to-br from-blue-50 to-purple-50 flex flex-col items-center justify-center p-6 text-center">
                  <Smartphone className="h-16 w-16 text-blue-600 mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">App Screenshot</h3>
                  <p className="text-sm text-gray-600 mb-4">Place your BallerBets app screenshot here</p>
                  <div className="w-full h-32 bg-white/50 rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center">
                    <span className="text-xs text-gray-500">640 x 1280 recommended</span>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500 rounded-full animate-pulse delay-300"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
