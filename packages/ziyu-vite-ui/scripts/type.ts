import handlebars from 'handlebars'
import fs from 'fs'
import { resolve } from 'path'
import { log } from './log'
/**
 * 获取组件列表
 * 通过解析entry.ts模块获取组件数据
 */
async function getComponents(input: string) {
  const entry = await import(input)
  log(entry)

  return Object.keys(entry)
    .filter((k) => k !== 'default')
    .map((k) => ({
      name: entry[k].name,
      component: k,
    }))
}

/**
 * 生成代码
 * @param meta 数据定义
 * @param filePath 目标文件路径
 * @param templatePath 模板文件路径
 */

// @ts-ignore
function generateCode(meta, filePath, templatePath) {
  if (fs.existsSync(templatePath)) {
    const content = fs.readFileSync(templatePath).toString()
    const result = handlebars.compile(content)(meta)
    fs.writeFileSync(filePath, result)
  }
  console.log(`🚀${filePath} 创建成功`)
}

/**
 * 生成类型定义文件 d.ts
 * @param components
 */
export async function generateDTS(entryPath: string) {
  const template = resolve(__dirname, './entry.d.ts.hbs')
  const dts = resolve(__dirname, entryPath.replace('.mjs', '.d.ts'))
  log(dts, 'dts')
  // 组件库数据
  const components = await getComponents(entryPath)
  // console.log('list', list)
  // 生成模版
  generateCode(
    {
      components,
    },
    dts,
    template,
  )
}
