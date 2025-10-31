import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: "sales-management",
    title: "Sales Management System",
    role: "Lead Designer",
    description:
      "Desktop-based sales and inventory management system using Java Swing, demonstrating collaborative development and file-based data storage.",
    tags: ["Java Swing", "System Design", "Team Collaboration"],
  },
  {
    id: "klynx",
    title: "KLynx+",
    role: "PM, Lead Designer",
    description:
      "Modernizing barangay medical records through intuitive web and mobile platforms with secure, centralized healthcare data management.",
    tags: ["React", "React Native", "Healthcare", "MongoDB"],
  },
  {
    id: "lunaride",
    title: "LunaRide",
    role: "Lead Designer",
    description:
      "Premium bus booking and delivery mobile app with route browsing, class comparison, and online booking features.",
    tags: ["Mobile Design", "UX/UI", "Transportation"],
  },
  {
    id: "iniwang-alaala",
    title: "Iniwang Alaala",
    role: "Director, Lead Graphics",
    description:
      "A short film exploring resilience, community, and creative collaboration through storytelling and multimedia production.",
    tags: ["Film Production", "Storytelling", "Multimedia"],
  },
];

const Portfolio = () => {
  const navigate = useNavigate();

  return (
    <section id="portfolio" className="py-20 px-6 md:px-12 lg:px-24 bg-muted border-y-4 border-border">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="space-y-3">
          <p className="text-xs font-bold font-mono tracking-widest text-foreground uppercase border-2 border-border inline-block px-3 py-1 bg-secondary text-secondary-foreground">
            Selected Work
          </p>
          <h2 className="text-4xl md:text-5xl font-sans font-bold uppercase">Portfolio</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.id}
              onClick={() => navigate(`/project/${project.id}`)}
              className="group cursor-pointer overflow-hidden border-4 border-border bg-background shadow-brutal hover:shadow-brutal-lg hover:-translate-y-1 transition-all duration-200 animate-pop-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="p-8 space-y-4">
                <div className="flex justify-between items-start">
                  <div className="space-y-2">
                    <p className="text-xs font-bold font-mono tracking-widest text-muted-foreground uppercase">
                      {project.role}
                    </p>
                    <h3 className="text-2xl font-sans font-bold uppercase leading-tight group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <ArrowUpRight className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
                <p className="font-body text-foreground leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-bold font-mono px-3 py-1.5 bg-muted border-2 border-border uppercase"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
