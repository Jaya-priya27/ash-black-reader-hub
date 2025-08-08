import Header from "@/components/Header";
import CountryFilter from "@/components/CountryFilter";
import ArticleGrid from "@/components/ArticleGrid";
import Dashboard from "@/components/Dashboard";
import VoiceCommand from "@/components/VoiceCommand";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <CountryFilter />
        <Dashboard />
        <ArticleGrid />
        <VoiceCommand />
      </main>
    </div>
  );
};

export default Index;