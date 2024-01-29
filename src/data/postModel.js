export class PostModel {
    constructor({ id, displayName, profilePic, message, hashTags, likes, comments }) {
        this.id = id;
        this.displayName = displayName;
        this.profilePic = profilePic;
        this.message = message;
        this.hashTags = hashTags;
        this.likes = likes;
        this.comments = comments;
    }

    fromJson(json) {
        return new PostModel({
            id: json.id,
            displayName: json.displayName,
            profilePic: json.profilePic,
            message: json.message,
            hashTags: json.hashTags,
            likes: json.likes,
            comments: json.comments
        });
    }
}