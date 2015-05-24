Package.describe({
  name: 'interwebs:framework7',
  summary: "Framework7 (latest) for Meteor",
  version: '1.0.0',
  git: 'https://github.com/michelalbers/meteor-framework7'
});

Package.on_use(function (api) {

  api.add_files('Framework7/dist/css/framework7.min.css', 'client');
  api.add_files('Framework7/dist/css/framework7.themes.min.css', 'client');
  api.add_files('Framework7/dist/js/framework7.min.js', 'client');

  api.add_files([
    'Framework7/dist/img/i-f7.png',
    'Framework7/dist/img/i-form-calendar.png',
    'Framework7/dist/img/i-form-comment.png',
    'Framework7/dist/img/i-form-email.png',
    'Framework7/dist/img/i-form-gender.png',
    'Framework7/dist/img/i-form-name.png',
    'Framework7/dist/img/i-form-password.png',
    'Framework7/dist/img/i-form-settings.png',
    'Framework7/dist/img/i-form-tel.png',
    'Framework7/dist/img/i-form-toggle.png',
    'Framework7/dist/img/i-form-url.png'
    ], 'client');

});
