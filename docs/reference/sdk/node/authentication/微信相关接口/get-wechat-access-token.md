# 获取微信小程序、公众号 Access Token

<!--
  警告⚠️：
  不要直接修改该文档，
  https://github.com/Authing/authing-docs-factory
  使用该项目进行生成
-->

<LastUpdated />

> 此文档根据 https://github.com/authing/authing-docs-factory 基于 https://api-explorer.authing.cn V3 API 自动生成，和 API 参数、返回结果保持一致，如此文档描述有误，请以 V3 API 为准。


获取 Authing 服务器缓存的微信小程序、公众号 Access Token（废弃，请使用 /api/v3/get-wechat-access-token-info）

## 方法名称

`AuthenticationClient.getWechatMpAccessToken`

## 请求参数

| 名称 | 类型 | <div style="width:80px">是否必填</div> | 默认值 | <div style="width:300px">描述</div> | <div style="width:200px"></div>示例值</div> |
| ---- | ---- | ---- | ---- | ---- | ---- |
| appSecret | string | 是 | - | 微信小程序或微信公众号的 AppSecret  |  |
| appId | string | 是 | - | 微信小程序或微信公众号的 AppId  |  |




## 示例代码

```ts
import { AuthenticationClient, Models } from 'authing-node-sdk';

const authenticationClient = new AuthenticationClient({
  // 需要替换成你的 Authing AppId、 Secret 和 Host
  appId: 'AUTHING_APP_ID',
  appSecret: 'AUTHING_APP_SECRET',
  appHost: 'AUTHING_APP_HOST'
});

(async () => {

  const result = await authenticationClient.getWechatMpAccessToken({
    appId: 'xxxx',
    appSecret: 'xxxx'
  });


  console.log(JSON.stringify(result, null, 2));
})();

```




## 请求响应

类型： `GetWechatAccessTokenRespDto`

| 名称 | 类型 | 描述 |
| ---- | ---- | ---- |
| statusCode | number | 业务状态码，可以通过此状态码判断操作是否成功，200 表示成功。 |
| message | string | 描述信息 |
| apiCode | number | 细分错误码，可通过此错误码得到具体的错误类型（成功请求不返回）。详细错误码列表请见：[API Code 列表](https://api-explorer.authing.cn/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId | string | 请求 ID。当请求失败时会返回。 |
| data | <a href="#GetWechatAccessTokenDataDto">GetWechatAccessTokenDataDto</a> | 响应数据 |



示例结果：

```json
{
  "statusCode": 200,
  "message": "操作成功",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {}
}
```

## 数据结构


### <a id="GetWechatAccessTokenDataDto"></a> GetWechatAccessTokenDataDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| accessToken | string | 是 | Authing 服务器缓存的微信 Access Token   |  |
| expiresAt | string | 是 | Access Token 到期时间，为单位为秒的时间戳   |  |


