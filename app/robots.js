export default function robots() {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: ["/contact", "/services", "/works"] },
    ],
  };
}
