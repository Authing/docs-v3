# 获取用户指定资源权限列表

<!--
  警告⚠️：
  不要直接修改该文档，
  https://github.com/Authing/authing-docs-factory
  使用该项目进行生成
-->

<LastUpdated />

> 此文档根据 https://github.com/authing/authing-docs-factory 基于 https://api-explorer.authing.cn V3 API 自动生成，和 API 参数、返回结果保持一致，如此文档描述有误，请以 V3 API 为准。


获取用户指定资源的权限列表,用户获取某个应用下指定资源的权限列表。

## 方法名称

`AuthenticationClient.get_user_auth_resource_permission_list`

## 请求参数

| 名称 | 类型 | <div style="width:80px">是否必填</div> | 默认值 | <div style="width:300px">描述</div> | <div style="width:200px"></div>示例值</div> |
| ---- | ---- | ---- | ---- | ---- | ---- |
| resources | string[] | 是 | - | 数据资源路径列表,**树资源需到具体树节点**  | `["strResourceCode","arrResourceCode","treeResourceCode/StructCode1/resourceStructChildrenCode1"]` |




## 请求响应

类型： `GetUserAuthResourcePermissionListRespDto`

| 名称 | 类型 | 描述 |
| ---- | ---- | ---- |
| statusCode | number | 业务状态码，可以通过此状态码判断操作是否成功，200 表示成功。 |
| message | string | 描述信息 |
| apiCode | number | 细分错误码，可通过此错误码得到具体的错误类型（成功请求不返回）。详细错误码列表请见：[API Code 列表](https://api-explorer.authing.cn/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId | string | 请求 ID。当请求失败时会返回。 |
| data | <a href="#GetUserAuthResourcePermissionListDataDto">GetUserAuthResourcePermissionListDataDto</a> | 响应数据 |



示例结果：

```json
{
  "statusCode": 200,
  "message": "操作成功",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "permissionList": {
      "namespaceCode": "examplePermissionNamespace",
      "actions": "[\"get\",\"read\",\"write\",\"delete\"]",
      "resource": "treeResourceCode1"
    }
  }
}
```

## 数据结构


### <a id="GetUserAuthResourcePermissionListDataDto"></a> GetUserAuthResourcePermissionListDataDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| permissionList | array | 是 | 权限列表 嵌套类型：<a href="#GetUserAuthResourcePermissionList">GetUserAuthResourcePermissionList</a>。  |  |


### <a id="GetUserAuthResourcePermissionList"></a> GetUserAuthResourcePermissionList

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| namespaceCode | string | 是 | 当前应用 Id   |  `examplePermissionNamespace` |
| actions | array | 是 | 数据资源权限操作列表   |  `["get","read","write","delete"]` |
| resource | string | 是 | 数据资源路径   |  `treeResourceCode1` |


