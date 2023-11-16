# 获取套餐详情

<!--
  警告⚠️：
  不要直接修改该文档，
  https://github.com/Authing/authing-docs-factory
  使用该项目进行生成
-->

<LastUpdated />

> 此文档根据 https://github.com/authing/authing-docs-factory 基于 https://api-explorer.authing.cn V3 API 自动生成，和 API 参数、返回结果保持一致，如此文档描述有误，请以 V3 API 为准。

获取当前用户池套餐详情。

## 方法名称

`ManagementClient.getCurrentPackageInfo`

## 请求参数

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:60px">默认值</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- | ---- | ---- | ---- | ---- | ---- |




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

  const result = await managementClient.getCurrentPackageInfo();


  console.log(JSON.stringify(result, null, 2));
})();

```




## 请求响应

类型： `CostGetCurrentPackageRespDto`

| 名称 | 类型 | 描述 |
| ---- | ---- | ---- |
| statusCode | number | 业务状态码，可以通过此状态码判断操作是否成功，200 表示成功。 |
| message | string | 描述信息 |
| apiCode | number | 细分错误码，可通过此错误码得到具体的错误类型（成功请求不返回）。详细错误码列表请见：[API Code 列表](https://api-explorer.authing.cn/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId | string | 请求 ID。当请求失败时会返回。 |
| data | <a href="#CostCurrentPackageInfo">CostCurrentPackageInfo</a> | 响应数据 |



示例结果：

```json
{
  "statusCode": 200,
  "message": "操作成功",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "code": "V4_B2C_Enterprise:1000",
    "endTime": "2022-09-09 00:00:00",
    "overdueDays": "0",
    "goodsPackage": "套餐包信息"
  }
}
```

## 数据结构


### <a id="CostCurrentPackageInfo"></a> CostCurrentPackageInfo

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| code | string | 是 | 套餐包编码   |  `V4_B2C_Enterprise:1000` |
| endTime | string | 是 | 套餐结束时间   |  `2022-09-09 00:00:00` |
| overdueDays | string | 是 | 套餐逾期天数   |  `0` |
| goodsPackage |  | 是 | 套餐包信息 嵌套类型：<a href="#GoodsPackageDto">GoodsPackageDto</a>。  |  `套餐包信息` |


### <a id="GoodsPackageDto"></a> GoodsPackageDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| name | string | 是 | 套餐包名称 name   |  `测试套餐包` |
| nameEn | string | 是 | 套餐包名称 nameEn   |  `test package` |
| unitPrice | string | 是 | 套餐包单价   |  `99.00` |
| code | string | 是 | 套餐包编码 code   |  `V4_B2C_Enterprise:1000` |
| group | string | 是 | 套餐包版本   |  `Enterprise` |
| sceneCode | string | 是 | 套餐包场景编码   |  `B2C` |
| amount | string | 是 | 套餐包 MAU 数量   |  `1000` |


