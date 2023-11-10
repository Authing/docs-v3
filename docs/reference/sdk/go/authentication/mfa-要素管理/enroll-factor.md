# 绑定 MFA 认证要素

<!--
  警告⚠️：
  不要直接修改该文档，
  https://github.com/Authing/authing-docs-factory
  使用该项目进行生成
-->

<LastUpdated />

> 此文档根据 https://github.com/authing/authing-docs-factory 基于 https://api-explorer.authing.cn V3 API 自动生成，和 API 参数、返回结果保持一致，如此文档描述有误，请以 V3 API 为准。


绑定 MFA 要素。

## 方法名称

`AuthenticationClient.EnrollFactor`

## 请求参数

| 名称 | 类型 | <div style="width:80px">是否必填</div> | 默认值 | <div style="width:300px">描述</div> | <div style="width:200px"></div>示例值</div> |
| ---- | ---- | ---- | ---- | ---- | ---- |
| enrollmentData | <a href="#EnrollFactorEnrollmentDataDto">EnrollFactorEnrollmentDataDto</a> | 是 | - | 绑定 MFA 认证要素时，对应认证要素要求的验证信息。  |  |
| enrollmentToken | string | 是 | - | 「发起绑定 MFA 认证要素请求」接口返回的 enrollmentToken，此 token 有效时间为一分钟。  | `TQoCISidM0kBji0dxRi3afSDtkvvMiUphenIgLF87y+JOw4T8fDWOsHHXIcvZ2EVESXhTrfGyh1iGf52Cg9e9byeFQvm1VZ0QWrwmzwpntFAVtf1IP9LqVhmzXhBMFvLOcU/z1Eh/n0CrwX0uHNpJoMW9lp9AqHd9HvauaGKX+Y=` |
| factorType | string | 是 | - | MFA 认证要素类型：<br>- `OTP`: OTP<br>- `SMS`: 短信<br>- `EMAIL`: 邮件<br>- `FACE`: 人脸<br>        | `SMS` |




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

    print_r($data);
    reqDto := &dto.EnrollFactorDto{
        EnrollmentData:  dto.EnrollFactorEnrollmentDataDto{PassCode: "1234"},
        // 需要替换成 sendEnrollFactorRequest 接口返回的真实 EnrollmentToken
        EnrollmentToken: "xxxx",
        FactorType:      "SMS",
    }
    respDto := client.EnrollFactor(reqDto)
	fmt.Println(respDto)
}

```




## 请求响应

类型： `EnrollFactorRespDto`

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


### <a id="EnrollFactorEnrollmentDataDto"></a> EnrollFactorEnrollmentDataDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| passCode | string | 否 | 绑定短信、邮箱验证码、OTP 类型的认证要素时，需要传此参数。值为短信/邮箱/OTP 验证码。   |  `123456` |
| photo | string | 否 | 绑定 FACE 类型的认证要素时，需要传此参数。值为绑定人脸图片链接。   |  `132434235ad244` |
| isExternalPhoto | boolean | 否 | 绑定 FACE 类型的认证要素时，需要传此参数。是否是外部链接图片。    |  `true` |


