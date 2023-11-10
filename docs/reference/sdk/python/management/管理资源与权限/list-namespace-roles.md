# 分页权限分组下所有的角色列表

<!--
  警告⚠️：
  不要直接修改该文档，
  https://github.com/Authing/authing-docs-factory
  使用该项目进行生成
-->

<LastUpdated />

> 此文档根据 https://github.com/authing/authing-docs-factory 基于 https://api-explorer.authing.cn V3 API 自动生成，和 API 参数、返回结果保持一致，如此文档描述有误，请以 V3 API 为准。

根据筛选条件，分页获取权限分组下所有的角色列表。

## 方法名称

`ManagementClient.list_namespace_roles`

## 请求参数

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:60px">默认值</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- | ---- | ---- | ---- | ---- | ---- |
 | code | string  | 是 | - | 权限分组唯一标志符  | `my-namespace` |
 | page | number  | 否 | 1 | 当前页数，从 1 开始  | `1` |
 | limit | number  | 否 | 10 | 每页数目，最大不能超过 50，默认为 10  | `10` |
 | keywords | string  | 否 | - | 角色 Code 或者名称  | `test` |




## 请求响应

类型： `NamespaceRolesListPaginatedRespDto`

| 名称 | 类型 | 描述 |
| ---- | ---- | ---- |
| statusCode | number | 业务状态码，可以通过此状态码判断操作是否成功，200 表示成功。 |
| message | string | 描述信息 |
| apiCode | number | 细分错误码，可通过此错误码得到具体的错误类型。详情可以查看开发准备中的 apiCode 细分说明 |
| requestId | string | 请求 ID。当请求失败时会返回。 |
| data | <a href="#NamespaceRolesListRespDto">NamespaceRolesListRespDto</a> | 响应数据 |



示例结果：

```json
{
  "statusCode": 200,
  "message": "操作成功",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "id": "60b49exxxxxxxxxx26e68",
    "name": "角色名称",
    "code": "role1",
    "description": "这是一个示例角色的描述",
    "namespace": "system",
    "updatedAt": "2022-07-03T02:20:30.000Z"
  }
}
```

## 数据结构


### <a id="NamespaceRolesListRespDto"></a> NamespaceRolesListRespDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| id | string | 是 | 角色 ID   |  `60b49exxxxxxxxxx26e68` |
| name | string | 是 | 角色名称   |  `角色名称` |
| code | string | 是 | 角色 Code   |  `role1` |
| description | string | 否 | 角色 描述信息   |  `这是一个示例角色的描述` |
| namespace | string | 是 | 权限分组 Code   |  `system` |
| updatedAt | string | 是 | 更新时间   |  `2022-07-03T02:20:30.000Z` |


