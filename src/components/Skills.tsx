import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Skills = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="skills" className="py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto space-y-12">
        <div className="space-y-2">
          <p className="text-sm font-sans tracking-widest text-muted-foreground uppercase">
            Expertise
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold">Skills & Services</h2>
        </div>

        <Tabs defaultValue="technical" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="technical" className="font-sans">
              Technical Skills
            </TabsTrigger>
            <TabsTrigger value="soft" className="font-sans">
              Soft Skills
            </TabsTrigger>
            <TabsTrigger value="services" className="font-sans">
              Services
            </TabsTrigger>
          </TabsList>

          <TabsContent value="technical" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-serif font-semibold">Tools & Technologies</h3>
                <ul className="space-y-2 font-body text-secondary">
                  <li>• Figma</li>
                  <li>• Framer</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-serif font-semibold">Frontend Basics</h3>
                <ul className="space-y-2 font-body text-secondary">
                  <li>• HTML & CSS</li>
                  <li>• JavaScript</li>
                  <li>• Responsive Design</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-serif font-semibold">Collaboration</h3>
                <ul className="space-y-2 font-body text-secondary">
                  <li>• Notion</li>
                  <li>• Github</li>
                  <li>• Trello</li>
                </ul>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="soft" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <h3 className="text-xl font-serif font-semibold">Empathy-driven design</h3>
                <p className="font-body text-secondary">
                  Always starts with user needs and accessibility.
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-serif font-semibold">Collaborative mindset</h3>
                <p className="font-body text-secondary">
                  Works closely with developers, stakeholders, and users.
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-serif font-semibold">Problem-solving</h3>
                <p className="font-body text-secondary">
                  Translates abstract goals into intuitive interfaces.
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-serif font-semibold">Communication</h3>
                <p className="font-body text-secondary">
                  Skilled at presenting design rationale and facilitating feedback loops.
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-serif font-semibold">Iterative thinking</h3>
                <p className="font-body text-secondary">
                  Embraces testing, refinement, and continuous improvement.
                </p>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="services" className="space-y-6">
            <div className="max-w-2xl space-y-6">
              <p className="text-lg font-body text-secondary leading-relaxed">
                I offer freelance design services focused on creating intuitive, human-centered
                digital experiences. Whether you need UX/UI design, system design, or product
                strategy, I bring empathy and structure to every project.
              </p>
              <Button onClick={scrollToContact} className="font-sans group">
                Let's Connect
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Skills;
