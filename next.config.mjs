/** @type {import('next').NextConfig} */
const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains" },
];

const nextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
  // Old routes from the previous version of the site keep working.
  async redirects() {
    return [
      { source: "/works", destination: "/work", permanent: true },
      { source: "/resume", destination: "/experience", permanent: true },
      { source: "/services", destination: "/contact", permanent: true },
      { source: "/assets/resume/cv.pdf", destination: "/assets/resume/Abhi_Gaduputi_Resume.pdf", permanent: true },
    ];
  },
};

export default nextConfig;
