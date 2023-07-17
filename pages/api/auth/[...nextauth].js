import bcrypt from "bcrypt";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "@/app/libs/prismadb";

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "email", type: "text" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Invalid credentials");
        }

        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email,
          },
        });

        if (!user || !user?.hashedPassword) {
          throw new Error("Invalid credentials");
        }

        const isCorrectPassword = await bcrypt.compare(
          credentials.password,
          user.hashedPassword
        );

        if (!isCorrectPassword) {
          throw new Error("Invalid credentials");
        }
        return user;
      },
    }),
  ],
  //   callbacks: {
  //     async session({ session }) {
  //       try {
  //         const user = await prisma.user.findUnique({
  //           where: {
  //             email: session.user.email,
  //           },
  //         });

  //         if (user) {
  //           session.user.id = user.id.toString();
  //           return session;
  //         }
  //       } catch (error) {
  //         console.log("Error fetching user: ", error.message);
  //       }
  //     },
  //     async signIn({ profile }) {
  //       try {
  //         const currentUser = await prisma.user.findUnique({
  //           where: {
  //             email: profile.email,
  //           },
  //         });
  //         console.log(currentUser);
  //         if (currentUser) {
  //           return true;
  //         }
  //       } catch (error) {
  //         console.log("Error checking if user exists: ", error.message);
  //         return false;
  //       }
  //     },
  //   },
  pages: {
    signIn: "/",
  },
  // debug: process.env.NODE_ENV === "development",
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
};
// const handler = NextAuth(authOptions);
// export { handler as GET, handler as POST };
export default NextAuth(authOptions);
