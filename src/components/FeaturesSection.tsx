import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code2, Brain, BarChart3, ArrowRight, CheckCircle, Users, Zap } from "lucide-react";
import InteractiveProblemCard from "./InteractiveProblemCard";
import MockInterviewInterface from "./MockInterviewInterface";

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Coding Problems Section */}
        <div id="coding-problems" className="mb-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="p-3 bg-code-accent/20 rounded-lg mr-4">
                  <Code2 className="h-8 w-8 text-code-accent" />
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                  Coding Problems
                </h2>
              </div>
              
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Practice with thousands of carefully curated coding challenges across all difficulty levels. 
                From basic algorithms to complex system design problems.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-code-accent mr-3" />
                  <span className="text-foreground">1000+ Problems across 20+ topics</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-code-accent mr-3" />
                  <span className="text-foreground">Multiple programming languages</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-code-accent mr-3" />
                  <span className="text-foreground">Real-time code execution</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-code-accent mr-3" />
                  <span className="text-foreground">Detailed solutions & explanations</span>
                </div>
              </div>

              <Button 
                className="bg-code-accent text-white hover:bg-code-accent/90 group"
                onClick={() => {
                  document.getElementById('ai-interview')?.scrollIntoView({ 
                    behavior: 'smooth' 
                  });
                }}
              >
                Explore Problems
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            <div className="relative space-y-4">
              <InteractiveProblemCard
                title="Two Sum"
                difficulty="Easy"
                description="Given an array of integers, return indices of two numbers that add up to target."
                topics={["Array", "Hash Table"]}
                timeEstimate="15 min"
                rating={4.2}
              />
              <InteractiveProblemCard
                title="Binary Tree Traversal"
                difficulty="Medium"
                description="Implement different traversal methods for a binary tree structure."
                topics={["Tree", "DFS", "BFS"]}
                timeEstimate="30 min"
                rating={4.5}
              />
            </div>
          </div>
        </div>

        {/* AI Interview Section */}
        <div id="ai-interview" className="mb-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative">
              <MockInterviewInterface />
            </div>

            <div className="order-1 lg:order-2">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-ai-accent/20 rounded-lg mr-4">
                  <Brain className="h-8 w-8 text-ai-accent" />
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                  AI Interview
                </h2>
              </div>
              
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Practice technical interviews with our advanced AI interviewer. Get real-time feedback, 
                personalized questions, and detailed performance analysis.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-ai-accent mr-3" />
                  <span className="text-foreground">Adaptive questioning based on your responses</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-ai-accent mr-3" />
                  <span className="text-foreground">Real-time feedback and hints</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-ai-accent mr-3" />
                  <span className="text-foreground">Company-specific interview styles</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-ai-accent mr-3" />
                  <span className="text-foreground">Voice and text interaction</span>
                </div>
              </div>

              <Button 
                className="bg-ai-accent text-white hover:bg-ai-accent/90 group"
                onClick={() => {
                  document.getElementById('statistics-dashboard')?.scrollIntoView({ 
                    behavior: 'smooth' 
                  });
                }}
              >
                Start Interview
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>

        {/* Dashboard Section */}
        <div id="statistics-dashboard">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="p-3 bg-stats-accent/20 rounded-lg mr-4">
                  <BarChart3 className="h-8 w-8 text-stats-accent" />
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                  Statistics Dashboard
                </h2>
              </div>
              
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Track your progress with comprehensive analytics. Visualize your coding journey, 
                identify strengths and weaknesses, and optimize your learning path.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-stats-accent mr-3" />
                  <span className="text-foreground">Performance trends and insights</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-stats-accent mr-3" />
                  <span className="text-foreground">Topic-wise skill breakdown</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-stats-accent mr-3" />
                  <span className="text-foreground">Competitive rankings</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-stats-accent mr-3" />
                  <span className="text-foreground">Personal learning recommendations</span>
                </div>
              </div>

              <Button className="bg-stats-accent text-white hover:bg-stats-accent/90 group">
                View Dashboard
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            <div className="relative">
              <Card className="bg-gradient-card border-border/50 shadow-card animate-float">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <h4 className="text-foreground font-semibold mb-4">Your Progress</h4>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="text-sm text-muted-foreground">Algorithms</span>
                          <span className="text-sm text-stats-accent">85%</span>
                        </div>
                        <div className="h-2 bg-accent rounded-full">
                          <div className="h-2 bg-stats-accent rounded-full w-[85%]"></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="text-sm text-muted-foreground">Data Structures</span>
                          <span className="text-sm text-code-accent">72%</span>
                        </div>
                        <div className="h-2 bg-accent rounded-full">
                          <div className="h-2 bg-code-accent rounded-full w-[72%]"></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="text-sm text-muted-foreground">System Design</span>
                          <span className="text-sm text-ai-accent">64%</span>
                        </div>
                        <div className="h-2 bg-accent rounded-full">
                          <div className="h-2 bg-ai-accent rounded-full w-[64%]"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-accent/50 rounded-lg">
                      <div className="text-2xl font-bold text-stats-accent">247</div>
                      <div className="text-xs text-muted-foreground">Problems Solved</div>
                    </div>
                    <div className="text-center p-4 bg-accent/50 rounded-lg">
                      <div className="text-2xl font-bold text-ai-accent">12</div>
                      <div className="text-xs text-muted-foreground">Interviews Completed</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;