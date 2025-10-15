import sanitizeHtml from 'sanitize-html';
import {prisma} from '@/lib/prisma';
import {notFound} from 'next/navigation';

const getPageInfo = async (identifier: string) => {
  const article = await prisma.news.findUnique({
    where: {identifier},
    include: {tag: true},
  });

  if (!article) return notFound();

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
