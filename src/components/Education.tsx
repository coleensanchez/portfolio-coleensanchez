import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Education = () => {
  return (
    <section id="education" className="py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto space-y-12">
        <div className="space-y-2">
          <p className="text-sm font-sans tracking-widest text-muted-foreground uppercase">
            Background
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold">
            Education & Certificates
          </h2>
        </div>

        <Tabs defaultValue="education" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="education" className="font-sans">
              Education
            </TabsTrigger>
            <TabsTrigger value="certificates" className="font-sans">
              Certificates
            </TabsTrigger>
          </TabsList>

          <TabsContent value="education" className="space-y-8">
            <div className="space-y-8">
              <div className="border-l-2 border-accent pl-6 space-y-2">
                <p className="text-sm font-sans text-muted-foreground">2022 - Present</p>
                <h3 className="text-xl font-serif font-semibold">
                  Polytechnic University of the Philippines
                </h3>
                <p className="font-body text-secondary">San Juan City Branch</p>
              </div>

              <div className="border-l-2 border-accent pl-6 space-y-2">
                <p className="text-sm font-sans text-muted-foreground">2016 - 2022</p>
                <h3 className="text-xl font-serif font-semibold">
                  Valeriano E. Fugoso Memorial High School
                </h3>
                <p className="font-body text-secondary">High School</p>
              </div>

              <div className="border-l-2 border-accent pl-6 space-y-2">
                <p className="text-sm font-sans text-muted-foreground">2013 - 2016</p>
                <h3 className="text-xl font-serif font-semibold">
                  Valeriano E. Fugoso Elementary School
                </h3>
                <p className="font-body text-secondary">Elementary</p>
              </div>

              <div className="border-l-2 border-accent pl-6 space-y-2">
                <p className="text-sm font-sans text-muted-foreground">2010 - 2013</p>
                <h3 className="text-xl font-serif font-semibold">St. John Academy</h3>
                <p className="font-body text-secondary">Elementary</p>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="certificates" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 border border-border rounded-sm space-y-2">
                <h3 className="text-lg font-serif font-semibold">
                  Cyber Threat Management
                </h3>
                <p className="font-body text-secondary text-sm">
                  Cisco Networking Academy
                </p>
              </div>

              <div className="p-6 border border-border rounded-sm space-y-2">
                <h3 className="text-lg font-serif font-semibold">
                  Introduction to Cybersecurity
                </h3>
                <p className="font-body text-secondary text-sm">
                  Cisco Networking Academy
                </p>
              </div>

              <div className="p-6 border border-border rounded-sm space-y-2">
                <h3 className="text-lg font-serif font-semibold">Networking Basics</h3>
                <p className="font-body text-secondary text-sm">
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
