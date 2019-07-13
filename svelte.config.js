const postcss = require('postcss');
const postcssPresetEnv = require('postcss-preset-env');

// const postcssConfigured = ;

module.exports = {
  compilerOptions: {
    css: false
  },
  preprocess: {
    style: async ({ content }) => {
      // return {
      //   code: content
      // };

      const result = await postcss([
        postcssPresetEnv({
          stage: false,
          features: {
            'nesting-rules': true
          }
        })
      ]).process(content, {
        from: undefined
      });

      console.log('===========================');
      console.log(content);
      console.log('---------');
      console.log(result.css);
      console.log('===========================');

      return {
        code: result.css
      };
    }
  }
};
