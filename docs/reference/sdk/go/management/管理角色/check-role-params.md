# 校验角色 Code 或者名称是否可用

<!--
  警告⚠️：
  不要直接修改该文档，
  https://github.com/Authing/authing-docs-factory
  使用该项目进行生成
-->

<LastUpdated />

> 此文档根据 https://github.com/authing/authing-docs-factory 基于 https://api-explorer.authing.cn V3 API 自动生成，和 API 参数、返回结果保持一致，如此文档描述有误，请以 V3 API 为准。

通过用户池 ID、权限空间 Code和角色 Code,或者用户池 ID、权限空间名称和角色名称查询是否可用。

## 方法名称

`ManagementClient.CheckParamsNamespace`

## 请求参数

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:60px">默认值</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- | ---- | ---- | ---- | ---- | ---- |
| code | string | 是 | - | 权限分组（权限空间）内角色的唯一标识符  | `exampleCode` |
| namespace | string | 是 | - | 所属权限分组(权限空间)的 Code  | `default` |
| name | string | 否 | - | 权限分组（权限空间）内角色名称  | `示例角色名称` |




## 请求响应

类型： `RoleCheckParamsRespDto`

| 名称 | 类型 | 描述 |
| ---- | ---- | ---- |
| statusCode | number | 业务状态码，可以通过此状态码判断操作是否成功，200 表示成功。 |
| message | string | 描述信息 |
| apiCode | number | 细分错误码，可通过此错误码得到具体的错误类型。 |
| data | <a href="#CheckRoleParamsRespDto">CheckRoleParamsRespDto</a> | 响应数据 |



示例结果：

```json
{
  "statusCode": 200,
  "message": "操作成功",
  "apiCode": 20001,
  "data": {
    "isValid": " false",
    "message": " namespace name already exist"
  }
}
```

## 数据结构


### <a id="CheckRoleParamsRespDto"></a> CheckRoleParamsRespDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| isValid | boolean | 是 | 权限空间名称或者权限空间 Code 校验是否有效   |  ` false` |
| message | boolean | 是 | 权限空间名称或权限空间 Code 校验失败提示信息,如果校验成功, Message 不返回   |  ` namespace name already exist` |


