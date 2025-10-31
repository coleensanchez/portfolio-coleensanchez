import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Skills = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="skills" className="py-20 px-6 md:px-12 lg:px-24 bg-background">
      <div className="max-w-5xl mx-auto space-y-12">
        <div className="space-y-3">
          <p className="text-xs font-bold font-mono tracking-widest text-foreground uppercase border-2 border-border inline-block px-3 py-1 bg-primary text-primary-foreground">
            Expertise
          </p>
          <h2 className="text-4xl md:text-5xl font-sans font-bold uppercase">Skills & Services</h2>
        </div>

        <Tabs defaultValue="technical" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8 border-4 border-border h-auto p-0">
            <TabsTrigger value="technical" className="font-bold uppercase py-4 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground border-r-4 border-border">
              Technical
            </TabsTrigger>
            <TabsTrigger value="soft" className="font-bold uppercase py-4 data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground border-r-4 border-border">
              Soft Skills
            </TabsTrigger>
            <TabsTrigger value="services" className="font-bold uppercase py-4 data-[state=active]:bg-accent data-[state=active]:text-accent-foreground">
              Services
            </TabsTrigger>
          </TabsList>

          <TabsContent value="technical" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4 border-4 border-border p-6 bg-muted">
                <h3 className="text-lg font-sans font-bold uppercase border-b-4 border-primary pb-2">Tools & Tech</h3>
                <ul className="space-y-2 font-body text-foreground font-medium">
                  <li>→ Figma</li>
                  <li>→ Framer</li>
                </ul>
              </div>
              <div className="space-y-4 border-4 border-border p-6 bg-muted">
                <h3 className="text-lg font-sans font-bold uppercase border-b-4 border-secondary pb-2">Frontend</h3>
                <ul className="space-y-2 font-body text-foreground font-medium">
                  <li>→ HTML & CSS</li>
                  <li>→ JavaScript</li>
                  <li>→ Responsive Design</li>
                </ul>
              </div>
              <div className="space-y-4 border-4 border-border p-6 bg-muted md:col-span-2">
                <h3 className="text-lg font-sans font-bold uppercase border-b-4 border-accent pb-2">Collaboration</h3>
                <ul className="space-y-2 font-body text-foreground font-medium flex gap-8">
                  <li>→ Notion</li>
                  <li>→ Github</li>
                  <li>→ Trello</li>
                </ul>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="soft" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border-4 border-border p-6 bg-background shadow-brutal hover:shadow-brutal-lg transition-shadow">
                <h3 className="text-lg font-sans font-bold uppercase mb-2 text-primary">Empathy-Driven</h3>
                <p className="font-body text-foreground">
                  Always starts with user needs and accessibility.
                </p>
              </div>
              <div className="border-4 border-border p-6 bg-background shadow-brutal hover:shadow-brutal-lg transition-shadow">
                <h3 className="text-lg font-sans font-bold uppercase mb-2 text-secondary">Collaborative</h3>
                <p className="font-body text-foreground">
                  Works closely with developers, stakeholders, and users.
                </p>
              </div>
              <div className="border-4 border-border p-6 bg-background shadow-brutal hover:shadow-brutal-lg transition-shadow">
                <h3 className="text-lg font-sans font-bold uppercase mb-2 text-accent">Problem-Solver</h3>
                <p className="font-body text-foreground">
                  Translates abstract goals into intuitive interfaces.
                </p>
              </div>
              <div className="border-4 border-border p-6 bg-background shadow-brutal hover:shadow-brutal-lg transition-shadow">
                <h3 className="text-lg font-sans font-bold uppercase mb-2 text-primary">Communicator</h3>
                <p className="font-body text-foreground">
                  Skilled at presenting design rationale and facilitating feedback loops.
                </p>
              </div>
              <div className="border-4 border-border p-6 bg-background shadow-brutal hover:shadow-brutal-lg transition-shadow md:col-span-2">
                <h3 className="text-lg font-sans font-bold uppercase mb-2 text-secondary">Iterative Thinker</h3>
                <p className="font-body text-foreground">
                  Embraces testing, refinement, and continuous improvement.
                </p>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="services" className="space-y-6">
            <div className="border-4 border-border p-8 bg-accent shadow-brutal-lg space-y-6">
              <p className="text-lg font-body text-foreground leading-relaxed font-medium">
                I offer freelance design services focused on creating intuitive, human-centered
                digital experiences. Whether you need UX/UI design, system design, or product
                strategy, I bring empathy and structure to every project.
              </p>
              <Button onClick={scrollToContact} variant="default" size="lg" className="group">
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
