'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Mail, Briefcase } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden flex justify-center items-center mb-8">
      <Image
        src="/images/2-min.webp"
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
          {/* <Button asChild size="lg" variant="secondary">
            <Link href="/docs/pricing.pdf" target="_blank">
              <Briefcase className="mr-2 h-5 w-5" />
              Get the Media Kit
            </Link>
          </Button> */}
        </div>
      </div>
    </section>
  );
}
