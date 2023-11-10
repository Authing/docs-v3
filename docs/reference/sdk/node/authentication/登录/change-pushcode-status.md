# 推送登录：APP 端修改推送码状态

<!--
  警告⚠️：
  不要直接修改该文档，
  https://github.com/Authing/authing-docs-factory
  使用该项目进行生成
-->

<LastUpdated />

> 此文档根据 https://github.com/authing/authing-docs-factory 基于 https://api-explorer.authing.cn V3 API 自动生成，和 API 参数、返回结果保持一致，如此文档描述有误，请以 V3 API 为准。


此端点用于在 Authing 令牌 APP 推送登录中修改推送码状态，对应着在浏览器使用推送登录，点击登录之后，终端用户收到推送登录信息，确认授权、取消授权的过程。**此接口要求具备用户的登录态**。

## 方法名称

`AuthenticationClient.changePushCodeStatus`

## 请求参数

| 名称 | 类型 | <div style="width:80px">是否必填</div> | 默认值 | <div style="width:300px">描述</div> | <div style="width:200px"></div>示例值</div> |
| ---- | ---- | ---- | ---- | ---- | ---- |
| action | string | 是 | - | 修改推送码状态的动作:<br>- `CONFIRM`: 修改推送码状态为已授权；<br>- `CANCEL`: 修改推送码状态为已取消；<br>      | `CONFIRM` |
| pushCodeId | string | 是 | - | 推送码（推送登录唯一 ID）  |  |




## 请求响应

类型： `CommonResponseDto`

| 名称 | 类型 | 描述 |
| ---- | ---- | ---- |
| statusCode | number | 业务状态码，可以通过此状态码判断操作是否成功，200 表示成功。 |
| message | string | 描述信息 |
| apiCode | number | 细分错误码，可通过此错误码得到具体的错误类型。详情可以查看开发准备中的 apiCode 细分说明 |
| requestId | string | 请求 ID。当请求失败时会返回。 |



示例结果：

```json
{
  "statusCode": 200,
  "message": "操作成功",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c"
}
```

## 数据结构


