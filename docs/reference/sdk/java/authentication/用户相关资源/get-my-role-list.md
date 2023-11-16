# 获取角色列表

<!--
  警告⚠️：
  不要直接修改该文档，
  https://github.com/Authing/authing-docs-factory
  使用该项目进行生成
-->

<LastUpdated />

> 此文档根据 https://github.com/authing/authing-docs-factory 基于 https://api-explorer.authing.cn V3 API 自动生成，和 API 参数、返回结果保持一致，如此文档描述有误，请以 V3 API 为准。


获取角色列表

## 方法名称

`AuthenticationClient.getRoleList`

## 请求参数

| 名称 | 类型 | <div style="width:80px">是否必填</div> | 默认值 | <div style="width:300px">描述</div> | <div style="width:200px"></div>示例值</div> |
| ---- | ---- | ---- | ---- | ---- | ---- |
 | namespace | string  | 否 | - | 所属权限分组(权限空间)的 Code，不传获取默认权限分组。  | `default` |




## 示例代码

```java
package test.authentication;

import cn.authing.sdk.java.client.AuthenticationClient;
import cn.authing.sdk.java.dto.GetMyRoleListDto;
import cn.authing.sdk.java.dto.RoleListRespDto;
import cn.authing.sdk.java.model.AuthenticationClientOptions;
import cn.authing.sdk.java.util.JsonUtils;

public class GetRoleListTest {
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

        RoleListRespDto response = client.getRoleList(new GetMyRoleListDto());
        System.out.println(JsonUtils.serialize(response));
    }
}

```




## 请求响应

类型： `RoleListRespDto`

| 名称 | 类型 | 描述 |
| ---- | ---- | ---- |
| statusCode | number | 业务状态码，可以通过此状态码判断操作是否成功，200 表示成功。 |
| message | string | 描述信息 |
| apiCode | number | 细分错误码，可通过此错误码得到具体的错误类型（成功请求不返回）。详细错误码列表请见：[API Code 列表](https://api-explorer.authing.cn/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId | string | 请求 ID。当请求失败时会返回。 |
| data | array | 响应数据 |



示例结果：

```json
{
  "statusCode": 200,
  "message": "操作成功",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "id": "60b49eb83fd80adb96f26e68",
    "code": "role1",
    "name": "role1",
    "description": "this is role description",
    "namespace": "default",
    "namespaceName": "示例权限名称",
    "status": "ENABLE",
    "disableTime": "1669881887852"
  }
}
```

## 数据结构


### <a id="RoleDto"></a> RoleDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| id | string | 是 | 角色 ID   |  `60b49eb83fd80adb96f26e68` |
| code | string | 是 | 权限分组(权限空间)内角色的唯一标识符 Code   |  `role1` |
| name | string | 是 | 权限分组(权限空间)内角色名称   |  `role1` |
| description | string | 是 | 角色描述   |  `this is role description` |
| namespace | string | 是 | 所属权限分组(权限空间)的 Code，不传获取默认权限分组。   |  `default` |
| namespaceName | string | 是 | 所属权限分组(权限空间)的名称   |  `示例权限名称` |
| status | string | 否 | 角色状态，ENABLE-表示正常，DISABLE-表示禁止   |  `ENABLE` |
| disableTime | number | 否 | 角色自动禁止时间，单位毫秒, 如果传null表示永久有效   |  `1669881887852` |


