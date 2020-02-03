const fs = require("fs");
const path = require("path");
const lessToJS = require("less-vars-to-js");
const withLess = require("@zeit/next-less");
const withCss = require("@zeit/next-css");

const withPlugins = require("next-compose-plugins");
const withGraphql = require("next-plugin-graphql");
const Dotenv = require("dotenv-webpack");

if (typeof require !== "undefined") {
  require.extensions[".less"] = () => {};
  require.extensions[".css"] = () => {};
}

// Where your antd-custom.less file lives
const themeVariables = lessToJS(
  fs.readFileSync(
    path.resolve(__dirname, "./src/styles/antd-custom.less"),
    "utf8"
  )
);

const nextConfig = {
  poweredByHeader: false,
  target: "serverless",
  webpack: (config, { isServer }) => {
    config.node = {
      fs: "empty"
    };

    // config.plugins = config.plugins || [];

    config.plugins = [
      ...config.plugins,

      // Read the .env file
      new Dotenv({
        systemvars: true
      })
    ];

    if (isServer) {
      const antStyles = /antd\/.*?\/style.*?/;
      const origExternals = [...config.externals];
      config.externals = [
        (context, request, callback) => {
          if (request.match(antStyles)) return callback();
          if (typeof origExternals[0] === "function") {
            origExternals[0](context, request, callback);
          } else {
            callback();
          }
        },
        ...(typeof origExternals[0] === "function" ? [] : origExternals)
      ];

      config.module.rules.unshift({
        test: antStyles,
        use: "null-loader"
      });
    }

    config.module.rules.unshift({
      test: /\.(png|jpe?g|gif)$/i,
      use: [
        {
          loader: require.resolve("url-loader")
        }
      ]
    });

    console.warn(
      "HACK: Removing `minimize` option from `css-loader` entries in Webpack config"
    );
    config.module.rules.forEach(rule => {
      if (Array.isArray(rule.use)) {
        rule.use.forEach(u => {
          if (u.loader === "css-loader" && u.options) {
            delete u.options.minimize;
          }
        });
      }
    });

    return config;
  },
  lessLoaderOptions: {
    javascriptEnabled: true,
    modifyVars: themeVariables
  }
};

module.exports = withPlugins(
  [
    withCss,
    // [
    //   withCss,
    //   {
    //     // cssModule: true,
    //     cssLoaderOptions: {
    //       importLoaders: 2,
    //       modules: {
    //         localIdentName: "[local]___[hash:base64:5]"
    //       }
    //     }
    //   }
    // ],
    [
      withLess,
      {
        // cssModules: true,
        // cssLoaderOptions: {
        //   importLoaders: 2,
        //   localIdentName: "[local]___[hash:base64:5]"
        // },

        lessLoaderOptions: {
          javascriptEnabled: true,
          modifyVars: themeVariables
        }
      }
    ],
    // withSourceMaps,
    withGraphql
  ],
  nextConfig
);
