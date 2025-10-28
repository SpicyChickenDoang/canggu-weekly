"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, Sun } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { SearchForm } from '../search-form';
import { Logo } from '../logo';

const navLinks = [
  // { href: '/', label: 'Current Issue' },
  // { href: '/archive', label: 'Archive' },
  // { href: '/favorites', label: 'Favorites' },
  { href: '/about', label: 'About Us' },
  { href: '/download-article', label: 'Download' },
  // { href: '/admin/image-suggester', label: 'Image Suggester' },
  { href: '/admin/upload-article', label: 'Upload Article' },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full bg-primary text-primary-foreground">
      <div className="container flex h-16 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Logo />
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'transition-colors hover:text-primary-foreground/80',
                  pathname === link.href ? 'text-primary-foreground' : 'text-primary-foreground/60'
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Mobile Nav */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden hover:bg-primary/80">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="bg-primary text-primary-foreground">
            <Link href="/" className="mb-8 flex items-center">
                <Logo />
                <span className="ml-2 font-bold font-headline">Canggu Weekly</span>
            </Link>
            <nav className="flex flex-col space-y-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'text-lg font-medium transition-colors hover:text-primary-foreground/80',
                    pathname === link.href ? 'text-primary-foreground' : 'text-primary-foreground/60'
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
        
        {/* <div className="flex flex-1 items-center justify-end space-x-4">
            <SearchForm />
        </div> */}
      </div>
    </header>
  );
}
