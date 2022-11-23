# 修改权限分组信息

<!--
  警告⚠️：
  不要直接修改该文档，
  https://github.com/Authing/authing-docs-factory
  使用该项目进行生成
-->

<LastUpdated />

修改权限分组信息，可以修改名称、描述信息以及新的唯一标志符。

## 方法名称

`ManagementClient.UpdateNamespace`

## 请求参数

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:60px">默认值</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- | ---- | ---- | ---- | ---- | ---- |
| code | string | 是 | - | 权限分组唯一标志符  | `my-namespace` |
| description | string | 否 | - | 权限分组描述信息  | `我的权限分组描述` |
| name | string | 否 | - | 权限分组名称  | `我的权限分组` |
| newCode | string | 否 | - | 权限分组新的唯一标志符  | `my-new-namespace` |




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

		reqDto := &dto.UpdateNamespaceDto{
		Code:        "my-namespace",
		Description: "新的描述信息",
	}
	respDto := client.UpdateNamespace(reqDto)
	fmt.Println(respDto)
}
```




## 请求响应

类型： `UpdateNamespaceRespDto`

| 名称 | 类型 | 描述 |
| ---- | ---- | ---- |
| statusCode | number | 业务状态码，可以通过此状态码判断操作是否成功，200 表示成功。 |
| message | string | 描述信息 |
| apiCode | number | 细分错误码，可通过此错误码得到具体的错误类型。 |
| requestId | string | 请求 ID。当请求失败时会返回。 |
| data | <a href="#UpdateNamespaceDto">UpdateNamespaceDto</a> | 响应数据 |



示例结果：

```json
{
  "statusCode": 200,
  "message": "操作成功",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "code": "my-namespace",
    "description": "我的权限分组描述",
    "name": "我的权限分组",
    "newCode": "my-new-namespace"
  }
}
```

## 数据结构


### <a id="UpdateNamespaceDto"></a> UpdateNamespaceDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| code | string | 是 | 权限分组唯一标志符   |  `my-namespace` |
| description | string | 否 | 权限分组描述信息   |  `我的权限分组描述` |
| name | string | 否 | 权限分组名称   |  `我的权限分组` |
| newCode | string | 否 | 权限分组新的唯一标志符   |  `my-new-namespace` |


