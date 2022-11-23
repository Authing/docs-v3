# 发起修改邮箱的验证请求

<!--
  警告⚠️：
  不要直接修改该文档，
  https://github.com/Authing/authing-docs-factory
  使用该项目进行生成
-->

<LastUpdated />

终端用户自主修改邮箱时，需要提供相应的验证手段。此接口用于验证用户的修改邮箱请求是否合法。当前支持通过**邮箱验证码**的方式进行验证，你需要先调用发送邮件接口发送对应的邮件验证码。

## 方法名称

`ManagementClient.verifyUpdateEmailRequest`

## 请求参数

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:60px">默认值</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- | ---- | ---- | ---- | ---- | ---- |
| emailPassCodePayload | <a href="#UpdateEmailByEmailPassCodeDto">UpdateEmailByEmailPassCodeDto</a> | 是 | - | 使用邮箱验证码方式验证的数据  |  |
| verifyMethod | string | 是 | - | 修改当前邮箱使用的验证手段：<br>- `EMAIL_PASSCODE`: 通过邮箱验证码进行验证，当前只支持这种验证方式。<br>      | `EMAIL_PASSCODE` |




## 示例代码

```php
<?php

use Authing\AuthenticationClient;

// 需要替换成你的 Authing 应用 ID
$AUTHING_APP_ID = "AUTHING_APP_ID";
// 需要替换成你的 Authing 应用密钥
$AUTHING_APP_SECRET = "AUTHING_APP_SECRET";
// 需要替换成你的 Authing 应用域名
$AUTHING_APP_HOST = "AUTHING_APP_HOST";

// 初始化 AuthenticationClient
$authenticationClient = new Authing\AuthenticationClient(
    array(
        "appId" => $AUTHING_APP_ID,
        "appSecret" => $AUTHING_APP_SECRET,
        "appHost" => $AUTHING_APP_HOST,
    )
);

// 使用用户的 access_token 初始化 $authenticationClient，access_token 可以通过登录接口获取
$authenticationClient->setAccessToken("ACCESS_TOKEN");

$data = $authenticationClient->verifyUpdateEmailRequest(array(
    "verifyMethod" => "EMAIL_PASSCODE",
    "emailPassCodePayload" => array(
        "newEmail" => "test@example.com",
        "newEmailPassCode" => "1234"
    )
));
print_r($data);

```



## 请求响应

类型： `VerifyUpdateEmailRequestRespDto`

| 名称 | 类型 | 描述 |
| ---- | ---- | ---- |
| statusCode | number | 业务状态码，可以通过此状态码判断操作是否成功，200 表示成功。 |
| message | string | 描述信息 |
| apiCode | number | 细分错误码，可通过此错误码得到具体的错误类型。 |
| requestId | string | 请求 ID。当请求失败时会返回。 |
| data | <a href="#VerifyUpdateEmailRequestData">VerifyUpdateEmailRequestData</a> | 响应数据 |



示例结果：

```json
{
  "statusCode": 200,
  "message": "操作成功",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "tokenExpiresIn": 60
  }
}
```

## 数据结构


### <a id="UpdateEmailByEmailPassCodeDto"></a> UpdateEmailByEmailPassCodeDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| newEmail | string | 是 | 新邮箱   |  `new@example.com` |
| newEmailPassCode | string | 是 | 新邮箱验证码   |  `123456` |
| oldEmail | string | 否 | 旧邮箱，如果用户池开启了修改邮箱需要验证之前的邮箱，此参数必填。   |  `old@example.com` |
| oldEmailPassCode | string | 否 | 旧邮箱验证码，如果用户池开启了修改邮箱需要验证之前的邮箱，此参数必填。   |  `123456` |


### <a id="VerifyUpdateEmailRequestData"></a> VerifyUpdateEmailRequestData

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| updateEmailToken | string | 是 | 用于修改当前邮箱的 token，你需要使用此 token 调用**修改邮箱**接口。   |  |
| tokenExpiresIn | number | 是 | Token 有效时间，时间为 60 秒。   |  `60` |


