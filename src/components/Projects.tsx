import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Calendar } from "lucide-react";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

export const Projects = () => {
  const projects = [
    {
      title: "Predictive Healthcare Analytics",
      description: "Machine learning model to predict patient readmission rates using clinical data. Achieved 87% accuracy using ensemble methods and feature engineering techniques.",
      image: project1,
      technologies: ["Python", "Scikit-learn", "Pandas", "XGBoost", "Flask"],
      github: "#",
      demo: "#",
      date: "Dec 2024",
      category: "Machine Learning"
    },
    {
      title: "Neural Network Visualization Tool",
      description: "Interactive web application for visualizing neural network architectures and training processes. Built with React and D3.js for dynamic data visualization.",
      image: project2,
      technologies: ["React", "D3.js", "TensorFlow.js", "Python", "FastAPI"],
      github: "#",
      demo: "#",
      date: "Nov 2024",
      category: "Deep Learning"
    },
    {
      title: "Real-time Sales Dashboard",
      description: "End-to-end data pipeline and dashboard for real-time sales analytics. Processes streaming data and provides actionable business insights.",
      image: project3,
      technologies: ["Python", "Apache Kafka", "PostgreSQL", "Tableau", "Docker"],
      github: "#",
      demo: "#",
      date: "Oct 2024",
      category: "Data Engineering"
    }
  ];

  const upcomingProjects = [
    {
      title: "NLP Sentiment Analysis API",
      description: "RESTful API for multi-language sentiment analysis using transformer models",
      technologies: ["Python", "Transformers", "FastAPI", "Docker"],
      status: "In Progress"
    },
    {
      title: "Computer Vision Art Classifier",
      description: "CNN model to classify art styles and periods from paintings",
      technologies: ["PyTorch", "OpenCV", "Streamlit", "AWS"],
      status: "Planning"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my data science and machine learning projects
          </p>
        </div>

        <div className="grid lg:grid-cols-1 gap-12 mb-16">
          {projects.map((project, index) => (
            <Card key={project.title} className="overflow-hidden bg-gradient-card border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-2xl">
              <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={`relative overflow-hidden ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-80 lg:h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-background/20 to-transparent"></div>
                </div>
                
                <div className="p-8 flex flex-col justify-center">
                  <div className="flex items-center space-x-3 mb-4">
                    <Badge variant="secondary" className="bg-primary/10 text-primary">
                      {project.category}
                    </Badge>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4 mr-1" />
                      {project.date}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 text-foreground">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs border-primary/30">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex space-x-4">
                    <Button size="sm" className="bg-gradient-primary hover:opacity-90">
                      <BookOpen className="w-4 h-4 mr-2" />
                      Read More
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-semibold mb-8 text-center text-foreground">
            Upcoming Projects
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {upcomingProjects.map((project) => (
              <Card key={project.title} className="p-6 bg-gradient-card border-border/50 border-dashed hover:border-secondary/50 transition-colors">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-semibold text-foreground">{project.title}</h4>
                  <Badge variant="outline" className={`text-xs ${
                    project.status === 'In Progress' ? 'border-primary text-primary' : 'border-muted-foreground text-muted-foreground'
                  }`}>
                    {project.status}
                  </Badge>
                </div>
                <p className="text-muted-foreground mb-4 text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs bg-muted/50">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};