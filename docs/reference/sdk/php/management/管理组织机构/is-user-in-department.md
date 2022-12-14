# 判断用户是否在某个部门下

<!--
  警告⚠️：
  不要直接修改该文档，
  https://github.com/Authing/authing-docs-factory
  使用该项目进行生成
-->

<LastUpdated />

通过组织 code、部门 ID，判断用户是否在某个部门下，可以选择包含子部门。

## 方法名称

`ManagementClient.isUserInDepartment`

## 请求参数

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:60px">默认值</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- | ---- | ---- | ---- | ---- | ---- |
 | departmentId | string  | 是 | - | 部门 ID，根部门传 `root`。departmentId 和 departmentCode 必传其一。  | `root` |
 | organizationCode | string  | 是 | - | 组织 code  | `steamory` |
 | userId | string  | 是 | - | 用户唯一标志，可以是用户 ID、用户名、邮箱、手机号、外部 ID、在外部身份源的 ID。  | `6229ffaxxxxxxxxcade3e3d9` |
 | departmentIdType | string  | 否 | department_id | 此次调用中使用的部门 ID 的类型  | `department_id` |
 | includeChildrenDepartments | boolean  | 否 | - | 是否包含子部门  |  |




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

$data = $managementClient->isUserInDepartment(array(
    // 需要替换成真实的 organizationCode
    "organizationCode" => "steamory",
    // 需要替换成真实的部门 ID
    "departmentId" => "623c20b2a0xxxxaaf41b17da",
    // 需要替换成真实的用户 ID
    "userId" => "6229ffaxxxxxxxxcade3e3d9",
));
print_r($data);

```



## 请求响应

类型： `IsUserInDepartmentRespDto`

| 名称 | 类型 | 描述 |
| ---- | ---- | ---- |
| statusCode | number | 业务状态码，可以通过此状态码判断操作是否成功，200 表示成功。 |
| message | string | 描述信息 |
| apiCode | number | 细分错误码，可通过此错误码得到具体的错误类型。 |
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


