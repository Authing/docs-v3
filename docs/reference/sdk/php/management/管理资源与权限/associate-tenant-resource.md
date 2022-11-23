# 关联/取消关联应用资源到租户

<!--
  警告⚠️：
  不要直接修改该文档，
  https://github.com/Authing/authing-docs-factory
  使用该项目进行生成
-->

<LastUpdated />

通过资源唯一标识以及权限分组，关联或取消关联资源到租户

## 方法名称

`ManagementClient.associateTenantResource`

## 请求参数

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:60px">默认值</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- | ---- | ---- | ---- | ---- | ---- |
| appId | string | 是 | - | 应用 ID  | `60b49eb83fd80adb96f26e68` |
| association | boolean | 是 | - | 是否关联应用资源  |  |
| code | string | 是 | - | 资源 Code  |  |
| tenantId | string | 否 | - | 租户 ID  | `60b49eb83fd80adb96f26e68` |




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

$data = $managementClient->associateTenantResource(
    array(
        "code" => "ecs",
        "association" => true,
        // 需要替换成真实的应用 ID
        "appId" => "60b49eb83fxxxdb96f26e68",
        // 需要替换成真实的租户 ID
        "tenantId" => "60b49eb83fxxxdb96f26e68",
    )
);
print_r($data);

```



## 请求响应

类型： `IsSuccessRespDto`

| 名称 | 类型 | 描述 |
| ---- | ---- | ---- |
| statusCode | number | 业务状态码，可以通过此状态码判断操作是否成功，200 表示成功。 |
| message | string | 描述信息 |
| apiCode | number | 细分错误码，可通过此错误码得到具体的错误类型。 |
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


### <a id="IsSuccessDto"></a> IsSuccessDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| success | boolean | 是 | 操作是否成功   |  `true` |


