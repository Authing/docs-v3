# 判断用户是否存在

<!--
  警告⚠️：
  不要直接修改该文档，
  https://github.com/Authing/authing-docs-factory
  使用该项目进行生成
-->

<LastUpdated />

根据条件判断用户是否存在，可以筛选用户名、邮箱、手机号、第三方外部 ID 等。

## 方法名称

`ManagementClient.IsUserExists`

## 请求参数

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:60px">默认值</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- | ---- | ---- | ---- | ---- | ---- |
| username | string | 否 | - | 用户名，用户池内唯一  | `bob` |
| email | string | 否 | - | 邮箱，不区分大小写  | `test@example.com` |
| phone | string | 否 | - | 手机号，不带区号。如果是国外手机号，请在 phoneCountryCode 参数中指定区号。  | `188xxxx8888` |
| externalId | string | 否 | - | 第三方外部 ID  | `10010` |




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

            IsUserExistsReqDto dto = new IsUserExistsReqDto()
            {
                Username = "AUTHING_USERNAME"
            };

            IsUserExistsRespDto userSingleRespDto = await managementClient.IsUserExists(dto);
        }
    }
}
```




## 请求响应

类型： `IsUserExistsRespDto`

| 名称 | 类型 | 描述 |
| ---- | ---- | ---- |
| statusCode | number | 业务状态码，可以通过此状态码判断操作是否成功，200 表示成功。 |
| message | string | 描述信息 |
| apiCode | number | 细分错误码，可通过此错误码得到具体的错误类型。 |
| requestId | string | 请求 ID。当请求失败时会返回。 |
| data | <a href="#IsUserExistsDto">IsUserExistsDto</a> | 响应数据 |



示例结果：

```json
{
  "statusCode": 200,
  "message": "操作成功",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "exists": true
  }
}
```

## 数据结构


### <a id="IsUserExistsDto"></a> IsUserExistsDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| exists | boolean | 是 | 用户是否存在   |  `true` |


