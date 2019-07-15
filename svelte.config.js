module.exports = {
  compilerOptions: {
    css: false // Убирает css из js-бандла
  }
};

// const postcss = require('postcss');
// const postcssNested = require('postcss-nested');
// const postcssPresetEnv = require('postcss-preset-env');

// preprocess: {
//   style: async ({ content, attributes }) => {
//       if (attributes.type !== 'text/scss') {
//           return;
//       }

//       const result = await renderScss({
//           data: content,
//           sourceMap: 'style.css.map',
//           omitSourceMapUrl: true,
//       });

//       return {
//           code: result.css.toString('utf8'),
//           map: result.map.toString('utf8'),
//       };
//   },
// },

// module.exports = {
//   compilerOptions: {
//     css: false // Убирает css из js-бандла
//   },
//   preprocess: {
//     style: async ({ content }) => {
//       const result = await postcss([
//         postcssNested,
//         postcssPresetEnv({
//           stage: 2
//         })
//       ]).process(content, {
//         from: undefined
//       });

//       return {
//         code: result.css
//       };
//     }
//   }
// };
