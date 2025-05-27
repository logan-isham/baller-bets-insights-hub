
import { Card, CardContent } from "@/components/ui/card";

const Sports = () => {
  const sports = [
    {
      name: "Basketball",
      icon: "🏀",
      description: "NBA, NCAA, and international leagues",
      gradient: "from-orange-400 to-red-500"
    },
    {
      name: "Football",
      icon: "🏈",
      description: "NFL, college football, and more",
      gradient: "from-brown-400 to-yellow-600"
    },
    {
      name: "Soccer",
      icon: "⚽",
      description: "Premier League, Champions League, World Cup",
      gradient: "from-green-400 to-blue-500"
    },
    {
      name: "Baseball",
      icon: "⚾",
      description: "MLB, minor leagues, and college baseball",
      gradient: "from-blue-400 to-indigo-600"
    },
    {
      name: "Hockey",
      icon: "🏒",
      description: "NHL, international tournaments",
      gradient: "from-cyan-400 to-blue-600"
    }
  ];

  return (
    <section id="sports" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Coverage Across <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Major Sports</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get comprehensive AI-powered insights and education for all the major sports leagues and tournaments you care about.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {sports.map((sport, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
              <CardContent className="p-0">
                <div className={`h-32 bg-gradient-to-br ${sport.gradient} flex items-center justify-center relative overflow-hidden`}>
                  <div className="text-6xl group-hover:scale-110 transition-transform duration-300">
                    {sport.icon}
                  </div>
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{sport.name}</h3>
                  <p className="text-sm text-gray-600">{sport.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Real-Time Data Integration
            </h3>
            <p className="text-gray-600 mb-6">
              Our AI continuously analyzes live game data, player statistics, injury reports, weather conditions, and historical performance to provide you with the most accurate and up-to-date betting education.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">10M+</div>
                <div className="text-sm text-gray-500">Data Points Analyzed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
                <div className="text-sm text-gray-500">Real-Time Updates</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600 mb-2">99.9%</div>
                <div className="text-sm text-gray-500">Data Accuracy</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sports;
