
/**@type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";
const nextConfig = {
//  output: "export",  // Uncomment the following line only for building purposes. By default, this line should remain commented out.
  trailingSlash: true,
  reactStrictMode: false,
  // swcMinify: true,
  basePath: isProd ? "" : undefined,
  assetPrefix: isProd ? "" : undefined,
  images: {
    loader: "imgix",
    path: "/",
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true
},
  reactStrictMode: false, // Disable Strict Mode if necessary
};

module.exports = nextConfig