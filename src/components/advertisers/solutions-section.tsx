'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Newspaper, Users, Target, CheckCircle } from 'lucide-react';

const advertisingOptions = [
    {
        title: "Digital Feature",
        description: "A dedicated article on our website and social media, showcasing your business with professional photos and storytelling.",
        features: ["Full-length article", "Social media blast", "Included in weekly newsletter", "Performance analytics"],
        price: "Contact for Pricing",
        icon: <Newspaper className="h-8 w-8 mb-4 text-primary" />
    },
    {
        title: "Print Advertisement",
        description: "Feature your brand in our widely distributed weekly print magazine, reaching thousands of readers across Canggu.",
        features: ["Full-page, half-page, or quarter-page", "Prime placement options", "High-quality print", "250+ distribution points"],
        price: "Starting from $150",
        icon: <Users className="h-8 w-8 mb-4 text-primary" />
    },
    {
        title: "Event Promotion",
        description: "Promote your event to our engaged audience through our digital and print channels for maximum visibility.",
        features: ["Featured on our events calendar", "Social media promotion", "Mention in print edition", "Targeted reach"],
        price: "Custom Packages",
        icon: <Target className="h-8 w-8 mb-4 text-primary" />
    }
];

export function SolutionsSection() {
    return (
        <section className="border-black mx-5 my-[10px] border-dashed border-[3px] py-16 md:py-24">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="text-center mb-12">
                <h2 className="font-headline text-3xl font-bold">Our Advertising Solutions</h2>
                <p className="mt-2 text-lg text-muted-foreground">
                    Simple and effective ways to advertise in our print and digital editions.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {advertisingOptions.map((option) => (
                  <Card key={option.title} className="flex flex-col">
                      <CardHeader className="items-center text-center">
                          {option.icon}
                          <CardTitle>{option.title}</CardTitle>
                          <CardDescription>{option.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="flex-grow">
                          <ul className="space-y-2 text-sm text-muted-foreground">
                              {option.features.map(feature => (
                                  <li key={feature} className="flex items-center">
                                      <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                                      {feature}
                                  </li>
                              ))}
                          </ul>
                      </CardContent>
                      <div className="p-6 pt-0">
                          <Button className="w-full" disabled>{option.price}</Button>
                      </div>
                  </Card>
              ))}
            </div>
          </div>
        </section>
    );
}
