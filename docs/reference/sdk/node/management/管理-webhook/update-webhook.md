# 修改 Webhook 配置

<!--
  警告⚠️：
  不要直接修改该文档，
  https://github.com/Authing/authing-docs-factory
  使用该项目进行生成
-->

<LastUpdated />

> 此文档根据 https://github.com/authing/authing-docs-factory 基于 https://api-explorer.authing.cn V3 API 自动生成，和 API 参数、返回结果保持一致，如此文档描述有误，请以 V3 API 为准。

需要指定 webhookId，可选 Webhook 名称、Webhook 回调地址、请求数据格式、用户真实名称、是否启用、请求密钥参数进行修改 webhook

## 方法名称

`ManagementClient.updateWebhook`

## 请求参数

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:60px">默认值</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- | ---- | ---- | ---- | ---- | ---- |
| webhookId | string | 是 | - | Webhook ID  | `6229ffaxxxxxxxxcade3e3d9` |
| name | string | 否 | - | Webhook 名称  | `用户创建事件` |
| url | string | 否 | - | Webhook 回调地址  | `https://example.com/callback` |
| events | string[] | 否 | - | 用户真实名称，不具备唯一性。 示例值: 张三  | `["user:created"]` |
| contentType | string | 否 | - | 请求数据格式  | `application/json` |
| enabled | boolean | 否 | - | 是否启用  | `true` |
| secret | string | 否 | - | 请求密钥  | `xxxxxxxxxxxx` |




## 示例代码

```ts
import { ManagementClient, Models } from 'authing-node-sdk';

// 初始化 ManagementClient
const managementClient = new ManagementClient({
  // 需要替换成你的 Authing Access Key ID
  accessKeyId: 'AUTHING_ACCESS_KEY_ID',
  // 需要替换成你的 Authing Access Key Secret
  accessKeySecret: 'AUTHING_ACCESS_KEY_SECRET',
  // 如果是私有化部署的客户，需要设置 Authing 服务域名
  // host: 'https://api.your-authing-service.com'
});

(async () => {

  const result = await managementClient.updateWebhook({
    webhookId: '6229ffaxxxxxxxxcade3e3d9',
    name: '用户创建事件',
    url: 'https://example.com/callback',
    events: ['user:created'],
    contentType: Models.WebhookDto.contentType.APPLICATION_JSON,
    enabled: true,
    secret: 'xxxxxxxxxxxx'
  });


  console.log(JSON.stringify(result, null, 2));
})();

```




## 请求响应

类型： `UpdateWebhooksRespDto`

| 名称 | 类型 | 描述 |
| ---- | ---- | ---- |
| statusCode | number | 业务状态码，可以通过此状态码判断操作是否成功，200 表示成功。 |
| message | string | 描述信息 |
| apiCode | number | 细分错误码，可通过此错误码得到具体的错误类型（成功请求不返回）。详细错误码列表请见：[API Code 列表](https://api-explorer.authing.cn/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
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


