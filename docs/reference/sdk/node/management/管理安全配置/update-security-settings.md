# 修改安全配置

<!--
  警告⚠️：
  不要直接修改该文档，
  https://github.com/Authing/authing-docs-factory
  使用该项目进行生成
-->

<LastUpdated />

> 此文档根据 https://github.com/authing/authing-docs-factory 基于 https://api-explorer.authing.cn V3 API 自动生成，和 API 参数、返回结果保持一致，如此文档描述有误，请以 V3 API 为准。

可选安全域、Authing Token 有效时间（秒）、验证码长度、验证码尝试次数、用户修改邮箱的安全策略、用户修改手机号的安全策略、Cookie 过期时间设置、是否禁止用户注册、频繁注册检测配置、验证码注册后是否要求用户设置密码、未验证的邮箱登录时是否禁止登录并发送认证邮件、用户自助解锁配置、Authing 登录页面是否开启登录账号选择、APP 扫码登录安全配置进行修改安全配置

## 方法名称

`ManagementClient.updateSecuritySettings`

## 请求参数

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:60px">默认值</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- | ---- | ---- | ---- | ---- | ---- |
| allowedOrigins | string[] | 否 | - | 安全域（CORS）  | `["https://example.com"]` |
| authingTokenExpiresIn | number | 否 | 129600 | Authing Token 有效时间（秒）  | `1296000` |
| verifyCodeLength | number | 否 | 6 | 验证码长度。包含短信验证码、邮件验证码和图形验证码。  | `6` |
| verifyCodeMaxAttempts | number | 否 | 1 | 验证码尝试次数。在一个验证码有效周期内（默认为 60 s），用户输入验证码错误次数超过此阈值之后，将会导致当前验证码失效，需要重新发送。  | `1` |
| changeEmailStrategy | <a href="#ChangeEmailStrategyDto">ChangeEmailStrategyDto</a> | 否 | - | 用户修改邮箱的安全策略  | `{"verifyOldEmail":true}` |
| changePhoneStrategy | <a href="#ChangePhoneStrategyDto">ChangePhoneStrategyDto</a> | 否 | - | 用户修改手机号的安全策略  | `{"verifyOldPhone":true}` |
| cookieSettings | <a href="#CookieSettingsDto">CookieSettingsDto</a> | 否 | - | Cookie 过期时间设置  |  |
| registerDisabled | boolean | 否 | - | 是否禁止用户注册，开启之后，用户将无法自主注册，只能管理员为其创建账号。针对 B2B 和 B2E 类型用户池，默认开启。  |  |
| registerAnomalyDetection | <a href="#RegisterAnomalyDetectionConfigDto">RegisterAnomalyDetectionConfigDto</a> | 否 | - | 频繁注册检测配置  |  |
| completePasswordAfterPassCodeLogin | boolean | 否 | - | 验证码注册后是否要求用户设置密码（仅针对 Authing 登录页和 Guard 有效，不针对 API 调用）。  |  |
| loginAnomalyDetection | <a href="#LoginAnomalyDetectionConfigDto">LoginAnomalyDetectionConfigDto</a> | 否 | - | 登录防暴破配置  |  |
| loginRequireEmailVerified | boolean | 否 | - | 当使用邮箱登录时，未验证的邮箱登录时是否禁止登录并发送认证邮件。当用户收到邮件并完成验证之后，才能进行登录。  |  |
| selfUnlockAccount | <a href="#SelfUnlockAccountConfigDto">SelfUnlockAccountConfigDto</a> | 否 | - | 用户自助解锁配置。注：只有绑定了手机号/邮箱的用户才可以自助解锁  |  |
| enableLoginAccountSwitch | boolean | 否 | - | Authing 登录页面是否开启登录账号选择  |  |
| qrcodeLoginStrategy | <a href="#QrcodeLoginStrategyDto">QrcodeLoginStrategyDto</a> | 否 | - | APP 扫码登录安全配置  |  |




## 示例代码

