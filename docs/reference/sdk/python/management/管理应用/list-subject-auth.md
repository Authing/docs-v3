# 主体授权列表

<!--
  警告⚠️：
  不要直接修改该文档，
  https://github.com/Authing/authing-docs-factory
  使用该项目进行生成
-->

<LastUpdated />

> 此文档根据 https://github.com/authing/authing-docs-factory 基于 https://api-explorer.authing.cn V3 API 自动生成，和 API 参数、返回结果保持一致，如此文档描述有误，请以 V3 API 为准。

主体授权列表

## 方法名称

`ManagementClient.list_auth_subject`

## 请求参数

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:60px">默认值</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- | ---- | ---- | ---- | ---- | ---- |
| targetType | string | 是 | - | 主体类型  | `USER` |
| targetId | string | 是 | - | 主体 id  | `6229ffaxxxxxxxxcade3e3d9` |
| appName | string | 否 | - | 应用名称  | `应用一` |
| appTypeList | string[] | 否 | - | 应用类型列表  | `["SELFBUILT"]` |
| effect | string[] | 否 | - | 操作类型列表  | `["ALLOW","DENY"]` |
| enabled | boolean | 否 | - | 开关  | `true` |




## 请求响应

类型： `ListApplicationSubjectRespDto`

| 名称 | 类型 | 描述 |
| ---- | ---- | ---- |
| statusCode | number | 业务状态码，可以通过此状态码判断操作是否成功，200 表示成功。 |
| message | string | 描述信息 |
| apiCode | number | 细分错误码，可通过此错误码得到具体的错误类型。详情可以查看开发准备中的 apiCode 细分说明 |
| requestId | string | 请求 ID。当请求失败时会返回。 |
| data | <a href="#ListApplicationSubjectDataListDto">ListApplicationSubjectDataListDto</a> | 响应数据 |



示例结果：

```json
{
  "statusCode": 200,
  "message": "操作成功",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "list": {
      "appId": "5a597f35085a2000144a10ed",
      "appType": "SELFBUILT",
      "effect": "ALLOW"
    }
  }
}
```

## 数据结构


### <a id="ListApplicationSubjectDataListDto"></a> ListApplicationSubjectDataListDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| list | array | 是 | 列表数据 嵌套类型：<a href="#ListApplicationSubjectDataDto">ListApplicationSubjectDataDto</a>。  |  |


### <a id="ListApplicationSubjectDataDto"></a> ListApplicationSubjectDataDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| appId | string | 是 | 应用 ID   |  `5a597f35085a2000144a10ed` |
| logo | string | 是 | 应用 logo   |  |
| ext | string | 是 |    |  |
| template | string | 是 |    |  |
| appType | string | 是 | 应用类型：集成应用/自建应用   | INTEGRATED |
| effect | string | 是 | 允许/拒绝   | ALLOW |


