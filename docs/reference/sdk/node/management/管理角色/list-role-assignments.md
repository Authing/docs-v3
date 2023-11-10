# 获取角色授权列表

<!--
  警告⚠️：
  不要直接修改该文档，
  https://github.com/Authing/authing-docs-factory
  使用该项目进行生成
-->

<LastUpdated />

> 此文档根据 https://github.com/authing/authing-docs-factory 基于 https://api-explorer.authing.cn V3 API 自动生成，和 API 参数、返回结果保持一致，如此文档描述有误，请以 V3 API 为准。

获取角色授权列表。

## 方法名称

`ManagementClient.listRoleAssignments`

## 请求参数

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:60px">默认值</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- | ---- | ---- | ---- | ---- | ---- |
 | roleCode | string  | 是 | - | 角色 code,只能使用字母、数字和 -_，最多 50 字符  | `code_1` |
 | page | number  | 否 | 1 | 当前页数，从 1 开始  | `1` |
 | limit | number  | 否 | 10 | 每页数目，最大不能超过 50，默认为 10  | `10` |
 | query | string  | 否 | - | 按角色 Code 或者角色名称查询  | `示例应用` |
 | namespaceCode | string  | 否 | - | 权限空间code  |  |
 | targetType | string[]  | 否 | - | 目标类型，接受用户，部门  | `["USER","ORG"]` |




## 请求响应

类型： `RoleListPageRespDto`

| 名称 | 类型 | 描述 |
| ---- | ---- | ---- |
| statusCode | number | 业务状态码，可以通过此状态码判断操作是否成功，200 表示成功。 |
| message | string | 描述信息 |
| apiCode | number | 细分错误码，可通过此错误码得到具体的错误类型。详情可以查看开发准备中的 apiCode 细分说明 |
| requestId | string | 请求 ID。当请求失败时会返回。 |
| data | <a href="#RoleListPageDto">RoleListPageDto</a> | 响应数据 |



示例结果：

```json
{
  "statusCode": 200,
  "message": "操作成功",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "totalCount": 20,
    "data": {
      "roleId": "60b49eb83fd80adb96f26e68",
      "status": "ENABLE",
      "enableTime": "1670915666812",
      "endTime": "1670915666812",
      "userPoolId": "6076bacxxxxxxxxd80d993b5",
      "roleName": "测试用户",
      "roleCode": "code_1",
      "description": "这个一个角色的描述信息",
      "createdAt": "2022-03-17T05:23:01.567Z",
      "updatedAt": "2022-03-17T05:23:01.567Z"
    }
  }
}
```

## 数据结构


### <a id="RoleListPageDto"></a> RoleListPageDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| totalCount | number | 否 | 记录总数   |  `20` |
| data | array | 是 | 响应数据 嵌套类型：<a href="#RolePermissionListDto">RolePermissionListDto</a>。  |  |


### <a id="RolePermissionListDto"></a> RolePermissionListDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| roleId | string | 是 | 角色 ID   |  `60b49eb83fd80adb96f26e68` |
| status | string | 是 | 主体状态，DISABLE-未加入角色，ENABLE-已经加入了角色   |  `ENABLE` |
| enableTime | number | 否 | 主体加入时间毫秒值   |  `1670915666812` |
| endTime | number | 否 | 主体失效时间毫秒值，为 null 表示用不失效   |  `1670915666812` |
| userPoolId | string | 是 | 所属用户池 ID   |  `6076bacxxxxxxxxd80d993b5` |
| roleName | string | 是 | 角色名称，最多 50 字符   |  `测试用户` |
| roleCode | string | 是 | 角色 code,只能使用字母、数字和 -_，最多 50 字符   |  `code_1` |
| description | string | 否 | 角色描述信息,最多两百字符   |  `这个一个角色的描述信息` |
| createdAt | string | 是 | 创建时间   |  `2022-03-17T05:23:01.567Z` |
| updatedAt | string | 是 | 更新时间   |  `2022-03-17T05:23:01.567Z` |


