# 创建组织机构

<!--
  警告⚠️：
  不要直接修改该文档，
  https://github.com/Authing/authing-docs-factory
  使用该项目进行生成
-->

<LastUpdated />

> 此文档根据 https://github.com/authing/authing-docs-factory 基于 https://api-explorer.authing.cn V3 API 自动生成，和 API 参数、返回结果保持一致，如此文档描述有误，请以 V3 API 为准。

创建组织机构，会创建一个只有一个节点的组织机构，可以选择组织描述信息、根节点自定义 ID、多语言等。

## 方法名称

`ManagementClient.create_organization`

## 请求参数

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:60px">默认值</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- | ---- | ---- | ---- | ---- | ---- |
| metadata | object | 是 | - | 元数据信息  |  |
| organizationName | string | 是 | - | 组织名称  | `蒸汽记忆` |
| organizationCode | string | 是 | - | 组织 code  | `steamory` |
| description | string | 否 | - | 组织描述信息  | `组织描述信息` |
| openDepartmentId | string | 否 | - | 根节点自定义 ID  | `60b49eb83fd80adb96f26e68` |
| i18n | <a href="#OrganizationNameI18nDto">OrganizationNameI18nDto</a> | 否 | - | 多语言设置  | `{"organizationName":{"zh-CN":{"enabled":false,"value":"中文"},"en-US":{"enabled":false,"value":"English"}}}` |
| tenantId | string | 否 | - | 租户 ID  | `623c20b2a062aaaaf41b17da` |
| postIdList | string[] | 否 | - | 岗位 id 列表  | `["xxx"]` |




## 请求响应

类型： `OrganizationSingleRespDto`

| 名称 | 类型 | 描述 |
| ---- | ---- | ---- |
| statusCode | number | 业务状态码，可以通过此状态码判断操作是否成功，200 表示成功。 |
| message | string | 描述信息 |
| apiCode | number | 细分错误码，可通过此错误码得到具体的错误类型（成功请求不返回）。详细错误码列表请见：[API Code 列表](https://api-explorer.authing.cn/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId | string | 请求 ID。当请求失败时会返回。 |
| data | <a href="#OrganizationDto">OrganizationDto</a> | 响应数据 |



示例结果：

```json
{
  "statusCode": 200,
  "message": "操作成功",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "organizationCode": "steamory",
    "organizationName": "蒸汽记忆",
    "description": "组织描述信息",
    "createdAt": "2022-07-03T03:20:30.000Z",
    "updatedAt": "2022-07-03T03:20:30.000Z",
    "departmentId": "60b49eb83fd80adb96f26e68",
    "openDepartmentId": "60b49eb83fd80adb96f26e68",
    "hasChildren": true,
    "leaderUserIds": "[\"60b49eb83fd80adb96f26e68\"]",
    "membersCount": 150,
    "i18n": {
      "organizationName": {
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
    "tenantId": "623c20b2a062aaaaf41b17da",
    "postIdList": "[\"xxx\"]",
    "status": "false",
    "allow": "[\"xxx\"]"
  }
}
```

## 数据结构


### <a id="OrganizationNameI18nDto"></a> OrganizationNameI18nDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| organizationName |  | 是 | 支持多语言的字段 嵌套类型：<a href="#LangObject">LangObject</a>。  |  `{"zh-CN":{"enabled":false,"value":"中文"},"en-US":{"enabled":false,"value":"English"}}` |


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


### <a id="OrganizationDto"></a> OrganizationDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| organizationCode | string | 是 | 组织 code   |  `steamory` |
| organizationName | string | 是 | 组织名称   |  `蒸汽记忆` |
| description | string | 否 | 组织描述信息   |  `组织描述信息` |
| createdAt | string | 否 | 创建时间   |  `2022-07-03T03:20:30.000Z` |
| updatedAt | string | 否 | 修改时间   |  `2022-07-03T03:20:30.000Z` |
| departmentId | string | 是 | 根节点 ID   |  `60b49eb83fd80adb96f26e68` |
| openDepartmentId | string | 否 | 根节点自定义 ID   |  `60b49eb83fd80adb96f26e68` |
| hasChildren | boolean | 是 | 是否包含子节点   |  `true` |
| leaderUserIds | array | 否 | 部门负责人 ID   |  `["60b49eb83fd80adb96f26e68"]` |
| membersCount | number | 是 | 部门人数   |  `150` |
| isVirtualNode | boolean | 是 | 是否是虚拟部门   |  |
| i18n |  | 否 | 多语言设置 嵌套类型：<a href="#OrganizationNameI18nDto">OrganizationNameI18nDto</a>。  |  `{"organizationName":{"zh-CN":{"enabled":false,"value":"中文"},"en-US":{"enabled":false,"value":"English"}}}` |
| customData | object | 否 | 部门的扩展字段数据   |  `{"icon":"https://example.com/logo"}` |
| tenantId | string | 否 | 租户 ID   |  `623c20b2a062aaaaf41b17da` |
| postIdList | array | 否 | 岗位 id 列表   |  `["xxx"]` |
| status | string | 否 | 状态   |  `false` |
| allow | string | 否 | 访问限制   |  `["xxx"]` |


### <a id="OrganizationNameI18nDto"></a> OrganizationNameI18nDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| organizationName |  | 是 | 支持多语言的字段 嵌套类型：<a href="#LangObject">LangObject</a>。  |  `{"zh-CN":{"enabled":false,"value":"中文"},"en-US":{"enabled":false,"value":"English"}}` |


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


