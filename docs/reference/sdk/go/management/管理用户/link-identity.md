# 给用户绑定一个身份信息

<!--
  警告⚠️：
  不要直接修改该文档，
  https://github.com/Authing/authing-docs-factory
  使用该项目进行生成
-->

<LastUpdated />

> 此文档根据 https://github.com/authing/authing-docs-factory 基于 https://api-explorer.authing.cn V3 API 自动生成，和 API 参数、返回结果保持一致，如此文档描述有误，请以 V3 API 为准。

用户池管理员手动将来自外部身份源的身份信息绑定到用户上。绑定完成后，可以用执行过绑定操作的身份源登录到对应的 Authing 用户。

## 方法名称

`ManagementClient.LinkIdentity`

## 请求参数

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:60px">默认值</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- | ---- | ---- | ---- | ---- | ---- |
| userIdInIdp | string | 是 | - | 必传，用户在该外部身份源的唯一标识，需要从外部身份源的认证返回值中获取。  |  |
| userId | string | 是 | - | 必传，进行绑定操作的 Authing 用户 ID。  |  |
| extIdpId | string | 是 | - | 必传，身份源 ID，用于指定该身份属于哪个身份源。  |  |
| type | string | 否 | - | 非必传，表示该条身份的具体类型，可从用户身份信息的 type 字段中获取。如果不传，默认为 generic  |  |
| isSocial | boolean | 否 | - | 已废弃，可任意传入，未来将移除该字段。  |  |




## 请求响应

类型： `LinkIdentityResDto`

| 名称 | 类型 | 描述 |
| ---- | ---- | ---- |
| statusCode | number | 业务状态码，可以通过此状态码判断操作是否成功，200 表示成功。 |
| message | string | 描述信息 |
| apiCode | number | 细分错误码，可通过此错误码得到具体的错误类型（成功请求不返回）。详细错误码列表请见：[API Code 列表](https://api-explorer.authing.cn/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId | string | 请求 ID。当请求失败时会返回。 |
| data | <a href="#LinkIdentityDataDto">LinkIdentityDataDto</a> | 数据 |



示例结果：

```json
{
  "statusCode": 200,
  "message": "操作成功",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "success": true
  }
}
```

## 数据结构


### <a id="LinkIdentityDataDto"></a> LinkIdentityDataDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| success | boolean | 是 | 是否操作成功   |  `true` |


