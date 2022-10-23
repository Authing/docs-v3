# 生成绑定外部身份源的链接

<!--
  警告⚠️：
  不要直接修改该文档，
  https://github.com/Authing/authing-docs-factory
  使用该项目进行生成
-->

<LastUpdated />


此接口用于生成绑定外部身份源的链接，生成之后可以引导用户进行跳转。
  

## 方法名称

`AuthenticationClient.GenerateLinkExtIdpUrl`

## 请求参数

| 名称 | 类型 | <div style="width:80px">是否必填</div> | 默认值 | <div style="width:300px">描述</div> | <div style="width:200px"></div>示例值</div> |
| ---- | ---- | ---- | ---- | ---- | ---- |
 | id_token | string  | 是 | - | 用户的 id_token  |  |
 | app_id | string  | 是 | - | Authing 应用 ID  |  |
 | ext_idp_conn_identifier | string  | 是 | - | 外部身份源连接唯一标志  | `my-wechat` |




## 示例代码

```go
package main

import (
	"fmt"
	"github.com/Authing/authing-golang-sdk/authentication"
	"github.com/Authing/authing-golang-sdk/dto"
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
	    reqDto := &dto.GenerateLinkExtidpUrlDto{
		ExtIdpConnIdentifier: "xxxx",
		AppId:                "xxxx",
        // 需要替换为用户真实的 id_token
		IdToken:              "xxxx",
	}
	respDto := client.GenerateLinkExtIdpUrl(reqDto)

	fmt.Println(respDto)
}

```




## 请求响应

类型： `GenerateBindExtIdpLinkRespDto`

| 名称 | 类型 | 描述 |
| ---- | ---- | ---- |
| statusCode | number | 业务状态码，可以通过此状态码判断操作是否成功，200 表示成功。 |
| message | string | 描述信息 |
| apiCode | number | 细分错误码，可通过此错误码得到具体的错误类型。 |
| requestId | string | 请求 ID。当请求失败时会返回。 |
| data | <a href="#GenerateBindExtIdpLinkDataDto">GenerateBindExtIdpLinkDataDto</a> | 响应数据 |



示例结果：

```json
{
  "statusCode": 200,
  "message": "操作成功",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {}
}
```

## 数据结构


### <a id="GenerateBindExtIdpLinkDataDto"></a> GenerateBindExtIdpLinkDataDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| url | string | 是 | 用户绑定外部身份源的链接   |  |


