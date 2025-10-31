const About = () => {
  return (
    <section id="about" className="py-20 px-6 md:px-12 lg:px-24 bg-card">
      <div className="max-w-5xl mx-auto space-y-16">
        <div className="space-y-2">
          <p className="text-sm font-sans tracking-widest text-muted-foreground uppercase">
            About Me
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold">
            Creative Technologist
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <h3 className="text-xl font-serif font-semibold">Who I Am</h3>
            <p className="font-body text-secondary leading-relaxed">
              I'm a creative technologist and systems-minded designer who thrives at the
              intersection of clarity, complexity, and curiosity. I turn abstract ideas into
              intuitive, human-centered experiences.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-serif font-semibold">What I Do</h3>
            <p className="font-body text-secondary leading-relaxed">
              I design systems that think like people do—clear, adaptable, and purpose-driven.
              I bring empathy and structure to every layer of the experience. My work blends
              technical fluency with storytelling, making data, diagrams, and workflows not
              just usable—but meaningful.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-serif font-semibold">Why It Matters</h3>
            <p className="font-body text-secondary leading-relaxed">
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
