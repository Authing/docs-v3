# 获取用户角色列表

<!--
  警告⚠️：
  不要直接修改该文档，
  https://github.com/Authing/authing-docs-factory
  使用该项目进行生成
-->

<LastUpdated />

通过用户 ID，获取用户角色列表，可以选择所属权限分组 code、选择指定用户 ID 类型等。

## 方法名称

`ManagementClient.getUserRoles`

## 请求参数

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:60px">默认值</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- | ---- | ---- | ---- | ---- | ---- |
 | userId | string  | 是 | - | 用户唯一标志，可以是用户 ID、用户名、邮箱、手机号、外部 ID、在外部身份源的 ID。  | `6229ffaxxxxxxxxcade3e3d9` |
 | userIdType | string  | 否 | user_id | 用户 ID 类型，默认值为 `user_id`，可选值为：<br>- `user_id`: Authing 用户 ID，如 `6319a1504f3xxxxf214dd5b7`<br>- `phone`: 用户手机号<br>- `email`: 用户邮箱<br>- `username`: 用户名<br>- `external_id`: 用户在外部系统的 ID，对应 Authing 用户信息的 `externalId` 字段<br>- `identity`: 用户的外部身份源信息，格式为 `<extIdpId>:<userIdInIdp>`，其中 `<extIdpId>` 为 Authing 身份源的 ID，`<userIdInIdp>` 为用户在外部身份源的 ID。<br>示例值：`62f20932716fbcc10d966ee5:ou_8bae746eac07cd2564654140d2a9ac61`。<br>  | `user_id` |
 | namespace | string  | 否 | - | 所属权限分组(权限空间)的 Code  | `default` |




## 示例代码

```java
package test.management;

import cn.authing.sdk.java.client.ManagementClient;
import cn.authing.sdk.java.dto.GetUserRolesDto;
import cn.authing.sdk.java.dto.RolePaginatedRespDto;
import cn.authing.sdk.java.model.ManagementClientOptions;
import cn.authing.sdk.java.util.JsonUtils;

public class GetUserRolesTest {
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

        GetUserRolesDto reqDto = new GetUserRolesDto();
        reqDto.setUserId("6229ffaxxxxxxxxcade3e3d9");
        RolePaginatedRespDto response = client.getUserRoles(reqDto);
        System.out.println(JsonUtils.serialize(response));
    }
}

```




## 请求响应

类型： `RolePaginatedRespDto`

| 名称 | 类型 | 描述 |
| ---- | ---- | ---- |
| statusCode | number | 业务状态码，可以通过此状态码判断操作是否成功，200 表示成功。 |
| message | string | 描述信息 |
| apiCode | number | 细分错误码，可通过此错误码得到具体的错误类型。 |
| requestId | string | 请求 ID。当请求失败时会返回。 |
| data | <a href="#RolePagingDto">RolePagingDto</a> | 响应数据 |



示例结果：

```json
{
  "statusCode": 200,
  "message": "操作成功",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "list": {
      "code": "role1",
      "name": "role1",
      "description": "this is role description",
      "namespace": "default",
      "namespaceName": "示例权限名称",
      "status": "ENABLE",
      "disableTime": "1669881887852"
    }
  }
}
```

## 数据结构


### <a id="RolePagingDto"></a> RolePagingDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| totalCount | number | 是 | 记录总数   |  |
| list | array | 是 | 响应数据 嵌套类型：<a href="#RoleDto">RoleDto</a>。  |  |


### <a id="RoleDto"></a> RoleDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| code | string | 是 | 权限分组(权限空间)内角色的唯一标识符 Code   |  `role1` |
| name | string | 是 | 权限分组(权限空间)内角色名称   |  `role1` |
| description | string | 是 | 角色描述   |  `this is role description` |
| namespace | string | 是 | 所属权限分组(权限空间)的 Code   |  `default` |
| namespaceName | string | 是 | 所属权限分组(权限空间)的名称   |  `示例权限名称` |
| status | string | 否 | 角色状态，ENABLE-表示正常，DISABLE-表示禁止   |  `ENABLE` |
| disableTime | number | 否 | 角色自动禁止时间，单位毫秒, 如果传null表示永久有效   |  `1669881887852` |


