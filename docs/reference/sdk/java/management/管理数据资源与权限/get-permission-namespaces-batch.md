# 批量获取权限空间详情列表

<!--
  警告⚠️：
  不要直接修改该文档，
  https://github.com/Authing/authing-docs-factory
  使用该项目进行生成
-->

<LastUpdated />

> 此文档根据 https://github.com/authing/authing-docs-factory 基于 https://api-explorer.authing.cn V3 API 自动生成，和 API 参数、返回结果保持一致，如此文档描述有误，请以 V3 API 为准。

分别通过权限空间唯一标志符(Code)，获取权限空间详情。

## 方法名称

`ManagementClient.getPermissionNamespacesBatch`

## 请求参数

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:60px">默认值</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- | ---- | ---- | ---- | ---- | ---- |
 | codes | string[]  | 是 | - | 权限空间 code 列表，批量可以使用逗号分隔 数组长度限制：50。 | `["example1","example2"]` |




## 示例代码

```java
package test.management;

import cn.authing.sdk.java.client.ManagementClient;
import cn.authing.sdk.java.dto.GetPermissionNamespaceListResponseDto;
import cn.authing.sdk.java.dto.GetPermissionNamespacesBatchDto;
import cn.authing.sdk.java.model.ManagementClientOptions;
import cn.authing.sdk.java.util.JsonUtils;
import java.util.ArrayList;
import java.util.List;


public class GetPermissionNamespacesBatchTest {

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

        GetPermissionNamespacesBatchDto request = new GetPermissionNamespacesBatchDto();
        request.setCodes("code1,code2");
        GetPermissionNamespaceListResponseDto response = client.getPermissionNamespacesBatch(request);
        System.out.println(JsonUtils.serialize(response));
    }

}
```




## 请求响应

类型： `GetPermissionNamespaceListResponseDto`

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
    "code": "examplePermissionNamespace",
    "name": "示例权限空间",
    "description": "示例权限空间描述"
  }
}
```

## 数据结构


### <a id="GetPermissionNamespaceRespDto"></a> GetPermissionNamespaceRespDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| code | string | 是 | 权限空间唯一标志符   |  `examplePermissionNamespace` |
| name | string | 是 | 权限空间名称   |  `示例权限空间` |
| description | string | 否 | 权限空间描述信息   |  `示例权限空间描述` |


