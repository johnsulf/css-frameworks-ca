import { posts } from "../../data/posts.js";
import { users } from "../../data/users.js";
import { renderPostHtml } from "../../js/helpers.js";

// shuffle the posts array
posts.sort(() => Math.random() - 0.5);

posts.forEach(post => {
    const user = users.find(user => user.uid == post.uid);
    feedPosts.innerHTML += renderPostHtml(user, post);
});