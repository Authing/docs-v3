~~# 获取用户权限列表

<!--
  警告⚠️：
  不要直接修改该文档，
  https://github.com/Authing/authing-docs-factory
  使用该项目进行生成
-->

<LastUpdated />

该接口用于用户列表权限查询，可以通过用户 ID 列表进行批量查询权限，也可以通过查询多个用户在同一个权限空间的权限,不同数据资源类型返回相应的资源结果。

### 查询一个用户拥有的数组资源、字符串资源和树资源权限列表示例

- 入参
  
```json
{
  "userIds": [
    "6301ceaxxxxxxxxxxx27478"
  ]
}
```

- 出参
  
```json
{
  "statusCode": 200,
  "message": "操作成功",
  "apiCode": 20001,
  "data": {
    "userPermissionList": [
      {
        "userId": "6301ceaxxxxxxxxxxx27478",
        "namespaceCode": "examplePermissionNamespace",
        "resourceList": [
          {
            "resourceCode": "strCode",
            "resourceType": "STRING",
            "strAuthorize": {
              "value": "示例字符串资源",
              "actions": [
                "read",
                "post",
                "get",
                "write"
              ]
            }
          },
          {
            "resourceCode": "arrayCode",
            "resourceType": "ARRAY",
            "arrAuthorize": {
              "values": [
                "示例数据资源1",
                "示例数据资源2"
              ],
              "actions": [
                "read",
                "post",
                "get",
                "write"
              ]
            }
          },
          {
            "resourceCode": "treeCode",
            "resourceType": "TREE",
            "treeAuthorize": {
              "authList": [
                {
                  "nodePath": "/treeChildrenCode/treeChildrenCode1",
                  "nodeActions": [
                    "read",
                    "get"
                  ],
                  "nodeName": "treeChildrenName1",
                  "nodeValue": "treeChildrenValue1"
                },
                {
                  "nodePath": "/treeChildrenCode/treeChildrenCode2",
                  "nodeActions": [
                    "read",
                    "get"
                  ],
                  "nodeName": "treeChildrenName2",
                  "nodeValue": "treeChildrenValue2"
                },
                {
                  "nodePath": "/treeChildrenCode/treeChildrenCode3",
                  "nodeActions": [
                    "read"
                  ],
                  "nodeName": "treeChildrenName3",
                  "nodeValue": "treeChildrenValue3"
                }
              ]
            }
          }
        ]
      }
    ]
  }
}
```

### 查询多个用户权限列表示例

- 入参

```json
{
  "userIds": [
    "6301ceaxxxxxxxxxxx27478",
    "6121ceaxxxxxxxxxxx27312"
  ]
}
```

- 出参

```json
{
  "statusCode": 200,
  "message": "操作成功",
  "apiCode": 20001,
  "data": {
    "userPermissionList": [
      {
        "userId": "6301ceaxxxxxxxxxxx27478",
        "namespaceCode": "examplePermissionNamespace1",
        "resourceList": [
          {
            "resourceCode": "strCode",
            "resourceType": "STRING",
            "strAuthorize": {
              "value": "示例字符串资源",
              "actions": [
                "read",
                "post",
                "get",
                "write"
              ]
            }
          }
        ]
      },
      {
        "userId": "6121ceaxxxxxxxxxxx27312",
        "namespaceCode": "examplePermissionNamespace2",
        "resourceList": [
          {
            "resourceCode": "arrayCode",
            "resourceType": "ARRAY",
            "arrAuthorize": {
              "values": [
                "示例数组资源1",
                "示例数组资源2"
              ],
              "actions": [
                "read",
                "post",
                "get",
                "write"
              ]
            }
          }
        ]
      }
    ]
  }
}
```

### 查询多个用户在多个权限空间下权限列表示例

- 入参

```json
{
  "userIds": [
    "6301ceaxxxxxxxxxxx27478",
    "6121ceaxxxxxxxxxxx27312"
  ],
  "namespaceCodes": [
    "examplePermissionNamespace1",
    "examplePermissionNamespace2"
  ]
}
```

