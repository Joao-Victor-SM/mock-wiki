import {prisma} from '@/lib/prisma';
import {verifyPassword} from '@/lib/auth';
import {NextResponse} from 'next/server';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET!;
export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const username = String(formData.get('username') ?? '');
    const password = String(formData.get('password') ?? '');

    const user = await prisma.user.findUnique({where: {username}});
    if (!user)
      return NextResponse.redirect(new URL('/login?error=invalid', req.url));

    const valid = await verifyPassword(password, user.password);
    if (!valid)
      return NextResponse.redirect(new URL('/login?error=invalid', req.url));

    const token = jwt.sign(
      {userId: user.id, username: user.username},
      JWT_SECRET,
      {expiresIn: '7d'},
    );

    const response = NextResponse.redirect(new URL('/dashboard', req.url));
    response.cookies.set({
      name: 'auth_token',
      value: token,
      httpOnly: true,
      path: '/',
      maxAge: 60 * 60 * 24 * 7,
      sameSite: 'lax',
      secure: process.env.NODE_ENV === 'production',
    });

    return response;
  } catch (err) {
    console.error(err);
    return NextResponse.redirect(new URL('/login?error=server', req.url));
  }
}
