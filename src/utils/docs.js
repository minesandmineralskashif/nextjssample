import { readdirSync, readFileSync } from 'fs';
import matter from 'gray-matter';
import { join } from 'path';

const articlesDirectory = join(process.cwd(), '_docs');

export const getArticleSlugs = (lang = '') => {
  if (lang) {
    const articlesDirectoryInOtherLang = join(process.cwd(), '_docs', lang);
    return readdirSync(articlesDirectoryInOtherLang);
  }

  return readdirSync(articlesDirectory);
};

export const getArticleBySlug = (slug, fields = [], lang = '') => {
  const realSlug = slug.replace(/\.md$/, '');
  let fullPath = join(articlesDirectory, `${realSlug}.md`);
  if (lang) {
    fullPath = join(articlesDirectory, lang, `${realSlug}.md`);
  }

  const fileContents = readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const article = {};

  fields.forEach((field) => {
    if (field === 'slug') {
      article[field] = realSlug;
    }

    if (field === 'content') {
      article[field] = content;
    }

    if (data[field]) {
      article[field] = data[field];
    }
  });

  return article;
};

export const getArticles = (fields = [], lang = '') => {
  let slugs = getArticleSlugs(lang);
  if (!lang) {
    slugs = slugs.filter(slug => slug !== 'es');
  }
  const arrDirectories = [
    'assets',
  ];

  if (!lang) {
    arrDirectories.push('es');
  }

  slugs = slugs.filter(slug => arrDirectories.includes(slug) === false);
  return slugs.map(slug => getArticleBySlug(slug, fields));
};
