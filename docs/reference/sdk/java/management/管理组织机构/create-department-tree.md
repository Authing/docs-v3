# 根据组织树批量创建部门

<!--
  警告⚠️：
  不要直接修改该文档，
  https://github.com/Authing/authing-docs-factory
  使用该项目进行生成
-->

<LastUpdated />

> 此文档根据 https://github.com/authing/authing-docs-factory 基于 https://api-explorer.authing.cn V3 API 自动生成，和 API 参数、返回结果保持一致，如此文档描述有误，请以 V3 API 为准。

根据组织树批量创建部门，部门名称不存在时会自动创建

## 方法名称

`ManagementClient.createDepartmentTree`

## 请求参数

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:60px">默认值</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- | ---- | ---- | ---- | ---- | ---- |
| name | string | 是 | - | 部门名称  | `研发` |
| children | string[] | 否 | - | 子部门  |  |
| members | <a href="#UserInfoDto">UserInfoDto</a> | 否 | - | 部门成员  |  |
| tenantId | string | 否 | - | 租户 ID  | `623c20b2a062aaaaf41b17da` |




## 请求响应

类型： `CreateDepartmentTreeRespDto`

| 名称 | 类型 | 描述 |
| ---- | ---- | ---- |
| statusCode | number | 业务状态码，可以通过此状态码判断操作是否成功，200 表示成功。 |
| message | string | 描述信息 |
| apiCode | number | 细分错误码，可通过此错误码得到具体的错误类型。详情可以查看开发准备中的 apiCode 细分说明 |
| requestId | string | 请求 ID。当请求失败时会返回。 |
| data | <a href="#Result">Result</a> | 响应数据 |



示例结果：

```json
{
  "statusCode": 200,
  "message": "操作成功",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {}
}
```

## 数据结构


### <a id="UserInfoDto"></a> UserInfoDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| username | string | 否 | 用户名，用户池内唯一   |  `bob` |
| email | string | 否 | 邮箱，不区分大小写   |  `test@example.com` |
| phone | string | 否 | 手机号，不带区号。如果是国外手机号，请在 phoneCountryCode 参数中指定区号。   |  `188xxxx8888` |
| phoneCountryCode | string | 否 | 手机区号，中国大陆手机号可不填。Authing 短信服务暂不内置支持国际手机号，你需要在 Authing 控制台配置对应的国际短信服务。完整的手机区号列表可参阅 https://en.wikipedia.org/wiki/List_of_country_calling_codes。   |  `+86` |
| name | string | 否 | 用户真实名称，不具备唯一性   |  `张三` |
| gender | string | 否 | 性别   | M |
| country | string | 否 | 所在国家   |  `CN` |
| province | string | 否 | 所在省份   |  `BJ` |
| city | string | 否 | 所在城市   |  `BJ` |


### <a id="Result"></a> Result

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| addUser | number | 是 | 新增用户数   |  |
| updateUser | number | 是 | 更新用户数   |  |
| addDepartment | number | 是 | 新增部门数   |  |
| updateDepartment | number | 是 | 更新部门数   |  |


