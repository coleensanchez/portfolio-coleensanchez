import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Education = () => {
  return (
    <section id="education" className="py-20 px-6 md:px-12 lg:px-24 bg-background">
      <div className="max-w-5xl mx-auto space-y-12">
        <div className="space-y-3">
          <p className="text-xs font-bold font-mono tracking-widest text-foreground uppercase border-2 border-border inline-block px-3 py-1 bg-accent text-accent-foreground">
            Background
          </p>
          <h2 className="text-4xl md:text-5xl font-sans font-bold uppercase">
            Education & Certs
          </h2>
        </div>

        <Tabs defaultValue="education" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8 border-4 border-border h-auto p-0">
            <TabsTrigger value="education" className="font-bold uppercase py-4 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground border-r-4 border-border">
              Education
            </TabsTrigger>
            <TabsTrigger value="certificates" className="font-bold uppercase py-4 data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground">
              Certificates
            </TabsTrigger>
          </TabsList>

          <TabsContent value="education" className="space-y-6">
            <div className="space-y-6">
              <div className="border-l-8 border-primary pl-6 py-4 bg-muted border-4 border-border shadow-brutal">
                <p className="text-sm font-bold font-mono text-muted-foreground uppercase">2022 - Present</p>
                <h3 className="text-xl font-sans font-bold mt-2">
                  Polytechnic University of the Philippines
                </h3>
                <p className="font-body text-foreground">San Juan City Branch</p>
              </div>

              <div className="border-l-8 border-secondary pl-6 py-4 bg-muted border-4 border-border shadow-brutal">
                <p className="text-sm font-bold font-mono text-muted-foreground uppercase">2016 - 2022</p>
                <h3 className="text-xl font-sans font-bold mt-2">
                  Valeriano E. Fugoso Memorial High School
                </h3>
                <p className="font-body text-foreground">High School</p>
              </div>

              <div className="border-l-8 border-accent pl-6 py-4 bg-muted border-4 border-border shadow-brutal">
                <p className="text-sm font-bold font-mono text-muted-foreground uppercase">2013 - 2016</p>
                <h3 className="text-xl font-sans font-bold mt-2">
                  Valeriano E. Fugoso Elementary School
                </h3>
                <p className="font-body text-foreground">Elementary</p>
              </div>

              <div className="border-l-8 border-primary pl-6 py-4 bg-muted border-4 border-border shadow-brutal">
                <p className="text-sm font-bold font-mono text-muted-foreground uppercase">2010 - 2013</p>
                <h3 className="text-xl font-sans font-bold mt-2">St. John Academy</h3>
                <p className="font-body text-foreground">Elementary</p>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="certificates" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 border-4 border-border bg-primary shadow-brutal hover:shadow-brutal-lg transition-shadow">
                <h3 className="text-lg font-sans font-bold uppercase text-primary-foreground">
                  Cyber Threat Management
                </h3>
                <p className="font-body text-primary-foreground/80 text-sm mt-2 font-medium">
                  Cisco Networking Academy
                </p>
              </div>

              <div className="p-6 border-4 border-border bg-secondary shadow-brutal hover:shadow-brutal-lg transition-shadow">
                <h3 className="text-lg font-sans font-bold uppercase text-secondary-foreground">
                  Intro to Cybersecurity
                </h3>
                <p className="font-body text-secondary-foreground/80 text-sm mt-2 font-medium">
                  Cisco Networking Academy
                </p>
              </div>

              <div className="p-6 border-4 border-border bg-accent shadow-brutal hover:shadow-brutal-lg transition-shadow">
                <h3 className="text-lg font-sans font-bold uppercase text-accent-foreground">Networking Basics</h3>
                <p className="font-body text-accent-foreground/80 text-sm mt-2 font-medium">
                  Cisco Networking Academy
                </p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Education;
