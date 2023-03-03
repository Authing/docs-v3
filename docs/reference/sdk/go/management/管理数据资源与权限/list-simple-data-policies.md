# 获取数据策略简略信息列表

<!--
  警告⚠️：
  不要直接修改该文档，
  https://github.com/Authing/authing-docs-factory
  使用该项目进行生成
-->

<LastUpdated />

分页获取数据策略简略信息列表，通过关键字搜索数据策略名称或者数据策略 Code 进行模糊查找出数据策略 ID、数据策略名称和数据策略描述信息。

## 方法名称

`ManagementClient.ListSimpleDataPolices`

## 请求参数

类型： `ListSimpleDataPoliciesDto`


| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:60px">默认值</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- | ---- | ---- | ---- | ---- | ---- |
 | page | number  | 否 | 1 | 当前页数，从 1 开始  | `1` |
 | limit | number  | 否 | 10 | 每页数目，最大不能超过 50，默认为 10  | `10` |
 | query | string  | 否 | - | 数据策略名称关键字搜索  | `examplePolicyName` |




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

		reqDto := &dto.ListSimpleDataPoliciesDto{
		Page:  1,
		Limit: 10,
		Query: "examplePolicyName",
	}
	respDto := client.ListSimpleDataPolices(reqDto)
	fmt.Println(respDto)
}
```




## 请求响应

类型： `ListSimpleDataPoliciesPaginatedRespDto`

| 名称 | 类型 | 描述 |
| ---- | ---- | ---- |
| statusCode | number | 业务状态码，可以通过此状态码判断操作是否成功，200 表示成功。 |
| message | string | 描述信息 |
| apiCode | number | 细分错误码，可通过此错误码得到具体的错误类型。 |
| requestId | string | 请求 ID。当请求失败时会返回。 |
| data | <a href="#DataPoliciesSimplePaginatedRespDto">DataPoliciesSimplePaginatedRespDto</a> | 响应数据 |



示例结果：

```json
{
  "statusCode": 200,
  "message": "操作成功",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "totalCount": 20,
    "list": {
      "policyId": "60b49xxxxxxxxxxxxxxx6e68",
      "policyName": "示例数据策略名称",
      "description": "示例数据策略描述"
    }
  }
}
```

## 数据结构


### <a id="DataPoliciesSimplePaginatedRespDto"></a> DataPoliciesSimplePaginatedRespDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| totalCount | number | 否 | 记录总数   |  `20` |
| list | array | 是 | 响应数据 嵌套类型：<a href="#ListSimpleDataPoliciesRespDto">ListSimpleDataPoliciesRespDto</a>。  |  |


### <a id="ListSimpleDataPoliciesRespDto"></a> ListSimpleDataPoliciesRespDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| policyId | string | 是 | 数据策略 ID   |  `60b49xxxxxxxxxxxxxxx6e68` |
| policyName | string | 是 | 数据策略名称，用户池唯一   |  `示例数据策略名称` |
| description | string | 否 | 数据策略描述   |  `示例数据策略描述` |


