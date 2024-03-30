import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Cloud",
    description: "Books related to cloud computing and services.",
  },
  {
    _id: uuid(),
    categoryName: "Programming",
    description: "Books covering various programming languages, algorithms, and data structures.",
  },
  {
    _id: uuid(),
    categoryName: "Web Development",
    description: "Books focusing on web development technologies such as HTML, CSS, JavaScript, and frameworks.",
  },
];
