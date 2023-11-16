# 获取用户拥有某些资源的权限列表（推荐）

<!--
  警告⚠️：
  不要直接修改该文档，
  https://github.com/Authing/authing-docs-factory
  使用该项目进行生成
-->

<LastUpdated />

> 此文档根据 https://github.com/authing/authing-docs-factory 基于 https://api-explorer.authing.cn V3 API 自动生成，和 API 参数、返回结果保持一致，如此文档描述有误，请以 V3 API 为准。


  ## 描述
  当你需要查询某一用户拥有指定的资源列表的权限时，可以使用此接口。
  ## 注意
  该接口需要你传递指定的资源 code（如果是树类型资源则需要传递节点的完整 code 路径），此接口性能更佳，推荐使用。
  ## 请求示例
### 获取用户字符串和数组资源权限示例

- 入参
  
```json
{
  "namespaceCode": "examplePermissionNamespace",
  "userId": "63721xxxxxxxxxxxxdde14a3",
  "resources":["strResourceCode1", "arrayResourceCode1"]
}
```

- 出参

```json
{

  "statusCode": 200,
  "message": "操作成功",
  "apiCode": 20001,
  "data":{
    "permissionList": [{
      "namespaceCode": "examplePermissionNamespace",
      "actions": ["read","get"],  
      "resource": "strResourceCode1"
    },{
      "namespaceCode": "examplePermissionNamespace",
      "actions": ["read","update","delete"], 
      "resource": "arrayResourceCode1"
    }]
  }
}
```
  
### 获取用户树资源权限示例
  
- 入参
  
```json
{
  "namespaceCode": "examplePermissionNamespace",
  "userId": "63721xxxxxxxxxxxxdde14a3",
  "resources":["treeResourceCode1/StructCode1/resourceStructChildrenCode1", "treeResourceCode2/StructCode1/resourceStructChildrenCode1"]
}
```

- 出参

```json
{
  "statusCode": 200,
  "message": "操作成功",
  "apiCode": 20001,
  "data":{
    "permissionList": [{
      "namespaceCode": "examplePermissionNamespace",
      "actions": ["read", "update", "delete"],
      "resource": "treeResourceCode1/StructCode1/resourceStructChildrenCode1"
    },{
      "namespaceCode": "examplePermissionNamespace",
      "actions": ["read", "get", "delete"],     
      "resource": "treeResourceCode2/StructCode1/resourceStructChildrenCode1"
    }]
  }
}
```
  

## 方法名称

`ManagementClient.GetUserResourcePermissionList`

## 请求参数

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:60px">默认值</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- | ---- | ---- | ---- | ---- | ---- |
| resources | string[] | 是 | - | 资源路径列表,**树资源需到具体树节点**  | `["strResourceCode","arrResourceCode","treeResourceCode/StructCode1/resourceStructChildrenCode1"]` |
| userId | string | 是 | - | 用户 ID  | `6301ceaxxxxxxxxx27478` |
| namespaceCode | string | 是 | - | 权限空间 Code  | `examplePermissionNamespace` |




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

		reqDto := &dto.GetUserResourcePermissionListDto{
		NamespaceCode: "examplePermissionNamespace",
		UserId:        "63721xxxxxxxxxxxxdde14",
		Resources:     []string{"strResourceCode", "arrayResourceCode", "/treeResourceCode/structCode/resourceStructChildrenCode"},
	}
	respDto := client.GetUserResourcePermissionList(reqDto)
	fmt.Println(respDto)
}
```




## 请求响应

类型： `GetUserResourcePermissionListRespDto`

| 名称 | 类型 | 描述 |
| ---- | ---- | ---- |
| statusCode | number | 业务状态码，可以通过此状态码判断操作是否成功，200 表示成功。 |
| message | string | 描述信息 |
| apiCode | number | 细分错误码，可通过此错误码得到具体的错误类型（成功请求不返回）。详细错误码列表请见：[API Code 列表](https://api-explorer.authing.cn/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId | string | 请求 ID。当请求失败时会返回。 |
| data | <a href="#GetUserResourcePermissionListDataDto">GetUserResourcePermissionListDataDto</a> | 响应数据 |



示例结果：

```json
{
  "statusCode": 200,
  "message": "操作成功",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "permissionList": {
      "namespaceCode": "examplePermissionNamespace",
      "actions": "[\"get\",\"read\",\"write\",\"delete\"]",
      "resource": "treeResourceCode1"
    }
  }
}
```

## 数据结构


### <a id="GetUserResourcePermissionListDataDto"></a> GetUserResourcePermissionListDataDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| permissionList | array | 是 | 权限列表 嵌套类型：<a href="#GetUserResourcePermissionList">GetUserResourcePermissionList</a>。  |  |


### <a id="GetUserResourcePermissionList"></a> GetUserResourcePermissionList

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| namespaceCode | string | 是 | 权限空间 code   |  `examplePermissionNamespace` |
| actions | array | 是 | 数据资源权限操作列表   |  `["get","read","write","delete"]` |
| resource | string | 是 | 资源路径   |  `treeResourceCode1` |


