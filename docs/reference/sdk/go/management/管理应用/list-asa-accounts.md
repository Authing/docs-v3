# 获取 ASA 账号列表

<!--
  警告⚠️：
  不要直接修改该文档，
  https://github.com/Authing/authing-docs-factory
  使用该项目进行生成
-->

<LastUpdated />

> 此文档根据 https://github.com/authing/authing-docs-factory 基于 https://api-explorer.authing.cn V3 API 自动生成，和 API 参数、返回结果保持一致，如此文档描述有误，请以 V3 API 为准。

分页获取某一应用下的 ASA 账号列表

## 方法名称

`ManagementClient.ListAsaAccount`

## 请求参数

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:60px">默认值</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- | ---- | ---- | ---- | ---- | ---- |
 | appId | string  | 是 | - | 所属应用 ID  | `62a50xxxxxxxxxxxd15d57c7` |
 | page | number  | 否 | 1 | 当前页数，从 1 开始  | `1` |
 | limit | number  | 否 | 10 | 每页数目，最大不能超过 50，默认为 10  | `10` |




## 请求响应

类型： `AsaAccountPaginatedRespDto`

| 名称 | 类型 | 描述 |
| ---- | ---- | ---- |
| statusCode | number | 业务状态码，可以通过此状态码判断操作是否成功，200 表示成功。 |
| message | string | 描述信息 |
| apiCode | number | 细分错误码，可通过此错误码得到具体的错误类型。详情可以查看开发准备中的 apiCode 细分说明 |
| requestId | string | 请求 ID。当请求失败时会返回。 |
| data | <a href="#AsaAccountPaginatedDataDto">AsaAccountPaginatedDataDto</a> | 响应数据 |



示例结果：

```json
{
  "statusCode": 200,
  "message": "操作成功",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "list": {
      "appId": "62a50xxxxxxxxxxxd15d57c7",
      "accountId": "62b40xxxxxxxxxxxd16f57c7",
      "accountInfo": {
        "account": "account@example.com",
        "password": "123456"
      }
    },
    "totalCount": 10
  }
}
```

## 数据结构


### <a id="AsaAccountPaginatedDataDto"></a> AsaAccountPaginatedDataDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| list | array | 是 | 列表数据 嵌套类型：<a href="#AsaAccountDto">AsaAccountDto</a>。  |  |
| totalCount | number | 是 | 记录总数   |  `10` |


### <a id="AsaAccountDto"></a> AsaAccountDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| appId | string | 是 | 所属应用 ID   |  `62a50xxxxxxxxxxxd15d57c7` |
| accountId | string | 是 | 账号 ID   |  `62b40xxxxxxxxxxxd16f57c7` |
| accountInfo | object | 是 | 账号信息，一般为包含 "account", "password" key 的键值对   |  `{"account":"account@example.com","password":"123456"}` |


