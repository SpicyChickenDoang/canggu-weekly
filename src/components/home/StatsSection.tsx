import { Users, Newspaper, Smile } from 'lucide-react';

export function StatsSection() {
  return (
    <section className="bg-muted py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-12 text-center md:grid-cols-2">
          {/* Facts and Numbers */}
          <div>
            <h3 className="mb-8 font-headline text-3xl font-bold">Facts &amp; Numbers</h3>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              <div className="rounded-lg bg-card p-6 shadow-md">
                <Newspaper className="mx-auto mb-3 h-12 w-12 text-primary" />
                <p className="text-4xl font-bold">50+</p>
                <p className="text-muted-foreground">Issues Published</p>
              </div>
              <div className="rounded-lg bg-card p-6 shadow-md">
                <Users className="mx-auto mb-3 h-12 w-12 text-primary" />
                <p className="text-4xl font-bold">10k+</p>
                <p className="text-muted-foreground">Weekly Readers</p>
              </div>
            </div>
          </div>

          {/* Happy Clients */}
          <div>
            <h3 className="mb-8 font-headline text-3xl font-bold">Happy Clients</h3>
            <div className="rounded-lg bg-card p-8 shadow-md">
              <Smile className="mx-auto mb-4 h-12 w-12 text-primary" />
              <blockquote className="italic text-muted-foreground">
                &ldquo;Working with Canggu Weekly has been a game-changer for our business. The exposure we've received is incredible, and we've seen a significant increase in foot traffic. Highly recommended!&rdquo;
              </blockquote>
              <p className="mt-4 font-semibold">&ndash; The Shady Shack</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
