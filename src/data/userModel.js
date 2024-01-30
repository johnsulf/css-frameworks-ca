export class User {
    constructor({ uid, name, displayName, email, profilePic, bio, location, joinedDate, followers, following, posts }) {
        this.uid = uid;
        this.name = name;
        this.displayName = displayName;
        this.email = email;
        this.profilePic = profilePic;
        this.bio = bio;
        this.location = location;
        this.joinedDate = joinedDate;
        this.followers = followers;
        this.following = following;
        this.posts = posts;
    }

    static fromJson(json) {
        return new User({
            uid: json.uid,
            name: json.name,
            displayName: json.displayName,
            email: json.email,
            profilePic: json.profilePic,
            bio: json.bio,
            location: json.location,
            joinedDate: json.joinedDate,
            followers: json.followers,
            following: json.following,
            posts: json.posts
        });
    }
}