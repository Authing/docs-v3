# 分页获取常规资源列表

<!--
  警告⚠️：
  不要直接修改该文档，
  https://github.com/Authing/authing-docs-factory
  使用该项目进行生成
-->

<LastUpdated />

根据筛选条件，分页获取常规资源详情列表。

## 方法名称

`ManagementClient.list_common_resource`

## 请求参数

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:60px">默认值</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- | ---- | ---- | ---- | ---- | ---- |
 | page | number  | 否 | 1 | 当前页数，从 1 开始  | `1` |
 | limit | number  | 否 | 10 | 每页数目，最大不能超过 50，默认为 10  | `10` |
 | keyword | string  | 否 | - | 查询条件  | `resourceName` |
 | namespaceCodeList | string  | 否 | - | 权限空间列表  | `["code1","code2"]` |




## 请求响应

类型： `CommonResourcePaginatedRespDto`

| 名称 | 类型 | 描述 |
| ---- | ---- | ---- |
| statusCode | number | 业务状态码，可以通过此状态码判断操作是否成功，200 表示成功。 |
| message | string | 描述信息 |
| apiCode | number | 细分错误码，可通过此错误码得到具体的错误类型。 |
| requestId | string | 请求 ID。当请求失败时会返回。 |
| data | <a href="#CommonResourcePagingDto">CommonResourcePagingDto</a> | 响应数据 |



示例结果：

```json
{
  "statusCode": 200,
  "message": "操作成功",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "statusCode": 200,
    "message": "操作成功",
    "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
    "list": {
      "code": "ecs",
      "description": "服务器",
      "name": "服务器",
      "type": "API",
      "actions": "[{\"name\":\"ecs:Start\",\"description\":\"启动 ECS 服务器\"},{\"name\":\"ecs:Stop\",\"description\":\"停止 ECS 服务器\"}]",
      "apiIdentifier": "https://my-awesome-api.com/api",
      "namespace": "default",
      "id": "62b40xxxxxxxxxxxd16f57c7",
      "namespaceId": "1",
      "namespaceName": "权限应用一",
      "userPoolId": "62b40xxxxxxxxxxxd16f57c7",
      "createdAt": "2022-07-03T02:20:30.000Z",
      "updatedAt": "2022-07-03T02:20:30.000Z"
    }
  }
}
```

## 数据结构


### <a id="CommonResourcePagingDto"></a> CommonResourcePagingDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| statusCode | number | 是 | 业务状态码，可以通过此状态码判断操作是否成功，200 表示成功。   |  `200` |
| message | string | 是 | 描述信息   |  `操作成功` |
| apiCode | number | 否 | 细分错误码，可通过此错误码得到具体的错误类型。   |  |
| requestId | string | 否 | 请求 ID。当请求失败时会返回。   |  `934108e5-9fbf-4d24-8da1-c330328abd6c` |
| totalCount | number | 是 | 记录总数   |  |
| list | array | 是 | 数据 嵌套类型：<a href="#CommonResourceDto">CommonResourceDto</a>。  |  |


### <a id="CommonResourceDto"></a> CommonResourceDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| code | string | 是 | 资源唯一标志符   |  `ecs` |
| description | string | 否 | 资源描述   |  `服务器` |
| name | string | 否 | 资源名称   |  `服务器` |
| type | string | 是 | 资源类型，如数据、API、按钮、菜单   | DATA |
| actions | array | 否 | 资源定义的操作类型 嵌套类型：<a href="#ResourceAction">ResourceAction</a>。数组长度限制：100。  |  `[{"name":"ecs:Start","description":"启动 ECS 服务器"},{"name":"ecs:Stop","description":"停止 ECS 服务器"}]` |
| apiIdentifier | string | 否 | API 资源的 URL 标识   |  `https://my-awesome-api.com/api` |
| namespace | string | 否 | 所属权限分组(权限空间)的 Code   |  `default` |
| linkedToTenant | boolean | 否 | 租户应用是否关联自建应用资源   |  |
| id | string | 是 | 资源id   |  `62b40xxxxxxxxxxxd16f57c7` |
| namespaceId | number | 是 | 权限应用id   |  `1` |
| namespaceName | string | 是 | 权限应用名称   |  `权限应用一` |
| userPoolId | string | 是 | UserPool ID   |  `62b40xxxxxxxxxxxd16f57c7` |
| createdAt | string | 是 | 创建时间   |  `2022-07-03T02:20:30.000Z` |
| updatedAt | string | 是 | 更新时间   |  `2022-07-03T02:20:30.000Z` |


### <a id="ResourceAction"></a> ResourceAction

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| name | string | 是 | 资源操作名称   |  `ecs:Start` |
| description | string | 是 | 资源操作描述   |  `ecs:Start` |


