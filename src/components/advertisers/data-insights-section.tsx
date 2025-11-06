'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { Bar, BarChart as RechartsBarChart, XAxis, YAxis, CartesianGrid } from 'recharts';

const chartData = [
  { category: 'Foodies', desktop: 186, mobile: 80 },
  { category: 'Surfers', desktop: 305, mobile: 200 },
  { category: 'Yogis', desktop: 237, mobile: 120 },
  { category: 'Expats', desktop: 73, mobile: 190 },
  { category: 'Tourists', desktop: 209, mobile: 130 },
];

const chartConfig = {
  desktop: {
    label: 'Digital',
    color: 'hsl(var(--chart-1))',
  },
  mobile: {
    label: 'Print',
    color: 'hsl(var(--chart-2))',
  },
};

export function DataInsightsSection() {
    return (
        <section>
          <div className="text-center mb-12">
              <h2 className="font-headline text-3xl font-bold">Data-Driven Insights</h2>
              <p className="mt-2 text-lg text-muted-foreground">
                  Understand our audience to maximize your campaign's impact.
              </p>
          </div>
          <Card className="shadow-lg">
            <CardHeader>
                <CardTitle>Audience Reach: Digital vs. Print</CardTitle>
                <CardDescription>Engagement across key local demographics.</CardDescription>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig} className="h-[250px] w-full">
                    <RechartsBarChart accessibilityLayer data={chartData}>
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey="category"
                            tickLine={false}
                            tickMargin={10}
                            axisLine={false}
                            tickFormatter={(value) => value.slice(0, 3)}
                        />
                        <YAxis />
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent indicator="dot" />}
                        />
                        <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
                        <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
                    </RechartsBarChart>
                </ChartContainer>
            </CardContent>
          </Card>
        </section>
    )
}
