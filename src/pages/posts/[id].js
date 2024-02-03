import Layout from "@/components/layout";
import { getIds, getPostById } from "@/lib/posts";
import Link from "next/link";

export const getStaticPaths = async () => {
  return {
    paths: getIds(),
    fallback: false,
  };
};

// getStaticPathsはURLが不明な時に使う

export const getStaticProps = async ({ params }) => {
  return {
    props: {
      post: getPostById(params.id),
    },
  };
};

export default function Post({ post }) {
  console.log(post);
  return (
    <Layout pageTitle={"Article"}>
      <h2>{post.title}</h2>
      {/* dataで日付とってこれる */}
      <p>{post.date}</p>
      <p>{post.content}</p>

      <Link href="/">戻る</Link>
    </Layout>
  );
}
