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
    <section id="contact" className="py-20 px-6 md:px-12 lg:px-24 bg-card">
      <div className="max-w-5xl mx-auto space-y-12">
        <div className="space-y-2">
          <p className="text-sm font-sans tracking-widest text-muted-foreground uppercase">
            Get In Touch
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold">Contact</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-xl font-serif font-semibold">Let's connect</h3>
              <p className="font-body text-secondary leading-relaxed">
                I'm always open to discussing new projects, creative ideas, or opportunities
                to be part of your vision.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-muted-foreground" />
                <a
                  href="mailto:coleenfayesanchez@gmail.com"
                  className="font-body text-secondary hover:text-destructive transition-colors"
                >
                  coleenfayesanchez@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-muted-foreground" />
                <span className="font-body text-secondary">Manila, Philippines</span>
              </div>
              <div className="flex items-center gap-3">
                <Linkedin className="h-5 w-5 text-muted-foreground" />
                <a
                  href="https://www.linkedin.com/in/coleen-sanchez-160085386"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-secondary hover:text-destructive transition-colors"
                >
                  LinkedIn Profile
                </a>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-sans">
                Name
              </label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="font-body"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-sans">
                Email
              </label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="font-body"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-sans">
                Message
              </label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={5}
                className="font-body resize-none"
              />
            </div>

            <Button type="submit" size="lg" className="w-full font-sans">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
