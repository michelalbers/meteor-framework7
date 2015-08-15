Package.describe({
  name: 'interwebs:framework7',
  summary: "Framework7 (latest) for Meteor",
  version: '1.0.1',
  git: 'https://github.com/michelalbers/meteor-framework7'
});

Package.on_use(function (api) {

  api.add_files('Framework7/dist/css/framework7.min.css', 'client');
  api.add_files('Framework7/dist/css/framework7.themes.min.css', 'client');
  api.add_files('Framework7/dist/js/framework7.min.js', 'client');

  api.add_files([
    'Framework7/dist/img/i-f7-ios.png',
    'Framework7/dist/img/i-f7-material.png',
    'i-form-calendar-ios.svg',
    'i-form-calendar-material.svg',
    'i-form-comment-ios.svg',
    'i-form-comment-material.svg',
    'i-form-email-ios.svg',
    'i-form-email-material.svg',
    'i-form-gender-ios.svg',
    'i-form-gender-material.svg',
    'i-form-name-ios.svg',
    'i-form-name-material.svg',
    'i-form-password-ios.svg',
    'i-form-password-material.svg',
    'i-form-settings-ios.svg',
    'i-form-settings-material.svg',
    'i-form-tel-ios.svg',
    'i-form-tel-material.svg',
    'i-form-toggle-ios.svg',
    'i-form-toggle-material.svg',
    'i-form-url-ios.svg',
    'i-form-url-material.svg'
    ], 'client');

});
