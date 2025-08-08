import { useState, useEffect } from "react";
import { Mic, MicOff, Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const VoiceCommand = () => {
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [isSupported, setIsSupported] = useState(false);

  useEffect(() => {
    // Check if browser supports speech recognition
    setIsSupported('webkitSpeechRecognition' in window || 'SpeechRecognition' in window);
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

  return (
    <section className="py-12 bg-card border-t border-border">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Voice Command Center
            </h2>
            <p className="text-muted-foreground">
              Control your reading experience with natural voice commands
            </p>
          </div>

          <Card className="bg-gradient-primary border-border shadow-medium">
            <CardContent className="p-8">
              <div className="flex flex-col items-center space-y-6">
                
                {/* Voice status indicator */}
                <div className="flex items-center space-x-4">
                  <div className={`w-4 h-4 rounded-full ${
                    isListening ? 'bg-news-hot animate-pulse' : 
                    isSpeaking ? 'bg-news-trending animate-pulse' : 
                    'bg-muted'
                  }`}></div>
                  <Badge variant={isListening || isSpeaking ? "default" : "secondary"}>
                    {isListening ? "Listening..." : 
                     isSpeaking ? "Speaking..." : 
                     isSupported ? "Ready" : "Not Supported"}
                  </Badge>
                </div>

                {/* Main voice controls */}
                <div className="flex items-center space-x-6">
                  <Button
                    size="lg"
                    onClick={toggleListening}
                    disabled={!isSupported || isSpeaking}
                    className={`w-16 h-16 rounded-full ${
                      isListening 
                        ? "bg-news-hot hover:bg-news-hot/90 animate-pulse" 
                        : "bg-accent hover:bg-accent/90"
                    }`}
                  >
                    {isListening ? (
                      <MicOff className="w-6 h-6 text-white" />
                    ) : (
                      <Mic className="w-6 h-6 text-white" />
                    )}
                  </Button>

                  <Button
                    size="lg"
                    variant="outline"
                    onClick={toggleSpeech}
                    disabled={!isSupported}
                    className={`w-16 h-16 rounded-full border-primary-foreground/20 ${
                      isSpeaking 
                        ? "bg-news-trending hover:bg-news-trending/90 animate-pulse" 
                        : "hover:bg-white/10"
                    }`}
                  >
                    {isSpeaking ? (
                      <VolumeX className="w-6 h-6 text-primary-foreground" />
                    ) : (
                      <Volume2 className="w-6 h-6 text-primary-foreground" />
                    )}
                  </Button>
                </div>

                {/* Transcript display */}
                {transcript && (
                  <div className="w-full max-w-md">
                    <Card className="bg-white/10 border-white/20">
                      <CardContent className="p-4">
                        <p className="text-primary-foreground text-center text-sm">
                          "{transcript}"
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                )}

                {/* Voice commands examples */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-2xl text-center">
                  <div className="p-3 bg-white/5 rounded-lg border border-white/10">
                    <p className="text-primary-foreground/80 text-xs font-medium">
                      "Read latest news"
                    </p>
                  </div>
                  <div className="p-3 bg-white/5 rounded-lg border border-white/10">
                    <p className="text-primary-foreground/80 text-xs font-medium">
                      "Show tech articles"
                    </p>
                  </div>
                  <div className="p-3 bg-white/5 rounded-lg border border-white/10">
                    <p className="text-primary-foreground/80 text-xs font-medium">
                      "Open settings"
                    </p>
                  </div>
                </div>

                {!isSupported && (
                  <p className="text-primary-foreground/60 text-sm text-center">
                    Voice commands are not supported in your browser
                  </p>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default VoiceCommand;