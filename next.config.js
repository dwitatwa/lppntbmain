module.exports = {
  images: {
    domains: ["images.ctfassets.net"],
  },
  async redirects() {
    return [
      {
        source: "/sosialisasibeasiswantb2021",
        destination:
          "https://docs.google.com/forms/d/e/1FAIpQLSf9t9rrykGFUFJcuNYP7x3kSTt9DFbK34Thh0oNKwzzQgu-tQ/viewform?usp=sf_link",
        permanent: true,
      },
      {
        source: "/tracerawardee2021/rusia",
        destination:
          "https://docs.google.com/forms/d/e/1FAIpQLSfUhr6kOfkA5vqbWlCMXS4jQOBjUurTJnlJweF5E0TfIgSbvg/viewform?usp=sf_link",
        permanent: true,
      },
      {
        source: "pendaftaranbeasiswantb2021",
        destination:
          "https://docs.google.com/forms/d/e/1FAIpQLScgkM35L_CW8cNs3aLQQCo8oJxAfn9jElE0AudVYB8NukyAmw/viewform?usp=sf_link",
        permanent: true,
      },
    ];
  },
};
