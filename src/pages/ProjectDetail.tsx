import { useParams, useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, Github, ExternalLink, Globe } from "lucide-react";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // This would typically come from a database or state management
  const projects = [
    {
      id: "1",
      title: "Predictive Healthcare Analytics",
      description: "Machine learning model to predict patient readmission rates using clinical data. Achieved 87% accuracy using ensemble methods and feature engineering techniques.",
      fullDescription: "This comprehensive machine learning project focuses on predicting patient readmission rates using clinical data from multiple healthcare institutions. The project involved extensive data preprocessing, feature engineering, and model selection to achieve optimal performance.\n\nKey achievements include:\n• Developed and deployed ensemble models with 87% accuracy\n• Processed over 100,000 patient records\n• Implemented advanced feature engineering techniques\n• Created interactive dashboards for healthcare professionals\n• Reduced false positive rates by 23% compared to existing models\n\nThe solution helps healthcare providers identify high-risk patients early, enabling proactive interventions and ultimately improving patient outcomes while reducing healthcare costs.",
      image: project1,
      technologies: [
        { label: "Python", link: "https://python.org" },
        { label: "Scikit-learn", link: "https://scikit-learn.org" },
        { label: "Pandas", link: "https://pandas.pydata.org" },
        { label: "XGBoost", link: "https://xgboost.readthedocs.io" },
        { label: "Flask", link: "https://flask.palletsprojects.com" }
      ],
      github: "https://github.com/example/healthcare-analytics",
      demo: "https://healthcare-demo.example.com",
      website: "https://healthcare-project.example.com",
      date: "Dec 2024",
      category: "Machine Learning",
      status: "Completed",
      duration: "6 months",
      teamSize: "4 members"
    },
    {
      id: "2",
      title: "Neural Network Visualization Tool",
      description: "Interactive web application for visualizing neural network architectures and training processes. Built with React and D3.js for dynamic data visualization.",
      fullDescription: "An innovative web application designed to demystify neural networks through interactive visualizations. This tool allows users to explore different network architectures, observe training processes in real-time, and understand how various parameters affect model performance.\n\nFeatures include:\n• Real-time visualization of neural network training\n• Interactive architecture builder\n• Performance metrics dashboard\n• Support for multiple network types (CNN, RNN, Transformer)\n• Educational modules and tutorials\n• Export capabilities for research and presentations\n\nThe tool has been adopted by several educational institutions and has helped over 10,000 students better understand deep learning concepts through visual learning.",
      image: project2,
      technologies: [
        { label: "React", link: "https://react.dev" },
        { label: "D3.js", link: "https://d3js.org" },
        { label: "TensorFlow.js", link: "https://tensorflow.org/js" },
        { label: "Python", link: "https://python.org" },
        { label: "FastAPI", link: "https://fastapi.tiangolo.com" }
      ],
      github: "https://github.com/example/nn-visualization",
      demo: "https://nn-viz-demo.example.com",
      website: "https://nn-visualization.example.com",
      date: "Nov 2024",
      category: "Deep Learning",
      status: "Completed",
      duration: "4 months",
      teamSize: "3 members"
    },
    {
      id: "3",
      title: "Real-time Sales Dashboard",
      description: "End-to-end data pipeline and dashboard for real-time sales analytics. Processes streaming data and provides actionable business insights.",
      fullDescription: "A comprehensive real-time analytics solution that transforms raw sales data into actionable business insights. The system processes millions of transactions daily, providing stakeholders with up-to-the-minute analytics and predictive insights.\n\nSystem capabilities:\n• Real-time data ingestion from multiple sources\n• Advanced analytics and predictive modeling\n• Interactive dashboards with drill-down capabilities\n• Automated alert systems for anomaly detection\n• Mobile-responsive design for on-the-go access\n• Integration with existing CRM and ERP systems\n\nThe dashboard has improved decision-making speed by 40% and helped identify new revenue opportunities worth $2M annually. The system handles peak loads of 10,000+ transactions per minute with sub-second latency.",
      image: project3,
      technologies: [
        { label: "Python", link: "https://python.org" },
        { label: "Apache Kafka", link: "https://kafka.apache.org" },
        { label: "PostgreSQL", link: "https://postgresql.org" },
        { label: "Tableau", link: "https://tableau.com" },
        { label: "Docker", link: "https://docker.com" }
      ],
      github: "https://github.com/example/sales-dashboard",
      demo: "https://sales-demo.example.com",
      website: "https://sales-dashboard.example.com",
      date: "Oct 2024",
      category: "Data Engineering",
      status: "Completed",
      duration: "8 months",
      teamSize: "6 members"
    }
  ];

  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen bg-background py-8 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
          <Button onClick={() => navigate("/")} variant="outline">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-8 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center mb-8">
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="mr-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Projects
          </Button>
        </div>

        {/* Project Hero */}
        <Card className="overflow-hidden mb-8">
          <div className="grid lg:grid-cols-2 gap-0">
            <div className="relative overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-80 lg:h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background/20 to-transparent"></div>
            </div>
            
            <div className="p-8 flex flex-col justify-center">
              <div className="flex items-center space-x-3 mb-4">
                <Badge variant="secondary" className="bg-primary/10 text-primary">
                  {project.category}
                </Badge>
                <Badge variant="outline" className="border-green-500/50 text-green-600">
                  {project.status}
                </Badge>
              </div>
              
              <h1 className="text-3xl font-bold mb-4 text-foreground">
                {project.title}
              </h1>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                <div className="flex items-center text-muted-foreground">
                  <Calendar className="w-4 h-4 mr-2" />
                  {project.date}
                </div>
                <div className="text-muted-foreground">
                  <span className="font-medium">Duration:</span> {project.duration}
                </div>
                <div className="text-muted-foreground">
                  <span className="font-medium">Team Size:</span> {project.teamSize}
                </div>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {project.github && (
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      View Code
                    </a>
                  </Button>
                )}
                {project.demo && (
                  <Button size="sm" asChild>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                )}
                {project.website && (
                  <Button variant="secondary" size="sm" asChild>
                    <a href={project.website} target="_blank" rel="noopener noreferrer">
                      <Globe className="w-4 h-4 mr-2" />
                      Website
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </Card>

        {/* Project Details */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-6 text-foreground">Project Overview</h2>
              <div className="prose prose-gray dark:prose-invert max-w-none">
                {project.fullDescription.split('\n').map((paragraph, index) => (
                  <p key={index} className="mb-4 text-muted-foreground leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Technologies */}
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-foreground">Technologies Used</h3>
              <div className="space-y-3">
                {project.technologies.map((tech, index) => (
                  <a
                    key={index}
                    href={tech.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors group"
                  >
                    <span className="font-medium text-foreground group-hover:text-primary">
                      {tech.label}
                    </span>
                    <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary" />
                  </a>
                ))}
              </div>
            </Card>

            {/* Project Stats */}
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-foreground">Project Details</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Category:</span>
                  <span className="font-medium text-foreground">{project.category}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Status:</span>
                  <span className="font-medium text-green-600">{project.status}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Duration:</span>
                  <span className="font-medium text-foreground">{project.duration}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Team Size:</span>
                  <span className="font-medium text-foreground">{project.teamSize}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Completed:</span>
                  <span className="font-medium text-foreground">{project.date}</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;