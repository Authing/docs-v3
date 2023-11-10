# 删除部门同步关联关系

<!--
  警告⚠️：
  不要直接修改该文档，
  https://github.com/Authing/authing-docs-factory
  使用该项目进行生成
-->

<LastUpdated />

> 此文档根据 https://github.com/authing/authing-docs-factory 基于 https://api-explorer.authing.cn V3 API 自动生成，和 API 参数、返回结果保持一致，如此文档描述有误，请以 V3 API 为准。

如果在 Authing 中的部门进行了上下游同步，此接口可以用于删除某个部门在指定身份源下的关联关系。

## 方法名称

`ManagementClient.DeleteDepartmentSyncRelations`

## 请求参数

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:60px">默认值</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- | ---- | ---- | ---- | ---- | ---- |
| provider | string | 是 | - | 外部身份源类型，如：<br>- `wechatwork`: 企业微信<br>- `dingtalk`: 钉钉<br>- `lark`: 飞书<br>- `welink`: Welink<br>- `ldap`: LDAP<br>- `active-directory`: Windows AD<br>- `italent`: 北森<br>- `xiaoshouyi`: 销售易<br>- `maycur`: 每刻报销<br>- `scim`: SCIM<br>- `moka`: Moka HR<br>      |  |
| departmentId | string | 是 | - | 部门 ID，根部门传 `root`  | `root` |
| organizationCode | string | 是 | - | 组织 code  | `steamory` |
| departmentIdType | string | 否 | department_id | 此次调用中使用的部门 ID 的类型  | `department_id` |




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


### <a id="IsSuccessDto"></a> IsSuccessDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| success | boolean | 是 | 操作是否成功   |  `true` |


