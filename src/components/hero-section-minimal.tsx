import { Button } from './ui/button';

export function HeroSectionMinimal() {
  return (
    <section className="pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-7xl tracking-tight mb-8">
          Autonomous defense systems for contested environments
        </h1>
        
        <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
          We're building the next generation of AI-powered defense technology that operates 
          independently in denied and disrupted environments.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="text-base px-8">
            Request information
          </Button>
          <Button size="lg" variant="outline" className="text-base px-8">
            Partnership inquiry
          </Button>
        </div>
      </div>
    </section>
  );
}