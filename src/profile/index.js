import { posts } from '../data/posts.js';
import { users } from '../data/users.js';
import { capitalize, renderPostHtml, renderFollowerFollowingCard } from '../js/helpers.js';

// Query string
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const uid = params.get('uid');

// Defining the active user
const user = users.find(user => user.uid == uid);

// initializing posts arrays
let userPosts = [];

// populating userPosts array
posts.forEach(post => {
    if (post.uid == user.uid) {
        userPosts.push(post);
    }
});

// Render profile info
profileInfo.innerHTML = `<div class="row align-items-center justify-content-center">
                            <div class="col-6">
                                <h1 class="m-0">${user.name}</h1>
                                <p class="m-0 fw-bold">@${user.displayName}</p>
                                <p class="m-0 text-muted">${user.location}</p>
                                <p class="m-0 text-muted">👤 ${user.bio}</p>
                            </div>
                            <div class="col-4 d-flex justify-content-end">
                                <img src="${user.profilePic}" alt="Profile picture of John Doe" class="profile-pic lg">
                            </div>
                        </div>`;

// Render content for Followers- and Following tab
function renderTabContent(tab, tabString) {
    tab.innerHTML = `<strong>${capitalize(tabString)}</strong>
                        <span class="badge bg-secondary mx-1 fw-normal">${user[tabString].length}</span>
                    </strong>`;
}

renderTabContent(followersTab, "followers");
renderTabContent(followingTab, "following");

// Render posts
userPosts.forEach(post => {
    profilePosts.innerHTML += renderPostHtml(user, post);
});

// Render content for followers- and following tab panes
user.followers.forEach(follower => {
    const followerUser = users.find(user => user.uid == follower);
    followersTabPane.innerHTML += renderFollowerFollowingCard(followerUser);
});

user.following.forEach(following => {
    const followingUser = users.find(user => user.uid == following);
    followingTabPane.innerHTML += renderFollowerFollowingCard(followingUser);
});