# 创建树数据资源

<!--
  警告⚠️：
  不要直接修改该文档，
  https://github.com/Authing/authing-docs-factory
  使用该项目进行生成
-->

<LastUpdated />

> 此文档根据 https://github.com/authing/authing-docs-factory 基于 https://api-explorer.authing.cn V3 API 自动生成，和 API 参数、返回结果保持一致，如此文档描述有误，请以 V3 API 为准。

当你仅需要创建树类型数据资源时，可以使用此 API，我们固定了数据资源类型，你无需在传入 `type` 字符段，注意：`struct` 要按照树类型数据资源结构进行传入，请参考示例。

## 方法名称

`ManagementClient.CreateDataResourceByTree`

## 请求参数

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:60px">默认值</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- | ---- | ---- | ---- | ---- | ---- |
| actions | string[] | 是 | - | 数据资源权限操作列表 数组长度限制：50。 | `["read","get"]` |
| struct | <a href="#DataResourceTreeStructs">DataResourceTreeStructs[]</a> | 是 | - | 树数据资源节点 数组长度限制：50。 |  |
| resourceCode | string | 是 | - | 数据资源 Code, 权限空间内唯一  | `dataResourceTestCode` |
| resourceName | string | 是 | - | 数据资源名称, 权限空间内唯一  | `示例数据资源名称` |
| namespaceCode | string | 是 | - | 数据策略所在的权限空间 Code  | `code1` |
| description | string | 否 | - | 数据资源描述  | `示例数据资源描述` |




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

		reqDto := &dto.CreateTreeDataResourceDto{
		NamespaceCode: "examplePermissionNamespace",
		ResourceCode:  "treeResourceCode",
		ResourceName:  "示例树数据资源",
	Struct: []dto.DataResourceTreeStructs{
			{
				Code:  "tree1",
				Name:  "树节点1",
				Value: "树节点1描述",
				Children: []interface{}{
					dto.DataResourceTreeStructs{
						Code:  "tree11",
						Name:  "树节点11",
						Value: "树节点11描述",
						Children: []interface{}{
							dto.DataResourceTreeStructs{
								Code:  "tree111",
								Name:  "树节点111",
								Value: "树节点111描述",
							},
							dto.DataResourceTreeStructs{
								Code:  "tree112",
								Name:  "树节点112",
								Value: "树节点112描述",
							},
						},
					},
					dto.DataResourceTreeStructs{
						Code:  "tree12",
						Name:  "树节点12",
						Value: "树节点12描述",
					},
				},
			},
			{
				Code:  "tree2",
				Name:  "树节点2",
				Value: "树节点2描述",
			},
		},
		Description: "示例树数据资源描述",
		Actions:     []string{"get", "read"},
	}
	respDto := client.CreateDataResourceByTree(reqDto)
	fmt.Println(respDto)
}
```




## 请求响应

类型： `CreateTreeDataResourceResponseDto`

| 名称 | 类型 | 描述 |
| ---- | ---- | ---- |
| statusCode | number | 业务状态码，可以通过此状态码判断操作是否成功，200 表示成功。 |
| message | string | 描述信息 |
| apiCode | number | 细分错误码，可通过此错误码得到具体的错误类型。详情可以查看开发准备中的 apiCode 细分说明 |
| requestId | string | 请求 ID。当请求失败时会返回。 |
| data | <a href="#CreateTreeDataResourceRespDto">CreateTreeDataResourceRespDto</a> | 响应数据 |



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
    "struct": {
      "code": "123",
      "name": "数据资源",
      "value": "示例数据资源节点",
      "children": "[{\"code\":\"code1\",\"name\":\"子节点1\",\"value\":\"子节点值\",\"children\":[{\"code\":\"code2\",\"name\":\"子节点2\",\"value\":\"子节点2值\"}]}]"
    },
    "actions": "[\"read\",\"get\"]"
  }
}
```

## 数据结构


### <a id="DataResourceTreeStructs"></a> DataResourceTreeStructs

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| code | string | 是 | 数据资源节点 Code, 同层级唯一   |  `123` |
| name | string | 是 | 数据资源节点名称 ，同层级唯一   |  `数据资源` |
| value | string | 否 | 数据资源节点 Value   |  `示例数据资源节点` |
| children | array | 否 | 数据资源节点的子节点,子节点层级最多支持五个层级   |  `[{"code":"code1","name":"子节点1","value":"子节点值","children":[{"code":"code2","name":"子节点2","value":"子节点2值"}]}]` |


### <a id="CreateTreeDataResourceRespDto"></a> CreateTreeDataResourceRespDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| resourceName | string | 是 | 数据资源名称, 权限空间内唯一   |  `示例数据资源名称` |
| resourceCode | string | 是 | 数据资源 Code, 权限空间内唯一   |  `dataResourceTestCode` |
| type | string | 是 | 数据资源类型，目前支持树结构（TREE）、字符串（STRING）、数组（ARRAY）   | TREE |
| description | string | 否 | 数据资源描述   |  `示例数据资源描述` |
| struct | array | 是 | 树数据资源节点 嵌套类型：<a href="#DataResourceTreeStructs">DataResourceTreeStructs</a>。数组长度限制：50。  |  |
| actions | array | 是 | 数据资源权限操作列表 数组长度限制：50。  |  `["read","get"]` |


### <a id="DataResourceTreeStructs"></a> DataResourceTreeStructs

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| code | string | 是 | 数据资源节点 Code, 同层级唯一   |  `123` |
| name | string | 是 | 数据资源节点名称 ，同层级唯一   |  `数据资源` |
| value | string | 否 | 数据资源节点 Value   |  `示例数据资源节点` |
| children | array | 否 | 数据资源节点的子节点,子节点层级最多支持五个层级   |  `[{"code":"code1","name":"子节点1","value":"子节点值","children":[{"code":"code2","name":"子节点2","value":"子节点2值"}]}]` |


