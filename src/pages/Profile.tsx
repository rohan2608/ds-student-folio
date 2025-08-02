import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Badge } from "@/components/ui/badge";
import { X, Plus, Save, User, Code, GraduationCap, Mail, Briefcase, Award, Lightbulb, Calendar } from "lucide-react";

// Schemas for form validation
const personalInfoSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  title: z.string().min(5, "Title must be at least 5 characters"),
  description: z.string().min(20, "Description must be at least 20 characters"),
  location: z.string().min(2, "Location is required"),
  age: z.string().min(1, "Age is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().optional(),
  github: z.string().url().optional().or(z.literal("")),
  linkedin: z.string().url().optional().or(z.literal("")),
});

const aboutSchema = z.object({
  bio: z.string().min(50, "Bio must be at least 50 characters"),
  gpa: z.string().min(1, "GPA is required"),
  projectsCompleted: z.string().min(1, "Number of projects is required"),
});

const projectSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),
  description: z.string().min(20, "Description must be at least 20 characters"),
  technologies: z.string().min(3, "Technologies are required"),
  githubUrl: z.string().url().optional().or(z.literal("")),
  liveUrl: z.string().url().optional().or(z.literal("")),
  status: z.enum(["completed", "in-progress", "planned"]),
});

const educationSchema = z.object({
  institution: z.string().min(3, "Institution name is required"),
  degree: z.string().min(3, "Degree is required"),
  field: z.string().min(3, "Field of study is required"),
  startYear: z.string().min(4, "Start year is required"),
  endYear: z.string().min(4, "End year is required"),
  gpa: z.string().optional(),
  description: z.string().optional(),
});

const certificationSchema = z.object({
  name: z.string().min(3, "Certification name is required"),
  issuer: z.string().min(3, "Issuer is required"),
  issueDate: z.string().min(4, "Issue date is required"),
  expiryDate: z.string().optional(),
  credentialId: z.string().optional(),
  url: z.string().url().optional().or(z.literal("")),
});

type PersonalInfoForm = z.infer<typeof personalInfoSchema>;
type AboutForm = z.infer<typeof aboutSchema>;
type ProjectForm = z.infer<typeof projectSchema>;
type EducationForm = z.infer<typeof educationSchema>;
type CertificationForm = z.infer<typeof certificationSchema>;

