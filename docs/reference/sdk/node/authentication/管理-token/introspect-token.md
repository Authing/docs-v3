# 校验 Token

<LastUpdated />

此文档介绍如何验证 `access_token` 和 `refresh_token` 的合法性。有关 `access_token` 和 `refresh_token` 的介绍，请见[获取 Token](./get-access-token.md)。

Authing Go SDK 提供两种校验 Token 的方式：在线校验和本地校验。下面是两种方式的对比：

| <div style="width:80px">校验方式</div> | <div style="width:80px">优势</div>                          | <div style="width:80px">劣势</div>                                                                                                                                                                                                  |
| -------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 在线校验                               | 使用中心服务器对 Token 进行校验，确保最终结果一定是正确的。 | <br> - 会产生网络请求。 <br>- 存在单点故障风险。                                                                                                                                                                                    |
| 本地校验                               | 无需网络请求，性能更快。                                    | 如果 `access_token` 和 `refresh_token` 被手动撤销之后，应用服务器没有清除缓存的 `access_token`，本地校验任然会通过，所以应用服务器在 `access_token` 和 `refresh_token` 之后一定要清除本地缓存的 `access_token` 和 `refresh_token`。 |

## 在线校验

此接口用于在线校验 `access_token` 和 `refresh_token`。

### 请求参数

| 名称  | 类型   | <div style="width:80px">是否必填</div> | 默认值 | <div style="width:300px">描述</div> | <div style="width:200px"></div>示例值</div> |
| ----- | ------ | -------------------------------------- | ------ | ----------------------------------- | ------------------------------------------- |
| token | string | 是                                     | -      | Access Token 或者 Refresh Token     | `some-randon-string`                        |

### 示例代码

```typescript
import { AuthenticationClient, Models } from 'authing-node-sdk';

const authenticationClient = new AuthenticationClient({
  // 需要替换成你的 Authing 应用 ID
  appId: 'AUTHING_APP_ID',
  // 需要替换成你的 Authing 应用密钥
  appSecret: 'AUTHING_APP_SECRET',
  // 需要替换成你的 Authing 应用域名
  appHost: 'AUTHING_APP_HOST',
  // 需要替换成你的 Authing 应用回调地址
  redirectUri: 'AUTHING_APP_REDIRECT_URI'
});

(async () => {
  const result = await authenticationClient.introspectToken(
    // 需要替换成真实的 access_token 或 refresh_token
    'REPLACE_ME_WITH_REAL_CODE'
  );
  console.log(JSON.stringify(result, null, 2));
})();
```

### 请求响应

类型： `IntrospectTokenResult`

| 名称       | 类型   | <div style="width:80px">是否必含</div> | <div style="width:300px">描述</div>                         | <div style="width:200px">示例值</div> |
| ---------- | ------ | -------------------------------------- | ----------------------------------------------------------- | ------------------------------------- |
| active     | bool   | 是                                     | 是否有效                                                    | `true`                                |
| sub        | string | 否                                     | 此 Token 对应的用户 ID，当 token 合法时返回。               | `xxxxxx`                              |
| client_id  | string | 否                                     | 签发此 Token 的应用 ID，当 token 合法时返回。               | `xxxxxx`                              |
| exp        | string | 否                                     | Token 的到期时间，为单位为秒的时间戳。当 token 合法时返回。 | `1601460494`                          |
| iat        | string | 否                                     | Token 的签发时间，为单位为秒的时间戳。当 token 合法时返回。 | `1601456894`                          |
| iss        | string | 否                                     | Issuer，当 token 合法时返回。                               | `https://example.authing.cn/oidc`     |
| jti        | string | 否                                     | 此 Token 的唯一 ID，当 token 合法时返回。                   | `K5TYewNhvdGBdHiRifMyW`               |
| scope      | string | 否                                     | 使用逗号分割的 scope 数组，当 token 合法时返回。            | `openid profile`                      |

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

| 名称  | 类型   | <div style="width:80px">是否必填</div> | 默认值 | <div style="width:300px">描述</div> | <div style="width:200px"></div>示例值</div> |
| ----- | ------ | -------------------------------------- | ------ | ----------------------------------- | ------------------------------------------- |
| token | string | 是                                     | -      | Access Token 或者 Refresh Token     | `some-randon-string`                        |

### 示例代码

```typescript
import { AuthenticationClient, Models } from 'authing-node-sdk';

const authenticationClient = new AuthenticationClient({
  // 需要替换成你的 Authing 应用 ID
  appId: 'AUTHING_APP_ID',
  // 需要替换成你的 Authing 应用密钥
  appSecret: 'AUTHING_APP_SECRET',
  // 需要替换成你的 Authing 应用域名
  appHost: 'AUTHING_APP_HOST',
  // 需要替换成你的 Authing 应用回调地址
  redirectUri: 'AUTHING_APP_REDIRECT_URI'
});

(async () => {
  const result = await authenticationClient.parseAccessToken(
    // 需要替换成真实的 access_token 或 refresh_token
    'REPLACE_ME_WITH_REAL_CODE'
  );
  console.log(JSON.stringify(result, null, 2));
})();
```

### 请求响应

类型： `IntrospectTokenResult`

| 名称  | 类型   | <div style="width:80px">是否必含</div> | <div style="width:300px">描述</div>       | <div style="width:200px">示例值</div> |
| ----- | ------ | -------------------------------------- | ----------------------------------------- | ------------------------------------- |
| aud   | string | 是                                     | 签发此 Token 的应用 ID                    | `xxxxxxx`                             |
| sub   | string | 是                                     | 此 Token 对应的用户 ID                    | `xxxxxxx`                             |
| exp   | string | 是                                     | Token 的到期时间，为单位为秒的时间戳。    | `1601460494`                          |
| iat   | string | 是                                     | Token 的签发时间，为单位为秒的时间戳。    | `1601460494`                          |
| iss   | string | 是                                     | OIDC Issuer                               | `https://example.authing.cn/oidc`     |
| scope | string | 是                                     | scope                                     | `openid profile`                      |
| jti   | string | 否                                     | 此 Token 的唯一 ID，当 token 合法时返回。 | `K5TYewNhvdGBdHiRifMyW`               |

示例结果：

```json
{
  "sub": "635908aba85516ca765699a7",
  "aud": "633ba16e3e48825124d34a6f",
  "scope": "openid profile email address phone",
  "iat": 1666779590,
  "exp": 1667989190,
  "jti": "ZXdivSulJUiVhRNcSs9CMJhpBBAe2i7cKBt1AXg1BE9",
  "iss": "https://testguoqing.authing.cn/oidc"
}
```
