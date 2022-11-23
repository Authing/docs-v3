# 使用移动端社会化登录

<!--
  警告⚠️：
  不要直接修改该文档，
  https://github.com/Authing/authing-docs-factory
  使用该项目进行生成
-->

<LastUpdated />


此端点为移动端社会化登录接口，使用第三方移动社会化登录返回的临时凭证登录，并换取用户的 `id_token` 和 `access_token`。请先阅读相应社会化登录的接入流程。


注意事项：取决于你在 Authing 创建应用时选择的**应用类型**和应用配置的**换取 token 身份验证方式**，在调用此接口时需要对客户端的身份进行不同形式的验证。

<details>
<summary>点击展开详情</summary>

<br>

你可以在 [Authing 控制台](https://console.authing.cn) 的**应用** - **自建应用** - **应用详情** - **应用配置** - **其他设置** - **授权配置**
中找到**换取 token 身份验证方式** 配置项：

> 单页 Web 应用和客户端应用隐藏，默认为 `none`，不允许修改；后端应用和标准 Web 应用可以修改此配置项。

![](https://files.authing.co/api-explorer/tokenAuthMethod.jpg)

#### 换取 token 身份验证方式为 none 时

调用此接口不需要进行额外操作。

#### 换取 token 身份验证方式为 client_secret_post 时

调用此接口时必须在 body 中传递 `client_id` 和 `client_secret` 参数，作为验证客户端身份的条件。其中 `client_id` 为应用 ID、`client_secret` 为应用密钥。

#### 换取 token 身份验证方式为 client_secret_basic 时

调用此接口时必须在 HTTP 请求头中携带 `authorization` 请求头，作为验证客户端身份的条件。`authorization` 请求头的格式如下（其中 `client_id` 为应用 ID、`client_secret` 为应用密钥。）：

```
Basic base64(<client_id>:<client_secret>)
```

结果示例：

```
Basic NjA2M2ZiMmYzY3h4eHg2ZGY1NWYzOWViOjJmZTdjODdhODFmODY3eHh4eDAzMjRkZjEyZGFlZGM3
```

JS 代码示例：

```js
'Basic ' + Buffer.from(client_id + ':' + client_secret).toString('base64');
```

</details>

  

## 方法名称

`ManagementClient.SignInByMobile`

## 请求参数

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:60px">默认值</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- | ---- | ---- | ---- | ---- | ---- |
| extIdpConnidentifier | string | 是 | - | 外部身份源连接标志符  | `wework` |
| connection | string | 是 | - | 移动端社会化登录类型：<br>- `apple`: Apple 移动端应用<br>- `wechat`: 微信移动应用<br>- `alipay`: 支付宝移动应用<br>- `wechatwork`: 企业微信移动应用<br>- `wechatwork_agency`: 企业微信移动应用（代开发模式）<br>- `lark_internal`: 飞书移动端企业自建应用<br>- `lark_public`: 飞书移动端应用商店应用<br>- `yidun`: 网易易盾一键登录<br>- `wechat_mini_program_code`: 微信小程序使用 code 登录<br>- `wechat_mini_program_phone `: 微信小程序使用手机号登录<br>- `google`: Google 移动端社会化登录<br>  | `wechat` |
| wechatPayload | <a href="#SignInByWechatPayloadDto">SignInByWechatPayloadDto</a> | 否 | - | 苹果移动端社会化登录数据，当 `connection` 为 `wechat` 的时候必填。  |  |
| applePayload | <a href="#SignInByApplePayloadDto">SignInByApplePayloadDto</a> | 否 | - | 微信移动端社会化登录数据，当 `connection` 为 `apple` 的时候必填。  |  |
| alipayPayload | <a href="#SignInByAlipayPayloadDto">SignInByAlipayPayloadDto</a> | 否 | - | 支付宝移动端社会化登录数据，当 `connection` 为 `alipay` 的时候必填。  |  |
| wechatworkPayload | <a href="#SignInByWechatworkDto">SignInByWechatworkDto</a> | 否 | - | 企业微信移动端社会化登录数据，当 `connection` 为 `wechatwork` 的时候必填。  |  |
| wechatworkAgencyPayload | <a href="#SignInByWechatworkAgencyPayloadDto">SignInByWechatworkAgencyPayloadDto</a> | 否 | - | 企业微信（代开发模式）移动端社会化登录数据，当 `connection` 为 `wechatwork_agency` 的时候必填。  |  |
| larkPublicPayload | <a href="#SignInByLarkPublicPayloadDto">SignInByLarkPublicPayloadDto</a> | 否 | - | 飞书应用商店应用移动端社会化登录数据，当 `connection` 为 `lark_public` 的时候必填。  |  |
| larkInternalPayload | <a href="#SignInByLarkInternalPayloadDto">SignInByLarkInternalPayloadDto</a> | 否 | - | 飞书自建应用移动端社会化登录数据，当 `connection` 为 `lark_internal` 的时候必填。  |  |
| yidunPayload | <a href="#SignInByYidunPayloadDto">SignInByYidunPayloadDto</a> | 否 | - | 网易易盾移动端社会化登录数据，当 `connection` 为 `yidun` 的时候必填。  |  |
| wechatMiniProgramCodePayload | <a href="#SignInByWechatMiniProgramCodePayloadDto">SignInByWechatMiniProgramCodePayloadDto</a> | 否 | - | 微信小程序使用 code 登录相关数据，当 `connection` 为 `wechat_mini_program_code` 的时候必填。  |  |
| wechatMiniProgramPhonePayload | <a href="#SignInByWechatMiniProgramPhonePayloadDto">SignInByWechatMiniProgramPhonePayloadDto</a> | 否 | - | 微信小程序使用手机号登录相关数据，当 `connection` 为 `wechat_mini_program_phone` 的时候必填。  |  |
| googlePayload | <a href="#SignInByGooglePayloadDto">SignInByGooglePayloadDto</a> | 否 | - | Google 移动端社会化登录数据，当 `connection` 为 `google` 的时候必填。  |  |
| options | <a href="#SignInByMobileOptionsDto">SignInByMobileOptionsDto</a> | 否 | - | 可选参数  |  |
| client_id | string | 否 | - | 应用 ID。当应用的「换取 token 身份验证方式」配置为 `client_secret_post` 需要传。  | `6342b8537axxxx047d314109` |
| client_secret | string | 否 | - | 应用密钥。当应用的「换取 token 身份验证方式」配置为 `client_secret_post` 需要传。  | `4203d30e5e915xxxxxx26c31c9adce68` |




## 示例代码

```csharp
using System.Threading.Tasks;
using Authing.CSharp.SDK.Models;
using Authing.CSharp.SDK.Models.Authentication;
using Authing.CSharp.SDK.Services;

namespace ConsoleApplication
{
    public class Program
    {
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
                AppSecret = "AUTHING_APP_SECRET",// Authing 应用密钥
                AppHost = "AUTHING_APP_DOMAIN", // Authing 应用域名，如 https://example.authing.cn
                RedirectUri = "AUTHING_APP_REDIRECT_URI",// Authing 应用配置的登录回调地址
            };

            // 初始化 AuthenticationClient
            AuthenticationClient authenticationClient = new AuthenticationClient(clientOptions);

            var res = await authenticationClient.SignInByMobile(new SigninByMobileDto()
            {
                Connection = SigninByMobileDto.connection.WECHAT,
                //填入外部身份源连接标志符
                ExtIdpConnidentifier = "AUTHING_EXT_IDP_CONNIDENTIFIER",
            });
        }
    }
}

```




## 请求响应

类型： `LoginTokenRespDto`

| 名称 | 类型 | 描述 |
| ---- | ---- | ---- |
| statusCode | number | 业务状态码，可以通过此状态码判断操作是否成功，200 表示成功。 |
| message | string | 描述信息 |
| apiCode | number | 细分错误码，可通过此错误码得到具体的错误类型。 |
| requestId | string | 请求 ID。当请求失败时会返回。 |
| data | <a href="#LoginTokenResponseDataDto">LoginTokenResponseDataDto</a> | 响应数据 |



示例结果：

```json
{
  "statusCode": 200,
  "message": "操作成功",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "access_token": "eyJhbGciOiJSxxxxx",
    "id_token": "eyJhbGxxxx",
    "refresh_token": "WPsGJbvpBjqXz6IJIr1UHKyrdVF",
    "token_type": "bearer",
    "expire_in": 7200
  }
}
```

## 数据结构


### <a id="SignInByWechatPayloadDto"></a> SignInByWechatPayloadDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| code | string | 否 | 微信移动端社会化登录返回的一次性临时 code   |  `1660291866076` |


### <a id="SignInByApplePayloadDto"></a> SignInByApplePayloadDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| code | string | 否 | 苹果移动端社会化登录返回的一次性临时 code   |  `1660291866076` |


### <a id="SignInByAlipayPayloadDto"></a> SignInByAlipayPayloadDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| code | string | 否 | 支付宝移动端社会化登录返回的一次性临时 code   |  `1660291866076` |


### <a id="SignInByWechatworkDto"></a> SignInByWechatworkDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| code | string | 否 | 企业微信移动端社会化登录返回的一次性临时 code   |  `1660291866076` |


### <a id="SignInByWechatworkAgencyPayloadDto"></a> SignInByWechatworkAgencyPayloadDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| code | string | 否 | 企业微信（代开发模式）移动端社会化登录返回的一次性临时 code   |  `1660291866076` |


### <a id="SignInByLarkPublicPayloadDto"></a> SignInByLarkPublicPayloadDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| code | string | 否 | 飞书应用商店应用移动端社会化登录返回的一次性临时 code   |  `1660291866076` |


### <a id="SignInByLarkInternalPayloadDto"></a> SignInByLarkInternalPayloadDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| code | string | 否 | 飞书自建应用移动端社会化登录返回的一次性临时 code   |  `1660291866076` |


### <a id="SignInByYidunPayloadDto"></a> SignInByYidunPayloadDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| token | string | 否 | 网易易盾 token   |  `1660291866076` |
| accessToken | string | 否 | 网易易盾运营商授权码   |  `1660291866076` |


### <a id="SignInByWechatMiniProgramCodePayloadDto"></a> SignInByWechatMiniProgramCodePayloadDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| encryptedData | string | 是 | 获取微信开放数据返回的加密数据（encryptedData）   |  |
| iv | string | 是 | 对称解密算法初始向量，由微信返回   |  |
| code | string | 是 | `wx.login` 接口返回的用户 `code`   |  |


### <a id="SignInByWechatMiniProgramPhonePayloadDto"></a> SignInByWechatMiniProgramPhonePayloadDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| encryptedData | string | 是 | 获取微信开放数据返回的加密数据（encryptedData）   |  |
| iv | string | 是 | 对称解密算法初始向量，由微信返回   |  |
| code | string | 是 | `wx.login` 接口返回的用户 `code`   |  |


### <a id="SignInByGooglePayloadDto"></a> SignInByGooglePayloadDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| code | string | 是 | Google 移动端社会化登录获取到的 code   |  |


### <a id="SignInByMobileOptionsDto"></a> SignInByMobileOptionsDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| scope | string | 否 | 需要请求的权限，必须包含 openid。如果需要获取手机号和 email 需要包含 phone email；如果需要 refresh_token 需要包含 offline_access。多个 scope 请用空格分隔。id_token 解码后的内容中会包含这些 scope 对应的用户信息相关的字段。<br>- `openid`: 必须包含。<br>- `profile`: 返回 birthdate，family_name，gender，given_name，locale，middle_name，name，nickname，picture，preferred_username，profile，updated_at，website，zoneinfo 字段。<br>- `username`: 返回 username。<br>- `email`: 返回 email，email_verified。<br>- `phone`: 返回 phone_number, phone_number_verified。<br>- `offline_access`: 如果存在此参数，token 接口会返回 refresh_token 字段。<br>- `roles`: 返回用户的角色列表。<br>- `external_id`: 用户在原有系统的用户 ID。<br>- `extended_fields`: 返回用户的扩展字段信息，内容为一个对象，key 为扩展字段名，value 为扩展字段值。<br>- `tenant_id`: 返回用户的租户 ID。<br>         |  `openid profile` |
| context | string | 否 | 额外请求上下文，将会传递到认证前和认证后的 [Pipeline](https://docs.authing.cn/v2/guides/pipeline/) 的 `context` 对象中。了解[如何在 Pipeline 的 `context` 参数中获取传入的额外 context](https://docs.authing.cn/v2/guides/pipeline/context-object.html)。   |  `{"source":"utm"}` |
| tenantId | string | 否 | 租户 ID   |  `625783d629f2bd1f5ddddd98c` |
| customData | object | 否 | 设置额外的用户自定义数据，你需要先在 Authing 控制台[配置自定义数据](https://docs.authing.cn/v2/guides/users/user-defined-field/)。   |  `{"school":"pku","age":"20"}` |


### <a id="LoginTokenResponseDataDto"></a> LoginTokenResponseDataDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| access_token | string | 否 | 接口调用凭据，在限制时间内被授权访问资源 API   |  `eyJhbGciOiJSxxxxx` |
| id_token | string | 否 | 用户的身份凭证，解析后会包含用户信息   |  `eyJhbGxxxx` |
| refresh_token | string | 否 | refresh_token 用于获取新的 AccessToken   |  `WPsGJbvpBjqXz6IJIr1UHKyrdVF` |
| token_type | string | 是 | token 类型   |  `bearer` |
| expire_in | number | 是 | 过期时间 单位是秒   |  `7200` |


