import { useState, useEffect } from "react";
import { Mic, MicOff, Volume2, VolumeX, ChevronUp, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const VoiceCommand = () => {
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [isSupported, setIsSupported] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    // Check if browser supports speech recognition
    setIsSupported('webkitSpeechRecognition' in window || 'SpeechRecognition' in window);
    
    // Show floating voice command after scrolling down
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsVisible(scrollY > 200);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleListening = () => {
    if (isListening) {
      stopListening();
    } else {
      startListening();
    }
  };

  const startListening = () => {
    setIsListening(true);
    setTranscript("Listening...");
    
    // Simulate voice recognition
    setTimeout(() => {
      setTranscript("Read me the latest technology news");
      setTimeout(() => {
        setIsListening(false);
        handleVoiceCommand("Read me the latest technology news");
      }, 1000);
    }, 2000);
  };

  const stopListening = () => {
    setIsListening(false);
    setTranscript("");
  };

  const handleVoiceCommand = (command: string) => {
    setIsSpeaking(true);
    
    // Simulate processing the command
    setTimeout(() => {
      setIsSpeaking(false);
      setTranscript("Command processed successfully");
      setTimeout(() => setTranscript(""), 2000);
    }, 3000);
  };

  const toggleSpeech = () => {
    if (isSpeaking) {
      setIsSpeaking(false);
    } else {
      setIsSpeaking(true);
      setTimeout(() => setIsSpeaking(false), 3000);
    }
  };

  if (!isVisible) return null;

  return (
    <div className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${
      isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
    }`}>
      <Card className="bg-gradient-primary border-border shadow-strong w-80">
        <CardContent className="p-4">
          {/* Compact header with expand toggle */}
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-2">
              <div className={`w-3 h-3 rounded-full ${
                isListening ? 'bg-news-hot animate-pulse' : 
                isSpeaking ? 'bg-news-trending animate-pulse' : 
                'bg-muted'
              }`}></div>
              <span className="text-primary-foreground text-sm font-medium">
                Voice Command
              </span>
            </div>
            <Button
              size="sm"
              variant="ghost"
              onClick={() => setIsExpanded(!isExpanded)}
              className="h-6 w-6 p-0 hover:bg-white/10"
            >
              {isExpanded ? (
                <ChevronDown className="w-4 h-4 text-primary-foreground" />
              ) : (
                <ChevronUp className="w-4 h-4 text-primary-foreground" />
              )}
            </Button>
          </div>

          {/* Main controls - always visible */}
          <div className="flex items-center justify-center space-x-4 mb-3">
            <Button
              size="sm"
              onClick={toggleListening}
              disabled={!isSupported || isSpeaking}
              className={`w-12 h-12 rounded-full ${
                isListening 
                  ? "bg-news-hot hover:bg-news-hot/90 animate-pulse" 
                  : "bg-accent hover:bg-accent/90"
              }`}
            >
              {isListening ? (
                <MicOff className="w-4 h-4 text-white" />
              ) : (
                <Mic className="w-4 h-4 text-white" />
              )}
            </Button>

            <Button
              size="sm"
              variant="outline"
              onClick={toggleSpeech}
              disabled={!isSupported}
              className={`w-12 h-12 rounded-full border-primary-foreground/20 ${
                isSpeaking 
                  ? "bg-news-trending hover:bg-news-trending/90 animate-pulse" 
                  : "hover:bg-white/10"
              }`}
            >
              {isSpeaking ? (
                <VolumeX className="w-4 h-4 text-primary-foreground" />
              ) : (
                <Volume2 className="w-4 h-4 text-primary-foreground" />
              )}
            </Button>
          </div>

          {/* Status */}
          <div className="text-center mb-3">
            <Badge 
              variant={isListening || isSpeaking ? "default" : "secondary"}
              className="text-xs"
            >
              {isListening ? "Listening..." : 
               isSpeaking ? "Speaking..." : 
               isSupported ? "Ready" : "Not Supported"}
            </Badge>
          </div>

          {/* Transcript - always show if exists */}
          {transcript && (
            <div className="mb-3">
              <div className="p-2 bg-white/10 rounded border border-white/20">
                <p className="text-primary-foreground text-xs text-center">
                  "{transcript}"
                </p>
              </div>
            </div>
          )}

          {/* Expanded content */}
          {isExpanded && (
            <div className="space-y-3 animate-fade-in">
              <div className="grid grid-cols-1 gap-2">
                <div className="p-2 bg-white/5 rounded text-center">
                  <p className="text-primary-foreground/80 text-xs">
                    "Read latest news"
                  </p>
                </div>
                <div className="p-2 bg-white/5 rounded text-center">
                  <p className="text-primary-foreground/80 text-xs">
                    "Show tech articles"
                  </p>
                </div>
                <div className="p-2 bg-white/5 rounded text-center">
                  <p className="text-primary-foreground/80 text-xs">
                    "Open settings"
                  </p>
                </div>
              </div>

              {!isSupported && (
                <p className="text-primary-foreground/60 text-xs text-center">
                  Voice commands not supported
                </p>
              )}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default VoiceCommand;