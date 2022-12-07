import { promisify } from 'util'
import download from 'download-git-repo' //模拟git下载的包
import ora from 'ora' //进度条的包
export default async (repo, desc) => {
  const process = ora(`下载.....${repo}`)
  process.start()
  await promisify(download)(repo, desc)
  process.succeed()
}
