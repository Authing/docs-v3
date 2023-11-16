# 配置第三方邮件服务

<!--
  警告⚠️：
  不要直接修改该文档，
  https://github.com/Authing/authing-docs-factory
  使用该项目进行生成
-->

<LastUpdated />

> 此文档根据 https://github.com/authing/authing-docs-factory 基于 https://api-explorer.authing.cn V3 API 自动生成，和 API 参数、返回结果保持一致，如此文档描述有误，请以 V3 API 为准。

配置第三方邮件服务

## 方法名称

`ManagementClient.ConfigEmailProvider`

## 请求参数

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:60px">默认值</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- | ---- | ---- | ---- | ---- | ---- |
| type | string | 是 | - | 第三方邮件服务商类型:<br>- `custom`: 自定义 SMTP 邮件服务<br>- `ali`: [阿里企业邮箱](https://www.ali-exmail.cn/Land/)<br>- `qq`: [腾讯企业邮箱](https://work.weixin.qq.com/mail/)<br>- `sendgrid`: [SendGrid 邮件服务](https://sendgrid.com/)<br>      | `custom` |
| enabled | boolean | 是 | - | 是否启用，如果不启用，将默认使用 Authing 内置的邮件服务  | `true` |
| smtpConfig | <a href="#SMTPEmailProviderConfigInput">SMTPEmailProviderConfigInput</a> | 否 | - | SMTP 邮件服务配置  |  |
| sendGridConfig | <a href="#SendGridEmailProviderConfigInput">SendGridEmailProviderConfigInput</a> | 否 | - | SendGrid 邮件服务配置  |  |
| aliExmailConfig | <a href="#AliExmailEmailProviderConfigInput">AliExmailEmailProviderConfigInput</a> | 否 | - | 阿里企业邮件服务配置  |  |
| tencentExmailConfig | <a href="#TencentExmailEmailProviderConfigInput">TencentExmailEmailProviderConfigInput</a> | 否 | - | 腾讯企业邮件服务配置  |  |




## 请求响应

类型： `EmailProviderRespDto`

| 名称 | 类型 | 描述 |
| ---- | ---- | ---- |
| statusCode | number | 业务状态码，可以通过此状态码判断操作是否成功，200 表示成功。 |
| message | string | 描述信息 |
| apiCode | number | 细分错误码，可通过此错误码得到具体的错误类型（成功请求不返回）。详细错误码列表请见：[API Code 列表](https://api-explorer.authing.cn/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId | string | 请求 ID。当请求失败时会返回。 |
| data | <a href="#EmailProviderDto">EmailProviderDto</a> | 响应数据 |



示例结果：

```json
{
  "statusCode": 200,
  "message": "操作成功",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "enabled": true,
    "type": "custom",
    "smtpConfig": {
      "smtp_host": "smtp.example.com",
      "smtp_port": 465,
      "sender": "test",
      "senderPass": "passw0rd",
      "secure": true
    },
    "sendGridConfig": {
      "sender": "test",
      "apikey": "xxxxxxxxxx"
    },
    "aliExmailConfig": {
      "sender": "test",
      "senderPass": "passw0rd"
    },
    "tencentExmailConfig": {
      "sender": "test",
      "senderPass": "passw0rd"
    }
  }
}
```

## 数据结构


### <a id="SMTPEmailProviderConfigInput"></a> SMTPEmailProviderConfigInput

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| smtp_host | string | 是 | SMTP 地址   |  `smtp.example.com` |
| smtp_port | number | 是 | SMTP 端口   |  `465` |
| sender | string | 否 | 用户名   |  `test` |
| senderPass | string | 是 | 密码   |  `passw0rd` |
| secure | boolean | 否 | 是否启用 SSL   |  `true` |


### <a id="SendGridEmailProviderConfigInput"></a> SendGridEmailProviderConfigInput

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| sender | string | 是 | 用户名   |  `test` |
| apikey | string | 是 | SendGrid API Key，详情请见 [SendGrid 文档](https://docs.sendgrid.com/ui/account-and-settings/api-keys)。   |  `xxxxxxxxxx` |


### <a id="AliExmailEmailProviderConfigInput"></a> AliExmailEmailProviderConfigInput

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| sender | string | 是 | 用户名   |  `test` |
| senderPass | string | 是 | 密码   |  `passw0rd` |


### <a id="TencentExmailEmailProviderConfigInput"></a> TencentExmailEmailProviderConfigInput

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| sender | string | 是 | 用户名   |  `test` |
| senderPass | string | 是 | 密码   |  `passw0rd` |


### <a id="EmailProviderDto"></a> EmailProviderDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| enabled | boolean | 是 | 是否启用，如果不启用，将默认使用 Authing 内置的邮件服务   |  `true` |
| type | string | 否 | 第三方邮件服务商类型:<br>- `custom`: 自定义 SMTP 邮件服务<br>- `ali`: [阿里企业邮箱](https://www.ali-exmail.cn/Land/)<br>- `qq`: [腾讯企业邮箱](https://work.weixin.qq.com/mail/)<br>- `sendgrid`: [SendGrid 邮件服务](https://sendgrid.com/)<br>       | ali |
| smtpConfig |  | 否 | SMTP 邮件服务配置 嵌套类型：<a href="#SMTPEmailProviderConfig">SMTPEmailProviderConfig</a>。  |  |
| sendGridConfig |  | 否 | SendGrid 邮件服务配置 嵌套类型：<a href="#SendGridEmailProviderConfig">SendGridEmailProviderConfig</a>。  |  |
| aliExmailConfig |  | 否 | 阿里企业邮件服务配置 嵌套类型：<a href="#AliExmailEmailProviderConfig">AliExmailEmailProviderConfig</a>。  |  |
| tencentExmailConfig |  | 否 | 腾讯企业邮件服务配置 嵌套类型：<a href="#TencentExmailEmailProviderConfig">TencentExmailEmailProviderConfig</a>。  |  |


### <a id="SMTPEmailProviderConfig"></a> SMTPEmailProviderConfig

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| smtp_host | string | 是 | SMTP 地址   |  `smtp.example.com` |
| smtp_port | number | 是 | SMTP 端口   |  `465` |
| sender | string | 是 | 用户名   |  `test` |
| senderPass | string | 是 | 密码   |  `passw0rd` |
| secure | boolean | 是 | 是否启用 SSL   |  `true` |


### <a id="SendGridEmailProviderConfig"></a> SendGridEmailProviderConfig

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| sender | string | 是 | 用户名   |  `test` |
| apikey | string | 是 | SendGrid API Key，详情请见 [SendGrid 文档](https://docs.sendgrid.com/ui/account-and-settings/api-keys)。   |  `xxxxxxxxxx` |


### <a id="AliExmailEmailProviderConfig"></a> AliExmailEmailProviderConfig

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| sender | string | 是 | 用户名   |  `test` |
| senderPass | string | 是 | 密码   |  `passw0rd` |


### <a id="TencentExmailEmailProviderConfig"></a> TencentExmailEmailProviderConfig

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| sender | string | 是 | 用户名   |  `test` |
| senderPass | string | 是 | 密码   |  `passw0rd` |


