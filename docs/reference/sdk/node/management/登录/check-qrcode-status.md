# 查询二维码状态

<!--
  警告⚠️：
  不要直接修改该文档，
  https://github.com/Authing/authing-docs-factory
  使用该项目进行生成
-->

<LastUpdated />

按照用户扫码顺序，共分为未扫码、已扫码等待用户确认、用户同意/取消授权、二维码过期以及未知错误六种状态，前端应该通过不同的状态给到用户不同的反馈。你可以通过下面这篇文章了解扫码登录详细的流程：https://docs.authing.cn/v2/concepts/how-qrcode-works.html.

## 方法名称

`ManagementClient.checkQrCodeStatus`

## 请求参数

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:60px">默认值</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- | ---- | ---- | ---- | ---- | ---- |
 | qrcodeId | string  | 是 | - | 二维码唯一 ID  |  |




## 请求响应

类型： `CheckQRCodeStatusRespDto`

| 名称 | 类型 | 描述 |
| ---- | ---- | ---- |
| statusCode | number | 业务状态码，可以通过此状态码判断操作是否成功，200 表示成功。 |
| message | string | 描述信息 |
| apiCode | number | 细分错误码，可通过此错误码得到具体的错误类型。 |
| requestId | string | 请求 ID。当请求失败时会返回。 |
| data | <a href="#CheckQRCodeStatusDataDto">CheckQRCodeStatusDataDto</a> | 响应数据 |



示例结果：

```json
{
  "statusCode": 200,
  "message": "操作成功",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "status": "PENDING",
    "briefUserInfo": "当二维码状态为已扫码、已授权、已取消授权时返回。如果在控制台应用安全 - 通用安全 - 登录安全 - APP 扫码登录 Web 安全中未开启「Web 轮询接口返回完整用户信息」（默认处于关闭状态），接口只会返回用户的头像和显示名称，前端可以基于此渲染用户昵称和头像，给到用户已成功扫码的提示。",
    "tokenSet": {
      "access_token": "eyJhbGciOiJSxxxxx",
      "id_token": "eyJhbGxxxx",
      "refresh_token": "WPsGJbvpBjqXz6IJIr1UHKyrdVF",
      "token_type": "bearer",
      "expire_in": 7200
    }
  }
}
```

## 数据结构


### <a id="CheckQRCodeStatusDataDto"></a> CheckQRCodeStatusDataDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| status | string | 是 | 二维码状态。按照用户扫码顺序，共分为 PENDING(未扫码)、SCANNED(已扫码等待用户确认)、AUTHORIZED(用户已授权)、CANCELLED(取消授权)、EXPIRED(二维码过期)以及 ERROR(未知错误)六种状态。   | PENDING |
| ticket | string | 否 | 当二维码状态为已授权时返回。如果在控制台应用安全 - 通用安全 - 登录安全 - APP 扫码登录 Web 安全中未开启「Web 轮询接口返回完整用户信息」（默认处于关闭状态），会返回此 ticket，用于换取完整的用户信息。   |  |
| briefUserInfo |  | 否 |  嵌套类型：<a href="#QRCodeStatusBriefUserInfoDto">QRCodeStatusBriefUserInfoDto</a>。  |  `当二维码状态为已扫码、已授权、已取消授权时返回。如果在控制台应用安全 - 通用安全 - 登录安全 - APP 扫码登录 Web 安全中未开启「Web 轮询接口返回完整用户信息」（默认处于关闭状态），接口只会返回用户的头像和显示名称，前端可以基于此渲染用户昵称和头像，给到用户已成功扫码的提示。` |
| tokenSet |  | 否 | 当二维码状态为已授权并且在控制台应用安全 - 通用安全 - 登录安全 - APP 扫码登录 Web 安全中开启了「Web 轮询接口返回完整用户信息」（默认处于关闭状态）开关，此数据才会返回。推荐使用 ticket 换取用户信息。 嵌套类型：<a href="#LoginTokenResponseDataDto">LoginTokenResponseDataDto</a>。  |  |


### <a id="QRCodeStatusBriefUserInfoDto"></a> QRCodeStatusBriefUserInfoDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| displayName | string | 是 | 用户显示昵称   |  |
| photo | string | 是 | 用户头像   |  |


### <a id="LoginTokenResponseDataDto"></a> LoginTokenResponseDataDto

!!!include(reference/sdk/common/token_response_table.md)!!!


