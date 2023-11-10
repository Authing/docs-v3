# 创建数据资源（推荐、重点）

<!--
  警告⚠️：
  不要直接修改该文档，
  https://github.com/Authing/authing-docs-factory
  使用该项目进行生成
-->

<LastUpdated />

> 此文档根据 https://github.com/authing/authing-docs-factory 基于 https://api-explorer.authing.cn V3 API 自动生成，和 API 参数、返回结果保持一致，如此文档描述有误，请以 V3 API 为准。


  ## 描述
  该接口用于创建数据资源，当你存在需要被设置权限的数据，根据它们的数据类型，创建对应类型的数据资源，目前我们支持：字符串、数组、树三种类型。
  ## 注意
  请求体中的 `struct` 字段需要根据不同的资源类型传入不同的数据结构，具体请参考下面的示例
## 请求示例
### 创建字符串类型数据资源示例
当你的数据仅用一个字符串就可以表示时，可以使用此类型，例如：一个 API、一个用户 ID 等。
以下是创建一个表示 '/resource/create' API 的数据资源示例：
```json
{
  "namespaceCode": "examplePermissionNamespace",
  "resourceName": "createResource API",
  "description": "这是 createResource API",
  "resourceCode": "createResourceAPI",
  "type": "STRING",
  "struct": "/resource/create",
  "actions": ["access"]
}
```

### 创建数组类型数据资源示例
当你的数据是一组同类型的数据时，可以使用此类型，例如：一组文档链接、一组门禁卡号等。
以下是创建一个表示一组门禁卡号的数据资源示例：
```json
{
  "namespaceCode": "examplePermissionNamespace",
  "resourceName": "一组门禁卡号",
  "description": "这是一组门禁卡号",
  "resourceCode": "accessCardNumber",
  "type": "ARRAY",
  "struct": ["accessCardNumber1", "accessCardNumber2", "accessCardNumber3"],
  "actions": ["get", "update"]
}
```

### 创建树类型数据资源示例
当你的数据是具备层级关系时，可以使用此类型，例如：组织架构、文件夹结构等。
以下是创建一个表示公司组织架构的数据资源示例：
```json
{
  "namespaceCode": "examplePermissionNamespace",
  "resourceName": "Authing",
  "description": "这是 Authing 的组织架构",
  "resourceCode": "authing",
  "type": "TREE",
  "struct": [
    {
      "name": "产品",
      "code": "product",
      "value": "product",
      "children": [
        {
          "name": "产品经理",
          "code": "productManager",
          "value": "pm"
        },
        {
          "name": "设计",
          "code": "design",
          "value": "ui"
        }
      ]
    },
    {
      "name": "研发",
      "code": "researchAndDevelopment",
      "value": "rd"
    }
  ],
  "actions": ["get", "update", "delete"]
}
```
  

## 方法名称

`ManagementClient.CreateDataResource`

## 请求参数

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:60px">默认值</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- | ---- | ---- | ---- | ---- | ---- |
| actions | string[] | 是 | - | 数据资源权限操作列表 数组长度限制：50。 | `["read","get"]` |
| struct | <a href="#"></a> | 是 | - | 数据资源结构，支持字符串（STRING）、树结构（TREE）和数组结构（ARRAY）。  |  |
| type | string | 是 | - | 数据资源类型，目前支持树结构（TREE）、字符串（STRING）、数组（ARRAY）  | `TREE` |
| resourceCode | string | 是 | - | 数据资源 Code, 权限空间内唯一  | `dataResourceTestCode` |
| resourceName | string | 是 | - | 数据资源名称, 权限空间内唯一  | `示例数据资源名称` |
| namespaceCode | string | 是 | - | 数据资源所属的权限空间 Code  | `examplePermissionNamespace` |
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

		reqDto := &dto.CreateDataResourceDto{
		Actions:       []string{"read", "get"},
		Struct:        "test",
		Type:          "STRING",
		ResourceCode:  "stringResourceCode",
		ResourceName:  "示例字符串数据资源",
		NamespaceCode: "examplePermissionNamespace",
		Description:   "示例字符串数据资源描述",
	}
	respDto := client.CreateDataResource(reqDto)
	fmt.Println(respDto)
}
```




## 请求响应

类型： `CreateDataResourceResponseDto`

| 名称 | 类型 | 描述 |
| ---- | ---- | ---- |
| statusCode | number | 业务状态码，可以通过此状态码判断操作是否成功，200 表示成功。 |
| message | string | 描述信息 |
| apiCode | number | 细分错误码，可通过此错误码得到具体的错误类型。详情可以查看开发准备中的 apiCode 细分说明 |
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
| resourceName | string | 是 | 数据资源名称, 权限空间内唯一   |  `示例数据资源名称` |
| resourceCode | string | 是 | 数据资源 Code, 权限空间内唯一   |  `dataResourceTestCode` |
| type | string | 是 | 数据资源类型，目前支持树结构（TREE）、字符串（STRING）、数组（ARRAY）   | TREE |
| description | string | 否 | 数据资源描述   |  `示例数据资源描述` |
| struct |  | 是 | 数据资源结构，支持字符串（STRING）、树结构（TREE）和数组结构（ARRAY）。   |  |
| actions | array | 是 | 数据资源权限操作列表 数组长度限制：50。  |  `["read","get"]` |


