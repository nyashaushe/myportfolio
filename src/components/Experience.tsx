import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Info } from "lucide-react"

interface Experience {
  company: string
  position: string
  period: string
  description: string[]
  technologies?: string[]
  details?: {
    achievements?: string[]
    responsibilities?: string[]
    impact?: string[]
  }
}

export function Experience() {
  const experiences: Experience[] = [
    {
      company: "Mountain River Partners",
      position: "Bookkeeper",
      period: "October 2024 - December 2024",
      description: [
        "Provided comprehensive bookkeeping services",
        "Managed financial records and reporting",
        "Ensured accuracy in financial transactions"
      ],
      details: {
        responsibilities: [
          "Maintained accurate financial records",
          "Processed accounts payable and receivable",
          "Generated financial reports",
          "Reconciled bank statements"
        ],
        impact: [
          "Improved financial accuracy and reporting",
          "Streamlined bookkeeping processes",
          "Enhanced financial transparency"
        ]
      }
    },
    {
      company: "The Church of Jesus Christ of Latter-day Saints",
      position: "Stake Clerk",
      period: "August 2024 - Present",
      description: [
        "Managed financial records and reporting for church operations",
        "Coordinated logistical aspects of church functions",
        "Maintained accurate records for over 2,500 members"
      ],
      details: {
        responsibilities: [
          "Manage and track financial records including tithing and donations",
          "Coordinate meetings and events for stake leadership",
          "Maintain database and sensitive documents",
          "Generate and analyze financial reports"
        ],
        achievements: [
          "95% improvement in data integrity",
          "Enhanced financial reporting accuracy",
          "Streamlined administrative processes"
        ],
        impact: [
          "Improved organizational efficiency",
          "Enhanced data management systems",
          "Strengthened financial controls"
        ]
      }
    },
    {
      company: "The Church of Jesus Christ of Latter-day Saints",
      position: "Stake Executive Secretary",
      period: "May 2022 - August 2024",
      description: [
        "Provided high-level administrative support to church leadership",
        "Managed sensitive documents and communications",
        "Coordinated large-scale events and meetings"
      ],
      details: {
        responsibilities: [
          "Organize leadership meetings and prepare agendas",
          "Manage communication between departments",
          "Handle confidential information",
          "Coordinate events and conferences"
        ],
        achievements: [
          "Improved communication efficiency by 30%",
          "Successfully coordinated 50+ stakeholder meetings",
          "Developed new organizational systems"
        ]
      }
    },
    {
      company: "Farm and City Centre",
      position: "Salesperson",
      period: "May 2022 - May 2024",
      description: [
        "Exceeded sales targets by 15-20% through effective customer engagement",
        "Processed 100+ daily transactions with 99.9% accuracy",
        "Recognized as Employee of the Month for 3 consecutive months"
      ],
      details: {
        achievements: [
          "Increased revenue per transaction by 10%",
          "Boosted customer satisfaction scores by 25%",
          "Reduced product return rates by 12%",
          "Improved inventory management efficiency by 20%"
        ],
        responsibilities: [
          "Provide product expertise and guidance",
          "Manage inventory and stock organization",
          "Process transactions and handle cash",
          "Resolve customer issues and inquiries"
        ],
        impact: [
          "Contributed to 15% growth in annual store revenue",
          "Maintained 95% customer issue resolution rate",
          "Fostered 30% customer return rate"
        ]
      }
    },
    {
      company: "The Church of Jesus Christ of Latter-day Saints",
      position: "Full-time Missionary (Digital Marketing)",
      period: "February 2020 - February 2022",
      description: [
        "Led digital marketing campaigns using Facebook Ads in Kenya",
        "Served as Mission Technology Specialist",
        "Managed mission's technology infrastructure"
      ],
      details: {
        responsibilities: [
          "Plan and execute Facebook advertising campaigns",
          "Train missionaries on technology use",
          "Manage mission devices and software",
          "Develop digital outreach strategies"
        ],
        achievements: [
          "Successfully reached diverse audiences across regions",
          "Improved mission's digital presence",
          "Enhanced technological efficiency"
        ],
        impact: [
          "Increased digital engagement",
          "Streamlined communication processes",
          "Improved technology adoption"
        ]
      }
    }
  ]

  return (
    <section className="py-20 px-4 animate-fadeIn" id="experience">
      <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">
        Professional Journey
      </h2>
      <div className="max-w-4xl mx-auto">
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform -translate-x-px h-full w-0.5 bg-primary/30" />
          
          {experiences.map((exp, index) => (
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
                        <h3 className="text-xl font-bold text-primary">{exp.position}</h3>
                        <span className="text-sm text-muted-foreground">{exp.period}</span>
                      </div>
                      <p className="text-lg font-medium mb-3">{exp.company}</p>
                      <ul className="space-y-2">
                        {exp.description.map((desc, i) => (
                          <li key={i} className="text-muted-foreground flex items-start">
                            <span className="mr-2">•</span>
                            {desc}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-4 flex justify-end">
                        <Info className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                      </div>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl">
                    <DialogHeader>
                      <DialogTitle className="text-2xl font-bold">
                        {exp.position} at {exp.company}
                      </DialogTitle>
                    </DialogHeader>
                    <div className="mt-4 space-y-6">
                      {exp.details?.responsibilities && (
                        <div>
                          <h4 className="text-lg font-semibold text-primary mb-2">Key Responsibilities</h4>
                          <ul className="space-y-2">
                            {exp.details.responsibilities.map((item, i) => (
                              <li key={i} className="flex items-start">
                                <span className="mr-2">•</span>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      
                      {exp.details?.achievements && (
                        <div>
                          <h4 className="text-lg font-semibold text-primary mb-2">Achievements</h4>
                          <ul className="space-y-2">
                            {exp.details.achievements.map((item, i) => (
                              <li key={i} className="flex items-start">
                                <span className="mr-2">•</span>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      
                      {exp.details?.impact && (
                        <div>
                          <h4 className="text-lg font-semibold text-primary mb-2">Impact</h4>
                          <ul className="space-y-2">
                            {exp.details.impact.map((item, i) => (
                              <li key={i} className="flex items-start">
                                <span className="mr-2">•</span>
                                {item}
                              </li>
                            ))}
                          </ul>
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
  )
} 