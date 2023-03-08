# 撤销数据策略

<!--
  警告⚠️：
  不要直接修改该文档，
  https://github.com/Authing/authing-docs-factory
  使用该项目进行生成
-->

<LastUpdated />

删除数据策略相关的主体授权，通过授权主体 ID、授权主体类型和数据策略 ID 进行删除。

## 方法名称

`ManagementClient.revokeDataPolicy`

## 请求参数

类型： `DeleteAuthorizeDataPolicyDto`

| 名称               | 类型     | <div style="width:80px">是否必填</div> | <div style="width:60px">默认值</div> | <div style="width:300px">描述</div>   | <div style="width:200px">示例值</div> |
|------------------|--------|------------------------------------|-----------------------------------|-------------------------------------|------------------------------------|
| targetType       | string | 是                                  | -                                 | 主体类型,包括 USER、GROUP、ROLE、ORG 四种类型    | `USER`                             |
| targetIdentifier | string | 是                                  | -                                 | 主体 ID ，包含用户 ID、用户组 ID、角色 ID、组织机构 ID | `6301cexxxxxxxxxxxxxxxxx78`        |
| policyId         | string | 是                                  | -                                 | 数据策略 ID                             | `60b49xxxxxxxxxxxxxxx6e68`         |




## 示例代码

```csharp
using Authing.CSharp.SDK.Services;
using System.Threading.Tasks;
using Authing.CSharp.SDK.Models;
using System.Collections.Generic;
using System.Linq;
using System.Xml.Linq;

namespace ConsoleManagement
{
    public class Program
    {
        static async Task Main(string[] args)
        {
            // 设置初始化参数
            ManagementClientOptions clientOptions = new ManagementClientOptions
            {
                AccessKeyId = "AUTHING_ACCESS_KEY_ID",// Authing Access Key ID
                AccessKeySecret = "AUTHING_ACCESS_KEY_SECRET", // Authing Access Key Secret
            };

            // 初始化 ManagementClient
            ManagementClient managementClient = new ManagementClient(clientOptions);

            CommonResponseDto result = await managementClient.RevokeDataPolicy(new DeleteAuthorizeDataPolicyDto
            {
                PolicyId = "60b49xxxxxxxxxxxxxxx6e68",
                TargetIdentifier = "6301cexxxxxxxxxxxxxxxxx78",
                TargetType = DeleteAuthorizeDataPolicyDto.targetType.USER
            });

        }
    }
}

```




## 请求响应

类型： `CommonResponseDto`

| 名称 | 类型 | 描述 |
| ---- | ---- | ---- |
| statusCode | number | 业务状态码，可以通过此状态码判断操作是否成功，200 表示成功。 |
| message | string | 描述信息 |
| apiCode | number | 细分错误码，可通过此错误码得到具体的错误类型。 |
| requestId | string | 请求 ID。当请求失败时会返回。 |



示例结果：

```json
{
  "statusCode": 200,
  "message": "操作成功",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c"
}
```

## 数据结构

