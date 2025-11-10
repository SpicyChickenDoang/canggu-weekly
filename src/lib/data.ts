import type { Article, Issue } from './types';
import { PlaceHolderImages } from './placeholder-images';
// import { cache } from 'react';

const issues: Issue[] = [
  {
    id: 1,
    title: 'Vol. 1: The Heart of Canggu',
    publicationDate: '2024-07-22',
    coverImageUrl: PlaceHolderImages[0].imageUrl,
    coverImageHint: PlaceHolderImages[0].imageHint,
  },
  {
    id: 2,
    title: 'Vol. 2: Echoes of the Ocean',
    publicationDate: '2024-07-15',
    coverImageUrl: PlaceHolderImages[1].imageUrl,
    coverImageHint: PlaceHolderImages[1].imageHint,
  },
  {
    id: 3,
    title: 'Vol. 3: Sunset & Serenity',
    publicationDate: '2024-07-08',
    coverImageUrl: PlaceHolderImages[2].imageUrl,
    coverImageHint: PlaceHolderImages[2].imageHint,
  },
];

const articles: Article[] = [
  {
    id: 1,
    slug: 'canggus-best-surf-spots',
    title: "Canggu's Best Cold-Pressed Juice Spots",
    author: 'Admin',
    publicationDate: '2024-07-22',
    excerpt: 'From gentle waves for beginners to challenging breaks for the pros, discover the top surf spots in Canggu.',
    content: `<p>Canggu is a surfer's paradise, offering a variety of waves that cater to all skill levels. Whether you're just starting out or you're a seasoned pro, you'll find a spot that's perfect for you.</p>
    <h3 class="font-headline text-2xl font-bold my-4">Batu Bolong Beach</h3>
    <p>Batu Bolong is the go-to spot for beginners and longboarders. The waves here are typically slow and rolling, making it easy to catch them and practice your balance. You'll find plenty of surf schools along the beach offering lessons and board rentals.</p>
    <h3 class="font-headline text-2xl font-bold my-4">Echo Beach</h3>
    <p>For more experienced surfers, Echo Beach offers faster, more powerful waves. It's a reef break, so it's best to be cautious, but the reward is a thrilling ride. The beach is also famous for its black sand and vibrant sunset barbecue scene.</p>
    <h3 class="font-headline text-2xl font-bold my-4">Berawa Beach</h3>
    <p>Berawa Beach is a great intermediate spot. It's less crowded than Batu Bolong but still offers forgiving waves. It's a mix of sand and reef break, providing a good challenge for those looking to step up their game.</p>`,
    imageUrl: PlaceHolderImages[3].imageUrl,
    imageHint: PlaceHolderImages[3].imageHint,
    issueNumber: 1,
  },
  {
    id: 2,
    slug: 'a-guide-to-canggus-cafe-culture',
    title: "Canggu's Best Pizza Palace",
    author: 'Admin',
    publicationDate: '2024-07-22',
    excerpt: 'Explore the bustling cafe scene of Canggu, where great coffee, healthy food, and digital nomad culture collide.',
    content: `<p>Canggu's cafe culture is second to none. It's a place where digital nomads, surfers, and health enthusiasts come together to enjoy delicious food and amazing coffee. Here are a few must-visit spots.</p>
    <h3 class="font-headline text-2xl font-bold my-4">Crate Cafe</h3>
    <p>A Canggu institution, Crate Cafe is famous for its massive, beautifully presented breakfast plates and smoothie bowls. The vibe is industrial-chic, and it's always buzzing with energy.</p>
    <h3 class="font-headline text-2xl font-bold my-4">The Shady Shack</h3>
    <p>If you're looking for vegetarian and vegan delights, The Shady Shack is your spot. Tucked away with a view of the rice paddies, it offers a tranquil escape with a menu full of colorful, healthy dishes.</p>
    <h3 class="font-headline text-2xl font-bold my-4">Gimme Shelter</h3>
    <p>Known for its rock 'n' roll vibe and excellent coffee, Gimme Shelter is a great place to hang out. They often have live music in the evenings, making it a perfect spot to transition from day to night.</p>`,
    imageUrl: PlaceHolderImages[4].imageUrl,
    imageHint: PlaceHolderImages[4].imageHint,
    issueNumber: 1,
  },
  {
    id: 3,
    slug: 'discover-tanah-lot-temple',
    title: 'Have You Tried Il Forno?',
    author: 'Admin',
    publicationDate: '2024-07-22',
    excerpt: 'Just a short drive from Canggu, the iconic sea temple of Tanah Lot offers one of Bali’s most breathtaking sunset views.',
    content: `<p>No trip to the Canggu area is complete without a visit to Tanah Lot. This stunning sea temple is perched on a rock formation just off the coast and is one of Bali's most important landmarks.</p>
    <p class="my-4">The temple is a popular spot for tourists, especially in the late afternoon. As the sun begins to set, the sky erupts in a riot of color, creating a spectacular backdrop for the temple silhouette. It's a truly magical experience.</p>
    <p>While non-Balinese visitors cannot enter the main temple itself, you can walk out to it during low tide. The surrounding area has walking paths, gardens, and plenty of spots to sit and enjoy the view.</p>`,
    imageUrl: PlaceHolderImages[5].imageUrl,
    imageHint: PlaceHolderImages[5].imageHint,
    issueNumber: 1,
  },
  {
    id: 4,
    slug: 'local-markets-of-canggu',
    title: 'The Best Local Markets in and Around Canggu',
    author: 'Admin',
    publicationDate: '2024-07-22',
    excerpt: 'From organic produce to handmade crafts, Canggu’s markets are a treasure trove for shoppers.',
    content: `<p>Canggu's markets are a vibrant reflection of the local culture and community. They are the perfect place to find fresh produce, unique souvenirs, and connect with local artisans.</p>
    <h3 class="font-headline text-2xl font-bold my-4">Samadi Bali Market</h3>
    <p>Every Sunday, Samadi Bali hosts a bustling organic farmers' market. It's a great place to stock up on fresh fruits, vegetables, and artisanal goods like bread, cheese, and jam. The atmosphere is lively and community-focused.</p>
    <h3 class="font-headline text-2xl font-bold my-4">Love Anchor Market</h3>
    <p>Located in the heart of Canggu, Love Anchor is a daily market that comes alive at night. It's an Instagram-worthy spot with its iconic ship-themed structure, selling a wide range of clothing, jewelry, and homewares.</p>`,
    imageUrl: PlaceHolderImages[6].imageUrl,
    imageHint: PlaceHolderImages[6].imageHint,
    issueNumber: 1,
  },
  {
    id: 5,
    slug: 'the-rise-of-street-art',
    title: 'Canggu’s Concrete Canvases: The Rise of Street Art',
    author: 'Admin',
    publicationDate: '2024-07-15',
    excerpt: 'Explore the colorful murals and graffiti that have turned Canggu’s streets into a dynamic outdoor art gallery.',
    content: '<p>Content for Canggu’s Concrete Canvases...</p>',
    imageUrl: PlaceHolderImages[7].imageUrl,
    imageHint: PlaceHolderImages[7].imageHint,
    issueNumber: 2,
  },
  {
    id: 6,
    slug: 'yoga-studios-for-zen',
    title: 'Finding Your Zen: Top Yoga Studios in Canggu',
    author: 'Admin',
    publicationDate: '2024-07-15',
    excerpt: 'Unwind and reconnect with your inner self at these top-rated yoga studios offering a range of styles and classes.',
    content: '<p>Content for Finding Your Zen...</p>',
    imageUrl: PlaceHolderImages[8].imageUrl,
    imageHint: PlaceHolderImages[8].imageHint,
    issueNumber: 2,
  },
  {
    id: 7,
    slug: 'traditional-balinese-cuisine',
    title: 'A Taste of Tradition: Where to Find Authentic Balinese Cuisine',
    author: 'Admin',
    publicationDate: '2024-07-08',
    excerpt: 'Step away from the trendy cafes and discover the rich, spicy flavors of traditional Balinese food at these local warungs.',
    content: '<p>Content for A Taste of Tradition...</p>',
    imageUrl: PlaceHolderImages[9].imageUrl,
    imageHint: PlaceHolderImages[9].imageHint,
    issueNumber: 3,
  },
];

export function getIssues(): Issue[] {
  return issues;
}

export function getArticles(): Article[] {
  return articles;
}

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug);
}

export function getArticlesByIssue(issueNumber: number): Article[] {
  return articles.filter((article) => article.issueNumber === issueNumber);
}

export function getFeaturedArticle(issueNumber: number): Article | undefined {
  return articles.find((article) => article.issueNumber === issueNumber);
}

export function searchArticles(query: string): Article[] {
  if (!query) {
    return [];
  }
  const lowercasedQuery = query.toLowerCase();
  return articles.filter(
    (article) =>
      article.title.toLowerCase().includes(lowercasedQuery) ||
      article.content.toLowerCase().includes(lowercasedQuery) ||
      article.excerpt.toLowerCase().includes(lowercasedQuery)
  );
}

export async function getArticlesList() {
    const res = await fetch('/api/pdfs', {
        next: { 
            revalidate: 3600 * 24
        } 
    });

    if (!res.ok) {
        throw new Error(`Failed to load PDFs: Server responded with status ${res.status}`);
    }
    const data = await res.json();
    return data || [];
}
