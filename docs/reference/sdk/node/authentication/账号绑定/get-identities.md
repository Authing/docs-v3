# 获取绑定的外部身份源

<!--
  警告⚠️：
  不要直接修改该文档，
  https://github.com/Authing/authing-docs-factory
  使用该项目进行生成
-->

<LastUpdated />

> 此文档根据 https://github.com/authing/authing-docs-factory 基于 https://api-explorer.authing.cn V3 API 自动生成，和 API 参数、返回结果保持一致，如此文档描述有误，请以 V3 API 为准。



如在**介绍**部分中所描述的，一个外部身份源对应多个外部身份源连接，用户通过某个外部身份源连接绑定了某个外部身份源账号之后，
用户会建立一条与此外部身份源之间的关联关系。此接口用于获取此用户绑定的所有外部身份源。

取决于外部身份源的具体实现，一个用户在外部身份源中，可能会有多个身份 ID，比如在微信体系中会有 `openid` 和 `unionid`，在非书中有
`open_id`、`union_id` 和 `user_id`。在 Authing 中，我们把这样的一条 `open_id` 或者 `unionid_` 叫做一条 `Identity`， 所以用户在一个身份源会有多条 `Identity` 记录。

以微信为例，如果用户使用微信登录或者绑定了微信账号，他的 `Identity` 信息如下所示：

```json
[
  {
    "identityId": "62f20932xxxxbcc10d966ee5",
    "extIdpId": "62f209327xxxxcc10d966ee5",
    "provider": "wechat",
    "type": "openid",
    "userIdInIdp": "oH_5k5SflrwjGvk7wqpoBKq_cc6M",
    "originConnIds": ["62f2093244fa5cb19ff21ed3"]
  },
  {
    "identityId": "62f726239xxxxe3285d21c93",
    "extIdpId": "62f209327xxxxcc10d966ee5",
    "provider": "wechat",
    "type": "unionid",
    "userIdInIdp": "o9Nka5ibU-lUGQaeAHqu0nOZyJg0",
    "originConnIds": ["62f2093244fa5cb19ff21ed3"]
  }
]
```


可以看到他们的 `extIdpId` 是一样的，这个是你在 Authing 中创建的**身份源 ID**；`provider` 都是 `wechat`；
通过 `type` 可以区分出哪个是 `openid`，哪个是 `unionid`，以及具体的值（`userIdInIdp`）；他们都来自于同一个身份源连接（`originConnIds`）。


  

## 方法名称

`AuthenticationClient.getIdentities`

## 请求参数

| 名称 | 类型 | <div style="width:80px">是否必填</div> | 默认值 | <div style="width:300px">描述</div> | <div style="width:200px"></div>示例值</div> |
| ---- | ---- | ---- | ---- | ---- | ---- |




## 请求响应

类型： `GetIdentitiesRespDto`

| 名称 | 类型 | 描述 |
| ---- | ---- | ---- |
| statusCode | number | 业务状态码，可以通过此状态码判断操作是否成功，200 表示成功。 |
| message | string | 描述信息 |
| apiCode | number | 细分错误码，可通过此错误码得到具体的错误类型。详情可以查看开发准备中的 apiCode 细分说明 |
| requestId | string | 请求 ID。当请求失败时会返回。 |
| data | array | 用户的身份源列表 |



示例结果：

```json
{
  "statusCode": 200,
  "message": "操作成功",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "identityId": "62299d8b866d2dab79a89dc4",
    "extIdpId": "6076bacxxxxxxxxd80d993b5",
    "provider": "wechat",
    "type": "openid",
    "userIdInIdp": "oj7Nq05R-RRaqak0_YlMLnnIwsvg",
    "accessToken": "57_fK0xgSL_NwVlS-gmUwlMQ2N6AONNIOAYxxxx",
    "refreshToken": "57_IZFu91Ak1Wg6DRytZFFIOd3upNF5lH7vPxxxxx",
    "originConnIds": "[\"605492ac41xxxxe0362f0707\"]"
  }
}
```

## 数据结构


### <a id="IdentityDto"></a> IdentityDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| identityId | string | 是 | 身份源 ID   |  `62299d8b866d2dab79a89dc4` |
| extIdpId | string | 是 | 身份源连接 ID   |  `6076bacxxxxxxxxd80d993b5` |
| provider | string | 是 | 外部身份源类型：<br>- `wechat`: 微信<br>- `qq`: QQ<br>- `wechatwork`: 企业微信<br>- `dingtalk`: 钉钉<br>- `weibo`: 微博<br>- `github`: GitHub<br>- `alipay`: 支付宝<br>- `baidu`: 百度<br>- `lark`: 飞书<br>- `welink`: Welink<br>- `yidun`: 网易易盾<br>- `qingcloud`: 青云<br>- `google`: Google<br>- `gitlab`: GitLab<br>- `gitee`: Gitee<br>- `twitter`: Twitter<br>- `facebook`: Facebook<br>- `slack`: Slack<br>- `linkedin`: Linkedin<br>- `instagram`: Instagram<br>- `oidc`: OIDC 型企业身份源<br>- `oauth2`: OAuth2 型企业身份源<br>- `saml`: SAML 型企业身份源<br>- `ldap`: LDAP 型企业身份源<br>- `ad`: AD 型企业身份源<br>- `cas`: CAS 型企业身份源<br>- `azure-ad`: Azure AD 型企业身份源<br>       | oidc |
| type | string | 是 | Identity 类型，如 unionid, openid, primary   |  `openid` |
| userIdInIdp | string | 是 | 在外部身份源中的 ID   |  `oj7Nq05R-RRaqak0_YlMLnnIwsvg` |
| userInfoInIdp | object | 是 | 用户在 idp 中的身份信息   |  |
| accessToken | string | 否 | 在外部身份源中的 Access Token（此参数只会在用户主动获取时返回，管理侧接口不会返回）。   |  `57_fK0xgSL_NwVlS-gmUwlMQ2N6AONNIOAYxxxx` |
| refreshToken | string | 否 | 在外部身份源中的 Refresh Token（此参数只会在用户主动获取时返回，管理侧接口不会返回）。   |  `57_IZFu91Ak1Wg6DRytZFFIOd3upNF5lH7vPxxxxx` |
| originConnIds | array | 是 | 身份来自的身份源连接 ID 列表   |  `["605492ac41xxxxe0362f0707"]` |


