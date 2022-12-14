# 在某个已有身份源下创建新连接

<!--
  警告⚠️：
  不要直接修改该文档，
  https://github.com/Authing/authing-docs-factory
  使用该项目进行生成
-->

<LastUpdated />

在某个已有身份源下创建新连接，可以设置身份源图标、是否只支持登录等。

## 方法名称

`ManagementClient.CreateExtIdpConn`

## 请求参数

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:60px">默认值</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- | ---- | ---- | ---- | ---- | ---- |
| fields | object | 是 | - | 连接的自定义配置信息  | `{"clientId":"身份源上的 clientId","clientSecret":"身份源上的 clientSecret"}` |
| displayName | string | 是 | - | 连接在登录页的显示名称  | `登录页` |
| identifier | string | 是 | - | 身份源连接标识  | `60b49eb83fd80adb96f26e68` |
| type | string | 是 | - | 身份源连接类型  | `ad` |
| extIdpId | string | 是 | - | 身份源连接 ID  | `60b49eb83fd80adb96f26e68` |
| loginOnly | boolean | 否 | - | 是否只支持登录  |  |
| logo | string | 否 | - | 身份源图标  | `https://files.authing.co/authing-console/social-connections/icon_xiaochengxu@2x.png` |




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

            CreateExtIdpConnDto createExtIdpConnDto = new CreateExtIdpConnDto()
            {
                ExtIdpId = "AUTHING_EXTIDPID",
                DisplayName = "AUTHING_DISPLAYNAME",
                Identifier = "AUTHING_IDENTIFIER",
                LoginOnly = false,
                Logo = "https://files.authing.co/authing-console/social-connections/icon_xiaochengxu@2x.png",
                Type = CreateExtIdpConnDto.type.GITHUB,
                Fields = new { clientId = "AUTHING_APPID", clientSecret = "AUTHING_APPSECRET " }
            };
            ExtIdpConnDetailSingleRespDto dto = await managementClient.CreateExtIdpConn(createExtIdpConnDto);
        }
    }
}
```




## 请求响应

类型： `ExtIdpConnDetailSingleRespDto`

| 名称 | 类型 | 描述 |
| ---- | ---- | ---- |
| statusCode | number | 业务状态码，可以通过此状态码判断操作是否成功，200 表示成功。 |
| message | string | 描述信息 |
| apiCode | number | 细分错误码，可通过此错误码得到具体的错误类型。 |
| requestId | string | 请求 ID。当请求失败时会返回。 |
| data | <a href="#ExtIdpConnDetail">ExtIdpConnDetail</a> | 响应数据 |



示例结果：

```json
{
  "statusCode": 200,
  "message": "操作成功",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "id": "60b49eb83fd80adb96f26e68",
    "type": "default",
    "extIdpId": "6318061be13c0ce6a64093e5",
    "logo": "https://files.authing.co/authing-console/social-connections/icon_xiaochengxu@2x.png",
    "identifier": "60b49eb83fd80adb96f26e68",
    "displayName": "登录页",
    "loginOnly": true,
    "associationMode": "challenge",
    "challengeBindingMethods": "[\"email-password\"]"
  }
}
```

## 数据结构


### <a id="ExtIdpConnDetail"></a> ExtIdpConnDetail

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| id | string | 是 | 身份源连接 id   |  `60b49eb83fd80adb96f26e68` |
| type | string | 是 | 身份源连接类型   | oidc |
| extIdpId | string | 是 | 身份源 ID   |  `6318061be13c0ce6a64093e5` |
| logo | string | 是 | 身份源连接图标   |  `https://files.authing.co/authing-console/social-connections/icon_xiaochengxu@2x.png` |
| identifier | string | 否 | 身份源连接标识   |  `60b49eb83fd80adb96f26e68` |
| displayName | string | 否 | 身份源连接在登录页的显示名称   |  `登录页` |
| loginOnly | boolean | 是 | 是否只支持登录   |  `true` |
| associationMode | string | 是 | 账号关联模式   | none |
| challengeBindingMethods | array | 是 | 账号绑定方式   |  `["email-password"]` |


