import React from "react";

import BlogSummaryCard from "@/components/BlogSummaryCard";

import styles from "./homepage.module.css";
import { getBlogPostList } from "@/helpers/file-helpers";
import { BLOG_TITLE } from "@/constants";

export async function generateMetadata({ params }) {
  return {
    title: `${BLOG_TITLE}`,
  };
}

async function Home() {
  const blogsSummary = await getBlogPostList();
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.mainHeading}>Latest Content:</h1>

      {blogsSummary.map((blog) => (
        <BlogSummaryCard
          key={`${blog.slug}-${blog.title}`}
          slug={blog.slug}
          title={blog.title}
          abstract={blog.abstract}
          publishedOn={blog.publishedOn}
        />
      ))}
    </div>
  );
}

export default Home;
