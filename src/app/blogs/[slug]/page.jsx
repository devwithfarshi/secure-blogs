import PostUser from "@/components/PostUser/PostUser";
import { getPost } from "@/lib/data";
import Image from "next/image";
import { Suspense } from "react";

const SingleBlog = async ({ params }) => {
  const post = await getPost(params.slug);

  return (
    <>
      <section className="md:px-0 py-10 px-5 h-full flex md:flex-row flex-col gap-20">
        {post?.image && (
          <figure>
            <Image
              src={post.image}
              alt={post.title}
              width={500}
              height={500}
              objectFit="contain"
            />
          </figure>
        )}
        <div>
          <h2 className="text-[4rem] font-semibold">{post?.title}</h2>
          <Suspense
            fallback={
              <>
                <h6 className="font-semibold text-lg">Loading..</h6>
              </>
            }
          >
            <PostUser userId={post?.userId} />
          </Suspense>
          <p className="text-3xl mt-10">{post?.body}</p>
        </div>
      </section>
    </>
  );
};

export default SingleBlog;
