# 获取应用开启的外部身份源列表

<LastUpdated />

获取应用开启的外部身份源列表，前端可以基于此渲染外部身份源按钮。

## 请求参数

| 名称 | 类型 | <div style="width:80px">是否必填</div> | 默认值 | <div style="width:300px">描述</div> | <div style="width:200px"></div>示例值</div> |
| ---- | ---- | ---- | ---- | ---- | ---- |


## 示例代码
```java
AuthClient authClient = new AuthClient();
authClient.getExtIdps((AuthCallback) response -> {
    if (response.getStatusCode() == 200) {
        JSONObject data = response.getData();
        // data：请求成功返回的数据
    }
});
```


## 请求响应

类型： `AuthResponse`

| 名称       | 类型       | 描述                                                         |
| ---------- | ---------- | ------------------------------------------------------------ |
| statusCode | int        | 业务状态码，可以通过此状态码判断操作是否成功，200 表示成功。 |
| message    | String     | 描述信息                                                     |
| apiCode    | int        | 细分错误码，可通过此错误码得到具体的错误类型。               |
| requestId  | String     | 请求 ID，当请求失败时会返回。                                |
| data       | JSONObject | 响应数据<br/>参考：<a href="#data">data</a>。                |



示例结果：

```json
{
  "statusCode": 200,
  "message": "操作成功",
  "apiCode": 0,
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": [
    {
      "identifier": "wechat",
      "extIdpId": "string",
      "type": "oidc",
      "extIdpType": "social",
      "bindUrl": "string",
      "name": "string",
      "name_en": "string",
      "desc": "string",
      "desc_en": "string",
      "logo": "string"
    }
  ]
}
```

## 数据结构


### <a id="data"></a> data

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| identifier | string | 是 | 身份源连接唯一标志   |  `wechat` |
| extIdpId | string | 是 | 身份源 ID   |  |
| type | string | 是 | 身份源类型   | oidc |
| extIdpType | string | 是 | 认证类型   | social |
| bindUrl | string | 是 | 认证地址   |  |
| name | string | 是 | 身份源显示名称   |  |
| name_en | string | 否 | 身份源显示名称（英文）   |  |
| desc | string | 否 | 描述   |  |
| desc_en | string | 否 | 描述英文   |  |
| logo | string | 否 | 图标   |  |

