# 发送邮件

<!--
  警告⚠️：
  不要直接修改该文档，
  https://github.com/Authing/authing-docs-factory
  使用该项目进行生成
-->

<LastUpdated />

> 此文档根据 https://github.com/authing/authing-docs-factory 基于 https://api-explorer.authing.cn V3 API 自动生成，和 API 参数、返回结果保持一致，如此文档描述有误，请以 V3 API 为准。


发送邮件时必须指定邮件 Channel，每个邮箱同一 Channel 在一分钟内只能发送一次。

## 方法名称

`AuthenticationClient.SendEmail`

## 请求参数

| 名称 | 类型 | <div style="width:80px">是否必填</div> | 默认值 | <div style="width:300px">描述</div> | <div style="width:200px"></div>示例值</div> |
| ---- | ---- | ---- | ---- | ---- | ---- |
| channel | string | 是 | - | 短信通道，指定发送此短信的目的：<br>- `CHANNEL_LOGIN`: 用于用户登录<br>- `CHANNEL_REGISTER`: 用于用户注册<br>- `CHANNEL_RESET_PASSWORD`: 用于重置密码<br>- `CHANNEL_VERIFY_EMAIL_LINK`: 用于验证邮箱地址<br>- `CHANNEL_UPDATE_EMAIL`: 用于修改邮箱<br>- `CHANNEL_BIND_EMAIL`: 用于绑定邮箱<br>- `CHANNEL_UNBIND_EMAIL`: 用于解绑邮箱<br>- `CHANNEL_VERIFY_MFA`: 用于验证 MFA<br>- `CHANNEL_UNLOCK_ACCOUNT`: 用于自助解锁<br>- `CHANNEL_COMPLETE_EMAIL`: 用于注册/登录时补全邮箱信息   <br>- `CHANNEL_DELETE_ACCOUNT`: 用于注销账号<br>  | `CHANNEL_LOGIN` |
| email | string | 是 | - | 邮箱，不区分大小写  | `test@example.com` |




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
	    // 使用用户的 access_token 初始化 AuthenticationClient，access_token 可以通过登录接口获取
    client.SetAccessToken("USER_ACCESS_TOKEN")

    reqDto := &dto.SendEmailDto{
		Channel: "CHANNEL_LOGIN",
		Email:   "test@example.com",
	}
	respDto := client.SendEmail(reqDto)

	fmt.Println(respDto)
}

```




## 请求响应

类型： `SendEmailRespDto`

| 名称 | 类型 | 描述 |
| ---- | ---- | ---- |
| statusCode | number | 业务状态码，可以通过此状态码判断操作是否成功，200 表示成功。 |
| message | string | 描述信息 |
| apiCode | number | 细分错误码，可通过此错误码得到具体的错误类型。详情可以查看开发准备中的 apiCode 细分说明 |
| requestId | string | 请求 ID。当请求失败时会返回。 |



示例结果：

```json
{
  "statusCode": 200,
  "message": "操作成功",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c"
}
```

## 数据结构


