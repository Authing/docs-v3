# 获取用户池租户配置信息

<!--
  警告⚠️：
  不要直接修改该文档，
  https://github.com/Authing/authing-docs-factory
  使用该项目进行生成
-->

<LastUpdated />

> 此文档根据 https://github.com/authing/authing-docs-factory 基于 https://api-explorer.authing.cn V3 API 自动生成，和 API 参数、返回结果保持一致，如此文档描述有误，请以 V3 API 为准。

根据用户池 ID 获取用户池多租户配置信息

## 方法名称

`ManagementClient.userpoll_tenant_config`

## 请求参数

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:60px">默认值</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- | ---- | ---- | ---- | ---- | ---- |




## 请求响应

类型： `UserPoolTenantConfigDtoRespDto`

| 名称 | 类型 | 描述 |
| ---- | ---- | ---- |
| statusCode | number | 业务状态码，可以通过此状态码判断操作是否成功，200 表示成功。 |
| message | string | 描述信息 |
| apiCode | number | 细分错误码，可通过此错误码得到具体的错误类型（成功请求不返回）。详细错误码列表请见：[API Code 列表](https://api-explorer.authing.cn/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| data | <a href="#UserPoolTenantConfigDto">UserPoolTenantConfigDto</a> | 响应数据 |



示例结果：

```json
{
  "statusCode": 200,
  "message": "操作成功",
  "apiCode": 20001,
  "data": {
    "userPoolId": "62b40xxxxxxxxxxxd16f57c7",
    "isUserPoolAsTenant": true,
    "enableSwitchType": "[\"tenant-app\",\"tenant-console\",\"tenant-launpad\"]",
    "guardVersion": "v2",
    "ssoPageCustomizationSettings": {
      "hideIdp": true,
      "hideForgetPassword": true,
      "autoRegisterThenLogin": true,
      "hideSocialLogin": true,
      "hideLoginByPhoneCode": true,
      "hideRegister": true,
      "hideUserPasswordLogin": true,
      "hideWxMpScanLogin": true,
      "hideRegisterByPhone": true,
      "hideRegisterByEmail": true
    },
    "loginConfig": {
      "enabledBasicLoginMethods": "[\"EMAIL_CODE\",\"EMAIL_PASSWORD\"]",
      "defaultLoginMethod": {
        "connectionType": "QRCODE",
        "qrcodeExtIdpConnId": "6303a2bf2xxxxx7f665f01bf1"
      },
      "enabledExtIdpConns": "[\"6303a2bf2xxxx7f665f01bf1\",\"6321397b6xxxx1b8481ccfc0\"]"
    }
  }
}
```

## 数据结构


### <a id="UserPoolTenantConfigDto"></a> UserPoolTenantConfigDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| userPoolId | string | 是 | UserPool ID   |  `62b40xxxxxxxxxxxd16f57c7` |
| isUserPoolAsTenant | boolean | 是 | 用户池是否作为租户   |  `true` |
| enableSwitchType | string | 是 | 允许切换的类型   | tenant-console |
| css | string | 是 | 自定义 CSS   |  |
| cssEnabled | boolean | 是 | 是否启用自定义 CSS   |  |
| customLoading | string | 是 | 自定义 Loading   |  |
| enableGuardVersionSwitch | boolean | 是 | 是否开启 Guard 切换   |  |
| guardVersion | string | 是 | 使用 Guard 的版本   |  `v2` |
| loadingBackground | string | 是 | 自定义 Loading 背景   |  |
| enableCreateTenant | boolean | 是 | 是否允许创建租户   |  |
| createTenantScenes | array | 是 | 允许创建租户的场景   |  |
| enableJoinTenant | boolean | 是 | 是否允许加入租户   |  |
| joinTenantScenes | array | 是 | 允许创建加入的场景   |  |
| enableVerifyDomain | boolean | 是 | 是否校验企业域名   |  |
| verifyDomainScenes | array | 是 | 校验企业域名的场景   |  |
| ssoPageCustomizationSettings |  | 是 | 页面自定义配置 嵌套类型：<a href="#ISsoPageCustomizationSettingsDto">ISsoPageCustomizationSettingsDto</a>。  |  `{"hideIdp":true,"hideForgetPassword":true,"autoRegisterThenLogin":true,"hideSocialLogin":true,"hideLoginByPhoneCode":true,"hideRegister":true,"hideUserPasswordLogin":true,"hideWxMpScanLogin":true,"hideRegisterByPhone":true,"hideRegisterByEmail":true}` |
| enableMultipleTenantPortal | boolean | 是 | 是否允许选择门户登录   |  |
| loginConfig |  | 是 | 登录配置 嵌套类型：<a href="#ApplicationLoginConfigDto">ApplicationLoginConfigDto</a>。  |  |


### <a id="ISsoPageCustomizationSettingsDto"></a> ISsoPageCustomizationSettingsDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |


### <a id="ApplicationLoginConfigDto"></a> ApplicationLoginConfigDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| mergeLoginAndRegisterPage | boolean | 是 | 是否开启登录注册合并   |  |
| enabledBasicLoginMethods | array | 是 | 开启的基础登录方式   |  `["EMAIL_CODE","EMAIL_PASSWORD"]` |
| defaultLoginMethod |  | 是 | 应用默认登录方式（不包含社会化登录和企业身份源登录） 嵌套类型：<a href="#ApplicationDefaultLoginMethod">ApplicationDefaultLoginMethod</a>。  |  `{"connectionType":"QRCODE","qrcodeExtIdpConnId":"6303a2bf2xxxxx7f665f01bf1"}` |
| enabledExtIdpConns | array | 是 | 开启的外部身份源连接 嵌套类型：<a href="#ApplicationEnabledExtIdpConnDto">ApplicationEnabledExtIdpConnDto</a>。  |  `["6303a2bf2xxxx7f665f01bf1","6321397b6xxxx1b8481ccfc0"]` |
| showAuthorizationPage | boolean | 是 | 是否展示用户授权页面   |  |


### <a id="ApplicationDefaultLoginMethod"></a> ApplicationDefaultLoginMethod

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| connectionType | string | 是 | 默认的登录类型<br>  - `PASSWORD`: 密码类型，取决于你开启的基础登录方式，支持手机号/邮箱/用户名 + 密码进行登录<br>  - `PASSCODE`: 验证码类型，取决于你开启的基础登录方式，支持手机号/邮箱 + 验证码进行登录<br>  - `QRCODE`: 扫码登录类型，目前包含自建 APP 扫码登录、关注微信公众号扫码登录、微信小程序扫码登录三种类型<br>         | PASSCODE |
| qrcodeType | string | 是 | 当 `connectionType` 为 `QRCODE` 时，此参数表示二维码类型。<br>- `SELF_BUILT_APP`: 自建 APP 扫码<br>- `WECHAT_OFFICIAL_ACCOUNT`: 扫码关注微信公众号登录<br>- `WECHAT_MINI_PROGRAM`: 微信小程序扫码登录<br>       | SELF_BUILT_APP |
| qrcodeExtIdpConnId | string | 是 | 当 `connectionType` 为 `QRCODE` 时，你需要通过此参数指定具体的扫码登录身份源连接的 ID。   |  `6303a2bf2xxxxx7f665f01bf1` |
| adExtIdpConnId | string | 是 | 当 `connectionType` 为 `AD` 时，你需要通过此参数指定具体的 AD 身份源连接的 ID。   |  `6303a2bf2xxxxx7f665f01bf1` |
| ldapExtIdpConnId | string | 是 | 当 `connectionType` 为 `LDAP` 时，你需要通过此参数指定具体的 LDAP 身份源连接的 ID。   |  `6303a2bf2xxxxx7f665f01bf1` |


### <a id="ApplicationEnabledExtIdpConnDto"></a> ApplicationEnabledExtIdpConnDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| isSocial | boolean | 是 | 是否为社会化登录身份源连接   |  `true` |
| extIdpId | string | 是 | 身份源 ID   |  `6303a2bf2xxxxx7f665f01bf1` |
| extIdpType | string | 是 | 身份源类型   | oidc |
| extIdpConnId | string | 是 | 身份源连接 ID   |  `6303a2bf2xxxxx7f665f01bf1` |
| extIdpConnType | string | 是 | 身份源连接类型   | oidc |
| extIdpConnIdentifier | string | 是 | 身份源连接可读唯一标志   |  `6303a2bf2xxxxx7f665f01bf1` |
| extIdpConnDisplayName | string | 是 | 微信   |  `6303a2bf2xxxxx7f665f01bf1` |
| extIdpConnLogo | string | 是 | 身份源连接 Logo   |  `https://files.authing.co/authing-console/social-connections/wechatBrowser.svg` |
| enabled | boolean | 否 | 是否允许身份源连接   |  |


