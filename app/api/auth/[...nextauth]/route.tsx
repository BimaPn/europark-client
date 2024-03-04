import NextAuth from "next-auth/next";
import { authOptions } from "./nextOptions";

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST}
