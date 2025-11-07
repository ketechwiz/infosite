/** @type {import('next').NextConfig} */
const nextConfig = {
  // ✅ Ensures static export works for GitHub/Vercel setups
  output: 'export',
  
  // ✅ Helps routing work with subpaths and custom domains
  trailingSlash: true,

  // ✅ Optional: helps Vercel route all paths to index.html if statically exported
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: '/',
      },
    ];
  },
};

export default nextConfig;
