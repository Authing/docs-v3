---
meta:
  - name: description
    content: Authing Go SDK
---

# {{$localeConfig.brandName}} - Go SDK

<LastUpdated/>

{{$localeConfig.brandName}} Go SDK 由两部分组成：用户认证模块（AuthenticationClient） 和管理模块（ManagementClient）。

!!!include(reference/sdk/common/authentication_client_desc.md)!!!

!!!include(reference/sdk/common/management_client_desc.md)!!!

在一个项目中，ManagementClient 应该只应该被初始化一次，而 AuthenticationClient 一个实例对应一个终端用户，应该在每次请求中初始化一次。

### GitHub 地址

| 条目        | 说明                                                                                           |
| ----------- | ---------------------------------------------------------------------------------------------- |
| 支持版本    | Go 1.8 +                                                                                       |
| GitHub 地址 | [https://github.com/Authing/authing-golang-sdk](https://github.com/Authing/authing-golang-sdk) |

## 安装

```bash
go get -u github.com/Authing/authing-golang-sdk/v3
```

注：如果在安装过程中出现以下错误，请执行 `go mod tidy`

![](~@imagesZhCn/reference/go-install-error.png)

## 使用用户认证模块

!!!include(reference/sdk/common/authentication_client_desc.md)!!!

### 初始化

#### 获取应用信息

!!!include(reference/sdk/common/get_app_info.md)!!!

#### 初始化

初始化示例代码如下所示：

```go
package main

import (
   "github.com/Authing/authing-golang-sdk/v3/authentication"
)

var authenticationClient *authentication.AuthenticationClient
var options = authentication.AuthenticationClientOptions{
   AppId:       "AUTHING_APP_ID",           // Authing 应用 ID
   AppSecret:   "AUTHING_APP_SECRET",       // Authing 应用密钥
   AppHost:     "AUTHING_APP_HOST",         // Authing 应用域名，如https://example.authing.cn。注意：Host 地址为示例样式，不同版本用户池的应用 Host 地址形式有所差异，实际地址以 自建应用->应用配置->认证配置 下 `认证地址 `字段为准。
   RedirectUri: "AUTHING_APP_REDIRECT_URI", // Authing 应用配置的登录回调地址
}

func main() {

	var err error
	authenticationClient, err = authentication.NewAuthenticationClient(&options)
	if err != nil {
		panic(err)
	}
}
```

<details>
<summary>点此展开 AuthenticationClient 的完整参数及释义</summary>

- `AppId`: Authing 应用 ID，必填。
- `AppSecret`: Authing 应用密钥，必填。
- `AppHost`: Authing 应用域名，如 https://example.authing.cn，必填。注意：Host 地址为示例样式，不同版本用户池的应用 Host 地址形式有所差异，实际地址以 自建应用->应用配置->认证配置 下 `认证地址 `字段为准。
- `RedirectUri`: 认证完成后的重定向目标 URL，可选。Authing 服务器会对此链接进行校验，需要和控制台的设置保持一致。
- `LogoutRedirectUri`: 登出完成后的重定向目标 URL，可选。Authing 服务器会对此链接进行校验，需要和控制台的设置保持一致。
- `Scope`: 应用侧向 Authing 请求的权限，以空格分隔，可选。默认为 `'openid profile'`，成功获取的权限项会出现在 `access_token` 的 `scope` 字段中。下面是一些示例，更多 scope 定义参见 Authing 相关[文档](https://docs.authing.cn/v2/concepts/oidc-common-questions.html#scope-%E5%8F%82%E6%95%B0%E5%AF%B9%E5%BA%94%E7%9A%84%E7%94%A8%E6%88%B7%E4%BF%A1%E6%81%AF)。
    - `openid`: OIDC 标准规定的权限，必须包含。
    - `profile`: 获取用户的基本身份信息。
    - `offline_access`: 认证时获取 `refresh_token`，可以通过 `refresh_token` 请求新的 `access_token`。
- `Protocol`: 应用协议类型，默认为 `oidc`。可选值为 `oidc`、`oauth`、`cas`、`saml`。
- `TokenEndPointAuthMethod`: 获取 token 端点认证方式，默认为 `client_secret_post`。可选值为 `client_secret_post`, `client_secret_basic` 和 `none`。需要和你在 [Authing 控制台](https://console.authing.cn) 的**应用** - **自建应用** - **应用详情** - **应用配置** - **其他设置** - **授权配置**中的**换取 token 身份验证方式** 配置保持一致。
- `IntrospectionEndPointAuthMethod`: 校验 token 状态端点认证方式，默认为 `client_secret_post`。可选值为 `client_secret_post`, `client_secret_basic` 和 `none`。需要和你在 [Authing 控制台](https://console.authing.cn) 的**应用** - **自建应用** - **应用详情** - **应用配置** - **其他设置** - **授权配置**中的**检验 token 身份验证方式** 配置保持一致。
- `RevocationEndPointAuthMethod`: 撤回 token 端点认证方式，默认为 `client_secret_post`。可选值为 `client_secret_post`, `client_secret_basic` 和 `none`。需要和你在 [Authing 控制台](https://console.authing.cn) 的**应用** - **自建应用** - **应用详情** - **应用配置** - **其他设置** - **授权配置**中的**撤回 token 身份验证方式** 配置保持一致。
- `Timeout`: 请求超时时间，可选，单位为毫秒，默认为 10000（10 秒）。
- `InsecureSkipVerify`: 是否跳过 HTTPS 证书检测，默认为 false；如果是私有化部署的场景且证书不被信任，可以设置为 true。
- `Lang`: 接口 Message 返回语言格式（可选），可选值为 zh-CN、en-US、ja-JP 和 zh-TW，默认为 zh-CN。

</details>

### 快速开始

初始化完成用户认证模块（AuthenticationClient）之后，你可以获取 AuthenticationClient 的实例，然后调用此实例上的方法。

#### 使用在线托管登录页登录

Authing 为所有开发者提供了开箱即用的在线托管登录页，Go SDK 提供了自动生成登录链接、处理登录回调等方法。

<details>
<summary>点此展开 Authing 托管登录页的详细介绍</summary>

Authing 托管登录页是最简单，最安全的集成方式。这是因为登录流程由 Authing 维护，并由 Authing 保持安全。对于大多数集成，建议使用 Authing 托管的登录流程。你的业务系统将用户重定向到 Authing，在此用户进行身份验证，然后重定向回在控制台配置的应用回调连接。此设计被认为是安全性最佳实践。在自定义配置方面，托管模式提供了中等程度的登录注册表单自定义配置，可通过控制台配置和 CSS 进行界面自定义。[点此在线体验](https://sample-sso.authing.cn/)。

![](~@imagesZhCn/reference/sample-sso-app.jpg)

</details>

使用这种方式，Go SDK 生成了登录地址之后，可以引导用户在浏览器访问此链接。终端用户点击此链接之，会通过浏览器 302 重定向跳转到你在 Authing 托管的在线登录页进行认证，认证完成之后回调到你的应用系统。Authing 托管登录页支持 Authing 现支持所有的认证能力，包含密码认证、社会化登录认证、扫码登录等，这也是我们最推荐的认证方式。

##### 生成一次性登录链接

生成用于登录的一次性地址，并引导用户访问此链接。

```go
package main

import (
   "fmt"
   "github.com/Authing/authing-golang-sdk/v3/authentication"
)

var authenticationClient *authentication.AuthenticationClient
var options = authentication.AuthenticationClientOptions{
   AppId:       "AUTHING_APP_ID",           // Authing 应用 ID
   AppSecret:   "AUTHING_APP_SECRET",       // Authing 应用密钥
   AppHost:     "AUTHING_APP_HOST",         // Authing 应用域名，如https://example.authing.cn。注意：Host 地址为示例样式，不同版本用户池的应用 Host 地址形式有所差异，实际地址以 自建应用->应用配置->认证配置 下 `认证地址 `字段为准。
   RedirectUri: "AUTHING_APP_REDIRECT_URI", // Authing 应用配置的登录回调地址
}

func main() {

   var err error
   // 初始化 AuthenticationClient
   authenticationClient, err = authentication.NewAuthenticationClient(&options)
   if err != nil {
      panic(err)
   }

   // 生成用于登录的一次性地址，之后可以引导用户访问此地址
   result, err := authenticationClient.BuildAuthorizeUrlByOidc(&authentication.OIDCAuthURLParams{
      Scope: "openid profile offline_access",
   })
   if err != nil {
      panic("构建登录链接失败")
   }
   fmt.Println(result.Url)
}
```

##### 处理登录回调

当用户在 Authing 的托管登录页完成登录之后，将会回调到你配置的登录回调地址（及初始化 AuthenticationClient 时传入的 `redirectUri`），并且会在 URL 的 Query 参数中携带一次性临时凭证 `code`，你可以使用此 `code` 换取 `access_token`。

```go
package main

import (
   "fmt"
   "github.com/Authing/authing-golang-sdk/v3/authentication"
)

var authenticationClient *authentication.AuthenticationClient
var options = authentication.AuthenticationClientOptions{
   AppId:       "AUTHING_APP_ID",           // Authing 应用 ID
   AppSecret:   "AUTHING_APP_SECRET",       // Authing 应用密钥
   AppHost:     "AUTHING_APP_HOST",         // Authing 应用域名，如https://example.authing.cn。注意：Host 地址为示例样式，不同版本用户池的应用 Host 地址形式有所差异，实际地址以 自建应用->应用配置->认证配置 下 `认证地址 `字段为准。
   RedirectUri: "AUTHING_APP_REDIRECT_URI", // Authing 应用配置的登录回调地址
}

func main() {

	var err error
	// 初始化 AuthenticationClient
	authenticationClient, err = authentication.NewAuthenticationClient(&options)
	if err != nil {
		panic(err)
	}

	tokenResponse, err := authenticationClient.GetAccessTokenByCode("REPLACE_ME_WITH_REAL_CODE")
	if err != nil {
		panic("使用 code 换取 access_token 失败")
		return
	}
	fmt.Println(tokenResponse)
}
```

#### 邮箱 + 密码登录

除了上述使用托管登录页的认证方式，如果你需要自建登录页面，Authing 也提供接口形式的认证方法，如果认证成功，也可以拿到用户的 `access_token`。拿到 `access_token` 之后，就可以调用修改用户信息等方法了。

```go
package main

import (
	"fmt"
	"github.com/Authing/authing-golang-sdk/v3/authentication"
	"github.com/Authing/authing-golang-sdk/v3/dto"
)

var authenticationClient *AuthenticationClient
var options = AuthenticationClientOptions{
	AppId:       "AUTHING_APP_ID", // Authing 应用 ID
	AppSecret:   "AUTHING_APP_SECRET", // Authing 应用密钥
	AppHost:      "AUTHING_APP_HOST", // Authing 应用域名，如 https://example.authing.cn。注意：Host 地址为示例样式，不同版本用户池的应用 Host 地址形式有所差异，实际地址以 自建应用->应用配置->认证配置 下 `认证地址 `字段为准。
	RedirectUri: "AUTHING_APP_REDIRECT_URI", // Authing 应用配置的登录回调地址
}

func main() {

	var err error
	// 初始化 AuthenticationClient
	authenticationClient, err = authentication.NewAuthenticationClient(&options)
	if err != nil {
		panic(err)
	}

    // 调用 AuthenticationClient 的登录方法，如 SignInByEmailPassword
	signInResp := authenticationClient.SignInByEmailPassword(
		"test@example.com", 
		"test", 
		dto.SignInOptionsDto{
			PasswordEncryptType: "none",
		},
	)

	// 你可以从 signInResp 中得到用户的 access_token，此 access_token 代表了用户访问接口的凭证
	// 之后使用此 accessToken 调用 AuthenticationClient 的 SetAccessToken 方法，AuthenticationClient 便可以调用获取用户资料、修改用户资料、获取角色列表等要求登录才能访问的接口了。
	authenticationClient.SetAccessToken(signInResp.Data.AccessToken)

	getProfileResp := authenticationClient.GetProfile(&dto.GetProfileDto{})
	fmt.Println(getProfileResp)
}
```



## 使用管理模块

管理模块（ManagementClient） 以管理员（Administrator）的身份进行请求，用于管理用户池资源和执行管理任务，提供了管理用户、角色、应用、资源等方法；一般来说，你在 [{{$localeConfig.brandName}} 控制台](https://console.authing.cn/console/userpool) 中能做的所有操作，都能用此模块完成。

### 初始化

#### 获取 AK/SK

Authing Go SDK 使用 AK/SK 本地对请求数据的摘要进行签名的鉴权机制，客户端在调用 API 时，SDK 使用 AK/SK 对请求数据的摘要进行签名计算，并将签名结果传输给服务器端进行签名验证。

在 Authing 中，目前有两种类型的 AK/SK：

- 用户池全局 AK/SK：具备用户池内所有资源的全局操作权限。你可以在 [Authing 控制台](https://console.authing.cn) 的**设置** - **基础设置** - **密钥管理** 获取到**用户池 ID** 和**用户池密钥**，其中**用户池 ID**为 AK（Access Key ID）,**用户池密钥**为 SK（Access Key Secret）。
- 协作管理员 AK/SK：可针对用户池内的资源进行细粒度授权，协作管理员的 AK/SK 只能调用其被授权的 API。（正在开发中，尽情期待）

你可以根据自己的需求选择合适的 AK/SK。

<details>
<summary>点此展开如何获取用户池 ID 和用户池密钥</summary>

在 [Authing 控制台](https://console.authing.cn)的**设置** -> **基础设置** -> **密钥管理**页面，可以获取到用户池 ID（UserPool Id）和用户池密钥（UserPool Secret），如下图所示：

![](https://files.authing.co/authing-docs-v2/20220328-182903.png)

</details>

#### 初始化

初始化示例代码如下所示：

```go
package main

import (
	"github.com/Authing/authing-golang-sdk/v3/management"
)

func main() {
	options := management.ManagementClientOptions{
		AccessKeyId:     "AUTHING_ACCESS_KEY_ID", // Authing Access Key ID
		AccessKeySecret: "AUTHING_ACCESS_KEY_SECRET", // Authing Access Key Secret
	}
	
	// 初始化 ManagementClient
	client, err := management.NewManagementClient(&options)
	if err != nil {
		// The exception needs to be handled by the developer.
	}
}
```

<details>
<summary>点此展开 ManagementClient 的完整参数及释义</summary>

- `AccessKeyId`: Authing 用户池 ID 或者协作管理员的 Access Key ID。
- `AccessKeySecret`: Authing 用户池密钥或者协作管理员的 Access Key Secret。
- `Timeout`: 请求超时时间，可选，单位为毫秒，默认为 10000（10 秒）。
- `Host`: Authing 服务器地址，默认为 `https://api.authing.cn`。如果你使用的是 Authing 公有云版本，请忽略此参数。如果你使用的是私有化部署的版本，此参数必填，格式如下: https://authing-api.my-authing-service.com（最后不带斜杠 /）。
- `Lang`: 接口 Message 返回语言格式（可选），可选值为 zh-CN、en-US、ja-JP 和 zh-TW，默认为 zh-CN。

</details>

### 快速开始

初始化完成 ManagementClient 之后，你可以获取 ManagementClient 的实例，然后调用此实例上的方法。

#### 获取用户列表

```go
package main

import (
	"fmt"
	"github.com/Authing/authing-golang-sdk/v3/dto"
	"github.com/Authing/authing-golang-sdk/v3/management"
)

func main() {
	options := management.ManagementClientOptions{
		AccessKeyId:     "AUTHING_ACCESS_KEY_ID", // Authing Access Key ID
		AccessKeySecret: "AUTHING_ACCESS_KEY_SECRET", // Authing Access Key Secret
	}
	
	// 初始化 ManagementClient
	client, err := management.NewManagementClient(&options)
	if err != nil {
		// The exception needs to be handled by the developer.
	}

    // 获取用户列表
	request := dto.ListUsersRequestDto{
		Options: dto.ListUsersOptionsDto{
			Pagination: dto.PaginationDto{
				Page:  1,
				Limit: 10,
			},
		},
	}
	response := client.ListUsers(&request)
	fmt.Println(response)
}
```

#### 创建角色

```go
package main

import (
	"fmt"
	"github.com/Authing/authing-golang-sdk/v3/dto"
	"github.com/Authing/authing-golang-sdk/v3/management"
)

func main() {
	options := management.ManagementClientOptions{
		AccessKeyId:     "AUTHING_ACCESS_KEY_ID", // Authing Access Key ID
		AccessKeySecret: "AUTHING_ACCESS_KEY_SECRET", // Authing Access Key Secret
	}
	
	// 初始化 ManagementClient
	client, err := management.NewManagementClient(&options)
	if err != nil {
		// The exception needs to be handled by the developer.
	}

    // 创建角色
	request := dto.CreateRoleDto{
		Code:        "admin",
		Description: "管理员",
	}
	response := client.CreateRole(&request)
	fmt.Println(response)
}
```

## 错误处理

Authing Go SDK 方法在请求接口时，不会抛出 [Error](https://go.dev/doc/tutorial/handle-errors)（网络错误除外），除非特殊说明，所有的方法返回值都会包含两个状态码：`statusCode` 和 `apiCode`：

- `statusCode`: `statusCode` 为请求状态码，不包含具体的业务错误信息。**当且仅当 `statusCode` 为 `200` 时，表示接口请求成功**，此时不会带有 `apiCode`。`statusCode` 不为 `200` 的情况下，
  表示接口请求失败或者需要进行额外操作（比如登录接口需要进行 MFA 二次验证），你需要对此进行关注，进行必要的错误处理。每个 `statusCode` 对应一个类型的错误，
  具体的错误分类请见下文。在大多数情况下，除非你需要对某些特定的异常做出响应，否则你只需要关注 `statusCode`，不需要关注 `apiCode`。
- `apiCode`: `apiCode` 为业务状态码，每个 `apiCode` 具备特定的错误含义，具体的 `apiCode` 列表见下文。`apiCode` 只会在 `statusCode` 非 200 且错误原因具备业务含义时才会返回。
- `requestId`: 请求 ID，当请求失败时会返回。如果你在使用 Node SDK 的过程中遇到了错误，可以使用此 `requestId` 咨询 Authing 开发人员。

详细的 `statusCode` 列表和 `apiCode` 请见[错误码](../../error-code.md)。

## 私有化部署

如果你使用的是私有化部署的 Authing IDaaS 服务，需要在初始化时指定 Authing 私有化实例的 API 地址，如下所示：

```go
package main

import (
	"github.com/Authing/authing-golang-sdk/v3/dto"
	"github.com/Authing/authing-golang-sdk/v3/management"
)

func main() {
	options := management.ManagementClientOptions{
		AccessKeyId:     "AUTHING_ACCESS_KEY_ID", // Authing Access Key ID
		AccessKeySecret: "AUTHING_ACCESS_KEY_SECRET", // Authing Access Key Secret

		// 设置私有化 Authing 服务的地址（最后不带斜杠 /）
		Host: "https://api.your-authing-service.com"
	}
	
	// 初始化 ManagementClient
	client, err := management.NewManagementClient(&options)
	if err != nil {
		// The exception needs to be handled by the developer.
	}
}
```

如果你不清楚如何获取，可以联系 Authing IDaaS 服务管理员。

## 获取帮助

有任何建议或者问题反馈，欢迎在 [Authing 论坛](https://forum.authing.cn/)中提出。
