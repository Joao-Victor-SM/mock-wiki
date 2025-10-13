'use client';
import Tiptap from './components/Editor';

export default function CreateArticle() {
  return (
    <main className="bg-gray-200">
      <h1 className="text-6xl font-bold ">Create new article</h1>
      <Tiptap />
    </main>
  );
}
