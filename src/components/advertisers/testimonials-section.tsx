'use client';

import { Card, CardContent } from '@/components/ui/card';

const testimonials = [
    {
        quote: "Advertising with Canggu Weekly was a game-changer for our cafe. We saw a 30% increase in foot traffic the week our feature was published!",
        name: "Jayaarta",
        business: "Owner, The Shady Shack"
    },
    {
        quote: "The team was professional, and the data they provided helped us understand our customers better. Highly recommended for any local business.",
        name: "Made",
        business: "Manager, Echo Beach Club"
    },
    {
        quote: "We sold out our yoga retreat thanks to their event promotion package. The reach and engagement were beyond our expectations.",
        name: "Sophie",
        business: "Founder, Zen Garden Yoga"
    }
];

export function TestimonialsSection() {
    return (
        <section className="border-black mx-5 my-[10px] border-dashed border-[3px] py-16 md:py-24">
            <div className="container mx-auto max-w-6xl px-4">
              <div className="text-center mb-12">
                  <h2 className="font-headline text-3xl font-bold">Success Stories</h2>
                  <p className="mt-2 text-lg text-muted-foreground">
                      Hear from businesses that have grown with us.
                  </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {testimonials.map(t => (
                      <Card key={t.name} className="bg-card">
                          <CardContent className="pt-6">
                              <p className="italic text-muted-foreground">"{t.quote}"</p>
                              <div className="mt-4 text-right">
                                  <p className="font-semibold">{t.name}</p>
                                  <p className="text-sm text-muted-foreground">{t.business}</p>
                              </div>
                          </CardContent>
                      </Card>
                  ))}
              </div>
            </div>
        </section>
    );
}
