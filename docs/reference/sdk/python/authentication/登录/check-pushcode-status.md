# 查询推送码状态

<!--
  警告⚠️：
  不要直接修改该文档，
  https://github.com/Authing/authing-docs-factory
  使用该项目进行生成
-->

<LastUpdated />

> 此文档根据 https://github.com/authing/authing-docs-factory 基于 https://api-explorer.authing.cn V3 API 自动生成，和 API 参数、返回结果保持一致，如此文档描述有误，请以 V3 API 为准。


按照推送码使用顺序，共分为已推送、等待用户 同意/取消 授权、推送码过期以及未知错误五种状态，前端应该通过不同的状态给到用户不同的反馈。

## 方法名称

`AuthenticationClient.check_push_code_status`

## 请求参数

| 名称 | 类型 | <div style="width:80px">是否必填</div> | 默认值 | <div style="width:300px">描述</div> | <div style="width:200px"></div>示例值</div> |
| ---- | ---- | ---- | ---- | ---- | ---- |
 | pushCodeId | string  | 是 | - | 推送码（推送登录唯一 ID）  |  |




## 请求响应

类型： `CheckPushCodeStatusRespDto`

| 名称 | 类型 | 描述 |
| ---- | ---- | ---- |
| statusCode | number | 业务状态码，可以通过此状态码判断操作是否成功，200 表示成功。 |
| message | string | 描述信息 |
| apiCode | number | 细分错误码，可通过此错误码得到具体的错误类型（成功请求不返回）。详细错误码列表请见：[API Code 列表](https://api-explorer.authing.cn/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId | string | 请求 ID。当请求失败时会返回。 |
| data | <a href="#CheckPushCodeStatusDataDto">CheckPushCodeStatusDataDto</a> | 响应数据 |



示例结果：

```json
{
  "statusCode": 200,
  "message": "操作成功",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "status": "PUSHED",
    "tokenSet": {
      "scope": "openid profile",
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


### <a id="CheckPushCodeStatusDataDto"></a> CheckPushCodeStatusDataDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| status | string | 是 | 推送码状态。按照推送登录顺序，共分为 PUSHED(已推送)、AUTHORIZED(用户已授权)、CANCELLED(取消授权)、EXPIRED(推送登录过期)以及 ERROR(未知错误)五种状态。   | PUSHED |
| tokenSet |  | 否 | 当推送码状态为已授权，此数据才会返回。 嵌套类型：<a href="#LoginTokenResponseDataDto">LoginTokenResponseDataDto</a>。  |  |


### <a id="LoginTokenResponseDataDto"></a> LoginTokenResponseDataDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| scope | string | 否 | access_token 对应的 scope   |  `openid profile` |
| access_token | string | 否 | 接口调用凭据，在限制时间内被授权访问资源 API   |  `eyJhbGciOiJSxxxxx` |
| id_token | string | 否 | 用户的身份凭证，解析后会包含用户信息   |  `eyJhbGxxxx` |
| refresh_token | string | 否 | refresh_token 用于获取新的 AccessToken   |  `WPsGJbvpBjqXz6IJIr1UHKyrdVF` |
| token_type | string | 是 | token 类型   |  `bearer` |
| expire_in | number | 是 | 过期时间 单位是秒   |  `7200` |


