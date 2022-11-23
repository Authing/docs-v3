# 解密微信小程序数据

<!--
  警告⚠️：
  不要直接修改该文档，
  https://github.com/Authing/authing-docs-factory
  使用该项目进行生成
-->

<LastUpdated />

解密微信小程序数据

## 方法名称

`ManagementClient.decryptWechatMiniProgramData`

## 请求参数

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:60px">默认值</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- | ---- | ---- | ---- | ---- | ---- |
| code | string | 是 | - | `wx.login` 接口返回的用户 `code`  |  |
| iv | string | 是 | - | 对称解密算法初始向量，由微信返回  |  |
| encryptedData | string | 是 | - | 获取微信开放数据返回的加密数据（encryptedData）  |  |
| extIdpConnidentifier | string | 是 | - | 微信小程序的外部身份源连接标志符  | `my-wxapp` |




## 示例代码

```java
package test.authentication;

import cn.authing.sdk.java.client.AuthenticationClient;
import cn.authing.sdk.java.dto.DecryptWechatMiniProgramDataDto;
import cn.authing.sdk.java.dto.DecryptWechatMiniProgramDataRespDto;
import cn.authing.sdk.java.model.AuthenticationClientOptions;
import cn.authing.sdk.java.util.JsonUtils;

public class DecryptWechatMiniProgramDataTest {
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

        DecryptWechatMiniProgramDataDto reqDto = new DecryptWechatMiniProgramDataDto();
        reqDto.setCode("xxx");
        reqDto.setIv("xxx");
        reqDto.setEncryptedData("xxx");
        reqDto.setExtIdpConnidentifier("my-wxapp");
        DecryptWechatMiniProgramDataRespDto response = client.decryptWechatMiniProgramData(reqDto);
        System.out.println(JsonUtils.serialize(response));
    }
}

```




## 请求响应

类型： `DecryptWechatMiniProgramDataRespDto`

| 名称 | 类型 | 描述 |
| ---- | ---- | ---- |
| statusCode | number | 业务状态码，可以通过此状态码判断操作是否成功，200 表示成功。 |
| message | string | 描述信息 |
| apiCode | number | 细分错误码，可通过此错误码得到具体的错误类型。 |
| requestId | string | 请求 ID。当请求失败时会返回。 |
| data | object | 响应数据 |



示例结果：

```json
{
  "statusCode": 200,
  "message": "操作成功",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "nickName": "张三",
    "gender": 1,
    "language": "zh_CN",
    "city": "Guangzhou",
    "province": "Guangdong",
    "country": "CN",
    "avatarUrl": "http://wx.qlogo.cn/mmopen/vi_32/aSKcBBPpibyKNicHNTMM0qJVh8Kjgiak2AHWr8MHM4WgMEm7GFhsf8OYrySdbvAMvTsw3mo8ibKicsnfN5pRjl1p8HQ/0",
    "unionId": "ocMvos6NjeKLIBqg5Mr9QjxrP1FA",
    "watermark": {
      "timestamp": 1477314187,
      "appid": "wx4f4bc4dec97d474b"
    }
  }
}
```

## 数据结构


