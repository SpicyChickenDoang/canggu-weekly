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
              <span className="font-headline text-lg font-bold">Canggu Current</span>
            </div>
            <p className="mt-4 text-center text-sm leading-loose text-muted-foreground md:text-left">
              © {new Date().getFullYear()} Canggu Current. All Rights Reserved.
            </p>
          </div>
          <div className="text-center md:text-left">
            <h3 className="font-headline font-semibold">About Us</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Your weekly guide to the vibrant life in Canggu. We share stories about local culture, surf, food, and the people who make this place unique.
            </p>
          </div>
          <div className="text-center md:text-right">
            <h3 className="font-headline font-semibold">Follow Us</h3>
            <div className="mt-2 flex justify-center gap-4 md:justify-end">
              <Link href="#" className="text-muted-foreground hover:text-primary">Facebook</Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">Instagram</Link>
              <Link href="#" className="text-muted-foreground hover:to-primary">Twitter</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
