'use client';

import { Eye, Globe, Newspaper, MapPin } from 'lucide-react';

export function AudienceStatsSection() {
    return (
        <section className="bg-muted border-black mx-5 my-[10px] border-dashed border-[3px]">
            <div className="container mx-auto max-w-6xl px-4 py-16 md:py-24">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="md:pr-12">
                        <h2 className="font-headline text-3xl font-bold">Why Advertise With Us?</h2>
                        <p className="mt-4 text-lg text-muted-foreground">
                            We connect your brand with a vibrant, fast-growing community that loves local dining, fitness, wellness, and culture.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-8 text-center">
                        <div className="rounded-lg bg-card p-4">
                            <Eye className="mx-auto h-8 w-8 text-primary" />
                            <p className="mt-2 text-2xl font-bold">12,000+</p>
                            <p className="text-sm text-muted-foreground">Monthly Readership</p>
                        </div>
                        <div className="rounded-lg bg-card p-4">
                            <Globe className="mx-auto h-8 w-8 text-primary" />
                            <p className="mt-2 text-2xl font-bold">4,500+</p>
                            <p className="text-sm text-muted-foreground">Online Readers</p>
                        </div>
                        <div className="rounded-lg bg-card p-4">
                            <Newspaper className="mx-auto h-8 w-8 text-primary" />
                            <p className="mt-2 text-2xl font-bold">100+</p>
                            <p className="text-sm text-muted-foreground">Print Distribution</p>
                        </div>
                        <div className="rounded-lg bg-card p-4">
                            <MapPin className="mx-auto h-8 w-8 text-primary" />
                            <p className="mt-2 text-2xl font-bold">4+</p>
                            <p className="text-sm text-muted-foreground">Locations</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
