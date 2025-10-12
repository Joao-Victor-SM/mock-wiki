import {CardSectionInterface} from '@/app/(reader)/types/Cards';
import {prisma} from '@/lib/prisma';
import {NextResponse} from 'next/server';

export async function GET() {
  try {
    const tags = await prisma.tag.findMany({
      include: {
        news: {
          orderBy: {createdAt: 'desc'},
        },
      },
    });

    const sections = tags.map((tag) => ({
      title: tag.name,
      cards: tag.news,
    }));
    console.log(sections);
    return NextResponse.json<CardSectionInterface[]>(sections);
  } catch (error) {
    console.error(error);
    return NextResponse.json({error: 'Failed to fetch news'}, {status: 500});
  }
}
