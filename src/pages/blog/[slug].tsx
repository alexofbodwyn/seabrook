import { GetStaticProps, GetServerSideProps } from "next";
import Header from "@/components/header";
import Footer from "@/components/footer";
import BlogSection from "@/components/blogSection";
import { useRouter } from "next/router";

import { getPosts, getPostBySlug, getNavigation } from "@/lib/service";

export default function PostDetails({ post, navigation, posts }: { post: any, navigation: any, posts: any }) {
  const router = useRouter()

  if (router.isFallback) {
    return (
      <div className="flex flex-col min-h-[100vh]">
      <Header menuItems={navigation} />
      <div className="bg-white">
        <div className="container mx-auto py-10 max-w-[800px]">
          <div className="[&>p]:my-4 [&>p]:text-stone-600 [&>p]:text-lg">Loading...</div>
        </div>
      </div>
      <Footer />
    </div>
    )
  }

  return (
    <div className="flex flex-col min-h-[100vh]">
      <Header menuItems={navigation} />
      <div className="bg-white">
        <div className="container mx-auto py-10 max-w-[800px]">
          <h2 className="text-2xl mb-8 text-stone-600 font-bold">{post.title}</h2>
          <div className="[&>p]:my-4 [&>p]:text-stone-600 [&>p]:text-lg" dangerouslySetInnerHTML={{ __html: post.content }}></div>
        </div>
      </div>
      <BlogSection posts={posts} />
      <Footer />
    </div>
  );
}

// export const getStaticPaths: GetStaticPaths = async () => {
//   const posts = await getPosts(100); // retrieve first 100 posts

//   return {
//     paths: posts.map((post: any) => `/blog/${post.slug}`),
//     fallback: true,
//   };
// };

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const post = await getPostBySlug(params?.slug as string);
  const navigation = await getNavigation()
  const posts = await getPosts(6); // retrieve first 100 posts

  return {
    props: { post, navigation, posts },
  };
};
