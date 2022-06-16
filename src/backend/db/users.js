import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Adarsh",
    lastName: "Balika",
    username: "adarshbalika",
    password: "adarshBalika123",
    avatarImage: "",
    bio: "I am good kid",
    portfolioWebsite: "www.adarsh.com",
    profileImageColor: "blue",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Shubham",
    lastName: "Soni",
    username: "shubhamsoni",
    password: "shubhamsoni123",
    avatarImage: "",
    bio: "I am coder",
    portfolioWebsite: "www.shubham.com",
    profileImageColor: "green",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Soham",
    lastName: "Shah",
    username: "sohamshah",
    password: "sohamshah123",
    avatarImage: "",
    bio: "I am a cricketer",
    portfolioWebsite: "www.soham.com",
    profileImageColor: "red",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
