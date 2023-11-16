# 校验权限空间 Code 或者名称是否可用

<!--
  警告⚠️：
  不要直接修改该文档，
  https://github.com/Authing/authing-docs-factory
  使用该项目进行生成
-->

<LastUpdated />

> 此文档根据 https://github.com/authing/authing-docs-factory 基于 https://api-explorer.authing.cn V3 API 自动生成，和 API 参数、返回结果保持一致，如此文档描述有误，请以 V3 API 为准。

通过用户池 ID 和权限空间 Code,或者用户池 ID 和权限空间名称查询是否可用。

## 方法名称

`ManagementClient.check_permission_namespace_exists`

## 请求参数

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:60px">默认值</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- | ---- | ---- | ---- | ---- | ---- |
| code | string | 否 | - | 权限空间 Code  | `examplePermissionNamespace` |
| name | string | 否 | - | 权限空间名称  | `示例权限空间` |




## 请求响应

类型： `PermissionNamespaceCheckExistsRespDto`

| 名称 | 类型 | 描述 |
| ---- | ---- | ---- |
| statusCode | number | 业务状态码，可以通过此状态码判断操作是否成功，200 表示成功。 |
| message | string | 描述信息 |
| apiCode | number | 细分错误码，可通过此错误码得到具体的错误类型（成功请求不返回）。详细错误码列表请见：[API Code 列表](https://api-explorer.authing.cn/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId | string | 请求 ID。当请求失败时会返回。 |
| data | <a href="#CheckPermissionNamespaceExistsRespDto">CheckPermissionNamespaceExistsRespDto</a> | 响应数据 |



示例结果：

```json
{
  "statusCode": 200,
  "message": "操作成功",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "isValid": " false",
    "message": " permission namespace code already exist"
  }
}
```

## 数据结构


### <a id="CheckPermissionNamespaceExistsRespDto"></a> CheckPermissionNamespaceExistsRespDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| isValid | boolean | 是 | 校验权限空间名称或者权限空间名称 Code 是否有效   |  ` false` |
| message | string | 否 | 权限空间名称或权限空间 Code 校验失败提示信息,如果校验成功, Message 不返回   |  ` permission namespace code already exist` |


