# 获取身份源详情

<!--
  警告⚠️：
  不要直接修改该文档，
  https://github.com/Authing/authing-docs-factory
  使用该项目进行生成
-->

<LastUpdated />

通过 身份源 ID，获取身份源详情，可以指定 租户 ID 筛选。

## 方法名称

`ManagementClient.getExtIdp`

## 请求参数

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:60px">默认值</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- | ---- | ---- | ---- | ---- | ---- |
 | id | string  | 是 | - | 身份源 ID  | `6268b0e5e4b9a0e8ffa8fd60` |
 | tenantId | string  | 否 | - | 租户 ID  | `60b49eb83fd80adb96f26e68` |
 | appId | string  | 否 | - | 应用 ID  | `60b49eb83fd80adb96f26e68` |
 | type | string  | 否 | - | 身份源类型  |  |




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

$data = $managementClient->getExtIdp(array(
    // 需要替换成真实的身份源 ID
    "id" => "6268b0e5e4xxxxe8ffa8fd60",
));
print_r($data);

```



## 请求响应

类型： `ExtIdpDetailSingleRespDto`

| 名称 | 类型 | 描述 |
| ---- | ---- | ---- |
| statusCode | number | 业务状态码，可以通过此状态码判断操作是否成功，200 表示成功。 |
| message | string | 描述信息 |
| apiCode | number | 细分错误码，可通过此错误码得到具体的错误类型。 |
| requestId | string | 请求 ID。当请求失败时会返回。 |
| data | <a href="#ExtIdpDetail">ExtIdpDetail</a> | 响应数据 |



示例结果：

```json
{
  "statusCode": 200,
  "message": "操作成功",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "id": "60b49eb83fd80adb96f26e68",
    "name": "default",
    "logo": "https://files.authing.co/authing-console/social-connections/wechatIdentitySource.svg",
    "tenantId": "60b49eb83fd80adb96f26e68",
    "type": "wechat",
    "autoJoin": true
  }
}
```

## 数据结构


### <a id="ExtIdpDetail"></a> ExtIdpDetail

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| id | string | 是 | 身份源 id   |  `60b49eb83fd80adb96f26e68` |
| name | string | 是 | 身份源名称   |  `default` |
| logo | string | 是 | 身份源的 Logo   |  `https://files.authing.co/authing-console/social-connections/wechatIdentitySource.svg` |
| tenantId | string | 否 | 租户 ID   |  `60b49eb83fd80adb96f26e68` |
| type | string | 是 | 身份源类型   |  `wechat` |
| connections | object | 是 | 身份源的连接列表   |  |
| autoJoin | boolean | 是 | 租户场景下自动加入   |  `true` |


