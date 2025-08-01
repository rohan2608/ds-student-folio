import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Code, Trophy, Heart } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate about leveraging data to create meaningful solutions
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a third-year Computer Science Engineering student with a specialization in Data Science. 
              My journey began with a curiosity about how data shapes our world, and it has evolved into 
              a passion for machine learning, statistical analysis, and building predictive models.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Through my coursework and personal projects, I've gained experience in Python, R, SQL, 
              and various ML frameworks. I enjoy tackling complex problems and finding innovative 
              solutions through data-driven approaches.
            </p>
            
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-primary rounded-full"></div>
                <span className="text-sm text-muted-foreground">Location: San Francisco, CA</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-secondary rounded-full"></div>
                <span className="text-sm text-muted-foreground">Age: 21</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-accent rounded-full"></div>
                <span className="text-sm text-muted-foreground">Degree: CSE - Data Science</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-primary rounded-full"></div>
                <span className="text-sm text-muted-foreground">Year: 3rd Year</span>
              </div>
            </div>
          </div>
          
          <div className="grid gap-6">
            <Card className="p-6 bg-gradient-card border-border/50 hover:border-primary/50 transition-colors">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Education</h3>
                  <p className="text-sm text-muted-foreground">Strong Academic Foundation</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Currently maintaining a 3.8 GPA with focus on Machine Learning, Statistics, and Database Systems.
              </p>
            </Card>
            
            <Card className="p-6 bg-gradient-card border-border/50 hover:border-secondary/50 transition-colors">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center">
                  <Code className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Experience</h3>
                  <p className="text-sm text-muted-foreground">Hands-on Projects</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Completed 15+ data science projects including predictive modeling and data visualization.
              </p>
            </Card>
            
            <Card className="p-6 bg-gradient-card border-border/50 hover:border-accent/50 transition-colors">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                  <Heart className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Passion</h3>
                  <p className="text-sm text-muted-foreground">Continuous Learning</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Always exploring new technologies and methodologies in AI/ML and data science.
              </p>
            </Card>
          </div>
        </div>
        
        <div className="mt-16">
          <h3 className="text-2xl font-semibold mb-8 text-center text-foreground">Interests & Hobbies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Machine Learning", "Data Visualization", "Deep Learning", "Statistical Analysis",
              "Open Source", "Research", "Competitive Programming", "Tech Blogs", "Photography"
            ].map((interest) => (
              <Badge key={interest} variant="secondary" className="text-sm py-2 px-4 bg-muted/50 hover:bg-primary/10 transition-colors">
                {interest}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};