export {};

interface Post {
  title: string;
  content: string;
}

const printPost = (post: Post) => {
  console.log(post.title);
  console.log(post.content);
};

printPost({
  title: "aaa",
  content: "bbb",
});
