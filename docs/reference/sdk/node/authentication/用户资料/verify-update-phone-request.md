# 发起修改手机号的验证请求

<!--
  警告⚠️：
  不要直接修改该文档，
  https://github.com/Authing/authing-docs-factory
  使用该项目进行生成
-->

<LastUpdated />

> 此文档根据 https://github.com/authing/authing-docs-factory 基于 https://api-explorer.authing.cn V3 API 自动生成，和 API 参数、返回结果保持一致，如此文档描述有误，请以 V3 API 为准。


终端用户自主修改手机号时，需要提供相应的验证手段。此接口用于验证用户的修改手机号请求是否合法。当前支持通过**短信验证码**的方式进行验证，你需要先调用发送短信接口发送对应的短信验证码。

## 方法名称

`AuthenticationClient.verifyUpdatePhoneRequest`

## 请求参数

| 名称 | 类型 | <div style="width:80px">是否必填</div> | 默认值 | <div style="width:300px">描述</div> | <div style="width:200px"></div>示例值</div> |
| ---- | ---- | ---- | ---- | ---- | ---- |
| phonePassCodePayload | <a href="#UpdatePhoneByPhonePassCodeDto">UpdatePhoneByPhonePassCodeDto</a> | 是 | - | 使用手机号验证码方式验证的数据  |  |
| verifyMethod | string | 是 | - | 修改手机号的验证方式：<br>- `PHONE_PASSCODE`: 使用短信验证码的方式进行验证，当前仅支持这一种方式。<br>      |  |




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

  // 请先调用登录接口获取 access_token，并调用 setAccessToken 方法设置 access_token
  authenticationClient.setAccessToken("REPLACE_ME_WITH_REAL_ACCESS_TOKEN");

  const result = await authenticationClient.verifyUpdatePhoneRequest({
    verifyMethod:
      Models.VerifyUpdatePhoneRequestDto.verifyMethod.PHONE_PASSCODE,
    phonePassCodePayload: {
      newPhoneNumber: '188xxxx9999',
      newPhonePassCode: '123456',
      newPhoneCountryCode: '+86',
      oldPhoneNumber: '188xxxx8888',
      oldPhonePassCode: '123456',
      oldPhoneCountryCode: '+86'
    }
  });


  console.log(JSON.stringify(result, null, 2));
})();

```




## 请求响应

类型： `VerifyUpdatePhoneRequestRespDto`

| 名称 | 类型 | 描述 |
| ---- | ---- | ---- |
| statusCode | number | 业务状态码，可以通过此状态码判断操作是否成功，200 表示成功。 |
| message | string | 描述信息 |
| apiCode | number | 细分错误码，可通过此错误码得到具体的错误类型。详情可以查看开发准备中的 apiCode 细分说明 |
| requestId | string | 请求 ID。当请求失败时会返回。 |
| data | <a href="#VerifyUpdatePhoneRequestData">VerifyUpdatePhoneRequestData</a> | 响应数据 |



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


### <a id="UpdatePhoneByPhonePassCodeDto"></a> UpdatePhoneByPhonePassCodeDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| newPhoneNumber | string | 是 | 新手机号码，不带区号。如果是国外手机号，请在 newPhoneCountryCode 参数中指定区号。   |  `188xxxx8888` |
| newPhonePassCode | string | 是 | 验证码   |  `123456` |
| newPhoneCountryCode | string | 否 | 手机区号，中国大陆手机号可不填。Authing 短信服务暂不内置支持国际手机号，你需要在 Authing 控制台配置对应的国际短信服务。完整的手机区号列表可参阅 https://en.wikipedia.org/wiki/List_of_country_calling_codes。   |  `+86` |
| oldPhoneNumber | string | 否 | 旧手机号码，不带区号。如果是国外手机号，请在 oldPhoneCountryCode 参数中指定区号。如果用户池开启了修改手机号需要验证之前的手机号，此参数必填。   |  `188xxxx8888` |
| oldPhonePassCode | string | 否 | 旧手机号的验证码，如果用户池开启了修改手机号需要验证之前的手机号，此参数必填   |  `123456` |
| oldPhoneCountryCode | string | 否 | 手机区号，中国大陆手机号可不填。Authing 短信服务暂不内置支持国际手机号，你需要在 Authing 控制台配置对应的国际短信服务。完整的手机区号列表可参阅 https://en.wikipedia.org/wiki/List_of_country_calling_codes。   |  `+86` |


### <a id="VerifyUpdatePhoneRequestData"></a> VerifyUpdatePhoneRequestData

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| updatePhoneToken | string | 是 | 用于修改当前手机号 token，你需要使用此 token 请求**修改手机号**的接口。   |  |
| tokenExpiresIn | number | 是 | 过期时间   |  |


