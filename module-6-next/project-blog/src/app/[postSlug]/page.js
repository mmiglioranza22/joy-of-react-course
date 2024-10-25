import React from "react";
import dynamic from "next/dynamic";

import BlogHero from "@/components/BlogHero";

import styles from "./postSlug.module.css";
import { loadBlogPost } from "@/helpers/file-helpers";
import { MDXRemote } from "next-mdx-remote/rsc";
import CodeSnippet from "../../components/CodeSnippet";
import Equation from "@/components/DivisionGroupsDemo/Equation";
import Slider from "@/components/Slider";
import SliderControl from "@/components/SliderControl";
import Card from "@/components/Card";
import CircularColorsDemo from "@/components/CircularColorsDemo";
import Spinner from "@/components/Spinner";

const DivisionGroupsDemo = dynamic(
  () => import("@/components/DivisionGroupsDemo"),
  {
    // ssr: false, // to be used for 3rd party components that are not meant/designed to work/load first on the server, skipping server loading and using the loading component
    loading: Spinner,
  }
);
// const DivisionGroupsDemo = React.lazy(() =>
//   import("@/components/DivisionGroupsDemo")
// );

export async function generateMetadata({ params }) {
  const blog = await loadBlogPost(params.postSlug);

  return {
    title: blog.frontmatter.title,
    description: blog.frontmatter.abstract,
  };
}

async function BlogPost({ params }) {
  const blog = await loadBlogPost(params.postSlug);

  return (
    <article className={styles.wrapper}>
      <BlogHero
        title={blog.frontmatter.title}
        publishedOn={blog.frontmatter.publishedOn}
      />
      <div className={styles.page}>
        <MDXRemote
          source={blog.content}
          components={{
            pre: CodeSnippet,
            Equation,
            Slider,
            SliderControl,
            DivisionGroupsDemo,
            Card,
            CircularColorsDemo,
          }}
        />
      </div>
    </article>
  );
}

export default BlogPost;
