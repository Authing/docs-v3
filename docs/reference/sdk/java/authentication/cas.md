---
meta:
  - name: description
    content: Java SDK
---

# {{$localeConfig.brandName}} - Java SDK CAS 模块

<LastUpdated/>

CAS 是 Central Authentication Service 的缩写，中央认证服务，一种独立开放指令协议。

## 初始化

初始化 AuthenticationClient 时的参数：

- `appId` \<String\> 应用 ID，必填。
- `appHost` \<String\> 应用完整地址，如 https://sample-app.authing.cn，不带最后的斜线 '/'。
- `protocol` \<ProtocolEnum\> 协议类型，可选值为 `OIDC`、`OAUTH`、`SAML`、`CAS`，默认为 `OIDC`。

### 示例

```java
// 使用 AppId 和 AppHost 进行初始化
AuthenticationClientOptions options = new AuthenticationClientOptions();
options.setAppId("AUTHING_APP_ID");
options.setAppHost("AUTHING_APP_HOST");
// 协议
options.setProtocol(ProtocolEnum.CAS.getValue());
AuthenticationClient authenticationClient = null;
try {
    authenticationClient = new AuthenticationClient(options);
} catch (IOException | ParseException e) {
    e.printStackTrace();
}
```

## 生成 CAS 协议的用户登录链接

authenticationClient.buildAuthorizeUrl(ICasParams options)

> 生成 CAS 协议的用户登录链接

### 参数

- `options` \<ICasParams\> 发起授权登录时需要填写的参数。
- `options.service` 请求的服务地址。

### 示例

```java
// 拼接 CAS 登录链接
//options.setProtocol(ProtocolEnum.CAS.getValue());

ICasParams iCasParams = new ICasParams();
iCasParams.setService("https://example.com");
String respDto = authenticationClient.buildAuthorizeUrl(iCasParams);
```

### 示例数据

```http
https://oidc1.authing.cn/cas-idp/5f17a529f64fb009b794a2ff/login?service=https://example.com
```
