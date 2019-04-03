module.exports = (api, opts, rootOptions) => {
  const utils = require('./utils')(api);

  api.extendPackage({
    dependencies: { '@ionic/vue': '0.0.4' }
  });

  api.injectImports(utils.getMain(), `import './plugins/ionic.js'`);

  api.render({
    './src/plugins/ionic.js': './templates/src/plugins/ionic.js',
    './src/ionic-variables.css': './templates/src/ionic-variables.css'
  });
  api.onCreateComplete(() => {});
};
