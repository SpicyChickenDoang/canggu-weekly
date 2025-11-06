'use client';

import { Eye, Globe, Newspaper, MapPin } from 'lucide-react';
import { Users, Smile, Coffee } from 'lucide-react';

export function AudienceStatsSection() {
    return (
        <section className="bg-card border-black mx-5 my-[10px] border-dashed border-[3px]">
            <div className="container mx-auto max-w-6xl px-4 py-16 md:py-24">

                <div className="text-center mb-12 md:mb-16">
                    <h2 className="font-headline text-3xl font-bold">Why Advertise With Us?</h2>
                    <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                        We connect your brand with a vibrant, fast-growing community that loves local dining, fitness, wellness, and culture.
                    </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">

                    <div className="rounded-lg bg-white p-6 border">
                        <Eye className="mx-auto h-8 w-8 text-black" />
                        <p className="mt-2 text-2xl font-bold">12,000+</p>
                        <p className="text-sm text-muted-foreground">Monthly Readership</p>
                    </div>

                    <div className="rounded-lg bg-white p-6 border">
                        <Globe className="mx-auto h-8 w-8 text-black" />
                        <p className="mt-2 text-2xl font-bold">4,500+</p>
                        <p className="text-sm text-muted-foreground">Online Readers</p>
                    </div>

                    <div className="rounded-lg bg-white p-6 border">
                        <Newspaper className="mx-auto h-8 w-8 text-black" />
                        <p className="mt-2 text-2xl font-bold">100+</p>
                        <p className="text-sm text-muted-foreground">Print Distribution</p>
                    </div>

                    <div className="rounded-lg bg-white p-6 border">
                        <MapPin className="mx-auto h-8 w-8 text-black" />
                        <p className="mt-2 text-2xl font-bold">4+</p>
                        <p className="text-sm text-muted-foreground">Locations</p>
                    </div>

                    <div className="rounded-lg bg-white p-6 border">
                        <Smile className="mx-auto h-8 w-8 text-black" />
                        <p className="mt-2 text-2xl font-bold">300+</p>
                        <p className="text-sm text-muted-foreground">Happy Clients</p>
                    </div>

                    <div className="rounded-lg bg-white p-6 border">
                        <Users className="mx-auto h-8 w-8 text-black" />
                        <p className="mt-2 text-2xl font-bold">729</p>
                        <p className="text-sm text-muted-foreground">Editions Published</p>
                    </div>

                    <div className="rounded-lg bg-white p-6 border">
                        <Newspaper className="mx-auto h-8 w-8 text-black" /> {/* Changed icon to keep it consistent with the small ones */}
                        <p className="mt-2 text-2xl font-bold">~37,000,000</p>
                        <p className="text-sm text-muted-foreground">Single Pages Printed</p>
                    </div>

                    <div className="rounded-lg bg-white p-6 border">
                        <Coffee className="mx-auto h-8 w-8 text-black" />
                        <p className="mt-2 text-2xl font-bold">4,374</p>
                        <p className="text-sm text-muted-foreground">Cups of Coffee Sipped</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
