import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Brain, BarChart } from "lucide-react";

export const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      color: "primary",
      skills: [
        { name: "Python", level: 90 },
        { name: "R", level: 85 },
        { name: "SQL", level: 80 },
        { name: "JavaScript", level: 75 },
        { name: "Java", level: 70 },
        { name: "C++", level: 65 }
      ]
    },
    {
      title: "Data Science & ML",
      icon: Brain,
      color: "secondary",
      skills: [
        { name: "Scikit-learn", level: 85 },
        { name: "Pandas", level: 90 },
        { name: "NumPy", level: 88 },
        { name: "TensorFlow", level: 75 },
        { name: "PyTorch", level: 70 },
        { name: "Keras", level: 80 }
      ]
    },
    {
      title: "Data Visualization",
      icon: BarChart,
      color: "accent",
      skills: [
        { name: "Matplotlib", level: 85 },
        { name: "Seaborn", level: 82 },
        { name: "Plotly", level: 78 },
        { name: "Tableau", level: 75 },
        { name: "Power BI", level: 70 },
        { name: "D3.js", level: 60 }
      ]
    },
    {
      title: "Databases & Tools",
      icon: Database,
      color: "primary",
      skills: [
        { name: "MySQL", level: 80 },
        { name: "PostgreSQL", level: 75 },
        { name: "MongoDB", level: 70 },
        { name: "Git", level: 85 },
        { name: "Docker", level: 65 },
        { name: "AWS", level: 60 }
      ]
    }
  ];

  const certifications = [
    "Google Data Analytics Certificate",
    "IBM Data Science Professional Certificate",
    "Machine Learning Coursera Specialization",
    "Python for Data Science (edX)",
    "Statistical Learning (Stanford Online)"
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Technical skills developed through coursework, projects, and continuous learning
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={category.title} className="p-6 bg-gradient-card border-border/50 hover:border-primary/30 transition-all duration-300">
              <div className="flex items-center space-x-3 mb-6">
                <div className={`w-12 h-12 bg-${category.color}/20 rounded-lg flex items-center justify-center`}>
                  <category.icon className={`w-6 h-6 text-${category.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-foreground">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-foreground">{skill.name}</span>
                      <span className="text-xs text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress 
                      value={skill.level} 
                      className="h-2"
                    />
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-8 text-foreground">Certifications & Achievements</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <Card key={index} className="p-4 bg-gradient-card border-border/50 hover:border-secondary/30 transition-colors">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <span className="text-sm text-foreground">{cert}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold mb-8 text-foreground">Technologies I Work With</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Python", "R", "SQL", "TensorFlow", "PyTorch", "Scikit-learn", "Pandas", "NumPy",
              "Jupyter", "Git", "Docker", "AWS", "Tableau", "Power BI", "MongoDB", "PostgreSQL",
              "Apache Spark", "Hadoop", "Kafka", "Linux", "REST APIs", "Flask", "Django"
            ].map((tech) => (
              <Badge 
                key={tech} 
                variant="outline" 
                className="text-sm py-2 px-4 bg-background/50 border-primary/30 hover:bg-primary/10 transition-colors"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};