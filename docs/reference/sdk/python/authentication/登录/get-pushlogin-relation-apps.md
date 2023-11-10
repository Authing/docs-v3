# 获取推送登录请求关联的客户端应用

<!--
  警告⚠️：
  不要直接修改该文档，
  https://github.com/Authing/authing-docs-factory
  使用该项目进行生成
-->

<LastUpdated />

> 此文档根据 https://github.com/authing/authing-docs-factory 基于 https://api-explorer.authing.cn V3 API 自动生成，和 API 参数、返回结果保持一致，如此文档描述有误，请以 V3 API 为准。


此端点用于在 Authing 令牌 APP 收到推送登录通知时，可检查当前用户登录的应用是否支持对推送登录请求进行授权。

## 方法名称

`AuthenticationClient.get_push_login_relation_apps`

## 请求参数

| 名称 | 类型 | <div style="width:80px">是否必填</div> | 默认值 | <div style="width:300px">描述</div> | <div style="width:200px"></div>示例值</div> |
| ---- | ---- | ---- | ---- | ---- | ---- |
| appId | string | 是 | - | 发起推送登录的应用 ID  |  |
| pushCodeId | string | 是 | - | 推送码（推送登录唯一 ID）  |  |




## 请求响应

类型： `GetPushCodeRelationAppsRespDto`

| 名称 | 类型 | 描述 |
| ---- | ---- | ---- |
| statusCode | number | 业务状态码，可以通过此状态码判断操作是否成功，200 表示成功。 |
| message | string | 描述信息 |
| apiCode | number | 细分错误码，可通过此错误码得到具体的错误类型。详情可以查看开发准备中的 apiCode 细分说明 |
| requestId | string | 请求 ID。当请求失败时会返回。 |
| data | <a href="#GetPushCodeRelationAppsDataDto">GetPushCodeRelationAppsDataDto</a> | 响应数据 |



示例结果：

```json
{
  "statusCode": 200,
  "message": "操作成功",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "appIds": "[\"xxxxxxxxxx\"]"
  }
}
```

## 数据结构


### <a id="GetPushCodeRelationAppsDataDto"></a> GetPushCodeRelationAppsDataDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| appIds | array | 否 | 发起推送登录的应用关联的客户端应用数据   |  `["xxxxxxxxxx"]` |


