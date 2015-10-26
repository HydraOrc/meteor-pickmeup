Package.describe({
  name: 'hydraorc:pickmeup',
  version: '1.0.0',
  // Brief, one-line summary of the package.
  summary: 'Simple, powerful and customizable datepicker. Thanks to https://github.com/nazar-pc/pickmeup',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/hydraorc/meteor-pickmeup.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.0.2');
  api.use('jquery');
  api.addFiles('lib/jquery.pickmeup.js', 'client');
  api.addFiles('lib/pickmeup.css', 'client');
});
