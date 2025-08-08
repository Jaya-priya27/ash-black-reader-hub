import { Clock, User, Eye, Share2 } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const mockArticles = [
  {
    id: 1,
    title: "Revolutionary AI Technology Transforms Healthcare Industry",
    excerpt: "Latest breakthroughs in artificial intelligence are revolutionizing patient care and medical diagnostics across the globe.",
    author: "Dr. Sarah Johnson",
    category: "Technology",
    readTime: "5 min read",
    views: "2.3k",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop",
    publishedAt: "2 hours ago",
    featured: true
  },
  {
    id: 2,
    title: "Global Climate Summit Reaches Historic Agreement",
    excerpt: "World leaders unite on unprecedented climate action plan with ambitious carbon reduction targets for the next decade.",
    author: "Michael Chen",
    category: "World",
    readTime: "8 min read",
    views: "4.1k",
    image: "https://images.unsplash.com/photo-1569163139394-de44cb4fccd0?w=400&h=300&fit=crop",
    publishedAt: "4 hours ago",
    featured: false
  },
  {
    id: 3,
    title: "Tech Giants Report Record-Breaking Quarterly Earnings",
    excerpt: "Major technology companies exceed expectations with strong financial performance driven by AI investments and cloud services.",
    author: "Emily Rodriguez",
    category: "Business",
    readTime: "6 min read",
    views: "1.8k",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=300&fit=crop",
    publishedAt: "6 hours ago",
    featured: false
  },
  {
    id: 4,
    title: "Space Exploration Reaches New Milestone",
    excerpt: "NASA's latest mission discovers potential signs of life on distant planet, marking a significant breakthrough in space exploration.",
    author: "Dr. James Wilson",
    category: "Science",
    readTime: "7 min read",
    views: "3.2k",
    image: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=400&h=300&fit=crop",
    publishedAt: "8 hours ago",
    featured: true
  },
  {
    id: 5,
    title: "Olympic Games Showcase Athletic Excellence",
    excerpt: "Athletes break multiple records in thrilling competitions while promoting unity and sportsmanship across nations.",
    author: "Lisa Thompson",
    category: "Sports",
    readTime: "4 min read",
    views: "2.7k",
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=400&h=300&fit=crop",
    publishedAt: "10 hours ago",
    featured: false
  },
  {
    id: 6,
    title: "Breakthrough Medical Treatment Shows Promise",
    excerpt: "Clinical trials reveal remarkable success rates for new gene therapy treatment, offering hope for rare disease patients.",
    author: "Dr. Maria Garcia",
    category: "Health",
    readTime: "9 min read",
    views: "1.5k",
    image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=300&fit=crop",
    publishedAt: "12 hours ago",
    featured: false
  }
];

const ArticleGrid = () => {
  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-foreground">Latest Articles</h2>
          <Badge variant="secondary" className="text-xs">
            {mockArticles.length} Articles
          </Badge>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockArticles.map((article, index) => (
            <Card 
              key={article.id} 
              className={`news-card overflow-hidden border-border hover:border-accent cursor-pointer animate-slide-up ${
                article.featured ? "ring-2 ring-accent/20" : ""
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
                {article.featured && (
                  <Badge className="absolute top-3 left-3 bg-news-featured text-white">
                    Featured
                  </Badge>
                )}
                <Badge 
                  variant="secondary" 
                  className="absolute top-3 right-3 bg-black/20 text-white backdrop-blur-sm"
                >
                  {article.category}
                </Badge>
              </div>

              <CardHeader className="pb-2">
                <h3 className="font-semibold text-lg leading-tight text-foreground hover:text-accent transition-colors">
                  {article.title}
                </h3>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {article.excerpt}
                </p>

                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center space-x-1">
                      <User className="w-3 h-3" />
                      <span>{article.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-3 h-3" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center space-x-1">
                      <Eye className="w-3 h-3" />
                      <span>{article.views}</span>
                    </div>
                    <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                      <Share2 className="w-3 h-3" />
                    </Button>
                  </div>
                </div>

                <div className="text-xs text-muted-foreground pt-2 border-t border-border">
                  Published {article.publishedAt}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Button variant="outline" className="px-8">
            Load More Articles
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ArticleGrid;