import fs from 'fs-extra'
import path from 'path'
import { buildConfig } from '../vite.config'
import { fileURLToPath } from 'url'
import { build, InlineConfig, defineConfig, UserConfig } from 'vite'

const __filename = fileURLToPath(import.meta.url)

// 👇️ "/home/john/Desktop/javascript"
const __dirname = path.dirname(__filename)
console.log('directory-name 👉️', __dirname)

const buildAll = async () => {
  // 全量打包
  // await build(defineConfig(config as UserConfig) as InlineConfig)
  const { outDir: buildConfigOutDir = 'assets' } = buildConfig
  const srcDir = path.resolve(__dirname, '../src/')

  fs.readdirSync(srcDir)
    .filter((name) => {
      // 只要目录不要文件，且里面包含index.ts
      const componentDir = path.resolve(srcDir, name)
      const isDir = fs.lstatSync(componentDir).isDirectory()
      return isDir && fs.readdirSync(componentDir).includes('index.ts')
    })
    .forEach(async (name) => {
      const outDir = path.resolve(srcDir, '../', buildConfigOutDir, name)
      const custom = {
        lib: {
          entry: path.resolve(srcDir, name),
          name, // 导出模块名
          fileName: `index`,
          formats: [`es`, `umd`, 'iife'],
        },
        outDir,
      }

      const newBuildConfig = Object.assign({}, buildConfig, custom)
      await build(defineConfig({ build: newBuildConfig } as UserConfig) as InlineConfig)

      fs.outputFile(
        path.resolve(outDir, `package.json`),
        `{
        "name": "ziyu-vite-ui/${name}",
        "main": "index.umd.js",
        "module": "index.umd.js"
      }`,
        `utf-8`,
      )
    })
}

buildAll()
