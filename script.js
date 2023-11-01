const miniTwitter = {
  users: [
    {
      username: "Mota",
    }
  ],
  posts: [
    {
      id: 1,
      owner: "Mota",
      content: "Meu primeiro tweet"
    }
  ]
};

//CREATE
function createPost(dados) {
  miniTwitter.posts.push({
    id: miniTwitter.posts.length + 1,
    owner: dados.owner,
    content: dados.content
  });
}
createPost({owner: "Mota", content: "Segundo tweet"});
createPost({owner: "Mota", content: "Terceiro tweet"});
// console.log(miniTwitter.posts);

// READ
function getPosts() {
  return miniTwitter.posts;
}
console.log(getPosts());

// UPDATE
function updatePostContent(id, newContent) {
  const postThatWillBeUpdated = getPosts().find((post) => {
    return post.id === id;
  });
  console.log(postThatWillBeUpdated)
  postThatWillBeUpdated.content = newContent
}

updatePostContent(1, "Novo conteúdo do post")
console.log(getPosts())

// DELETE
function deletePost(id) {
  const updatedPostLists = getPosts().filter((currentPost) => {
    return currentPost.id !== id;
  })
  miniTwitter.posts = updatedPostLists;
}
deletePost(1);
deletePost(2);
deletePost(3);
console.log(getPosts());