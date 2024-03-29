# 修改公共账号资料

<!--
  警告⚠️：
  不要直接修改该文档，
  https://github.com/Authing/authing-docs-factory
  使用该项目进行生成
-->

<LastUpdated />

> 此文档根据 https://github.com/authing/authing-docs-factory 基于 https://api-explorer.authing.cn V3 API 自动生成，和 API 参数、返回结果保持一致，如此文档描述有误，请以 V3 API 为准。

通过公共账号用户 ID，修改公共账号资料，邮箱、手机号、用户名、externalId 用户池内唯一，此接口将以管理员身份修改公共账号资料因此不需要进行手机号验证码检验等安全检测。

## 方法名称

`ManagementClient.UpdatePublicAccount`

## 请求参数

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:60px">默认值</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- | ---- | ---- | ---- | ---- | ---- |
| userId | string | 是 | - | 用户的唯一标志，可以是用户 ID、用户名、邮箱、手机号、externalId、在外部身份源的 ID，详情见 userIdType 字段的说明。默认为用户 id 。  | `6229ffaxxxxxxxxcade3e3d9` |
| phoneCountryCode | string | 否 | - | 手机区号，中国大陆手机号可不填。Authing 短信服务暂不内置支持国际手机号，你需要在 Authing 控制台配置对应的国际短信服务。完整的手机区号列表可参阅 https://en.wikipedia.org/wiki/List_of_country_calling_codes。  | `+86` |
| name | string | 否 | - | 用户真实名称，不具备唯一性  | `张三` |
| nickname | string | 否 | - | 昵称  | `张三` |
| photo | string | 否 | - | 头像链接  | `https://files.authing.co/authing-console/default-user-avatar.png` |
| externalId | string | 否 | - | 第三方外部 ID  | `10010` |
| status | string | 否 | Activated | 账户当前状态  | `Activated` |
| emailVerified | boolean | 否 | - | 邮箱是否验证  | `true` |
| phoneVerified | boolean | 否 | - | 手机号是否验证  | `true` |
| birthdate | string | 否 | - | 出生日期  | `2022-06-03` |
| country | string | 否 | - | 所在国家  | `CN` |
| province | string | 否 | - | 所在省份  | `BJ` |
| city | string | 否 | - | 所在城市  | `BJ` |
| address | string | 否 | - | 所处地址  | `北京朝阳` |
| streetAddress | string | 否 | - | 所处街道地址  | `北京朝阳区 xxx 街道` |
| postalCode | string | 否 | - | 邮政编码号  | `438100` |
| gender | string | 否 | U | 性别  | `M` |
| username | string | 否 | - | 用户名，用户池内唯一  | `bob` |
| email | string | 否 | - | 邮箱，不区分大小写  | `test@example.com` |
| phone | string | 否 | - | 手机号，不带区号。如果是国外手机号，请在 phoneCountryCode 参数中指定区号。  | `188xxxx8888` |
| password | string | 否 | - | 用户密码，默认为明文。我们使用 HTTPS 协议对密码进行安全传输，可以在一定程度上保证安全性。如果你还需要更高级别的安全性，我们还支持 RSA256 和国密 SM2 两种方式对密码进行加密。详情见 `passwordEncryptType` 参数。  | `passw0rd` |
| company | string | 否 | - | 所在公司  | `steamory` |
| browser | string | 否 | - | 最近一次登录时使用的浏览器 UA  | `Mozilla/5.0 (Linux; Android 10; V2001A; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/87.0.4280.141 Mobile Safari/537.36 VivoBrowser/10.2.10.0` |
| device | string | 否 | - | 最近一次登录时使用的设备  | `iOS` |
| givenName | string | 否 | - | 名  | `三` |
| familyName | string | 否 | - | 姓  | `张` |
| middleName | string | 否 | - | 中间名  | `James` |
| profile | string | 否 | - | Preferred Username  | `alice` |
| preferredUsername | string | 否 | - | Preferred Username  | `alice` |
| website | string | 否 | - | 用户个人网页  | `https://my-website.com` |
| zoneinfo | string | 否 | - | 用户时区信息  | `GMT-08:00` |
| locale | string | 否 | - | Locale  | `af` |
| formatted | string | 否 | - | 标准的完整地址  | `132, My Street, Kingston, New York 12401.` |
| region | string | 否 | - | 用户所在区域  | `Xinjiang Uyghur Autonomous Region` |
| identityNumber | string | 否 | - | 用户身份证号码  | `420421xxxxxxxx1234` |
| customData | object | 否 | - | 自定义数据，传入的对象中的 key 必须先在用户池定义相关自定义字段  | `{"school":"北京大学","age":22}` |
| options | <a href="#UpdatePublicAccountOptionsDto">UpdatePublicAccountOptionsDto</a> | 否 | - | 可选参数  | `{"autoGeneratePassword":true,"resetPasswordOnFirstLogin":true,"passwordEncryptType":"none"}` |




