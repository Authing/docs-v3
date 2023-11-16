# 创建数据策略（重点）

<!--
  警告⚠️：
  不要直接修改该文档，
  https://github.com/Authing/authing-docs-factory
  使用该项目进行生成
-->

<LastUpdated />

> 此文档根据 https://github.com/authing/authing-docs-factory 基于 https://api-explorer.authing.cn V3 API 自动生成，和 API 参数、返回结果保持一致，如此文档描述有误，请以 V3 API 为准。


  ## 描述
  该接口用于创建数据策略，通过数据策略你可以将一组数据资源及其指定的操作进行绑定到一起，共同授权给主体。
  ## 注意
为了方便使用，`permissions` 字段我们基于路径的方式提供了快捷的写法，如：
- 数组、字符串资源：权限空间 code/数据资源 code/数据资源某一 action（如果表示所有操作，则使用`*`替代action）
- 树类型资源：权限空间 code/数据资源 code/node code 1/node code 1_1/.../数据资源某一 action

## 请求示例
假设我们要对一名研发人员进行授权，首先创建 3 个数据资源如下：
```json
{
  "namespaceCode": "examplePermissionNamespace",
  "resourceName": "服务器",
  "resourceCode": "server_2023",
  "type": "STRING",
  "struct": "server_2023",
  "actions": ["read", "write"]
}
```
```json
{
  "namespaceCode": "examplePermissionNamespace",
  "resourceName": "研发知识库",
  "description": "",
  "resourceCode": "rd_document",
  "type": "STRING",
  "struct": "https://www.authing.com/rd_document",
  "actions": ["read", "write", "share"]
}
```
```json
{
  "namespaceCode": "examplePermissionNamespace",
  "resourceName": "研发内部平台菜单",
  "description": "这是研发使用的内部平台菜单",
  "resourceCode": "rd_internal_platform",
  "type": "TREE",
  "struct": [
    {
      "name": "部署",
      "code": "deploy",
      "children": [
        {
          "name": "生产环境",
          "code": "prod"
        },
        {
          "name": "测试环境",
          "code": "test"
        }
      ]
    },
    {
      "name": "数据库",
      "code": "db"
      "children": [
        {
          "name": "查询",
          "code": "query"
        },
        {
          "name": "导出",
          "code": "export"
        }
      ]
    }
  ],
  "actions": ["access", "execute"]
}
```
我们分配一台服务器：server_2023 给他使用，他可以在上面进行任意操作，同时他可以阅读、编辑研发知识库，最后他可以在研发内部平台中进行部署测试环境，但是不能够导出数据库数据。
```json
{
  "policyName": "研发人员策略",
  "description": "这是一个示例数据策略",
  "statementList": [
    {
      "effect": "ALLOW",
      "permissions": [ 
        "examplePermissionNamespaceCode/server_2023/*",
        "examplePermissionNamespaceCode/rd_document/read",
        "examplePermissionNamespaceCode/rd_document/write",
        "examplePermissionNamespaceCode/rd_internal_platform/deploy/test/execute"
       ]
    },
    {
      "effect": "DENY",
      "permissions": [ 
        "examplePermissionNamespaceCode/rd_internal_platform/db/export/execute"
      ]
    }
  ]
}
```


## 方法名称

`ManagementClient.CreateDataPolicy`

## 请求参数

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:60px">默认值</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- | ---- | ---- | ---- | ---- | ---- |
| statementList | <a href="#DataStatementPermissionDto">DataStatementPermissionDto[]</a> | 是 | - | 数据权限列表，策略下数据资源权限列表 数组长度限制：5。 |  |
| policyName | string | 是 | - | 数据策略名称，用户池唯一  | `示例数据策略名称` |
| description | string | 否 | - | 数据策略描述  | `示例数据策略描述` |




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

		reqDto := &dto.CreateDataPolicyDto{
		PolicyName: "示例数据策略名称",
		StatementList: []dto.DataStatementPermissionDto{
			{
				Effect:      "ALLOW",
				Permissions: []string{"namespaceCode/treeResourceCode/path/action"},
			},
		},
		Description: "示例数据策略描述",
	}
	respDto := client.CreateDataPolicy(reqDto)
	fmt.Println(respDto)
}
```




## 请求响应

类型： `CreateDataPolicyResponseDto`

| 名称 | 类型 | 描述 |
| ---- | ---- | ---- |
| statusCode | number | 业务状态码，可以通过此状态码判断操作是否成功，200 表示成功。 |
| message | string | 描述信息 |
| apiCode | number | 细分错误码，可通过此错误码得到具体的错误类型（成功请求不返回）。详细错误码列表请见：[API Code 列表](https://api-explorer.authing.cn/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
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
    "createdAt": "2022-07-03T03:20:30.000Z",
    "updatedAt": "2022-07-03T03:20:30.000Z"
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
| createdAt | string | 是 | 数据策略创建时间   |  `2022-07-03T03:20:30.000Z` |
| updatedAt | string | 是 | 数据策略更新时间   |  `2022-07-03T03:20:30.000Z` |


