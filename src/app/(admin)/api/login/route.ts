import {prisma} from '@/lib/prisma';
import {verifyPassword} from '@/lib/auth';
import {NextResponse} from 'next/server';

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const username = formData.get('username')?.toString() || '';
    const password = formData.get('password')?.toString() || '';

    const user = await prisma.user.findUnique({where: {username}});
    if (!user) {
      return NextResponse.redirect(new URL('/login?error=invalid', req.url));
    }

    const valid = await verifyPassword(password, user.password);
    if (!valid) {
      return NextResponse.redirect(new URL('/login?error=invalid', req.url));
    }

    // TODO: set cookie/session here if you want persistent login

    // login success → redirect
    return NextResponse.redirect(new URL('/dashboard', req.url));
  } catch (err) {
    console.error(err);
    return NextResponse.redirect(new URL('/login?error=server', req.url));
  }
}
