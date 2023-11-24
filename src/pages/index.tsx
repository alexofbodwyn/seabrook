import { GetStaticProps } from "next";
import { getFrontPage, getNavigation, getPosts } from "@/lib/service";
import Header from "@/components/header";
import Footer from "@/components/footer";
import BlogSection from "@/components/blogSection";

export default function HomePage({ page, navigation, posts }: { page: any, navigation: any, posts: any }) {


  const firstBlock = JSON.parse(page.blocks[0].attributesJSON)
  const secondBlock = page.blocks[1].innerBlocks
  const thirdBlock = JSON.parse(page.blocks[2].attributesJSON)
  const forthBlock = JSON.parse(page.blocks[3].attributesJSON)

  return (
    <div className="flex flex-col min-h-[100vh]">
      <Header menuItems={navigation} pageTitle={page.title}/>
      <div className="bg-stone-200">
        <div className="container px-8 mx-auto py-10 lg:max-w-[800px] lg:px-0">
          <p className="text-[28px] lg:text-[36px] text-stone-600">{firstBlock.content}</p>
          <ul className="flex flex-wrap pr-[100px] my-10">
            {
              secondBlock.map((item:any, index:number) => {

                const itemContent = JSON.parse(item.attributesJSON)

                return (
                  <li className="w-1/2 text-2xl my-3 text-stone-600" key={`list-item-${index}`}>&#x2022;<span className="pl-4">{itemContent.content}</span></li>
                )
              })
            }
          </ul>
        </div>
      </div>
      <div className="bg-white">
        <div className="container px-8 mx-auto py-10 lg:max-w-[800px] lg:px-0">
          <h2 className="text-2xl mb-8">{thirdBlock.content}</h2>
          <p dangerouslySetInnerHTML={{ __html: forthBlock.content }}></p>
        </div>
      </div>
      <BlogSection posts={posts} />
      <Footer />
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const page = await getFrontPage()
  const navigation = await getNavigation()
  const posts = await getPosts(6)

  return {
    props: {
      page,
      navigation,
      posts,
    },
    revalidate: 3600,
  };
};


