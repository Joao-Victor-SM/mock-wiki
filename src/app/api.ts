import axios from 'axios';

const baseURL =
  process.env.NEXT_PUBLIC_BASE_URL || // for production/deploy
  (typeof window !== 'undefined'
    ? '' // client-side can use relative URLs
    : 'http://localhost:3000'); // server-side fallback

export const api = axios.create({
  baseURL,
  headers: {
    'Cache-Control': 'no-store',
  },
});
