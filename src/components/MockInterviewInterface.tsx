import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Mic, MicOff, Video, VideoOff, MessageSquare } from "lucide-react";

const MockInterviewInterface = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [isVideoOn, setIsVideoOn] = useState(true);
  const [response, setResponse] = useState("");
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const questions = [
    "Can you explain the difference between var, let, and const in JavaScript?",
    "How would you implement a binary search algorithm?",
    "What is the time complexity of your solution?",
    "Can you optimize this further?"
  ];

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setResponse("");
    }
  };

  return (
    <Card className="max-w-2xl mx-auto">
      <CardContent className="p-6">
        <div className="text-center mb-6">
          <h3 className="text-xl font-semibold text-foreground mb-2">AI Interview Session</h3>
          <p className="text-muted-foreground">Question {currentQuestion + 1} of {questions.length}</p>
        </div>

        <div className="bg-accent/20 p-4 rounded-lg mb-6">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <MessageSquare className="h-4 w-4 text-primary-foreground" />
            </div>
            <div>
              <p className="font-medium text-foreground mb-1">AI Interviewer</p>
              <p className="text-muted-foreground">{questions[currentQuestion]}</p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <Textarea
            placeholder="Type your answer here or use voice recording..."
            value={response}
            onChange={(e) => setResponse(e.target.value)}
            className="min-h-[120px]"
          />

          <div className="flex justify-between items-center">
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsRecording(!isRecording)}
                className={isRecording ? "bg-red-500/20 border-red-500" : ""}
              >
                {isRecording ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
                {isRecording ? "Stop" : "Record"}
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsVideoOn(!isVideoOn)}
                className={!isVideoOn ? "bg-red-500/20 border-red-500" : ""}
              >
                {isVideoOn ? <Video className="h-4 w-4" /> : <VideoOff className="h-4 w-4" />}
                Video
              </Button>
            </div>

            <div className="flex gap-2">
              <Button variant="outline" onClick={() => setResponse("")}>
                Clear
              </Button>
              <Button onClick={nextQuestion} disabled={currentQuestion >= questions.length - 1}>
                {currentQuestion >= questions.length - 1 ? "Complete" : "Next Question"}
              </Button>
            </div>
          </div>
        </div>

        {currentQuestion >= questions.length - 1 && response && (
          <div className="mt-6 p-4 bg-green-500/20 border border-green-500/30 rounded-lg">
            <p className="text-green-700 dark:text-green-300 font-medium">
              Interview Complete! Great job answering all questions.
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default MockInterviewInterface;