```ts
import { ManagementClient, Models } from 'authing-node-sdk';

// 初始化 ManagementClient
const managementClient = new ManagementClient({
  // 需要替换成你的 Authing Access Key ID
  accessKeyId: 'AUTHING_ACCESS_KEY_ID',
  // 需要替换成你的 Authing Access Key Secret
  accessKeySecret: 'AUTHING_ACCESS_KEY_SECRET',
  // 如果是私有化部署的客户，需要设置 Authing 服务域名
  // host: 'https://api.your-authing-service.com'
});

(async () => {

  const result = await managementClient.updateSecuritySettings({
    authingTokenExpiresIn: 1296000,
    verifyCodeLength: 4,
    verifyCodeMaxAttempts: 1,
    changeEmailStrategy: {
      verifyOldEmail: true
    }
  });


  console.log(JSON.stringify(result, null, 2));
})();

```




## 请求响应

类型： `SecuritySettingsRespDto`

| 名称 | 类型 | 描述 |
| ---- | ---- | ---- |
| statusCode | number | 业务状态码，可以通过此状态码判断操作是否成功，200 表示成功。 |
| message | string | 描述信息 |
| apiCode | number | 细分错误码，可通过此错误码得到具体的错误类型（成功请求不返回）。详细错误码列表请见：[API Code 列表](https://api-explorer.authing.cn/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId | string | 请求 ID。当请求失败时会返回。 |
| data | <a href="#SecuritySettingsDto">SecuritySettingsDto</a> | 响应数据 |



示例结果：

```json
{
  "statusCode": 200,
  "message": "操作成功",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "allowedOrigins": "https://example.com \n https://example.com",
    "authingTokenExpiresIn": 1296000,
    "verifyCodeLength": 6,
    "verifyCodeMaxAttempts": 1,
    "changeEmailStrategy": {
      "verifyOldEmail": true
    },
    "changePhoneStrategy": {
      "verifyOldPhone": true
    },
    "cookieSettings": {
      "cookieExpiresIn": 1209600
    },
    "registerAnomalyDetection": {
      "limit": 50,
      "timeInterval": 300
    },
    "loginAnomalyDetection": {
      "loginFailStrategy": "captcha",
      "robotVerify": "condition_set",
      "accountLock": "condition_set",
      "loginFailCheck": {
        "limit": 50,
        "timeInterval": 300,
        "unit": "Second"
      },
      "loginPasswordFailCheck": {
        "limit": 50,
        "timeInterval": 300,
        "unit": "Second"
      },
      "accountLockLoginPasswordFailCheck": {
        "limit": 50,
        "timeInterval": 300,
        "unit": "Second"
      },
      "robotVerifyLoginPasswordFailCheck": {
        "limit": 50,
        "timeInterval": 300,
        "unit": "Second"
      },
      "robotVerifyLoginIpWhitelistCheck": {
        "ipWhitelist": "132.133.123.144,255.255.255.255"
      }
    },
    "selfUnlockAccount": {
      "strategy": "captcha"
    },
    "qrcodeLoginStrategy": {
      "qrcodeExpiresIn": 120,
      "qrcodeExpiresInUnit": "Second",
      "ticketExpiresIn": 300,
      "ticketExpiresInUnit": "Second",
      "allowExchangeUserInfoFromBrowser": true,
      "returnFullUserInfo": true
    }
  }
}
```

## 数据结构


### <a id="ChangeEmailStrategyDto"></a> ChangeEmailStrategyDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| verifyOldEmail | boolean | 是 | 修改邮箱时是否验证旧邮箱   |  `true` |


### <a id="ChangePhoneStrategyDto"></a> ChangePhoneStrategyDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| verifyOldPhone | boolean | 是 | 修改手机号时是否验证旧手机号   |  `true` |


### <a id="CookieSettingsDto"></a> CookieSettingsDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| cookieExpiresIn | number | 是 | Cookie 有效时间：用户登录状态的有效时间（默认为 1209600 秒/ 14 天），过期后用户需要重新登录。对于应用面板及已加入应用面板的应用，将使用此 cookie  过期时间。   |  `1209600` |
| cookieExpiresOnBrowserSession | boolean | 是 | Cookie 过期时间基于浏览器会话：当前浏览器关闭后立即过期，下次打开需重新登录。   |  |


### <a id="RegisterAnomalyDetectionConfigDto"></a> RegisterAnomalyDetectionConfigDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| enabled | boolean | 是 | 是否开启频繁注册限制   |  |
| limit | number | 是 | 在一定时间周期内，对于同一个 IP，最多只能注册多少次。   |  `50` |
| timeInterval | number | 是 | 限定周期时间长度，单位为秒。   |  `300` |


### <a id="LoginAnomalyDetectionConfigDto"></a> LoginAnomalyDetectionConfigDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| loginFailStrategy | string | 是 | 登录安全策略。当用户触发登录失败频率检测时，采用什么策略。目前支持验证码和锁定账号两种策略。当选择账号锁定策略的时候，只可以开启「登录密码错误限制」。此字段标志为过时，但是此字段还是必传的，如果使用新版本逻辑可以默认写一个。新版本账号锁定使用 accountLock，验证码使用 robotVerify   | captcha |
| robotVerify | string | 是 | 人机验证（验证码）策略。可选值，disable（不开启）/condition_set（条件开启）/always_enable （始终开启）   |  `condition_set` |
| accountLock | string | 是 | 账号锁定策略。可选值，disable（不开启）/condition_set（条件开启）   |  `condition_set` |
| loginFailCheck |  | 是 | 登录失败次数限制：当用户登录输入信息错误的时候会被按照「登录安全策略」规则触发相对应的策略。 嵌套类型：<a href="#LoginFailCheckConfigDto">LoginFailCheckConfigDto</a>。  |  |
| loginPasswordFailCheck |  | 是 | 登录密码错误限制：当用户登录输入密码信息错误的时候会被按照「登录安全策略」规则触发相对应的策略。此字段被标志为过时，见 accountLockLoginPasswordFailCheck/ robotVerifyLoginPasswordFailCheck 嵌套类型：<a href="#LoginPassowrdFailCheckConfigDto">LoginPassowrdFailCheckConfigDto</a>。  |  |
| accountLockLoginPasswordFailCheck |  | 否 | 账号锁定-登录密码错误限制：当用户登录输入密码信息错误的时候会被按照「登录安全策略」规则触发相对应的策略。 嵌套类型：<a href="#LoginPassowrdFailCheckConfigDto">LoginPassowrdFailCheckConfigDto</a>。  |  |
| robotVerifyLoginPasswordFailCheck |  | 是 | 人机验证（验证码）-登录密码错误限制：当用户登录输入密码信息错误的时候会被按照「登录安全策略」规则触发相对应的策略。 嵌套类型：<a href="#LoginPassowrdFailCheckConfigDto">LoginPassowrdFailCheckConfigDto</a>。  |  |
| robotVerifyLoginIpWhitelistCheck |  | 是 | 人机验证（验证码）- ip 白名单：当登录者 ip 不在白名单会触发人机验证。 嵌套类型：<a href="#LoginIpWhitelistCheckConfigDto">LoginIpWhitelistCheckConfigDto</a>。  |  |
| robotVerifyLoginTimeCheckEnable | boolean | 是 | 是否开启登录时间限制   |  |
| robotVerifyloginWeekStartEndTime | array | 是 | 登录时间限制周几+起始时间数组   |  |


### <a id="LoginFailCheckConfigDto"></a> LoginFailCheckConfigDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| enabled | boolean | 是 | 是否开启登录失败次数限制。   |  |
| limit | number | 是 | 在一定时间周期内，对于同一个 IP，最多登录失败多少次后会触发安全策略。   |  `50` |
| timeInterval | number | 是 | 限定周期时间长度，单位为秒。   |  `300` |
| unit | string | 否 | 时间长度单位。Second/Minute/Hour/Day，仅仅做显示，timeInterval的单位还是秒   |  `Second` |


### <a id="LoginPassowrdFailCheckConfigDto"></a> LoginPassowrdFailCheckConfigDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| enabled | boolean | 是 | 是否开启登录密码错误限制   |  |
| limit | number | 是 | 密码错误次数最大限制   |  `50` |
| timeInterval | number | 是 | 限定周期时间长度，单位为秒。   |  `300` |
| unit | string | 否 | 时间长度单位。Second/Minute/Hour/Day，仅仅做显示，timeInterval的单位还是秒   |  `Second` |


### <a id="LoginIpWhitelistCheckConfigDto"></a> LoginIpWhitelistCheckConfigDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| enabled | boolean | 是 | 是否开启登录 ip 白名单验证   |  |
| ipWhitelist | string | 是 | 人机验证 ip 白名单   |  `132.133.123.144,255.255.255.255` |


### <a id="SelfUnlockAccountConfigDto"></a> SelfUnlockAccountConfigDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| enabled | boolean | 是 | 是否允许用户自助解锁账号。   |  |
| strategy | string | 是 | 自助解锁方式，目前支持原密码 + 验证码和验证码两种方式。   | captcha |


### <a id="QrcodeLoginStrategyDto"></a> QrcodeLoginStrategyDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| qrcodeExpiresIn | number | 是 | 二维码有效时间，单位秒   |  `120` |
| qrcodeExpiresInUnit | string | 否 | 时间长度单位，Second/Minute/Hour/Day，仅做显示用   |  `Second` |
| ticketExpiresIn | number | 是 | ticket 有效时间，单位秒   |  `300` |
| ticketExpiresInUnit | string | 否 | 时间长度单位，Second/Minute/Hour/Day，仅作显示用   |  `Second` |
| allowExchangeUserInfoFromBrowser | boolean | 是 | Web 轮询接口返回完整用户信息，详情见此文档：Web 轮询接口返回完整用户信息   |  `true` |
| returnFullUserInfo | boolean | 是 | 允许在浏览器使用 ticket 换取用户信息，详情见此文档：Web 轮询接口返回完整用户信息   |  `true` |


### <a id="SecuritySettingsDto"></a> SecuritySettingsDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| allowedOrigins | string | 否 | 安全域（CORS）   |  `https://example.com 
 https://example.com` |
| authingTokenExpiresIn | number | 是 | Authing Token 有效时间（秒）   |  `1296000` |
| verifyCodeLength | number | 是 | 验证码长度。包含短信验证码、邮件验证码和图形验证码。   |  `6` |
| verifyCodeMaxAttempts | number | 是 | 验证码尝试次数。在一个验证码有效周期内（默认为 60 s），用户输入验证码错误次数超过此阈值之后，将会导致当前验证码失效，需要重新发送。   |  `1` |
| changeEmailStrategy |  | 是 | 用户修改邮箱的安全策略 嵌套类型：<a href="#ChangeEmailStrategyDto">ChangeEmailStrategyDto</a>。  |  `{"verifyOldEmail":true}` |
| changePhoneStrategy |  | 是 | 用户修改手机号的安全策略 嵌套类型：<a href="#ChangePhoneStrategyDto">ChangePhoneStrategyDto</a>。  |  `{"verifyOldPhone":true}` |
| cookieSettings |  | 否 | Cookie 过期时间设置 嵌套类型：<a href="#CookieSettingsDto">CookieSettingsDto</a>。  |  |
| registerDisabled | boolean | 是 | 是否禁止用户注册，开启之后，用户将无法自主注册，只能管理员为其创建账号。针对 B2B 和 B2E 类型用户池，默认开启。   |  |
| registerAnomalyDetection |  | 是 | 频繁注册检测配置 嵌套类型：<a href="#RegisterAnomalyDetectionConfigDto">RegisterAnomalyDetectionConfigDto</a>。  |  |
| completePasswordAfterPassCodeLogin | boolean | 是 | 验证码注册后是否要求用户设置密码（仅针对 Authing 登录页和 Guard 有效，不针对 API 调用）。   |  |
| loginAnomalyDetection |  | 是 | 登录防暴破配置 嵌套类型：<a href="#LoginAnomalyDetectionConfigDto">LoginAnomalyDetectionConfigDto</a>。  |  |
| loginRequireEmailVerified | boolean | 是 | 当使用邮箱登录时，未验证的邮箱登录时是否禁止登录并发送认证邮件。当用户收到邮件并完成验证之后，才能进行登录。   |  |
| selfUnlockAccount |  | 是 | 用户自助解锁配置。注：只有绑定了手机号/邮箱的用户才可以自助解锁 嵌套类型：<a href="#SelfUnlockAccountConfigDto">SelfUnlockAccountConfigDto</a>。  |  |
| enableLoginAccountSwitch | boolean | 是 | Authing 登录页面是否开启登录账号选择   |  |
| qrcodeLoginStrategy |  | 是 | APP 扫码登录安全配置 嵌套类型：<a href="#QrcodeLoginStrategyDto">QrcodeLoginStrategyDto</a>。  |  |


### <a id="ChangeEmailStrategyDto"></a> ChangeEmailStrategyDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| verifyOldEmail | boolean | 是 | 修改邮箱时是否验证旧邮箱   |  `true` |


### <a id="ChangePhoneStrategyDto"></a> ChangePhoneStrategyDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| verifyOldPhone | boolean | 是 | 修改手机号时是否验证旧手机号   |  `true` |


### <a id="CookieSettingsDto"></a> CookieSettingsDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| cookieExpiresIn | number | 是 | Cookie 有效时间：用户登录状态的有效时间（默认为 1209600 秒/ 14 天），过期后用户需要重新登录。对于应用面板及已加入应用面板的应用，将使用此 cookie  过期时间。   |  `1209600` |
| cookieExpiresOnBrowserSession | boolean | 是 | Cookie 过期时间基于浏览器会话：当前浏览器关闭后立即过期，下次打开需重新登录。   |  |


### <a id="RegisterAnomalyDetectionConfigDto"></a> RegisterAnomalyDetectionConfigDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| enabled | boolean | 是 | 是否开启频繁注册限制   |  |
| limit | number | 是 | 在一定时间周期内，对于同一个 IP，最多只能注册多少次。   |  `50` |
| timeInterval | number | 是 | 限定周期时间长度，单位为秒。   |  `300` |


### <a id="LoginAnomalyDetectionConfigDto"></a> LoginAnomalyDetectionConfigDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| loginFailStrategy | string | 是 | 登录安全策略。当用户触发登录失败频率检测时，采用什么策略。目前支持验证码和锁定账号两种策略。当选择账号锁定策略的时候，只可以开启「登录密码错误限制」。此字段标志为过时，但是此字段还是必传的，如果使用新版本逻辑可以默认写一个。新版本账号锁定使用 accountLock，验证码使用 robotVerify   | captcha |
| robotVerify | string | 是 | 人机验证（验证码）策略。可选值，disable（不开启）/condition_set（条件开启）/always_enable （始终开启）   |  `condition_set` |
| accountLock | string | 是 | 账号锁定策略。可选值，disable（不开启）/condition_set（条件开启）   |  `condition_set` |
| loginFailCheck |  | 是 | 登录失败次数限制：当用户登录输入信息错误的时候会被按照「登录安全策略」规则触发相对应的策略。 嵌套类型：<a href="#LoginFailCheckConfigDto">LoginFailCheckConfigDto</a>。  |  |
| loginPasswordFailCheck |  | 是 | 登录密码错误限制：当用户登录输入密码信息错误的时候会被按照「登录安全策略」规则触发相对应的策略。此字段被标志为过时，见 accountLockLoginPasswordFailCheck/ robotVerifyLoginPasswordFailCheck 嵌套类型：<a href="#LoginPassowrdFailCheckConfigDto">LoginPassowrdFailCheckConfigDto</a>。  |  |
| accountLockLoginPasswordFailCheck |  | 否 | 账号锁定-登录密码错误限制：当用户登录输入密码信息错误的时候会被按照「登录安全策略」规则触发相对应的策略。 嵌套类型：<a href="#LoginPassowrdFailCheckConfigDto">LoginPassowrdFailCheckConfigDto</a>。  |  |
| robotVerifyLoginPasswordFailCheck |  | 是 | 人机验证（验证码）-登录密码错误限制：当用户登录输入密码信息错误的时候会被按照「登录安全策略」规则触发相对应的策略。 嵌套类型：<a href="#LoginPassowrdFailCheckConfigDto">LoginPassowrdFailCheckConfigDto</a>。  |  |
| robotVerifyLoginIpWhitelistCheck |  | 是 | 人机验证（验证码）- ip 白名单：当登录者 ip 不在白名单会触发人机验证。 嵌套类型：<a href="#LoginIpWhitelistCheckConfigDto">LoginIpWhitelistCheckConfigDto</a>。  |  |
| robotVerifyLoginTimeCheckEnable | boolean | 是 | 是否开启登录时间限制   |  |
| robotVerifyloginWeekStartEndTime | array | 是 | 登录时间限制周几+起始时间数组   |  |


### <a id="LoginFailCheckConfigDto"></a> LoginFailCheckConfigDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| enabled | boolean | 是 | 是否开启登录失败次数限制。   |  |
| limit | number | 是 | 在一定时间周期内，对于同一个 IP，最多登录失败多少次后会触发安全策略。   |  `50` |
| timeInterval | number | 是 | 限定周期时间长度，单位为秒。   |  `300` |
| unit | string | 否 | 时间长度单位。Second/Minute/Hour/Day，仅仅做显示，timeInterval的单位还是秒   |  `Second` |


### <a id="LoginPassowrdFailCheckConfigDto"></a> LoginPassowrdFailCheckConfigDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| enabled | boolean | 是 | 是否开启登录密码错误限制   |  |
| limit | number | 是 | 密码错误次数最大限制   |  `50` |
| timeInterval | number | 是 | 限定周期时间长度，单位为秒。   |  `300` |
| unit | string | 否 | 时间长度单位。Second/Minute/Hour/Day，仅仅做显示，timeInterval的单位还是秒   |  `Second` |


### <a id="LoginIpWhitelistCheckConfigDto"></a> LoginIpWhitelistCheckConfigDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| enabled | boolean | 是 | 是否开启登录 ip 白名单验证   |  |
| ipWhitelist | string | 是 | 人机验证 ip 白名单   |  `132.133.123.144,255.255.255.255` |


### <a id="SelfUnlockAccountConfigDto"></a> SelfUnlockAccountConfigDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| enabled | boolean | 是 | 是否允许用户自助解锁账号。   |  |
| strategy | string | 是 | 自助解锁方式，目前支持原密码 + 验证码和验证码两种方式。   | captcha |


### <a id="QrcodeLoginStrategyDto"></a> QrcodeLoginStrategyDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| qrcodeExpiresIn | number | 是 | 二维码有效时间，单位秒   |  `120` |
| qrcodeExpiresInUnit | string | 否 | 时间长度单位，Second/Minute/Hour/Day，仅做显示用   |  `Second` |
| ticketExpiresIn | number | 是 | ticket 有效时间，单位秒   |  `300` |
| ticketExpiresInUnit | string | 否 | 时间长度单位，Second/Minute/Hour/Day，仅作显示用   |  `Second` |
| allowExchangeUserInfoFromBrowser | boolean | 是 | Web 轮询接口返回完整用户信息，详情见此文档：Web 轮询接口返回完整用户信息   |  `true` |
| returnFullUserInfo | boolean | 是 | 允许在浏览器使用 ticket 换取用户信息，详情见此文档：Web 轮询接口返回完整用户信息   |  `true` |


