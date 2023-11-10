# 我的设备列表

<!--
  警告⚠️：
  不要直接修改该文档，
  https://github.com/Authing/authing-docs-factory
  使用该项目进行生成
-->

<LastUpdated />

> 此文档根据 https://github.com/authing/authing-docs-factory 基于 https://api-explorer.authing.cn V3 API 自动生成，和 API 参数、返回结果保持一致，如此文档描述有误，请以 V3 API 为准。


我登录过的设备列表。

## 方法名称

`AuthenticationClient.List`

## 请求参数

| 名称 | 类型 | <div style="width:80px">是否必填</div> | 默认值 | <div style="width:300px">描述</div> | <div style="width:200px"></div>示例值</div> |
| ---- | ---- | ---- | ---- | ---- | ---- |
 | page | number  | 否 | 1 | 当前页数，从 1 开始  | `1` |
 | limit | number  | 否 | 10 | 每页数目，最大不能超过 50，默认为 10  | `10` |




## 请求响应

类型： `TerminalSessionRespDto`

| 名称 | 类型 | 描述 |
| ---- | ---- | ---- |
| statusCode | number | 业务状态码，可以通过此状态码判断操作是否成功，200 表示成功。 |
| message | string | 描述信息 |
| apiCode | number | 细分错误码，可通过此错误码得到具体的错误类型。详情可以查看开发准备中的 apiCode 细分说明 |
| requestId | string | 请求 ID。当请求失败时会返回。 |
| data | array | 响应数据 |



示例结果：

```json
{
  "statusCode": 200,
  "message": "操作成功",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "device": {
      "deviceId": "HZ2F6J3AGNAVSOTV",
      "name": "打印机",
      "version": "Android 1.0",
      "type": "Mobile",
      "mod": "Vig9a",
      "os": "iOS",
      "status": "activated",
      "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36"
    },
    "lastLoginTime": "2023-05-05T19:06:22.434Z",
    "online": true
  }
}
```

## 数据结构


### <a id="TerminalSessionDto"></a> TerminalSessionDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| device |  | 是 | 设备信息 嵌套类型：<a href="#DeviceInfo">DeviceInfo</a>。  |  |
| lastLoginTime | string | 是 | 最近登录时间   |  `2023-05-05T19:06:22.434Z` |
| lastIp | string | 否 | 最近登录 IP   |  |
| online | boolean | 是 | 是否在线   |  `true` |


### <a id="DeviceInfo"></a> DeviceInfo

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| deviceId | string | 是 | 设备唯一标识   |  `HZ2F6J3AGNAVSOTV` |
| name | string | 否 | 设备名称   |  `打印机` |
| version | string | 否 | 系统版本   |  `Android 1.0` |
| type | string | 是 | 设备类型   | Browser |
| mod | string | 否 | 设备模组   |  `Vig9a` |
| os | string | 否 | 设备系统   |  `iOS` |
| status | string | 否 | 设备状态   | activated |
| userAgent | string | 否 | 用户代理   |  `Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36` |


