# 分页获取权限空间列表

<!--
  警告⚠️：
  不要直接修改该文档，
  https://github.com/Authing/authing-docs-factory
  使用该项目进行生成
-->

<LastUpdated />

> 此文档根据 https://github.com/authing/authing-docs-factory 基于 https://api-explorer.authing.cn V3 API 自动生成，和 API 参数、返回结果保持一致，如此文档描述有误，请以 V3 API 为准。

分页获取权限空间列表。

## 方法名称

`ManagementClient.listPermissionNamespaces`

## 请求参数

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:60px">默认值</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- | ---- | ---- | ---- | ---- | ---- |
 | page | number  | 否 | 1 | 当前页数，从 1 开始  | `1` |
 | limit | number  | 否 | 10 | 每页数目，最大不能超过 50，默认为 10  | `10` |
 | query | string  | 否 | - | 权限空间 name  | `examplePermissionNamespace` |




## 示例代码

```java
package test.management;

import cn.authing.sdk.java.client.ManagementClient;
import cn.authing.sdk.java.dto.ListPermissionNamespacesDto;
import cn.authing.sdk.java.dto.PermissionNamespaceListPaginatedRespDto;
import cn.authing.sdk.java.model.ManagementClientOptions;
import cn.authing.sdk.java.util.JsonUtils;


public class ListPermissionNamespacesTest {
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

        ListPermissionNamespacesDto request = new ListPermissionNamespacesDto();
        request.setPage(1);
        request.setLimit(10);
        request.setQuery("示例权限空间");
        PermissionNamespaceListPaginatedRespDto response = client.listPermissionNamespaces(request);
        System.out.println(JsonUtils.serialize(response));
    }

}
```




## 请求响应

类型： `PermissionNamespaceListPaginatedRespDto`

| 名称 | 类型 | 描述 |
| ---- | ---- | ---- |
| statusCode | number | 业务状态码，可以通过此状态码判断操作是否成功，200 表示成功。 |
| message | string | 描述信息 |
| apiCode | number | 细分错误码，可通过此错误码得到具体的错误类型。详情可以查看开发准备中的 apiCode 细分说明 |
| requestId | string | 请求 ID。当请求失败时会返回。 |
| data | <a href="#PermissionNamespaceListPagingDto">PermissionNamespaceListPagingDto</a> | 数据 |



示例结果：

```json
{
  "statusCode": 200,
  "message": "操作成功",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "list": {
      "name": "示例权限空间名称",
      "code": "examplePermissionNamespace",
      "description": "dd8d7stf44",
      "status": 1
    }
  }
}
```

## 数据结构


### <a id="PermissionNamespaceListPagingDto"></a> PermissionNamespaceListPagingDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| totalCount | number | 是 | 记录总数   |  |
| list | array | 是 | 响应数据 嵌套类型：<a href="#PermissionNamespacesListRespDto">PermissionNamespacesListRespDto</a>。  |  |


### <a id="PermissionNamespacesListRespDto"></a> PermissionNamespacesListRespDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| name | string | 是 | 权限空间 名称   |  `示例权限空间名称` |
| code | string | 是 | 权限空间 Code   |  `examplePermissionNamespace` |
| description | string | 否 | 权限空间描述信息   |  `dd8d7stf44` |
| status | number | 否 | 权限空间状态：0 -> 关闭、1 -> 开启   |  `1` |


