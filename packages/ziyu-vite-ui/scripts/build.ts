import fs from 'fs-extra'
import path from 'path'
import oldPackageJson from '../package.json'
import { buildConfig } from '../vite.config'
import { fileURLToPath } from 'url'
import { build, InlineConfig, defineConfig, UserConfig } from 'vite'
import { generateDTS } from './type'
const __filename = fileURLToPath(import.meta.url)

// ðï¸ "/home/john/Desktop/javascript"
const __dirname = path.dirname(__filename)
console.log('directory-name ðï¸', __dirname)

const buildAll = async () => {
  // å¨éæå
  // await build(defineConfig(config as UserConfig) as InlineConfig)
  await build()
  const { outDir: buildConfigOutDir = 'dist' } = buildConfig

  const packageJson = JSON.parse(JSON.stringify(oldPackageJson))
  // å¤å¶ Package.json æä»¶
  packageJson.main = 'ziyu-vite-ui.umd.js'
  packageJson.module = 'ziyu-vite-ui.mjs'
  packageJson.types = 'ziyu-vite-ui.d.ts'

  packageJson.exports = {
    '.': {
      import: './ziyu-vite-ui.mjs',
      require: './ziyu-vite-ui.umd.js',
    },
    './dist/style.css': './style.css',
  }

  fs.outputFile(
    path.resolve(buildConfigOutDir, `package.json`),
    JSON.stringify(packageJson, null, 2),
  )

  // æ·è´ README.mdæä»¶
  // fs.copyFileSync(path.resolve('./README.md'), path.resolve(buildConfigOutDir + '/README.md'))

  // çæéç½®DTSéç½®æä»¶å¥å£
  generateDTS(path.resolve(buildConfigOutDir, `ziyu-vite-ui.mjs`))

  const srcDir = path.resolve(__dirname, '../src/')

  fs.readdirSync(srcDir)
    .filter((name) => {
      // åªè¦ç®å½ä¸è¦æä»¶ï¼ä¸éé¢åå«index.ts
      const componentDir = path.resolve(srcDir, name)
      const isDir = fs.lstatSync(componentDir).isDirectory()
      return isDir && fs.readdirSync(componentDir).includes('index.ts')
    })
    .forEach(async (name) => {
      const outDir = path.resolve(srcDir, '../', buildConfigOutDir, name)
      const custom = {
        lib: {
          entry: path.resolve(srcDir, name),
          name, // å¯¼åºæ¨¡åå
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
