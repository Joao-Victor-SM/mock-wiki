import axios from 'axios';

const baseURL =
  process.env.NEXT_PUBLIC_BASE_URL ||
  (typeof window !== 'undefined' ? '' : 'http://localhost:3000');

export const api = axios.create({
  baseURL,
  headers: {
    'Cache-Control': 'no-store',
  },
});
