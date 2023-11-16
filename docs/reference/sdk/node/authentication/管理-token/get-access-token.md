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

| 名称 | 类型   | <div style="width:80px">是否必填</div> | 默认值 | <div style="width:300px">描述</div>                                          | <div style="width:200px"></div>示例值</div> |
| ---- | ------ | -------------------------------------- | ------ | ---------------------------------------------------------------------------- | ------------------------------------------- |
| code | string | 是                                     | -      | 获取到的一次性授权码，一个 code 仅限一次性使用，用后作废。有效期为 10 分钟。 | `some-randon-string`                        |

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
  const result = await authenticationClient.getAccessTokenByCode(
    // 用户认证完成回调到你的系统之后，你可以从回调地址的 query 参数中得到一次性临时凭证
    'REPLACE_ME_WITH_REAL_CODE'
  );
  console.log(JSON.stringify(result, null, 2));
})();
```

## 使用 refresh_toke 换取新的 token

:::hint-info
注意：`refresh_token` 只有在发起 OIDC 登录请求时，在 `scope` 中添加 `offline_access` 才会返回。
:::

当 `access_token` 过期时，可以使用 `refresh_token` 换取新的 `access_token`，从而在保证安全性的前提下，实现长期保持用户登录态无需用户再次登录的功能。

### 请求参数

| 名称          | 类型   | <div style="width:80px">是否必填</div> | 默认值 | <div style="width:300px">描述</div>   | <div style="width:200px"></div>示例值</div> |
| ------------- | ------ | -------------------------------------- | ------ | ------------------------------------- | ------------------------------------------- |
| refresh_token | string | 是                                     | -      | 获取 token 时返回的 `refresh_token`。 | `some-randon-string`                        |

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
  const result = await authenticationClient.getAccessTokenByCode(
    // 用户认证完成回调到你的系统之后，你可以从回调地址的 query 参数中得到一次性临时凭证
    'REPLACE_ME_WITH_REFRESH_TOKEN'
  );
  console.log(JSON.stringify(result, null, 2));
})();
```

## 请求响应

类型： `OIDCTokenResponse`

| 名称          | 类型   | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div>          | <div style="width:200px">示例值</div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| ------------- | ------ | -------------------------------------- | -------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| access_token  | string | 否                                     | 接口调用凭据，在限制时间内被授权访问资源 API | `eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InIxTGtiQm8zOTI1UmIyWkZGckt5VTNNVmV4OVQyODE3S3gwdmJpNmlfS2MifQ.eyJqdGkiOiJ4R01uczd5cmNFckxiakNRVW9US1MiLCJzdWIiOiI1YzlmNzVjN2NjZjg3YjA1YTkyMWU5YjAiLCJpc3MiOiJodHRwczovL2F1dGhpbmcuY24iLCJpYXQiOjE1NTQ1Mzc4NjksImV4cCI6MTU1NDU0MTQ2OSwic2NvcGUiOiJvcGVuaWQgcHJvZmlsZSBvZmZsaW5lX2FjY2VzcyBwaG9uZSBlbWFpbCIsImF1ZCI6IjVjYTc2NWUzOTMxOTRkNTg5MWRiMTkyNyJ9.wX05OAgYuXeYM7zCxhrkvTO_taqxrCTG_L2ImDmQjMml6E3GXjYA9EFK0NfWquUI2mdSMAqohX-ndffN0fa5cChdcMJEm3XS9tt6-_zzhoOojK-q9MHF7huZg4O1587xhSofxs-KS7BeYxEHKn_10tAkjEIo9QtYUE7zD7JXwGUsvfMMjOqEVW6KuY3ZOmIq_ncKlB4jvbdrduxy1pbky_kvzHWlE9El_N5qveQXyuvNZVMSIEpw8_y5iSxPxKfrVwGY7hBaF40Oph-d2PO7AzKvxEVMamzLvMGBMaRAP_WttBPAUSqTU5uMXwMafryhGdIcQVsDPcGNgMX6E1jzLA`                    |
| id_token      | string | 否                                     | 用户的身份凭证，解析后会包含用户信息         | `eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InIxTGtiQm8zOTI1UmIyWkZGckt5VTNNVmV4OVQyODE3S3gwdmJpNmlfS2MifQ.eyJzdWIiOiI1YzlmNzVjN2NjZjg3YjA1YTkyMWU5YjAiLCJub25jZSI6IjIyMTIxIiwiYXRfaGFzaCI6Ik5kbW9iZVBZOEFFaWQ2T216MzIyOXciLCJzaWQiOiI1ODM2NzllNC1lYWM5LTRjNDEtOGQxMS1jZWFkMmE5OWQzZWIiLCJhdWQiOiI1Y2E3NjVlMzkzMTk0ZDU4OTFkYjE5MjciLCJleHAiOjE1NTQ1NDE0NjksImlhdCI6MTU1NDUzNzg2OSwiaXNzIjoiaHR0cHM6Ly9hdXRoaW5nLmNuIn0.IQi5FRHO756e_eAmdAs3OnFMU7QuP-XtrbwCZC1gJntevYJTltEg1CLkG7eVhdi_g5MJV1c0pNZ_xHmwS0R-E4lAXcc1QveYKptnMroKpBWs5mXwoOiqbrjKEmLMaPgRzCOdLiSdoZuQNw_z-gVhFiMNxI055TyFJdXTNtExt1O3KmwqanPNUi6XyW43bUl29v_kAvKgiOB28f3I0fB4EsiZjxp1uxHQBaDeBMSPaRVWQJcIjAJ9JLgkaDt1j7HZ2a1daWZ4HPzifDuDfi6_Ob1ZL40tWEC7xdxHlCEWJ4pUIsDjvScdQsez9aV_xMwumw3X4tgUIxFOCNVEvr73Fg` |
| refresh_token | string | 否                                     | refresh_token 用于获取新的 AccessToken       | `WPsGJbvpBjqXz6IJIr1UHKyrdVF`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| token_type    | string | 是                                     | token 类型                                   | `xxx`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| expire_in     | number | 是                                     | 过期时间 单位是秒                            | `7200`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |

示例结果：

!!!include(reference/sdk/common/token_response_json.md)!!!
