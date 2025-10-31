import profileImage from "@/assets/profile.jpg";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 animate-fade-in">
          <div className="space-y-2">
            <p className="text-sm font-sans tracking-widest text-muted-foreground uppercase">
              Designer & Technologist
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold tracking-tight">
              Coleen Faye Sanchez
            </h1>
          </div>
          <p className="text-lg font-body text-secondary leading-relaxed max-w-lg">
            Information Technology Student at Polytechnic University of the Philippines
          </p>
          <div className="flex gap-4 pt-4">
            <Button
              variant="default"
              size="lg"
              onClick={() => scrollToSection("contact")}
              className="font-sans group"
            >
              Let's Connect
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection("portfolio")}
              className="font-sans"
            >
              View Work
            </Button>
          </div>
        </div>
        <div className="relative animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <div className="aspect-[3/4] overflow-hidden rounded-sm">
            <img
              src={profileImage}
              alt="Coleen Faye Sanchez"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-accent/30 rounded-sm -z-10" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
