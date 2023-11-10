# 获取 webauthn 凭证创建初始化参数

<!--
  警告⚠️：
  不要直接修改该文档，
  https://github.com/Authing/authing-docs-factory
  使用该项目进行生成
-->

<LastUpdated />

> 此文档根据 https://github.com/authing/authing-docs-factory 基于 https://api-explorer.authing.cn V3 API 自动生成，和 API 参数、返回结果保持一致，如此文档描述有误，请以 V3 API 为准。


获取 webauthn 凭证创建初始化参数。**此接口要求具备用户的登录态**

## 方法名称

`AuthenticationClient.InitRegisterOptions`

## 请求参数

| 名称 | 类型 | <div style="width:80px">是否必填</div> | 默认值 | <div style="width:300px">描述</div> | <div style="width:200px"></div>示例值</div> |
| ---- | ---- | ---- | ---- | ---- | ---- |




## 请求响应

类型： `GetRegistrationOptionsRespDto`

| 名称 | 类型 | 描述 |
| ---- | ---- | ---- |
| statusCode | number | 业务状态码，可以通过此状态码判断操作是否成功，200 表示成功。 |
| message | string | 描述信息 |
| apiCode | number | 细分错误码，可通过此错误码得到具体的错误类型。详情可以查看开发准备中的 apiCode 细分说明 |
| requestId | string | 请求 ID。当请求失败时会返回。 |
| data | <a href="#RegistrationOptionsDto">RegistrationOptionsDto</a> | 响应数据 |



示例结果：

```json
{
  "statusCode": 200,
  "message": "操作成功",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "registrationOptions": {
      "excludeCredentials": {
        "type": "public-key"
      },
      "pubKeyCredParams": {
        "type": "public-key"
      },
      "rp": {
        "id": "example.com"
      },
      "timeout": "60000",
      "user": {
        "name": "zhangsan",
        "displayName": "张三"
      }
    }
  }
}
```

## 数据结构


### <a id="RegistrationOptionsDto"></a> RegistrationOptionsDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| registrationOptions |  | 是 | 认证器生成公钥凭证的参数 嵌套类型：<a href="#PublicKeyCredentialCreationOptionsDto">PublicKeyCredentialCreationOptionsDto</a>。  |  |
| ticket | string | 是 | ticket 需回传，用作向服务器发起验证从认证器获得的创建凭证时的结果   |  |


### <a id="PublicKeyCredentialCreationOptionsDto"></a> PublicKeyCredentialCreationOptionsDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| challenge | string | 是 | 挑战码, base64Url 编码   |  |
| excludeCredentials | array | 是 | 用于标识要排除的凭证，可以避免同一个用户多次注册同一个认证器 嵌套类型：<a href="#PublicKeyCredentialDescriptorDto">PublicKeyCredentialDescriptorDto</a>。  |  |
| pubKeyCredParams | array | 是 | 算法列表，指明信赖方接受哪些签名算法 嵌套类型：<a href="#PublicKeyCredentialParametersDto">PublicKeyCredentialParametersDto</a>。  |  |
| rp |  | 是 | 信赖方信息 嵌套类型：<a href="#PublicKeyCredentialRpEntityDto">PublicKeyCredentialRpEntityDto</a>。  |  |
| timeout | number | 是 | 超时时间(毫秒值)   |  `60000` |
| user |  | 是 | 用户信息 嵌套类型：<a href="#PublicKeyCredentialUserEntityDto">PublicKeyCredentialUserEntityDto</a>。  |  |


### <a id="PublicKeyCredentialDescriptorDto"></a> PublicKeyCredentialDescriptorDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| id | string | 是 | 允许的凭证 ID   |  |
| transports | array | 是 | 凭证所需的认证器与用户代理的通信方式:<br>- `ble`: 可以通过蓝牙连接的认证器<br>- `internal`: 平台内置的、无法移除的认证器<br>- `nfc`: 可以通过 NFC 连接的认证器<br>- `usb`: 可以通过 USB 连接的认证器<br>   |  |
| type | string | 是 | 固定值，public-key   |  `public-key` |


### <a id="PublicKeyCredentialParametersDto"></a> PublicKeyCredentialParametersDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| alg | number | 是 | 一个负整数，用于标明算法   |  |
| type | string | 是 | 固定值，public-key   |  `public-key` |


### <a id="PublicKeyCredentialRpEntityDto"></a> PublicKeyCredentialRpEntityDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| id | string | 是 | 信赖方 domain   |  `example.com` |
| name | string | 是 | 信赖方名称   |  |


### <a id="PublicKeyCredentialUserEntityDto"></a> PublicKeyCredentialUserEntityDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| id | string | 是 | 用户 ID   |  |
| name | string | 是 | 用户名   |  `zhangsan` |
| displayName | string | 是 | 用于显示的用户名称   |  `张三` |


