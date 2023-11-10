# 获取 Webhook 列表

<!--
  警告⚠️：
  不要直接修改该文档，
  https://github.com/Authing/authing-docs-factory
  使用该项目进行生成
-->

<LastUpdated />

> 此文档根据 https://github.com/authing/authing-docs-factory 基于 https://api-explorer.authing.cn V3 API 自动生成，和 API 参数、返回结果保持一致，如此文档描述有误，请以 V3 API 为准。

获取 Webhook 列表，可选页数、分页大小来获取

## 方法名称

`ManagementClient.listWebhooks`

## 请求参数

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:60px">默认值</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- | ---- | ---- | ---- | ---- | ---- |
 | page | number  | 否 | 1 | 当前页数，从 1 开始  | `1` |
 | limit | number  | 否 | 10 | 每页数目，最大不能超过 50，默认为 10  | `10` |




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

  const result = await managementClient.listWebhooks({
    page: 1,
    limit: 10
  });


  console.log(JSON.stringify(result, null, 2));
})();

```




## 请求响应

类型： `GetWebhooksRespDto`

| 名称 | 类型 | 描述 |
| ---- | ---- | ---- |
| statusCode | number | 业务状态码，可以通过此状态码判断操作是否成功，200 表示成功。 |
| message | string | 描述信息 |
| apiCode | number | 细分错误码，可通过此错误码得到具体的错误类型。详情可以查看开发准备中的 apiCode 细分说明 |
| requestId | string | 请求 ID。当请求失败时会返回。 |
| data | <a href="#GetWebhooksData">GetWebhooksData</a> | 响应数据 |



示例结果：

```json
{
  "statusCode": 200,
  "message": "操作成功",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "totalCount": 1,
    "list": {
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
}
```

## 数据结构


### <a id="GetWebhooksData"></a> GetWebhooksData

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| totalCount | number | 是 | 记录总数   |  `1` |
| list | array | 是 | 返回列表 嵌套类型：<a href="#WebhookDto">WebhookDto</a>。  |  |


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


