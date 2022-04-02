const fs = require('fs-extra');
const ora = require('ora');
const path = require('path');

const getCommnadPath = () => {
  const commandDirPath = path.join(__dirname, '..', 'bin', 'command')
  try {
    const files = fs.readdirSync(commandDirPath);
    return files.map(file => `${commandDirPath}\\${file}`)
  } catch (error) {
    throw new Error(error);
  }
};

// 添加加载动画
const wrapLoading = async (fn, message, ...args) => {
  // 使用 ora 初始化，传入提示信息 message
  const spinner = ora(message);
  // 开始加载动画
  spinner.start();

  try {
    // 执行传入方法 fn
    const result = await fn(...args);
    // 状态为修改为成功
    spinner.succeed();
    return result;
  } catch (error) {
    // 状态为修改为失败
    spinner.fail('Request failed, refetch ...')
  }
};

module.exports = {
  getCommnadPath,
  wrapLoading,
};
