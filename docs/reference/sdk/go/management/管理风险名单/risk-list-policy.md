# 获取风险策略列表

<!--
  警告⚠️：
  不要直接修改该文档，
  https://github.com/Authing/authing-docs-factory
  使用该项目进行生成
-->

<LastUpdated />

> 此文档根据 https://github.com/authing/authing-docs-factory 基于 https://api-explorer.authing.cn V3 API 自动生成，和 API 参数、返回结果保持一致，如此文档描述有误，请以 V3 API 为准。

分页获取风险策略列表

## 方法名称

`ManagementClient.FindRiskListPolicy`

## 请求参数

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:60px">默认值</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- | ---- | ---- | ---- | ---- | ---- |
 | optObject | string  | 是 | - | 策略操作对象，目前只有 ip  |  |
 | page | number  | 否 | 1 | 当前页数，从 1 开始  | `1` |
 | limit | number  | 否 | 10 | 每页数目，最大不能超过 50，默认为 10  | `10` |




## 请求响应

类型： `UserListPolicyPaginatedRespDto`

| 名称 | 类型 | 描述 |
| ---- | ---- | ---- |
| statusCode | number | 业务状态码，可以通过此状态码判断操作是否成功，200 表示成功。 |
| message | string | 描述信息 |
| apiCode | number | 细分错误码，可通过此错误码得到具体的错误类型。详情可以查看开发准备中的 apiCode 细分说明 |
| requestId | string | 请求 ID。当请求失败时会返回。 |
| data | <a href="#RiskListPolicyPagingDto">RiskListPolicyPagingDto</a> | 响应数据 |



示例结果：

```json
{
  "statusCode": 200,
  "message": "操作成功",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "list": {
      "id": "60b49eb83fd80adb96f26e68",
      "optObject": "IP",
      "ipRange": "ALL",
      "userRange": "ALL",
      "ipCond": "ONE",
      "userCond": "ONE",
      "timeRange": "1",
      "countThr": "3",
      "eventStateType": "password_wrong",
      "removeType": "MANUAL",
      "action": "ADD_IP_BLACK_LIST",
      "limitList": "FORBID_LOGIN",
      "createdAt": "2023-09-18T06:49:45.191Z"
    }
  }
}
```

## 数据结构


### <a id="RiskListPolicyPagingDto"></a> RiskListPolicyPagingDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| totalCount | number | 是 | 记录总数   |  |
| list | array | 是 | 数据列表 嵌套类型：<a href="#RiskListPolicyRespDto">RiskListPolicyRespDto</a>。  |  |


### <a id="RiskListPolicyRespDto"></a> RiskListPolicyRespDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| id | string | 是 | ID   |  `60b49eb83fd80adb96f26e68` |
| optObject | string | 是 | 策略操作对象，目前只有 ip   | IP |
| ipRange | string | 是 | 操作IP的范围, ALL-所有，NOT_IN_WHITE_LIST-不在白名单中，与 userRange 二者取一个   | ALL |
| userRange | string | 是 | 操作USER的范围, ALL-所有，NOT_IN_WHITE_LIST-不在白名单中，与 ipRange 二者取一个   | ALL |
| ipCond | string | 是 | IP条件, NO_LIMIT-不限制，ONE-单个IP，与 userCond 二者取一个   | NO_LIMIT |
| userCond | string | 是 | IP条件, NO_LIMIT-不限制，ONE-单个用户，与 ipCond 二者取一个   | NO_LIMIT |
| timeRange | number | 是 | 时间范围，最近多少分钟   |  `1` |
| countThr | number | 是 | 次数阈值   |  `3` |
| eventStateType | string | 是 | 事件状态类型，password_wrong-密码错误，account_wrong-账号错误   | password_wrong |
| removeType | string | 是 | 移除类型，MANUAL-手动，SCHEDULE-策略, 目前只有手动   | MANUAL |
| action | string | 是 | 策略动作, ADD_IP_BLACK_LIST-添加IP黑名单，ADD_USER_BLACK_LIST-添加用户黑名单   | ADD_IP_BLACK_LIST |
| limitList | string | 是 | 限制类型列表,FORBID_LOGIN-禁止登录，FORBID_REGISTER-禁止注册   | FORBID_LOGIN |
| createdAt | string | 是 | 创建时间，   |  `2023-09-18T06:49:45.191Z` |


