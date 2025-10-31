import profileImage from "@/assets/profile.jpg";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center py-20 px-6 md:px-12 lg:px-24 bg-background">
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 animate-fade-in">
          <div className="space-y-3">
            <p className="text-xs font-bold font-mono tracking-widest text-muted-foreground uppercase border-2 border-border inline-block px-3 py-1">
              Designer & Technologist
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-sans font-bold tracking-tight leading-none">
              Coleen Faye Sanchez
            </h1>
          </div>
          <p className="text-lg font-body text-foreground leading-relaxed max-w-lg border-l-4 border-primary pl-4">
            Information Technology Student at Polytechnic University of the Philippines
          </p>
          <div className="flex gap-4 pt-4">
            <Button
              variant="default"
              size="lg"
              onClick={() => scrollToSection("contact")}
              className="group"
            >
              Let's Connect
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              variant="secondary"
              size="lg"
              onClick={() => scrollToSection("portfolio")}
            >
              View Work
            </Button>
          </div>
        </div>
        <div className="relative animate-pop-in" style={{ animationDelay: "0.1s" }}>
          <div className="aspect-[3/4] overflow-hidden border-4 border-border shadow-brutal-lg">
            <img
              src={profileImage}
              alt="Coleen Faye Sanchez"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-accent border-4 border-border -z-10" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
