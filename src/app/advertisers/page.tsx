import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, MapPin, Newspaper, Target } from 'lucide-react';

const stats = [
  {
    icon: <Users className="h-10 w-10 text-primary" />,
    value: '15,000+',
    label: 'Weekly Readers',
    description: 'A dedicated audience of locals, expats, and tourists actively seeking the best of Bali.',
  },
  {
    icon: <MapPin className="h-10 w-10 text-primary" />,
    value: '250+',
    label: 'Distribution Points',
    description: 'Strategically placed in the most popular cafes, hotels, and hotspots across Canggu and beyond.',
  },
  {
    icon: <Newspaper className="h-10 w-10 text-primary" />,
    value: '729',
    label: 'Editions Published',
    description: 'A long-standing, trusted voice in the community with a proven track record of engagement.',
  },
    {
    icon: <Target className="h-10 w-10 text-primary" />,
    label: 'Hyper-Local Focus',
    value: 'Direct Access',
    description: 'Connect directly with the vibrant heart of the Canggu community through a beloved local publication.',
  },
];

export default function AdvertisersPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[300px] w-full">
        <Image
          src="/images/img-7.webp"
          alt="Business meeting in a tropical location"
          fill
          className="object-cover"
          priority
          data-ai-hint="business meeting"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
          <h1 className="font-headline text-4xl font-bold md:text-6xl">
            Advertise with Canggu Weekly
          </h1>
          <p className="mt-4 max-w-2xl text-lg md:text-xl">
            Connect your brand with the pulse of Bali's most vibrant community.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto max-w-5xl px-4 py-12 md:py-24">
        <div className="text-center">
            <h2 className="font-headline text-3xl font-bold">Why Partner With Us?</h2>
            <p className="mt-2 text-lg text-muted-foreground">
                Place your brand in front of a loyal and engaged local audience.
            </p>
        </div>

        {/* Stats Grid */}
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <Card key={stat.label} className="text-center">
              <CardHeader>
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                    {stat.icon}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">{stat.value}</p>
                <p className="mt-1 text-lg font-semibold">{stat.label}</p>
                <p className="mt-2 text-sm text-muted-foreground">{stat.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-24 rounded-lg bg-card p-10 text-center shadow-lg">
            <h3 className="font-headline text-3xl font-bold">Ready to Grow Your Business?</h3>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
                Our team is ready to help you create the perfect advertising campaign to meet your goals. Get in touch today to receive our media kit and discuss your options.
            </p>
            <Button asChild size="lg" className="mt-8">
                <Link href="/#contact">Contact Our Sales Team</Link>
            </Button>
        </div>
      </div>
    </div>
  );
}
