# 删除应用访问授权记录

<!--
  警告⚠️：
  不要直接修改该文档，
  https://github.com/Authing/authing-docs-factory
  使用该项目进行生成
-->

<LastUpdated />

> 此文档根据 https://github.com/authing/authing-docs-factory 基于 https://api-explorer.authing.cn V3 API 自动生成，和 API 参数、返回结果保持一致，如此文档描述有误，请以 V3 API 为准。

取消给用户、分组、组织或角色的应用访问权限授权,如果传入数据不存在，则返回数据不报错处理。

## 方法名称

`ManagementClient.revokeApplicationAccess`

## 请求参数

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:60px">默认值</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- | ---- | ---- | ---- | ---- | ---- |
| list | <a href="#DeleteApplicationPermissionRecordItem">DeleteApplicationPermissionRecordItem[]</a> | 是 | - | 授权主体列表，最多 10 条  |  |
| appId | string | 是 | - | 应用 ID  | `6229ffaxxxxxxxxcade3e3d9` |




## 示例代码

```java
package test.management;

import cn.authing.sdk.java.client.ManagementClient;
import cn.authing.sdk.java.dto.DeleteApplicationPermissionRecordItem;
import cn.authing.sdk.java.dto.IsSuccessRespDto;
import cn.authing.sdk.java.dto.RevokeApplicationAccessDto;
import cn.authing.sdk.java.model.ManagementClientOptions;
import cn.authing.sdk.java.util.JsonUtils;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class RevokeApplicationAccessTest {
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

        RevokeApplicationAccessDto reqDto = new RevokeApplicationAccessDto();
        reqDto.setAppId("6229ffaxxxxxxxxcade3e3d9");
        List<DeleteApplicationPermissionRecordItem> list = new ArrayList<>();
        DeleteApplicationPermissionRecordItem recordItem = new DeleteApplicationPermissionRecordItem();
        recordItem.setTargetType(DeleteApplicationPermissionRecordItem.TargetType.USER);
        recordItem.setTargetIdentifier(Collections.singletonList("6sd9ffaxxxxxcade3eds9"));
        list.add(recordItem);
        reqDto.setList(list);
        IsSuccessRespDto response = client.revokeApplicationAccess(reqDto);
        System.out.println(JsonUtils.serialize(response));
    }
}

```




## 请求响应

类型： `IsSuccessRespDto`

| 名称 | 类型 | 描述 |
| ---- | ---- | ---- |
| statusCode | number | 业务状态码，可以通过此状态码判断操作是否成功，200 表示成功。 |
| message | string | 描述信息 |
| apiCode | number | 细分错误码，可通过此错误码得到具体的错误类型。详情可以查看开发准备中的 apiCode 细分说明 |
| requestId | string | 请求 ID。当请求失败时会返回。 |
| data | <a href="#IsSuccessDto">IsSuccessDto</a> | 操作是否成功 |



示例结果：

```json
{
  "statusCode": 200,
  "message": "操作成功",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "success": true
  }
}
```

## 数据结构


### <a id="DeleteApplicationPermissionRecordItem"></a> DeleteApplicationPermissionRecordItem

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| targetType | string | 是 | 主体类型   | USER |
| namespaceCode | string | 否 | 权限分组 code，当主体类型为 "ROLE" 时必传   |  `code1` |
| targetIdentifier | array | 是 | 主体标识列表，当主体类型为 "USER" 时，值应为用户 ID；当主体类型为 "GROUP" 时，值应为分组 code；当主体类型为 "ROLE" 时，值应为角色 code；当主体类型为 "ORG" 时，值应为组织节点 ID。最多 50 条。   |  `["6229ffaxxxxxxxxcade3e3d9"]` |


### <a id="IsSuccessDto"></a> IsSuccessDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| success | boolean | 是 | 操作是否成功   |  `true` |


