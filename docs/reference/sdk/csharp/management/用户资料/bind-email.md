# 绑定邮箱

<!--
  警告⚠️：
  不要直接修改该文档，
  https://github.com/Authing/authing-docs-factory
  使用该项目进行生成
-->

<LastUpdated />

如果用户还**没有绑定邮箱**，此接口可用于用户**自主**绑定邮箱。如果用户已经绑定邮箱想要修改邮箱，请使用**修改邮箱**接口。你需要先调用**发送邮件**接口发送邮箱验证码。

## 方法名称

`ManagementClient.BindEmail`

## 请求参数

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:60px">默认值</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- | ---- | ---- | ---- | ---- | ---- |
| passCode | string | 是 | - | 邮箱验证码，一个邮箱验证码只能使用一次，且有一定有效时间。  | `123456` |
| email | string | 是 | - | 邮箱，不区分大小写。  | `test@example.com` |




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

            var res1 = await authenticationClient.SendEmail(new SendEmailDto()
            {
                Email = "AUTHING_EMAIL",
                Channel = SendEmailDto.channel.CHANNEL_BIND_EMAIL
            });
            var res2 = await authenticationClient.BindEmail(new BindEmailDto()
            {
                Email = "AUTHING_EMAIL",
                PassCode = "AUTHING_CODE",
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


