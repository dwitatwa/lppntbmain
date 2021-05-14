module.exports = {
  images: {
    domains: ["images.ctfassets.net"],
  },
  async redirects() {
    return [
      {
        source: "/cekredir",
        destination: "https://google.com",
        permanent: true,
      },
      {
        source: "/facebook",
        destination: "https://facebook.com",
        permanent: true,
      },
    ];
  },
};
