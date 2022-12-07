#!/usr/bin/env node

import figlet from 'figlet' // 编写命令行内容带样式的包
import clear from 'clear'
import chalkAnimation from 'chalk-animation' // 为figlet 包生成的内容加上动效

import chalk from 'chalk'
import inquirer from 'inquirer'
// import { promisify } from 'util'

const log = (content) => console.log(chalk.green(content))
const opt = {
  'ZiYuUI应用模版(Vite)': 'ziyu-vite-ui',
  组件库脚手架: 'uiTemplate',
  退出: 'quit',
}

const question = [
  {
    type: 'rawlist' /* 选择框 */,
    message: '请选择要创建的项目？',
    name: 'operation',
    choices: Object.keys(opt),
  },
]
async function query() {
  const answer = await inquirer.prompt(question)
  log(JSON.stringify(answer, null, 2))
  if (answer.operation === '退出') return

  const { default: op } = await import(`../lib/operations/${opt[answer.operation]}.js`)
  await op()
}

// 打印欢迎画面
clear()
const logo = figlet.textSync('ZiYu UI!', {
  // font: "Ghost",
  horizontalLayout: 'default',
  verticalLayout: 'default',
  width: 80,
  whitespaceBreak: true,
})

const rainbow = chalkAnimation.rainbow(logo)
setTimeout(() => {
  rainbow.stop() // Animation stops
  query()
}, 500)
