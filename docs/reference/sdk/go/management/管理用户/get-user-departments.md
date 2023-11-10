# 获取用户部门列表

<!--
  警告⚠️：
  不要直接修改该文档，
  https://github.com/Authing/authing-docs-factory
  使用该项目进行生成
-->

<LastUpdated />

> 此文档根据 https://github.com/authing/authing-docs-factory 基于 https://api-explorer.authing.cn V3 API 自动生成，和 API 参数、返回结果保持一致，如此文档描述有误，请以 V3 API 为准。

通过用户 ID，获取用户部门列表，支持分页，可以选择获取自定义数据、选择指定用户 ID 类型、增序或降序等。

## 方法名称

`ManagementClient.GetUserDepartments`

## 请求参数

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:60px">默认值</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- | ---- | ---- | ---- | ---- | ---- |
 | userId | string  | 是 | - | 用户的唯一标志，可以是用户 ID、用户名、邮箱、手机号、externalId、在外部身份源的 ID，详情见 userIdType 字段的说明。默认为用户 id 。  | `6229ffaxxxxxxxxcade3e3d9` |
 | userIdType | string  | 否 | user_id | 用户 ID 类型，默认值为 `user_id`，可选值为：<br>- `user_id`: Authing 用户 ID，如 `6319a1504f3xxxxf214dd5b7`<br>- `phone`: 用户手机号<br>- `email`: 用户邮箱<br>- `username`: 用户名<br>- `external_id`: 用户在外部系统的 ID，对应 Authing 用户信息的 `externalId` 字段<br>- `identity`: 用户的外部身份源信息，格式为 `<extIdpId>:<userIdInIdp>`，其中 `<extIdpId>` 为 Authing 身份源的 ID，`<userIdInIdp>` 为用户在外部身份源的 ID。<br>示例值：`62f20932716fbcc10d966ee5:ou_8bae746eac07cd2564654140d2a9ac61`。<br>- `sync_relation`: 用户的外部身份源信息，格式为 `<provier>:<userIdInIdp>`，其中 `<provier>` 为同步身份源类型，如 wechatwork, lark；`<userIdInIdp>` 为用户在外部身份源的 ID。<br>示例值：`lark:ou_8bae746eac07cd2564654140d2a9ac61`。<br>  | `user_id` |
 | page | number  | 否 | 1 | 当前页数，从 1 开始  | `1` |
 | limit | number  | 否 | 10 | 每页数目，最大不能超过 50，默认为 10  | `10` |
 | withCustomData | boolean  | 否 | - | 是否获取自定义数据  | `true` |
 | withDepartmentPaths | boolean  | 否 | - | 是否获取部门路径  | `true` |
 | sortBy | string  | 否 | JoinDepartmentAt | 排序依据，如 部门创建时间、加入部门时间、部门名称、部门标志符  | `JoinDepartmentAt` |
 | orderBy | string  | 否 | Desc | 增序或降序  | `Desc` |




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

		reqDto := &dto.GetUserDepartmentsDto{
		UserId:         "635215b413xxxxf5f63c511a",
	}
	respDto := client.GetUserDepartments(reqDto)
	fmt.Println(respDto)
}
```




## 请求响应

类型： `UserDepartmentPaginatedRespDto`

| 名称 | 类型 | 描述 |
| ---- | ---- | ---- |
| statusCode | number | 业务状态码，可以通过此状态码判断操作是否成功，200 表示成功。 |
| message | string | 描述信息 |
| apiCode | number | 细分错误码，可通过此错误码得到具体的错误类型。详情可以查看开发准备中的 apiCode 细分说明 |
| requestId | string | 请求 ID。当请求失败时会返回。 |
| data | <a href="#UserDepartmentPagingDto">UserDepartmentPagingDto</a> | 响应数据 |



示例结果：

```json
{
  "statusCode": 200,
  "message": "操作成功",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "list": {
      "organizationCode": "steamory",
      "departmentId": "60b49eb83fd80adb96f26e68",
      "createdAt": "2022-07-03T02:20:30.000Z",
      "name": "dd8d7stf44",
      "description": "dd8d7stf44",
      "openDepartmentId": "ou_7dab8a3d3cdccxxxxxx777c7ad535d62",
      "isLeader": true,
      "code": "6229c4deb3e4d8a20b6021ff",
      "isMainDepartment": true,
      "joinedAt": "2022-07-03T02:20:30.000Z",
      "i18n": {
        "name": {
          "zh-CN": {
            "enabled": false,
            "value": "中文"
          },
          "en-US": {
            "enabled": false,
            "value": "English"
          }
        }
      },
      "customData": {
        "icon": "https://example.com/logo"
      },
      "departmentIdPath": "[\"parentId1\",\"parentId2\"]",
      "departmentCodePath": "[\"parentCode1\",\"parentCode2\"]",
      "departmentNamePath": "[\"parentName1\",\"parentName2\"]"
    }
  }
}
```

## 数据结构


### <a id="UserDepartmentPagingDto"></a> UserDepartmentPagingDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| totalCount | number | 是 | 记录总数   |  |
| list | array | 是 | 响应数据 嵌套类型：<a href="#UserDepartmentRespDto">UserDepartmentRespDto</a>。  |  |


### <a id="UserDepartmentRespDto"></a> UserDepartmentRespDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| organizationCode | string | 是 | 组织 Code（organizationCode）   |  `steamory` |
| departmentId | string | 是 | 部门 ID   |  `60b49eb83fd80adb96f26e68` |
| isRoot | boolean | 是 | 是否为根部门   |  |
| createdAt | string | 是 | 部门创建时间   |  `2022-07-03T02:20:30.000Z` |
| name | string | 是 | 部门名称   |  `dd8d7stf44` |
| description | string | 是 | 部门描述   |  `dd8d7stf44` |
| openDepartmentId | string | 否 | 自定义部门 ID，用于存储自定义的 ID   |  `ou_7dab8a3d3cdccxxxxxx777c7ad535d62` |
| isLeader | boolean | 是 | 是否是部门 Leader   |  `true` |
| code | string | 是 | 部门识别码   |  `6229c4deb3e4d8a20b6021ff` |
| isMainDepartment | boolean | 是 | 是否是主部门   |  `true` |
| joinedAt | string | 是 | 加入部门时间   |  `2022-07-03T02:20:30.000Z` |
| isVirtualNode | boolean | 是 | 是否是虚拟部门   |  |
| i18n |  | 否 | 多语言设置 嵌套类型：<a href="#DepartmentI18nDto">DepartmentI18nDto</a>。  |  `{"name":{"zh-CN":{"enabled":false,"value":"中文"},"en-US":{"enabled":false,"value":"English"}}}` |
| customData | object | 否 | 部门的扩展字段数据   |  `{"icon":"https://example.com/logo"}` |
| departmentIdPath | array | 否 | 部门 ID 路径   |  `["parentId1","parentId2"]` |
| departmentCodePath | array | 否 | 部门 Code 路径   |  `["parentCode1","parentCode2"]` |
| departmentNamePath | array | 否 | 部门名路径   |  `["parentName1","parentName2"]` |


### <a id="DepartmentI18nDto"></a> DepartmentI18nDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| name |  | 是 | 支持多语言的字段 嵌套类型：<a href="#LangObject">LangObject</a>。  |  `{"zh-CN":{"enabled":false,"value":"中文"},"en-US":{"enabled":false,"value":"English"}}` |


### <a id="LangObject"></a> LangObject

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| zh-CN |  | 是 | 多语言的中文内容 嵌套类型：<a href="#LangUnit">LangUnit</a>。  |  `{"enabled":false,"value":"中文"}` |
| en-US |  | 是 | 多语言的英文内容 嵌套类型：<a href="#LangUnit">LangUnit</a>。  |  `{"enabled":false,"value":"English"}` |
| zh-TW |  | 是 | 多语言的繁体中文内容 嵌套类型：<a href="#LangUnit">LangUnit</a>。  |  `{"enabled":false,"value":"繁體中文"}` |
| ja-JP |  | 是 | 多语言的日语内容 嵌套类型：<a href="#LangUnit">LangUnit</a>。  |  `{"enabled":false,"value":"日本語"}` |


### <a id="LangUnit"></a> LangUnit

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| enabled | boolean | 是 | 是否已开启。若开启，且控制台选择该语言，则展示该内容。（默认关闭）   |  |
| value | string | 是 | 多语言内容   |  |


