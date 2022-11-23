# 发起修改邮箱的验证请求

<!--
  警告⚠️：
  不要直接修改该文档，
  https://github.com/Authing/authing-docs-factory
  使用该项目进行生成
-->

<LastUpdated />

终端用户自主修改邮箱时，需要提供相应的验证手段。此接口用于验证用户的修改邮箱请求是否合法。当前支持通过**邮箱验证码**的方式进行验证，你需要先调用发送邮件接口发送对应的邮件验证码。

## 方法名称

`ManagementClient.VerifyUpdateEmailRequest`

## 请求参数

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:60px">默认值</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- | ---- | ---- | ---- | ---- | ---- |
| emailPassCodePayload | <a href="#UpdateEmailByEmailPassCodeDto">UpdateEmailByEmailPassCodeDto</a> | 是 | - | 使用邮箱验证码方式验证的数据  |  |
| verifyMethod | string | 是 | - | 修改当前邮箱使用的验证手段：<br>- `EMAIL_PASSCODE`: 通过邮箱验证码进行验证，当前只支持这种验证方式。<br>      | `EMAIL_PASSCODE` |




## 示例代码

```csharp
using System.Threading.Tasks;
using Authing.CSharp.SDK.Models;
using Authing.CSharp.SDK.Models.Authentication;
using Authing.CSharp.SDK.Services;

namespace ConsoleApplication
{
    public class Program
    {
        static void Main(string[] args)
        {
            MainAsync().GetAwaiter().GetResult();
        }

        private static async Task MainAsync()
        {
            // 设置初始化参数
            AuthenticationClientInitOptions clientOptions = new AuthenticationClientInitOptions
            {
                AppId = "AUTHING_APP_ID",// Authing 应用 ID
                AppSecret = "AUTHING_APP_SECRET",// Authing 应用密钥
                AppHost = "AUTHING_APP_DOMAIN", // Authing 应用域名，如 https://example.authing.cn
                RedirectUri = "AUTHING_APP_REDIRECT_URI",// Authing 应用配置的登录回调地址
            };

            // 初始化 AuthenticationClient
            AuthenticationClient authenticationClient = new AuthenticationClient(clientOptions);

            //登录临时用户
            LoginTokenRespDto loginTokenRespDto = await authenticationClient.SignInByAccountPassword("AUTHING_USERNAME", "AUTHING_USER_PASSWORD");
            authenticationClient.setAccessToken(loginTokenRespDto.Data.Access_token);

            var res0 = await authenticationClient.SendEmail(new SendEmailDto()
            {
                Channel = SendEmailDto.channel.CHANNEL_UPDATE_EMAIL,
                Email = "AUTHING_OLD_EMAIL"
            });
            var res1 = await authenticationClient.SendEmail(new SendEmailDto()
            {
                Channel = SendEmailDto.channel.CHANNEL_UPDATE_EMAIL,
                Email = "AUTHING_NEW_EMAIL"
            });
            var res2 = await authenticationClient.VerifyUpdateEmailRequest(new VerifyUpdateEmailRequestDto()
            {
                EmailPasscodePayload = new UpdateEmailByEmailPassCodeDto()
                {
                    NewEmail = "AUTHING_NEW_EMAIL",
                    NewEmailPassCode = "AUTHING_NEW_CODE",
                    OldEmail = "AUTHING_OLD_EMAIL",
                    OldEmailPassCode = "AUTHING_OLD_CODE"
                },
                VerifyMethod = VerifyUpdateEmailRequestDto.verifyMethod.EMAIL_PASSCODE
            });
        }
    }
}
```




## 请求响应

类型： `VerifyUpdateEmailRequestRespDto`

| 名称 | 类型 | 描述 |
| ---- | ---- | ---- |
| statusCode | number | 业务状态码，可以通过此状态码判断操作是否成功，200 表示成功。 |
| message | string | 描述信息 |
| apiCode | number | 细分错误码，可通过此错误码得到具体的错误类型。 |
| requestId | string | 请求 ID。当请求失败时会返回。 |
| data | <a href="#VerifyUpdateEmailRequestData">VerifyUpdateEmailRequestData</a> | 响应数据 |



示例结果：

```json
{
  "statusCode": 200,
  "message": "操作成功",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "tokenExpiresIn": 60
  }
}
```

## 数据结构


### <a id="UpdateEmailByEmailPassCodeDto"></a> UpdateEmailByEmailPassCodeDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| newEmail | string | 是 | 新邮箱   |  `new@example.com` |
| newEmailPassCode | string | 是 | 新邮箱验证码   |  `123456` |
| oldEmail | string | 否 | 旧邮箱，如果用户池开启了修改邮箱需要验证之前的邮箱，此参数必填。   |  `old@example.com` |
| oldEmailPassCode | string | 否 | 旧邮箱验证码，如果用户池开启了修改邮箱需要验证之前的邮箱，此参数必填。   |  `123456` |


### <a id="VerifyUpdateEmailRequestData"></a> VerifyUpdateEmailRequestData

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| updateEmailToken | string | 是 | 用于修改当前邮箱的 token，你需要使用此 token 调用**修改邮箱**接口。   |  |
| tokenExpiresIn | number | 是 | Token 有效时间，时间为 60 秒。   |  `60` |


