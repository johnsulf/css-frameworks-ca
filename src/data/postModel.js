export class Post {
    constructor({ id, uid, timeStamp, message, hashTags, likes, comments }) {
        this.id = id;
        this.uid = uid;
        this.timeStamp = timeStamp;
        this.message = message;
        this.hashTags = hashTags;
        this.likes = likes;
        this.comments = comments;
    }

    static fromJson(json) {
        return new Post({
            id: json.id,
            uid: json.uid,
            timeStamp: json.timeStamp,
            message: json.message,
            hashTags: json.hashTags,
            likes: json.likes,
            comments: json.comments
        });
    }
}