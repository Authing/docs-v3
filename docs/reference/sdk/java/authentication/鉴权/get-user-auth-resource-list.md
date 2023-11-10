# 获取用户在登录应用下被授权资源列表

<!--
  警告⚠️：
  不要直接修改该文档，
  https://github.com/Authing/authing-docs-factory
  使用该项目进行生成
-->

<LastUpdated />

> 此文档根据 https://github.com/authing/authing-docs-factory 基于 https://api-explorer.authing.cn V3 API 自动生成，和 API 参数、返回结果保持一致，如此文档描述有误，请以 V3 API 为准。


获取用户指定资源权限列表，用户获取在某个应用下所拥有的资源列表。

## 方法名称

`AuthenticationClient.getUserAuthorizedResourcesList`

## 请求参数

| 名称 | 类型 | <div style="width:80px">是否必填</div> | 默认值 | <div style="width:300px">描述</div> | <div style="width:200px"></div>示例值</div> |
| ---- | ---- | ---- | ---- | ---- | ---- |




## 示例代码

```java
package test.authentication;

import cn.authing.sdk.java.client.AuthenticationClient;
import cn.authing.sdk.java.dto.CheckPermissionArrayResourceDto;
import cn.authing.sdk.java.dto.CheckResourcePermissionsRespDto;
import cn.authing.sdk.java.dto.GetUserAuthResourceListRespDto;
import cn.authing.sdk.java.dto.LoginTokenRespDto;
import cn.authing.sdk.java.dto.SignInOptionsDto;
import cn.authing.sdk.java.model.AuthenticationClientOptions;
import cn.authing.sdk.java.util.JsonUtils;
import java.util.ArrayList;

public class GetUserAuthResourceListTest {
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

        GetUserAuthResourceListRespDto userAuthorizedResourcesList = client
                .getUserAuthorizedResourcesList();
        System.out.println(JsonUtils.serialize(userAuthorizedResourcesList));
    }
}
```




## 请求响应

类型： `GetUserAuthResourceListRespDto`

| 名称 | 类型 | 描述 |
| ---- | ---- | ---- |
| statusCode | number | 业务状态码，可以通过此状态码判断操作是否成功，200 表示成功。 |
| message | string | 描述信息 |
| apiCode | number | 细分错误码，可通过此错误码得到具体的错误类型。详情可以查看开发准备中的 apiCode 细分说明 |
| requestId | string | 请求 ID。当请求失败时会返回。 |
| data | <a href="#GetUserAuthResourceListDataDto">GetUserAuthResourceListDataDto</a> | 响应数据 |



示例结果：

```json
{
  "statusCode": 200,
  "message": "操作成功",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "userPermissionList": {
      "userId": "6301cexxxxxxxxxxxxxxxxx78",
      "namespaceCode": "examplePermissionNamespace",
      "resourceList": {
        "resourceCode": "resourceCode",
        "resourceType": "STRING",
        "strAuthorize": {
          "value": "示例字符串资源 Value",
          "actions": "[\"read\",\"get\"]"
        },
        "arrAuthorize": {
          "values": "[\"value0\",\"value1\"]",
          "actions": "[\"read\",\"get\"]"
        },
        "treeAuthorize": {
          "authList": {
            "nodePath": "/treeCode1/treeCode11",
            "nodeName": "示例树资源节点名称",
            "nodeActions": "[\"read\",\"get\"]",
            "nodeValue": "示例树资源节点 Value"
          }
        }
      }
    }
  }
}
```

## 数据结构


### <a id="GetUserAuthResourceListDataDto"></a> GetUserAuthResourceListDataDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| userPermissionList | array | 是 | 用户权限列表 嵌套类型：<a href="#UserAuthResourceListDto">UserAuthResourceListDto</a>。  |  |


### <a id="UserAuthResourceListDto"></a> UserAuthResourceListDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| userId | string | 是 | 数据策略授权的用户 ID   |  `6301cexxxxxxxxxxxxxxxxx78` |
| namespaceCode | string | 是 | 数据策略授权的权限空间 Code   |  `examplePermissionNamespace` |
| resourceList | array | 否 | 用户在权限空间下所有的数据策略资源列表 嵌套类型：<a href="#OpenResource">OpenResource</a>。  |  |


### <a id="OpenResource"></a> OpenResource

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| resourceCode | string | 是 | 数据策略下所授权的数据资源 Code   |  `resourceCode` |
| resourceType | string | 是 | 数据策略下所授权的数据资源类型，目前支持树结构（TREE）、字符串（STRING）、数组（ARRAY）三种类型，根据不同的类型返回不同的结构。<br>- `STRING`: 字符串类型结果 StrAuthorize<br>- `ARRAY`: 数组类型 ArrayAuthorize<br>- `TREE`: 树类型 TreeAuthorize    | TREE |
| strAuthorize |  | 否 | 数据策略的字符串资源 嵌套类型：<a href="#StrAuthorize">StrAuthorize</a>。  |  |
| arrAuthorize |  | 否 | 数据策略的数组资源 嵌套类型：<a href="#ArrayAuthorize">ArrayAuthorize</a>。  |  |
| treeAuthorize |  | 否 | 数据策略的树资源 嵌套类型：<a href="#TreeAuthorize">TreeAuthorize</a>。  |  |


### <a id="StrAuthorize"></a> StrAuthorize

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| value | string | 是 | 字符串资源 Value   |  `示例字符串资源 Value` |
| actions | array | 是 | 字符串资源操作列表   |  `["read","get"]` |


### <a id="ArrayAuthorize"></a> ArrayAuthorize

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| values | array | 是 | 数组资源 Value 列表   |  `["value0","value1"]` |
| actions | array | 是 | 数组资源操作列表   |  `["read","get"]` |


### <a id="TreeAuthorize"></a> TreeAuthorize

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| authList | array | 是 | 树资源授权列表 嵌套类型：<a href="#TreeAuthBo">TreeAuthBo</a>。  |  |


### <a id="TreeAuthBo"></a> TreeAuthBo

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| nodePath | string | 是 | 树资源节点路径   |  `/treeCode1/treeCode11` |
| nodeName | string | 是 | 树资源节点名称   |  `示例树资源节点名称` |
| nodeActions | array | 是 | 树资源节点操作权限列表   |  `["read","get"]` |
| nodeValue | string | 否 | 树资源节点 Value   |  `示例树资源节点 Value` |


