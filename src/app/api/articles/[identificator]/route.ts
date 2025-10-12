import {prisma} from '@/lib/prisma';
import {NextResponse} from 'next/server';

interface Params {
  identifier: string;
}

export async function GET(req: Request, {params}: {params: Params}) {
  try {
    const {identifier} = params;
    const selectedArticle = await prisma.news.findUnique({
      where: {identifier},
    });

    return NextResponse.json(selectedArticle);
  } catch (error) {
    console.error(error);
    return NextResponse.json({error: 'Failed to fetch news'}, {status: 500});
  }
}
