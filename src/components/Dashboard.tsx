import { 
  TrendingUp, 
  BookOpen, 
  Globe, 
  Clock, 
  Star, 
  Download,
  Settings,
  Mic,
  Bell
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const dashboardFeatures = [
  {
    icon: BookOpen,
    title: "Personal Library",
    description: "Save and organize your favorite articles",
    count: "127 saved",
    color: "text-blue-500"
  },
  {
    icon: Star,
    title: "Favorites Collection",
    description: "Quick access to starred content",
    count: "43 favorites",
    color: "text-yellow-500"
  },
  {
    icon: TrendingUp,
    title: "Reading Analytics",
    description: "Track your reading habits and progress",
    count: "2.3k this month",
    color: "text-green-500"
  },
  {
    icon: Globe,
    title: "Global Coverage",
    description: "News from 50+ countries worldwide",
    count: "Live updates",
    color: "text-purple-500"
  },
  {
    icon: Mic,
    title: "Voice Commands",
    description: "Control with natural voice interface",
    count: "Always listening",
    color: "text-red-500"
  },
  {
    icon: Download,
    title: "Offline Reading",
    description: "Download articles for offline access",
    count: "15 downloaded",
    color: "text-indigo-500"
  },
  {
    icon: Settings,
    title: "Smart Preferences",
    description: "Personalized content recommendations",
    count: "AI-powered",
    color: "text-orange-500"
  },
  {
    icon: Bell,
    title: "Real-time Alerts",
    description: "Breaking news and custom notifications",
    count: "3 active alerts",
    color: "text-teal-500"
  }
];

const Dashboard = () => {
  return (
    <section className="py-12 bg-gradient-accent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Your Reading Dashboard
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive news platform with advanced features for the modern reader
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {dashboardFeatures.map((feature, index) => (
            <Card 
              key={feature.title}
              className="bg-card/50 backdrop-blur-sm border-border hover:bg-card/80 transition-all duration-300 hover:shadow-medium hover:scale-105 cursor-pointer animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <feature.icon className={`w-6 h-6 ${feature.color}`} />
                  <Badge variant="secondary" className="text-xs">
                    Active
                  </Badge>
                </div>
                <CardTitle className="text-lg font-semibold text-foreground">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <p className="text-muted-foreground text-sm mb-3 leading-relaxed">
                  {feature.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-accent">
                    {feature.count}
                  </span>
                  <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-foreground">50M+</div>
              <div className="text-sm text-muted-foreground">Articles Available</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-foreground">200+</div>
              <div className="text-sm text-muted-foreground">News Sources</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-foreground">24/7</div>
              <div className="text-sm text-muted-foreground">Live Updates</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-foreground">15+</div>
              <div className="text-sm text-muted-foreground">Languages</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;