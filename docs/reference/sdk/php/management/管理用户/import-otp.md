# 导入用户的 OTP

<!--
  警告⚠️：
  不要直接修改该文档，
  https://github.com/Authing/authing-docs-factory
  使用该项目进行生成
-->

<LastUpdated />

导入用户的 OTP

## 方法名称

`ManagementClient.importOtp`

## 请求参数

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:60px">默认值</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- | ---- | ---- | ---- | ---- | ---- |
| list | <a href="#ImportOtpItemDto">ImportOtpItemDto[]</a> | 是 | - | 参数列表  |  |




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

$data = $managementClient->importOtp(array(
    "list" => array(
        array(
            "userId" => "635215b413xxxxf5f63c511a",
            "otp" => array(
                "secret" => "HZ2F6J3AGNAVSOTV",
                "recoveryCode" => "b471-8ec0-874a-087f-bccb-cd54",
            ),

        )
    ),
));
print_r($data);

```



## 请求响应

类型： `CommonResponseDto`

| 名称 | 类型 | 描述 |
| ---- | ---- | ---- |
| statusCode | number | 业务状态码，可以通过此状态码判断操作是否成功，200 表示成功。 |
| message | string | 描述信息 |
| apiCode | number | 细分错误码，可通过此错误码得到具体的错误类型。 |
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


### <a id="ImportOtpItemDto"></a> ImportOtpItemDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| userId | string | 是 | 用户 ID   |  `xxxx` |
| otp |  | 是 | OTP 数据 嵌套类型：<a href="#ImportOtpItemDataDto">ImportOtpItemDataDto</a>。  |  |


### <a id="ImportOtpItemDataDto"></a> ImportOtpItemDataDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| secret | string | 是 | OTP 密钥   |  `HZ2F6J3AGNAVSOTV` |
| recoveryCode | string | 否 | OTP Recovery Code   |  `b471-8ec0-874a-087f-bccb-cd54` |


