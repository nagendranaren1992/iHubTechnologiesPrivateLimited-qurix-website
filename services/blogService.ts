// services/blogService.ts
const API_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "https://qurix.com";

export function getStrapiImageUrl(url: string | null | undefined): string {
    if (!url) return "";
    if (url.startsWith("http")) return url;
    return `${API_URL}${url.startsWith("/") ? "" : "/"}${url}`;
}

export type StrapiImage = {
    id: number;
    url: string;
    formats?: {
        thumbnail?: { url: string };
        small?: { url: string };
        medium?: { url: string };
        large?: { url: string };
    };
};

export type BlogAuthor = {
    id: number;
    initials: string;
    name: string;
    role: string;
};

export type SocialLink = {
    id: number;
    platform: string;
    url: string;
    iconName: string;
    iconImage?: { url: string };
};

export type BlogArticle = {
    id: number;
    title: string;
    slug: string;
    excerpt: string;
    content: string;
    category: string;
    categorySlug: string;
    date: string;
    shortDate: string;
    readTime: string;
    shortReadTime: string;
    searchTitle: string;
    cardBg: string;
    pillClass: string;
    pillLabel: string;
    icon: string;
    tags: string[];
    isFeatured: boolean;
    image: StrapiImage | null;
    author?: BlogAuthor;
    socialLinks: SocialLink[];
};

export type BlogData = {
    heroHeading: string;
    heroHighlight: string;
    heroDescription: string;
    searchPlaceholder: string;
    newsletterTitle: string;
    newsletterDescription: string;
    newsletterNote: string;
    trendingTitle: string;
    topicsTitle: string;
    topics: string[];
    categories: { id: number; label: string; slug: string }[];
    featuredPosts: BlogArticle[];
    posts: BlogArticle[];
    trendingArticles: {
        id: number;
        title: string;
        readTime: string;
        views: string;
        slug: string | null;
    }[];
};

export async function getBlogData(): Promise<BlogData> {
    const res = await fetch(`${API_URL}/api/blog?populate=*`);
    if (!res.ok) throw new Error(`Failed to fetch blog data: ${res.status}`);
    const json = await res.json();
    return json.data as BlogData;
}