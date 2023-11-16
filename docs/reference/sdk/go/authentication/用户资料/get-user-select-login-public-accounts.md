# 查询当前登录用户可切换登录的公共账号列表

<!--
  警告⚠️：
  不要直接修改该文档，
  https://github.com/Authing/authing-docs-factory
  使用该项目进行生成
-->

<LastUpdated />

> 此文档根据 https://github.com/authing/authing-docs-factory 基于 https://api-explorer.authing.cn V3 API 自动生成，和 API 参数、返回结果保持一致，如此文档描述有误，请以 V3 API 为准。


此端点用于查询当前登录用户可切换登录的公共账号列表，如果没有可切换登录的公共账号，则返回空数组。

## 方法名称

`AuthenticationClient.ListPublicAccountsForSwitchLoggedIn`

## 请求参数

| 名称 | 类型 | <div style="width:80px">是否必填</div> | 默认值 | <div style="width:300px">描述</div> | <div style="width:200px"></div>示例值</div> |
| ---- | ---- | ---- | ---- | ---- | ---- |
 | withOriginUser | boolean  | 否 | - | 是否包含当前个人用户基本信息  |  |




## 请求响应

类型： `GetPublicAccountDataRespDto`

| 名称 | 类型 | 描述 |
| ---- | ---- | ---- |
| statusCode | number | 业务状态码，可以通过此状态码判断操作是否成功，200 表示成功。 |
| message | string | 描述信息 |
| apiCode | number | 细分错误码，可通过此错误码得到具体的错误类型（成功请求不返回）。详细错误码列表请见：[API Code 列表](https://api-explorer.authing.cn/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId | string | 请求 ID。当请求失败时会返回。 |
| data | array | 响应数据 |



示例结果：

```json
{
  "statusCode": 200,
  "message": "操作成功",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "publicAccounts": "[]",
    "originUser": {
      "userId": "623c20b2a062aaaaf41b17da"
    }
  }
}
```

## 数据结构


### <a id="GetUserSelectLoginPublicAccountsDataDto"></a> GetUserSelectLoginPublicAccountsDataDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| publicAccounts | array | 是 | 公共账号列表 嵌套类型：<a href="#ListPublicAccountDataDto">ListPublicAccountDataDto</a>。  |  `[]` |
| originUser |  | 否 | 个人账号信息 嵌套类型：<a href="#GetUserSelectLoginPublicAccountsOriginUserDto">GetUserSelectLoginPublicAccountsOriginUserDto</a>。  |  |


### <a id="ListPublicAccountDataDto"></a> ListPublicAccountDataDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| userId | string | 是 | 账号 ID   |  `623c20b2a062aaaaf41b17da` |
| avatar | string | 否 | 账号头像   |  |
| displayName | string | 否 | 显示名称   |  |
| usertype | string | 否 | 用户类型：1 个人用户，2 公共账号   | 1 |


### <a id="GetUserSelectLoginPublicAccountsOriginUserDto"></a> GetUserSelectLoginPublicAccountsOriginUserDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| userId | string | 是 | 账号 ID   |  `623c20b2a062aaaaf41b17da` |
| avatar | string | 否 | 账号头像   |  |
| displayName | string | 否 | 显示名称   |  |
| usertype | string | 否 | 用户类型：1 个人用户，2 公共账号   | 1 |


