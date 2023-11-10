# 获取 MAU 使用记录

<!--
  警告⚠️：
  不要直接修改该文档，
  https://github.com/Authing/authing-docs-factory
  使用该项目进行生成
-->

<LastUpdated />

> 此文档根据 https://github.com/authing/authing-docs-factory 基于 https://api-explorer.authing.cn V3 API 自动生成，和 API 参数、返回结果保持一致，如此文档描述有误，请以 V3 API 为准。

获取当前用户池 MAU 使用记录

## 方法名称

`ManagementClient.getMauPeriodUsageHistory`

## 请求参数

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:60px">默认值</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- | ---- | ---- | ---- | ---- | ---- |
 | startTime | string  | 是 | - | 起始时间（年月日）  | `20220202` |
 | endTime | string  | 是 | - | 截止时间（年月日）  | `20220802` |




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

  const result = await managementClient.getMauPeriodUsageHistory({
    startTime: '20220802',
    endTime: '20221002'
  });


  console.log(JSON.stringify(result, null, 2));
})();

```




## 请求响应

类型： `CostGetMauPeriodUsageHistoryRespDto`

| 名称 | 类型 | 描述 |
| ---- | ---- | ---- |
| statusCode | number | 业务状态码，可以通过此状态码判断操作是否成功，200 表示成功。 |
| message | string | 描述信息 |
| apiCode | number | 细分错误码，可通过此错误码得到具体的错误类型。详情可以查看开发准备中的 apiCode 细分说明 |
| requestId | string | 请求 ID。当请求失败时会返回。 |
| data | <a href="#MauPeriodUsageHistory">MauPeriodUsageHistory</a> | 响应数据 |



示例结果：

```json
{
  "statusCode": 200,
  "message": "操作成功",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "records": {
      "periodStartTime": "20210901",
      "periodEndTime": "20220901",
      "amount": "0",
      "current": "0"
    }
  }
}
```

## 数据结构


### <a id="MauPeriodUsageHistory"></a> MauPeriodUsageHistory

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| records | array | 是 | 响应数据 嵌套类型：<a href="#MauPeriodUsageHistoryDto">MauPeriodUsageHistoryDto</a>。  |  |


### <a id="MauPeriodUsageHistoryDto"></a> MauPeriodUsageHistoryDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| periodStartTime | string | 是 | 周期开始时间(年月日)   |  `20210901` |
| periodEndTime | string | 是 | 周期结束时间(年月日)   |  `20220901` |
| amount | string | 是 | 当前周期使用的 mau 总数量   |  `0` |
| current | string | 是 | 当前周期使用的 mau 数量   |  `0` |


