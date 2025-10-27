export interface Article {
  id: number;
  slug: string;
  title: string;
  author: string;
  publicationDate: string;
  excerpt: string;
  content: string;
  imageUrl: string;
  imageHint: string;
  issueNumber: number;
}

export interface Issue {
  id: number;
  title: string;
  publicationDate: string;
  coverImageUrl: string;
  coverImageHint: string;
}
