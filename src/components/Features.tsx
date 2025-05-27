
import { Brain, BarChart3, Target, TrendingUp, Shield, BookOpen } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Analysis",
      description: "Advanced machine learning algorithms analyze thousands of data points to provide you with intelligent betting insights and recommendations."
    },
    {
      icon: BarChart3,
      title: "Real-Time Statistics",
      description: "Access live statistics, player performance data, and team analytics updated in real-time to make informed betting decisions."
    },
    {
      icon: Target,
      title: "Strategic Education",
      description: "Learn proven betting strategies from experts. Our AI tutor adapts to your learning style and betting preferences."
    },
    {
      icon: TrendingUp,
      title: "Performance Tracking",
      description: "Monitor your betting performance with detailed analytics and insights to help you improve your strategy over time."
    },
    {
      icon: Shield,
      title: "Responsible Betting",
      description: "Built-in tools and education to promote responsible gambling habits and help you set healthy limits."
    },
    {
      icon: BookOpen,
      title: "Educational Content",
      description: "Comprehensive library of betting guides, tutorials, and expert analysis to continuously improve your knowledge."
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Powered by <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Artificial Intelligence</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            BallerBets combines cutting-edge AI technology with comprehensive sports data to provide you with the most advanced betting education platform available.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-lg group">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
