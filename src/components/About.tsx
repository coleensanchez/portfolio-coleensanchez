const About = () => {
  return (
    <section id="about" className="py-20 px-6 md:px-12 lg:px-24 bg-muted border-y-4 border-border">
      <div className="max-w-5xl mx-auto space-y-12">
        <div className="space-y-3">
          <p className="text-xs font-bold font-mono tracking-widest text-foreground uppercase border-2 border-border inline-block px-3 py-1 bg-background">
            About Me
          </p>
          <h2 className="text-4xl md:text-5xl font-sans font-bold uppercase">
            Creative Technologist
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-4 border-4 border-border p-6 bg-background shadow-brutal hover:shadow-brutal-lg transition-shadow">
            <h3 className="text-xl font-sans font-bold uppercase border-b-4 border-primary pb-2">Who I Am</h3>
            <p className="font-body text-foreground leading-relaxed">
              I'm a creative technologist and systems-minded designer who thrives at the
              intersection of clarity, complexity, and curiosity. I turn abstract ideas into
              intuitive, human-centered experiences.
            </p>
          </div>

          <div className="space-y-4 border-4 border-border p-6 bg-background shadow-brutal hover:shadow-brutal-lg transition-shadow">
            <h3 className="text-xl font-sans font-bold uppercase border-b-4 border-secondary pb-2">What I Do</h3>
            <p className="font-body text-foreground leading-relaxed">
              I design systems that think like people do—clear, adaptable, and purpose-driven.
              I bring empathy and structure to every layer of the experience. My work blends
              technical fluency with storytelling, making data, diagrams, and workflows not
              just usable—but meaningful.
            </p>
          </div>

          <div className="space-y-4 border-4 border-border p-6 bg-background shadow-brutal hover:shadow-brutal-lg transition-shadow">
            <h3 className="text-xl font-sans font-bold uppercase border-b-4 border-accent pb-2">Why It Matters</h3>
            <p className="font-body text-foreground leading-relaxed">
              I believe that design is a form of care. When we build with clarity and
              intention, we empower people to learn, reflect, and lead. My mission is to make
              complexity feel like an invitation—not a barrier.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
