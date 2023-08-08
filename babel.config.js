module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./src"],
          extensions: [".js", ".ts", ".tsx", ".json"],
          alias: {
            "@components": ["./src/components/*"],
            "@constants": ["./src/constants/*"],
            "@navigation": ["./src/navigation/*"],
            "@screens": ["./src/screens/*"],
            "@utils": ["./src/utils/*"],
          },
        },
      ],
    ],
  };
};