export default function Profile() {
  const { toast } = useToast();
  
  // Skills and Technologies state
  const [skills, setSkills] = useState<string[]>(["Python", "R", "SQL", "Machine Learning"]);
  const [newSkill, setNewSkill] = useState("");
  const [technologies, setTechnologies] = useState<string[]>(["TensorFlow", "PyTorch", "Scikit-learn", "Pandas"]);
  const [newTechnology, setNewTechnology] = useState("");
  
  // Interests and Achievements state
  const [interests, setInterests] = useState<string[]>(["Machine Learning", "Data Visualization", "Deep Learning"]);
  const [newInterest, setNewInterest] = useState("");
  const [achievements, setAchievements] = useState<string[]>(["Google Data Analytics Certificate", "IBM Data Science Professional Certificate"]);
  const [newAchievement, setNewAchievement] = useState("");
  
  // Projects state
  const [featuredProjects, setFeaturedProjects] = useState<ProjectForm[]>([
    {
      title: "Sales Prediction Model",
      description: "Machine learning model to predict sales using historical data",
      technologies: "Python, Scikit-learn, Pandas",
      githubUrl: "https://github.com/alexchen/sales-prediction",
      liveUrl: "",
      status: "completed"
    }
  ]);
  const [upcomingProjects, setUpcomingProjects] = useState<ProjectForm[]>([
    {
      title: "Real-time Analytics Dashboard",
      description: "Interactive dashboard for real-time data visualization",
      technologies: "React, D3.js, WebSocket",
      githubUrl: "",
      liveUrl: "",
      status: "planned"
    }
  ]);
  
  // Education state
  const [educationList, setEducationList] = useState<EducationForm[]>([
    {
      institution: "Stanford University",
      degree: "Bachelor of Science",
      field: "Computer Science Engineering - Data Science",
      startYear: "2022",
      endYear: "2026",
      gpa: "3.8",
      description: "Focus on Machine Learning, Statistics, and Database Systems"
    }
  ]);
  
  // Certifications state
  const [certificationsList, setCertificationsList] = useState<CertificationForm[]>([
    {
      name: "Google Data Analytics Professional Certificate",
      issuer: "Google",
      issueDate: "2023",
      expiryDate: "",
      credentialId: "ABC123",
      url: "https://coursera.org/verify/ABC123"
    }
  ]);

  // Form configurations
  const personalForm = useForm<PersonalInfoForm>({
    resolver: zodResolver(personalInfoSchema),
    defaultValues: {
      name: "Alex Chen",
      title: "Data Science Student & Machine Learning Enthusiast",
      description: "Third-year Computer Science Engineering student specializing in Data Science. Passionate about turning data into insights and building intelligent systems that solve real-world problems.",
      location: "San Francisco, CA",
      age: "21",
      email: "alex.chen@email.com",
      phone: "+1 (555) 123-4567",
      github: "https://github.com/alexchen",
      linkedin: "https://linkedin.com/in/alexchen",
    },
  });

  const aboutForm = useForm<AboutForm>({
    resolver: zodResolver(aboutSchema),
    defaultValues: {
      bio: "I'm a third-year Computer Science Engineering student with a specialization in Data Science. My journey began with a curiosity about how data shapes our world, and it has evolved into a passion for machine learning, statistical analysis, and building predictive models.",
      gpa: "3.8",
      projectsCompleted: "15",
    },
  });

  const projectForm = useForm<ProjectForm>({
    resolver: zodResolver(projectSchema),
    defaultValues: {
      title: "",
      description: "",
      technologies: "",
      githubUrl: "",
      liveUrl: "",
      status: "planned",
    },
  });

  const educationForm = useForm<EducationForm>({
    resolver: zodResolver(educationSchema),
    defaultValues: {
      institution: "",
      degree: "",
      field: "",
      startYear: "",
      endYear: "",
      gpa: "",
      description: "",
    },
  });

  const certificationForm = useForm<CertificationForm>({
    resolver: zodResolver(certificationSchema),
    defaultValues: {
      name: "",
      issuer: "",
      issueDate: "",
      expiryDate: "",
      credentialId: "",
      url: "",
    },
  });

  // Form submission handlers
  const handlePersonalInfoSubmit = (data: PersonalInfoForm) => {
    console.log("Personal Info Updated:", data);
    toast({
      title: "Personal Information Updated",
      description: "Your personal information has been successfully updated.",
    });
  };

  const handleAboutSubmit = (data: AboutForm) => {
    console.log("About Updated:", data);
    toast({
      title: "About Section Updated",
      description: "Your about section has been successfully updated.",
    });
  };

  const handleProjectSubmit = (data: ProjectForm) => {
    console.log("Project Added:", data);
    projectForm.reset();
    toast({
      title: "Project Added",
      description: "Your project has been successfully added.",
    });
  };

  const handleEducationSubmit = (data: EducationForm) => {
    setEducationList([...educationList, data]);
    educationForm.reset();
    toast({
      title: "Education Added",
      description: "Your education entry has been successfully added.",
    });
  };

  const handleCertificationSubmit = (data: CertificationForm) => {
    setCertificationsList([...certificationsList, data]);
    certificationForm.reset();
    toast({
      title: "Certification Added",
      description: "Your certification has been successfully added.",
    });
  };

  // Helper functions for managing lists
  const addSkill = () => {
    if (newSkill.trim() && !skills.includes(newSkill.trim())) {
      setSkills([...skills, newSkill.trim()]);
      setNewSkill("");
    }
  };

  const removeSkill = (skillToRemove: string) => {
    setSkills(skills.filter(skill => skill !== skillToRemove));
  };

  const addTechnology = () => {
    if (newTechnology.trim() && !technologies.includes(newTechnology.trim())) {
      setTechnologies([...technologies, newTechnology.trim()]);
      setNewTechnology("");
    }
  };

  const removeTechnology = (techToRemove: string) => {
    setTechnologies(technologies.filter(tech => tech !== techToRemove));
  };

  const addInterest = () => {
    if (newInterest.trim() && !interests.includes(newInterest.trim())) {
      setInterests([...interests, newInterest.trim()]);
      setNewInterest("");
    }
  };

  const removeInterest = (interestToRemove: string) => {
    setInterests(interests.filter(interest => interest !== interestToRemove));
  };

  const addAchievement = () => {
    if (newAchievement.trim() && !achievements.includes(newAchievement.trim())) {
      setAchievements([...achievements, newAchievement.trim()]);
      setNewAchievement("");
    }
  };

  const removeAchievement = (achievementToRemove: string) => {
    setAchievements(achievements.filter(achievement => achievement !== achievementToRemove));
  };

  const removeProject = (index: number, type: 'featured' | 'upcoming') => {
    if (type === 'featured') {
      setFeaturedProjects(featuredProjects.filter((_, i) => i !== index));
    } else {
      setUpcomingProjects(upcomingProjects.filter((_, i) => i !== index));
    }
  };

  const removeEducation = (index: number) => {
    setEducationList(educationList.filter((_, i) => i !== index));
  };

  const removeCertification = (index: number) => {
    setCertificationsList(certificationsList.filter((_, i) => i !== index));
  };

  const saveSkillsAndTechnologies = () => {
    console.log("Skills:", skills);
    console.log("Technologies:", technologies);
    console.log("Interests:", interests);
    console.log("Achievements:", achievements);
    toast({
      title: "Skills & Technologies Updated",
      description: "Your skills and technologies have been successfully updated.",
    });
  };

  return (
    <div className="min-h-screen bg-background py-8 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Edit Profile
          </h1>
          <p className="text-xl text-muted-foreground">
            Manage your portfolio information
          </p>
        </div>

        <Tabs defaultValue="personal" className="w-full">
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="personal" className="flex items-center gap-2">
              <User className="w-4 h-4" />
              Personal
            </TabsTrigger>
            <TabsTrigger value="about" className="flex items-center gap-2">
              <Briefcase className="w-4 h-4" />
              About
            </TabsTrigger>
            <TabsTrigger value="skills" className="flex items-center gap-2">
              <Code className="w-4 h-4" />
              Skills
            </TabsTrigger>
            <TabsTrigger value="projects" className="flex items-center gap-2">
              <Lightbulb className="w-4 h-4" />
              Projects
            </TabsTrigger>
            <TabsTrigger value="education" className="flex items-center gap-2">
              <GraduationCap className="w-4 h-4" />
              Education
            </TabsTrigger>
            <TabsTrigger value="certifications" className="flex items-center gap-2">
              <Award className="w-4 h-4" />
              Certificates
            </TabsTrigger>
          </TabsList>

          <TabsContent value="personal" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="w-5 h-5" />
                  Personal Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Form {...personalForm}>
                  <form onSubmit={personalForm.handleSubmit(handlePersonalInfoSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={personalForm.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Full Name</FormLabel>
                            <FormControl>
                              <Input {...field} placeholder="Your full name" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={personalForm.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input {...field} type="email" placeholder="your.email@example.com" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={personalForm.control}
                        name="location"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Location</FormLabel>
                            <FormControl>
                              <Input {...field} placeholder="City, Country" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={personalForm.control}
                        name="age"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Age</FormLabel>
                            <FormControl>
                              <Input {...field} placeholder="25" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={personalForm.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone (Optional)</FormLabel>
                            <FormControl>
                              <Input {...field} placeholder="+1 (555) 123-4567" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={personalForm.control}
                      name="title"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Professional Title</FormLabel>
                          <FormControl>
                            <Input {...field} placeholder="Data Science Student & ML Enthusiast" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={personalForm.control}
                      name="description"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Hero Description</FormLabel>
                          <FormControl>
                            <Textarea 
                              {...field} 
                              placeholder="Brief description for the hero section"
                              className="min-h-[100px]"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={personalForm.control}
                        name="github"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>GitHub URL (Optional)</FormLabel>
                            <FormControl>
                              <Input {...field} placeholder="https://github.com/username" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={personalForm.control}
                        name="linkedin"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>LinkedIn URL (Optional)</FormLabel>
                            <FormControl>
                              <Input {...field} placeholder="https://linkedin.com/in/username" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <Button type="submit" className="w-full">
                      <Save className="w-4 h-4 mr-2" />
                      Save Personal Information
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="about" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Briefcase className="w-5 h-5" />
                  About Section
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Form {...aboutForm}>
                  <form onSubmit={aboutForm.handleSubmit(handleAboutSubmit)} className="space-y-6">
                    <FormField
                      control={aboutForm.control}
                      name="bio"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Biography</FormLabel>
                          <FormControl>
                            <Textarea 
                              {...field} 
                              placeholder="Tell your story..."
                              className="min-h-[150px]"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={aboutForm.control}
                        name="gpa"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Current GPA</FormLabel>
                            <FormControl>
                              <Input {...field} placeholder="3.8" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={aboutForm.control}
                        name="projectsCompleted"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Projects Completed</FormLabel>
                            <FormControl>
                              <Input {...field} placeholder="15" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <Button type="submit" className="w-full">
                      <Save className="w-4 h-4 mr-2" />
                      Save About Information
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="skills" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="w-5 h-5" />
                  Skills & Technologies
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label className="text-sm font-medium mb-3 block">Technical Skills</Label>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {skills.map((skill) => (
                      <Badge 
                        key={skill} 
                        variant="secondary" 
                        className="flex items-center gap-1 px-3 py-1"
                      >
                        {skill}
                        <X 
                          className="w-3 h-3 cursor-pointer hover:text-destructive" 
                          onClick={() => removeSkill(skill)}
                        />
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Input
                      value={newSkill}
                      onChange={(e) => setNewSkill(e.target.value)}
                      placeholder="Add a new skill"
                      onKeyPress={(e) => e.key === 'Enter' && addSkill()}
                    />
                    <Button onClick={addSkill} variant="outline">
                      <Plus className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <div>
                  <Label className="text-sm font-medium mb-3 block">Technologies & Frameworks</Label>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {technologies.map((tech) => (
                      <Badge 
                        key={tech} 
                        variant="outline" 
                        className="flex items-center gap-1 px-3 py-1"
                      >
                        {tech}
                        <X 
                          className="w-3 h-3 cursor-pointer hover:text-destructive" 
                          onClick={() => removeTechnology(tech)}
                        />
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Input
                      value={newTechnology}
                      onChange={(e) => setNewTechnology(e.target.value)}
                      placeholder="Add a new technology"
                      onKeyPress={(e) => e.key === 'Enter' && addTechnology()}
                    />
                    <Button onClick={addTechnology} variant="outline">
                      <Plus className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <div>
                  <Label className="text-sm font-medium mb-3 block">Interests & Hobbies</Label>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {interests.map((interest) => (
                      <Badge 
                        key={interest} 
                        variant="outline" 
                        className="flex items-center gap-1 px-3 py-1"
                      >
                        {interest}
                        <X 
                          className="w-3 h-3 cursor-pointer hover:text-destructive" 
                          onClick={() => removeInterest(interest)}
                        />
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Input
                      value={newInterest}
                      onChange={(e) => setNewInterest(e.target.value)}
                      placeholder="Add a new interest"
                      onKeyPress={(e) => e.key === 'Enter' && addInterest()}
                    />
                    <Button onClick={addInterest} variant="outline">
                      <Plus className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <div>
                  <Label className="text-sm font-medium mb-3 block">Achievements & Recognition</Label>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {achievements.map((achievement) => (
                      <Badge 
                        key={achievement} 
                        variant="secondary" 
                        className="flex items-center gap-1 px-3 py-1"
                      >
                        {achievement}
                        <X 
                          className="w-3 h-3 cursor-pointer hover:text-destructive" 
                          onClick={() => removeAchievement(achievement)}
                        />
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Input
                      value={newAchievement}
                      onChange={(e) => setNewAchievement(e.target.value)}
                      placeholder="Add a new achievement"
                      onKeyPress={(e) => e.key === 'Enter' && addAchievement()}
                    />
                    <Button onClick={addAchievement} variant="outline">
                      <Plus className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <Button onClick={saveSkillsAndTechnologies} className="w-full">
                  <Save className="w-4 h-4 mr-2" />
                  Save Skills & Technologies
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="projects" className="space-y-6">
            {/* Featured Projects */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lightbulb className="w-5 h-5" />
                  Featured Projects
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {featuredProjects.map((project, index) => (
                  <div key={index} className="p-4 border rounded-lg bg-muted/30">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-medium">{project.title}</h4>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        onClick={() => removeProject(index, 'featured')}
                      >
                        <X className="w-4 h-4" />
                      </Button>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">{project.description}</p>
                    <p className="text-xs text-muted-foreground">Technologies: {project.technologies}</p>
                  </div>
                ))}
                
                <Form {...projectForm}>
                  <form onSubmit={projectForm.handleSubmit((data) => {
                    setFeaturedProjects([...featuredProjects, { ...data, status: "completed" }]);
                    handleProjectSubmit(data);
                  })} className="space-y-4 border-t pt-4">
                    <h4 className="font-medium">Add New Featured Project</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={projectForm.control}
                        name="title"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Project Title</FormLabel>
                            <FormControl>
                              <Input {...field} placeholder="My Awesome Project" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={projectForm.control}
                        name="technologies"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Technologies Used</FormLabel>
                            <FormControl>
                              <Input {...field} placeholder="Python, React, MongoDB" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <FormField
                      control={projectForm.control}
                      name="description"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Description</FormLabel>
                          <FormControl>
                            <Textarea {...field} placeholder="Describe your project..." />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={projectForm.control}
                        name="githubUrl"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>GitHub URL (Optional)</FormLabel>
                            <FormControl>
                              <Input {...field} placeholder="https://github.com/..." />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={projectForm.control}
                        name="liveUrl"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Live Demo URL (Optional)</FormLabel>
                            <FormControl>
                              <Input {...field} placeholder="https://myproject.com" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <Button type="submit">
                      <Plus className="w-4 h-4 mr-2" />
                      Add Featured Project
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>

            {/* Upcoming Projects */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Upcoming Projects
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {upcomingProjects.map((project, index) => (
                  <div key={index} className="p-4 border rounded-lg bg-muted/30">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-medium">{project.title}</h4>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        onClick={() => removeProject(index, 'upcoming')}
                      >
                        <X className="w-4 h-4" />
                      </Button>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">{project.description}</p>
                    <p className="text-xs text-muted-foreground">Planned Technologies: {project.technologies}</p>
                  </div>
                ))}
                
                <div className="border-t pt-4">
                  <h4 className="font-medium mb-4">Add New Upcoming Project</h4>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Input 
                        placeholder="Project Title"
                        onKeyPress={(e) => {
                          if (e.key === 'Enter') {
                            const title = (e.target as HTMLInputElement).value;
                            if (title.trim()) {
                              setUpcomingProjects([...upcomingProjects, {
                                title: title.trim(),
                                description: "New upcoming project",
                                technologies: "To be determined",
                                githubUrl: "",
                                liveUrl: "",
                                status: "planned"
                              }]);
                              (e.target as HTMLInputElement).value = "";
                            }
                          }
                        }}
                      />
                      <Input placeholder="Technologies (optional)" />
                    </div>
                    <Textarea placeholder="Project description..." />
                    <Button onClick={() => {
                      setUpcomingProjects([...upcomingProjects, {
                        title: "New Project",
                        description: "Description pending",
                        technologies: "TBD",
                        githubUrl: "",
                        liveUrl: "",
                        status: "planned"
                      }]);
                    }}>
                      <Plus className="w-4 h-4 mr-2" />
                      Add Upcoming Project
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="education" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="w-5 h-5" />
                  Education & Learning
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {educationList.map((education, index) => (
                  <div key={index} className="p-4 border rounded-lg bg-muted/30">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-medium">{education.degree} in {education.field}</h4>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        onClick={() => removeEducation(index)}
                      >
                        <X className="w-4 h-4" />
                      </Button>
                    </div>
                    <p className="text-sm text-muted-foreground mb-1">{education.institution}</p>
                    <p className="text-xs text-muted-foreground">
                      {education.startYear} - {education.endYear}
                      {education.gpa && ` • GPA: ${education.gpa}`}
                    </p>
                    {education.description && (
                      <p className="text-sm text-muted-foreground mt-2">{education.description}</p>
                    )}
                  </div>
                ))}
                
                <Form {...educationForm}>
                  <form onSubmit={educationForm.handleSubmit(handleEducationSubmit)} className="space-y-4 border-t pt-4">
                    <h4 className="font-medium">Add New Education Entry</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={educationForm.control}
                        name="institution"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Institution</FormLabel>
                            <FormControl>
                              <Input {...field} placeholder="University Name" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={educationForm.control}
                        name="degree"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Degree</FormLabel>
                            <FormControl>
                              <Input {...field} placeholder="Bachelor of Science" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <FormField
                      control={educationForm.control}
                      name="field"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Field of Study</FormLabel>
                          <FormControl>
                            <Input {...field} placeholder="Computer Science Engineering" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <FormField
                        control={educationForm.control}
                        name="startYear"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Start Year</FormLabel>
                            <FormControl>
                              <Input {...field} placeholder="2022" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={educationForm.control}
                        name="endYear"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>End Year</FormLabel>
                            <FormControl>
                              <Input {...field} placeholder="2026" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={educationForm.control}
                        name="gpa"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>GPA (Optional)</FormLabel>
                            <FormControl>
                              <Input {...field} placeholder="3.8" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <FormField
                      control={educationForm.control}
                      name="description"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Description (Optional)</FormLabel>
                          <FormControl>
                            <Textarea {...field} placeholder="Relevant coursework, achievements..." />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <Button type="submit">
                      <Plus className="w-4 h-4 mr-2" />
                      Add Education Entry
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="certifications" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="w-5 h-5" />
                  Professional Certifications
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {certificationsList.map((cert, index) => (
                  <div key={index} className="p-4 border rounded-lg bg-muted/30">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-medium">{cert.name}</h4>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        onClick={() => removeCertification(index)}
                      >
                        <X className="w-4 h-4" />
                      </Button>
                    </div>
                    <p className="text-sm text-muted-foreground mb-1">Issued by: {cert.issuer}</p>
                    <p className="text-xs text-muted-foreground">
                      Issued: {cert.issueDate}
                      {cert.expiryDate && ` • Expires: ${cert.expiryDate}`}
                    </p>
                    {cert.credentialId && (
                      <p className="text-xs text-muted-foreground">Credential ID: {cert.credentialId}</p>
                    )}
                    {cert.url && (
                      <a href={cert.url} target="_blank" rel="noopener noreferrer" className="text-xs text-primary hover:underline">
                        View Certificate
                      </a>
                    )}
                  </div>
                ))}
                
                <Form {...certificationForm}>
                  <form onSubmit={certificationForm.handleSubmit(handleCertificationSubmit)} className="space-y-4 border-t pt-4">
                    <h4 className="font-medium">Add New Certification</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={certificationForm.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Certification Name</FormLabel>
                            <FormControl>
                              <Input {...field} placeholder="Google Data Analytics Certificate" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={certificationForm.control}
                        name="issuer"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Issuing Organization</FormLabel>
                            <FormControl>
                              <Input {...field} placeholder="Google, IBM, Coursera..." />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={certificationForm.control}
                        name="issueDate"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Issue Date</FormLabel>
                            <FormControl>
                              <Input {...field} placeholder="2023" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={certificationForm.control}
                        name="expiryDate"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Expiry Date (Optional)</FormLabel>
                            <FormControl>
                              <Input {...field} placeholder="2026" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={certificationForm.control}
                        name="credentialId"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Credential ID (Optional)</FormLabel>
                            <FormControl>
                              <Input {...field} placeholder="ABC123XYZ" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={certificationForm.control}
                        name="url"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Certificate URL (Optional)</FormLabel>
                            <FormControl>
                              <Input {...field} placeholder="https://coursera.org/verify/..." />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <Button type="submit">
                      <Plus className="w-4 h-4 mr-2" />
                      Add Certification
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}