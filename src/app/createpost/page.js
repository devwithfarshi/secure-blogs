import { addPost } from "@/lib/action";

export default function page() {
  return (
    <>
      <form action={addPost} className="flex gap-11 items-center">
        <input
          className="p-4 text-2xl text-gray-800"
          type="text"
          placeholder="Title"
          name="title"
        />
        <input
          className="p-4 text-2xl text-gray-800"
          type="text"
          placeholder="Write description"
          name="body"
        />
        <button
          className="bg-slate-100 text-gray-900 font-semibold py-5 px-8 rounded-2xl"
          type="submit"
        >
          Test post
        </button>
      </form>
    </>
  );
}
