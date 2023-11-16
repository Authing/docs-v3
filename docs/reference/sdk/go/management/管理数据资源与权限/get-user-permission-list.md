# 获取用户权限列表

<!--
  警告⚠️：
  不要直接修改该文档，
  https://github.com/Authing/authing-docs-factory
  使用该项目进行生成
-->

<LastUpdated />

> 此文档根据 https://github.com/authing/authing-docs-factory 基于 https://api-explorer.authing.cn V3 API 自动生成，和 API 参数、返回结果保持一致，如此文档描述有误，请以 V3 API 为准。


  ## 描述
  该接口用于查询某些用户在某些权限空间的数据资源的权限数据。
我们的鉴权接口针对不同的鉴权场景有多种，区别在于在所处的场景下能够传递的参数列表以及不同形式的出参，**当你需要查询某些用户的所有权限时**可以使用此接口，
## 注意
接口提供了两个数组类型的入参`userIds`和`namespaceCodes`来支持批量查询（注意：namespaceCodes 是可选的）。
## 场景举例
假如你的业务场景是用户登录后能看到他所有可以访问或者进行其他操作的文档、人员信息、设备信息等资源，那么你可以在用户登录后调用此接口查询用户的所有权限。
## 请求示例
### 查询单个用户权限列表示例
注意：在此接口的返回参数中，树类型的数据资源权限返回是按照**路径**的方式返回的
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

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:60px">默认值</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- | ---- | ---- | ---- | ---- | ---- |
| userIds | string[] | 是 | - | 用户 ID 列表  | `["6301ceaxxxxxxxxxxx27478"]` |
| namespaceCodes | string[] | 否 | - | 权限空间 Code 列表  | `["examplePermissionNamespace1"]` |




## 示例代码

```go
package main

import (
	"fmt"
	"github.com/Authing/authing-golang-sdk/v3/dto"
	"github.com/Authing/authing-golang-sdk/v3/management"
)

func main() {
	options := management.ManagementClientOptions{
		AccessKeyId:     "AUTHING_ACCESS_KEY_ID", // Authing Access Key ID
		AccessKeySecret: "AUTHING_ACCESS_KEY_SECRET", // Authing Access Key Secret
	}
	
	// 初始化 ManagementClient
	client, err := management.NewManagementClient(&options)
	if err != nil {
		// The exception needs to be handled by the developer.
	}

		reqDto := &dto.GetUserPermissionListDto{
		UserIds:        []string{"6229ffaxxxxxxxxcade3e3d9", "6229ffaxxxxxxxxcade3e3d9"},
		NamespaceCodes: []string{"examplePermissionNamespace1", "examplePermissionNamespace2"},
	}
	respDto := client.GetUserPermissionList(reqDto)
	fmt.Println(respDto)
}
```




## 请求响应

类型： `GetUserPermissionListRespDto`

| 名称 | 类型 | 描述 |
| ---- | ---- | ---- |
| statusCode | number | 业务状态码，可以通过此状态码判断操作是否成功，200 表示成功。 |
| message | string | 描述信息 |
| apiCode | number | 细分错误码，可通过此错误码得到具体的错误类型（成功请求不返回）。详细错误码列表请见：[API Code 列表](https://api-explorer.authing.cn/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| data | <a href="#GetUserPermissionListDataDto">GetUserPermissionListDataDto</a> | 响应数据 |



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
        "resourceCode": "resourceCode",
        "resourceType": "STRING",
        "strAuthorize": {
          "value": "示例字符串资源 Value",
          "actions": "[\"read\",\"get\"]"
        },
        "arrAuthorize": {
          "values": "[\"value0\",\"value1\"]",
          "actions": "[\"read\",\"get\"]"
        },
        "treeAuthorize": {
          "authList": {
            "nodePath": "/treeCode1/treeCode11",
            "nodeName": "示例树资源节点名称",
            "nodeActions": "[\"read\",\"get\"]",
            "nodeValue": "示例树资源节点 Value"
          }
        }
      }
    }
  }
}
```

## 数据结构


### <a id="GetUserPermissionListDataDto"></a> GetUserPermissionListDataDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| userPermissionList | array | 是 | 用户权限列表 嵌套类型：<a href="#UserPermissionListDto">UserPermissionListDto</a>。  |  |


### <a id="UserPermissionListDto"></a> UserPermissionListDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| userId | string | 是 | 数据策略授权的用户 ID   |  `6301cexxxxxxxxxxxxxxxxx78` |
| namespaceCode | string | 是 | 数据策略授权的权限空间 Code   |  `examplePermissionNamespace` |
| resourceList | array | 否 | 用户在权限空间下所有的数据策略资源列表 嵌套类型：<a href="#OpenResource">OpenResource</a>。  |  |


### <a id="OpenResource"></a> OpenResource

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| resourceCode | string | 是 | 数据策略下所授权的数据资源 Code   |  `resourceCode` |
| resourceType | string | 是 | 数据策略下所授权的数据资源类型，目前支持树结构（TREE）、字符串（STRING）、数组（ARRAY）三种类型，根据不同的类型返回不同的结构。<br>- `STRING`: 字符串类型结果 StrAuthorize<br>- `ARRAY`: 数组类型 ArrayAuthorize<br>- `TREE`: 树类型 TreeAuthorize    | TREE |
| strAuthorize |  | 否 | 数据策略的字符串资源 嵌套类型：<a href="#StrAuthorize">StrAuthorize</a>。  |  |
| arrAuthorize |  | 否 | 数据策略的数组资源 嵌套类型：<a href="#ArrayAuthorize">ArrayAuthorize</a>。  |  |
| treeAuthorize |  | 否 | 数据策略的树资源 嵌套类型：<a href="#TreeAuthorize">TreeAuthorize</a>。  |  |


### <a id="StrAuthorize"></a> StrAuthorize

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| value | string | 是 | 字符串资源 Value   |  `示例字符串资源 Value` |
| actions | array | 是 | 字符串资源操作列表   |  `["read","get"]` |


### <a id="ArrayAuthorize"></a> ArrayAuthorize

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| values | array | 是 | 数组资源 Value 列表   |  `["value0","value1"]` |
| actions | array | 是 | 数组资源操作列表   |  `["read","get"]` |


### <a id="TreeAuthorize"></a> TreeAuthorize

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| authList | array | 是 | 树资源授权列表 嵌套类型：<a href="#TreeAuthBo">TreeAuthBo</a>。  |  |


### <a id="TreeAuthBo"></a> TreeAuthBo

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| nodePath | string | 是 | 树资源节点路径   |  `/treeCode1/treeCode11` |
| nodeName | string | 是 | 树资源节点名称   |  `示例树资源节点名称` |
| nodeActions | array | 是 | 树资源节点操作权限列表   |  `["read","get"]` |
| nodeValue | string | 否 | 树资源节点 Value   |  `示例树资源节点 Value` |


