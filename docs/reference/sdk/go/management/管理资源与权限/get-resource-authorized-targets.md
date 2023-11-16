# 获取资源被授权的主体

<!--
  警告⚠️：
  不要直接修改该文档，
  https://github.com/Authing/authing-docs-factory
  使用该项目进行生成
-->

<LastUpdated />

> 此文档根据 https://github.com/authing/authing-docs-factory 基于 https://api-explorer.authing.cn V3 API 自动生成，和 API 参数、返回结果保持一致，如此文档描述有误，请以 V3 API 为准。

获取资源被授权的主体

## 方法名称

`ManagementClient.GetResourceAuthorizedTargets`

## 请求参数

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:60px">默认值</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- | ---- | ---- | ---- | ---- | ---- |
| resource | string | 是 | - | 资源  | `ecs:1` |
| namespace | string | 否 | default | 权限分组  |  |
| targetType | string | 否 | - | 目标对象类型：<br>- `USER`: 用户<br>- `ROLE`: 角色<br>- `GROUP`: 分组<br>- `DEPARTMENT`: 部门<br>      | `USER` |
| page | number | 否 | 1 | 当前页数，从 1 开始  | `1` |
| limit | number | 否 | 10 | 每页数目，最大不能超过 50，默认为 10  | `10` |




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

		reqDto := &dto.GetResourceAuthorizedTargetsDto{
		Resource:   "ecs:1",
		TargetType: "USER",
		Page:       1,
		Limit:      10,
	}
	respDto := client.GetResourceAuthorizedTargets(reqDto)
	fmt.Println(respDto)
}
```




## 请求响应

类型： `GetResourceAuthorizedTargetRespDto`

| 名称 | 类型 | 描述 |
| ---- | ---- | ---- |
| statusCode | number | 业务状态码，可以通过此状态码判断操作是否成功，200 表示成功。 |
| message | string | 描述信息 |
| apiCode | number | 细分错误码，可通过此错误码得到具体的错误类型（成功请求不返回）。详细错误码列表请见：[API Code 列表](https://api-explorer.authing.cn/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId | string | 请求 ID。当请求失败时会返回。 |
| data | <a href="#GetResourceAuthorizedTargetDataDto">GetResourceAuthorizedTargetDataDto</a> | 响应数据 |



示例结果：

```json
{
  "statusCode": 200,
  "message": "操作成功",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "totalCount": 10,
    "list": {
      "targetType": "USER",
      "targetIdentifier": "code",
      "actions": "[\"ecs:Start\",\"ecs:Stop\"]"
    }
  }
}
```

## 数据结构


### <a id="GetResourceAuthorizedTargetDataDto"></a> GetResourceAuthorizedTargetDataDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| totalCount | number | 是 | 总数   |  `10` |
| list | array | 是 | 元素列表 嵌套类型：<a href="#ResourceAuthorizedTargetDto">ResourceAuthorizedTargetDto</a>。  |  |


### <a id="ResourceAuthorizedTargetDto"></a> ResourceAuthorizedTargetDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| targetType | string | 是 | 主体类型   | USER |
| targetIdentifier | string | 是 | 主体唯一标志符   |  `code` |
| actions | array | 是 | 操作列表   |  `["ecs:Start","ecs:Stop"]` |


