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
import { toast } from "@/hooks/use-toast";
import { Badge } from "@/components/ui/badge";
import { X, Plus, Save, User, Code, GraduationCap, Mail, Briefcase } from "lucide-react";

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

type PersonalInfoForm = z.infer<typeof personalInfoSchema>;
type AboutForm = z.infer<typeof aboutSchema>;

export default function Profile() {
  const [skills, setSkills] = useState<string[]>(["Python", "R", "SQL", "Machine Learning"]);
  const [newSkill, setNewSkill] = useState("");
  const [interests, setInterests] = useState<string[]>(["Machine Learning", "Data Visualization", "Deep Learning"]);
  const [newInterest, setNewInterest] = useState("");

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

  const addSkill = () => {
    if (newSkill.trim() && !skills.includes(newSkill.trim())) {
      setSkills([...skills, newSkill.trim()]);
      setNewSkill("");
    }
  };

  const removeSkill = (skillToRemove: string) => {
    setSkills(skills.filter(skill => skill !== skillToRemove));
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

  const saveSkillsAndInterests = () => {
    console.log("Skills:", skills);
    console.log("Interests:", interests);
    toast({
      title: "Skills & Interests Updated",
      description: "Your skills and interests have been successfully updated.",
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
          <TabsList className="grid w-full grid-cols-4">
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
            <TabsTrigger value="education" className="flex items-center gap-2">
              <GraduationCap className="w-4 h-4" />
              Education
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

                <Button onClick={saveSkillsAndInterests} className="w-full">
                  <Save className="w-4 h-4 mr-2" />
                  Save Skills & Interests
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="education" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="w-5 h-5" />
                  Education & Certifications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8 text-muted-foreground">
                  <GraduationCap className="w-12 h-12 mx-auto mb-4 opacity-50" />
                  <p>Education management coming soon...</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}