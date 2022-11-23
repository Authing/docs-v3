# 创建权限空间

<!--
  警告⚠️：
  不要直接修改该文档，
  https://github.com/Authing/authing-docs-factory
  使用该项目进行生成
-->

<LastUpdated />

创建权限空间,可以设置权限空间名称、Code 和描述信息。

## 方法名称

`ManagementClient.CreatePermissionNamespace`

## 请求参数

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:60px">默认值</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- | ---- | ---- | ---- | ---- | ---- |
| name | string | 是 | - | 权限空间名称  | `示例权限空间` |
| code | string | 是 | - | 权限空间 Code  | `examplePermissionNamespace` |
| description | string | 否 | - | 权限空间描述  | `示例权限空间描述` |




## 请求响应

类型： `CreatePermissionNamespaceResponseDto`

| 名称 | 类型 | 描述 |
| ---- | ---- | ---- |
| statusCode | number | 业务状态码，可以通过此状态码判断操作是否成功，200 表示成功。 |
| message | string | 描述信息 |
| apiCode | number | 细分错误码，可通过此错误码得到具体的错误类型。 |
| requestId | string | 请求 ID。当请求失败时会返回。 |
| data | <a href="#CreatePermissionNamespaceRespDto">CreatePermissionNamespaceRespDto</a> | 响应数据 |



示例结果：

```json
{
  "statusCode": 200,
  "message": "操作成功",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "code": "examplePermissionNamespace",
    "name": "示例权限空间",
    "description": "示例权限空间描述"
  }
}
```

## 数据结构


### <a id="CreatePermissionNamespaceRespDto"></a> CreatePermissionNamespaceRespDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| code | string | 是 | 权限空间唯一标志符   |  `examplePermissionNamespace` |
| name | string | 是 | 权限空间名称   |  `示例权限空间` |
| description | string | 否 | 权限空间描述信息   |  `示例权限空间描述` |


