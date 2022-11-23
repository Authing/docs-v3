# 获取微信小程序、公众号 Access Token

<!--
  警告⚠️：
  不要直接修改该文档，
  https://github.com/Authing/authing-docs-factory
  使用该项目进行生成
-->

<LastUpdated />

获取 Authing 服务器缓存的微信小程序、公众号 Access Token

## 方法名称

`ManagementClient.getWechatMpAccessToken`

## 请求参数

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:60px">默认值</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- | ---- | ---- | ---- | ---- | ---- |
| appSecret | string | 是 | - | 微信小程序或微信公众号的 AppSecret  |  |
| appId | string | 是 | - | 微信小程序或微信公众号的 AppId  |  |




## 示例代码

```java
package test.authentication;

import cn.authing.sdk.java.client.AuthenticationClient;
import cn.authing.sdk.java.dto.GetWechatAccessTokenDto;
import cn.authing.sdk.java.dto.GetWechatAccessTokenRespDto;
import cn.authing.sdk.java.model.AuthenticationClientOptions;
import cn.authing.sdk.java.util.JsonUtils;

public class GetWechatMpAccessTokenTest {
    // 需要替换成你的 Authing App ID
    private static final String APP_ID = "AUTHING_APP_ID";
    // 需要替换成你的 Authing App Secret
    private static final String APP_SECRET = "AUTHING_APP_SECRET";
    // 需要替换成你的 Authing App Host
    private static final String APP_HOST = "AUTHING_APP_HOST";

    public static void main(String[] args) throws Throwable {
        AuthenticationClientOptions clientOptions = new AuthenticationClientOptions();
        clientOptions.setAppId(APP_ID);
        clientOptions.setAppSecret(APP_SECRET);
        clientOptions.setAppHost(APP_HOST);

        AuthenticationClient client = new AuthenticationClient(clientOptions);

        GetWechatAccessTokenDto reqDto = new GetWechatAccessTokenDto();
        reqDto.setAppId(APP_ID);
        reqDto.setAppSecret(APP_SECRET);
        GetWechatAccessTokenRespDto response = client.getWechatMpAccessToken(reqDto);
        System.out.println(JsonUtils.serialize(response));
    }
}

```




## 请求响应

类型： `GetWechatAccessTokenRespDto`

| 名称 | 类型 | 描述 |
| ---- | ---- | ---- |
| statusCode | number | 业务状态码，可以通过此状态码判断操作是否成功，200 表示成功。 |
| message | string | 描述信息 |
| apiCode | number | 细分错误码，可通过此错误码得到具体的错误类型。 |
| requestId | string | 请求 ID。当请求失败时会返回。 |
| data | <a href="#GetWechatAccessTokenDataDto">GetWechatAccessTokenDataDto</a> | 响应数据 |



示例结果：

```json
{
  "statusCode": 200,
  "message": "操作成功",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {}
}
```

## 数据结构


### <a id="GetWechatAccessTokenDataDto"></a> GetWechatAccessTokenDataDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| accessToken | string | 是 | Authing 服务器缓存的微信 Access Token   |  |
| expiresAt | number | 是 | Access Token 到期时间，为单位为秒的时间戳   |  |


