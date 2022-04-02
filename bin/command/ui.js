const uiAction = (value, options) => {
  console.log(value)
};

module.exports = {
  command: 'ui',
  description: 'start add open roc-cli ui',
  option: [
    ['-p, --port <port>', 'Port used for the UI Server']
  ],
  action: uiAction,
};