- 出参

```json
{
  "statusCode": 200,
  "message": "操作成功",
  "apiCode": 20001,
  "data": {
    "userPermissionList": [
      {
        "userId": "6301ceaxxxxxxxxxxx27478",
        "namespaceCode": "examplePermissionNamespace1",
        "resourceList": [
          {
            "resourceCode": "strCode1",
            "resourceType": "STRING",
            "strAuthorize": {
              "value": "示例字符串资源",
              "actions": [
                "read",
                "post",
                "get",
                "write"
              ]
            }
          }
        ]
      },
      {
        "userId": "6121ceaxxxxxxxxxxx27312",
        "namespaceCode": "examplePermissionNamespace2",
        "resourceList": [
          {
            "resourceCode": "arrayCode",
            "resourceType": "ARRAY",
            "arrAuthorize": {
              "values": [
                "示例数组资源1",
                "示例数组资源2"
              ],
              "actions": [
                "read",
                "post",
                "get",
                "write"
              ]
            }
          }
        ]
      }
    ]
  }
}
```


## 方法名称

`ManagementClient.GetUserPermissionList`

## 请求参数

类型： `GetUserPermissionListDto`

| 名称             | 类型    |     | <div style="width:80px">是否必填</div> | <div style="width:60px">默认值</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
|----------------|-------|:----|------------------------------------|-----------------------------------|-----------------------------------|------------------------------------|
| userIds        | array |     | 是                                  | -                                 | 用户 ID 列表                          | `["6301ceaxxxxxxxxxxx27478"]`      |
| namespaceCodes | array |     | 否                                  | -                                 | 权限空间 Code 列表                      | `["examplePermissionNamespace1"]`  |




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

            GetUserPermissionListRespDto result = await managementClient.GetUserPermissionList(new GetUserPermissionListDto
            {
                NamespaceCodes = new List<string> { "examplePermissionCode" , "examplePermissionNamespace2" },
                UserIds = new List<string> { "6121ceaxxxxxxxxxxx27312", "6301ceaxxxxxxxxxxx27478" }
            });

        }
    }
}

