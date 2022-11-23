# 获取订单支付明细

<!--
  警告⚠️：
  不要直接修改该文档，
  https://github.com/Authing/authing-docs-factory
  使用该项目进行生成
-->

<LastUpdated />

获取当前用户池订单支付明细

## 方法名称

`AuthenticationClient.getOrderPayDetail`

## 请求参数

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:60px">默认值</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- | ---- | ---- | ---- | ---- | ---- |
 | orderNo | string  | 是 | - | 订单号  | `2022080410062060e26f7fd6b9` |




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

  const result = await managementClient.getOrderPayDetail({
    orderNo: '20220804xxxxxx60e26f7fd6b9'
  });


  console.log(JSON.stringify(result, null, 2));
})();

```



  
## 请求响应

类型： `CostGetOrderPayDetailRespDto`

| 名称 | 类型 | 描述 |
| ---- | ---- | ---- |
| statusCode | number | 业务状态码，可以通过此状态码判断操作是否成功，200 表示成功。 |
| message | string | 描述信息 |
| apiCode | number | 细分错误码，可通过此错误码得到具体的错误类型。 |
| requestId | string | 请求 ID。当请求失败时会返回。 |
| data | <a href="#CostGetOrderPayDetail">CostGetOrderPayDetail</a> | 响应数据 |



示例结果：

```json
{
  "statusCode": 200,
  "message": "操作成功",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "orderNo": "2022080911591337da0aae9660",
    "channelOrderNo": "Mock22e7ecfd-745d-46ad-b563-ef4db5719bfb",
    "paidAmount": "7.9",
    "paidTime": "2022-08-09 11:59:46",
    "paidAccountNo": "62bec1591aeb41ad3f1a6503",
    "payStatus": "3",
    "createTime": "2022-08-09 11:59:20",
    "payType": "Alipay"
  }
}
```

## 数据结构


### <a id="CostGetOrderPayDetail"></a> CostGetOrderPayDetail

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| orderNo | string | 是 | 订单号   |  `2022080911591337da0aae9660` |
| channelOrderNo | string | 是 | 渠道订单号   |  `Mock22e7ecfd-745d-46ad-b563-ef4db5719bfb` |
| paidAmount | string | 是 | 渠道订单号   |  `7.9` |
| paidTime | string | 是 | 支付时间   |  `2022-08-09 11:59:46` |
| paidAccountNo | string | 是 | 支付账号   |  `62bec1591aeb41ad3f1a6503` |
| payStatus | string | 是 | 支付状态   |  `3` |
| createTime | string | 是 | 创建时间   |  `2022-08-09 11:59:20` |
| payType | string | 是 | 支付方式   |  `Alipay` |


