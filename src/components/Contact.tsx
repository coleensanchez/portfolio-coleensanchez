import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Linkedin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 px-6 md:px-12 lg:px-24 bg-muted border-y-4 border-border">
      <div className="max-w-5xl mx-auto space-y-12">
        <div className="space-y-3">
          <p className="text-xs font-bold font-mono tracking-widest text-foreground uppercase border-2 border-border inline-block px-3 py-1 bg-background">
            Get In Touch
          </p>
          <h2 className="text-4xl md:text-5xl font-sans font-bold uppercase">Contact</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="border-4 border-border p-6 bg-accent shadow-brutal">
              <h3 className="text-xl font-sans font-bold uppercase mb-4 text-accent-foreground">Let's Connect</h3>
              <p className="font-body text-accent-foreground leading-relaxed">
                I'm always open to discussing new projects, creative ideas, or opportunities
                to be part of your vision.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3 border-4 border-border p-4 bg-background hover:shadow-brutal transition-shadow">
                <Mail className="h-5 w-5 text-primary" />
                <a
                  href="mailto:coleenfayesanchez@gmail.com"
                  className="font-body text-foreground hover:text-primary transition-colors font-medium"
                >
                  coleenfayesanchez@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3 border-4 border-border p-4 bg-background">
                <MapPin className="h-5 w-5 text-secondary" />
                <span className="font-body text-foreground font-medium">Manila, Philippines</span>
              </div>
              <div className="flex items-center gap-3 border-4 border-border p-4 bg-background hover:shadow-brutal transition-shadow">
                <Linkedin className="h-5 w-5 text-accent" />
                <a
                  href="https://www.linkedin.com/in/coleen-sanchez-160085386"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-foreground hover:text-accent transition-colors font-medium"
                >
                  LinkedIn Profile
                </a>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 border-4 border-border p-8 bg-background shadow-brutal-lg">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-bold font-mono uppercase">
                Name
              </label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="font-body border-4"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-bold font-mono uppercase">
                Email
              </label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="font-body border-4"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-bold font-mono uppercase">
                Message
              </label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={5}
                className="font-body resize-none border-4"
              />
            </div>

            <Button type="submit" size="lg" className="w-full">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
