# 判断用户在树资源同层级下的权限（推荐）

<!--
  警告⚠️：
  不要直接修改该文档，
  https://github.com/Authing/authing-docs-factory
  使用该项目进行生成
-->

<LastUpdated />

> 此文档根据 https://github.com/authing/authing-docs-factory 基于 https://api-explorer.authing.cn V3 API 自动生成，和 API 参数、返回结果保持一致，如此文档描述有误，请以 V3 API 为准。


  ## 描述
  此接口用于判断用户是否拥有某一树资源的**同层级下**部分的节点的某种权限。由于树类型资源比较常用，所以我们基于“判断用户是否拥有资源权限”的业务场景，新增了针对判断树这种类型资源节点权限的接口。
  ## 注意
  我们通过`resource`参数定位到树类型数据资源的某一层级（所以该参数是按照`资源 code/节点 code 路径`格式进行传递的），并通过`resourceNodeCodes`参数定位到是当前曾经的哪些节点。
  ## 场景举例
假如你的业务场景是：当在一个文件系统中，用户在删除某一文件夹下某些文件，需要判断他是否拥有这些文件的删除权限，则可以使用此接口。
## 请求示例
### 判断用户在树资源同层级权限示例（无条件判断）

```json
{
  "namespaceCode": "examplePermissionNamespace",
  "userId": "63721xxxxxxxxxxxxdde14a3",
  "action": "read",
  "resource": "treeResourceCode/structCode",
  "resourceNodeCodes": ["resourceStructChildrenCode1","resourceStructChildrenCode2","resourceStructChildrenCode3"]
}
```

### 判断用户在树资源同层级权限示例（开启条件判断）

```json
{
  "namespaceCode": "examplePermissionNamespace",
  "userId": "63721xxxxxxxxxxxxdde14a3",
  "action": "read",
  "resource": "treeResourceCode/structCode",
  "resourceNodeCodes": ["resourceStructChildrenCode1","resourceStructChildrenCode2","resourceStructChildrenCode3"],
  "judgeConditionEnabled": true,
  "authEnvParams":{
      "ip":"110.96.0.0",
      "city":"北京",
      "province":"北京",
      "country":"中国",
      "deviceType":"PC",
      "systemType":"ios",
      "browserType":"IE",
      "requestDate":"2022-12-26 17:40:00"
  }
}
```
  

## 方法名称

`ManagementClient.checkUserSameLevelPermission`

## 请求参数

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:60px">默认值</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- | ---- | ---- | ---- | ---- | ---- |
| resourceNodeCodes | string[] | 是 | - | 当前树资源路径子节点 Code  | `["resourceStructChildrenCode1"]` |
| resource | string | 是 | - | 树资源路径,允许多层级路径，示例如下所示<br>- treeResourceCode<br>- treeResourceCode/structCode<br>- treeResourceCode/structCode/struct1Code<br>- treeResourceCode/.../structCode  | `treeResourceCode` |
| action | string | 是 | - | 数据资源权限操作  | `read` |
| userId | string | 是 | - | 用户 ID  | `63721xxxxxxxxxxxxdde14a3` |
| namespaceCode | string | 是 | - | 权限空间 Code  | `examplePermissionNamespace` |
| judgeConditionEnabled | boolean | 否 | - | 是否开启条件判断，默认 false 不开启  |  |
| authEnvParams | <a href="#AuthEnvParams">AuthEnvParams</a> | 否 | - | 条件环境属性，若开启条件判断则使用  | `{"ip":"127.0.0.1"}` |




## 示例代码

```java
package test.management;

import cn.authing.sdk.java.client.ManagementClient;
import cn.authing.sdk.java.dto.CheckUserSameLevelPermissionDto;
import cn.authing.sdk.java.dto.CheckUserSameLevelPermissionRespDto;
import cn.authing.sdk.java.dto.CheckUserSameLevelPermissionResponseDto;
import cn.authing.sdk.java.model.ManagementClientOptions;
import cn.authing.sdk.java.util.JsonUtils;


public class CheckUserSameLevelPermissionTest {

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

        CheckUserSameLevelPermissionDto request = new CheckUserSameLevelPermissionDto();
        request.setNamespaceCode("examplePermissionNamespace");
        request.setUserId("63721xxxxxxxxxxxxdde14a3");
        request.setAction("get");
        request.setResource("treeResourceCode");

        CheckUserSameLevelPermissionResponseDto response = client
                .checkUserSameLevelPermission(request);
        System.out.println(JsonUtils.serialize(response));
    }

}
```




## 请求响应

类型： `CheckUserSameLevelPermissionResponseDto`

| 名称 | 类型 | 描述 |
| ---- | ---- | ---- |
| statusCode | number | 业务状态码，可以通过此状态码判断操作是否成功，200 表示成功。 |
| message | string | 描述信息 |
| apiCode | number | 细分错误码，可通过此错误码得到具体的错误类型。详情可以查看开发准备中的 apiCode 细分说明 |
| requestId | string | 请求 ID。当请求失败时会返回。 |
| data | <a href="#CheckUserSameLevelPermissionDataDto">CheckUserSameLevelPermissionDataDto</a> | 响应数据 |



示例结果：

```json
{
  "statusCode": 200,
  "message": "操作成功",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "checkLevelResultList": {
      "action": "get",
      "resourceNodeCode": "treeResourceStructChildrenCode1",
      "enabled": true
    }
  }
}
```

## 数据结构


### <a id="AuthEnvParams"></a> AuthEnvParams

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| ip | string | 否 | ip   |  `127.0.0.1` |
| city | string | 否 | 城市   |  `北京` |
| province | string | 否 | 省份   |  `湖北` |
| country | string | 否 | 国家   |  `中国` |
| deviceType | string | 否 | 设备类型：PC/Mobile   | PC |
| systemType | string | 否 | 操作类型：Windows、Android、iOS、MacOS   | Windows |
| browserType | string | 否 | 浏览器类型：IE/Chrome/Firefox   | IE |
| requestDate | string | 否 | 请求时间   |  `2022-07-03T02:20:30.000Z` |


### <a id="CheckUserSameLevelPermissionDataDto"></a> CheckUserSameLevelPermissionDataDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| checkLevelResultList | array | 是 | 响应结果列表 嵌套类型：<a href="#CheckUserSameLevelPermissionRespDto">CheckUserSameLevelPermissionRespDto</a>。  |  |


### <a id="CheckUserSameLevelPermissionRespDto"></a> CheckUserSameLevelPermissionRespDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| action | string | 是 | 数据资源权限操作   |  `get` |
| resourceNodeCode | string | 是 | 树资源节点code   |  `treeResourceStructChildrenCode1` |
| enabled | boolean | 是 | 是否拥有 action 权限   |  `true` |


