"use client"

import Image from 'next/image';
import { getArticlesByIssue, getIssues } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { format } from 'date-fns';
import { useIsMobile } from '@/hooks/use-mobile';

import HeroSection from './hero-section';
import HeroMobile from './hero-mobile';

export function Hero() {
  const isMobile = useIsMobile();
  if (isMobile) {
    return <HeroMobile />;
  } else {
    return <HeroSection />;
  }
}
