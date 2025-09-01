import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Plus, X } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface Technology {
  label: string;
  link: string;
}

interface ProjectData {
  title: string;
  description: string;
  category: string;
  date: string;
  status: string;
  technologies: Technology[];
  image: string;
  readMoreLink: string;
}

const AddProject = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [activeTab, setActiveTab] = useState("featured");
  const [projectData, setProjectData] = useState<ProjectData>({
    title: "",
    description: "",
    category: "",
    date: "",
    status: "Completed",
    technologies: [],
    image: "",
    readMoreLink: ""
  });
  
  const [techLabel, setTechLabel] = useState("");
  const [techLink, setTechLink] = useState("");

  const addTechnology = () => {
    if (techLabel.trim() && techLink.trim()) {
      setProjectData(prev => ({
        ...prev,
        technologies: [...prev.technologies, { label: techLabel.trim(), link: techLink.trim() }]
      }));
      setTechLabel("");
      setTechLink("");
    }
  };

  const removeTechnology = (index: number) => {
    setProjectData(prev => ({
      ...prev,
      technologies: prev.technologies.filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!projectData.title || !projectData.description || !projectData.category) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    // Here you would typically save to a database or state management
    toast({
      title: "Success",
      description: "Project added successfully!",
    });
    
    // Reset form
    setProjectData({
      title: "",
      description: "",
      category: "",
      date: "",
      status: "Completed",
      technologies: [],
      image: "",
      readMoreLink: ""
    });
  };

  return (
    <div className="min-h-screen bg-background py-8 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center mb-8">
          <Button
            variant="ghost"
            onClick={() => navigate(-1)}
            className="mr-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
          <h1 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Add New Project
          </h1>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="featured">Featured Project</TabsTrigger>
            <TabsTrigger value="upcoming">Upcoming Project</TabsTrigger>
          </TabsList>

          <TabsContent value="featured" className="space-y-0">
            <Card className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="title">Project Title *</Label>
                    <Input
                      id="title"
                      value={projectData.title}
                      onChange={(e) => setProjectData(prev => ({ ...prev, title: e.target.value }))}
                      placeholder="Enter project title"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="category">Category *</Label>
                    <Select value={projectData.category} onValueChange={(value) => setProjectData(prev => ({ ...prev, category: value }))}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Machine Learning">Machine Learning</SelectItem>
                        <SelectItem value="Deep Learning">Deep Learning</SelectItem>
                        <SelectItem value="Data Engineering">Data Engineering</SelectItem>
                        <SelectItem value="Web Development">Web Development</SelectItem>
                        <SelectItem value="Data Science">Data Science</SelectItem>
                        <SelectItem value="Other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="date">Completion Date</Label>
                    <Input
                      id="date"
                      value={projectData.date}
                      onChange={(e) => setProjectData(prev => ({ ...prev, date: e.target.value }))}
                      placeholder="e.g., Dec 2024"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="image">Image URL</Label>
                    <Input
                      id="image"
                      value={projectData.image}
                      onChange={(e) => setProjectData(prev => ({ ...prev, image: e.target.value }))}
                      placeholder="Enter image URL"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Description *</Label>
                  <Textarea
                    id="description"
                    value={projectData.description}
                    onChange={(e) => setProjectData(prev => ({ ...prev, description: e.target.value }))}
                    placeholder="Describe your project..."
                    rows={4}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="readMoreLink">Read More Link</Label>
                  <Input
                    id="readMoreLink"
                    value={projectData.readMoreLink}
                    onChange={(e) => setProjectData(prev => ({ ...prev, readMoreLink: e.target.value }))}
                    placeholder="Enter link for read more button"
                  />
                </div>

                <div className="space-y-4">
                  <Label>Technologies Used</Label>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="techLabel">Technology Label</Label>
                      <Input
                        id="techLabel"
                        value={techLabel}
                        onChange={(e) => setTechLabel(e.target.value)}
                        placeholder="e.g., React"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="techLink">Technology Link</Label>
                      <Input
                        id="techLink"
                        value={techLink}
                        onChange={(e) => setTechLink(e.target.value)}
                        placeholder="e.g., https://react.dev"
                      />
                    </div>
                    
                    <div className="flex items-end">
                      <Button
                        type="button"
                        onClick={addTechnology}
                        className="w-full"
                        disabled={!techLabel.trim() || !techLink.trim()}
                      >
                        <Plus className="w-4 h-4 mr-2" />
                        Add
                      </Button>
                    </div>
                  </div>

                  {projectData.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-2 p-4 bg-muted/30 rounded-lg">
                      {projectData.technologies.map((tech, index) => (
                        <Badge
                          key={index}
                          variant="secondary"
                          className="flex items-center gap-1 pr-1"
                        >
                          {tech.label}
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            className="h-4 w-4 p-0 hover:bg-destructive hover:text-destructive-foreground"
                            onClick={() => removeTechnology(index)}
                          >
                            <X className="w-3 h-3" />
                          </Button>
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>

                <Button type="submit" className="w-full">
                  Add Featured Project
                </Button>
              </form>
            </Card>
          </TabsContent>

          <TabsContent value="upcoming" className="space-y-0">
            <Card className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="upcomingTitle">Project Title *</Label>
                    <Input
                      id="upcomingTitle"
                      value={projectData.title}
                      onChange={(e) => setProjectData(prev => ({ ...prev, title: e.target.value }))}
                      placeholder="Enter project title"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="status">Status</Label>
                    <Select value={projectData.status} onValueChange={(value) => setProjectData(prev => ({ ...prev, status: value }))}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Planning">Planning</SelectItem>
                        <SelectItem value="In Progress">In Progress</SelectItem>
                        <SelectItem value="On Hold">On Hold</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="upcomingDescription">Description *</Label>
                  <Textarea
                    id="upcomingDescription"
                    value={projectData.description}
                    onChange={(e) => setProjectData(prev => ({ ...prev, description: e.target.value }))}
                    placeholder="Describe your upcoming project..."
                    rows={4}
                    required
                  />
                </div>

                <div className="space-y-4">
                  <Label>Technologies to be Used</Label>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="upcomingTechLabel">Technology Label</Label>
                      <Input
                        id="upcomingTechLabel"
                        value={techLabel}
                        onChange={(e) => setTechLabel(e.target.value)}
                        placeholder="e.g., PyTorch"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="upcomingTechLink">Technology Link</Label>
                      <Input
                        id="upcomingTechLink"
                        value={techLink}
                        onChange={(e) => setTechLink(e.target.value)}
                        placeholder="e.g., https://pytorch.org"
                      />
                    </div>
                    
                    <div className="flex items-end">
                      <Button
                        type="button"
                        onClick={addTechnology}
                        className="w-full"
                        disabled={!techLabel.trim() || !techLink.trim()}
                      >
                        <Plus className="w-4 h-4 mr-2" />
                        Add
                      </Button>
                    </div>
                  </div>

                  {projectData.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-2 p-4 bg-muted/30 rounded-lg">
                      {projectData.technologies.map((tech, index) => (
                        <Badge
                          key={index}
                          variant="secondary"
                          className="flex items-center gap-1 pr-1"
                        >
                          {tech.label}
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            className="h-4 w-4 p-0 hover:bg-destructive hover:text-destructive-foreground"
                            onClick={() => removeTechnology(index)}
                          >
                            <X className="w-3 h-3" />
                          </Button>
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>

                <Button type="submit" className="w-full">
                  Add Upcoming Project
                </Button>
              </form>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AddProject;