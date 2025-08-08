import { useState } from "react";
import { Search, Settings, Download, Bell, Globe, Bookmark, Library, Mic } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const newsCategories = [
  "Breaking News",
  "Politics", 
  "Technology",
  "Business",
  "Sports",
  "Entertainment",
  "Health",
  "Science",
  "World"
];

const Header = () => {
  const [activeCategory, setActiveCategory] = useState("Breaking News");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <header className="bg-gradient-primary border-b border-border shadow-soft sticky top-0 z-50">
      <div className="container mx-auto px-4">
        {/* Top row with logo and actions */}
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold text-primary-foreground">
              ReaderHub
            </h1>
            <Badge variant="secondary" className="text-xs">
              Portfolio
            </Badge>
          </div>

          <div className="flex items-center space-x-3">
            <Button variant="ghost" size="sm" className="text-primary-foreground hover:bg-white/10">
              <Download className="w-4 h-4 mr-2" />
              Download
            </Button>
            <Button variant="ghost" size="sm" className="text-primary-foreground hover:bg-white/10">
              <Bookmark className="w-4 h-4 mr-2" />
              Favorites
            </Button>
            <Button variant="ghost" size="sm" className="text-primary-foreground hover:bg-white/10">
              <Library className="w-4 h-4 mr-2" />
              Library
            </Button>
            <Button variant="ghost" size="sm" className="text-primary-foreground hover:bg-white/10">
              <Bell className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="sm" className="text-primary-foreground hover:bg-white/10">
              <Settings className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* News categories */}
        <div className="flex items-center justify-center space-x-1 pb-4 overflow-x-auto">
          {newsCategories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "secondary" : "ghost"}
              size="sm"
              onClick={() => setActiveCategory(category)}
              className={`whitespace-nowrap transition-all duration-200 ${
                activeCategory === category 
                  ? "bg-white/20 text-primary-foreground shadow-soft" 
                  : "text-primary-foreground/80 hover:bg-white/10 hover:text-primary-foreground"
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Search bar */}
        <div className="flex items-center justify-center pb-6">
          <div className="relative w-full max-w-2xl">
            <div className="relative flex items-center">
              <Search className="absolute left-4 w-5 h-5 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search news, articles, and topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-16 py-6 text-lg bg-white/10 border-white/20 text-primary-foreground placeholder:text-primary-foreground/60 focus:bg-white/20 focus:border-white/40 rounded-xl shadow-soft"
              />
              <Button 
                size="sm" 
                className="absolute right-2 bg-accent hover:bg-accent/90 text-accent-foreground"
              >
                <Mic className="w-4 h-4 mr-2" />
                Voice
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;