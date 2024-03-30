import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    name: "Mastering Data Structures and Algorithms",
    overview: "A comprehensive guide to mastering data structures and algorithms using various programming languages.",
    long_description: "This book covers everything from basic data structures like arrays and linked lists to advanced algorithms like dynamic programming and graph traversal.",
    price: 39,
    image: "https://images.nextory.com/9783755447818.jpg?fit=clip&auto=format&w=300&h=300",
    rating: 3,
    in_stock: true,
    size: 8,
    best_seller: false,
    categoryName: "Programming"
  },
  {
    _id: uuid(),
    name: "Web Development Essentials",
    overview: "Learn essential web development concepts and technologies to build modern and interactive websites.",
    long_description: "This book covers HTML, CSS, JavaScript, and popular frameworks like React and Angular.",
    price: 45,
    image: "https://m.media-amazon.com/images/I/71nwsPCYNfL._AC_UF1000,1000_QL80_.jpg",
    rating: 4,
    in_stock: true,
    size: 6,
    best_seller: true,
    categoryName: "Web Development"
  },
  {
    _id: uuid(),
    name: "Cloud Computing Basics",
    overview: "An introductory guide to cloud computing and its various services and deployment models.",
    long_description: "This book covers cloud computing fundamentals, infrastructure as a service (IaaS), platform as a service (PaaS), and software as a service (SaaS).",
    price: 29,
    image: "https://m.media-amazon.com/images/I/71s7ocsyVtL._AC_UF1000,1000_QL80_.jpg",
    rating: 2,
    in_stock: true,
    size: 5,
    best_seller: false,
    categoryName: "Cloud"
  },
  
  {
    _id: uuid(),
    name: "Python for Beginners",
    overview: "An easy-to-follow guide for beginners to learn Python programming language from scratch.",
    long_description: "This book covers basic Python syntax, data types, control structures, and introduces concepts of object-oriented programming.",
    price: 25,
    image: "https://rukminim2.flixcart.com/image/850/1000/xif0q/book/3/a/d/python-for-beginners-original-imagn6fefggr3yq2.jpeg?q=90&crop=false",
    rating: 2,
    in_stock: true,
    size: 4,
    best_seller: true,
    categoryName: "Programming"
  },
  {
    _id: uuid(),
    name: "React.js Cookbook",
    overview: "A practical cookbook for building modern web applications using React.js library.",
    long_description: "This book includes hands-on recipes for building user interfaces, managing state, and integrating with backend services.",
    price: 35,
    image: "https://m.media-amazon.com/images/I/61ZwqKev9pL._AC_UF1000,1000_QL80_.jpg",
    rating: 5,
    in_stock: true,
    size: 7,
    best_seller: false,
    categoryName: "Web Development"
  },
  {
    _id: uuid(),
    name: "AWS Essentials",
    overview: "A beginner's guide to Amazon Web Services (AWS) and its core services for cloud computing.",
    long_description: "This book covers key AWS services like EC2, S3, RDS, and provides hands-on examples for deploying and managing applications on AWS.",
    price: 32,
    image: "https://m.media-amazon.com/images/I/51Xdp0673ML.jpg",
    rating: 3,
    in_stock: true,
    size: 6,
    best_seller: true,
    categoryName: "Cloud"
  },
  {
    _id: uuid(),
    name: "Java Programming Basics",
    overview: "A beginner-friendly introduction to Java programming language covering basic syntax, data types, and control flow.",
    long_description: "This book is suitable for beginners with no prior programming experience and includes hands-on exercises to reinforce learning.",
    price: 28,
    image: "https://m.media-amazon.com/images/I/51EWRgaqIKL.jpg",
    rating: 4,
    in_stock: true,
    size: 5,
    best_seller: false,
    categoryName: "Programming"
  },
  {
    _id: uuid(),
    name: "Full Stack Development Guide",
    overview: "A comprehensive guide to full stack web development covering frontend, backend, and database technologies.",
    long_description: "This book covers frontend technologies like HTML, CSS, JavaScript, backend frameworks like Node.js, and database management using MongoDB.",
    price: 50,
    image: "https://m.media-amazon.com/images/I/61svWgrmT0L._AC_UF1000,1000_QL80_.jpg",
    rating: 3,
    in_stock: true,
    size: 10,
    best_seller: true,
    categoryName: "Web Development"
  },
  {
    _id: uuid(),
    name: "Introduction to DevOps",
    overview: "An introductory book on DevOps culture, practices, and tools for improving software delivery and deployment.",
    long_description: "This book covers key DevOps principles, continuous integration, continuous deployment, and tools like Docker and Kubernetes.",
    price: 34,
    image: "https://m.media-amazon.com/images/I/51sH4zDITTL.jpg",
    rating: 3,
    in_stock: true,
    size: 6,
    best_seller: false,
    categoryName: "Cloud"
  },
  {
    _id: uuid(),
    name: "JavaScript Algorithms and Data Structures",
    overview: "A guide to mastering JavaScript algorithms and data structures for solving complex problems and improving coding skills.",
    long_description: "This book covers common algorithms and data structures implemented in JavaScript along with examples and exercises.",
    price: 42,
    image: "https://m.media-amazon.com/images/I/61G-D3wmkeL._AC_UF1000,1000_QL80_.jpg",
    rating: 2,
    in_stock: true,
    size: 7,
    best_seller: true,
    categoryName: "Programming"
  },
  {
    _id: uuid(),
    name: "Responsive Web Design",
    overview: "Learn how to create responsive and mobile-friendly websites using HTML, CSS, and modern web design techniques.",
    long_description: "This book covers media queries, flexible grids, and other techniques for designing websites that work well on various devices and screen sizes.",
    price: 38,
    image: "https://m.media-amazon.com/images/I/913JgvI4e1L.jpg",
    rating: 4,
    in_stock: true,
    size: 8,
    best_seller: false,
    categoryName: "Web Development"
  },
  {
    _id: uuid(),
    name: "Azure Fundamentals",
    overview: "A beginner's guide to Microsoft Azure cloud platform and its core services for building and deploying applications.",
    long_description: "This book covers key Azure services like virtual machines, storage, and networking, and provides hands-on exercises for getting started with Azure.",
    price: 30,
    image: "https://m.media-amazon.com/images/I/81hen021OWL._AC_UF1000,1000_QL80_.jpg",
    rating: 5,
    in_stock: true,
    size: 5,
    best_seller: true,
    categoryName: "Cloud"
  },
  {
    _id: uuid(),
    name: "C++ Programming Essentials",
    overview: "A beginner's guide to C++ programming language covering basic syntax, data types, and control flow.",
    long_description: "This book is suitable for beginners with no prior programming experience and includes hands-on exercises to reinforce learning.",
    price: 28,
    image: "https://m.media-amazon.com/images/I/91ejOrPfJ6L._AC_UF1000,1000_QL80_.jpg",
    rating: 4,
    in_stock: false,
    size: 5,
    best_seller: false,
    categoryName: "Programming"
  }
];
