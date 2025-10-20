'use client';

export default function CreateArticle() {
  return (
    <main className="bg-gray-200 p-4 flex flex-col h-screen items-start gap-2 ">
      <h1 className="text-6xl font-bold">Create new article</h1>

      <form className="flex flex-col w-full gap-4 h-full">
        <div>
          <label htmlFor="title" className="text-xl block">
            Title
          </label>
          <input
            id="title"
            name="title"
            type="text"
            className="border border-gray-400 p-1 w-full"
          />
        </div>

        <div className="flex-1 flex flex-col">
          <label className="text-xl mb-1">Body</label>
          TODO: Put a rich editor here
        </div>

        <div className="flex justify-end w-full">
          <button
            type="submit"
            className="border border-gray-500 bg-gray-300 hover:brightness-90 p-1 cursor-pointer"
          >
            Save Article
          </button>
        </div>
      </form>
    </main>
  );
}
