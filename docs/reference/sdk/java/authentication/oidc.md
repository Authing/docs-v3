---
meta:
  - name: description
    content: Java SDK
---

# {{$localeConfig.brandName}} - Java SDK OIDC 模块

<LastUpdated/>

OpenID Connect 简称 OIDC，是 OAuth 2.0 的一个扩展，主要增加了语义化的用户信息字段。

## 初始化

初始化 AuthenticationClient 时需传递 AuthenticationClientOptions 参数，其部分属性列如下：

- `appId` \<String\> 应用 ID，必填。
- `secret` \<String\> 应用密钥，必填。
- `host` \<String\> 应用完整地址，如 https://sample-app.authing.cn，不带最后的斜线 '/'。
- `redirectUri` \<String\> 业务回调 URL，必填。详情请查看[授权码模式](https://docs.authing.cn/v2/guides/federation/oidc.html#%E6%8E%88%E6%9D%83%E7%A0%81%E6%A8%A1%E5%BC%8F)。
- `protocol` \<ProtocolEnum\> 协议类型，可选值为 `OIDC`、`OAUTH`、`SAML`、`CAS`，默认为 `OIDC`。
- `tokenEndPointAuthMethod` \<AuthMethodEnum\> 获取 token 端点验证方式，可选值为 `CLIENT_SECRET_POST`、`CLIENT_SECRET_BASIC`、`NONE`，默认为 `CLIENT_SECRET_POST`。
- `introspectionEndPointAuthMethod` \<AuthMethodEnum\> 检验 token 端点验证方式，可选值为 `CLIENT_SECRET_POST`、`CLIENT_SECRET_BASIC`、`NONE`，默认为 `CLIENT_SECRET_POST`。
- `revocationEndPointAuthMethod` \<AuthMethodEnum\> 撤回 token 端点验证方式，可选值为 `CLIENT_SECRET_POST`、`CLIENT_SECRET_BASIC`、`NONE`，默认为 `CLIENT_SECRET_POST`。

### 示例

```java
// 使用 AppId 和 AppHost 进行初始化
AuthenticationClientOptions options = new AuthenticationClientOptions();
options.setAppId("AUTHING_APP_ID");
options.setAppHost("AUTHING_APP_HOST");
AuthenticationClient authenticationClient = null;
try {
    authenticationClient = new AuthenticationClient(options);
} catch (IOException | ParseException e) {
    e.printStackTrace();
}
```

## 生成 OIDC 协议的用户登录链接

authenticationClient.buildAuthorizeUrl(IOidcParams options)

> 生成 OIDC 协议的用户登录链接

### 参数

- `options` \<IOidcParams\> 发起授权登录时需要填写的参数。详情请见[使用 OIDC 授权码模式](https://docs.authing.cn/v2/federation/oidc/authorization-code/)。
- `options.scope` \<String\> 请求的权限项目，选填，OIDC 协议默认为 `openid profile email phone address`。
- `options.nonce` \<String\> 随机字符串，选填，默认自动生成。
- `options.state` \<String\> 随机字符串，选填，默认自动生成。
- `options.responseMode` \<String\> 响应类型，选填，可选值为 `query`、`fragment`、`form_post`；默认为 `query`，即通过浏览器重定向发送 code 到回调地址。
- `options.responseType` \<String\> 响应类型，选填，可选值为 `code`、`code id_token token`、`code id_token`、`code id_token`、`code token`、`id_token token`、`id_token`、`none`；默认为 `code`，授权码模式。
- `options.redirectUri` \<String\> 回调地址，必填，默认为 SDK 初始化时的 redirectUri 参数。
- `options.tenantId` \<String\> 租户 ID，选填。

### 示例

```java
// 拼接 OIDC 授权链接
IOidcParams iOidcParams = new IOidcParams();
iOidcParams.setRedirectUri("AUTHING_REDIRECTURI");
iOidcParams.setNonce("nonce test");
String respDto = authenticationClient.buildAuthorizeUrl(iOidcParams);
```

### 示例数据

```http
https://oidc1.authing.cn/oidc/auth?nonce=5485323897342262&state=7400704296715694&scope=openid+profile+offline_access&client_id=5f17a529f64fb009b794a2ff&response_mode=query&redirect_uri=https%3A%2F%2Fbaidu.com&response_type=code&prompt=consent
```

## Code 换 Token

authenticationClient.getAccessTokenByCode(code)

> 使用授权码 Code 获取用户的 Token 信息。

### 参数

- `code` \<String\> 授权码 Code，用户在认证成功后，Authing 会将授权码 Code 发送到回调地址，详情请见[使用 OIDC 授权码模式](https://docs.authing.cn/v2/federation/oidc/authorization-code/)，每个 Code 只能使用一次。

### 示例

```java
OIDCTokenResponse respDto = authenticationClient.getAccessTokenByCode("code");
```

### 示例数据

```json
{
  "access_token": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IlRmTE90M0xibjhfYThwUk11ZXNzYW1xai1vM0RCQ3MxLW93SExRLVZNcVEifQ.eyJqdGkiOiJsdzg0NW5zdGcwS3EtMTlodVpQOHYiLCJzdWIiOiI1ZmY3MDFkODQ2YjkyMDNlMmY2YWM2ZjMiLCJpYXQiOjE2MTU4ODM1ODYsImV4cCI6MTYxNTg4NzE4Niwic2NvcGUiOiJlbWFpbCBvcGVuaWQgcHJvZmlsZSBwaG9uZSIsImlzcyI6Imh0dHBzOi8vb2lkYzEuYXV0aGluZy5jbi9vaWRjIiwiYXVkIjoiNWYxN2E1MjlmNjRmYjAwOWI3OTRhMmZmIn0.VvYKBcWcr8iIi1b37ugWQ9hsvog4_7EqDQyFqwhIuvM0NHlHH3Bhw83EQIKSNfbWV4nv3ihfeNGPLMzslbQr-wwjnWZTLMYl1bcn7IdVtD_kTN3Zz10MwF5td-VQ7UndU28wJ0HE1mo6E8QH93kYGckS5FSZXmCBa0M5H59Jec_a1MHI1MZrr_V9cZ9EfeF97V-PcqU8JVAwDZclCJ3mWY_Mb65RnMR9yEVqUZzJStmaXGMuRIzjkm2pklqt0CtQQJfzECXq_4USpwRXDiYLWILYPUCcO6hGxDjhMEd8IcxdG51TQP-w1UM6LyIRn61uSJvDsz8zg5dStDKyocypiA",
  "expires_in": 3600,
  "id_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3QzQDEyMy5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsInN1YiI6IjVmZjcwMWQ4NDZiOTIwM2UyZjZhYzZmMyIsImJpcnRoZGF0ZSI6bnVsbCwiZmFtaWx5X25hbWUiOm51bGwsImdlbmRlciI6IlUiLCJnaXZlbl9uYW1lIjpudWxsLCJsb2NhbGUiOm51bGwsIm1pZGRsZV9uYW1lIjpudWxsLCJuYW1lIjpudWxsLCJuaWNrbmFtZSI6bnVsbCwicGljdHVyZSI6Imh0dHBzOi8vZmlsZXMuYXV0aGluZy5jby9hdXRoaW5nLWNvbnNvbGUvZGVmYXVsdC11c2VyLWF2YXRhci5wbmciLCJwcmVmZXJyZWRfdXNlcm5hbWUiOm51bGwsInByb2ZpbGUiOm51bGwsInVwZGF0ZWRfYXQiOiIyMDIxLTAzLTE1VDA1OjU0OjU0LjY4NVoiLCJ3ZWJzaXRlIjpudWxsLCJ6b25laW5mbyI6bnVsbCwicGhvbmVfbnVtYmVyIjpudWxsLCJwaG9uZV9udW1iZXJfdmVyaWZpZWQiOmZhbHNlLCJub25jZSI6IjcwVEU3eW9NVFEiLCJhdF9oYXNoIjoiUFNnOGw5eDRldGxmLXA4UDdjYnVoQSIsImlzcyI6Imh0dHBzOi8vb2lkYzEuYXV0aGluZy5jbi9vaWRjIiwiaXNzMiI6Imh0dHBzOi8vYmFpZHUuY29tIiwiYXVkIjoiNWYxN2E1MjlmNjRmYjAwOWI3OTRhMmZmIiwiZXhwIjoxNjE1ODg3MTg3LCJpYXQiOjE2MTU4ODM1ODh9.OlX-FP7znIEqx0YpnOQ8kxadMe1toHDj1KPVm0dbEVc",
  "scope": "email openid profile phone",
  "token_type": "Bearer"
}
```

字段解释：

| 字段名       | 含义                                      |
| ------------ | ----------------------------------------- |
| token_type   | Token 类型，固定值 Bearer                 |
| scope        | 授权范围，授权获取的用户权限项目          |
| id_token     | Id token，Authing 颁发的 Id token         |
| expires_in   | Access token 过期时间                     |
| access_token | Access token，Authing 颁发的 Access token |

## Token 换用户信息

authenticationClient.getUserInfoByAccessToken(access_token)

> 使用 Access token 获取用户信息。

### 参数

- `access_token` \<String\> Access token，使用授权码 Code 换取的 Access token 的内容。详情请见[使用 OIDC 授权码模式](https://docs.authing.cn/v3/reference/sdk/java/authentication/oidc.html)。

### 示例

```java
UserInfo userInfo = authenticationClient.getUserInfoByAccessToken("Access Token");
```

### 示例数据

```json
{
  "sub": "603f184cec4505e2868431fc", // subject 的缩写，为用户 ID
  "name": "example",
  "nickname": "example",
  "given_name": "example",
  "family_name": "example",
  "birthdate": "2022-02-22",
  "gender": "M",
  "picture": "https://files.authing.co/authing-console/default-user-avatar.png",
  "updatedAt": "2021-03-03T06:17:14.485Z",
  "zoneinfo": null,
  "preferred_username": null,
  "locale": null
}
```

字段解释：

| 字段名             | 翻译                                    |
| :----------------- | :-------------------------------------- |
| sub                | subject 的缩写，唯一标识，一般为用户 ID |
| name               | 姓名                                    |
| nickname           | 昵称                                    |
| given_name         | 名字                                    |
| family_name        | 姓氏                                    |
| birthdate          | 生日                                    |
| gender             | 性别                                    |
| picture            | 头像                                    |
| updated_at         | 信息更新时间                            |
| zoneinfo           | 时区                                    |
| preferred_username | 希望被称呼的名字                        |
| locale             | 区域                                    |

## 刷新 Access Token

authenticationClient.getNewAccessTokenByRefreshToken(refreshToken)

> 使用 Refresh token 获取新的 Access token。

### 参数

- `refreshToken` \<String\> Refresh token，可以从 authenticationClient.getAccessTokenByCode 方法的返回值中的 refresh_token 获得。详情请见[刷新 Access token](https://docs.authing.cn/v2/guides/federation/oidc.html#%E5%88%B7%E6%96%B0-access-token)。

### 示例

```java
GetNewAccessTokenByRefreshTokenRespDto respDto = authenticationClient.getNewAccessTokenByRefreshToken("Refresh Token");
```

### 示例数据

```json
{
  "access_token": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IlRmTE90M0xibjhfYThwUk11ZXNzYW1xai1vM0RCQ3MxLW93SExRLVZNcVEifQ.eyJqdGkiOiJZUHB4NUVEWGlQWVJvNUFQWXAzci0iLCJzdWIiOiI1ZmY3MDFkODQ2YjkyMDNlMmY2YWM2ZjMiLCJpYXQiOjE2MTQwOTE0OTksImV4cCI6MTYxNDA5NTA5OSwic2NvcGUiOiJvZmZsaW5lX2FjY2VzcyBwcm9maWxlIG9wZW5pZCIsImlzcyI6Imh0dHBzOi8vb2lkYzEuYXV0aGluZy5jbi9vaWRjIiwiYXVkIjoiNWYxN2E1MjlmNjRmYjAwOWI3OTRhMmZmIn0.ZN_SlfVg1oNMz7uAK-5K84dqqqmlZehmAPOLytOR9HnLHImKJ9VO5u1hRsAjGCob0kMUV5wVxQhX3EFks7FtMamiX2Jvn-NYh4V_5T6l3LFf4uoKF6AykAg483nG3EEENuGgQo15bBszsoCGqFnNmUd0T4Cgxx0zbxXPxMdp_dcE14KzmNz1w-Qg3yVeYmSTZFdcLtZA2BYnVEa7LYA2yA3DgawwAcRmrlyEfnvCO3uY2TcsTKEAfQ-QgVIGRWOfyUE5f-_X3TolliO1fXnwZBdxEKMXLGW5E2bPVcePyiV0upYbUnQ079UxBlEiWlgeW_rpkTPXDxHAgiE488gtlg",
  "expires_in": 3600,
  "id_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1ZmY3MDFkODQ2YjkyMDNlMmY2YWM2ZjMiLCJiaXJ0aGRhdGUiOm51bGwsImZhbWlseV9uYW1lIjpudWxsLCJnZW5kZXIiOiJVIiwiZ2l2ZW5fbmFtZSI6bnVsbCwibG9jYWxlIjpudWxsLCJtaWRkbGVfbmFtZSI6bnVsbCwibmFtZSI6bnVsbCwibmlja25hbWUiOm51bGwsInBpY3R1cmUiOiJodHRwczovL2ZpbGVzLmF1dGhpbmcuY28vYXV0aGluZy1jb25zb2xlL2RlZmF1bHQtdXNlci1hdmF0YXIucG5nIiwicHJlZmVycmVkX3VzZXJuYW1lIjpudWxsLCJwcm9maWxlIjpudWxsLCJ1cGRhdGVkX2F0IjoiMjAyMS0wMi0yM1QxNDo0NDoxOC4wODVaIiwid2Vic2l0ZSI6bnVsbCwiem9uZWluZm8iOm51bGwsImF0X2hhc2giOiIxaWRJSUxaWExpZkRscXJMY3ZNeV9BIiwiS0VZIjoiVkFMVUUiLCJhdWQiOiI1ZjE3YTUyOWY2NGZiMDA5Yjc5NGEyZmYiLCJleHAiOjE2MTQwOTUwOTgsImlhdCI6MTYxNDA5MTQ5OSwiaXNzIjoiaHR0cHM6Ly9vaWRjMS5hdXRoaW5nLmNuL29pZGMifQ._H59237sqpsY0OgyY_RM7CvuG6cFo1x03y-DBhd5hik",
  "refresh_token": "3T49f4Y48szoMmwBXragjqLwQZC4QhgnsM5Oy2WfmU-",
  "scope": "openid offline_access profile",
  "token_type": "Bearer"
}
```

## 检查 Access Token

authenticationClient.introspectToken(token)

> 检查 Access token 或 Refresh token 的状态。

### 参数

- `token` \<String\> Access token 或 Refresh token，可以从 authenticationClient.getAccessTokenByCode 方法的返回值中的 access_token、refresh_token 获得。

### 示例

```java
IntrospectTokenWithClientSecretPostRespDto respDto = authenticationClient.introspectToken("Access/Refresh token");
```

### 示例数据

Token 合法时返回：

```json
{
  "active": true,
  "sub": "60097f4d5bc08f75da104d18", // subject 的缩写，为用户 ID
  "client_id": "60097391b1358c17c5fb0f4e",
  "exp": 1612445888,
  "iat": 1611236288,
  "iss": "https://core.littleimp.cn/oidc",
  "jti": "TV4J0gAbe4KR4-8CtYcOa",
  "scope": "openid profile email phone offline_access",
  "token_type": "Bearer"
}
```

Token 不合法时返回：

```json
{
  "active": false
}
```

检验过程失败会抛出错误。

## 检验 Id Token 合法性

authenticationClient.validateToken(param)

> 通过 Authing 提供的在线接口验证 Id token 或 Access token，会产生网络请求。

### 参数

- `param` \<ValidateTokenParams\>
- `param.idToken` \<String\> Access token 或 Refresh token，可以从 authenticationClient.getAccessTokenByCode 方法的返回值中的 id_token 获得。
- `param.accessToken` \<String\> Access token，可以从 authenticationClient.getAccessTokenByCode 方法的返回值中的 access_token 获得。

### 示例

```java
ValidateTokenParams params = new ValidateTokenParams();
// params.setIdToken("Id Token");
params.setAccessToken("Access Token");
ValidateTokenRespDto respDto = authenticationClient.validateToken(params);
```

### 示例数据

id_token 验证合法时返回：

```json
{
  "sub": "5f64afd1ad501364e3b43c1e", // subject 的缩写，为用户 ID
  "birthdate": null,
  "family_name": null,
  "gender": "U",
  "given_name": null,
  "locale": null,
  "middle_name": null,
  "name": null,
  "nickname": null,
  "picture": "https://usercontents.authing.cn/authing-avatar.png",
  "preferred_username": "test1",
  "profile": null,
  "updated_at": "2020-09-27T06:06:29.853Z",
  "website": null,
  "zoneinfo": null,
  "email": "test1@123.com",
  "email_verified": false,
  "phone_number": null,
  "phone_number_verified": false,
  "nonce": "CQsguqUdl7",
  "at_hash": "10iOtwuTNtyQLzlNYXAHeg",
  "aud": "5f17a529f64fb009b794a2ff",
  "exp": 1601460494,
  "iat": 1601456894,
  "iss": "https://oidc1.authing.cn/oidc"
}
```

Id token 验证非法时返回：

```json
{ "code": 400, "message": "id_token 格式有误" }
```

```json
{ "code": 400, "message": "id_token 不合法" }
```

Access token 验证合法时返回：

```json
{
  "jti": "K5TYewNhvdGBdHiRifMyW",
  "sub": "5f64afd1ad501364e3b43c1e", // subject 的缩写，为用户 ID
  "iat": 1601456894,
  "exp": 1601460494,
  "scope": "openid profile email phone",
  "iss": "https://oidc1.authing.cn/oidc",
  "aud": "5f17a529f64fb009b794a2ff"
}
```

Access token 验证非法时返回：

```json
{ "code": 400, "message": "access_token 格式有误" }
```

```json
{ "code": 400, "message": "access_token 不合法" }
```

## 拼接登出 URL

authenticationClient.buildLogoutUrl(params)

> 拼接登出 URL。

### 参数

- `params` \<ILogoutParams\> 登出配置项
- `params.state` \<String\> 随机字符串，选填，默认自动生成
- `params.redirectUri` \<String\> 登出后的重定向地址
- `params.idToken` \<String\> 用户的 idToken

### 示例

使用前端万能登出链接退出登录：

```java
// 拼接前端万能登出链接
BuildLogoutUrlParams params = new BuildLogoutUrlParams();
String logoutUrl = authenticationClient.buildLogoutUrl(params);
```

使用 OIDC 协议标准链接退出登录，需在 authenticationClientOptions 中 setProtocol（默认 OIDC） ，需要传入当前用户的 **Id token**，且登出回调地址**必须与控制台配置的一致**：

```java
// 拼接符合 OIDC 协议标准的登出链接
BuildLogoutUrlParams params = new BuildLogoutUrlParams();
params.setPostLogoutRedirectUri("AUTHING_LOGOUG_REDIRECT_URI");
params.setIdTokenHint("AUTHING_ID_TOKEN");
params.setState("random string");
String logoutUrl = authenticationClient.buildLogoutUrl(params);
```

## Client Credentials 模式获取 Access Token

authenticationClient.getAccessTokenByClientCredentials(scope, options)

> 使用[编程访问账号](https://docs.authing.cn/v2/guides/authorization/m2m-authz.html#m2m-%E6%8E%88%E6%9D%83)获取具备权限的 Access Token。

### 参数

- `scope` \<String\> 权限项目，空格分隔的字符串，每一项代表一个权限。详情请见[机器间（M2M）授权](https://docs.authing.cn/v2/guides/authorization/m2m-authz.html#%E8%8E%B7%E5%8F%96%E5%85%B7%E5%A4%87%E6%9D%83%E9%99%90%E7%9A%84-accesstoken)。
- `options` \<ClientCredentialInput\> 编程访问账号的 AK 与 SK 信息
- `options.accessKey` \<String\> 编程访问账号 AccessKey
- `options.secretKey` \<String\> 编程访问账号 SecretKey

### 示例

```java
ClientCredentialInput input = new ClientCredentialInput();
input.setAccessKey("AUTHING_ACCESS_KEY");
input.setAccessSecret("AUTHING_ACCESS_SECRET");
GetAccessTokenByClientCredentialsRespDto respDto = authenticationClient.getAccessTokenByClientCredentials("scope", input);
```

### 示例数据

```json
{
  "access_token": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IlRmTE90M0xibjhfYThwUk11ZXNzYW1xai1vM0RCQ3MxLW93SExRLVZNcVEifQ.eyJqdGkiOiJsdzg0NW5zdGcwS3EtMTlodVpQOHYiLCJzdWIiOiI1ZmY3MDFkODQ2YjkyMDNlMmY2YWM2ZjMiLCJpYXQiOjE2MTU4ODM1ODYsImV4cCI6MTYxNTg4NzE4Niwic2NvcGUiOiJlbWFpbCBvcGVuaWQgcHJvZmlsZSBwaG9uZSIsImlzcyI6Imh0dHBzOi8vb2lkYzEuYXV0aGluZy5jbi9vaWRjIiwiYXVkIjoiNWYxN2E1MjlmNjRmYjAwOWI3OTRhMmZmIn0.VvYKBcWcr8iIi1b37ugWQ9hsvog4_7EqDQyFqwhIuvM0NHlHH3Bhw83EQIKSNfbWV4nv3ihfeNGPLMzslbQr-wwjnWZTLMYl1bcn7IdVtD_kTN3Zz10MwF5td-VQ7UndU28wJ0HE1mo6E8QH93kYGckS5FSZXmCBa0M5H59Jec_a1MHI1MZrr_V9cZ9EfeF97V-PcqU8JVAwDZclCJ3mWY_Mb65RnMR9yEVqUZzJStmaXGMuRIzjkm2pklqt0CtQQJfzECXq_4USpwRXDiYLWILYPUCcO6hGxDjhMEd8IcxdG51TQP-w1UM6LyIRn61uSJvDsz8zg5dStDKyocypiA",
  "expires_in": 3600,
  "scope": "email openid profile phone",
  "token_type": "Bearer"
}
```
