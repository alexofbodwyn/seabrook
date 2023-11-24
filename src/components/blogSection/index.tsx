import React from "react";
import Link from "next/link";
import Image from "next/image";

import defaultImage from "@/assets/images/default.jpg";

export default function BlogSection({ posts }: { posts: any }) {


  return (
    <div className="bg-stone-50">
      <div className="container px-8 mx-auto py-10 lg:max-w-[1200px] lg:px-0">
        <h3 className="text-[32px] font-bold text-stone-600">Blog</h3>
        <article className="flex flex-wrap justify-between">
          {posts.map((item: any, index:number) => {
            return (
              <section className="bg-white p-4 w-full md:w-[calc(50%-0.75rem)] my-3 flex" key={`blog-section-${index}`}>
                <div className="relative min-w-[120px] w-[120px] h-[80px] mr-4">
                <Link className="ml-auto underline underline-offset-2 text-stone-600" href={`/blog/${item.slug}`}>
                  {
                    item.featuredImage ? (
                      <img
                      src={item.featuredImage?.node.sourceUrl}
                      alt={item.title}
                      className="absolute object-fill top-0 left-0 w-full h-full"
                    />) : (
                      <Image src={defaultImage} alt="seabrook" />
                    )
                  }
                  </Link>
                  
                </div>
                <div className="flex flex-col flex-grow">
                  <h4 className="text-xl font-bold text-stone-600"><Link href={`/blog/${item.slug}`}>{item.title}</Link></h4>
                  <div className="text-stone-600 my-2 min-w-full" dangerouslySetInnerHTML={{ __html: item.excerpt }}></div>
                  <Link className="ml-auto underline underline-offset-2 text-stone-600" href={`/blog/${item.slug}`}>READ MORE</Link>
                </div>
              </section>
            );
          })}
        </article>
      </div>
    </div>
  );
}
