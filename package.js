Package.describe({
  name: 'moaclib:accounts',
  summary: 'Provides and updates the moac accounts in the Accounts collection',
  version: '0.1.0',
  git: 'https://github.com/innowells/meteor-package-accounts'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.use('underscore', ['client', 'server']);
  api.use('mongo', ['client', 'server']);

  api.use('frozeman:persistent-minimongo@0.1.8', 'client');
  api.use('moac:chain3@0.1.2', ['client', 'server']);

  api.export(['McAccounts'], ['client', 'server']);

  api.addFiles('accounts.js', ['client', 'server']);
});

// Package.onTest(function(api) {
//   api.use('tinytest');
//   api.use('moaclib:accounts');
//   api.addFiles('accounts-tests.js');
// });

