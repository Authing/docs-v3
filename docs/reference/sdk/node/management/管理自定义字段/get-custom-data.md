# 获取用户、分组、角色、组织机构的自定义字段值

<!--
  警告⚠️：
  不要直接修改该文档，
  https://github.com/Authing/authing-docs-factory
  使用该项目进行生成
-->

<LastUpdated />

> 此文档根据 https://github.com/authing/authing-docs-factory 基于 https://api-explorer.authing.cn V3 API 自动生成，和 API 参数、返回结果保持一致，如此文档描述有误，请以 V3 API 为准。

通过筛选条件，获取用户、分组、角色、组织机构的自定义字段值。

## 方法名称

`ManagementClient.getCustomData`

## 请求参数

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:60px">默认值</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- | ---- | ---- | ---- | ---- | ---- |
 | tenantId | string  | 是 | - | 租户 ID  | `642c1df417c2d8a80d744c1d` |
 | targetType | string  | 是 | - | 目标对象类型：<br>- `USER`: 用户<br>- `ROLE`: 角色<br>- `GROUP`: 分组<br>- `DEPARTMENT`: 部门<br>      | `USER` |
 | targetIdentifier | string  | 是 | - | 目标对象的唯一标志符：<br>- 如果是用户，为用户的 ID，如 `6343b98b7cfxxx9366e9b7c`<br>- 如果是角色，为角色的 code，如 `admin`<br>- 如果是分组，为分组的 code，如 `developer`<br>- 如果是部门，为部门的 ID，如 `6343bafc019xxxx889206c4c`<br>          | `userId1` |
 | namespace | string  | 否 | - | 所属权限分组的 code，当 targetType 为角色的时候需要填写，否则可以忽略  | `default` |




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

  const result = await managementClient.getCustomData({
    targetType: 'USER',
    targetIdentifier: 'userId1',
    namespace: 'default'
  });


  console.log(JSON.stringify(result, null, 2));
})();

```




## 请求响应

类型： `GetCustomDataRespDto`

| 名称 | 类型 | 描述 |
| ---- | ---- | ---- |
| statusCode | number | 业务状态码，可以通过此状态码判断操作是否成功，200 表示成功。 |
| message | string | 描述信息 |
| apiCode | number | 细分错误码，可通过此错误码得到具体的错误类型（成功请求不返回）。详细错误码列表请见：[API Code 列表](https://api-explorer.authing.cn/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId | string | 请求 ID。当请求失败时会返回。 |
| data | object | 具体的自定义数据值 |



示例结果：

```json
{
  "statusCode": 200,
  "message": "操作成功",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "age": 18,
    "school": "pku"
  }
}
```

## 数据结构


