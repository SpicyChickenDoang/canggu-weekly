import { Logo } from '../logo';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t bg-card text-muted-foreground">
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {/* Column 1: Logo */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-2">
              <Logo />
              <span className="font-headline text-lg font-bold text-foreground">Canggu Weekly</span>
            </div>
          </div>

          {/* Column 2: Direct Contact */}
          <div className="text-center text-sm md:text-left">
            <h3 className="font-headline font-semibold text-foreground">Direct Contact</h3>
            <p className="mt-2">
              To contact us directly please use the following email address:
            </p>
            <a href="mailto:cangguweekly@gmail.com" className="font-medium text-foreground hover:underline">
              cangguweekly@gmail.com
            </a>
            <p className="mt-4">
                Jl. Danau Poso 38, <br/>
                Sanur 80228, Denpasar Selatan, <br/>
                Bali, Indonesia
            </p>
          </div>
          
          {/* Column 3: Legal Info */}
          <div className="text-center text-xs text-muted-foreground md:text-right">
             <p>SIUP: NO.170/24/2143/DS/BPPTSP&PM/2016</p>
             <p>TDP. NO: 22.09.1.73.00392</p>
             <p>NPWP NO: 31.280.658.1-903.00</p>
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
