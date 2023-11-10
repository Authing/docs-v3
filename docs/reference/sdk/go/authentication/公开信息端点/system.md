# 获取服务器公开信息

<!--
  警告⚠️：
  不要直接修改该文档，
  https://github.com/Authing/authing-docs-factory
  使用该项目进行生成
-->

<LastUpdated />

> 此文档根据 https://github.com/authing/authing-docs-factory 基于 https://api-explorer.authing.cn V3 API 自动生成，和 API 参数、返回结果保持一致，如此文档描述有误，请以 V3 API 为准。


可端点可获取服务器的公开信息，如 RSA256 公钥、SM2 公钥、Authing 服务版本号等。

## 方法名称

`AuthenticationClient.GetSystemInfo`

## 请求参数

| 名称 | 类型 | <div style="width:80px">是否必填</div> | 默认值 | <div style="width:300px">描述</div> | <div style="width:200px"></div>示例值</div> |
| ---- | ---- | ---- | ---- | ---- | ---- |




## 示例代码

```go
package main

import (
	"fmt"
	"github.com/Authing/authing-golang-sdk/v3/authentication"
	"github.com/Authing/authing-golang-sdk/v3/dto"
)

func main() {
	options := &authentication.AuthenticationClientOptions{
        // 需要替换成你的 Authing 应用 ID
		AppId:       "AUTHING_APP_ID",
        // 需要替换成你的 Authing 应用密钥
		AppSecret:   "AUTHING_APP_SECRET",
        // 需要替换成你的 Authing 应用域名
		AppHost:     "AUTHING_APP_HOST",
        // 需要替换成你的 Authing 应用回调地址
		RedirectUri: "AUTHING_APP_REDIRECT_URI",
	}
	client, err := authentication.NewAuthenticationClient(options)
	if err != nil {
		// The exception needs to be handled by the developer.
	}
	  respDto := client.GetSystemInfo()
	fmt.Println(respDto)
}

```




## 请求响应

类型： `SystemInfoResp`

| 名称 | 类型 | 描述 |
| ---- | ---- | ---- |
| rsa | <a href="#SystmeInfoRSAConfig">SystmeInfoRSAConfig</a> | RSA256 加密配置信息 |
| sm2 | <a href="#SystmeInfoSM2Config">SystmeInfoSM2Config</a> | 国密 SM2 加密配置信息 |
| version | <a href="#SystmeInfoVersion">SystmeInfoVersion</a> | 国密 SM2 加密配置信息 |
| publicIps | array | Authing 服务对外 IP 列表 |



示例结果：

```json
{
  "rsa": {
    "publicKey": "xxxxxxxxxxxxxxxxxxxxxx"
  },
  "sm2": {
    "publicKey": "xxxxxxxxxxxxxxxxxxxxxx"
  },
  "version": {
    "server": "2.0.0",
    "console": "2.0.0",
    "login": "2.0.0"
  }
}
```

## 数据结构


### <a id="SystmeInfoRSAConfig"></a> SystmeInfoRSAConfig

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| publicKey | string | 是 | RSA256 公钥   |  `xxxxxxxxxxxxxxxxxxxxxx` |


### <a id="SystmeInfoSM2Config"></a> SystmeInfoSM2Config

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| publicKey | string | 是 | SM2 公钥   |  `xxxxxxxxxxxxxxxxxxxxxx` |


### <a id="SystmeInfoVersion"></a> SystmeInfoVersion

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| server | string | 是 | Authing 核心服务版本号   |  `2.0.0` |
| console | string | 是 | Authing 控制台版本号   |  `2.0.0` |
| login | string | 是 | Authing 托管登录页版本号   |  `2.0.0` |


