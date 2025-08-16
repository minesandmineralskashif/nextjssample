// helper/siteMeta.js

export const SITE_NAME = "My Next.js Site";

export const DEFAULT_OG = {
  title: SITE_NAME,
  description: "Welcome to my site",
  image: "/home.png", // relative path in /public
  type: "website",
};

// Add articles here (source of truth)
export const ARTICLES = {
  article1: {
    title: "Article 1 - My Blog",
    description: "This is the first blog post",
    image: "/article1.jpg",
    type: "article",
  },
  article2: {
    title: "Article 2 - My Blog",
    description: "This is the second blog post",
    image: "/article2.jpg",
    type: "article",
  },
};

export function buildHomeMeta(baseUrl) {
  return {
    title: DEFAULT_OG.title,
    description: DEFAULT_OG.description,
    url: baseUrl,
    image: absolutize(DEFAULT_OG.image, baseUrl),
    type: DEFAULT_OG.type,
  };
}

export function buildArticleMeta(slug, baseUrl) {
  const a = ARTICLES[slug];
  if (!a) return null;
  return {
    title: a.title,
    description: a.description,
    url: `${baseUrl}/blog/${slug}`,
    image: absolutize(a.image, baseUrl),
    type: a.type || "article",
  };
}

// --- helpers ---
function absolutize(pathOrUrl, baseUrl) {
  if (!pathOrUrl) return "";
  if (/^https?:\/\//i.test(pathOrUrl)) return pathOrUrl;
  return `${baseUrl}${pathOrUrl.startsWith("/") ? "" : "/"}${pathOrUrl}`;
}
