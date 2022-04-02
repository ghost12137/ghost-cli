#! /usr/bin/env node

const { program } = require('commander');
const chalk = require('chalk');
const figlet = require('figlet');
const { getCommnadPath } = require('../utils/utils');

const commandFiles = getCommnadPath();

commandFiles.forEach(file => {
  const commandObj = require(file);
  const curp = program
    .command(commandObj.command)
    .description(commandObj.description)
    .action(commandObj.action)
  commandObj.option && commandObj.option.forEach(option => {
    curp.option(...option);
  })
})

program
  // 配置版本号信息
  .version(`v${require('../package.json').version}`)
  .usage('<command> [option]');

program
  // 监听 --help 执行
  .on('--help', () => {
    // 使用 figlet 绘制 Logo
    console.log('\r\n' + figlet.textSync('ghost', {
      font: 'Ghoulish',
      horizontalLayout: 'default',
      verticalLayout: 'default',
      width: 80,
      whitespaceBreak: true
    }));

    // 新增说明信息
    console.log(`\r\nRun ${chalk.cyan('zr <command> --help')} for detailed usage of given command\r\n`)
  });

// 解析用户执行命令传入参数
program.parse(process.argv);