# 获取租户应用列表

<!--
  警告⚠️：
  不要直接修改该文档，
  https://github.com/Authing/authing-docs-factory
  使用该项目进行生成
-->

<LastUpdated />

> 此文档根据 https://github.com/authing/authing-docs-factory 基于 https://api-explorer.authing.cn V3 API 自动生成，和 API 参数、返回结果保持一致，如此文档描述有误，请以 V3 API 为准。

获取应用列表，可以指定 租户 ID 筛选。

## 方法名称

`ManagementClient.listTenantApplications`

## 请求参数

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:60px">默认值</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- | ---- | ---- | ---- | ---- | ---- |
 | page | string  | 是 | - | 获取应用列表的页码  | `1` |
 | limit | string  | 是 | - | 每页获取的应用数量  | `1` |
 | keywords | string  | 是 | - | 搜索关键字  |  |
 | sso_enabled | boolean  | 是 | - | 应用是否加入单点登录  |  |




## 请求响应

类型： `TenantApplicationListPaginatedRespDto`

| 名称 | 类型 | 描述 |
| ---- | ---- | ---- |
| statusCode | number | 业务状态码，可以通过此状态码判断操作是否成功，200 表示成功。 |
| message | string | 描述信息 |
| apiCode | number | 细分错误码，可通过此错误码得到具体的错误类型（成功请求不返回）。详细错误码列表请见：[API Code 列表](https://api-explorer.authing.cn/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId | string | 请求 ID。当请求失败时会返回。 |
| data | <a href="#TenantApplicationListPagingDto">TenantApplicationListPagingDto</a> | 数据 |



示例结果：

```json
{
  "statusCode": 200,
  "message": "操作成功",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "list": {
      "userPoolId": "62b40xxxxxxxxxxxd16f57c7",
      "tenantAppId": "62b40xxxxxxxxxxxd16f57c7",
      "name": "App Name",
      "logo": "https://example.com/logo.png",
      "ssoEnabled": true,
      "appId": "62b40xxxxxxxxxxxd16f57c7"
    }
  }
}
```

## 数据结构


### <a id="TenantApplicationListPagingDto"></a> TenantApplicationListPagingDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| totalCount | number | 是 | 记录总数   |  |
| list | array | 是 | 响应数据 嵌套类型：<a href="#TenantApplicationDto">TenantApplicationDto</a>。  |  |


### <a id="TenantApplicationDto"></a> TenantApplicationDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| userPoolId | string | 是 | UserPool ID   |  `62b40xxxxxxxxxxxd16f57c7` |
| tenantAppId | string | 是 | App ID   |  `62b40xxxxxxxxxxxd16f57c7` |
| name | string | 是 | App 名称   |  `App Name` |
| description | string | 否 | 应用描述信息   |  |
| logo | string | 是 | App Logo   |  `https://example.com/logo.png` |
| applicationType | string | 是 | 应用类型   |  |
| ssoEnabled | boolean | 是 | 是否开启 SSO 单点登录   |  `true` |
| appId | string | 是 | App ID   |  `62b40xxxxxxxxxxxd16f57c7` |


