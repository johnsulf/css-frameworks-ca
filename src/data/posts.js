import { Post } from "./postModel.js";

export const posts = [
    Post.fromJson({
        id: 1,
        uid: 1,
        timeStamp: new Date("2023-07-06T20:16:00").toLocaleString(),
        message: "Today I found out there's a lot of John Does out there!",
        hashTags: ["#imnotalone", "#johndoe"],
        likes: 10,
        comments: 2,
    }),
    Post.fromJson({
        id: 2,
        uid: 2,
        timeStamp: new Date("2023-07-06T20:16:00").toLocaleString(),
        message: "2024 just keeps on giving!",
        hashTags: ["#2024", "#omg"],
        likes: 12,
        comments: 4,
    }),
    Post.fromJson({
        id: 3,
        uid: 3,
        timeStamp: new Date("2023-07-06T20:16:00").toLocaleString(),
        message: "Let's pick some pockets!",
        hashTags: ["#pick", "#pockets"],
        likes: 10,
        comments: 2,
    }),
    Post.fromJson({
        id: 4,
        uid: 1,
        timeStamp: new Date("2023-07-24T10:16:00").toLocaleString(),
        message: "Summer is awesome!!",
        hashTags: ["#summer", "#lovesummer"],
        likes: 19,
        comments: 0,
    }),
];