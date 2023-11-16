# 发起忘记密码请求

<!--
  警告⚠️：
  不要直接修改该文档，
  https://github.com/Authing/authing-docs-factory
  使用该项目进行生成
-->

<LastUpdated />

> 此文档根据 https://github.com/authing/authing-docs-factory 基于 https://api-explorer.authing.cn V3 API 自动生成，和 API 参数、返回结果保持一致，如此文档描述有误，请以 V3 API 为准。


当用户忘记密码时，可以通过此端点找回密码。用户需要使用相关验证手段进行验证，目前支持**邮箱验证码**和**手机号验证码**两种验证手段。

## 方法名称

`AuthenticationClient.verifyResetPasswordRequest`

## 请求参数

| 名称 | 类型 | <div style="width:80px">是否必填</div> | 默认值 | <div style="width:300px">描述</div> | <div style="width:200px"></div>示例值</div> |
| ---- | ---- | ---- | ---- | ---- | ---- |
| verifyMethod | string | 是 | - | 忘记密码请求使用的验证手段：<br>- `EMAIL_PASSCODE`: 通过邮箱验证码进行验证<br>- `PHONE_PASSCODE`: 通过手机号验证码进行验证<br>      | `EMAIL_PASSCODE` |
| phonePassCodePayload | <a href="#ResetPasswordByPhonePassCodeDto">ResetPasswordByPhonePassCodeDto</a> | 否 | - | 使用手机号验证码验证的数据  |  |
| emailPassCodePayload | <a href="#ResetPasswordByEmailPassCodeDto">ResetPasswordByEmailPassCodeDto</a> | 否 | - | 使用邮箱验证码验证的数据  |  |




## 示例代码

```java
package test.authentication;

import cn.authing.sdk.java.client.AuthenticationClient;
import cn.authing.sdk.java.dto.PasswordResetVerifyResp;
import cn.authing.sdk.java.dto.ResetPasswordByEmailPassCodeDto;
import cn.authing.sdk.java.dto.VerifyResetPasswordRequestDto;
import cn.authing.sdk.java.model.AuthenticationClientOptions;
import cn.authing.sdk.java.util.JsonUtils;

public class VerifyResetPasswordRequestTest {
    // 需要替换成你的 Authing App ID
    private static final String APP_ID = "AUTHING_APP_ID";
    // 需要替换成你的 Authing App Secret
    private static final String APP_SECRET = "AUTHING_APP_SECRET";
    // 需要替换成你的 Authing App Host
    private static final String APP_HOST = "AUTHING_APP_HOST";

    public static void main(String[] args) throws Throwable {
        AuthenticationClientOptions clientOptions = new AuthenticationClientOptions();
        clientOptions.setAppId(APP_ID);
        clientOptions.setAppSecret(APP_SECRET);
        clientOptions.setAppHost(APP_HOST);

        AuthenticationClient client = new AuthenticationClient(clientOptions);

        VerifyResetPasswordRequestDto reqDto = new VerifyResetPasswordRequestDto();
        reqDto.setVerifyMethod(VerifyResetPasswordRequestDto.VerifyMethod.EMAIL_PASSCODE);
        ResetPasswordByEmailPassCodeDto passCodeDto = new ResetPasswordByEmailPassCodeDto();
        // 邮箱验证码，一个短信验证码只能使用一次，默认有效时间为 5 分钟。你需要通过发送邮件接口获取。
        passCodeDto.setPassCode("xxx");
        passCodeDto.setEmail("123@qq.com");
        reqDto.setEmailPassCodePayload(passCodeDto);
        PasswordResetVerifyResp response = client.verifyResetPasswordRequest(reqDto);
        System.out.println(JsonUtils.serialize(response));
    }
}

```




## 请求响应

类型： `PasswordResetVerifyResp`

| 名称 | 类型 | 描述 |
| ---- | ---- | ---- |
| statusCode | number | 业务状态码，可以通过此状态码判断操作是否成功，200 表示成功。 |
| message | string | 描述信息 |
| apiCode | number | 细分错误码，可通过此错误码得到具体的错误类型（成功请求不返回）。详细错误码列表请见：[API Code 列表](https://api-explorer.authing.cn/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId | string | 请求 ID。当请求失败时会返回。 |
| data | <a href="#ResetPasswordVerify">ResetPasswordVerify</a> | 响应数据 |



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


### <a id="ResetPasswordByPhonePassCodeDto"></a> ResetPasswordByPhonePassCodeDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| phoneNumber | string | 是 | 此账号绑定的手机号，不带区号。如果是国外手机号，请在 phoneCountryCode 参数中指定区号。   |  `188xxxx8888` |
| passCode | string | 是 | 短信验证码，一个短信验证码只能使用一次，有效时间为一分钟。你需要通过**发送短信**接口获取。   |  `123456` |
| phoneCountryCode | string | 否 | 手机区号，中国大陆手机号可不填。Authing 短信服务暂不内置支持国际手机号，你需要在 Authing 控制台配置对应的国际短信服务。完整的手机区号列表可参阅 https://en.wikipedia.org/wiki/List_of_country_calling_codes。   |  `+86` |


### <a id="ResetPasswordByEmailPassCodeDto"></a> ResetPasswordByEmailPassCodeDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| email | string | 否 | 此账号绑定的邮箱，不区分大小写。   |  |
| passCode | string | 是 | 邮箱验证码，一个短信验证码只能使用一次，默认有效时间为 5 分钟。你需要通过**发送邮件**接口获取。   |  |


### <a id="ResetPasswordVerify"></a> ResetPasswordVerify

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| passwordResetToken | string | 是 | 用于重置密码 token   |  |
| tokenExpiresIn | number | 是 | 过期时间，单位为秒。   |  |


