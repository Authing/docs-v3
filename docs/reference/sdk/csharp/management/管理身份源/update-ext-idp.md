# 更新身份源配置

<!--
  警告⚠️：
  不要直接修改该文档，
  https://github.com/Authing/authing-docs-factory
  使用该项目进行生成
-->

<LastUpdated />

更新身份源配置，可以设置身份源 ID 与 名称。

## 方法名称

`ManagementClient.UpdateExtIdp`

## 请求参数

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:60px">默认值</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- | ---- | ---- | ---- | ---- | ---- |
| id | string | 是 | - | 身份源 ID  | `60b49eb83fd80adb96f26e68` |
| name | string | 是 | - | 名称  | `exampleName` |




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

            ExtIdpListPaginatedRespDto dto = await managementClient.ListExtIdp(new ListExtIdpDto
            {
                AppId = "AUTHING_APPID",

            });

            UpdateExtIdpDto updateExtIdpDto = new UpdateExtIdpDto()
            {
                Name = "exampleNameUpdate",
                Id = dto.Data.List.First().Id,
            };

            ExtIdpSingleRespDto result = await managementClient.UpdateExtIdp(updateExtIdpDto);

        }
    }
}
```




## 请求响应

类型： `ExtIdpSingleRespDto`

| 名称 | 类型 | 描述 |
| ---- | ---- | ---- |
| statusCode | number | 业务状态码，可以通过此状态码判断操作是否成功，200 表示成功。 |
| message | string | 描述信息 |
| apiCode | number | 细分错误码，可通过此错误码得到具体的错误类型。 |
| requestId | string | 请求 ID。当请求失败时会返回。 |
| data | <a href="#ExtIdpDto">ExtIdpDto</a> | 响应数据 |



示例结果：

```json
{
  "statusCode": 200,
  "message": "操作成功",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "id": "60b49eb83fd80adb96f26e68",
    "name": "default",
    "logo": "https://files.authing.co/authing-console/social-connections/wechatIdentitySource.svg",
    "tenantId": "60b49eb83fd80adb96f26e68",
    "type": "wechat"
  }
}
```

## 数据结构


### <a id="ExtIdpDto"></a> ExtIdpDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| id | string | 是 | 身份源 id   |  `60b49eb83fd80adb96f26e68` |
| name | string | 是 | 身份源名称   |  `default` |
| logo | string | 是 | 身份源的 Logo   |  `https://files.authing.co/authing-console/social-connections/wechatIdentitySource.svg` |
| tenantId | string | 否 | 租户 ID   |  `60b49eb83fd80adb96f26e68` |
| type | string | 是 | 身份源类型   |  `wechat` |


