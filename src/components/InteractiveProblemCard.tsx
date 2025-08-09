import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp, Code, Clock, Star } from "lucide-react";

interface ProblemCardProps {
  title: string;
  difficulty: "Easy" | "Medium" | "Hard";
  description: string;
  topics: string[];
  timeEstimate: string;
  rating: number;
}

const InteractiveProblemCard = ({ 
  title, 
  difficulty, 
  description, 
  topics, 
  timeEstimate, 
  rating 
}: ProblemCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const difficultyColors = {
    Easy: "text-green-500",
    Medium: "text-yellow-500", 
    Hard: "text-red-500"
  };

  return (
    <Card className="hover:shadow-lg transition-all duration-300 cursor-pointer">
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span className={`font-medium ${difficultyColors[difficulty]}`}>
                {difficulty}
              </span>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {timeEstimate}
              </div>
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-current text-yellow-500" />
                {rating}
              </div>
            </div>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
          </Button>
        </div>
        
        {isExpanded && (
          <div className="space-y-4 animate-fade-in">
            <p className="text-muted-foreground">{description}</p>
            <div className="flex flex-wrap gap-2">
              {topics.map((topic, index) => (
                <span 
                  key={index}
                  className="px-2 py-1 bg-accent/50 text-accent-foreground rounded-md text-xs"
                >
                  {topic}
                </span>
              ))}
            </div>
            <Button className="w-full" onClick={() => alert("Starting problem...")}>
              <Code className="mr-2 h-4 w-4" />
              Start Problem
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default InteractiveProblemCard;