import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const countries = [
  { name: "Global", code: "global", flag: "🌍" },
  { name: "United States", code: "us", flag: "🇺🇸" },
  { name: "United Kingdom", code: "uk", flag: "🇬🇧" },
  { name: "Canada", code: "ca", flag: "🇨🇦" },
  { name: "Australia", code: "au", flag: "🇦🇺" },
  { name: "Germany", code: "de", flag: "🇩🇪" },
  { name: "France", code: "fr", flag: "🇫🇷" },
  { name: "Japan", code: "jp", flag: "🇯🇵" },
  { name: "India", code: "in", flag: "🇮🇳" },
  { name: "Brazil", code: "br", flag: "🇧🇷" },
];

const CountryFilter = () => {
  const [selectedCountry, setSelectedCountry] = useState("global");

  return (
    <section className="py-8 bg-card border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-foreground">
            News by Country
          </h2>
          <Badge variant="outline" className="text-xs">
            {countries.find(c => c.code === selectedCountry)?.name}
          </Badge>
        </div>
        
        <div className="flex items-center space-x-3 overflow-x-auto pb-2">
          {countries.map((country) => (
            <Button
              key={country.code}
              variant={selectedCountry === country.code ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCountry(country.code)}
              className={`whitespace-nowrap transition-all duration-200 ${
                selectedCountry === country.code 
                  ? "bg-primary text-primary-foreground shadow-medium scale-105" 
                  : "border-border hover:border-accent hover:bg-accent/5"
              }`}
            >
              <span className="mr-2 text-lg">{country.flag}</span>
              {country.name}
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CountryFilter;