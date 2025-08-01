import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download, Code2, Database, Brain } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-4 h-4 bg-primary rounded-full animate-float opacity-60" />
        <div className="absolute top-40 right-32 w-6 h-6 bg-secondary rounded-full animate-float animation-delay-1000 opacity-40" />
        <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-accent rounded-full animate-float animation-delay-2000 opacity-50" />
        <Code2 className="absolute top-1/3 right-20 w-8 h-8 text-primary animate-float animation-delay-500 opacity-30" />
        <Database className="absolute bottom-20 right-1/3 w-6 h-6 text-secondary animate-float animation-delay-1500 opacity-40" />
        <Brain className="absolute top-1/4 left-1/3 w-7 h-7 text-accent animate-float animation-delay-1000 opacity-35" />
      </div>
      
      {/* Main Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="animate-slide-up">
          <div className="mb-6">
            <span className="text-primary text-lg font-medium">👋 Hello, I'm</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Alex Chen
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-muted-foreground mb-8">
            Data Science Student & Machine Learning Enthusiast
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
            Third-year Computer Science Engineering student specializing in Data Science. 
            Passionate about turning data into insights and building intelligent systems 
            that solve real-world problems.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-gradient-primary hover:opacity-90 transition-opacity">
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>
            <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10">
              <Download className="mr-2 h-5 w-5" />
              Download CV
            </Button>
          </div>
          
          <div className="flex justify-center space-x-6">
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
              <Github className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
              <Mail className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};