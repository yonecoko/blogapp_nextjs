import Link from "next/link";
import Layout from "./components/layout";
import ListLayout from "./components/listLayout";
import ListsLayout from "./components/listsLayout";
import { getPosts } from "./lib/posts";

// styaleを充てるには、module.cssとlayout.jsを作って読み込めばOK

export const getStaticProps = async () => {
  return {
    props: {
      posts: getPosts(),
    },
  };
};

export default function Home({ posts }) {
  console.log(posts);
  return (
    <Layout pageTitle="Home">
      <Link href="/about">About</Link>
      {/* ここの引数をtitleではなく、paramsに変更 */}
      <ListsLayout>
        {posts.map(({ params }) => {
          return (
            // ①チャレンジ問題：各ブログのリンクを貼る
            // getPosts()にgetIds()のidを取得する
            // paramsのidにファイル名が格納されているので、それを出力
            <Link href={`./posts/${params.id}`}>
              <ListLayout>{params.post.title}</ListLayout>
            </Link>
          );
        })}
      </ListsLayout>
    </Layout>
  );
}

// <a>About</a> という書き方はNext.js 13 以降では<Link>だけでOKになった
