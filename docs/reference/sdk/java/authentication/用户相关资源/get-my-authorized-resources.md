# 获取被授权的资源列表

<!--
  警告⚠️：
  不要直接修改该文档，
  https://github.com/Authing/authing-docs-factory
  使用该项目进行生成
-->

<LastUpdated />

> 此文档根据 https://github.com/authing/authing-docs-factory 基于 https://api-explorer.authing.cn V3 API 自动生成，和 API 参数、返回结果保持一致，如此文档描述有误，请以 V3 API 为准。


此接口用于获取用户被授权的资源列表。

## 方法名称

`AuthenticationClient.getAuthorizedResources`

## 请求参数

| 名称 | 类型 | <div style="width:80px">是否必填</div> | 默认值 | <div style="width:300px">描述</div> | <div style="width:200px"></div>示例值</div> |
| ---- | ---- | ---- | ---- | ---- | ---- |
 | namespace | string  | 否 | - | 所属权限分组(权限空间)的 Code，不传获取默认权限分组。  | `default` |
 | resourceType | string  | 否 | - | 资源类型，如 数据、API、菜单、按钮  |  |




## 示例代码

```java
package test.authentication;

import cn.authing.sdk.java.client.AuthenticationClient;
import cn.authing.sdk.java.dto.AuthorizedResourcePaginatedRespDto;
import cn.authing.sdk.java.dto.GetMyAuthorizedResourcesDto;
import cn.authing.sdk.java.model.AuthenticationClientOptions;
import cn.authing.sdk.java.util.JsonUtils;

public class GetAuthorizedResourcesTest {
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

        AuthorizedResourcePaginatedRespDto response = client.getAuthorizedResources(new GetMyAuthorizedResourcesDto());
        System.out.println(JsonUtils.serialize(response));
    }
}

```




## 请求响应

类型： `AuthorizedResourcePaginatedRespDto`

| 名称 | 类型 | 描述 |
| ---- | ---- | ---- |
| statusCode | number | 业务状态码，可以通过此状态码判断操作是否成功，200 表示成功。 |
| message | string | 描述信息 |
| apiCode | number | 细分错误码，可通过此错误码得到具体的错误类型（成功请求不返回）。详细错误码列表请见：[API Code 列表](https://api-explorer.authing.cn/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId | string | 请求 ID。当请求失败时会返回。 |
| data | <a href="#AuthorizedResourcePagingDto">AuthorizedResourcePagingDto</a> | 响应数据 |



示例结果：

```json
{
  "statusCode": 200,
  "message": "操作成功",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "list": {
      "resourceCode": "ecs:1",
      "description": "服务器",
      "condition": {
        "param": "AppId",
        "operator": "StringEquals",
        "value": "1"
      },
      "resourceType": "API",
      "apiIdentifier": "/api/v1/example",
      "actions": "[\"ecs:Start\",\"ecs:Stop\"]",
      "effect": "ALLOW"
    }
  }
}
```

## 数据结构


### <a id="AuthorizedResourcePagingDto"></a> AuthorizedResourcePagingDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| totalCount | number | 是 | 记录总数   |  |
| list | array | 是 | 响应数据 嵌套类型：<a href="#AuthorizedResourceDto">AuthorizedResourceDto</a>。  |  |


### <a id="AuthorizedResourceDto"></a> AuthorizedResourceDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| resourceCode | string | 是 | 资源描述符   |  `ecs:1` |
| description | string | 否 | 资源描述信息   |  `服务器` |
| condition | array | 否 | 策略 Condition 嵌套类型：<a href="#PolicyCondition">PolicyCondition</a>。  |  |
| resourceType | string | 是 | 资源类型   | DATA |
| apiIdentifier | string | 是 | API URL   |  `/api/v1/example` |
| actions | array | 是 | 授权的操作列表   |  `["ecs:Start","ecs:Stop"]` |
| effect | string | 是 | 允许还是拒绝   | ALLOW |


### <a id="PolicyCondition"></a> PolicyCondition

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| param | string | 是 | Condition Param   | UserPoolId |
| operator | string | 是 | Condition Operator   | Bool |
| value | string | 是 | Condition Value   |  `1` |


