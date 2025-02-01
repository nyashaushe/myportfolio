import { Code2, Laptop, Receipt, Megaphone, Languages, GraduationCap, Info } from "lucide-react";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface SkillCategory {
  icon: React.ReactNode;
  title: string;
  skills: string[];
  description?: string;
  details?: {
    overview?: string;
    applications?: string[];
    certifications?: {
      name: string;
      issuer: string;
      date: string;
      details: string;
    }[];
  };
}

interface Education {
  institution: string;
  degree: string;
  period: string;
  details?: {
    description?: string;
    courses?: string[];
    achievements?: string[];
    skills?: string[];
  };
}

export function Skills() {
  const skillCategories: SkillCategory[] = [
    {
      icon: <Laptop className="h-6 w-6" />,
      title: "Technical Skills",
      skills: [
        "Python",
        "JavaScript",
        "C#",
        "Django",
        "React",
        "HTML/CSS",
        "AI Fundamentals",
        "Cybersecurity"
      ],
      details: {
        overview: "Full-stack development capabilities with focus on web technologies and security",
        applications: [
          "Web Development",
          "Software Development",
          "Database Management",
          "API Integration",
          "Cybersecurity Implementation"
        ],
        certifications: [
          {
            name: "Python Programming",
            issuer: "Cisco Networking Academy",
            date: "May 2024",
            details: "Comprehensive programming fundamentals and advanced concepts"
          },
          {
            name: "AI Fundamentals",
            issuer: "Cisco Networking Academy",
            date: "2024",
            details: "Understanding of artificial intelligence and machine learning concepts"
          }
        ]
      }
    },
    {
      icon: <Receipt className="h-6 w-6" />,
      title: "Financial & Business",
      skills: [
        "QuickBooks Online",
        "Xero Software",
        "Bookkeeping",
        "Financial Reporting",
        "Project Estimation",
        "Procurement",
        "Proposal Writing"
      ],
      details: {
        overview: "Comprehensive financial management and business operation expertise",
        certifications: [
          {
            name: "QuickBooks Online Level 1 & 2",
            issuer: "Intuit",
            date: "2024",
            details: "Advanced proficiency in financial management software"
          },
          {
            name: "Xero Software Advisor",
            issuer: "Xero",
            date: "2024",
            details: "Expert-level knowledge of Xero accounting platform"
          }
        ]
      }
    },
    {
      icon: <Megaphone className="h-6 w-6" />,
      title: "Digital Marketing",
      skills: [
        "Social Media Marketing",
        "Facebook Ads",
        "Digital Marketing Strategy",
        "Content Creation",
        "Campaign Management"
      ],
      details: {
        overview: "Experience in digital marketing and social media campaign management",
        certifications: [
          {
            name: "Digital Marketing",
            issuer: "HubSpot Academy",
            date: "2024",
            details: "Comprehensive digital marketing certification"
          }
        ]
      }
    },
    {
      icon: <Languages className="h-6 w-6" />,
      title: "Languages",
      skills: [
        "English (Full Professional)",
        "Shona (Native)",
        "Swahili (Professional Working)"
      ],
      details: {
        overview: "Multilingual proficiency enabling effective communication across diverse cultures"
      }
    }
  ];

  const educationList: Education[] = [
    {
      institution: "Google",
      degree: "Google Project Management Professional Certificate",
      period: "February 2025",
      details: {
        description: "Professional certification in project management methodologies and best practices.",
        courses: [
          "Project Initiation & Planning",
          "Project Execution & Closing",
          "Agile Project Management",
          "Risk Management",
          "Team Leadership & Communication",
          "Google Project Management Tools"
        ],
        achievements: [
          "Mastered project management fundamentals",
          "Learned Agile and Scrum methodologies",
          "Developed leadership and communication skills",
          "Applied PM tools and techniques"
        ]
      }
    },
    {
      institution: "Intuit Academy",
      degree: "Accounting Technology Certification",
      period: "September 2024 - December 2024",
      details: {
        description: "Professional certification in accounting software and bookkeeping practices.",
        courses: [
          "QuickBooks Online Level 1",
          "QuickBooks Online Level 2",
          "Bookkeeping Principles",
          "Financial Reporting"
        ],
        achievements: [
          "Mastered QuickBooks Online platform",
          "Developed professional bookkeeping skills",
          "Learned advanced financial reporting techniques"
        ]
      }
    },
    {
      institution: "HubSpot Academy",
      degree: "Digital Marketing Certification",
      period: "June 2024 - July 2024",
      details: {
        description: "Comprehensive training in digital marketing strategies and implementation.",
        courses: [
          "Social Media Marketing",
          "Content Marketing",
          "Digital Advertising",
          "Marketing Analytics"
        ],
        achievements: [
          "Created successful marketing campaigns",
          "Learned data-driven marketing strategies",
          "Developed content creation skills"
        ]
      }
    },
    {
      institution: "Cisco Networking Academy",
      degree: "Computer Programming Certification",
      period: "May 2024",
      details: {
        description: "Specialized training in computer programming and networking fundamentals.",
        courses: [
          "Python Programming",
          "Network Fundamentals",
          "Cybersecurity Basics",
          "AI and Machine Learning Concepts"
        ],
        achievements: [
          "Completed hands-on programming projects",
          "Developed practical networking skills",
          "Gained cybersecurity knowledge"
        ]
      }
    },
    {
      institution: "BYU-Pathway Worldwide",
      degree: "Bachelor's in Software Development",
      period: "January 2022 - June 2026",
      details: {
        description: "Pursuing a comprehensive degree in Software Development with focus on web technologies and programming fundamentals.",
        courses: [
          "Web Development",
          "Database Design",
          "Software Engineering Principles",
          "Algorithm Design",
          "Full Stack Development"
        ],
        achievements: [
          "Maintaining strong academic performance",
          "Participating in coding projects",
          "Building practical software solutions"
        ],
        skills: [
          "Programming Languages",
          "Web Technologies",
          "Software Design",
          "Problem Solving",
          "Project Management"
        ]
      }
    },
  ];

  const sortByDate = (a: Education, b: Education) => {
    const dateA = new Date(a.period.split(' - ')[0]);
    const dateB = new Date(b.period.split(' - ')[0]);
    return dateB.getTime() - dateA.getTime();
  };

  return (
    <section className="py-12 px-4" id="skills">
      <h2 className="text-2xl font-heading font-bold text-center mb-8">
        Skills & Expertise
      </h2>

      <div className="max-w-5xl mx-auto mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <Card className="cursor-pointer hover:shadow-md transition-all duration-200 group">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="text-primary">
                          {category.icon}
                        </div>
                        <CardTitle>{category.title}</CardTitle>
                      </div>
                      <Info className="w-5 h-5 text-muted-foreground opacity-50 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, i) => (
                        <Badge 
                          key={i} 
                          variant="secondary"
                          className="bg-secondary/50"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                    <p className="text-xs text-muted-foreground mt-4 text-center italic">
                      Click to view details
                    </p>
                  </CardHeader>
                </Card>
              </DialogTrigger>
              
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle className="flex items-center gap-2">
                    <div className="text-primary">{category.icon}</div>
                    <span>{category.title}</span>
                  </DialogTitle>
                </DialogHeader>
                
                <div className="space-y-6">
                  {category.details?.overview && (
                    <p className="text-muted-foreground">
                      {category.details.overview}
                    </p>
                  )}
                  
                  {category.details?.applications && (
                    <div className="space-y-2">
                      <h4 className="font-semibold">Applications</h4>
                      <div className="flex flex-wrap gap-2">
                        {category.details.applications.map((app, i) => (
                          <Badge key={i} variant="outline">
                            {app}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {category.details?.certifications && (
                    <div className="space-y-4">
                      <h4 className="font-semibold">Certifications</h4>
                      <div className="grid gap-4">
                        {category.details.certifications.map((cert, i) => (
                          <div key={i} className="p-4 rounded-lg bg-secondary/10">
                            <h5 className="font-medium text-primary">{cert.name}</h5>
                            <p className="text-sm text-muted-foreground">
                              {cert.issuer} • {cert.date}
                            </p>
                            <p className="text-sm mt-2">{cert.details}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>

      {/* Education Section */}
      <div className="max-w-4xl mx-auto">
        <h3 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">
          Education & Certifications
        </h3>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform -translate-x-px h-full w-0.5 bg-primary/30" />
          
          {educationList
            .sort(sortByDate)
            .map((education, index) => (
            <div key={index} className={`relative flex items-center mb-12 ${
              index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            }`}>
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary" />
              
              {/* Content */}
              <div className={`ml-8 md:ml-0 md:w-1/2 ${
                index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
              }`}>
                <Dialog>
                  <DialogTrigger asChild>
                    <div className="p-6 bg-card rounded-lg shadow-lg hover:shadow-xl transition-shadow cursor-pointer group">
                      <div className="flex justify-between items-center flex-wrap gap-2 mb-3">
                        <h3 className="text-xl font-bold text-primary">{education.degree}</h3>
                        <span className="text-sm text-muted-foreground">{education.period}</span>
                      </div>
                      <p className="text-lg font-medium mb-3">{education.institution}</p>
                      {education.details?.description && (
                        <p className="text-muted-foreground mb-3">
                          {education.details.description}
                        </p>
                      )}
                      {education.details?.courses && (
                        <div className="flex flex-wrap gap-2">
                          {education.details.courses.slice(0, 3).map((course, i) => (
                            <Badge key={i} variant="secondary">
                              {course}
                            </Badge>
                          ))}
                          {education.details.courses.length > 3 && (
                            <Badge variant="outline">
                              +{education.details.courses.length - 3} more
                            </Badge>
                          )}
                        </div>
                      )}
                      <div className="mt-4 flex justify-end">
                        <Info className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                      </div>
                    </div>
                  </DialogTrigger>

                  <DialogContent className="max-w-2xl">
                    <DialogHeader>
                      <DialogTitle className="text-2xl font-bold">
                        {education.degree}
                      </DialogTitle>
                      <div className="flex justify-between items-center">
                        <p className="text-lg text-primary">{education.institution}</p>
                        <p className="text-muted-foreground">{education.period}</p>
                      </div>
                    </DialogHeader>

                    <div className="mt-6 space-y-6">
                      {education.details?.description && (
                        <p className="text-muted-foreground">
                          {education.details.description}
                        </p>
                      )}

                      {education.details?.courses && (
                        <div>
                          <h4 className="font-semibold mb-2">Key Courses</h4>
                          <div className="flex flex-wrap gap-2">
                            {education.details.courses.map((course, i) => (
                              <Badge key={i} variant="outline">
                                {course}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}

                      {education.details?.achievements && (
                        <div>
                          <h4 className="font-semibold mb-2">Achievements</h4>
                          <ul className="space-y-2">
                            {education.details.achievements.map((achievement, i) => (
                              <li key={i} className="text-muted-foreground flex items-start">
                                <span className="mr-2">•</span>
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {education.details?.skills && (
                        <div>
                          <h4 className="font-semibold mb-2">Skills Developed</h4>
                          <div className="flex flex-wrap gap-2">
                            {education.details.skills.map((skill, i) => (
                              <Badge key={i} variant="secondary">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}