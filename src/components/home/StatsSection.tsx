import { Users, Newspaper, Smile } from 'lucide-react';

export function StatsSection() {
  return (
    <section className="bg-muted py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 text-center md:grid-cols-3">
          <div className="rounded-lg bg-card p-6 shadow-md">
            <Newspaper className="mx-auto mb-3 h-12 w-12 text-primary" />
            <p className="text-4xl font-bold">300+</p>
            <p className="text-muted-foreground">Issues Published</p>
          </div>
          <div className="rounded-lg bg-card p-6 shadow-md">
            <Users className="mx-auto mb-3 h-12 w-12 text-primary" />
            <p className="text-4xl font-bold">10k</p>
            <p className="text-muted-foreground">Weekly Readers</p>
          </div>
          <div className="rounded-lg bg-card p-6 shadow-md">
            <Smile className="mx-auto mb-3 h-12 w-12 text-primary" />
            <p className="text-4xl font-bold">5k+</p>
            <p className="text-muted-foreground">Happy Clients</p>
          </div>
        </div>
      </div>
    </section>
  );
}
