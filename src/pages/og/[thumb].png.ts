import type { APIContext } from "astro";
import { getCollection } from "astro:content";
import { getOgImage } from "../../components/OgImage";

export async function getStaticPaths() {
  const posts = await getCollection("blog");

  return posts.map((post) => ({
    params: {
      thumb: post.data.thumb,
    },
  }));
}

export async function GET({ params }: APIContext) {
  const { thumb } = params;
  if (!thumb) return { status: 404 };

  const post = (await getCollection("blog")).find(
    (post) => post.data.thumb === thumb
  );
  if (!post) return { status: 404 };

  const body = await getOgImage(post.data.title ?? "No title");

  return new Response(body, {
    headers: {
      "content-type": "image/png",
    },
  });
}
