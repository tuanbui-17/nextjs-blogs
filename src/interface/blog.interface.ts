export interface BLOG {
    id: number;
    documentId: string;
    title: string;
    description: string;
    slug: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    type: string;
    readTime: string;
    cover: {
      url: string;
    };
    author: {
      name: string;
    };
    category: {
      name: string;
      slug: string;
    };
    // blocks: any TODO: Add blocks type
}