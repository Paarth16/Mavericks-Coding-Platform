import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, TrendingUp } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-hero flex items-center justify-center pt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent/50 border border-border mb-8 animate-float">
            <Zap className="h-4 w-4 text-primary mr-2" />
            <span className="text-sm font-medium text-foreground">AI-Powered Coding Platform</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            Master Coding with{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              AI-Driven Practice
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Sharpen your programming skills with curated coding challenges, 
            AI-powered interview simulations, and comprehensive performance analytics.
          </p>

          {/* CTA Buttons */}
          <div className="flex justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300 group"
              onClick={() => window.open("/coding.html")}
            >
              Start Coding Now
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">1000+</div>
              <div className="text-sm text-muted-foreground">Coding Problems</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-ai-accent mb-2">50K+</div>
              <div className="text-sm text-muted-foreground">AI Interviews</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-stats-accent mb-2">95%</div>
              <div className="text-sm text-muted-foreground">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
