import { MongoDBAdapter } from "@auth/mongodb-adapter";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import FacebookProvider from "next-auth/providers/facebook";
import GoogleProvider from "next-auth/providers/google";
import { userModel } from "./app/models/user-model";
import clientPromise from "./database/mongoClientPromise";

export const {
  auth,
  handlers: { GET, POST },
  signIn,
  signOut,
} = NextAuth({
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    CredentialsProvider({
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        if (credentials === null) return null;

        try {
          const user = await userModel.findOne({ email: credentials.email });
          if (user) {
            const isMatch = user.email === credentials.email;
            if (isMatch) {
              return user;
            } else {
              throw new Error("user or pasword mismatch!");
            }
          } else {
            throw new Error("User not found!");
          }
        } catch (error) {
          throw new Error(error);
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRECT_ID,
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_SECRET_ID,
    }),
  ],
});
