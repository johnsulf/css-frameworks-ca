import { User } from "./userModel.js"

export const users = [

    User.fromJson({
        uid: 1,
        name: "John Doe",
        displayName: "johnd",
        email: "johndoe@gmail.com",
        profilePic: "/src/assets/images/jd.jpg",
        bio: "I'm John Doe!",
        location: "🇳🇴 Bergen, Norway",
        joinedDate: "June 2021",
        followers: 4,
        following: 15,
    }),
    User.fromJson({
        uid: 2,
        name: "Susan Doe",
        displayName: "susan_1",
        email: "susandoe@gmail.com",
        profilePic: "/src/assets/images/susan.jpg",
        bio: "I'm Susan Doe!",
        location: "🇺🇸 Suville, US",
        joinedDate: "June 2024",
        followers: 8,
        following: 12,
    }),
    User.fromJson({
        uid: 3,
        name: "Jack Dawkins",
        displayName: "the_artful_dodger",
        email: "dodger@gmail.com",
        profilePic: "/src/assets/images/dodger.jpg",
        bio: "I'm The Artful Dodger!",
        location: "🇬🇧 London, UK",
        joinedDate: "June 2021",
        followers: 29,
        following: 1,
    }),
]