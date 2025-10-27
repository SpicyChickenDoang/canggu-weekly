import { Logo } from '../logo';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t bg-card">
      <div className="container py-10">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-2">
              <Logo />
              <span className="font-headline text-lg font-bold">Canggu Weekly</span>
            </div>
            <p className="mt-4 text-center text-sm leading-loose text-muted-foreground md:text-left">
              © {new Date().getFullYear()} Canggu Weekly. All Rights Reserved.
            </p>
          </div>

          <div className="text-center">
            <h3 className="font-headline font-semibold">Follow Us</h3>
            <div className="mt-2 flex justify-center gap-4">
              <Link href="#" className="text-muted-foreground hover:text-primary">Facebook</Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">Instagram</Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">Twitter</Link>
            </div>
          </div>

          <div className="text-center md:text-right">
            <h3 className="font-headline font-semibold">Navigate</h3>
            <div className="mt-2 flex flex-col items-center gap-2 md:items-end">
              <Link href="/about" className="text-muted-foreground hover:text-primary">About</Link>
              <Link href="/download-article" className="text-muted-foreground hover:text-primary">Download</Link>
              <Link href="/contact" className="text-muted-foreground hover:text-primary">Contact</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
