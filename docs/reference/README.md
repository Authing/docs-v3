# 开发集成概述

<LastUpdated/>

::: hint-info
为了给开发者持续提供更全面、更开发者友好的开放能力，Authing V3 版本的 API、SDK 已于 2022 年 10 月 24 日正式上线。若你仍希望使用旧版 API、SDK， 可[点击此处跳转 〉](https://docs.authing.cn/v2/reference/)。
Authing API Explorer 已于 2023 年 2 月 12 日正式上线，面向 Authing 开发者用户使用链路提供：API 发现、API 调试、API 集成等能力，帮助开发者用户更好、更快使用 Authing 产品，[点击此处跳转 〉](https://api-explorer.authing.cn/)。
:::

## 新版 API & SDK 特性

![]({{ $themeConfig.filesUrl }}/api-explorer/what-is-authing.jpg)
Authing 的产品演进到了第三代，但无论到了第几代，核心的**以开发者为中心**都是贯穿全产品线的重要**产品设计哲学**。也就是说，不论将来 Authing 的产品如何演进，定位如何变化，「以开发者为中心」将像鱼骨一样，不论伸出多少分支，总有一个「主线」贯穿全程。

::: hint-success
Authing By developers, for developers.
:::

### V3 Open API

1. 覆盖全面：累计达 200 余个 API，覆盖终端用户、控制台几乎所有使用场景。
2. 提升安全性：修复历史安全漏洞；新增 AK/SK 机制进行鉴权，防中间人拦截、防重放攻击。
3. 开发者友好：

- 配套丰富的全新 API 文档，方便开发者更快上手。
- 每个接口、每个参数、每个返回值都有类型和说明。
- 一致的 API 设计语言，更加语义化，使用起来更加流畅。
- 提供面向开发者的 [API Explorer](https://api-explorer.authing.cn/) 在线调试中心，高效满足开发者的 API 调试、API 学习等需求。

4. 提高生产力： 完全遵循 [OpenAPI](https://swagger.io/specification/) 规范，使用 OpenAPI 标准定义接口描述、参数、返回值，基于这此元数据可以进行任意二次开发，如生成文档、SDK 等。

### 各语言新版 SDK

1. 覆盖全面：提供新版前端 JavaScript SDK、移动端安卓/iOS SDK、后端 Java、Node.js、Go、Python、PHP、C# SDK。
2. 提升安全性：采用 AK/SK 机制在本地对请求数据进行签名，防中间人拦截、防重放攻击。
3. 开发者友好：

- 配套全新的 SDK 文档，方便开发者更快上手。
- 不同 SDK 之间初始化、方法命名、请求参数、返回结果均保持一致，给到开发者完全一致的使用体验。
- 类型注解更加完善，每个方法每个参数每个返回值都有类型注解。

## 开启全新的开发体验

Authing V3 API & SDK 将管理员操作场景和终端用户使用场景做了区分，分为以下两个模块：

- 用户认证模块（Authentication）：指的是全部以终端用户（End User）的身份进行请求。Authing 用户认证 API & SDK 提供了登录、注册、登出、MFA、检查登录态、OIDC 标准协议等所有与认证相关的接口。
- 管理模块（Management）：指的是以管理员（Administrator）的身份进行请求，用于管理用户池资源和执行管理任务，如管理用户、组织机构、角色、应用、权限、用户池配置等。一般来说，你在 [Authing 控制台](https://console.authing.cn)中能做的所有操作，都能用此模块完成。

### 集成认证到你的应用中

我们推荐使用 {{$localeConfig.brandName}} 提供的 [前端登录组件 Guard](https://docs.authing.co/v2/reference/guard/v2/) （当前 Guard 集成的是 Authing V2 版认证 API，最新基于 V3 版 API 的 Guard 正在开发中，敬请期待！），它为开发者屏蔽了很多底层认证的实现细节，同时也包括繁琐的 UI 开发；如果你需要自己实现登录界面 UI，可以使用我们为各语言提供的 `Authentication SDK`；在单点登录场景下，我们提供 [单点登录 SDK](https://docs.authing.co/v2/reference/sdk-for-sso-spa.html) 帮助你快速实现单点登录。

一些场景的认证场景包括：

- 用户登录之后获取身份凭证 `access_token`。
- 使用用户的 `access_token` 获取用户信息。
- 使用多因素认证（MFA）作为额外认证手段。

### 管理你在 {{$localeConfig.brandName}} 中的资源

所有你在 {{$localeConfig.brandName}} 控制台进行的操作，基本上都可以使用管理 API & SDK 完成，从而实现自动化的运维管理。

一些典型的管理场景包括：

- 管理你在 Authing 中的角色。
- 查看审计日志和用户行为日志。
- 管理用户目录等。

## 获取帮助

有任何建议或者问题反馈，欢迎在 [Authing 论坛](https://forum.authing.cn/)中提出。
