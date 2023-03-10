# 创建数据资源

<!--
  警告⚠️：
  不要直接修改该文档，
  https://github.com/Authing/authing-docs-factory
  使用该项目进行生成
-->

<LastUpdated />

该接口用于创建数据资源，通过数据资源所属权限空间 Code、数据资源名称、数据资源 Code、数据资源类型（STRING、ARRAY、TREE）以及数据操作列表进行创建,
  通过不同的数据资源类型适配不同的场景。

### 创建数据资源字符串类型示例

```json
{
  "namespaceCode": "examplePermissionNamespace",
  "resourceName": "字符串资源1",
  "resourceCode": "str1",
  "type": "STRING",
  "description": "这是一个数据资源字符串类型创建",
  "struct":"str1",
  "actions": ["get","read","update"]
}
```

### 创建数据资源数组类型示例

```json
{
  "namespaceCode": "examplePermissionNamespace",
  "resourceName": "数组资源1",
  "resourceCode": "array1",
  "description": "这是一个数据资源数组类型创建",
  "type": "ARRAY",
  "struct":["array1", "array2", "array3"],
  "actions": ["get","read","update"]
}
```

### 创建数据资源树类型示例

```json
{
  "namespaceCode": "examplePermissionNamespace",
  "resourceName": "树资源1",
  "resourceCode": "tree1",
  "description": "这是一个数据资源树类型创建",
  "type": "TREE",
  "struct":[{
      "code": "tree1",
      "name": "tree1",
      "value": "tree1",
      "children": [{
        "code": "tree2",
        "name": "tree2",
        "value": "tree2",
        "children": [{
          "code": "tree3",
          "name": "tree3",
          "value": "tree3"
        }]
      }]
  }],
  "actions": ["get","read","update"]
}
```


## 方法名称

`ManagementClient.CreateDataResource`

## 请求参数

类型： `CreateDataResourceDto`

| 名称            | 类型               | <div style="width:80px">是否必填</div> | <div style="width:60px">默认值</div> | <div style="width:300px">描述</div>             | <div style="width:200px">示例值</div> |
|---------------|------------------|------------------------------------|-----------------------------------|-----------------------------------------------|------------------------------------|
| actions       | array            | 是                                  | -                                 | 数据资源权限操作列表 数组长度限制：50。                         | `["read","get"]`                   |
| struct        | <a href="#"></a> | 是                                  | -                                 | 数据资源节点类型，支持字符串（STRING）、树结构（TREE）和数组结构（ARRAY）。 |                                    |
| type          | string           | 是                                  | -                                 | 数据资源类型，目前支持树结构（TREE）、字符串（STRING）、数组（ARRAY）    | `TREE`                             |
| resourceCode  | string           | 是                                  | -                                 | 数据资源 Code,权限空间内唯一                             | `dataResourceTestCode`             |
| resourceName  | string           | 是                                  | -                                 | 数据资源名称,权限空间内唯一                                | `示例数据资源名称`                         |
| namespaceCode | string           | 是                                  | -                                 | 数据资源所属的权限空间 Code                              | `examplePermissionNamespace`       |
| description   | string           | 否                                  | -                                 | 数据资源描述                                        | `示例数据资源描述`                         |




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

            CreateDataResourceResponseDto result = await managementClient.CreateDataResource(new CreateDataResourceDto
            {
                NamespaceCode = "exampleNamespaceCode",
                ResourceName = "树资源1",
                ResourceCode = "tree1",
                Type = CreateDataResourceDto.type.TREE,
                Description = "这是一个数据资源树类型创建",
                Struct = new List<DataResourceTreeStructs>
                { new DataResourceTreeStructs {Code="tree1",Name="tree1",Value="tree1",
                    Children=new List<object>
                    {
                        new DataResourceTreeStructs
                        { Code="tree2",Name="tree2",Value="tree2",
                            Children=new List<object>
                            {
                                new DataResourceTreeStructs
                                { Code="tree3",Name="tree3",Value="tree3"}
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

类型： `CreateDataResourceResponseDto`

| 名称 | 类型 | 描述 |
| ---- | ---- | ---- |
| statusCode | number | 业务状态码，可以通过此状态码判断操作是否成功，200 表示成功。 |
| message | string | 描述信息 |
| apiCode | number | 细分错误码，可通过此错误码得到具体的错误类型。 |
| requestId | string | 请求 ID。当请求失败时会返回。 |
| data | <a href="#CreateDataResourceRespDto">CreateDataResourceRespDto</a> | 响应数据 |



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


### <a id="CreateDataResourceRespDto"></a> CreateDataResourceRespDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| resourceName | string | 是 | 数据资源名称,权限空间内唯一   |  `示例数据资源名称` |
| resourceCode | string | 是 | 数据资源 Code,权限空间内唯一   |  `dataResourceTestCode` |
| type | string | 是 | 数据资源类型，目前支持树结构（TREE）、字符串（STRING）、数组（ARRAY）   | TREE |
| description | string | 否 | 数据资源描述   |  `示例数据资源描述` |
| struct |  | 是 | 数据资源节点类型，支持字符串（STRING）、树结构（TREE）和数组结构（ARRAY）。   |  |
| actions | array | 是 | 数据资源权限操作列表 数组长度限制：50。  |  `["read","get"]` |

