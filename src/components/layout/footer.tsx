import { Logo } from '../logo';
import Link from 'next/link';
import { Instagram, Facebook } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t bg-card text-muted-foreground">
      <div className="container py-8">
        <div className="grid grid-cols-1 gap-10 text-center md:grid-cols-4 md:text-left">
          {/* Column 1: Logo and Address */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-2">
              <Logo />
            </div>
            <p className="mt-4 text-sm">
              Jl. Danau Poso 38, <br />
              Sanur 80228, Denpasar Selatan, <br />
              Bali, Indonesia
            </p>
            <div className="mt-4 flex gap-4">
              <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram className="h-6 w-6 text-muted-foreground hover:text-primary" />
              </Link>
              <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <Facebook className="h-6 w-6 text-muted-foreground hover:text-primary" />
              </Link>
            </div>
          </div>

          {/* Column 2: Direct Contact */}
          <div className="flex flex-col items-center text-sm md:items-start">
            <h3 className="font-headline font-semibold text-foreground">Direct Contact</h3>
            <p className="mt-2">
              To contact us directly please use the following email address:
            </p>
            <a href="mailto:cangguweekly@gmail.com" className="font-medium text-primary hover:underline">
              cangguweekly@gmail.com
            </a>
          </div>

          {/* Column 3: Legal Info */}
          <div className="flex flex-col items-center text-xs md:items-start md:col-span-2">
            <h3 className="font-headline font-semibold text-foreground">Company Details</h3>
            <div className="mt-2 space-y-1">
              <p>SIUP: NO.170/24/2143/DS/BPPTSP&PM/2016</p>
              <p>TDP. NO: 22.09.1.73.00392</p>
              <p>NPWP NO: 31.280.658.1-903.00</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 border-t pt-6 text-center text-xs md:flex md:items-center md:justify-between">
          <p className='mb-2 md:mb-0'>© 2025 by Canggu Weekly</p>
          <Link href="#" className="hover:text-primary">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
}
