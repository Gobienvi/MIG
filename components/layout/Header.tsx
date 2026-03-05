'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Your Story', href: '#yourstory' },
  { label: 'Testimonies', href: '#testimonies' },
  { label: 'Community', href: '#community' },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#faf8f6]/95 backdrop-blur border-b border-[#d6cec8]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/mumlogo.png"
            alt="Mums in Geosciences Logo"
            width={48}
            height={48}
            className="object-contain"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-4 py-2 text-sm font-medium text-[#546555] hover:text-[#4f3c40] transition-colors rounded-md hover:bg-[#e7dfd6]"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://forms.gle/HDeLcPXuku3UW5gz9"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="ml-2 bg-[#4f3c40] hover:bg-[#3d2d30] text-white">
              Share Your Story
            </Button>
          </a>
        </nav>

        {/* Mobile menu */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-64 bg-[#faf8f6]">
            <nav className="flex flex-col gap-2 mt-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="px-4 py-3 text-base font-medium text-[#546555] hover:text-[#4f3c40] rounded-md hover:bg-[#e7dfd6] transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://forms.gle/HDeLcPXuku3UW5gz9"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="mt-2"
              >
                <Button className="w-full bg-[#4f3c40] hover:bg-[#3d2d30] text-white">
                  Share Your Story
                </Button>
              </a>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