```




## 请求响应

类型： `GetUserPermissionListRespDto`

| 名称         | 类型                                                                       | 描述                               |
|------------|--------------------------------------------------------------------------|----------------------------------|
| statusCode | number                                                                   | 业务状态码，可以通过此状态码判断操作是否成功，200 表示成功。 |
| message    | string                                                                   | 描述信息                             |
| apiCode    | number                                                                   | 细分错误码，可通过此错误码得到具体的错误类型。          |
| data       | <a href="#GetUserPermissionListDataDto">GetUserPermissionListDataDto</a> | 响应数据                             |



示例结果：

```json
{
  "statusCode": 200,
  "message": "操作成功",
  "apiCode": 20001,
  "data": {
    "userPermissionList": {
      "userId": "6301cexxxxxxxxxxxxxxxxx78",
      "namespaceCode": "examplePermissionNamespace",
      "resourceList": {
        "resourceCode": "resourceCode"
      }
    }
  }
}
```

## 数据结构


### <a id="GetUserPermissionListDataDto"></a> GetUserPermissionListDataDto

| 名称                 | 类型    | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div>                                       | <div style="width:200px">示例值</div> |
|--------------------|-------|------------------------------------|-------------------------------------------------------------------------|------------------------------------|
| userPermissionList | array | 是                                  | 用户权限列表 嵌套类型：<a href="#UserPermissionListDto">UserPermissionListDto</a>。 |                                    |


### <a id="UserPermissionListDto"></a> UserPermissionListDto

| 名称            | 类型     | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div>                                  | <div style="width:200px">示例值</div> |
|---------------|--------|------------------------------------|--------------------------------------------------------------------|------------------------------------|
| userId        | string | 是                                  | 数据策略授权的用户 ID                                                       | `6301cexxxxxxxxxxxxxxxxx78`        |
| namespaceCode | string | 是                                  | 数据策略授权的权限空间 Code                                                   | `examplePermissionNamespace`       |
| resourceList  | array  | 否                                  | 用户在权限空间下所有的数据策略资源列表 嵌套类型：<a href="#OpenResource">OpenResource</a>。 |                                    |


### <a id="OpenResource"></a> OpenResource

| 名称            | 类型             | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div>                                                                                                                                                                                                     | <div style="width:200px">示例值</div> |
|---------------|----------------|------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------|
| resourceCode  | string         | 是                                  | 数据策略下所授权的数据资源 Code                                                                                                                                                                                                                    | `resourceCode`                     |
| resourceType  | string         | 是                                  | 数据资源类型，嵌套类型，<a href="#DataResourceTypeEnum">DataResourceTypeEnum</a>。目前支持树结构（TREE）、字符串（STRING）、数组（ARRAY）三种类型，根据不同的类型返回不同的结构。<br>- `STRING`: 字符串类型结果 StrAuthorize。 <br>- `ARRAY`: 数组类型 ArrayAuthorize。<br>- `TREE`: 树类型 TreeAuthorize。 |                                    |
| strAuthorize  | StrAuthorize   | 否                                  | 数据策略的字符串资源,嵌套类型：<a href="#StrAuthorize">StrAuthorize</a>。                                                                                                                                                                             |                                    |
| arrAuthorize  | ArrayAuthorize | 否                                  | 数据策略的数组资源,嵌套类型：<a href="#ArrayAuthorize">ArrayAuthorize</a>。                                                                                                                                                                          |                                    |
| treeAuthorize | TreeAuthorize  | 否                                  | 数据策略的树资源,嵌套类型：<a href="#TreeAuthorize">TreeAuthorize</a>。                                                                                                                                                                             |                                    |



### <a id="DataResourceTypeEnum"></a> DataResourceTypeEnum

| 名称     | 类型   | 描述    |
|:-------|:-----|-------|
| STRING | enum | 字符串类型 |
| ARRAY  | enum | 数组类型  |
| TREE   | enum | 树类型   |

### <a id="StrAuthorize"></a> StrAuthorize

| 名称      | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
|---------|--|------------------------------------|-----------------------------------|------------------------------------|
| value   | string | 是                                  | 字符串数据资源的 Value                    | `resourceValue`                    |
| actions | array | 是                                  | 字符串数据资源的权限操作列表                    | `["read","get"]`                   |

### <a id="ArrayAuthorize"></a> ArrayAuthorize

| 名称      | 类型    | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div>    |
|---------|-------|------------------------------------|-----------------------------------|---------------------------------------|
| values  | array | 是                                  | 数组数据资源的 Values                    | `["resourceValue1","resourceValue2"]` |
| actions | array | 是                                  | 数组数据资源的的权限操作列表                    | `["read","get"]`                      |

### <a id="TreeAuthorize"></a> TreeAuthorize

| 名称       | 类型    | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div>                  | <div style="width:200px">示例值</div> |
|----------|-------|------------------------------------|----------------------------------------------------|------------------------------------|
| authList | array | 是                                  | 树结构节点列表,嵌套类型：<a href="#TreeAuthBo">TreeAuthBo</a>。 | -                                  |

### <a id="TreeAuthBo"></a> TreeAuthBo

| 名称          | 类型     | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> |     | <div style="width:200px">示例值</div>    |
|-------------|--------|------------------------------------|-----------------------------------|:----|---------------------------------------|
| nodePath    | string | 是                                  | 树资源节点路径                           |     | `/treeChildrenCode/treeChildrenCode1` |
| nodeName    | string | 是                                  | 树资源节点名称                           |     | `树数据资源`                               |
| nodeActions | array  | 是                                  | 树资源节点名称                           |     | `["read","get"]`                      |
| nodeValue   | string | 否                                  | 树资源节点 Value                       |     | `treeChildrenValue`                   |
