# 授权数据策略

<!--
  警告⚠️：
  不要直接修改该文档，
  https://github.com/Authing/authing-docs-factory
  使用该项目进行生成
-->

<LastUpdated />

> 此文档根据 https://github.com/authing/authing-docs-factory 基于 https://api-explorer.authing.cn V3 API 自动生成，和 API 参数、返回结果保持一致，如此文档描述有误，请以 V3 API 为准。

数据策略创建主体授权，通过授权主体和数据策略进行相互授权。

## 方法名称

`ManagementClient.authorizeDataPolicies`

## 请求参数

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:60px">默认值</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- | ---- | ---- | ---- | ---- | ---- |
| targetList | <a href="#SubjectDto">SubjectDto[]</a> | 是 | - | 数据权限列表，每个策略下所有的数据权限  |  |
| policyIds | string[] | 是 | - | 数据策略 id 列表 数组长度限制：50。 | `["6301cexxxxxxxxxx27478","63123cexxxxxxxxxx2123101"]` |




## 示例代码

```java
package test.management.dataPermission.policy;

import cn.authing.sdk.java.client.ManagementClient;
import cn.authing.sdk.java.dto.CommonResponseDto;
import cn.authing.sdk.java.dto.CreateAuthorizeDataPolicyDto;
import cn.authing.sdk.java.dto.SubjectDto;
import cn.authing.sdk.java.model.ManagementClientOptions;
import cn.authing.sdk.java.util.JsonUtils;
import com.nimbusds.jose.shaded.ow2asm.Type;

import java.util.ArrayList;
import java.util.List;

public class AuthorizeDataPoliciesTest {
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

        CreateAuthorizeDataPolicyDto reqDto = new CreateAuthorizeDataPolicyDto();
        List<String> list = new ArrayList<>();
        list.add("6301cexxxxxxxxxx27478");
        list.add("63123cexxxxxxxxxx2123101");
        reqDto.setPolicyIds(list);
        List<SubjectDto> targetList = new ArrayList<>();
        SubjectDto subjectDto = new SubjectDto();
        subjectDto.setId("6301cexxxxxxxxxxxxxxxxx78");
        subjectDto.setName("用户名称");
        subjectDto.setType(SubjectDto.Type.USER);
        targetList.add(subjectDto);
        reqDto.setTargetList(targetList);
        CommonResponseDto response = client.authorizeDataPolicies(reqDto);
        System.out.println(JsonUtils.serialize(response));
    }
}

```




## 请求响应

类型： `CommonResponseDto`

| 名称 | 类型 | 描述 |
| ---- | ---- | ---- |
| statusCode | number | 业务状态码，可以通过此状态码判断操作是否成功，200 表示成功。 |
| message | string | 描述信息 |
| apiCode | number | 细分错误码，可通过此错误码得到具体的错误类型（成功请求不返回）。详细错误码列表请见：[API Code 列表](https://api-explorer.authing.cn/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId | string | 请求 ID。当请求失败时会返回。 |



示例结果：

```json
{
  "statusCode": 200,
  "message": "操作成功",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c"
}
```

## 数据结构


### <a id="SubjectDto"></a> SubjectDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| id | string | 是 | 主体 ID ，包含用户 ID、用户组 ID、角色 ID、组织机构 ID   |  `6301cexxxxxxxxxxxxxxxxx78` |
| type | string | 是 | 主体类型,包括 USER、GROUP、ROLE、ORG 四种类型   | USER |
| name | string | 否 | 主体名称，包含用户名称、用户组名称、角色名称、组织机构名称   |  `用户名称` |


