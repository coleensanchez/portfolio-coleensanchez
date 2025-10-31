import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const projectData: Record<string, any> = {
  "sales-management": {
    title: "Sales Management System",
    role: "Lead Designer",
    problem:
      "Students often struggle to connect programming concepts like file handling, system logic, and collaborative development to real-world applications. Without hands-on experience, these foundational skills can feel abstract and disconnected from practical use.",
    approach:
      "We designed and built a desktop-based sales and inventory management system using Java Swing for the user interface and Java I/O for backend logic and file-based data storage. The system includes modular forms for managing categories, packaging, variants, suppliers, products, deliveries, orders, and sales. Each module was assigned to different team members to encourage collaboration, ownership, and integration. Input validation, user feedback, and .txt file logging were implemented to reinforce core programming concepts.",
    outcome:
      "The project provided a hands-on learning experience for students to apply Java in a structured, real-world context. It strengthened understanding of file handling, system architecture, and teamwork in software development. The final application is a functional, maintainable system that showcases both technical and collaborative growth.",
    tech: ["Java Swing", "Java SE", "Java I/O", "SQLite"],
  },
  klynx: {
    title: "KLynx+",
    role: "PM, Lead Designer",
    overview:
      "KLynx+ is a digital record management system developed to modernize healthcare operations in Barangay Health Centers. The system replaces traditional paper-based workflows with a secure, centralized platform for managing patient records, medical services, and health monitoring.",
    problem:
      "Barangay Health Centers traditionally rely on manual, paper-based systems to record patient information. This method is slow, error-prone, and vulnerable to physical damage—especially during natural disasters like floods and typhoons. Retrieving or updating records requires time-consuming searches through filing cabinets, which reduces staff efficiency and compromises the quality of patient care.",
    approach:
      "KLynx+ was developed to address these challenges by introducing a digital solution tailored to local healthcare needs. The system features: A secure, centralized database, Automated data entry and record management, A modern, intuitive user interface, Role-based access, and Geographic disease tracking tools.",
    tech: ["React", "React Native", "Node.js", "Express.js", "MongoDB", "phpMyAdmin"],
  },
  lunaride: {
    title: "LunaRide",
    role: "Lead Designer",
    overview:
      "LunaRide is a premium-class provincial bus company offering long-distance travel and delivery services across major terminals in the Philippines. The LunaRide mobile app was designed to provide a clean, intuitive, and comfort-focused digital experience for passengers and senders.",
    problem:
      "Traditional bus booking and delivery services often rely on manual processes, physical terminals, or third-party agents, which can lead to: Long queues and limited booking windows, Confusing fare structures and class options, Inaccessible service information for remote users, Lack of transparency in delivery tracking and payment.",
    approach:
      "To address these challenges, we designed a mobile-first solution with the following principles: User-Centered Design, Modular Navigation & Booking Flow, Smart Features.",
    tech: ["Mobile Design", "UX/UI", "Figma"],
  },
  "iniwang-alaala": {
    title: "Iniwang Alaala",
    role: "Director, Lead Graphics",
    overview:
      "Iniwang Alaala is a short film created by a team of film students who rediscovered their creative spark through a journey of reflection and collaboration. The story follows Darwin, Catherine, and Amanda as they uncover a hidden time capsule on campus, leading them to explore the city and uncover stories of resilience, community, and quiet acts of support.",
    problem:
      "Many students face challenges when collaborating across different academic disciplines. Limited exposure to cross-course teamwork often results in communication gaps, unclear role distribution, and difficulty integrating diverse skill sets—especially in projects that require both technical execution and creative storytelling.",
    approach:
      "To address this, Iniwang Alaala was developed as a collaborative project that brought together students from different backgrounds to work toward a shared creative goal. Tasks were modularly assigned to encourage ownership and accountability, while regular check-ins and planning sessions fostered open communication and team cohesion.",
    outcome:
      "Through this project, students gained firsthand experience navigating the complexities of team dynamics and real-world task execution. By working across disciplines, managing deadlines, and coordinating modular responsibilities, they developed essential skills in communication, accountability, and adaptability.",
    tech: ["Film Production", "Video Editing", "Storytelling", "Multimedia"],
  },
};

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = id ? projectData[id] : null;

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-serif font-bold">Project not found</h1>
          <Button onClick={() => navigate("/")} variant="outline">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto space-y-12">
        <Button
          onClick={() => navigate("/")}
          variant="ghost"
          className="font-sans mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Portfolio
        </Button>

        <div className="space-y-4">
          <p className="text-sm font-sans tracking-widest text-muted-foreground uppercase">
            {project.role}
          </p>
          <h1 className="text-5xl md:text-6xl font-serif font-bold">{project.title}</h1>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech: string) => (
            <span
              key={tech}
              className="text-sm font-sans px-4 py-2 bg-accent/50 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="space-y-12 font-body text-secondary leading-relaxed">
          {project.overview && (
            <div className="space-y-4">
              <h2 className="text-2xl font-serif font-semibold text-foreground">
                Overview
              </h2>
              <p>{project.overview}</p>
            </div>
          )}

          <div className="space-y-4">
            <h2 className="text-2xl font-serif font-semibold text-foreground">Problem</h2>
            <p>{project.problem}</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-serif font-semibold text-foreground">
              Approach
            </h2>
            <p>{project.approach}</p>
          </div>

          {project.outcome && (
            <div className="space-y-4">
              <h2 className="text-2xl font-serif font-semibold text-foreground">
                Outcome
              </h2>
              <p>{project.outcome}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
