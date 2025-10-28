import { Users, Newspaper, Smile, Coffee } from 'lucide-react';

export function StatsSection() {
  return (
    <section className="bg-muted py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-px rounded-lg border bg-card text-center shadow-md md:grid-cols-4">
          <div className="p-6">
            <Smile className="mx-auto mb-3 h-12 w-12 text-primary" />
            <p className="text-4xl font-bold">300+</p>
            <p className="text-muted-foreground">Happy Clients</p>
          </div>
          <div className="p-6">
            <Users className="mx-auto mb-3 h-12 w-12 text-primary" />
            <p className="text-4xl font-bold">729</p>
            <p className="text-muted-foreground">Editions Published</p>
          </div>
          <div className="p-6">
            <Newspaper className="mx-auto mb-3 h-12 w-12 text-primary" />
            <p className="text-4xl font-bold">~37,000,000</p>
            <p className="text-muted-foreground">Single Pages Printed</p>
          </div>
          <div className="p-6">
            <Coffee className="mx-auto mb-3 h-12 w-12 text-primary" />
            <p className="text-4xl font-bold">4,374</p>
            <p className="text-muted-foreground">Cups of Coffee Sipped</p>
          </div>
        </div>
      </div>
    </section>
  );
}
