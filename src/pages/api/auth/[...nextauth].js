import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import model from "../Model/schema";
import bcrypt from "bcryptjs";
import connection from "../db/connection";

export default NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      async authorize(credentials) {
        try {
          await connection(); // Ensure this connects to your database

          const { email, password, isSignUp } = credentials;

          if (isSignUp) {
            // Check if user already exists
            const existingUser = await model.findOne({ email });

            if (existingUser) {
              throw new Error('User already exists');
            }

            // Hash the password
            const hashedPassword = await bcrypt.hash(password, 12);

            // Create a new user
            const newUser = await model.create({
              email,
              password: hashedPassword,
            });

            console.log('User created:', newUser); // Log the created user
            return newUser;
          } else {
            // Verify existing user
            const user = await model.findOne({ email });

            if (!user) {
              throw new Error('No user found with the email');
            }

            const isValid = await bcrypt.compare(password, user.password);

            if (!isValid) {
              throw new Error('Password is incorrect');
            }

            console.log('User authenticated:', user); // Log the authenticated user
            return user;
          }
        } catch (error) {
          console.error('Error in authorize function:', error);
          throw new Error('Authentication failed');
        }
      },
    }),
  ],
  pages: {
    signIn: "/",
  },
  secret: process.env.NEXTAUTH_SECRET,
});
