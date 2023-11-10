# 获取角色的部门列表

<!--
  警告⚠️：
  不要直接修改该文档，
  https://github.com/Authing/authing-docs-factory
  使用该项目进行生成
-->

<LastUpdated />

> 此文档根据 https://github.com/authing/authing-docs-factory 基于 https://api-explorer.authing.cn V3 API 自动生成，和 API 参数、返回结果保持一致，如此文档描述有误，请以 V3 API 为准。

通过权限分组内角色 code，获取角色的部门列表，支持分页。

## 方法名称

`ManagementClient.list_role_departments`

## 请求参数

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:60px">默认值</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- | ---- | ---- | ---- | ---- | ---- |
 | code | string  | 是 | - | 权限分组内角色的唯一标识符  | `manager` |
 | namespace | string  | 否 | - | 所属权限分组的 code  | `default` |
 | page | number  | 否 | 1 | 当前页数，从 1 开始  | `1` |
 | limit | number  | 否 | 10 | 每页数目，最大不能超过 50，默认为 10  | `10` |




## 请求响应

类型： `RoleDepartmentListPaginatedRespDto`

| 名称 | 类型 | 描述 |
| ---- | ---- | ---- |
| statusCode | number | 业务状态码，可以通过此状态码判断操作是否成功，200 表示成功。 |
| message | string | 描述信息 |
| apiCode | number | 细分错误码，可通过此错误码得到具体的错误类型。详情可以查看开发准备中的 apiCode 细分说明 |
| requestId | string | 请求 ID。当请求失败时会返回。 |
| data | <a href="#RoleDepartmentListPagingDto">RoleDepartmentListPagingDto</a> | 数据 |



示例结果：

```json
{
  "statusCode": 200,
  "message": "操作成功",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "list": {
      "id": "60b49eb83fd80adb96f26e68",
      "code": "code",
      "name": "departmentName",
      "description": "dd8d7stf44"
    }
  }
}
```

## 数据结构


### <a id="RoleDepartmentListPagingDto"></a> RoleDepartmentListPagingDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| totalCount | number | 是 | 记录总数   |  |
| list | array | 是 | 数据 嵌套类型：<a href="#RoleDepartmentRespDto">RoleDepartmentRespDto</a>。  |  |


### <a id="RoleDepartmentRespDto"></a> RoleDepartmentRespDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| id | string | 是 | 部门 ID   |  `60b49eb83fd80adb96f26e68` |
| code | string | 是 | 部门 code   |  `code` |
| name | string | 是 | 部门名称   |  `departmentName` |
| description | string | 是 | 部门描述信息   |  `dd8d7stf44` |


