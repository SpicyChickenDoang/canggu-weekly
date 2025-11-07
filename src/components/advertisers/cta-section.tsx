
'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21h.01c5.46 0 9.91-4.45 9.91-9.91s-4.45-9.91-9.91-9.91zM17.51 15.3c-.28.48-.56.93-1.02 1.29s-1.02.54-1.62.54c-.54 0-1.08-.18-1.59-.48s-1.05-.72-2.22-1.92c-1.17-1.2-2.1-2.58-2.61-3.6s-.69-1.89-.69-2.73c0-.84.3-1.56.84-2.13s1.23-.87 2.04-.87h.12c.33 0 .63.09.87.27s.45.42.6.72.21.6.21.9c0 .3-.06.57-.18.81s-.27.45-.45.63-.36.33-.54.48c-.18.15-.3.27-.39.39s-.12.24-.03.39c.09.15.24.33.42.54s.39.42.63.66c.24.24.48.45.75.63s.51.33.72.45c.21.12.39.18.54.18.15 0 .3-.03.42-.09s.24-.15.33-.27.18-.24.24-.39.09-.27.09-.42c0-.15-.03-.3-.09-.42s-.12-.21-.21-.3c-.09-.09-.18-.15-.27-.21s-.18-.09-.27-.09h-.15c-.06 0-.12.01-.18.03s-.12.06-.15.09c-.03.03-.06.06-.09.09s-.06.06-.06.09c0 .03.01.06.03.09s.03.06.06.09c.27.18.54.36.81.54s.51.33.72.45c.21.12.39.18.54.18.15 0 .3-.03.42-.09s.24-.15.33-.27.18-.24.24-.39.09-.27.09-.42c0-.15-.03-.3-.09-.42s-.12-.21-.21-.3c-.09-.09-.18-.15-.27-.21s-.18-.09-.27-.09h-.15z" />
  </svg>
);

const TelegramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="m9.417 15.181-.397 5.584c.568 0 .814-.244 1.109-.537l2.663-2.545 5.518 4.041c1.012.564 1.725.267 1.998-.931L23.999 4.41c.305-1.393-.5-1.993-1.423-1.637L.925 9.423c-1.37.564-1.35 1.34.244 1.637l5.483 1.724 12.44-7.854c.58-.35.978-.15.548.195z" />
  </svg>
);

export function CtaSection() {
  return (
    <section id="contact-buttons" className="bg-card p-10 text-center shadow-lg border-black mx-5 my-[10px] border-dashed border-[3px]">
      <div>
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
      </div>
    </section>
  );
}
