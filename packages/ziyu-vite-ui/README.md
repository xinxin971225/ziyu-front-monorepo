# init

通过 vite 可以快速的基于 ts 启动服务，无需额外 babel 编译，同时内置了打包功能

vue3.x 的包并不包含对 SFC 文件的编译，需要通过 vite 插件实现支持，jsx 也一样

组件库的使用方式可以是按需也可以是全量，所以在处理 entey 文件是也要实现两类导出形式

## 踩坑日记

build 的入口文件一定要在根目录下，不要在 src 里面，否则不能正常 build 出.d 文件 ts .d 文件的打包需要在 tsconfig 内配置，并且通过插件解析 build 后的包可以如何引入的行为，取决于 package.json 内的 exports 的配置

## questionList

rollup 在 monorepo 下对 export default 的读取有问题 导致打包出错

尝试加入@rollup/plugin-commonjs 可以打包正常，但是无法读取打包产物
