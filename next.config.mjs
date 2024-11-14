/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
      return [
        {
          source: "/", // Root URL
          destination: "/home", // Redirect to /home
          permanent: true, // Set the redirect as permanent (301)
        },
      ];
    },
  };
  
  export default nextConfig;
  