## OIDC

<LastUpdated/>

OpenID Connect 简称 [OIDC](https://docs.authing.cn/v2/apn/#关于-oidc)，是 OAuth 2.0 的一个扩展，主要增加了语义化的用户信息字段。

### 初始化

AuthClient 会自动获取控制台默认回调，如需要自定义 scope, redirect_uri 等参数，可创建 AuthRequest 对象，重新给 scope 或 redirect_uri 属性赋值。

**示例**

```swift
let authRequest = AuthRequest()
authRequest.scope = "openid"
AuthClient(authRequest).loginByXXX()
```
<br>

使用 OIDC 邮箱注册帐号，邮箱不区分大小写且用户池内唯一。此接口不要求用户对邮箱进行验证，用户注册之后 emailVerified 字段会为 false 。

```swift
func registerByEmail(email: String, password: String, completion: @escaping(Response) -> Void)
```

**参数**

* *email* 邮箱
* *password* 明文密码

**示例**

```swift
AuthClient().registerByEmail(email: "test@example.com", password: "strong") { code, message, userInfo in
    if (code == 200) {
        // userInfo：用户信息
    }
}
```

**错误码**

* 2003 非法邮箱地址
* 2026 邮箱已注册

<br>




```swift
func loginByWechat(_ code: String, completion: @escaping(Response) -> Void)
```

**参数**

* *code* 微信授权码

**示例**

```swift
AuthClient().loginByWechat("authCode") { code, message, userInfo in
    if (code == 200) {
        // userInfo：用户信息
    }
}
```

<br>

### 获取用户信息

通过 access token 获取用户信息。此接口只返回协议相关用户信息字段。

```swift
func getUserInfoByAccessToken(accessToken: String, completion: @escaping(Response) -> Void)
```

**参数**

* *accessToken* accessToken

**示例**

```swift
AuthClient().getUserInfoByAccessToken(accessToken: accessToken) { res in
    if (res.statusCode == 200) {
        //res.data
    }
}
```

<br>

### 通过 refresh token 获取新的 access token 和 id token

access token 的有效期通常较短，比如几个小时或者 1 天。当 access token 过期后，App 不能频繁的弹出登录界面让用户认证，那样体验比较糟糕。所以通常的做法是通过代码，用一个有效期比较长的 refresh token 去刷新 access token，从而保持登录状态。只有当 refresh token 过期才弹出登录界面。

```swift
func getNewAccessTokenByRefreshToken(refreshToken: String, completion: @escaping(Response) -> Void)
```

**参数**

* *refreshToken* 刷新凭证。注意登录 URL 里面的参数配置，请参考 “生成 OIDC 协议的用户登录链接”

**示例**

```swift
AuthClient().getNewAccessTokenByRefreshToken(refreshToken: "refreshToken") { res in
    // res.data
}
```

>注意，每次调用会得到新的 refresh token 。

<br>

### 生成 OIDC 协议的用户登录链接

生成登录 URL，传给 WebView 加载

```swift
func buildAuthorizeUrl(completion: @escaping (URL?) -> Void)
```

**示例**

```swift
AuthClient().buildAuthorizeUrl() { url in
    if url != nil {
        // self is your view controller
        // webView is a WKWebView object
        self.webView?.load(URLRequest(url: url!))
    }
}
```

**设置 scope 参数**

默认值为 openid profile email phone username address offline_access role extended_fields

```swift
let authRequest = AuthRequest()
authRequest.scope = "openid"
AuthClient(authRequest).buildAuthorizeUrl() { url in }
```

**设置回调参数**

SDK 会自动获取控制台默认回调。如果在控制台修改了回调，则需要设置 authRequest 回调地址。

```swift
let authRequest = AuthRequest()
authRequest.redirect_uri = "your_uri"
AuthClient(authRequest).buildAuthorizeUrl() { url in }
```

<br>

### code 换 token

通过 OIDC 授权码认证，返回的 UserInfo 里面包含 access token 和 id token。如果登录 url 的 scope 里面包含 offline_access，则该接口也会返回 refresh token

```swift
func authByCode(code: String, completion: @escaping(Response) -> Void)
```

**参数**

* *code* OIDC 授权码。通过 webview 的回调获取，每个 Code 只能使用一次。

**示例**

通过实现 WKNavigationDelegate 协议回调函数获取授权码，然后通过授权码完成认证

```swift
func webView(_ webView: WKWebView, decidePolicyFor navigationAction: WKNavigationAction, decisionHandler: @escaping (WKNavigationActionPolicy) -> Void) {
    guard let url = navigationAction.request.url,
            url.absoluteString.hasPrefix(authRequest.redirect_uri) == true else {
        decisionHandler(.allow)
        return
    }
    
    if let authCode = Util.getQueryStringParameter(url: url, param: "code") {
        AuthClient(authRequest).authByCode(code: authCode) { res in
            if (code == 200) {
                
            }
        }
    }
    decisionHandler(.cancel)
}
```

<br>