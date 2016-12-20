var app = require('angular').module('app');

app.service('Posts', require('./posts'));
app.factory('Applicants', require('./applicants'));