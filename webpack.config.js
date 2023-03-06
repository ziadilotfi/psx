const path = require('path');

module.exports = {
    module: {
        rules: [
          // ... other rules omitted
    
          // this will apply to both plain `.scss` files
          // AND `<style lang="scss">` blocks in `.vue` files
          {
            test: /\.scss$/,
            use: [
              'vue-style-loader',
              'css-loader',
              'sass-loader'
            ]
          }
        ]
      },
    resolve: {
        alias: {
            '@': path.resolve('resources/js'),
        },
    },
};
