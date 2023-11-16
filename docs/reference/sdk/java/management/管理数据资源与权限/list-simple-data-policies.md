# 获取数据策略简略信息列表

<!--
  警告⚠️：
  不要直接修改该文档，
  https://github.com/Authing/authing-docs-factory
  使用该项目进行生成
-->

<LastUpdated />

> 此文档根据 https://github.com/authing/authing-docs-factory 基于 https://api-explorer.authing.cn V3 API 自动生成，和 API 参数、返回结果保持一致，如此文档描述有误，请以 V3 API 为准。

分页获取数据策略简略信息列表，通过关键字搜索数据策略名称或者数据策略 Code 进行模糊查找出数据策略 ID、数据策略名称和数据策略描述信息。

## 方法名称

`ManagementClient.listSimpleDataPolices`

## 请求参数

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:60px">默认值</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- | ---- | ---- | ---- | ---- | ---- |
 | page | number  | 否 | 1 | 当前页数，从 1 开始  | `1` |
 | limit | number  | 否 | 10 | 每页数目，最大不能超过 50，默认为 10  | `10` |
 | query | string  | 否 | - | 数据策略名称关键字搜索  | `examplePolicyName` |




## 示例代码

```java
package test.management.dataPermission.policy;

import cn.authing.sdk.java.client.ManagementClient;
import cn.authing.sdk.java.dto.ListSimpleDataPoliciesDto;
import cn.authing.sdk.java.dto.ListSimpleDataPoliciesPaginatedRespDto;
import cn.authing.sdk.java.model.ManagementClientOptions;
import cn.authing.sdk.java.util.JsonUtils;

public class ListSimpleDataPolicesTest {
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

        ListSimpleDataPoliciesDto reqDto = new ListSimpleDataPoliciesDto();
        reqDto.setPage(1);
        reqDto.setLimit(10);
        reqDto.setQuery("examplePolicyName");
        ListSimpleDataPoliciesPaginatedRespDto response = client.listSimpleDataPolices(reqDto);
        System.out.println(JsonUtils.serialize(response));
    }
}

```




## 请求响应

类型： `ListSimpleDataPoliciesPaginatedRespDto`

| 名称 | 类型 | 描述 |
| ---- | ---- | ---- |
| statusCode | number | 业务状态码，可以通过此状态码判断操作是否成功，200 表示成功。 |
| message | string | 描述信息 |
| apiCode | number | 细分错误码，可通过此错误码得到具体的错误类型（成功请求不返回）。详细错误码列表请见：[API Code 列表](https://api-explorer.authing.cn/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId | string | 请求 ID。当请求失败时会返回。 |
| data | <a href="#DataPoliciesSimplePaginatedRespDto">DataPoliciesSimplePaginatedRespDto</a> | 响应数据 |



示例结果：

```json
{
  "statusCode": 200,
  "message": "操作成功",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "totalCount": 20,
    "list": {
      "policyId": "60b49xxxxxxxxxxxxxxx6e68",
      "policyName": "示例数据策略名称",
      "description": "示例数据策略描述"
    }
  }
}
```

## 数据结构


### <a id="DataPoliciesSimplePaginatedRespDto"></a> DataPoliciesSimplePaginatedRespDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| totalCount | number | 否 | 记录总数   |  `20` |
| list | array | 是 | 响应数据 嵌套类型：<a href="#ListSimpleDataPoliciesRespDto">ListSimpleDataPoliciesRespDto</a>。  |  |


### <a id="ListSimpleDataPoliciesRespDto"></a> ListSimpleDataPoliciesRespDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| policyId | string | 是 | 数据策略 ID   |  `60b49xxxxxxxxxxxxxxx6e68` |
| policyName | string | 是 | 数据策略名称，用户池唯一   |  `示例数据策略名称` |
| description | string | 否 | 数据策略描述   |  `示例数据策略描述` |


