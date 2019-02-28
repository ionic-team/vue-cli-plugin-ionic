module.exports = (api, opts, rootOptions) => {
  const utils = require('./utils')(api);

  api.extendPackage({
    dependencies: {
      '@ionic/vue': '0.0.1'
    },

    devDependencies: {
      'sass-loader': '^7.0.3',
      'node-sass': '^4.9.2'
    }
  });

  api.injectImports(utils.getMain(), `import './plugins/ionic.js'`);

  api.render({
    './src/plugins/ionic.js': './templates/src/plugins/ionic.js',
    './src/ionic-variables.scss': './templates/src/ionic-variables.scss'
  });

  // api.render({
  // });
  // api.extendPackage({});

  api.onCreateComplete(() => {});
};
