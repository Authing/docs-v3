# 创建数据策略

<!--
  警告⚠️：
  不要直接修改该文档，
  https://github.com/Authing/authing-docs-factory
  使用该项目进行生成
-->

<LastUpdated />


  创建数据策略，通过数据策略名称、数据策略描述以及资源节点列表进行创建，数据策略支持跨多个权限空间进行数据资源创建，并且支持创建时设置数据资源是否具有操作权限。

```json
{
  "policyName": "示例数据策略",
  "description": "这是一个示例数据策略",
  "statementList": [
    {
      "effect": "ALLOW",
      "permissions": [ 
        "examplePermissionNamespaceCode/strResourceCode/exampleAction",
        "examplePermissionNamespaceCode/arrResourceCode/exampleAction",
        "examplePermissionNamespaceCode/treeResourceCode/strutCode1/exampleAction"
       ]
    },
    {
      "effect": "DENY",
      "permissions": [ 
        "examplePermissionNamespaceCode/strResourceCode1/exampleAction", 
        "examplePermissionNamespaceCode/arrResourceCode1/exampleAction",
        "examplePermissionNamespaceCode/treeResourceCode1/strutCode1/exampleAction"
      ]
    }
  ]
}
```


## 方法名称

`ManagementClient.CreateDataPolicy`

## 请求参数

类型： `CreateDataPolicyDto`

| 名称            | 类型                                                                     | <div style="width:80px">是否必填</div> | <div style="width:60px">默认值</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
|---------------|------------------------------------------------------------------------|------------------------------------|-----------------------------------|-----------------------------------|------------------------------------|
| statementList | <a href="#DataStatementPermissionDto">DataStatementPermissionDto[]</a> | 是                                  | -                                 | 数据权限列表，策略下数据资源权限列表 数组长度限制：5。      |                                    |
| policyName    | string                                                                 | 是                                  | -                                 | 数据策略名称，用户池唯一                      | `示例数据策略名称`                         |
| description   | string                                                                 | 否                                  | -                                 | 数据策略描述                            | `示例数据策略描述`                         |




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

            CreateDataPolicyResponseDto result = await managementClient.CreateDataPolicy(new CreateDataPolicyDto
            {
                PolicyName = "示例数据策略",
                Description = "这是一个示例数据策略",
                StatementList = new List<DataStatementPermissionDto>
                {
                    new DataStatementPermissionDto
                    {
                        Effect=DataStatementPermissionDto.effect.ALLOW,
                        Permissions=new List<string>
                        {
                            "namespaceCode/treeResourceCode/path/action",
                        }
                    }
                }
            });

        }
    }
}

```




## 请求响应

类型： `CreateDataPolicyResponseDto`

| 名称 | 类型 | 描述 |
| ---- | ---- | ---- |
| statusCode | number | 业务状态码，可以通过此状态码判断操作是否成功，200 表示成功。 |
| message | string | 描述信息 |
| apiCode | number | 细分错误码，可通过此错误码得到具体的错误类型。 |
| requestId | string | 请求 ID。当请求失败时会返回。 |
| data | <a href="#CreateDataPolicyRespDto">CreateDataPolicyRespDto</a> | 响应数据 |



示例结果：

```json
{
  "statusCode": 200,
  "message": "操作成功",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "policyId": "60b49xxxxxxxxxxxxxxx6e68",
    "policyName": "示例数据策略名称",
    "description": "示例数据策略描述",
    "createdAt": "2022-07-03T02:20:30.000Z",
    "updatedAt": "2022-07-03T02:20:30.000Z"
  }
}
```

## 数据结构


### <a id="DataStatementPermissionDto"></a> DataStatementPermissionDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| effect | string | 是 | 数据资源权限操作：ALLOW（允许）/DENY（拒绝）   | DENY |
| permissions | array | 是 | 资源权限列表，字符串数据资源和数组数据资源，没有 path 路径   |  `["namespaceCode/stringResourceCode/action","namespaceCode/arrayResourceCode/action","namespaceCode/treeResourceCode/path/action"]` |


### <a id="CreateDataPolicyRespDto"></a> CreateDataPolicyRespDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| policyId | string | 是 | 数据策略 ID   |  `60b49xxxxxxxxxxxxxxx6e68` |
| policyName | string | 是 | 数据策略名称，用户池唯一   |  `示例数据策略名称` |
| description | string | 否 | 数据策略描述   |  `示例数据策略描述` |
| createdAt | string | 是 | 数据策略创建时间   |  `2022-07-03T02:20:30.000Z` |
| updatedAt | string | 是 | 数据策略更新时间   |  `2022-07-03T02:20:30.000Z` |

