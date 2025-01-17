const fs = require('fs');
const path = require('path');
// 加载根目录的config.yaml
const { cosmiconfigSync } = require('cosmiconfig');
// 确保config.yaml存在
fs.appendFileSync(path.resolve(__dirname, '../../config.yaml'), '');

const config = cosmiconfigSync('config', {
  searchPlaces: ['config.yaml']
}).search();
console.log(process.env, '>>>>>>>>>>>>>>');
module.exports = {
  /** 站点基础路径 */
  basePath: process.env.SITE_BASE_PATH || '/v3/',
  config: config && config.config
};
