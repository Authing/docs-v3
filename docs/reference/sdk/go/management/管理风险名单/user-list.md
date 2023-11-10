# 获取用户列表

<!--
  警告⚠️：
  不要直接修改该文档，
  https://github.com/Authing/authing-docs-factory
  使用该项目进行生成
-->

<LastUpdated />

> 此文档根据 https://github.com/authing/authing-docs-factory 基于 https://api-explorer.authing.cn V3 API 自动生成，和 API 参数、返回结果保持一致，如此文档描述有误，请以 V3 API 为准。

分页获取用户列表

## 方法名称

`ManagementClient.FindUserList`

## 请求参数

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:60px">默认值</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- | ---- | ---- | ---- | ---- | ---- |
 | userListType | string  | 是 | - | IP 类型  | `BLACK` |
 | page | number  | 否 | 1 | 当前页数，从 1 开始  | `1` |
 | limit | number  | 否 | 10 | 每页数目，最大不能超过 50，默认为 10  | `10` |




## 请求响应

类型： `UserListPaginatedRespDto`

| 名称 | 类型 | 描述 |
| ---- | ---- | ---- |
| statusCode | number | 业务状态码，可以通过此状态码判断操作是否成功，200 表示成功。 |
| message | string | 描述信息 |
| apiCode | number | 细分错误码，可通过此错误码得到具体的错误类型。详情可以查看开发准备中的 apiCode 细分说明 |
| requestId | string | 请求 ID。当请求失败时会返回。 |
| data | <a href="#UserListPagingDto">UserListPagingDto</a> | 响应数据 |



示例结果：

```json
{
  "statusCode": 200,
  "message": "操作成功",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "list": {
      "id": "60b49eb83fd80adb96f26e68",
      "userId": "60b49eb83fd80adb96f26e68",
      "addType": "MANUAL",
      "userListType": "WHITE",
      "removeType": "MANUAL",
      "limitList": "[FORBID_LOGIN]",
      "addAt": "2023-09-12T05:54:58.758Z"
    }
  }
}
```

## 数据结构


### <a id="UserListPagingDto"></a> UserListPagingDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| totalCount | number | 是 | 记录总数   |  |
| list | array | 是 | 数据列表 嵌套类型：<a href="#RiskListItemDto">RiskListItemDto</a>。  |  |


### <a id="RiskListItemDto"></a> RiskListItemDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| id | string | 是 | ID   |  `60b49eb83fd80adb96f26e68` |
| userId | string | 是 | userId   |  `60b49eb83fd80adb96f26e68` |
| addType | string | 是 | 添加类型，MANUAL-手动，SCHEDULE-策略添加   |  `MANUAL` |
| userListType | string | 是 | ip类型，WHITE-白名单，BLACK-黑名单   |  `WHITE` |
| removeType | string | 是 | 删除类型，MANUAL-手动，SCHEDULE-策略删除   |  `MANUAL` |
| limitList | array | 是 | 限制类型，FORBID_LOGIN-禁止登录，FORBID_REGISTER-禁止注册，SKIP_MFA-跳过 MFA   |  `[FORBID_LOGIN]` |
| addAt | string | 是 | 添加时间   |  `2023-09-12T05:54:58.758Z` |


