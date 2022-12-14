# 生成登录地址

<LastUpdated />

此方法用于生成一次性的登录地址。使用 SDK 生成登录地址之后，开发者可以引导用户跳转到此地址进行登录。如果你需要使用你需要自建登录页面，请参考其他登录方法的文档。

!!!include(reference/sdk/common/hosted_page_signin.md)!!!

## 方法名称

```csharp
AuthenticationClient.BuildAuthUrl
```

## 请求参数

| 名称 | 类型 | <div style="width:80px">是否必填</div> | 默认值 | <div style="width:300px">描述</div> | <div style="width:200px"></div>示例值</div> |
| ---- | ---- | ---- | ---- | ---- | ---- |
| RedirectUri | string | 否 | 默认取初始化时传入的 RedirectUri | 回调链接，用户在 Authing 认证成功后，Authing 会将授权码以 URL query 的形式发送到这个地址。这个值必须出现在控制台配置的回调地址中，否则 Authing 不允许向该地址回调。 | `https://you_domain.com/callback` |
| State | string | 否 | 随机字符串 | 一个随机字符串，用于防范 CSRF 攻击，如果 response 中的 state 值和发送请求之前设置的 state 值不同，说明受到攻击。 | `some-randon-string` |
| Nonce | string | 否 | 随机字符串 | 个随机字符串，用于防范 Replay 攻击，implicit 模式下必填。 | `some-randon-string` |
| Scope | string | 否 | `openid profile` | 需要请求的权限，必须包含 openid。如果需要获取手机号和 email 需要包含 phone email；如果需要 refresh_token 需要包含 offline_access。多个 scope 请用空格分隔。id_token 解码后的内容中会包含这些 scope 对应的用户信息相关的字段。<br>- `openid`: 必须包含。<br>- `profile`: 返回 birthdate，family_name，gender，given_name，locale，middle_name，name，nickname，picture，preferred_username，profile，updated_at，website，zoneinfo 字段。<br>- `username`: 返回 username。<br>- `email`: 返回 email，email_verified。<br>- `phone`: 返回 phone_number, phone_number_verified。<br>- `offline_access`: 如果存在此参数，token 接口会返回 refresh_token 字段。<br>- `roles`: 返回用户的角色列表。<br>- `external_id`: 用户在原有系统的用户 ID。<br>- `extended_fields`: 返回用户的扩展字段信息，内容为一个对象，key 为扩展字段名，value 为扩展字段值。<br>- `tenant_id`: 返回用户的租户 ID。<br> | `openid profile` |
| Forced | string | 否 | `false` | 不管用户是否已经登录，强制要求用户需要再进行一次登录。 | `false` |

## 示例代码

```csharp
using System.Threading.Tasks;
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
                AppSecret = "AUTHING_SECRET",// Authing 应用密钥
                AppHost = "AUTHING_DOMAIN", // Authing 应用域名，如 https://example.authing.cn
                RedirectUri = "AUTHING_REDIRECTURI",// Authing 应用配置的登录回调地址n
            };

            // 初始化 AuthenticationClient
            AuthenticationClient authenticationClient = new AuthenticationClient(clientOptions);

            AuthUrlResult authRulResult = authenticationClient.BuildAuthUrl(scope: "offline_access openid profile");
        }
    }
}

```

## 请求响应

类型： `AuthUrlResult`

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| Url | string | 是 | 一次性的登录地址   |  `https://example.authing.cn/oidc/auth?redirect_uri=xxx&scope=xxx&client_id=xxx` |
| State | string | 是 | 随机字符串 | 一个随机字符串，用于防范 CSRF 攻击，如果 response 中的 state 值和发送请求之前设置的 state 值不同，说明受到攻击。 | `some-randon-string` |
| Nonce | string | 是 | 随机字符串 | 个随机字符串，用于防范 Replay 攻击，implicit 模式下必填。 | `some-randon-string` |

示例结果：

```json
{
  "Url": "https://example.authing.cn/oidc/auth?redirect_uri=xxx&scope=xxx&client_id=xxx",
  "State": "some-randon-string",
  "Nonce": "some-randon-string"
}
```
