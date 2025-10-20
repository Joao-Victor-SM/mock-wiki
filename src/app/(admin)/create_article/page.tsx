'use client';

import {Delta} from 'quill-next';
import QuillEditor from 'quill-next-react';

export default function CreateArticle() {
  return (
    <main className="bg-gray-200 p-4 flex flex-col h-screen items-start gap-2">
      <h1 className="text-6xl font-bold ">Create new article</h1>
      <div className="w-full">
        <label htmlFor="title">
          <h2 className="text-xl">Title</h2>
        </label>
        <input className="border border-gray-400 p-1 w-full" id="title"></input>
      </div>
      <h2 className="text-xl">Body</h2>
      <QuillEditor
        defaultValue={new Delta()}
        config={{theme: 'next'}}
        className="flex-1 w-full border border-gray-300 shadow"
      />
      <div className="flex justify-end w-full">
        <button
          type="button"
          className="border border-gray-500 bg-gray-300 hover:brightness-90 p-1 cursor-pointer"
        >
          Save Article
        </button>
      </div>
    </main>
  );
}
