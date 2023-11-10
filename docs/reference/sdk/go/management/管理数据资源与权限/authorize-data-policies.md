# 授权数据策略

<!--
  警告⚠️：
  不要直接修改该文档，
  https://github.com/Authing/authing-docs-factory
  使用该项目进行生成
-->

<LastUpdated />

> 此文档根据 https://github.com/authing/authing-docs-factory 基于 https://api-explorer.authing.cn V3 API 自动生成，和 API 参数、返回结果保持一致，如此文档描述有误，请以 V3 API 为准。

数据策略创建主体授权，通过授权主体和数据策略进行相互授权。

## 方法名称

`ManagementClient.AuthorizeDataPolicies`

## 请求参数

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:60px">默认值</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- | ---- | ---- | ---- | ---- | ---- |
| targetList | <a href="#SubjectDto">SubjectDto[]</a> | 是 | - | 数据权限列表，每个策略下所有的数据权限  |  |
| policyIds | string[] | 是 | - | 数据策略 id 列表 数组长度限制：50。 | `["6301cexxxxxxxxxx27478","63123cexxxxxxxxxx2123101"]` |




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

		reqDto := &dto.CreateAuthorizeDataPolicyDto{
		PolicyIds: []string{"6301cexxxxxxxxxx27478", "63123cexxxxxxxxxx2123101"},
		TargetList: []dto.SubjectDto{
			{
				Id:   "6301cexxxxxxxxxxxxxxxxx78",
				Type: "USER",
				Name: "用户名称",
			},
		},
	}
	respDto := client.AuthorizeDataPolicies(reqDto)
	fmt.Println(respDto)
}
```




## 请求响应

类型： `CommonResponseDto`

| 名称 | 类型 | 描述 |
| ---- | ---- | ---- |
| statusCode | number | 业务状态码，可以通过此状态码判断操作是否成功，200 表示成功。 |
| message | string | 描述信息 |
| apiCode | number | 细分错误码，可通过此错误码得到具体的错误类型。详情可以查看开发准备中的 apiCode 细分说明 |
| requestId | string | 请求 ID。当请求失败时会返回。 |



示例结果：

```json
{
  "statusCode": 200,
  "message": "操作成功",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c"
}
```

## 数据结构


### <a id="SubjectDto"></a> SubjectDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| id | string | 是 | 主体 ID ，包含用户 ID、用户组 ID、角色 ID、组织机构 ID   |  `6301cexxxxxxxxxxxxxxxxx78` |
| type | string | 是 | 主体类型,包括 USER、GROUP、ROLE、ORG 四种类型   | USER |
| name | string | 否 | 主体名称，包含用户名称、用户组名称、角色名称、组织机构名称   |  `用户名称` |


