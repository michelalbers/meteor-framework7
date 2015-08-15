Package.describe({
  name: 'interwebs:framework7',
  summary: "Framework7 (latest) for Meteor",
  version: '1.0.1',
  git: 'https://github.com/michelalbers/meteor-framework7'
});

Package.on_use(function (api) {

  api.add_files('Framework7/dist/css/framework7.material.css', 'client');
  api.add_files('Framework7/dist/css/framework7.material.colors.css', 'client');
  api.add_files('Framework7/dist/js/framework7.js', 'client');

  api.add_files([
    'Framework7/dist/img/i-f7-ios.png',
    'Framework7/dist/img/i-f7-material.png',
    'Framework7/dist/img/i-form-calendar-ios.svg',
    'Framework7/dist/img/i-form-calendar-material.svg',
    'Framework7/dist/img/i-form-comment-ios.svg',
    'Framework7/dist/img/i-form-comment-material.svg',
    'Framework7/dist/img/i-form-email-ios.svg',
    'Framework7/dist/img/i-form-email-material.svg',
    'Framework7/dist/img/i-form-gender-ios.svg',
    'Framework7/dist/img/i-form-gender-material.svg',
    'Framework7/dist/img/i-form-name-ios.svg',
    'Framework7/dist/img/i-form-name-material.svg',
    'Framework7/dist/img/i-form-password-ios.svg',
    'Framework7/dist/img/i-form-password-material.svg',
    'Framework7/dist/img/i-form-settings-ios.svg',
    'Framework7/dist/img/i-form-settings-material.svg',
    'Framework7/dist/img/i-form-tel-ios.svg',
    'Framework7/dist/img/i-form-tel-material.svg',
    'Framework7/dist/img/i-form-toggle-ios.svg',
    'Framework7/dist/img/i-form-toggle-material.svg',
    'Framework7/dist/img/i-form-url-ios.svg',
    'Framework7/dist/img/i-form-url-material.svg'
    ], 'client');

});
