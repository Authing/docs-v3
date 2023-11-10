# 创建 Webhook

<!--
  警告⚠️：
  不要直接修改该文档，
  https://github.com/Authing/authing-docs-factory
  使用该项目进行生成
-->

<LastUpdated />

> 此文档根据 https://github.com/authing/authing-docs-factory 基于 https://api-explorer.authing.cn V3 API 自动生成，和 API 参数、返回结果保持一致，如此文档描述有误，请以 V3 API 为准。

你需要指定 Webhook 名称、Webhook 回调地址、请求数据格式、用户真实名称来创建 Webhook。还可选是否启用、请求密钥进行创建

## 方法名称

`ManagementClient.CreateWebhook`

## 请求参数

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:60px">默认值</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- | ---- | ---- | ---- | ---- | ---- |
| contentType | string | 是 | - | 请求数据格式  | `application/json` |
| events | string[] | 是 | - | 用户真实名称，不具备唯一性。 示例值: 张三  | `["user:created"]` |
| url | string | 是 | - | Webhook 回调地址  | `https://example.com/callback` |
| name | string | 是 | - | Webhook 名称  | `用户创建事件` |
| enabled | boolean | 否 | - | 是否启用  | `true` |
| secret | string | 否 | - | 请求密钥  | `xxxxxxxxxxxx` |




## 请求响应

类型： `CreateWebhookRespDto`

| 名称 | 类型 | 描述 |
| ---- | ---- | ---- |
| statusCode | number | 业务状态码，可以通过此状态码判断操作是否成功，200 表示成功。 |
| message | string | 描述信息 |
| apiCode | number | 细分错误码，可通过此错误码得到具体的错误类型。详情可以查看开发准备中的 apiCode 细分说明 |
| requestId | string | 请求 ID。当请求失败时会返回。 |
| data | <a href="#WebhookDto">WebhookDto</a> | 响应数据 |



示例结果：

```json
{
  "statusCode": 200,
  "message": "操作成功",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "webhookId": "6229ffaxxxxxxxxcade3e3d9",
    "createdAt": "2022-07-03T02:20:30.000Z",
    "updatedAt": "2022-07-03T02:20:30.000Z",
    "name": "用户创建事件",
    "url": "https://example.com/callback",
    "contentType": "application/json",
    "enabled": true,
    "events": "[\"user:created\"]",
    "secret": "xxxxxxxxxxxx"
  }
}
```

## 数据结构


### <a id="WebhookDto"></a> WebhookDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| webhookId | string | 是 | Webhook ID   |  `6229ffaxxxxxxxxcade3e3d9` |
| createdAt | string | 是 | 创建时间   |  `2022-07-03T02:20:30.000Z` |
| updatedAt | string | 是 | 更新时间   |  `2022-07-03T02:20:30.000Z` |
| name | string | 是 | Webhook 名称   |  `用户创建事件` |
| url | string | 是 | Webhook 回调地址   |  `https://example.com/callback` |
| contentType | string | 是 | 请求数据格式   | application/json |
| enabled | boolean | 是 | 是否启用   |  `true` |
| events | array | 否 | 用户真实名称，不具备唯一性。 示例值: 张三   |  `["user:created"]` |
| secret | string | 否 | 请求密钥   |  `xxxxxxxxxxxx` |


