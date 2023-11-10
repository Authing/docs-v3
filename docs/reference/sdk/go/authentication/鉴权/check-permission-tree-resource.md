# 树类型资源鉴权

<!--
  警告⚠️：
  不要直接修改该文档，
  https://github.com/Authing/authing-docs-factory
  使用该项目进行生成
-->

<LastUpdated />

> 此文档根据 https://github.com/authing/authing-docs-factory 基于 https://api-explorer.authing.cn V3 API 自动生成，和 API 参数、返回结果保持一致，如此文档描述有误，请以 V3 API 为准。


树类型资源鉴权，支持用户对一个或者多个树资源进行权限判断

## 方法名称

`AuthenticationClient.CheckPermissionByTreeResource`

## 请求参数

| 名称 | 类型 | <div style="width:80px">是否必填</div> | 默认值 | <div style="width:300px">描述</div> | <div style="width:200px"></div>示例值</div> |
| ---- | ---- | ---- | ---- | ---- | ---- |
| resources | string[] | 是 | - | 树数据资源路径列表,  | `["treeResourceCode1/StructCode1/resourceStructChildrenCode1","treeResourceCode1/StructCode1/resourceStructChildrenCode2","treeResourceCode1/StructCode2"]` |
| action | string | 是 | - | 数据资源权限操作, read、get、write 等动作  | `get` |




## 示例代码

```go
package main

import (
	"fmt"
	"github.com/Authing/authing-golang-sdk/v3/authentication"
	"github.com/Authing/authing-golang-sdk/v3/dto"
)

func main() {
	options := &authentication.AuthenticationClientOptions{
        // 需要替换成你的 Authing 应用 ID
		AppId:       "AUTHING_APP_ID",
        // 需要替换成你的 Authing 应用密钥
		AppSecret:   "AUTHING_APP_SECRET",
        // 需要替换成你的 Authing 应用域名
		AppHost:     "AUTHING_APP_HOST",
        // 需要替换成你的 Authing 应用回调地址
		RedirectUri: "AUTHING_APP_REDIRECT_URI",
	}
	client, err := authentication.NewAuthenticationClient(options)
	if err != nil {
		// The exception needs to be handled by the developer.
	}
	    // 使用用户的 access_token 初始化 AuthenticationClient，access_token 可以通过登录接口获取
    client.SetAccessToken("USER_ACCESS_TOKEN")

    reqDto := &dto.CheckPermissionTreeResourceDto{
        action:         "get",
		    resources:       []string{"treeExampleResourceCode/childrenCode", "treeExampleResourceCode/childrenCode/treeExampleResourceCode/childrenCode1"},
    }
    respDto := client.checkPermissionByTreeResource(reqDto)
	fmt.Println(respDto)
}

```




## 请求响应

类型： `CheckResourcePermissionsRespDto`

| 名称 | 类型 | 描述 |
| ---- | ---- | ---- |
| statusCode | number | 业务状态码，可以通过此状态码判断操作是否成功，200 表示成功。 |
| message | string | 描述信息 |
| apiCode | number | 细分错误码，可通过此错误码得到具体的错误类型。详情可以查看开发准备中的 apiCode 细分说明 |
| requestId | string | 请求 ID。当请求失败时会返回。 |
| data | <a href="#CheckResourcePermissionDataDto">CheckResourcePermissionDataDto</a> | 响应数据 |



示例结果：

```json
{
  "statusCode": 200,
  "message": "操作成功",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "checkResultList": {
      "namespaceCode": "examplePermissionNamespace",
      "action": "get",
      "resource": "exampleResource",
      "enabled": true
    }
  }
}
```

## 数据结构


### <a id="CheckResourcePermissionDataDto"></a> CheckResourcePermissionDataDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| checkResultList | array | 是 | 检查结果列表 嵌套类型：<a href="#CheckResourcePermissionRespDto">CheckResourcePermissionRespDto</a>。  |  |


### <a id="CheckResourcePermissionRespDto"></a> CheckResourcePermissionRespDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| namespaceCode | string | 是 | 权限空间 Code   |  `examplePermissionNamespace` |
| action | string | 是 | 数据资源权限操作   |  `get` |
| resource | string | 是 | 资源路径   |  `exampleResource` |
| enabled | boolean | 是 | 用户在某个权限空间下是否具有该数据资源的某个操作   |  `true` |