## 请求响应

类型： `PublicAccountSingleRespDto`

| 名称 | 类型 | 描述 |
| ---- | ---- | ---- |
| statusCode | number | 业务状态码，可以通过此状态码判断操作是否成功，200 表示成功。 |
| message | string | 描述信息 |
| apiCode | number | 细分错误码，可通过此错误码得到具体的错误类型（成功请求不返回）。详细错误码列表请见：[API Code 列表](https://api-explorer.authing.cn/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId | string | 请求 ID。当请求失败时会返回。 |
| data | <a href="#PublicAccountDto">PublicAccountDto</a> | 响应数据 |



示例结果：

```json
{
  "statusCode": 200,
  "message": "操作成功",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "userId": "6229ffaxxxxxxxxcade3e3d9",
    "createdAt": "2022-07-03T03:20:30.000Z",
    "updatedAt": "2022-07-03T03:20:30.000Z",
    "status": "Activated",
    "workStatus": "Active",
    "externalId": "10010",
    "email": "test@example.com",
    "phone": "188xxxx8888",
    "phoneCountryCode": "+86",
    "username": "bob",
    "name": "张三",
    "nickname": "张三",
    "photo": "https://files.authing.co/authing-console/default-user-avatar.png",
    "loginsCount": 3,
    "lastLogin": "2022-07-03T03:20:30.000Z",
    "lastIp": "127.0.0.1",
    "gender": "M",
    "emailVerified": true,
    "phoneVerified": true,
    "passwordLastSetAt": "2022-07-03T03:20:30.000Z",
    "birthdate": "2022-06-03",
    "country": "CN",
    "province": "BJ",
    "city": "BJ",
    "address": "北京朝阳",
    "streetAddress": "北京朝阳区 xxx 街道",
    "postalCode": "438100",
    "company": "steamory",
    "browser": "Mozilla/5.0 (Linux; Android 10; V2001A; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/87.0.4280.141 Mobile Safari/537.36 VivoBrowser/10.2.10.0",
    "device": "iOS",
    "givenName": "三",
    "familyName": "张",
    "middleName": "James",
    "profile": "alice",
    "preferredUsername": "alice",
    "website": "https://my-website.com",
    "zoneinfo": "GMT-08:00",
    "locale": "af",
    "formatted": "132, My Street, Kingston, New York 12401.",
    "region": "Xinjiang Uyghur Autonomous Region",
    "userSourceType": "register",
    "passwordSecurityLevel": 1,
    "departmentIds": "[\"624d930c3xxxx5c08dd4986e\",\"624d93102xxxx012f33cd2fe\"]",
    "identityNumber": "420421xxxxxxxx1234",
    "customData": {
      "school": "北京大学",
      "age": 22
    },
    "statusChangedAt": "2022-07-03T03:20:30.000Z"
  }
}
```

## 数据结构


### <a id="UpdatePublicAccountOptionsDto"></a> UpdatePublicAccountOptionsDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| userIdType | string | 否 | 用户 ID 类型，默认值为 `user_id`，可选值为：<br>- `user_id`: Authing 用户 ID，如 `6319a1504f3xxxxf214dd5b7`<br>- `phone`: 用户手机号<br>- `email`: 用户邮箱<br>- `username`: 用户名<br>- `external_id`: 用户在外部系统的 ID，对应 Authing 用户信息的 `externalId` 字段<br>- `identity`: 用户的外部身份源信息，格式为 `<extIdpId>:<userIdInIdp>`，其中 `<extIdpId>` 为 Authing 身份源的 ID，`<userIdInIdp>` 为用户在外部身份源的 ID。<br>示例值：`62f20932716fbcc10d966ee5:ou_8bae746eac07cd2564654140d2a9ac61`。<br>- `sync_relation`: 用户的外部身份源信息，格式为 `<provier>:<userIdInIdp>`，其中 `<provier>` 为同步身份源类型，如 wechatwork, lark；`<userIdInIdp>` 为用户在外部身份源的 ID。<br>示例值：`lark:ou_8bae746eac07cd2564654140d2a9ac61`。<br>   | user_id |
| resetPasswordOnFirstLogin | boolean | 否 | 设置用户首次登录要求重置密码   |  |
| resetPasswordOnNextLogin | boolean | 否 | 下次登录要求重置密码   |  |
| passwordEncryptType | string | 否 | 密码加密类型，支持使用 RSA256 和国密 SM2 算法进行加密。默认为 `none` 不加密。<br>- `none`: 不对密码进行加密，使用明文进行传输。<br>- `rsa`: 使用 RSA256 算法对密码进行加密，需要使用 Authing 服务的 RSA 公钥进行加密，请阅读**介绍**部分了解如何获取 Authing 服务的 RSA256 公钥。<br>- `sm2`: 使用 [国密 SM2 算法](https://baike.baidu.com/item/SM2/15081831) 对密码进行加密，需要使用 Authing 服务的 SM2 公钥进行加密，请阅读**介绍**部分了解如何获取 Authing 服务的 SM2 公钥。<br>     | sm2 |
| autoGeneratePassword | boolean | 否 | 是否自动生成密码   |  |
| sendPasswordResetedNotification |  | 否 | 重置密码发送邮件和手机号选项 嵌套类型：<a href="#SendResetPasswordNotificationDto">SendResetPasswordNotificationDto</a>。  |  `{"sendDefaultEmailNotification":false,"sendDefaultPhoneNotification":false,"inputSendEmailNotification":"test@example.com","inputSendPhoneNotification":"136xxxx1234","appId":"app1"}` |


### <a id="SendResetPasswordNotificationDto"></a> SendResetPasswordNotificationDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| sendDefaultEmailNotification | boolean | 否 | 重置密码之后，是否发送用户默认邮件通知   |  |
| sendDefaultPhoneNotification | boolean | 否 | 重置密码之后，是否发送用户默认短信通知   |  |
| inputSendEmailNotification | string | 否 | 当用户密码修改之后，输入发送邮箱   |  `test@example.com` |
| inputSendPhoneNotification | string | 否 | 当用户密码修改之后，输入发送手机号   |  `183xxxx1234` |
| appId | string | 否 | 发送登录地址时，指定的应用 id，会将此应用的登录地址发送给用户的邮箱或者手机号。默认为用户池应用面板的登录地址。   |  `appid1` |


### <a id="PublicAccountDto"></a> PublicAccountDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| userId | string | 是 | 用户的唯一标志，可以是用户 ID、用户名、邮箱、手机号、externalId、在外部身份源的 ID，详情见 userIdType 字段的说明。默认为用户 id 。   |  `6229ffaxxxxxxxxcade3e3d9` |
| createdAt | string | 是 | 创建时间   |  `2022-07-03T03:20:30.000Z` |
| updatedAt | string | 是 | 更新时间   |  `2022-07-03T03:20:30.000Z` |
| status | string | 是 | 账户当前状态：<br>- Activated: 正常状态<br>- Suspended: 已停用<br>- Deactivated: 已禁用<br>- Resigned: 已离职<br>- Archived: 已归档<br>     | Suspended |
| workStatus | string | 是 | 账户当前工作状态   | Closed |
| externalId | string | 否 | 第三方外部 ID   |  `10010` |
| email | string | 否 | 邮箱，不区分大小写   |  `test@example.com` |
| phone | string | 否 | 手机号，不带区号。如果是国外手机号，请在 phoneCountryCode 参数中指定区号。   |  `188xxxx8888` |
| phoneCountryCode | string | 否 | 手机区号，中国大陆手机号可不填。Authing 短信服务暂不内置支持国际手机号，你需要在 Authing 控制台配置对应的国际短信服务。完整的手机区号列表可参阅 https://en.wikipedia.org/wiki/List_of_country_calling_codes。   |  `+86` |
| username | string | 否 | 用户名，用户池内唯一   |  `bob` |
| name | string | 否 | 用户真实名称，不具备唯一性   |  `张三` |
| nickname | string | 否 | 昵称   |  `张三` |
| photo | string | 否 | 头像链接   |  `https://files.authing.co/authing-console/default-user-avatar.png` |
| loginsCount | number | 否 | 历史总登录次数   |  `3` |
| lastLogin | string | 否 | 上次登录时间   |  `2022-07-03T03:20:30.000Z` |
| lastIp | string | 否 | 上次登录 IP   |  `127.0.0.1` |
| gender | string | 是 | 性别:<br>- `M`: 男性，`male`<br>- `F`: 女性，`female`<br>- `U`: 未知，`unknown`<br>     | M |
| emailVerified | boolean | 是 | 邮箱是否验证   |  `true` |
| phoneVerified | boolean | 是 | 手机号是否验证   |  `true` |
| passwordLastSetAt | string | 否 | 用户上次密码修改时间   |  `2022-07-03T03:20:30.000Z` |
| birthdate | string | 否 | 出生日期   |  `2022-06-03` |
| country | string | 否 | 所在国家   |  `CN` |
| province | string | 否 | 所在省份   |  `BJ` |
| city | string | 否 | 所在城市   |  `BJ` |
| address | string | 否 | 所处地址   |  `北京朝阳` |
| streetAddress | string | 否 | 所处街道地址   |  `北京朝阳区 xxx 街道` |
| postalCode | string | 否 | 邮政编码号   |  `438100` |
| company | string | 否 | 所在公司   |  `steamory` |
| browser | string | 否 | 最近一次登录时使用的浏览器 UA   |  `Mozilla/5.0 (Linux; Android 10; V2001A; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/87.0.4280.141 Mobile Safari/537.36 VivoBrowser/10.2.10.0` |
| device | string | 否 | 最近一次登录时使用的设备   |  `iOS` |
| givenName | string | 否 | 名   |  `三` |
| familyName | string | 否 | 姓   |  `张` |
| middleName | string | 否 | 中间名   |  `James` |
| profile | string | 否 | Preferred Username   |  `alice` |
| preferredUsername | string | 否 | Preferred Username   |  `alice` |
| website | string | 否 | 用户个人网页   |  `https://my-website.com` |
| zoneinfo | string | 否 | 用户时区信息   |  `GMT-08:00` |
| locale | string | 否 | Locale   |  `af` |
| formatted | string | 否 | 标准的完整地址   |  `132, My Street, Kingston, New York 12401.` |
| region | string | 否 | 用户所在区域   |  `Xinjiang Uyghur Autonomous Region` |
| userSourceType | string | 是 | 来源类型:<br>- `excel`: 通过 excel 导入<br>- `register`: 用户自主注册<br>- `adminCreated`: 管理员后台手动创建（包含使用管理 API 创建用户 ）<br>- `syncTask`: 同步中心的同步任务  <br>   | excel |
| userSourceId | string | 否 | 应用 ID 或者同步任务 ID   |  |
| lastLoginApp | string | 否 | 用户上次登录的应用 ID   |  |
| mainDepartmentId | string | 否 | 用户主部门 ID   |  |
| lastMfaTime | string | 否 | 用户上次进行 MFA 认证的时间   |  |
| passwordSecurityLevel | number | 否 | 用户密码安全强度等级   |  `1` |
| resetPasswordOnNextLogin | boolean | 否 | 下次登录要求重置密码   |  |
| registerSource | array | 否 | 注册方式   |  |
| departmentIds | array | 否 | 公共账号所属部门 ID 列表   |  `["624d930c3xxxx5c08dd4986e","624d93102xxxx012f33cd2fe"]` |
| identityNumber | string | 否 | 用户身份证号码   |  `420421xxxxxxxx1234` |
| customData | object | 否 | 公共账号的扩展字段数据   |  `{"school":"北京大学","age":22}` |
| statusChangedAt | string | 否 | 公共账号状态上次修改时间   |  `2022-07-03T03:20:30.000Z` |
| tenantId | string | 否 | 用户租户 ID   |  |


