# 获取角色被授权的资源列表

<!--
  警告⚠️：
  不要直接修改该文档，
  https://github.com/Authing/authing-docs-factory
  使用该项目进行生成
-->

<LastUpdated />

通过权限分组内角色 code，获取角色被授权的资源列表。

## 方法名称

`ManagementClient.getRoleAuthorizedResources`

## 请求参数

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:60px">默认值</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- | ---- | ---- | ---- | ---- | ---- |
 | code | string  | 是 | - | 权限分组内角色的唯一标识符  | `60b49eb83fd80adb96f26e68` |
 | namespace | string  | 否 | - | 所属权限分组的 code  | `default` |
 | resourceType | string  | 否 | - | 资源类型，如 数据、API、按钮、菜单  | `DATA` |




## 示例代码

```php
<?php

use Authing\ManagementClient;

// 需要替换成你的 Authing Access Key ID
$AUTHING_ACCESS_KEY_ID = "AUTHING_ACCESS_KEY_ID";
// 需要替换成你的 Authing Access Key Secret
$AUTHING_ACCESS_KEY_SECRET = "AUTHING_ACCESS_KEY_SECRET";

// 初始化 ManagementClient
$managementClient = new Authing\ManagementClient(
    array(
        "accessKeyId" => $AUTHING_ACCESS_KEY_ID,
        "accessKeySecret" => $AUTHING_ACCESS_KEY_SECRET,
        // 如果是私有化部署的客户，需要设置 Authing 服务域名
        // "host" => "https://api.your-authing-service.com"
    )
);

$data = $managementClient->getRoleAuthorizedResources(array(
    "code" => "manager",
));
print_r($data);

```



## 请求响应

类型： `RoleAuthorizedResourcePaginatedRespDto`

| 名称 | 类型 | 描述 |
| ---- | ---- | ---- |
| statusCode | number | 业务状态码，可以通过此状态码判断操作是否成功，200 表示成功。 |
| message | string | 描述信息 |
| apiCode | number | 细分错误码，可通过此错误码得到具体的错误类型。 |
| requestId | string | 请求 ID。当请求失败时会返回。 |
| data | <a href="#RoleAuthorizedResourcePagingDto">RoleAuthorizedResourcePagingDto</a> | 数据 |



示例结果：

```json
{
  "statusCode": 200,
  "message": "操作成功",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "list": {
      "resourceCode": "ecs",
      "resourceType": "DATA",
      "actions": "[\"ecs:Start\",\"ecs:Stop\"]",
      "apiIdentifier": "dd8d7stf44"
    }
  }
}
```

## 数据结构


### <a id="RoleAuthorizedResourcePagingDto"></a> RoleAuthorizedResourcePagingDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| totalCount | number | 是 | 记录总数   |  |
| list | array | 是 | 数据 嵌套类型：<a href="#RoleAuthorizedResourcesRespDto">RoleAuthorizedResourcesRespDto</a>。  |  |


### <a id="RoleAuthorizedResourcesRespDto"></a> RoleAuthorizedResourcesRespDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| resourceCode | string | 是 | 资源描述符   |  `ecs` |
| resourceType | string | 是 | 资源类型   | DATA |
| actions | array | 是 | 被授权的操作列表   |  `["ecs:Start","ecs:Stop"]` |
| apiIdentifier | string | 是 | 资源对应的 API Identifier   |  `dd8d7stf44` |


