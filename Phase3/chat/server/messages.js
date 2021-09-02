const moment = require('moment');

function formatMessage(username, text) {
  return {
    username,
    text,
    date: new Date().toLocaleString().split(',')[0],
    time: moment().format('h:mm a')
  };
}

module.exports = formatMessage;
