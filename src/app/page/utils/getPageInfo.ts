import sanitizeHtml from 'sanitize-html';
import {prisma} from '@/lib/prisma';

const getPageInfo = async (identifier: string) => {
  const article = await prisma.news.findUnique({
    where: {identificator: identifier},
    include: {tag: true},
  });

  if (!article) return {article: null};

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
