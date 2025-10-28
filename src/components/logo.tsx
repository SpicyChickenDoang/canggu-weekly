'use client';

import { Sun } from "lucide-react";
import { usePathname } from "next/navigation";
import Image from "next/image";

export function Logo() {
    const pathname = usePathname();
    const isDarkHeader = pathname.startsWith('/_');
    return <Image
        src={"/images/logo-stacked.png"}
        width={100}
        height={100}
        alt="canggu weekly logo"
    />;
}
