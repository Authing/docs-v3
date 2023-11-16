# 获取 WebAuthn 认证请求初始化参数

<!--
  警告⚠️：
  不要直接修改该文档，
  https://github.com/Authing/authing-docs-factory
  使用该项目进行生成
-->

<LastUpdated />

> 此文档根据 https://github.com/authing/authing-docs-factory 基于 https://api-explorer.authing.cn V3 API 自动生成，和 API 参数、返回结果保持一致，如此文档描述有误，请以 V3 API 为准。


获取 WebAuthn 认证请求初始化参数

## 方法名称

`AuthenticationClient.init_authentication_options`

## 请求参数

| 名称 | 类型 | <div style="width:80px">是否必填</div> | 默认值 | <div style="width:300px">描述</div> | <div style="width:200px"></div>示例值</div> |
| ---- | ---- | ---- | ---- | ---- | ---- |




## 请求响应

类型： `GetAuthenticationOptionsRespDto`

| 名称 | 类型 | 描述 |
| ---- | ---- | ---- |
| statusCode | number | 业务状态码，可以通过此状态码判断操作是否成功，200 表示成功。 |
| message | string | 描述信息 |
| apiCode | number | 细分错误码，可通过此错误码得到具体的错误类型（成功请求不返回）。详细错误码列表请见：[API Code 列表](https://api-explorer.authing.cn/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId | string | 请求 ID。当请求失败时会返回。 |
| data | <a href="#AuthenticationOptionsDto">AuthenticationOptionsDto</a> | 响应数据 |



示例结果：

```json
{
  "statusCode": 200,
  "message": "操作成功",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "authenticationOptions": {
      "allowCredentials": {
        "type": "public-key"
      },
      "timeout": "60000"
    }
  }
}
```

## 数据结构


### <a id="AuthenticationOptionsDto"></a> AuthenticationOptionsDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| authenticationOptions |  | 是 | 认证器认证参数 嵌套类型：<a href="#PublicKeyCredentialRequestOptionsDto">PublicKeyCredentialRequestOptionsDto</a>。  |  |
| ticket | string | 是 | ticket 需回传，用作向服务器发起验证从认证器获得的认证结果   |  |


### <a id="PublicKeyCredentialRequestOptionsDto"></a> PublicKeyCredentialRequestOptionsDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| challenge | string | 是 | 挑战码, base64Url 编码   |  |
| allowCredentials | array | 否 | 认证器认证参数 嵌套类型：<a href="#PublicKeyCredentialDescriptorDto">PublicKeyCredentialDescriptorDto</a>。  |  |
| rpId | string | 是 | 信赖方 ID，和注册认证器时一致   |  |
| timeout | number | 是 | 超时时间(毫秒值)   |  `60000` |


### <a id="PublicKeyCredentialDescriptorDto"></a> PublicKeyCredentialDescriptorDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| id | string | 是 | 允许的凭证 ID   |  |
| transports | array | 是 | 凭证所需的认证器与用户代理的通信方式:<br>- `ble`: 可以通过蓝牙连接的认证器<br>- `internal`: 平台内置的、无法移除的认证器<br>- `nfc`: 可以通过 NFC 连接的认证器<br>- `usb`: 可以通过 USB 连接的认证器<br>   |  |
| type | string | 是 | 固定值，public-key   |  `public-key` |


