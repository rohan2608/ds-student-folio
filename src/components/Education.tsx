import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, BookOpen, Calendar } from "lucide-react";

export const Education = () => {
  const education = [
    {
      institution: "University of California, Berkeley",
      degree: "Bachelor of Engineering in Computer Science Engineering",
      specialization: "Data Science",
      duration: "2022 - 2026 (Expected)",
      gpa: "3.8/4.0",
      status: "Current",
      description: "Specializing in Data Science with focus on Machine Learning, Statistical Analysis, and Big Data Technologies.",
      courses: [
        "Machine Learning", "Deep Learning", "Statistical Inference", "Data Mining",
        "Database Systems", "Algorithms & Data Structures", "Big Data Analytics",
        "Computer Vision", "Natural Language Processing"
      ],
      achievements: [
        "Dean's List (Fall 2023, Spring 2024)",
        "Data Science Club Vice President",
        "Outstanding Project Award - ML Course"
      ]
    },
    {
      institution: "Lincoln High School",
      degree: "High School Diploma",
      specialization: "STEM Track",
      duration: "2018 - 2022",
      gpa: "3.95/4.0",
      status: "Completed",
      description: "Graduated Summa Cum Laude with focus on Mathematics, Physics, and Computer Science.",
      courses: [
        "AP Computer Science A", "AP Statistics", "AP Calculus BC", "AP Physics C",
        "Advanced Mathematics", "Introduction to Programming"
      ],
      achievements: [
        "Valedictorian",
        "National Honor Society",
        "Math Olympiad State Qualifier",
        "Science Fair First Place"
      ]
    }
  ];

  const certifications = [
    {
      title: "Google Data Analytics Professional Certificate",
      issuer: "Google (via Coursera)",
      date: "September 2024",
      skills: ["Data Analysis", "SQL", "Tableau", "R Programming"]
    },
    {
      title: "IBM Data Science Professional Certificate",
      issuer: "IBM (via Coursera)",
      date: "August 2024",
      skills: ["Python", "Machine Learning", "Data Visualization", "SQL"]
    },
    {
      title: "Machine Learning Specialization",
      issuer: "Stanford University (via Coursera)",
      date: "July 2024",
      skills: ["Supervised Learning", "Unsupervised Learning", "Deep Learning"]
    },
    {
      title: "AWS Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "June 2024",
      skills: ["Cloud Computing", "AWS Services", "Data Storage"]
    }
  ];

  return (
    <section id="education" className="py-20 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Education & Learning
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Academic journey and continuous learning in data science
          </p>
        </div>

        {/* Education Timeline */}
        <div className="space-y-8 mb-16">
          {education.map((edu, index) => (
            <Card key={edu.institution} className="p-8 bg-gradient-card border-border/50 hover:border-primary/30 transition-all duration-300">
              <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <GraduationCap className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-xl font-bold text-foreground">{edu.institution}</h3>
                        <Badge 
                          variant={edu.status === 'Current' ? 'default' : 'secondary'}
                          className={edu.status === 'Current' ? 'bg-primary text-primary-foreground' : ''}
                        >
                          {edu.status}
                        </Badge>
                      </div>
                      <h4 className="text-lg text-muted-foreground mb-1">{edu.degree}</h4>
                      {edu.specialization && (
                        <p className="text-sm text-primary font-medium mb-2">Specialization: {edu.specialization}</p>
                      )}
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {edu.duration}
                        </div>
                        <div className="flex items-center">
                          <Award className="w-4 h-4 mr-1" />
                          GPA: {edu.gpa}
                        </div>
                      </div>
                      <p className="text-muted-foreground mb-6">{edu.description}</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h5 className="text-sm font-semibold text-foreground mb-3 flex items-center">
                      <BookOpen className="w-4 h-4 mr-2" />
                      Relevant Coursework
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {edu.courses.map((course) => (
                        <Badge key={course} variant="outline" className="text-xs border-primary/30">
                          {course}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  <h5 className="text-sm font-semibold text-foreground mb-3 flex items-center">
                    <Award className="w-4 h-4 mr-2" />
                    Achievements
                  </h5>
                  <ul className="space-y-2">
                    {edu.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-muted-foreground">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-2xl font-semibold mb-8 text-center text-foreground">
            Professional Certifications
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert) => (
              <Card key={cert.title} className="p-6 bg-gradient-card border-border/50 hover:border-secondary/30 transition-colors">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-secondary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="w-5 h-5 text-secondary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground mb-1">{cert.title}</h4>
                    <p className="text-sm text-muted-foreground mb-2">{cert.issuer}</p>
                    <p className="text-xs text-muted-foreground mb-3">{cert.date}</p>
                    <div className="flex flex-wrap gap-1">
                      {cert.skills.map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-xs bg-muted/50">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};