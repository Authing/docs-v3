# 撤销 Token

<LastUpdated />

此文档介绍如何撤销 `access_token` 和 `refresh_token`。

:::hint-danger
注意：如果你使用在本地校验 `access_token` 和 `refresh_token` 的方式，在撤回 `access_token` 和 `refresh_token` 时，务必在本地清除 `access_token` 和 `refresh_token` 的缓存，否则本地校验的结果将还是有效的。详情请见[校验 access_token](./introspect-token.md)。
:::

## 撤销 Token

此接口用于撤销已经签发的 `access_token` 和 `refresh_token`。

## 请求参数

| 名称 | 类型   | <div style="width:80px">是否必填</div> | 默认值 | <div style="width:300px">描述</div>                          | <div style="width:200px"></div>示例值</div> |
| ---- | ------ | -------------------------------------- | ------ | ------------------------------------------------------------ | ------------------------------------------- |
| code | string | 是                                     | -      | 获取到的一次性授权码，一个 code 仅限一次性使用，用后作废。有效期为 10 分钟。 | `some-randon-string`                        |

## 示例代码

```csharp
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
            var res2 = await authenticationClient.RevokeToken(res.AccessToken);
        }
    }
}

```


## 请求响应

类型： `IntrospectTokenResult`

| 名称    | 类型 | <div style="width:80px">是否必含</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ------- | ---- | -------------------------------------- | ----------------------------------- | ------------------------------------- |
| Success | bool | 是                                     | 是否撤回成功                        | `true`                                |


示例结果：

```json
true
```
