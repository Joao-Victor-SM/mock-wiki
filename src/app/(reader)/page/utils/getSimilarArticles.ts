import {prisma} from '@/lib/prisma';
import {News} from '@prisma/client';
import getWordSetFromText from './getWordSetFromText';

export default async function getSimilarArticles(
  article: News,
): Promise<News[]> {
  const sameTagNews = await prisma.news.findMany({
    where: {
      tagId: article.tagId,
      identifier: {not: article.identifier},
    },
  });
  const articleWordSet = getWordSetFromText(article.content);
  const similarArticles = sameTagNews
    .map((article) => {
      const neighborWordSet = article.content;
      const neighborWordArr = [...neighborWordSet];

      const overlapAmount = neighborWordArr.filter((word) =>
        articleWordSet.has(word),
      ).length;
      return {...article, overlapAmount};
    })
    .sort((a, b) => b.overlapAmount - a.overlapAmount)
    .slice(0, 3);
  return similarArticles;
}
