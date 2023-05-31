import 'babel-polyfill';

const formHandler = require('./components/formHandler');
const linkHandler = require('./components/linkHandler');
const audioTag = require('./components/audioTag');

linkHandler();
formHandler();
audioTag.init();