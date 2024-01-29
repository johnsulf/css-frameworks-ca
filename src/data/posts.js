import { PostModel } from "./postModel";

export const posts = [
    PostModel.fromJson({
        id: 1,
        displayName: "johnd",
        profilePic: "assets/images/js.jpg",
        message: "Today I found out there's a lot of John Does out there!",
        hashTags: ["#imnotalone", "#johndoe"],
        likes: 10,
        comments: 2,
    }),
    PostModel.fromJson({
        id: 2,
        displayName: "susan_1",
        profilePic: "assets/images/susan.jpg",
        message: "2024 just keeps on giving!",
        hashTags: ["#2024", "#omg"],
        likes: 12,
        comments: 4,
    }),
    PostModel.fromJson({
        id: 3,
        displayName: "the_mighty_dodger",
        profilePic: "assets/images/dodger.jpg",
        message: "Let's pick some pockets!",
        hashTags: ["#pick", "#pockets"],
        likes: 10,
        comments: 2,
    }),
];