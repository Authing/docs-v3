# 修改手机号

<!--
  警告⚠️：
  不要直接修改该文档，
  https://github.com/Authing/authing-docs-factory
  使用该项目进行生成
-->

<LastUpdated />

终端用户自主修改手机号，需要提供相应的验证手段，见[发起修改手机号的验证请求](#tag/用户资料/修改邮箱/operation/ProfileV3Controller_updatePhoneVerification)。
此参数需要提供一次性临时凭证 `updatePhoneToken`，此数据需要从**发起修改手机号的验证请求**接口获取。

## 方法名称

`ManagementClient.UpdatePhone`

## 请求参数

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:60px">默认值</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- | ---- | ---- | ---- | ---- | ---- |
| updatePhoneToken | string | 是 | - | 用于临时修改手机号的 token，可从**发起修改手机号的验证请求**接口获取。  | `xxxx` |




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

            var res0 = await authenticationClient.SendSms(new SendSMSDto()
            {
                Channel = SendSMSDto.channel.CHANNEL_UNBIND_PHONE,
                PhoneNumber = "AUTHING_NEW_PHONE"
            });
            var res1 = await authenticationClient.SendSms(new SendSMSDto()
            {
                Channel = SendSMSDto.channel.CHANNEL_UNBIND_PHONE,
                PhoneNumber = "AUTHING_OLD_PHONE"
            });
            var res2 = await authenticationClient.VerifyUpdatePhoneRequest(new VerifyUpdatePhoneRequestDto()
            {
                PhonePassCodePayload = new UpdatePhoneByPhonePassCodeDto()
                {
                    NewPhoneNumber = "AUTHING_NEW_PHONE",
                    NewPhonePassCode = "AUTHING_NEW_CODE",
                    OldPhoneNumber = "AUTHING_OLD_PHONE",
                    OldPhonePassCode = "AUTHING_OLD_CODE"
                },
                VerifyMethod = VerifyUpdatePhoneRequestDto.verifyMethod.PHONE_PASSCODE
            });
            var res3 = await authenticationClient.UpdatePhone(new UpdatePhoneDto()
            {
                UpdatePhoneToken = res2.Data.UpdatePhoneToken
            });
        }
    }
}
```




## 请求响应

类型： `CommonResponseDto`

| 名称 | 类型 | 描述 |
| ---- | ---- | ---- |
| statusCode | number | 业务状态码，可以通过此状态码判断操作是否成功，200 表示成功。 |
| message | string | 描述信息 |
| apiCode | number | 细分错误码，可通过此错误码得到具体的错误类型。 |
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


