# 创建数组数据资源

<!--
  警告⚠️：
  不要直接修改该文档，
  https://github.com/Authing/authing-docs-factory
  使用该项目进行生成
-->

<LastUpdated />

创建字符串数据资源，通过数据资源所属权限空间 Code、数据资源名称、数据资源 Code、数据资源节点和数据资源权限操作等字段进行创建

## 方法名称

`ManagementClient.CreateDataResourceByArray`

## 请求参数

类型： `CreateArrayDataResourceDto`

| 名称            | 类型     | <div style="width:80px">是否必填</div> | <div style="width:60px">默认值</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div>              |
|---------------|--------|------------------------------------|-----------------------------------|-----------------------------------|-------------------------------------------------|
| actions       | array  | 是                                  | -                                 | 数据资源权限操作列表 数组长度限制：50。             | `["read","get"]`                                |
| struct        | array  | 是                                  | -                                 | 数组数据资源节点 数组长度限制：50。               | `["exampleArrayStruct1","exampleArrayStruct2"]` |
| resourceCode  | string | 是                                  | -                                 | 数据资源 Code,权限空间内唯一                 | `dataResourceTestCode`                          |
| resourceName  | string | 是                                  | -                                 | 数据资源名称,权限空间内唯一                    | `示例数据资源名称`                                      |
| namespaceCode | string | 是                                  | -                                 | 数据策略所在的权限空间 Code                  | `code1`                                         |
| description   | string | 否                                  | -                                 | 数据资源描述                            | `示例数据资源描述`                                      |




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

            CreateArrayDataResourceResponseDto result = await managementClient.CreateDataResourceByArray(new CreateArrayDataResourceDto
            {
                NamespaceCode = "arrayResourceCode",
                ResourceName = "示例数组资源名称",
                ResourceCode = "dataResourceArrayTestCode",
                Struct = new List<string> { "exampleArrayStruct1", "exampleArrayStruct2" },
                Actions = new List<string> { "read", "get" },
                Description = "示例数组数据资源描述"
            });

        }
    }
}
```




## 请求响应

类型： `CreateArrayDataResourceResponseDto`

| 名称 | 类型 | 描述 |
| ---- | ---- | ---- |
| statusCode | number | 业务状态码，可以通过此状态码判断操作是否成功，200 表示成功。 |
| message | string | 描述信息 |
| apiCode | number | 细分错误码，可通过此错误码得到具体的错误类型。 |
| requestId | string | 请求 ID。当请求失败时会返回。 |
| data | <a href="#CreateArrayDataResourceRespDto">CreateArrayDataResourceRespDto</a> | 响应数据 |



示例结果：

```json
{
  "statusCode": 200,
  "message": "操作成功",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "resourceName": "示例数据资源名称",
    "resourceCode": "dataResourceTestCode",
    "type": "TREE",
    "description": "示例数据资源描述",
    "struct": "[\"exampleArrayStruct1\",\"exampleArrayStruct2\"]",
    "actions": "[\"read\",\"get\"]"
  }
}
```

## 数据结构


### <a id="CreateArrayDataResourceRespDto"></a> CreateArrayDataResourceRespDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| resourceName | string | 是 | 数据资源名称,权限空间内唯一   |  `示例数据资源名称` |
| resourceCode | string | 是 | 数据资源 Code,权限空间内唯一   |  `dataResourceTestCode` |
| type | string | 是 | 数据资源类型，目前支持树结构（TREE）、字符串（STRING）、数组（ARRAY）   | TREE |
| description | string | 否 | 数据资源描述   |  `示例数据资源描述` |
| struct | array | 是 | 数组数据资源节点 数组长度限制：50。  |  `["exampleArrayStruct1","exampleArrayStruct2"]` |
| actions | array | 是 | 数据资源权限操作列表 数组长度限制：50。  |  `["read","get"]` |

