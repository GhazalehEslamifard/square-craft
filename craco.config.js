// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");

module.exports = {
  webpack: {
    alias: {
      "@components": path.resolve(__dirname, "src/components"),
      "@store/*": ["./store/*"],
      "@store": ["store"],
      "@types": path.resolve(__dirname, "src/types"),
      "@commands": path.resolve(__dirname, "src/commands"),
    },
  },
};
