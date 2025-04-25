import { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Download, FileText, Users, Send } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Form, FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const Advocacy = () => {
  const [selectedProvince, setSelectedProvince] = useState<string>("on");
  const [storySubmission, setStorySubmission] = useState<string>("");
  const [storyName, setStoryName] = useState<string>("");
  const [storyEmail, setStoryEmail] = useState<string>("");
  const { toast } = useToast();

  const handleProvinceChange = (value: string) => {
    setSelectedProvince(value);
  };

  const handleStorySubmit = () => {
    if (storySubmission.trim() === '') {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Please enter your story before submitting.",
      });
      return;
    }

    console.log({
      name: storyName,
      email: storyEmail,
      story: storySubmission,
      province: selectedProvince
    });

    toast({
      title: "Story Submitted",
      description: "Thank you for sharing your story with us. It will help others in similar situations.",
    });

    setStorySubmission("");
    setStoryName("");
    setStoryEmail("");
  };

  const provinceResources = {
    on: {
      name: "Ontario",
      guides: [
        {
          title: "Ontario Health Policy Guide",
          description: "How to navigate Ontario's health policy landscape",
          tags: ["Healthcare", "Ontario", "Policy"],
        },
        {
          title: "Meeting with Ontario MPPs",
          description: "Best practices for effective meetings with Ontario representatives",
          tags: ["Government", "Ontario", "Advocacy"],
        }
      ],
      templates: [
        {
          title: "Ontario MPP Letter Template",
          description: "Template for contacting Ontario Members of Provincial Parliament",
        },
        {
          title: "Ontario Health Minister Template",
          description: "Template for addressing the Ontario Minister of Health",
        }
      ]
    },
    qc: {
      name: "Quebec",
      guides: [
        {
          title: "Quebec Health System Navigation Guide",
          description: "Understanding Quebec's unique healthcare structure",
          tags: ["Healthcare", "Quebec", "Policy"],
        },
        {
          title: "Working with Quebec's National Assembly",
          description: "How to advocate with Quebec's provincial representatives",
          tags: ["Government", "Quebec", "Advocacy"],
        }
      ],
      templates: [
        {
          title: "Quebec MNA Letter Template",
          description: "Template for contacting Quebec Members of the National Assembly",
        },
        {
          title: "Quebec Health Department Template",
          description: "Template for addressing Quebec health authorities",
        }
      ]
    },
    bc: {
      name: "British Columbia",
      guides: [
        {
          title: "BC Healthcare Advocacy Guide",
          description: "Navigating British Columbia's health policy landscape",
          tags: ["Healthcare", "BC", "Policy"],
        },
        {
          title: "Meeting with BC MLAs",
          description: "How to effectively communicate with BC representatives",
          tags: ["Government", "BC", "Advocacy"],
        }
      ],
      templates: [
        {
          title: "BC MLA Letter Template",
          description: "Template for contacting British Columbia Members of Legislative Assembly",
        },
        {
          title: "BC Health Minister Template",
          description: "Template for addressing the BC Minister of Health",
        }
      ]
    },
    // Add more provinces as needed
  };

  const currentProvince = provinceResources[selectedProvince as keyof typeof provinceResources] || provinceResources.on;

  return (
    <div className="container-custom my-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Advocacy Toolkit</h1>
        <p className="text-muted-foreground mb-4">
          Resources and tools to help you advocate for improved healthcare policies in your province.
        </p>
        
        <div className="mb-8">
          <Label htmlFor="province-select">Select your province:</Label>
          <Select value={selectedProvince} onValueChange={handleProvinceChange}>
            <SelectTrigger className="w-full max-w-xs">
              <SelectValue placeholder="Select a province" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="on">Ontario</SelectItem>
              <SelectItem value="qc">Quebec</SelectItem>
              <SelectItem value="bc">British Columbia</SelectItem>
              <SelectItem value="ab">Alberta</SelectItem>
              <SelectItem value="mb">Manitoba</SelectItem>
              <SelectItem value="sk">Saskatchewan</SelectItem>
              <SelectItem value="ns">Nova Scotia</SelectItem>
              <SelectItem value="nb">New Brunswick</SelectItem>
              <SelectItem value="nl">Newfoundland and Labrador</SelectItem>
              <SelectItem value="pe">Prince Edward Island</SelectItem>
              <SelectItem value="yt">Yukon</SelectItem>
              <SelectItem value="nt">Northwest Territories</SelectItem>
              <SelectItem value="nu">Nunavut</SelectItem>
            </SelectContent>
          </Select>
          <p className="text-sm text-muted-foreground mt-2">
            Currently showing advocacy resources for {currentProvince.name}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card className="card-hover">
            <CardHeader>
              <div className="w-12 h-12 rounded-full bg-maple/10 flex items-center justify-center mb-4">
                <FileText className="h-6 w-6 text-maple" />
              </div>
              <CardTitle>Advocacy Guides</CardTitle>
              <CardDescription>
                Step-by-step guides for effective advocacy in {currentProvince.name}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Learn how to effectively advocate for healthcare policy change in {currentProvince.name}, from contacting 
                your representatives to organizing community initiatives.
              </p>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link to="#guides">
                  View Guides
                </Link>
              </Button>
            </CardFooter>
          </Card>
          
          <Card className="card-hover">
            <CardHeader>
              <div className="w-12 h-12 rounded-full bg-maple/10 flex items-center justify-center mb-4">
                <FileText className="h-6 w-6 text-maple" />
              </div>
              <CardTitle>Letter Templates</CardTitle>
              <CardDescription>
                Ready-to-use templates for contacting officials in {currentProvince.name}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Access professionally crafted templates for letters to MPs, {currentProvince.name === "Quebec" ? "MNAs" : "MLAs"}, healthcare 
                regulators and other decision makers.
              </p>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link to="#templates">
                  View Templates
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
        
        <section id="guides" className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Advocacy Guides for {currentProvince.name}</h2>
          
          <div className="space-y-4">
            {currentProvince.guides.map((guide, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{guide.title}</CardTitle>
                  <CardDescription>
                    {guide.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    This guide is specifically tailored for advocates in {currentProvince.name}, addressing
                    the unique political and healthcare landscape of the province.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {guide.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="bg-muted text-muted-foreground text-sm py-1 px-2 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="w-full flex items-center">
                        <Download className="mr-2 h-4 w-4" /> Download Guide
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Guide Download</DialogTitle>
                        <DialogDescription>
                          In a full implementation, this would download the {guide.title} PDF. For now, this is a placeholder dialog.
                        </DialogDescription>
                      </DialogHeader>
                      <div className="flex justify-center py-8">
                        <FileText className="h-20 w-20 text-muted-foreground" />
                      </div>
                      <Button onClick={() => toast({ title: "Guide Downloaded", description: `${guide.title} has been downloaded.` })}>
                        Confirm Download
                      </Button>
                    </DialogContent>
                  </Dialog>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>
        
        <section id="templates" className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Letter Templates for {currentProvince.name}</h2>
          
          <div className="space-y-4">
            {currentProvince.templates.map((template, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{template.title}</CardTitle>
                  <CardDescription>
                    {template.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    A professional template for writing to officials in {currentProvince.name} about healthcare policy concerns.
                  </p>
                </CardContent>
                <CardFooter>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" className="w-full flex items-center">
                        <Download className="mr-2 h-4 w-4" /> Download Template
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Template Download</DialogTitle>
                        <DialogDescription>
                          In a full implementation, this would download the {template.title} document. For now, this is a placeholder dialog.
                        </DialogDescription>
                      </DialogHeader>
                      <div className="flex justify-center py-8">
                        <FileText className="h-20 w-20 text-muted-foreground" />
                      </div>
                      <Button onClick={() => toast({ title: "Template Downloaded", description: `${template.title} has been downloaded.` })}>
                        Confirm Download
                      </Button>
                    </DialogContent>
                  </Dialog>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>
        
        <section id="stories" className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Community Stories</h2>
          
          <Card>
            <CardHeader>
              <CardTitle>Success Stories: Making Change Happen</CardTitle>
              <CardDescription>
                Real examples of successful healthcare advocacy from across Canada
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    Expanding Midwifery Services in Rural Ontario
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4">
                      <p>
                        A community coalition in rural Ontario successfully advocated for expanded 
                        midwifery services in their region, resulting in a new birthing center and 
                        increased scope of practice for local midwives.
                      </p>
                      <p>
                        Their three-year campaign included community meetings, data collection on
                        maternal health outcomes, and coordinated communication with provincial 
                        health authorities and elected officials.
                      </p>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline">
                            Read the full story
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-2xl">
                          <DialogHeader>
                            <DialogTitle>Expanding Midwifery Services in Rural Ontario</DialogTitle>
                            <DialogDescription>
                              A case study in successful community advocacy
                            </DialogDescription>
                          </DialogHeader>
                          <div className="space-y-4 py-4">
                            <p>In 2018, a group of parents, midwives, and community advocates in rural Ontario began organizing to address the lack of birthing options in their region. At the time, many pregnant individuals had to travel over 100km to access hospital births, and midwifery services were extremely limited.</p>
                            
                            <p>The coalition formed "Birth Choices Northern Ontario" and began their advocacy with three main goals:</p>
                            <ol className="list-decimal pl-5 space-y-2">
                              <li>Establish a local birth center staffed by midwives</li>
                              <li>Secure expanded scope of practice for midwives to provide more services</li>
                              <li>Improve integration between midwives and the regional hospital</li>
                            </ol>
                            
                            <p>Over three years, they used the following advocacy strategies:</p>
                            <ul className="list-disc pl-5 space-y-2">
                              <li>Conducted a community survey documenting birth experiences and outcomes</li>
                              <li>Held monthly community meetings to gather stories and build support</li>
                              <li>Organized letter-writing campaigns to local MPPs and health authorities</li>
                              <li>Partnered with Indigenous communities to highlight traditional birthing practices</li>
                              <li>Created a compelling economic case for local birth options</li>
                              <li>Secured media coverage highlighting the long travel distances for birthing</li>
                            </ul>
                            
                            <p>By 2021, their advocacy resulted in:</p>
                            <ul className="list-disc pl-5 space-y-2">
                              <li>A new birth center in their community, serving over 200 families annually</li>
                              <li>Hospital privileges for midwives at the regional hospital</li>
                              <li>New funding for midwifery education programs in the region</li>
                              <li>Policy changes allowing midwives to provide more comprehensive care</li>
                            </ul>
                            
                            <p>This case study demonstrates how organized, persistent advocacy with clear goals and evidence-based arguments can achieve significant policy and infrastructure changes.</p>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-2">
                  <AccordionTrigger>
                    Pharmacist Prescribing Rights in Alberta
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4">
                      <p>
                        A coalition of patient advocates and healthcare professionals collaborated 
                        to expand prescribing rights for pharmacists in Alberta, improving access to 
                        contraception and other essential medications.
                      </p>
                      <p>
                        Their evidence-based approach and strategic engagement with policymakers 
                        led to regulatory changes that have become a model for other provinces.
                      </p>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline">
                            Read the full story
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-2xl">
                          <DialogHeader>
                            <DialogTitle>Pharmacist Prescribing Rights in Alberta</DialogTitle>
                            <DialogDescription>
                              A groundbreaking policy change that improved healthcare access
                            </DialogDescription>
                          </DialogHeader>
                          <div className="space-y-4 py-4">
                            <p>In this detailed case study, we would present the full story of how Alberta became a leader in pharmacist prescribing rights, including the key advocacy strategies, challenges faced, and lessons learned.</p>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-3">
                  <AccordionTrigger>
                    Improving Trans Healthcare in British Columbia
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4">
                      <p>
                        Community advocates and healthcare providers in BC worked together to 
                        improve trans healthcare access and training for healthcare providers.
                      </p>
                      <p>
                        Their collaborative approach led to new policy guidelines, improved 
                        provider education, and more inclusive healthcare practices across 
                        the province.
                      </p>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline">
                            Read the full story
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-2xl">
                          <DialogHeader>
                            <DialogTitle>Improving Trans Healthcare in British Columbia</DialogTitle>
                            <DialogDescription>
                              A model for inclusive healthcare policy development
                            </DialogDescription>
                          </DialogHeader>
                          <div className="space-y-4 py-4">
                            <p>In this detailed case study, we would present the full story of how BC improved its trans healthcare services, including the key advocacy strategies, challenges faced, and lessons learned.</p>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
            <CardFooter>
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="w-full">
                    <Users className="mr-2 h-5 w-5" />
                    Submit Your Story
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl">
                  <DialogHeader>
                    <DialogTitle>Share Your Advocacy Story</DialogTitle>
                    <DialogDescription>
                      Your experiences can inspire and guide others in their advocacy journey.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4 py-4">
                    <div className="space-y-2">
                      <Label htmlFor="story-name">Your Name (optional)</Label>
                      <Input 
                        id="story-name" 
                        placeholder="Name or Organization" 
                        value={storyName}
                        onChange={(e) => setStoryName(e.target.value)}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="story-email">Email (optional)</Label>
                      <Input 
                        id="story-email" 
                        type="email" 
                        placeholder="For follow-up questions" 
                        value={storyEmail}
                        onChange={(e) => setStoryEmail(e.target.value)}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="story-province">Province/Territory</Label>
                      <Select value={selectedProvince} onValueChange={handleProvinceChange}>
                        <SelectTrigger id="story-province">
                          <SelectValue placeholder="Select a province" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="on">Ontario</SelectItem>
                          <SelectItem value="qc">Quebec</SelectItem>
                          <SelectItem value="bc">British Columbia</SelectItem>
                          <SelectItem value="ab">Alberta</SelectItem>
                          <SelectItem value="mb">Manitoba</SelectItem>
                          <SelectItem value="sk">Saskatchewan</SelectItem>
                          <SelectItem value="ns">Nova Scotia</SelectItem>
                          <SelectItem value="nb">New Brunswick</SelectItem>
                          <SelectItem value="nl">Newfoundland and Labrador</SelectItem>
                          <SelectItem value="pe">Prince Edward Island</SelectItem>
                          <SelectItem value="yt">Yukon</SelectItem>
                          <SelectItem value="nt">Northwest Territories</SelectItem>
                          <SelectItem value="nu">Nunavut</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="story-content">Your Story</Label>
                      <Textarea 
                        id="story-content" 
                        placeholder="Share your advocacy experience, challenges, and successes..." 
                        className="min-h-[200px]"
                        value={storySubmission}
                        onChange={(e) => setStorySubmission(e.target.value)}
                      />
                      <p className="text-sm text-muted-foreground">
                        We may edit stories for clarity and length before publishing.
                      </p>
                    </div>
                  </div>
                  <Button className="w-full flex items-center justify-center" onClick={handleStorySubmit}>
                    <Send className="mr-2 h-4 w-4" />
                    Submit Story
                  </Button>
                </DialogContent>
              </Dialog>
            </CardFooter>
          </Card>
        </section>
        
        <div className="bg-muted p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-4">Need More Help?</h3>
          <p className="mb-4">
            Connect with our advocacy support team for personalized guidance on your healthcare policy 
            advocacy efforts in {currentProvince.name}.
          </p>
          <Button asChild>
            <Link to="/feedback" className="flex items-center">
              Contact Us <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Advocacy;