import GoogleMaps from "../GoogleMaps";

export function StatsSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="mb-4 font-headline text-3xl font-bold">Our Distribution Network</h2>
        <p className="mb-12 max-w-2xl mx-auto text-muted-foreground">
          Find our magazine at these fine locations across the island.
        </p>
        <GoogleMaps />
      </div>
    </section>
  );
}
