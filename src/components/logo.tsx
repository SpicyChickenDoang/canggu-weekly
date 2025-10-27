'use client';

import { Sun } from "lucide-react";
import { usePathname } from "next/navigation";

export function Logo() {
    const pathname = usePathname();
    const isDarkHeader = pathname.startsWith('/_');
    return <Sun className="h-6 w-6 text-primary-foreground" />;
}
