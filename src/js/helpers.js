export function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// Post HTML element
export function renderPostHtml(user, post) {
    const hashtags = post.hashTags.join(' ');
    return `<div class="container card bg-white border-0 my-3">
                <div class="row">
                    <a href="../profile/index.html?uid=${user.uid}" class="col-2 m-2 p-1 text-center">
                        <img src="${user.profilePic}" alt="Profile picture of ${user.displayName}" class="profile-pic sm">
                    </a>
                    <div class="col mt-2 p-1">
                        <strong>${user.displayName}</strong>
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