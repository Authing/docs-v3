# 修改数据资源

<!--
  警告⚠️：
  不要直接修改该文档，
  https://github.com/Authing/authing-docs-factory
  使用该项目进行生成
-->

<LastUpdated />

修改数据资源,根据权限空间 Code 和数据资源 Code 查询原始信息,只允许修改数据资源名称、描述和数据资源节点。

## 方法名称

`ManagementClient.UpdateDataResource`

## 请求参数

类型： `UpdateDataResourceDto`

| 名称            | 类型               | <div style="width:80px">是否必填</div> | <div style="width:60px">默认值</div> | <div style="width:300px">描述</div>             | <div style="width:200px">示例值</div> |
|---------------|------------------|------------------------------------|-----------------------------------|-----------------------------------------------|------------------------------------|
| resourceCode  | string           | 是                                  | -                                 | 数据资源 Code,权限空间内唯一                             | `dataResourceTestCode`             |
| namespaceCode | string           | 是                                  | -                                 | 数据资源所属的权限空间 Code                              | `examplePermissionNamespace`       |
| resourceName  | string           | 否                                  | -                                 | 数据资源名称,权限空间内唯一                                | `示例数据资源名称`                         |
| description   | string           | 否                                  | -                                 | 数据资源描述                                        | `示例数据资源描述`                         |
| struct        | <a href="#"></a> | 否                                  | -                                 | 数据资源节点类型，支持字符串（STRING）、树结构（TREE）和数组结构（ARRAY）。 |                                    |
| actions       | array            | 否                                  | -                                 | 数据资源权限操作列表 数组长度限制：50。                         | `["read","get"]`                   |




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

            UpdateDataResourceResponseDto result = await managementClient.UpdateDataResource(new UpdateDataResourceDto
            {
                NamespaceCode = "examplePermissionNamespace",
                ResourceName = "示例新树数据资源",
                ResourceCode = "treeResourceCode",
                Description = "示例数据资源新描述",
                Struct = new List<DataResourceTreeStructs>
                {
                    new DataResourceTreeStructs
                    {
                        Code="123update",
                        Name="数据资源update",
                        Value="示例数据资源节点update",
                        Children=new List<object>
                        {
                            new DataResourceTreeStructs
                            {
                                Code="code1",
                                Name="子节点1",
                                Value="子节点值",
                                Children=new List<object>
                                {
                                    new DataResourceTreeStructs
                                    {
                                        Code="code2",
                                        Name="子节点2",
                                        Value="子节点值2"
                                    }
                                }
                            }
                        }
                    }
                },
                Actions = new List<string> { "get", "read", "update" }
            });

        }
    }
}

```




## 请求响应

类型： `UpdateDataResourceResponseDto`

| 名称 | 类型 | 描述 |
| ---- | ---- | ---- |
| statusCode | number | 业务状态码，可以通过此状态码判断操作是否成功，200 表示成功。 |
| message | string | 描述信息 |
| apiCode | number | 细分错误码，可通过此错误码得到具体的错误类型。 |
| requestId | string | 请求 ID。当请求失败时会返回。 |
| data | <a href="#UpdateDataResourceRespDto">UpdateDataResourceRespDto</a> | 响应数据 |



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
    "actions": "[\"read\",\"get\"]"
  }
}
```

## 数据结构


### <a id="UpdateDataResourceRespDto"></a> UpdateDataResourceRespDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| resourceName | string | 是 | 数据资源名称,权限空间内唯一   |  `示例数据资源名称` |
| resourceCode | string | 是 | 数据资源 Code,权限空间内唯一   |  `dataResourceTestCode` |
| type | string | 是 | 数据资源类型，目前支持树结构（TREE）、字符串（STRING）、数组（ARRAY）   | TREE |
| description | string | 否 | 数据资源描述   |  `示例数据资源描述` |
| struct |  | 是 | 数据资源节点类型，支持字符串（STRING）、树结构（TREE）和数组结构（ARRAY）。   |  |
| actions | array | 是 | 数据资源权限操作列表 数组长度限制：50。  |  `["read","get"]` |

