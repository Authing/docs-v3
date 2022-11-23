# 手动触发 Webhook 执行

<!--
  警告⚠️：
  不要直接修改该文档，
  https://github.com/Authing/authing-docs-factory
  使用该项目进行生成
-->

<LastUpdated />

通过指定 webhookId，可选请求头和请求体进行手动触发 webhook 执行

## 方法名称

`ManagementClient.TriggerWebhook`

## 请求参数

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:60px">默认值</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- | ---- | ---- | ---- | ---- | ---- |
| webhookId | string | 是 | - | Webhook ID  | `6229ffaxxxxxxxxcade3e3d9` |
| requestHeaders | object | 否 | - | 请求头  | `{"eventName":"test","data":{"description":"A test from authing"}}` |
| requestBody | object | 否 | - | 请求体  | `{"eventName":"test","data":{"description":"A test from authing"}}` |




## 示例代码

```csharp
using Authing.CSharp.SDK.Services;
using System;
using System.Threading.Tasks;
using Authing.CSharp.SDK.Models;
using System.Collections.Generic;
using System.Linq;

namespace ConsoleManagement
{
    public class Program
    {
        static void Main(string[] args)
        {
            MainAsync().GetAwaiter().GetResult();
        }

        private static async Task MainAsync()
        {
            // 设置初始化参数
            ManagementClientOptions clientOptions = new ManagementClientOptions
            {
                AccessKeyId = "AUTHING_ACCESS_KEY_ID",// Authing Access Key ID
                AccessKeySecret = "AUTHING_ACCESS_KEY_SECRET", // Authing Access Key Secret
            };

            // 初始化 ManagementClient
            ManagementClient managementClient = new ManagementClient(clientOptions);

            var res = await managementClient.ListWebhooks(new ListWebhooksDto { });
            var item = res.Data.List.First();
            var res2 = await managementClient.TriggerWebhook(new TriggerWebhookDto { WebhookId = item.WebhookId });

        }
    }
}
```




## 请求响应

类型： `TriggerWebhookRespDto`

| 名称 | 类型 | 描述 |
| ---- | ---- | ---- |
| statusCode | number | 业务状态码，可以通过此状态码判断操作是否成功，200 表示成功。 |
| message | string | 描述信息 |
| apiCode | number | 细分错误码，可通过此错误码得到具体的错误类型。 |
| requestId | string | 请求 ID。当请求失败时会返回。 |
| data | <a href="#TriggerWebhookData">TriggerWebhookData</a> | 响应数据 |



示例结果：

```json
{
  "statusCode": 200,
  "message": "操作成功",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "response": {}
  }
}
```

## 数据结构


### <a id="TriggerWebhookData"></a> TriggerWebhookData

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| response |  | 是 | 原来接口返回的 response 数据 嵌套类型：<a href="#Any">Any</a>。  |  |


### <a id="Any"></a> Any

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |


