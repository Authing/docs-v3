# 获取同步任务列表

<!--
  警告⚠️：
  不要直接修改该文档，
  https://github.com/Authing/authing-docs-factory
  使用该项目进行生成
-->

<LastUpdated />

> 此文档根据 https://github.com/authing/authing-docs-factory 基于 https://api-explorer.authing.cn V3 API 自动生成，和 API 参数、返回结果保持一致，如此文档描述有误，请以 V3 API 为准。

获取同步任务列表

## 方法名称

`ManagementClient.listSyncTasks`

## 请求参数

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:60px">默认值</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- | ---- | ---- | ---- | ---- | ---- |
 | page | number  | 否 | 1 | 当前页数，从 1 开始  | `1` |
 | limit | number  | 否 | 10 | 每页数目，最大不能超过 50，默认为 10  | `10` |




## 示例代码

```ts
import { ManagementClient, Models } from 'authing-node-sdk';

// 初始化 ManagementClient
const managementClient = new ManagementClient({
  // 需要替换成你的 Authing Access Key ID
  accessKeyId: 'AUTHING_ACCESS_KEY_ID',
  // 需要替换成你的 Authing Access Key Secret
  accessKeySecret: 'AUTHING_ACCESS_KEY_SECRET',
  // 如果是私有化部署的客户，需要设置 Authing 服务域名
  // host: 'https://api.your-authing-service.com'
});

(async () => {

  const result = await managementClient.listSyncTasks({
    page: 1,
    limit: 10
  });


  console.log(JSON.stringify(result, null, 2));
})();

```




## 请求响应

类型： `SyncTaskPaginatedRespDto`

| 名称 | 类型 | 描述 |
| ---- | ---- | ---- |
| statusCode | number | 业务状态码，可以通过此状态码判断操作是否成功，200 表示成功。 |
| message | string | 描述信息 |
| apiCode | number | 细分错误码，可通过此错误码得到具体的错误类型（成功请求不返回）。详细错误码列表请见：[API Code 列表](https://api-explorer.authing.cn/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId | string | 请求 ID。当请求失败时会返回。 |
| data | <a href="#SyncTaskPagingDto">SyncTaskPagingDto</a> | 响应数据 |



示例结果：

```json
{
  "statusCode": 200,
  "message": "操作成功",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "list": {
      "syncTaskId": 1000,
      "createdAt": "2022-07-03T03:20:30.000Z",
      "updatedAt": "2022-07-03T03:20:30.000Z",
      "syncTaskName": "我的飞书同步任务",
      "syncTaskType": "lark",
      "syncFlow": "upstream",
      "syncTrigger": "manually",
      "lastSyncRate": 80,
      "lastSyncStatus": "success",
      "lastSyncTime": "2022-07-03T03:20:30.000Z",
      "organizationCode": "steamory",
      "provisioningScope": {
        "all": true,
        "includeNewUsers": true
      },
      "fieldMapping": {
        "expression": "mobile",
        "targetKey": "phone"
      },
      "timedScheduler": {
        "cycle": "days",
        "startTime": 1664249726701
      }
    }
  }
}
```

## 数据结构


### <a id="SyncTaskPagingDto"></a> SyncTaskPagingDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| totalCount | number | 是 | 记录总数   |  |
| list | array | 是 | 数据列表 嵌套类型：<a href="#SyncTaskDto">SyncTaskDto</a>。  |  |


### <a id="SyncTaskDto"></a> SyncTaskDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| syncTaskId | number | 是 | 同步任务 ID   |  `1000` |
| createdAt | string | 是 | 创建时间   |  `2022-07-03T03:20:30.000Z` |
| updatedAt | string | 是 | 更新时间   |  `2022-07-03T03:20:30.000Z` |
| syncTaskName | string | 是 | 同步任务名称   |  `我的飞书同步任务` |
| syncTaskType | string | 是 | 同步任务类型:<br>- `lark`: 飞书<br>- `lark-international`: 飞书国际版<br>- `wechatwork`: 企业微信<br>- `dingtalk`: 钉钉<br>- `active-directory`: Windows AD<br>- `ldap`: LDAP<br>- `italent`: 北森<br>- `maycur`: 每刻报销<br>- `moka`: Moka<br>- `fxiaoke`: 纷享销客<br>- `xiaoshouyi`: 销售易<br>- `kayang`: 嘉扬 HR<br>- `scim`: 自定义同步源<br>       | lark |
| syncFlow | string | 是 | 同步任务数据流向：<br>- `upstream`: 作为上游，将数据同步到 Authing<br>- `downstream`: 作为下游，将 Authing 数据同步到此系统<br>       | upstream |
| syncTrigger | string | 是 | 同步任务触发类型：<br>- `manually`: 手动触发执行<br>- `timed`: 定时触发<br>- `automatic`: 根据事件自动触发<br>   | manually |
| lastSyncMessage | string | 否 | 最近一次同步错误信息   |  |
| lastSyncRate | number | 否 | 最近一次同步进度   |  `80` |
| lastSyncStatus | string | 否 | 最近一次同步状态:<br>- `free`: 空闲状态，从未执行<br>- `pending`: 等待系统执行<br>- `onProgress`: 正在执行<br>- `success`: 成功<br>- `failed`: 失败<br>       | free |
| lastSyncTime | string | 否 | 最近一次同步时间   |  `2022-07-03T03:20:30.000Z` |
| organizationCode | string | 否 | 此同步任务绑定的组织机构。针对上游同步，需执行一次同步任务之后才会绑定组织机构；针对下游同步，创建同步任务的时候就需要设置。   |  `steamory` |
| provisioningScope |  | 否 | 同步范围，**只针对下游同步任务有效**。为空表示同步整个组织机构。 嵌套类型：<a href="#SyncTaskProvisioningScope">SyncTaskProvisioningScope</a>。  |  |
| fieldMapping | array | 是 | 字段映射配置 嵌套类型：<a href="#SyncTaskFieldMapping">SyncTaskFieldMapping</a>。  |  |
| timedScheduler |  | 否 | 定时同步时间设置 嵌套类型：<a href="#SyncTaskTimedScheduler">SyncTaskTimedScheduler</a>。  |  |


### <a id="SyncTaskProvisioningScope"></a> SyncTaskProvisioningScope

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| all | boolean | 是 | 是否同步所选组织机构下的所有用户和部门   |  `true` |
| includeNewUsers | boolean | 是 | 是否包含新增的用户   |  |


### <a id="SyncTaskFieldMapping"></a> SyncTaskFieldMapping

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| expression | string | 是 | 源字段   |  `mobile` |
| targetKey | string | 是 | 转换后的字段   |  `phone` |


### <a id="SyncTaskTimedScheduler"></a> SyncTaskTimedScheduler

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| cycle | string | 是 | 定时周期：<br>- `month`: 每个月执行一次<br>- `week`: 每周执行一次<br>- `days`: 每天执行一次<br>- `sixHours`: 每六小时执行一次<br>- `twoHours`: 每两小时执行一次<br>       | month |
| startTime | number | 是 | 开始时间   |  `1664249726701` |


