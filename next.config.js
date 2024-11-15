// next.config.js
const nextConfig = {
    webpack: (config) => {
      config.module.rules.push({
        test: /\.(mp4|webm|ogg|swf|avi)$/,
        type: 'asset/resource',
        generator: {
          filename: 'static/media/[name].[hash][ext]', // Customizes the output path
        },
      });
      return config;
    },
  };
  
  module.exports = nextConfig;
  