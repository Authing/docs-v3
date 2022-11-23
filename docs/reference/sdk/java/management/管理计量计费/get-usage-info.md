# 获取用量详情

<!--
  警告⚠️：
  不要直接修改该文档，
  https://github.com/Authing/authing-docs-factory
  使用该项目进行生成
-->

<LastUpdated />

获取当前用户池用量详情。

## 方法名称

`ManagementClient.getUsageInfo`

## 请求参数

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:60px">默认值</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- | ---- | ---- | ---- | ---- | ---- |




## 示例代码

```java
package test.management;

import cn.authing.sdk.java.client.ManagementClient;
import cn.authing.sdk.java.dto.CostGetCurrentUsageRespDto;
import cn.authing.sdk.java.model.ManagementClientOptions;
import cn.authing.sdk.java.util.JsonUtils;

public class GetUsageInfoTest {
    // 需要替换成你的 Authing Access Key ID
    private static final String ACCESS_KEY_ID = "AUTHING_ACCESS_KEY_ID";
    // 需要替换成你的 Authing Access Key Secret
    private static final String ACCESS_KEY_SECRET = "AUTHING_ACCESS_KEY_SECRET";

    public static void main(String[] args) throws Throwable {
        ManagementClientOptions clientOptions = new ManagementClientOptions();
        clientOptions.setAccessKeyId(ACCESS_KEY_ID);
        clientOptions.setAccessKeySecret(ACCESS_KEY_SECRET);
        // 如果是私有化部署的客户，需要设置 Authing 服务域名
        // clientOptions.setHost("https://api.your-authing-service.com");

        ManagementClient client = new ManagementClient(clientOptions);

        CostGetCurrentUsageRespDto usageInfo = client.getUsageInfo();
        System.out.println(JsonUtils.serialize(usageInfo));
    }
}

```




## 请求响应

类型： `CostGetCurrentUsageRespDto`

| 名称 | 类型 | 描述 |
| ---- | ---- | ---- |
| statusCode | number | 业务状态码，可以通过此状态码判断操作是否成功，200 表示成功。 |
| message | string | 描述信息 |
| apiCode | number | 细分错误码，可通过此错误码得到具体的错误类型。 |
| requestId | string | 请求 ID。当请求失败时会返回。 |
| data | <a href="#CurrentUsageRespDto">CurrentUsageRespDto</a> | 响应数据 |



示例结果：

```json
{
  "statusCode": 200,
  "message": "操作成功",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "usages": {
      "amount": "0",
      "current": "0",
      "experience": true,
      "modelCode": "SocialConnections",
      "modelName": "SocialConnections：社交账号链接"
    }
  }
}
```

## 数据结构


### <a id="CurrentUsageRespDto"></a> CurrentUsageRespDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| usages | array | 是 | 当前用量实体 嵌套类型：<a href="#CurrentUsageDto">CurrentUsageDto</a>。  |  |


### <a id="CurrentUsageDto"></a> CurrentUsageDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| amount | string | 是 | 权益总量   |  `0` |
| current | string | 是 | 权益当前使用量   |  `0` |
| experience | boolean | 是 | 是否是体验期权益   |  `true` |
| modelCode | string | 是 | 权益编码   |  `SocialConnections` |
| modelName | string | 是 | 权益名称   |  `SocialConnections：社交账号链接` |


