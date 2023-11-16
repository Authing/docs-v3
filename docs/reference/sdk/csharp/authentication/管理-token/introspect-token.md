# 校验 Token

<LastUpdated />

此文档介绍如何验证 `access_token` 和 `refresh_token` 的合法性。有关 `access_token` 和 `refresh_token` 的介绍，请见[获取 Token](./get-access-token.md)。

Authing C# SDK 提供两种校验 Token 的方式：在线校验和本地校验。下面是两种方式的对比：

| <div style="width:80px">校验方式</div> | <div style="width:80px">优势</div>                          | <div style="width:80px">劣势</div>                                                                                                                                                                                                  |
| -------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 在线校验                               | 使用中心服务器对 Token 进行校验，确保最终结果一定是正确的。 | <br> - 会产生网络请求。 <br>- 存在单点故障风险。                                                                                                                                                                                    |
| 本地校验                               | 无需网络请求，性能更快。                                    | 如果 `access_token` 和 `refresh_token` 被手动撤销之后，应用服务器没有清除缓存的 `access_token`，本地校验任然会通过，所以应用服务器在 `access_token` 和 `refresh_token` 之后一定要清除本地缓存的 `access_token` 和 `refresh_token`。 |


## 在线校验

此接口用于在线校验 `access_token` 和 `refresh_token`。

### 请求参数

| 名称 | 类型   | <div style="width:80px">是否必填</div> | 默认值 | <div style="width:300px">描述</div>                          | <div style="width:200px"></div>示例值</div> |
| ---- | ------ | -------------------------------------- | ------ | ------------------------------------------------------------ | ------------------------------------------- |
| code | string | 是                                     | -      | 获取到的一次性授权码，一个 code 仅限一次性使用，用后作废。有效期为 10 分钟。 | `some-randon-string`                        |

### 示例代码

```C#
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
            var res2 = await authenticationClient.IntrospectToken(res.AccessToken);//校验 AccessToken 
            var res3 = await authenticationClient.ParseIDToken(res.IdToken);//校验 IdToken 
        }
    }
}
```


### 请求响应

类型： `IntrospectTokenResponse`

| 名称      | 类型   | <div style="width:80px">是否必含</div> | <div style="width:300px">描述</div>                         | <div style="width:200px">示例值</div> |
| --------- | ------ | -------------------------------------- | ----------------------------------------------------------- | ------------------------------------- |
| Active    | bool   | 是                                     | 是否有效                                                    | `true`                                |
| Sub       | string | 否                                     | 此 Token 对应的用户 ID，当 token 合法时返回。               | `xxxxxx`                              |
| ClientId  | string | 否                                     | 签发此 Token 的应用 ID，当 token 合法时返回。               | `xxxxxx`                              |
| Exp       | string | 否                                     | Token 的到期时间，为单位为秒的时间戳。当 token 合法时返回。 | `1601460494`                          |
| Iat       | string | 否                                     | Token 的签发时间，为单位为秒的时间戳。当 token 合法时返回。 | `1601456894`                          |
| Iss       | string | 否                                     | Issuer，当 token 合法时返回。                               | `https://example.authing.cn/oidc`     |
| Jti       | string | 否                                     | 此 Token 的唯一 ID，当 token 合法时返回。                   | `K5TYewNhvdGBdHiRifMyW`               |
| Scope     | string | 否                                     | 使用逗号分割的 scope 数组，当 token 合法时返回。            | `openid profile`                      |


示例结果：

```json
{
  "active": true,
  "sub": "xxxx",
  "client_id": "xxxxx",
  "exp": 1601460494,
  "iat": 1601456894,
  "iss": "https://example.authing.cn/oidc",
  "jti": "K5TYewNhvdGBdHiRifMyW",
  "scope": "openid profile email phone"
}
```



## 本地校验


### 请求参数

| 名称 | 类型   | <div style="width:80px">是否必填</div> | 默认值 | <div style="width:300px">描述</div>                          | <div style="width:200px"></div>示例值</div> |
| ---- | ------ | -------------------------------------- | ------ | ------------------------------------------------------------ | ------------------------------------------- |
| code | string | 是                                     | -      | 获取到的一次性授权码，一个 code 仅限一次性使用，用后作废。有效期为 10 分钟。 | `some-randon-string`                        |

### 示例代码

```C#
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
            var res2 = await authenticationClient.IntrospectToken(res.AccessToken);//校验 AccessToken 
            var res3 = await authenticationClient.IntrospectToken(res.IdToken);//校验 IdToken 
        }
    }
}
```

### 请求响应

类型： `IntrospectTokenResponse`

| 名称                      | 类型   | <div style="width:80px">是否必含</div> | <div style="width:300px">描述</div>    | <div style="width:200px">示例值</div> |
| ------------------------- | ------ | -------------------------------------- | -------------------------------------- | ------------------------------------- |
| Id                        | string | 是                                     | 此 Token 的唯一 ID                     | `K5TYewNhvdGBdHiRifMyW`               |
| Audience                  | string | 是                                     | 签发此 Token 的应用 ID                 | `xxxxxxx`                             |
| Subject                   | string | 是                                     | 此 Token 对应的用户 ID                 | `xxxxxxx`                             |
| ExpiresAt                 | string | 是                                     | Token 的到期时间，为单位为秒的时间戳。 | `1601460494`                          |
| IssuedAt                  | string | 是                                     | Token 的签发时间，为单位为秒的时间戳。 | `1601460494`                          |
| Issuer                    | string | 是                                     | OIDC Issuer                            | `https://example.authing.cn/oidc`     |
| AccessTokenExtended.Scope | string | 是                                     | 使用逗号分割的 scope 数组              | `openid profile`                      |


示例结果：

```json
{
  "Id": "K5TYewNhvdGBdHiRifMyW",
  "Audience": "xxxxxxx",
  "Subject": "xxxxxxx",
  "ExpiresAt": 1601460494,
  "IssuedAt": 1601456894,
  "Issuer": "https://example.authing.cn/oidc",
  "AccessTokenExtended": {
    "Scope": "openid profile offline_access"
  }
}
```
