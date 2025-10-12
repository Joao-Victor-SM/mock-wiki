import {cookies} from 'next/headers';
import jwt, {JwtPayload} from 'jsonwebtoken';
import {redirect} from 'next/navigation';

const JWT_SECRET = process.env.JWT_SECRET!;

export async function requireAuth(): Promise<JwtPayload> {
  const cookieStore = await cookies();

  const token = cookieStore.get('auth_token')?.value;

  if (!token) {
    redirect('/login');
  }

  try {
    const payload = jwt.verify(token, JWT_SECRET) as JwtPayload;
    return payload;
  } catch {
    redirect('/login');
  }
}
