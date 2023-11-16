# 自建 APP 扫码登录：APP 端修改二维码状态

<!--
  警告⚠️：
  不要直接修改该文档，
  https://github.com/Authing/authing-docs-factory
  使用该项目进行生成
-->

<LastUpdated />

> 此文档根据 https://github.com/authing/authing-docs-factory 基于 https://api-explorer.authing.cn V3 API 自动生成，和 API 参数、返回结果保持一致，如此文档描述有误，请以 V3 API 为准。


此端点用于在自建 APP 扫码登录中修改二维码状态，对应着在浏览器渲染出二维码之后，终端用户扫码、确认授权、取消授权的过程。**此接口要求具备用户的登录态**。

## 方法名称

`AuthenticationClient.changeQrCodeStatus`

## 请求参数

| 名称 | 类型 | <div style="width:80px">是否必填</div> | 默认值 | <div style="width:300px">描述</div> | <div style="width:200px"></div>示例值</div> |
| ---- | ---- | ---- | ---- | ---- | ---- |
| action | string | 是 | - | 修改二维码状态的动作:<br>- `SCAN`: 修改二维码状态为已扫码状态，当移动 APP 扫了码之后，应当立即执行此操作；<br>- `CONFIRM`: 修改二维码状态为已授权，执行此操作前必须先执行 `SCAN 操作；<br>- `CANCEL`: 修改二维码状态为已取消，执行此操作前必须先执行 `SCAN 操作；<br>      | `CONFIRM` |
| qrcodeId | string | 是 | - | 二维码唯一 ID  |  |




## 示例代码

```java
package test.authentication;

import cn.authing.sdk.java.client.AuthenticationClient;
import cn.authing.sdk.java.dto.ChangeQRCodeStatusDto;
import cn.authing.sdk.java.dto.CommonResponseDto;
import cn.authing.sdk.java.model.AuthenticationClientOptions;
import cn.authing.sdk.java.util.JsonUtils;

public class ChangeQrCodeStatusTest {
    // 需要替换成你的 Authing App ID
    private static final String APP_ID = "AUTHING_APP_ID";
    // 需要替换成你的 Authing App Secret
    private static final String APP_SECRET = "AUTHING_APP_SECRET";
    // 需要替换成你的 Authing App Host
    private static final String APP_HOST = "AUTHING_APP_HOST";
    // 需要替换成你的 Authing Access Token
    private static final String ACCESS_TOKEN = "AUTHING_ACCESS_TOKEN";

    public static void main(String[] args) throws Throwable {
        AuthenticationClientOptions clientOptions = new AuthenticationClientOptions();
        clientOptions.setAppId(APP_ID);
        clientOptions.setAppSecret(APP_SECRET);
        clientOptions.setAppHost(APP_HOST);
        clientOptions.setAccessToken(ACCESS_TOKEN);

        AuthenticationClient client = new AuthenticationClient(clientOptions);

        ChangeQRCodeStatusDto reqDto = new ChangeQRCodeStatusDto();
        reqDto.setQrcodeId("123");
        reqDto.setAction(ChangeQRCodeStatusDto.Action.CONFIRM);
        CommonResponseDto response = client.changeQrCodeStatus(reqDto);
        System.out.println(JsonUtils.serialize(response));
    }
}

```




## 请求响应

类型： `CommonResponseDto`

| 名称 | 类型 | 描述 |
| ---- | ---- | ---- |
| statusCode | number | 业务状态码，可以通过此状态码判断操作是否成功，200 表示成功。 |
| message | string | 描述信息 |
| apiCode | number | 细分错误码，可通过此错误码得到具体的错误类型（成功请求不返回）。详细错误码列表请见：[API Code 列表](https://api-explorer.authing.cn/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId | string | 请求 ID。当请求失败时会返回。 |



示例结果：

```json
{
  "statusCode": 200,
  "message": "操作成功",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c"
}
```

## 数据结构


