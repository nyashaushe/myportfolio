import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { 
  Code2, 
  Calculator, 
  Megaphone, 
  Globe, 
  GraduationCap,
  Database,
  Laptop,
  Brain,
  Shield,
  Receipt,
  FileSpreadsheet,
  BookOpen,
  PieChart,
  ClipboardList,
  FileText,
  BarChart4,
  Share2,
  MonitorSmartphone,
  PenTool,
  Target,
  Languages,
  MessageCircle,
  Award,
  Info
} from "lucide-react";

interface SkillCategory {
  title: string;
  skills: string[];
  description?: string;
  details?: {
    overview?: string;
    applications?: string[];
    projects?: string[];
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
      title: "Financial & Business Skills",
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
          },
          {
            name: "Intuit Bookkeeping",
            issuer: "Intuit",
            date: "2024",
            details: "Professional bookkeeping certification"
          }
        ]
      }
    },
    {
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
            date: "June 2024 - July 2024",
            details: "Comprehensive digital marketing certification"
          }
        ]
      }
    },
    {
      title: "Languages",
      skills: [
        "English (Full Professional)",
        "Shona (Native)",
        "Swahili (Professional Working)"
      ],
      details: {
        overview: "Multilingual proficiency enabling effective communication across diverse cultures",
        applications: [
          "Cross-cultural communication",
          "International business relations",
          "Content localization",
          "Community engagement"
        ]
      }
    }
  ];

  const educationList: Education[] = [
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
    }
  ];

  return (
    <section className="py-12 px-4 animate-fadeIn" id="skills">
      <h2 className="text-2xl font-heading font-bold text-center mb-8">
        Skills & Expertise
      </h2>

      {/* Technical Skills Grid */}
      <div className="max-w-5xl mx-auto mb-8">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Code2 className="w-6 h-6 text-primary" />
          <h3 className="text-xl font-bold text-center text-primary">Technical Skills</h3>
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2">
          {[
            { icon: <Laptop className="w-3 h-3" />, name: "Python" },
            { icon: <Code2 className="w-3 h-3" />, name: "JavaScript" },
            { icon: <Database className="w-3 h-3" />, name: "C#" },
            { icon: <Globe className="w-3 h-3" />, name: "Django" },
            { icon: <MonitorSmartphone className="w-3 h-3" />, name: "React" },
            { icon: <PenTool className="w-3 h-3" />, name: "HTML/CSS" },
            { icon: <Brain className="w-3 h-3" />, name: "AI Fundamentals" },
            { icon: <Shield className="w-3 h-3" />, name: "Cybersecurity" }
          ].map((skill, i) => (
            <div key={i} 
              className="p-2 bg-card rounded-md shadow hover:shadow-md 
                transition-all duration-300 group rainbow-border-effect
                hover:scale-105 cursor-pointer text-center"
            >
              <div className="flex flex-col items-center gap-0.5">
                <div className="text-muted-foreground group-hover:text-primary transition-colors">
                  {skill.icon}
                </div>
                <span className="text-xs font-medium group-hover:text-primary">
                  {skill.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Financial & Business Skills */}
      <div className="max-w-5xl mx-auto mb-8">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Calculator className="w-6 h-6 text-primary" />
          <h3 className="text-xl font-bold text-center text-primary">Financial & Business</h3>
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2">
          {[
            { icon: <Receipt className="w-3 h-3" />, name: "QuickBooks Online" },
            { icon: <FileSpreadsheet className="w-3 h-3" />, name: "Xero Software" },
            { icon: <BookOpen className="w-3 h-3" />, name: "Bookkeeping" },
            { icon: <PieChart className="w-3 h-3" />, name: "Financial Reporting" },
            { icon: <BarChart4 className="w-3 h-3" />, name: "Project Estimation" },
            { icon: <ClipboardList className="w-3 h-3" />, name: "Procurement" },
            { icon: <FileText className="w-3 h-3" />, name: "Proposal Writing" }
          ].map((skill, i) => (
            <div key={i} 
              className="p-2 bg-card rounded-md shadow hover:shadow-md 
                transition-all duration-300 group rainbow-border-effect
                hover:scale-105 cursor-pointer text-center"
            >
              <div className="flex flex-col items-center gap-0.5">
                <div className="text-muted-foreground group-hover:text-primary transition-colors">
                  {skill.icon}
                </div>
                <span className="text-xs font-medium group-hover:text-primary">
                  {skill.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Digital Marketing Skills */}
      <div className="max-w-5xl mx-auto mb-8">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Megaphone className="w-6 h-6 text-primary" />
          <h3 className="text-xl font-bold text-center text-primary">Digital Marketing</h3>
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2">
          {[
            { icon: <Share2 className="w-3 h-3" />, name: "Social Media Marketing" },
            { icon: <Target className="w-3 h-3" />, name: "Facebook Ads" },
            { icon: <BarChart4 className="w-3 h-3" />, name: "Digital Marketing Strategy" },
            { icon: <PenTool className="w-3 h-3" />, name: "Content Creation" },
            { icon: <ClipboardList className="w-3 h-3" />, name: "Campaign Management" }
          ].map((skill, i) => (
            <div key={i} 
              className="p-2 bg-card rounded-md shadow hover:shadow-md 
                transition-all duration-300 group rainbow-border-effect
                hover:scale-105 cursor-pointer text-center"
            >
              <div className="flex flex-col items-center gap-0.5">
                <div className="text-muted-foreground group-hover:text-primary transition-colors">
                  {skill.icon}
                </div>
                <span className="text-xs font-medium group-hover:text-primary">
                  {skill.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Languages */}
      <div className="max-w-5xl mx-auto mb-8">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Languages className="w-6 h-6 text-primary" />
          <h3 className="text-xl font-bold text-center text-primary">Languages</h3>
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2">
          {[
            { icon: <MessageCircle className="w-3 h-3" />, name: "English (Full Professional)" },
            { icon: <MessageCircle className="w-3 h-3" />, name: "Shona (Native)" },
            { icon: <MessageCircle className="w-3 h-3" />, name: "Swahili (Professional Working)" }
          ].map((skill, i) => (
            <div key={i} 
              className="p-2 bg-card rounded-md shadow hover:shadow-md 
                transition-all duration-300 group rainbow-border-effect
                hover:scale-105 cursor-pointer text-center"
            >
              <div className="flex flex-col items-center gap-0.5">
                <div className="text-muted-foreground group-hover:text-primary transition-colors">
                  {skill.icon}
                </div>
                <span className="text-xs font-medium group-hover:text-primary">
                  {skill.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certifications Section */}
      <div className="max-w-5xl mx-auto mb-8">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Award className="w-6 h-6 text-primary" />
          <h3 className="text-xl font-bold text-center text-primary">Professional Certifications</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {skillCategories.map(category => 
            category.details?.certifications?.map((cert, i) => (
              <div key={i} 
                className="p-4 bg-card rounded-lg shadow-lg hover:shadow-xl 
                  transition-all duration-300 group rainbow-border-effect"
              >
                <h4 className="text-base font-bold mb-1 group-hover:text-primary">{cert.name}</h4>
                <p className="text-xs text-muted-foreground mb-1">
                  {cert.issuer} • {cert.date}
                </p>
                <p className="text-sm text-muted-foreground">{cert.details}</p>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Updated Education Roadmap Section */}
      <div className="mt-12 max-w-4xl mx-auto">
        <h3 className="text-2xl font-bold mb-12 text-center">Educational Journey</h3>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform -translate-x-px h-full w-0.5 bg-primary/30" />
          
          {educationList.map((edu, index) => (
            <div key={index} 
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary" />
              
              {/* Content */}
              <div className={`ml-8 md:ml-0 md:w-1/2 ${
                index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
              }`}>
                <Dialog>
                  <DialogTrigger asChild>
                    <div className="p-6 bg-card rounded-lg shadow-lg hover:shadow-xl 
                      transition-all duration-300 cursor-pointer group
                      transform hover:scale-[1.02] rainbow-border-effect">
                      <div className="flex justify-between items-center flex-wrap gap-2 mb-2">
                        <h4 className="text-lg font-bold group-hover:text-primary transition-colors">
                          {edu.institution}
                        </h4>
                        <span className="text-sm px-3 py-1 rounded-full bg-primary/10 text-primary">
                          {edu.period}
                        </span>
                      </div>
                      <p className="text-primary font-medium mb-2">{edu.degree}</p>
                      {edu.details?.description && (
                        <p className="text-muted-foreground text-sm line-clamp-2">
                          {edu.details.description}
                        </p>
                      )}
                      <div className="mt-3 flex justify-between items-center">
                        <div className="flex -space-x-2">
                          {edu.details?.courses?.slice(0, 3).map((_, i) => (
                            <div key={i} 
                              className="w-6 h-6 rounded-full bg-primary/20 border-2 
                              border-background flex items-center justify-center text-xs text-primary"
                            >
                              {i + 1}
                            </div>
                          ))}
                          {(edu.details?.courses?.length || 0) > 3 && (
                            <div className="w-6 h-6 rounded-full bg-primary/20 border-2 
                              border-background flex items-center justify-center text-xs text-primary"
                            >
                              +{(edu.details?.courses?.length || 0) - 3}
                            </div>
                          )}
                        </div>
                        <Info className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                      </div>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl">
                    <DialogHeader>
                      <DialogTitle className="text-2xl font-bold">
                        {edu.institution}
                      </DialogTitle>
                    </DialogHeader>
                    <div className="mt-4 space-y-6">
                      <div>
                        <h4 className="text-lg font-semibold text-primary mb-2">{edu.degree}</h4>
                        <p className="text-muted-foreground">{edu.period}</p>
                      </div>

                      {edu.details?.description && (
                        <p className="text-muted-foreground">{edu.details.description}</p>
                      )}

                      {edu.details?.courses && (
                        <div>
                          <h4 className="text-lg font-semibold text-primary mb-2">Key Courses</h4>
                          <ul className="space-y-2">
                            {edu.details.courses.map((course, i) => (
                              <li key={i} className="flex items-start">
                                <span className="mr-2">•</span>
                                {course}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {edu.details?.achievements && (
                        <div>
                          <h4 className="text-lg font-semibold text-primary mb-2">Achievements</h4>
                          <ul className="space-y-2">
                            {edu.details.achievements.map((achievement, i) => (
                              <li key={i} className="flex items-start">
                                <span className="mr-2">•</span>
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {edu.details?.skills && (
                        <div>
                          <h4 className="text-lg font-semibold text-primary mb-2">Skills Developed</h4>
                          <div className="flex flex-wrap gap-2">
                            {edu.details.skills.map((skill, i) => (
                              <span key={i} className="skill-badge">
                                {skill}
                              </span>
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
          
          {/* Future milestone */}
          <div className="relative flex items-center">
            <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary/50" />
            <div className="ml-8 md:ml-0 md:w-1/2 md:pr-12">
              <div className="p-4 rounded-lg border-2 border-dashed border-primary/50 text-center">
                <p className="text-primary font-medium">Future Learning Goals</p>
                <p className="text-sm text-muted-foreground">Continuing education and professional development</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}