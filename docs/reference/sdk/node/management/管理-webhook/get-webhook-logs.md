# 获取 Webhook 日志

<!--
  警告⚠️：
  不要直接修改该文档，
  https://github.com/Authing/authing-docs-factory
  使用该项目进行生成
-->

<LastUpdated />

> 此文档根据 https://github.com/authing/authing-docs-factory 基于 https://api-explorer.authing.cn V3 API 自动生成，和 API 参数、返回结果保持一致，如此文档描述有误，请以 V3 API 为准。

通过指定 webhookId，可选 page 和 limit 来获取 webhook 日志,如果 webhookId 不存在,不返回报错信息

## 方法名称

`ManagementClient.getWebhookLogs`

## 请求参数

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:60px">默认值</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- | ---- | ---- | ---- | ---- | ---- |
| webhookId | string | 是 | - | Webhook ID  | `6229ffaxxxxxxxxcade3e3d9` |
| page | number | 否 | 1 | 当前页数，从 1 开始  | `1` |
| limit | number | 否 | 10 | 每页数目，最大不能超过 50，默认为 10  | `10` |




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

  const result = await managementClient.getWebhookLogs({
    page: 1,
    limit: 10,
    webhookId: '6229ffaxxxxxxxxcade3e3d9'
  });


  console.log(JSON.stringify(result, null, 2));
})();

```




## 请求响应

类型： `ListWebhookLogsRespDto`

| 名称 | 类型 | 描述 |
| ---- | ---- | ---- |
| statusCode | number | 业务状态码，可以通过此状态码判断操作是否成功，200 表示成功。 |
| message | string | 描述信息 |
| apiCode | number | 细分错误码，可通过此错误码得到具体的错误类型。详情可以查看开发准备中的 apiCode 细分说明 |
| requestId | string | 请求 ID。当请求失败时会返回。 |
| data | <a href="#ListWebhookLogsData">ListWebhookLogsData</a> | 响应数据 |



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
      "eventName": "user:created",
      "requestBody": {
        "eventName": "test",
        "data": {
          "description": "A test from authing"
        }
      },
      "requestHeaders": {
        "eventName": "test",
        "data": {
          "description": "A test from authing"
        }
      },
      "responseStatusCode": 200,
      "responseHeaders": {
        "Accept": "application/json, text/plain, */*",
        "user-agent": "authing-webhook@2.0",
        "x-authing-token": "a",
        "x-authing-webhook-secret": "a"
      },
      "responseBody": {
        "success": true
      },
      "timestamp": "2022-09-20T08:55:00.188+0800",
      "success": true,
      "errorMessage": "ERRTIMEOUT"
    }
  }
}
```

## 数据结构


### <a id="ListWebhookLogsData"></a> ListWebhookLogsData

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| totalCount | number | 是 | 记录总数   |  `1` |
| list | array | 是 | 返回列表 嵌套类型：<a href="#WebhookLogDto">WebhookLogDto</a>。  |  |


### <a id="WebhookLogDto"></a> WebhookLogDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| webhookId | string | 是 | Webhook ID   |  `6229ffaxxxxxxxxcade3e3d9` |
| eventName | string | 是 | Webhook 事件名称   |  `user:created` |
| requestBody | object | 是 | Webhook 请求体   |  `{"eventName":"test","data":{"description":"A test from authing"}}` |
| requestHeaders | object | 是 | Webhook 请求头   |  `{"eventName":"test","data":{"description":"A test from authing"}}` |
| responseStatusCode | number | 是 | Webhook 响应码   |  `200` |
| responseHeaders | object | 是 | Webhook 响应头   |  `{"Accept":"application/json, text/plain, */*","user-agent":"authing-webhook@2.0","x-authing-token":"a","x-authing-webhook-secret":"a"}` |
| responseBody | object | 是 | Webhook 响应体   |  `{"success":true}` |
| timestamp | string | 是 | 时间戳   |  `2022-09-20T08:55:00.188+0800` |
| success | boolean | 是 | 是否请求成功   |  `true` |
| errorMessage | string | 否 | 请求失败时返回的错误信息   |  `ERRTIMEOUT` |


