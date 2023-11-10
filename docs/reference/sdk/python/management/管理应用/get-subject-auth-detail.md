# 主体授权详情

<!--
  警告⚠️：
  不要直接修改该文档，
  https://github.com/Authing/authing-docs-factory
  使用该项目进行生成
-->

<LastUpdated />

> 此文档根据 https://github.com/authing/authing-docs-factory 基于 https://api-explorer.authing.cn V3 API 自动生成，和 API 参数、返回结果保持一致，如此文档描述有误，请以 V3 API 为准。

主体授权详情

## 方法名称

`ManagementClient.detail_auth_subject`

## 请求参数

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:60px">默认值</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- | ---- | ---- | ---- | ---- | ---- |
 | targetId | string  | 是 | - | 主体 id  | `6229ffaxxxxxxxxcade3e3d9` |
 | targetType | string  | 是 | - | 主体类型  | `USER` |
 | appId | string  | 是 | - | 应用 ID  | `5a597f35085a2000144a10ed` |




## 请求响应

类型： `GetSubjectAuthRespDto`

| 名称 | 类型 | 描述 |
| ---- | ---- | ---- |
| statusCode | number | 业务状态码，可以通过此状态码判断操作是否成功，200 表示成功。 |
| message | string | 描述信息 |
| apiCode | number | 细分错误码，可通过此错误码得到具体的错误类型。详情可以查看开发准备中的 apiCode 细分说明 |
| requestId | string | 请求 ID。当请求失败时会返回。 |
| data | <a href="#GetSubjectAuthDataDto">GetSubjectAuthDataDto</a> | 响应数据 |



示例结果：

```json
{
  "statusCode": 200,
  "message": "操作成功",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "appId": "5a597f35085a2000144a10ed",
    "appName": "应用一",
    "reqTargetId": "6229ffaxxxxxxxxcade3e3d9",
    "reqTargetName": "dmy",
    "reqTargetType": "USER",
    "targetType": "USER",
    "targetName": "dgy",
    "authType": "SUBJECT"
  }
}
```

## 数据结构


### <a id="GetSubjectAuthDataDto"></a> GetSubjectAuthDataDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| appId | string | 是 | 应用 ID   |  `5a597f35085a2000144a10ed` |
| appName | string | 是 | 应用名称   |  `应用一` |
| reqTargetId | string | 是 | 请求的主体id   |  `6229ffaxxxxxxxxcade3e3d9` |
| reqTargetName | string | 是 | 请求的主体名称   |  `dmy` |
| reqTargetType | string | 是 | 请求的主体类型   | USER |
| targetType | string | 是 | 目标主体类型   | USER |
| targetName | string | 是 | 目标主体名称   |  `dgy` |
| authType | string | 是 | 授权类型   | DEFAULT |


