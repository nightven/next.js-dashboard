import { Post, User } from "./Models";
import { connectToDb } from "./Utils";
import { unstable_noStore as noStore } from "next/cache";

// TEMPORARY DATA
// const users = [
//      {id:1, name: 'John'},
//      {id:2, name: 'Jane'}
//  ]

// const posts = [
//   { id: 1, title: "Post1", body: ".......", userId: 1 },
//   { id: 2, title: "Post2", body: ".......", userId: 1 },
//   { id: 3, title: "Post3", body: ".......", userId: 2 },
//   { id: 4, title: "Post4", body: ".......", userId: 2 },
// ];

export const getPosts = async () => {
  try {
    connectToDb();
    const posts = await Post.find();

    return posts;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch posts from server");
  }
};

export const getPost = async (slug) => {
  try {
    connectToDb();
    const post = await Post.findOne({ slug });

    return post;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch post from server");
  }
};

export const getUser = async (userId) => {
  noStore();
  try {
    connectToDb();
    const user = await User.findById(userId);

    return user;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch user from server");
  }
};
export const getUsers = async (i) => {
  try {
    connectToDb();
    const users = await User.find();

    return users;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch users from server");
  }
};
