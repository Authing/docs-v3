# 获取数据策略授权的主体列表

<!--
  警告⚠️：
  不要直接修改该文档，
  https://github.com/Authing/authing-docs-factory
  使用该项目进行生成
-->

<LastUpdated />

> 此文档根据 https://github.com/authing/authing-docs-factory 基于 https://api-explorer.authing.cn V3 API 自动生成，和 API 参数、返回结果保持一致，如此文档描述有误，请以 V3 API 为准。

获取数据策略授权的主体列表，通过授权主体类型、数据策略 ID 和数据资源 ID 查找授权主体列表。

## 方法名称

`ManagementClient.list_data_policy_targets`

## 请求参数

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:60px">默认值</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- | ---- | ---- | ---- | ---- | ---- |
 | policyId | string  | 是 | - | 数据策略 ID  | `60b49xxxxxxxxxxxxxxx6e68` |
 | page | number  | 否 | 1 | 当前页数，从 1 开始  | `1` |
 | limit | number  | 否 | 10 | 每页数目，最大不能超过 50，默认为 10  | `10` |
 | query | string  | 否 | - | 主体名称  | `示例1` |
 | targetType | string[]  | 否 | - | 主体类型,包括 USER、GROUP、ROLE、ORG 四种类型  | `[0]` |




## 请求响应

类型： `ListDataPolicySubjectPaginatedRespDto`

| 名称 | 类型 | 描述 |
| ---- | ---- | ---- |
| statusCode | number | 业务状态码，可以通过此状态码判断操作是否成功，200 表示成功。 |
| message | string | 描述信息 |
| apiCode | number | 细分错误码，可通过此错误码得到具体的错误类型（成功请求不返回）。详细错误码列表请见：[API Code 列表](https://api-explorer.authing.cn/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId | string | 请求 ID。当请求失败时会返回。 |
| data | <a href="#ListDataPolicySubjectPageDto">ListDataPolicySubjectPageDto</a> | 响应数据 |



示例结果：

```json
{
  "statusCode": 200,
  "message": "操作成功",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "totalCount": 20,
    "list": {
      "targetIdentifier": "6301cexxxxxxxxxxxxxxxxx78",
      "targetName": "test",
      "authorizationTime": "2022-07-03T03:20:30.000Z"
    }
  }
}
```

## 数据结构


### <a id="ListDataPolicySubjectPageDto"></a> ListDataPolicySubjectPageDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| totalCount | number | 否 | 记录总数   |  `20` |
| list | array | 是 | 响应数据 嵌套类型：<a href="#DataSubjectRespDto">DataSubjectRespDto</a>。  |  |


### <a id="DataSubjectRespDto"></a> DataSubjectRespDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| targetIdentifier | string | 是 | 主体 ID ，包含用户 ID、用户组 ID、角色 ID、组织机构 ID   |  `6301cexxxxxxxxxxxxxxxxx78` |
| targetType | string | 是 | 主体类型,包括 USER、GROUP、ROLE、ORG 四种类型   | USER |
| targetName | string | 是 | 主体名称，包含用户名称、用户组名称、角色名称、组织机构名称   |  `test` |
| authorizationTime | string | 是 | 主体对象被授权时间   |  `2022-07-03T03:20:30.000Z` |


