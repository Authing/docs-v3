# 角色 list 分页查询

<!--
  警告⚠️：
  不要直接修改该文档，
  https://github.com/Authing/authing-docs-factory
  使用该项目进行生成
-->

<LastUpdated />

搜索角色列表，可以通过角色 name 和 code 以及所属应用进行筛选

## 方法名称

`ManagementClient.listRoleAssignments`

## 请求参数

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:60px">默认值</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- | ---- | ---- | ---- | ---- | ---- |
| roleCode | string | 是 | - | 角色 code,只能使用字母、数字和 -_，最多 50 字符  | `code_1` |
| appId | string | 是 | - | 按照应用 id 列表进行筛选  | `60b49eb83fd80adb96f26e68` |
| page | number | 否 | 1 | 当前页数，从 1 开始  | `1` |
| limit | number | 否 | 10 | 每页数目，最大不能超过 50，默认为 10  | `10` |
| query | string | 否 | - | 按角色code或者角色名称查询  | `示例应用` |
| targetType | string[] | 否 | - | 目标类型，接受用户，部门  | `["USER","ORG"]` |




## 请求响应

类型： `RoleListPageRespDto`

| 名称 | 类型 | 描述 |
| ---- | ---- | ---- |
| statusCode | number | 业务状态码，可以通过此状态码判断操作是否成功，200 表示成功。 |
| message | string | 描述信息 |
| apiCode | number | 细分错误码，可通过此错误码得到具体的错误类型。 |
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
      "userPoolId": "6076bacxxxxxxxxd80d993b5",
      "roleName": "测试用户",
      "roleCode": "code_1",
      "description": "这个一个角色的描述信息",
      "appId": "6076bacxxxxxxxxd80d993b",
      "appName": "示例应用",
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
| data | array | 是 | 数据 嵌套类型：<a href="#RolePermissionListDto">RolePermissionListDto</a>。  |  |


### <a id="RolePermissionListDto"></a> RolePermissionListDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| roleId | string | 是 | 角色 ID   |  `60b49eb83fd80adb96f26e68` |
| userPoolId | string | 是 | 所属用户池 ID   |  `6076bacxxxxxxxxd80d993b5` |
| roleName | string | 是 | 角色名称，最多 50 字符   |  `测试用户` |
| roleCode | string | 是 | 角色 code,只能使用字母、数字和 -_，最多 50 字符   |  `code_1` |
| description | string | 否 | 角色描述信息,最多两百字符   |  `这个一个角色的描述信息` |
| appId | string | 是 | 应用 id   |  `6076bacxxxxxxxxd80d993b` |
| appName | string | 是 | 角色所属应用名称   |  `示例应用` |
| createdAt | string | 是 | 创建时间   |  `2022-03-17T05:23:01.567Z` |
| updatedAt | string | 是 | 更新时间   |  `2022-03-17T05:23:01.567Z` |


