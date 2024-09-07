import { getCollection } from "astro:content";
import React, { useEffect, useState } from "react";
import type { CollectionEntry } from "astro:content";
import "./NextPost.css";

interface NextPost {
  slug: string;
}

const NextPost = (props: NextPost) => {
  const [posts, setPosts] = useState<CollectionEntry<"blog">[]>(
    [] as CollectionEntry<"blog">[]
  );
  const [prevPost, setPrevPost] = useState<
    CollectionEntry<"blog"> | undefined
  >();
  const [nextPost, setNextPost] = useState<
    CollectionEntry<"blog"> | undefined
  >();
  useEffect(() => {
    const fetchPosts = async () => {
      const posts = (await getCollection("blog"))
        .sort((a, b) => a.data.pubDate.valueOf() - b.data.pubDate.valueOf())
        .filter((post) => !post.data.isWriting);
      setPosts(posts);
    };
    fetchPosts();
  }, []);
  useEffect(() => {
    const currentIndex = posts.findIndex((post) => post.slug === props.slug);
    const lPrevPost = currentIndex > 0 ? posts[currentIndex - 1] : undefined;
    const lNextPost =
      currentIndex < posts.length - 1 ? posts[currentIndex + 1] : undefined;
    setPrevPost(lPrevPost);
    setNextPost(lNextPost);
  }, [posts]);
  return (
    <>
      <p className="prevPostLink">
        {prevPost ? (
          <a href={`/blog/${prevPost.slug}/`}>{`< ${prevPost.data.title}`}</a>
        ) : (
          "これより前の記事はありません"
        )}
      </p>
      <p className="nextPostLink">
        {nextPost ? (
          <a href={`/blog/${nextPost.slug}/`}>{`${nextPost.data.title} >`}</a>
        ) : (
          "これより後の記事はありません"
        )}
      </p>
    </>
  );
};

export default NextPost;
