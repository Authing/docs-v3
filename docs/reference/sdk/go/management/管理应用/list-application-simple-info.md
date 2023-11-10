# 获取应用简单信息列表

<!--
  警告⚠️：
  不要直接修改该文档，
  https://github.com/Authing/authing-docs-factory
  使用该项目进行生成
-->

<LastUpdated />

> 此文档根据 https://github.com/authing/authing-docs-factory 基于 https://api-explorer.authing.cn V3 API 自动生成，和 API 参数、返回结果保持一致，如此文档描述有误，请以 V3 API 为准。

获取应用简单信息列表

## 方法名称

`ManagementClient.ListApplicationSimpleInfo`

## 请求参数

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:60px">默认值</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- | ---- | ---- | ---- | ---- | ---- |
 | page | number  | 否 | 1 | 当前页数，从 1 开始  | `1` |
 | limit | number  | 否 | 10 | 每页数目，最大不能超过 50，默认为 10  | `10` |
 | isIntegrateApp | boolean  | 否 | - | 是否为集成应用  |  |
 | isSelfBuiltApp | boolean  | 否 | - | 是否为自建应用  |  |
 | ssoEnabled | boolean  | 否 | - | 是否开启单点登录  |  |
 | keywords | string  | 否 | - | 模糊搜索字符串  | `test` |




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

		reqDto := &dto.ListApplicationSimpleInfoDto{
		Page:           1,
		Limit:          10,
	}
	respDto := client.ListApplicationSimpleInfo(reqDto)
	fmt.Println(respDto)
}
```




## 请求响应

类型： `ApplicationSimpleInfoPaginatedRespDto`

| 名称 | 类型 | 描述 |
| ---- | ---- | ---- |
| statusCode | number | 业务状态码，可以通过此状态码判断操作是否成功，200 表示成功。 |
| message | string | 描述信息 |
| apiCode | number | 细分错误码，可通过此错误码得到具体的错误类型。详情可以查看开发准备中的 apiCode 细分说明 |
| requestId | string | 请求 ID。当请求失败时会返回。 |
| data | <a href="#ApplicationSimpleInfoPaginatedDataDto">ApplicationSimpleInfoPaginatedDataDto</a> | 响应数据 |



示例结果：

```json
{
  "statusCode": 200,
  "message": "操作成功",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "list": {
      "appId": "62eaa95fe0xxxx9a5295bf7c",
      "appIdentifier": "example",
      "appName": "示例应用",
      "appLogo": "示例应用",
      "appDescription": "示例描述信息",
      "appType": "web"
    },
    "totalCount": 10
  }
}
```

## 数据结构


### <a id="ApplicationSimpleInfoPaginatedDataDto"></a> ApplicationSimpleInfoPaginatedDataDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| list | array | 是 | 列表数据 嵌套类型：<a href="#ApplicationSimpleInfoDto">ApplicationSimpleInfoDto</a>。  |  |
| totalCount | number | 是 | 记录总数   |  `10` |


### <a id="ApplicationSimpleInfoDto"></a> ApplicationSimpleInfoDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| appId | string | 是 | 应用 ID   |  `62eaa95fe0xxxx9a5295bf7c` |
| appIdentifier | string | 是 | 应用唯一标志   |  `example` |
| appName | string | 是 | 应用名称   |  `示例应用` |
| appLogo | string | 是 | 应用 Logo 链接   |  `示例应用` |
| appDescription | string | 否 | 应用描述信息   |  `示例描述信息` |
| appType | string | 是 | 应用类型   | web |
| isIntegrateApp | boolean | 是 | 是否为集成应用   |  |


