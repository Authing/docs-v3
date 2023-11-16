# 获取 Token

<LastUpdated />

此文档介绍如何基于 OIDC 标准的方式获取 `access_token`、`id_token` 和 `refresh_token`，以及这几种「token」的含义以及使用场景。如果你需要使用你需要自建登录页面，请参考登录部分的文档。


<details>
<summary>1. 什么是「基于 OIDC 标准协议的方式」？</summary>

!!!include(reference/sdk/common/hosted_page_signin.md)!!!

</details>

<br>


<details>
<summary>2. 点击展开 access_token、id_token 和 refresh_token 的详细介绍</summary>

!!!include(reference/sdk/common/token_desc.md)!!!

</details>

<br>

<details>
<summary>3. Authing 签发的 token 遵循 OIDC 标准协议的规范，根据具体使用场景的不同，你需要先选择合适的授权模式，不同的授权模式，获取 token 的方法也不一样。点此展开详情。</summary>

!!!include(reference/sdk/common/grant_type_desc.md)!!!

</details>

## 使用 code 换取 token

:::hint-info
注意：`refresh_token` 只有在发起 OIDC 登录请求时，在 `scope` 中添加 `offline_access` 才会返回。详情请见[构建登录地址](../登录/build-authorize-url.md)。
:::

### 请求参数

| 名称 | 类型 | <div style="width:80px">是否必填</div> | 默认值 | <div style="width:300px">描述</div> | <div style="width:200px"></div>示例值</div> |
| ---- | ---- | ---- | ---- | ---- | ---- |
| code | string | 是 | - | 获取到的一次性授权码，一个 code 仅限一次性使用，用后作废。有效期为 10 分钟。 | `some-randon-string` |

### 示例代码

```c#
using System.Threading.Tasks;
using Authing.CSharp.SDK.Models.Authentication;
using Authing.CSharp.SDK.Services;

namespace ConsoleApplication
{
    public class Program
    {
        private static readonly string code = "AUTHING_CODE";//这里填入 认证成功后 URL 回调地址中的 code 参数值
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
                RedirectUri = "AUTHING_REDIRECTURI",// Authing 应用配置的登录回调地址
                Host = "AUTHING_HOST"// Authing 主机的域名地址，如 https://core.authing.cn
            };

            // 初始化 AuthenticationClient
            AuthenticationClient authenticationClient = new AuthenticationClient(clientOptions);

            var res = await authenticationClient.GetLoginStateByAuthCode(code, clientOptions.RedirectUri);
        }
    }
}
```

## 使用 refresh_toke 换取新的 token

:::hint-info
注意：`refresh_token` 只有在发起 OIDC 登录请求时，在 `scope` 中添加 `offline_access` 才会返回。
:::

当 `access_token` 过期时，可以使用 `refresh_token` 换取新的 `access_token`，从而在保证安全性的前提下，实现长期保持用户登录态无需用户再次登录的功能。

### 请求参数

| 名称 | 类型 | <div style="width:80px">是否必填</div> | 默认值 | <div style="width:300px">描述</div> | <div style="width:200px"></div>示例值</div> |
| ---- | ---- | ---- | ---- | ---- | ---- |
| refresh_token | string | 是 | - | 获取 token 时返回的 `refresh_token`。 | `some-randon-string` |

### 示例代码

```c#
using System.Threading.Tasks;
using Authing.CSharp.SDK.Models.Authentication;
using Authing.CSharp.SDK.Services;

namespace ConsoleApplication
{
    public class Program
    {
        private static readonly string code = "AUTHING_CODE";//这里填入 认证成功后 URL 回调地址中的 code 参数值
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
                RedirectUri = "AUTHING_REDIRECTURI",// Authing 应用配置的登录回调地址
                Host = "AUTHING_HOST"// Authing 主机的域名地址，如 https://core.authing.cn
            };

            // 初始化 AuthenticationClient
            AuthenticationClient authenticationClient = new AuthenticationClient(clientOptions);

            var res1 = await authenticationClient.GetLoginStateByAuthCode(code, clientOptions.RedirectUri);
            var res2 = await authenticationClient.RefreshLoginState(res1.RefreshToken);
        }
    }
}
```

## 请求响应

类型： `LoginState`

!!!include(reference/sdk/common/token_response_table.md)!!!


示例结果：

!!!include(reference/sdk/common/token_response_json.md)!!!

