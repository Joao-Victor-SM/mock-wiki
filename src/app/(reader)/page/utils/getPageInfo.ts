import sanitizeHtml from 'sanitize-html';
import {prisma} from '@/lib/prisma';

const getPageInfo = async (identifier: string) => {
  const article = await prisma.news.findUnique({
    where: {identifier},
    include: {tag: true},
  });

  if (!article) return {article: null};

  const sameTagNews = article.tagId
    ? await prisma.news.findMany({
        where: {
          tagId: article.tagId,
          identifier: {not: identifier},
        },
        select: {
          id: true,
          title: true,
          preview: true,
          content: true,
          identifier: true,
        },
      })
    : [];
  const safeContent = sanitizeHtml(article.content, {
    allowedTags: sanitizeHtml.defaults.allowedTags.concat([
      'img',
      'h1',
      'h2',
      'h3',
    ]),
    allowedAttributes: {
      ...sanitizeHtml.defaults.allowedAttributes,
      img: ['src', 'alt'],
    },
  });

  return {
    article: {...article, safeContent},
  };
};

export default getPageInfo;
