/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env:{
    MongoUrl:process.env.MongoUrl,
API_KEY : process.env.API_KEY,
GOOGLE_CLIENT_ID:process.env.GOOGLE_CLIENT_ID,
GOOGLE_CLIENT_SECRET:process.env.GOOGLE_CLIENT_SECRET,
NEXTAUTH_SECRET:process.env.NEXTAUTH_SECRETl
  }
};

export default nextConfig;
