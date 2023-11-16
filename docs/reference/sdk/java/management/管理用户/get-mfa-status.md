# 获取用户 MFA 状态

<!--
  警告⚠️：
  不要直接修改该文档，
  https://github.com/Authing/authing-docs-factory
  使用该项目进行生成
-->

<LastUpdated />

> 此文档根据 https://github.com/authing/authing-docs-factory 基于 https://api-explorer.authing.cn V3 API 自动生成，和 API 参数、返回结果保持一致，如此文档描述有误，请以 V3 API 为准。

获取用户 MFA 状态，即 MFA 触发数据。

## 方法名称

`ManagementClient.getUserMfaStatus`

## 请求参数

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:60px">默认值</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- | ---- | ---- | ---- | ---- | ---- |
 | userId | string  | 是 | - | 用户的唯一标志，可以是用户 ID、用户名、邮箱、手机号、externalId、在外部身份源的 ID，详情见 userIdType 字段的说明。默认为用户 id 。  | `6229ffaxxxxxxxxcade3e3d9` |
 | userIdType | string  | 否 | user_id | 用户 ID 类型，默认值为 `user_id`，可选值为：<br>- `user_id`: Authing 用户 ID，如 `6319a1504f3xxxxf214dd5b7`<br>- `phone`: 用户手机号<br>- `email`: 用户邮箱<br>- `username`: 用户名<br>- `external_id`: 用户在外部系统的 ID，对应 Authing 用户信息的 `externalId` 字段<br>- `identity`: 用户的外部身份源信息，格式为 `<extIdpId>:<userIdInIdp>`，其中 `<extIdpId>` 为 Authing 身份源的 ID，`<userIdInIdp>` 为用户在外部身份源的 ID。<br>示例值：`62f20932716fbcc10d966ee5:ou_8bae746eac07cd2564654140d2a9ac61`。<br>- `sync_relation`: 用户的外部身份源信息，格式为 `<provier>:<userIdInIdp>`，其中 `<provier>` 为同步身份源类型，如 wechatwork, lark；`<userIdInIdp>` 为用户在外部身份源的 ID。<br>示例值：`lark:ou_8bae746eac07cd2564654140d2a9ac61`。<br>  | `user_id` |




## 请求响应

类型： `GetMapInfoRespDto`

| 名称 | 类型 | 描述 |
| ---- | ---- | ---- |
| statusCode | number | 业务状态码，可以通过此状态码判断操作是否成功，200 表示成功。 |
| message | string | 描述信息 |
| apiCode | number | 细分错误码，可通过此错误码得到具体的错误类型（成功请求不返回）。详细错误码列表请见：[API Code 列表](https://api-explorer.authing.cn/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId | string | 请求 ID。当请求失败时会返回。 |
| data | <a href="#GetMfaInfoDataDto">GetMfaInfoDataDto</a> | MFA Factor 详情 |



示例结果：

```json
{
  "statusCode": 200,
  "message": "操作成功",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "mfaToken": "xxxxxxx",
    "mfaPhone": "132xxxxx1234",
    "mfaPhoneCountryCode": "+86",
    "mfaEmail": "authing@authing.com",
    "nickname": "test",
    "username": "test",
    "phone": "123xxxx1234",
    "phoneCountryCode": "+86",
    "applicationMfa": {
      "mfaPolicy": "EMAIL",
      "status": 1
    }
  }
}
```

## 数据结构


### <a id="GetMfaInfoDataDto"></a> GetMfaInfoDataDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| mfaToken | string | 是 | MFA Token   |  `xxxxxxx` |
| mfaPhone | string | 否 | MFA 绑定的手机号   |  `132xxxxx1234` |
| mfaPhoneCountryCode | string | 否 | MFA 绑定的手机区号   |  `+86` |
| mfaEmail | string | 否 | MFA 绑定的邮箱   |  `authing@authing.com` |
| nickname | string | 否 | 用户昵称   |  `test` |
| username | string | 否 | 用户名   |  `test` |
| phone | string | 否 | 用户手机号   |  `123xxxx1234` |
| phoneCountryCode | string | 否 | 用户手机区号   |  `+86` |
| faceMfaEnabled | boolean | 否 | 人脸校验是否开启   |  |
| totpMfaEnabled | boolean | 否 | OTP 校验是否开启   |  |
| applicationMfa | array | 是 | MFA Factor 列表 嵌套类型：<a href="#ApplicationMfaDto">ApplicationMfaDto</a>。  |  |


### <a id="ApplicationMfaDto"></a> ApplicationMfaDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| mfaPolicy | string | 是 | MFA 类型   |  `EMAIL` |
| status | number | 是 | MFA 状态   |  `1` |
| sort | number | 是 | MFA 排序   |  |


