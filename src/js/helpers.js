export function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// Post HTML element
export function renderPostHtml(user, post) {
    const hashtags = post.hashTags.join(' ');
    return `<div class="container card bg-white border-0 my-3 position-relative">
                <div class="row">
                    <a href="../profile/index.html?uid=${user.uid}" class="col-2 m-2 p-1 text-center">
                        <img src="${user.profilePic}" alt="Profile picture of ${user.displayName}" class="profile-pic sm">
                    </a>
                    <div class="col mt-2 p-1">
                        <strong>${user.displayName}</strong><small class="text-muted fs-">&nbsp;&nbsp;${post.timeStamp}</small>
                        <p>${post.message}</p>
                        <strong>${hashtags}</strong>
                    </div>
                </div>
                <div class="row justify-content-end m-2">
                    <i class="bi bi-hand-thumbs-up-fill col-1"></i>
                    <i class="bi bi-chat-fill col-1"></i>
                </div>
            </div>`;
}

// Follower/Followers card HTML element
export function renderFollowerFollowingCard(followerUser) {
    return `<div class="container card bg-white border-0 my-3">
                <a href="../profile/index.html?uid=${followerUser.uid}" class="text-decoration-none">
                    <div class="row align-items-center justify-content-between py-2">
                        <div class="col-2 text-center">
                            <img src="${followerUser.profilePic}" alt="Profile picture of ${followerUser.displayName}" class="profile-pic sm">
                        </div>
                        <div class="col-8">
                            <p class="m-0 fw-bold text-dark">${followerUser.name}</p>
                            <p class="m-0 text-muted">@${followerUser.displayName}</p>
                        </div>
                        <div class="col-2 text-center">
                            <i class="bi bi-arrow-right"></i>
                        </div>    
                    </div>
                </a>
            </div>`;
}