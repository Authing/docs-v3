# 创建字符串数据资源

<!--
  警告⚠️：
  不要直接修改该文档，
  https://github.com/Authing/authing-docs-factory
  使用该项目进行生成
-->

<LastUpdated />

创建字符串数据资源，通过数据资源所属权限空间 Code、数据资源名称、数据资源 Code、数据资源节点和数据资源权限操作等字段进行创建

## 方法名称

`ManagementClient.createDataResourceByString`

## 请求参数

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:60px">默认值</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- | ---- | ---- | ---- | ---- | ---- |
| actions | string[] | 是 | - | 数据资源权限操作列表 数组长度限制：50。 | `["read","get"]` |
| struct | string | 是 | - | 字符串数据资源节点  | `exampleStringStruct` |
| resourceCode | string | 是 | - | 数据资源 Code,权限空间内唯一  | `dataResourceTestCode` |
| resourceName | string | 是 | - | 数据资源名称,权限空间内唯一  | `示例数据资源名称` |
| namespaceCode | string | 是 | - | 数据策略所在的权限空间 Code  | `code1` |
| description | string | 否 | - | 数据资源描述  | `示例数据资源描述` |




## 示例代码

```java
package test.management.dataPermission.resource;

import cn.authing.sdk.java.client.ManagementClient;
import cn.authing.sdk.java.dto.CreateStringDataResourceDto;
import cn.authing.sdk.java.dto.CreateStringDataResourceResponseDto;
import cn.authing.sdk.java.model.ManagementClientOptions;
import cn.authing.sdk.java.util.JsonUtils;

import java.util.ArrayList;
import java.util.List;

public class CreateDataResourceByStringTest {
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

        CreateStringDataResourceDto reqDto = new CreateStringDataResourceDto();
        reqDto.setResourceCode("stringResourceCode");
        reqDto.setNamespaceCode("examplePermissionNamespace");
        reqDto.setResourceName("示例字符串数据资源");
        List<String> list = new ArrayList<>();
        list.add("read");
        list.add("get");
        reqDto.setActions(list);
        reqDto.setStruct("exampleStringStruct");
        reqDto.setDescription("示例字符串数据资源描述");
        CreateStringDataResourceResponseDto response = client.createDataResourceByString(reqDto);
        System.out.println(JsonUtils.serialize(response));
    }
}

```




## 请求响应

类型： `CreateStringDataResourceResponseDto`

| 名称 | 类型 | 描述 |
| ---- | ---- | ---- |
| statusCode | number | 业务状态码，可以通过此状态码判断操作是否成功，200 表示成功。 |
| message | string | 描述信息 |
| apiCode | number | 细分错误码，可通过此错误码得到具体的错误类型。 |
| requestId | string | 请求 ID。当请求失败时会返回。 |
| data | <a href="#CreateStringDataResourceRespDto">CreateStringDataResourceRespDto</a> | 响应数据 |



示例结果：

```json
{
  "statusCode": 200,
  "message": "操作成功",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "resourceName": "示例数据资源名称",
    "resourceCode": "dataResourceTestCode",
    "type": "TREE",
    "description": "示例数据资源描述",
    "struct": "exampleStringStruct",
    "actions": "[\"read\",\"get\"]"
  }
}
```

## 数据结构


### <a id="CreateStringDataResourceRespDto"></a> CreateStringDataResourceRespDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| resourceName | string | 是 | 数据资源名称,权限空间内唯一   |  `示例数据资源名称` |
| resourceCode | string | 是 | 数据资源 Code,权限空间内唯一   |  `dataResourceTestCode` |
| type | string | 是 | 数据资源类型，目前支持树结构（TREE）、字符串（STRING）、数组（ARRAY）   | TREE |
| description | string | 否 | 数据资源描述   |  `示例数据资源描述` |
| struct | string | 是 | 字符串数据资源节点   |  `exampleStringStruct` |
| actions | array | 是 | 数据资源权限操作列表 数组长度限制：50。  |  `["read","get"]` |


