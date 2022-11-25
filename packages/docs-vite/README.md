# init

pnpm init

pnpm i ziyu-vite-ui --filter docs-vite

## 部署工具

[vercel](https://vercel.com/xinxin971225/ziyu-mini-vue)

## 踩坑记录

monorepo 包之间相互引用的时候，如果没有 build 会因为引用 package 内配置的路径应用不到 dist 下的相关文件出现 type 错误,

在重新 build 的时候又会全局扫描，导致 build 失败 需要调整路径或者忽略报错，build 完成后，报错就会消失
