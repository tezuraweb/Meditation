import 'babel-polyfill';

const formHandler = require('./components/formHandler');
const audioTag = require('./components/audioTag');

formHandler();
audioTag.init();