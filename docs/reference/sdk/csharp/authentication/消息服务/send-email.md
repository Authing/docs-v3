# 发送邮件

<!--
  警告⚠️：
  不要直接修改该文档，
  https://github.com/Authing/authing-docs-factory
  使用该项目进行生成
-->

<LastUpdated />

发送邮件时必须指定邮件 Channel，每个邮箱同一 Channel 在一分钟内只能发送一次。

## 方法名称

`AuthenticationClient.SendEmail`

## 请求参数

| 名称 | 类型 | <div style="width:80px">是否必填</div> | 默认值 | <div style="width:300px">描述</div> | <div style="width:200px"></div>示例值</div> |
| ---- | ---- | ---- | ---- | ---- | ---- |
| channel | string | 是 | - | 短信通道，指定发送此短信的目的：<br>- `CHANNEL_LOGIN`: 用于用户登录<br>- `CHANNEL_REGISTER`: 用于用户注册<br>- `CHANNEL_RESET_PASSWORD`: 用于重置密码<br>- `CHANNEL_VERIFY_EMAIL_LINK`: 用于验证邮箱地址<br>- `CHANNEL_UPDATE_EMAIL`: 用于修改邮箱<br>- `CHANNEL_BIND_EMAIL`: 用于绑定邮箱<br>- `CHANNEL_UNBIND_EMAIL`: 用于解绑邮箱<br>- `CHANNEL_VERIFY_MFA`: 用于验证 MFA<br>- `CHANNEL_UNLOCK_ACCOUNT`: 用于自助解锁<br>- `CHANNEL_COMPLETE_EMAIL`: 用于注册/登录时补全邮箱信息   <br>- `CHANNEL_DELETE_ACCOUNT`: 用于注销账号<br>  | `CHANNEL_LOGIN` |
| email | string | 是 | - | 邮箱，不区分大小写  | `test@example.com` |




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
                AppHost = "AUTHING_APP_DOMAIN", // Authing 应用域名，如 https://example.authing.cn。注意：Host 地址为示例样式，不同版本用户池的应用 Host 地址形式有所差异，实际地址以 自建应用->应用配置->认证配置 下 `认证地址 `字段为准。
                RedirectUri = "AUTHING_APP_REDIRECT_URI",// Authing 应用配置的登录回调地址
            };

            // 初始化 AuthenticationClient
            AuthenticationClient authenticationClient = new AuthenticationClient(clientOptions);

            //登录临时用户
            LoginTokenRespDto loginTokenRespDto = await authenticationClient.SignInByAccountPassword("AUTHING_USERNAME", "AUTHING_USER_PASSWORD");
            authenticationClient.setAccessToken(loginTokenRespDto.Data.Access_token);
            
            var res = await authenticationClient.SendEmail(new SendEmailDto()
            {
                Email = "AUTHING_EMAIL",
                Channel = SendEmailDto.channel.CHANNEL_REGISTER
            });
        }
    }
}
```




## 请求响应

类型： `SendEmailRespDto`

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


