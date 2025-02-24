#### 授权码模式

如果在你的应用中，**认证流程需要后端服务参与**，建议使用授权码模式。

整体流程如下：

1. 在你的应用中，让用户访问登录链接，浏览器跳转到 Authing，用户在 Authing 完成**认证**。
2. Authing 服务器会签发一个临时的**授权码**，并通过浏览器重定向将授权码发送到你的应用后端。
3. 你的应用服务后端将获取到的授权码发送到 Authing 服务器，获取 AccessToken 和 IdToken，如果需要，还会返回 Refresh Token。
4. 你的应用后端现在可以通过 IdToken 知道用户的身份，后续可以保存用户会话信息。并可以重定向到前端其他页面，使用 AccessToken 调用你的后端 API 等等。

<img :src="$themeConfig.cdnUrl +'/authing-docs-v2/1.3.96/assets/img/1-3.f80500ca.png'" alt="drawing" />

#### 授权码 + PKCE 模式

如果你的应用是一个 **SPA 前端应用或移动端 App**，建议使用**授权码 + PKCE 模式**。授权码 + PKCE 模式**适合不能安全存储密钥的场景**（例如前端浏览器）。

整体流程如下：

1. 在你的应用中，让用户访问登录链接，浏览器跳转到 Authing，用户在 Authing 完成**认证**。
2. Authing 服务器会签发一个临时的**授权码**，并通过浏览器重定向将授权码发送到你的应用前端。
3. 你的应用将**授权码**和**校验码**发送到 Authing 获取 **AccessToken** 和 **IdToken**，如果需要，还会返回 Refresh token。
4. 你的应用前端现在通过 IdToken 知道了用户的身份，后续使用 Access token 换取用户信息，重定向到前端其他页面，使用 AccessToken 调用你的后端 API。

<img :src="$themeConfig.cdnUrl + '/authing-docs-v2/1.3.96/assets/img/pkce-2.7ef745c5.png'" alt="drawing" />

#### 隐式模式

如果你的应用是一个 **SPA 前端应用**，也可以使用**隐式模式**来完成用户的认证和授权。隐式模式**适合不能安全存储密钥的场景**（例如前端浏览器）。在**隐式模式**中，应用不需要使用 code 换 token，无需请求 `/oidc/token` 端点，AccessToken 和 IdToken 会直接从**认证端点**返回。

整体流程如下：

1. 在你的应用中，让用户访问登录链接，浏览器跳转到 Authing，用户在 Authing 完成**认证**。
2. Authing 服务器会直接签发用户的 AccessToken 和 IdToken，并通过浏览器重定向在 **URL hash** 中将发送到你的应用前端。
3. 你的应用从 URL 中取出 AccessToken 和 IdToken。
4. 你的应用可以将 AccessToken 与 IdToken 保存，以便后续使用，例如携带 AccessToken 访问资源服务器，携带 IdToken 请求服务端从而服务端能够辨别用户身份。

<img :src="$themeConfig.cdnUrl +'/authing-docs-v2/1.3.96/assets/img/implicit-flow.fdb49293.png'" alt="drawing" />

#### 混合模式

在某些场景你可能既希望直接从认证端点获取 AccessToken 和 IdToken，又能获取授权码 code 用于后续获取 Refresh token，建议使用**混合模式**。
在**混合模式**中，应用会收到 AccessToken 和 IdToken 与 code。应用可以选择将 code 发送给后端服务，用于从 `/oidc/token` 端点获取用户的 AccessToken、IdToken、Refresh token。

整体流程如下：

1. 在你的应用中，让用户访问登录链接，浏览器跳转到 Authing，用户在 Authing 完成**认证**。
2. Authing 服务器会直接签发一个临时的授权码 code，以及用户的 AccessToken 和 IdToken，并通过浏览器重定向在 **URL hash** 中将发送到你的应用前端。
3. 你的应用从 URL 中取出 code 和 AccessToken、IdToken。
4. 你的应用可以将 AccessToken 与 IdToken 保存，以便后续使用，例如携带 AccessToken 访问资源服务器，携带 IdToken 请求服务端从而服务端能够辨别用户身份。
5. 你的应用可以将 code 发送给后端。
6. 应用后端可以利用 code 获取用户的 AccessToken、IdToken 以及 refresh token。之后可以保存用户信息，使用 AccessToken 调用资源方的其他 API 等等。

<img :src="$themeConfig.cdnUrl +'/authing-docs-v2/1.3.96/assets/img/hybrid-flow.53529f18.png'" alt="drawing" />

#### Client Credentials 模式

Client Credentials 模式用于进行服务器对服务器间的授权（M2M 授权），期间没有用户的参与。你需要创建编程访问账号，并将 AK、SK 密钥对交给你的资源调用方。

整体流程如下：

1. 资源调用方将他的凭证 AK、SK 以及需要请求的权限 scope 发送到 Authing 授权端点。
2. 如果凭证正确，并且调用方具备资源权限，Authing 为其颁发 AccessToken。

<img :src="$themeConfig.cdnUrl +'/authing-docs-v2/1.3.96/assets/img/client-credentials-flow.1434552a.png'" alt="drawing" />

#### 密码模式

不推荐使用此模式，尽量使用其他模式。只有其他模式都无法解决问题时才会考虑使用**密码模式**。如果使用密码模式，请确保你的应用代码逻辑非常安全，不会被黑客攻击，否则将会**直接泄露用户的账密**。一般用于改造集成非常古老的应用，否则**绝对不要**把它作为你的第一选择。

整体流程如下：

1. 你的应用让用户输入账密信息。
2. 你的应用将用户账密发送到 Authing。
3. 如果账密正确，Authing 返回 token。

<img :src="$themeConfig.cdnUrl + '/authing-docs-v2/1.3.96/assets/img/client-credentials-flow.1434552a.png'" alt="drawing" />
