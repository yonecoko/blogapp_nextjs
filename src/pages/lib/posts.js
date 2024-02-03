import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirPath = path.join(process.cwd(), "src/posts");
// "src/pages/posts"は最初"posts"だけしか書かれていないから、編集が必要

export function getIds() {
  const postNames = fs.readdirSync(postsDirPath);

  return postNames.map((postName) => {
    return {
      params: {
        id: postName.replace(/\.md$/, ""),
      },
    };
  });
}

// getIds()のidはparamsに格納されているから、getPost()の引数にparamsを入れる
// そうしたらgetPosts()内でparamsが使える

export function getPosts() {
  const postNames = fs.readdirSync(postsDirPath);

  return postNames.map((postName) => {
    const postPath = path.join(postsDirPath, postName);
    const result = matter(fs.readFileSync(postPath, "utf8"));

    // 返り値を「post: result.data」から以下に変更
    // これでindex.jsで使う準備が整った
    return {
      params: {
        id: postName.replace(/\.md$/, ""),
        post: result.data,
      },
    };
  });
}

export function getPostById(id) {
  const postPath = path.join(postsDirPath, `${id}.md`);

  const result = matter(fs.readFileSync(postPath, "utf8"));

  return {
    id,
    ...result.data,
    content: result.content,
  };
}
