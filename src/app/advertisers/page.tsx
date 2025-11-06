
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, MapPin, Newspaper, Target, TrendingUp, BarChart, CheckCircle, Mail, Briefcase } from 'lucide-react';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';
import { Bar, BarChart as RechartsBarChart, XAxis, YAxis, CartesianGrid } from 'recharts';

const chartData = [
  { category: 'Foodies', desktop: 186, mobile: 80 },
  { category: 'Surfers', desktop: 305, mobile: 200 },
  { category: 'Yogis', desktop: 237, mobile: 120 },
  { category: 'Expats', desktop: 73, mobile: 190 },
  { category: 'Tourists', desktop: 209, mobile: 130 },
];

const chartConfig = {
  desktop: {
    label: 'Digital',
    color: 'hsl(var(--chart-1))',
  },
  mobile: {
    label: 'Print',
    color: 'hsl(var(--chart-2))',
  },
};

const advertisingOptions = [
    {
        title: "Digital Feature",
        description: "A dedicated article on our website and social media, showcasing your business with professional photos and storytelling.",
        features: ["Full-length article", "Social media blast", "Included in weekly newsletter", "Performance analytics"],
        price: "Contact for Pricing",
        icon: <Newspaper className="h-8 w-8 mb-4 text-primary" />
    },
    {
        title: "Print Advertisement",
        description: "Feature your brand in our widely distributed weekly print magazine, reaching thousands of readers across Canggu.",
        features: ["Full-page, half-page, or quarter-page", "Prime placement options", "High-quality print", "250+ distribution points"],
        price: "Starting from $150",
        icon: <Users className="h-8 w-8 mb-4 text-primary" />
    },
    {
        title: "Event Promotion",
        description: "Promote your event to our engaged audience through our digital and print channels for maximum visibility.",
        features: ["Featured on our events calendar", "Social media promotion", "Mention in print edition", "Targeted reach"],
        price: "Custom Packages",
        icon: <Target className="h-8 w-8 mb-4 text-primary" />
    }
];

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
]

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21h.01c5.46 0 9.91-4.45 9.91-9.91s-4.45-9.91-9.91-9.91zM17.51 15.3c-.28.48-.56.93-1.02 1.29s-1.02.54-1.62.54c-.54 0-1.08-.18-1.59-.48s-1.05-.72-2.22-1.92c-1.17-1.2-2.1-2.58-2.61-3.6s-.69-1.89-.69-2.73c0-.84.3-1.56.84-2.13s1.23-.87 2.04-.87h.12c.33 0 .63.09.87.27s.45.42.6.72.21.6.21.9c0 .3-.06.57-.18.81s-.27.45-.45.63-.36.33-.54.48c-.18.15-.3.27-.39.39s-.12.24-.03.39c.09.15.24.33.42.54s.39.42.63.66c.24.24.48.45.75.63s.51.33.72.45c.21.12.39.18.54.18.15 0 .3-.03.42-.09s.24-.15.33-.27.18-.24.24-.39.09-.27.09-.42c0-.15-.03-.3-.09-.42s-.12-.21-.21-.3c-.09-.09-.18-.15-.27-.21s-.18-.09-.27-.09h-.15c-.06 0-.12.01-.18.03s-.12.06-.15.09c-.03.03-.06.06-.09.09s-.06.06-.06.09c0 .03.01.06.03.09s.03.06.06.09c.27.18.54.36.81.54s.51.33.72.45c.21.12.39.18.54.18.15 0 .3-.03.42-.09s.24-.15.33-.27.18-.24.24-.39.09-.27.09-.42c0-.15-.03-.3-.09-.42s-.12-.21-.21-.3c-.09-.09-.18-.15-.27-.21s-.18-.09-.27-.09h-.15z" />
    </svg>
);

const TelegramIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="m9.417 15.181-.397 5.584c.568 0 .814-.244 1.109-.537l2.663-2.545 5.518 4.041c1.012.564 1.725.267 1.998-.931L23.999 4.41c.305-1.393-.5-1.993-1.423-1.637L.925 9.423c-1.37.564-1.35 1.34.244 1.637l5.483 1.724 12.44-7.854c.58-.35.978-.15.548.195z"/>
    </svg>
);


export default function AdvertisersPage() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] w-full">
        <Image
          src="/images/img-7.webp"
          alt="Business meeting in a tropical location"
          fill
          className="object-cover"
          priority
          data-ai-hint="business meeting"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white p-4">
          <h1 className="font-headline text-4xl font-bold md:text-6xl max-w-4xl">
            Reach Canggu’s Most Engaged Locals and Visitors.
          </h1>
          <p className="mt-4 max-w-2xl text-lg md:text-xl">
            Join hundreds of businesses growing through our print and digital magazine — seen by 10,000+ readers every month.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg">
                <Link href="#contact">
                    <Mail className="mr-2 h-5 w-5" />
                    Get Advertising Info
                </Link>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <Link href="/canggu-media-kit.pdf" target="_blank">
                    <Briefcase className="mr-2 h-5 w-5" />
                    View Our Media Kit
                </Link>
              </Button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto max-w-6xl px-4 py-16 md:py-24 space-y-24">
        
        {/* Data-Driven Insights Section */}
        <section>
          <div className="text-center mb-12">
              <h2 className="font-headline text-3xl font-bold">Data-Driven Insights</h2>
              <p className="mt-2 text-lg text-muted-foreground">
                  Understand our audience to maximize your campaign's impact.
              </p>
          </div>
          <Card className="shadow-lg">
            <CardHeader>
                <CardTitle>Audience Reach: Digital vs. Print</CardTitle>
                <CardDescription>Engagement across key local demographics.</CardDescription>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig} className="h-[250px] w-full">
                    <RechartsBarChart accessibilityLayer data={chartData}>
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey="category"
                            tickLine={false}
                            tickMargin={10}
                            axisLine={false}
                            tickFormatter={(value) => value.slice(0, 3)}
                        />
                        <YAxis />
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent indicator="dot" />}
                        />
                        <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
                        <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
                    </RechartsBarChart>
                </ChartContainer>
            </CardContent>
          </Card>
        </section>

        {/* Advertising Options Section */}
        <section>
          <div className="text-center mb-12">
              <h2 className="font-headline text-3xl font-bold">Our Advertising Solutions</h2>
              <p className="mt-2 text-lg text-muted-foreground">
                  Simple and effective ways to advertise in our print and digital editions.
              </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {advertisingOptions.map((option) => (
                <Card key={option.title} className="flex flex-col">
                    <CardHeader className="items-center text-center">
                        {option.icon}
                        <CardTitle>{option.title}</CardTitle>
                        <CardDescription>{option.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            {option.features.map(feature => (
                                <li key={feature} className="flex items-center">
                                    <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </CardContent>
                    <div className="p-6 pt-0">
                        <Button className="w-full" disabled>{option.price}</Button>
                    </div>
                </Card>
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section>
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
        </section>

        {/* Call to Action */}
        <section id="contact" className="rounded-lg bg-card p-10 text-center shadow-lg">
            <h3 className="font-headline text-3xl font-bold">Ready to Grow Your Business?</h3>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
                Our team is ready to help you create the perfect advertising campaign. Get in touch today to receive our media kit and discuss your options.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="w-full sm:w-auto bg-[#25D366] hover:bg-[#25D366]/90 text-white">
                <Link href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon className="mr-2 h-5 w-5" />
                  Contact on WhatsApp
                </Link>
              </Button>
              <Button asChild size="lg" className="w-full sm:w-auto bg-[#0088cc] hover:bg-[#0088cc]/90 text-white">
                <Link href="https://t.me/+6281234567890" target="_blank" rel="noopener noreferrer">
                  <TelegramIcon className="mr-2 h-5 w-5" />
                  Contact on Telegram
                </Link>
              </Button>
            </div>
        </section>
      </div>
    </div>
  );
}

    