# 身份源连接开关

<!--
  警告⚠️：
  不要直接修改该文档，
  https://github.com/Authing/authing-docs-factory
  使用该项目进行生成
-->

<LastUpdated />

身份源连接开关，可以打开或关闭身份源连接。

## 方法名称

`ManagementClient.ChangeExtIdpConnState`

## 请求参数

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:60px">默认值</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- | ---- | ---- | ---- | ---- | ---- |
| appId | string | 是 | - | 应用 ID  | `60b49eb83fd80adb96f26e68` |
| enabled | boolean | 是 | - | 是否开启身份源连接  |  |
| id | string | 是 | - | 身份源连接 ID  | `60b49eb83fd80adb96f26e68` |
| tenantId | string | 否 | - | 租户 ID  | `60b49eb83fd80adb96f26e68` |
| appIds | string[] | 否 | - | 应用 ID 列表  |  |




## 请求响应

类型： `IsSuccessRespDto`

| 名称 | 类型 | 描述 |
| ---- | ---- | ---- |
| statusCode | number | 业务状态码，可以通过此状态码判断操作是否成功，200 表示成功。 |
| message | string | 描述信息 |
| apiCode | number | 细分错误码，可通过此错误码得到具体的错误类型。 |
| requestId | string | 请求 ID。当请求失败时会返回。 |
| data | <a href="#IsSuccessDto">IsSuccessDto</a> | 操作是否成功 |



示例结果：

```json
{
  "statusCode": 200,
  "message": "操作成功",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "success": true
  }
}
```

## 数据结构


### <a id="IsSuccessDto"></a> IsSuccessDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| success | boolean | 是 | 操作是否成功   |  `true` |


