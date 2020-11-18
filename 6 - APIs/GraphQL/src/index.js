import { GraphQLServer } from "graphql-yoga";

// Demo user data

const users = [
  {
    id: "1",
    name: "Mnasoor",
    email: "mansoor@icp.edu.pk",
    age: 32,
  },
  {
    id: "2",
    name: "Nasir",
    email: "nasir@icp.edu.pk",
    age: 30,
  },
  {
    id: "3",
    name: "Talha",
    email: "talha@icp.edu.pk",
    age: 3,
  },
];

const posts = [
  {
    id: "1",
    title: "C++ How to Program",
    body: "This is the body of the post 1",
    published: true,
    author: "1",
  },
  {
    id: "2",
    title: "Java How to Program",
    body: "This is the body of the post 2",
    published: true,
    author: "2",
  },
  {
    id: "3",
    title: "Python How to Program",
    body: "This is the body of the post 3",
    published: true,
    author: "1",
  },
];

const comments = [
  {
    id: "111",
    text: "THis is comment number 1.",
    userID: "1",
  },
  {
    id: "222",
    text: "THis is comment number 2.",
    userID: "2",
  },
  {
    id: "333",
    text: "THis is comment number 3.",
    userID: "3",
  },
  {
    id: "444",
    text: "THis is comment number 4.",
    userID: "1",
  },
];
const typeDefs = `
              type Query {
                  users: [Users!]!
                  post(query: String): [Posts!]!
                  me: Users!
                  comments(query: String): [Comment!]!
              }

              type Users {
                id: ID!
                name: String!
                email: String!
                age: Int
                posts: [Posts!]!
              }

              type Posts {
                id: ID!
                title: String!
                body: String!
                published: Boolean!
                author: Users!
              }
              
              type Comment {
                  id: ID!
                  text: String!
                  users: Users!
              }
`;

const resolvers = {
  Query: {
    me() {
      return {
        id: "1",
        name: "Mansoor",
        email: "mansoornasir@gmail.com",
        age: 32,
      };
    },
    post(parent, args, ctx, info) {
      if (!args.query) return posts;

      return posts.filter((post) => {
        const isTitleMatch = post.title
          .toLowerCase()
          .includes(args.query.toLowerCase());
        const isBodyMatch = post.body
          .toLowerCase()
          .includes(args.query.toLowerCase());
        return isTitleMatch || isBodyMatch;
      });
    },
    users(parent, args, ctx, info) {
      return users;
    },
    comments(parent, args, ctx, info) {
      return comments;
    },
  },
  Posts: {
    author(parent, args, cfx, info) {
      return users.find((user) => {
        return user.id === parent.author;
      });
    },
  },
  Users: {
    posts(parent, args, cfx, info) {
      return posts.filter((post) => {
        return post.author === parent.id;
      });
    },
  },
  Comments: {
    users(parent, args, cfx, info) {
      return users.find((user) => {
        return user.id === parent.userID;
      });
    },
  },
};

const server = new GraphQLServer({
  typeDefs,
  resolvers,
});

server.start(() => {
  console.log("The server is running.");
});
