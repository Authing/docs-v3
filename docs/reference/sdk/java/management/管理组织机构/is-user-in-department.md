# 判断用户是否在某个部门下

<!--
  警告⚠️：
  不要直接修改该文档，
  https://github.com/Authing/authing-docs-factory
  使用该项目进行生成
-->

<LastUpdated />

> 此文档根据 https://github.com/authing/authing-docs-factory 基于 https://api-explorer.authing.cn V3 API 自动生成，和 API 参数、返回结果保持一致，如此文档描述有误，请以 V3 API 为准。

通过组织 code、部门 ID，判断用户是否在某个部门下，可以选择包含子部门。

## 方法名称

`ManagementClient.isUserInDepartment`

## 请求参数

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:60px">默认值</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- | ---- | ---- | ---- | ---- | ---- |
 | departmentId | string  | 是 | - | 部门 ID，根部门传 `root`。departmentId 和 departmentCode 必传其一。  | `root` |
 | organizationCode | string  | 是 | - | 组织 code  | `steamory` |
 | userId | string  | 是 | - | 用户的唯一标志，可以是用户 ID、用户名、邮箱、手机号、externalId、在外部身份源的 ID，详情见 userIdType 字段的说明。默认为用户 id 。  | `6229ffaxxxxxxxxcade3e3d9` |
 | departmentIdType | string  | 否 | department_id | 此次调用中使用的部门 ID 的类型  | `department_id` |
 | includeChildrenDepartments | boolean  | 否 | - | 是否包含子部门  |  |
 | tenantId | string  | 否 | - | 租户 ID  | `623c20b2a062aaaaf41b17da` |




## 示例代码

```java
package test.management;

import cn.authing.sdk.java.client.ManagementClient;
import cn.authing.sdk.java.dto.IsUserInDepartmentDto;
import cn.authing.sdk.java.dto.IsUserInDepartmentRespDto;
import cn.authing.sdk.java.model.ManagementClientOptions;
import cn.authing.sdk.java.util.JsonUtils;

public class IsUserInDepartmentTest {
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

        IsUserInDepartmentDto reqDto = new IsUserInDepartmentDto();
        reqDto.setDepartmentId("root");
        reqDto.setUserId("6229ffaxxxxxxxxcade3e3d9");
        reqDto.setOrganizationCode("steamory");
        IsUserInDepartmentRespDto response = client.isUserInDepartment(reqDto);
        System.out.println(JsonUtils.serialize(response));
    }
}

```




## 请求响应

类型： `IsUserInDepartmentRespDto`

| 名称 | 类型 | 描述 |
| ---- | ---- | ---- |
| statusCode | number | 业务状态码，可以通过此状态码判断操作是否成功，200 表示成功。 |
| message | string | 描述信息 |
| apiCode | number | 细分错误码，可通过此错误码得到具体的错误类型（成功请求不返回）。详细错误码列表请见：[API Code 列表](https://api-explorer.authing.cn/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId | string | 请求 ID。当请求失败时会返回。 |
| data | <a href="#IsUserInDepartmentDataDto">IsUserInDepartmentDataDto</a> | 数据 |



示例结果：

```json
{
  "statusCode": 200,
  "message": "操作成功",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "inDepartment": true
  }
}
```

## 数据结构


### <a id="IsUserInDepartmentDataDto"></a> IsUserInDepartmentDataDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| inDepartment | boolean | 是 | 是否在此部门内   |  `true` |


