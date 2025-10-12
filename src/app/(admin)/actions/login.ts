'use server'; // must be at the **top of the file**

import {prisma} from '@/lib/prisma';
import {verifyPassword} from '@/lib/auth';
import {redirect} from 'next/navigation';

interface LoginResult {
  error?: string;
}

export async function login(formData: FormData): Promise<LoginResult> {
  const username = formData.get('username')?.toString() || '';
  const password = formData.get('password')?.toString() || '';

  const user = await prisma.user.findUnique({where: {username}});

  if (!user) return {error: 'Invalid username or password'};

  const valid = await verifyPassword(password, user.password);
  if (!valid) return {error: 'Invalid username or password'};

  redirect('/dashboard');
}
