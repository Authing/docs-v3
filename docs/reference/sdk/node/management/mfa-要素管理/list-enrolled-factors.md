# 获取绑定的所有 MFA 认证要素

<!--
  警告⚠️：
  不要直接修改该文档，
  https://github.com/Authing/authing-docs-factory
  使用该项目进行生成
-->

<LastUpdated />

Authing 目前支持四种类型的 MFA 认证要素：手机短信、邮件验证码、OTP、人脸。如果用户绑定了手机号 / 邮箱之后，默认就具备了手机短信、邮箱验证码的 MFA 认证要素。

## 方法名称

`ManagementClient.listEnrolledFactors`

## 请求参数

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:60px">默认值</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- | ---- | ---- | ---- | ---- | ---- |




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

  const result = await authenticationClient.listEnrolledFactors();


  console.log(JSON.stringify(result, null, 2));
})();

```




## 请求响应

类型： `ListEnrolledFactorsRespDto`

| 名称 | 类型 | 描述 |
| ---- | ---- | ---- |
| statusCode | number | 业务状态码，可以通过此状态码判断操作是否成功，200 表示成功。 |
| message | string | 描述信息 |
| apiCode | number | 细分错误码，可通过此错误码得到具体的错误类型。 |
| requestId | string | 请求 ID。当请求失败时会返回。 |
| data | array | MFA Factor 列表 |



示例结果：

```json
{
  "statusCode": 200,
  "message": "操作成功",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "factorId": "6229ffaxxxxxxxxcade3e3d9",
    "factorType": "SMS",
    "profile": {
      "phoneNumber": "188xxxx8888",
      "phoneCountryCode": "+86"
    }
  }
}
```

## 数据结构


### <a id="FactorDto"></a> FactorDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| factorId | string | 是 | MFA 认证要素ID   |  `6229ffaxxxxxxxxcade3e3d9` |
| factorType | string | 是 | MFA 认证要素类型   | OTP |
| profile | object | 是 | MFA 认证要素信息   |  `{"phoneNumber":"188xxxx8888","phoneCountryCode":"+86"}` |


