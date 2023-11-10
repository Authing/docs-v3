# 修改数据策略

<!--
  警告⚠️：
  不要直接修改该文档，
  https://github.com/Authing/authing-docs-factory
  使用该项目进行生成
-->

<LastUpdated />

> 此文档根据 https://github.com/authing/authing-docs-factory 基于 https://api-explorer.authing.cn V3 API 自动生成，和 API 参数、返回结果保持一致，如此文档描述有误，请以 V3 API 为准。

修改数据策略，通过数据策略名称、数据策略描述和相关的数据资源等字段修改数据策略信息。

## 方法名称

`ManagementClient.updateDataPolicy`

## 请求参数

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:60px">默认值</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- | ---- | ---- | ---- | ---- | ---- |
| policyId | string | 是 | - | 数据策略 ID  | `60b49xxxxxxxxxxxxxxx6e68` |
| policyName | string | 否 | - | 数据策略名称，用户池唯一  | `示例数据策略名称` |
| description | string | 否 | - | 数据策略描述  | `示例数据策略描述` |
| statementList | <a href="#DataStatementPermissionDto">DataStatementPermissionDto[]</a> | 否 | - | 数据权限列表，每个策略下所有的数据权限 数组长度限制：5。 |  |




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

  const result = await managementClient.updateDataPolicy({
    policyId: '60b49xxxxxxxxxxxxxxx6e68',
    policyName: '示例数据策略名称',
    description: '示例数据策略描述',
    statementList: [{
      effect: DataStatementPermissionDto.effect.ALLOW,
      permissions: ['namespaceCode/treeResourceCode/path/action',],
    },]
  });

  console.log(JSON.stringify(result, null, 2));
})();

```




## 请求响应

类型： `UpdateDataPolicyResponseDto`

| 名称 | 类型 | 描述 |
| ---- | ---- | ---- |
| statusCode | number | 业务状态码，可以通过此状态码判断操作是否成功，200 表示成功。 |
| message | string | 描述信息 |
| apiCode | number | 细分错误码，可通过此错误码得到具体的错误类型。详情可以查看开发准备中的 apiCode 细分说明 |
| requestId | string | 请求 ID。当请求失败时会返回。 |
| data | <a href="#UpdateDataPolicyRespDto">UpdateDataPolicyRespDto</a> | 响应数据 |



示例结果：

```json
{
  "statusCode": 200,
  "message": "操作成功",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "policyId": "60b49xxxxxxxxxxxxxxx6e68",
    "policyName": "示例数据策略名称",
    "description": "示例数据策略描述",
    "createdAt": "2022-07-03T02:20:30.000Z",
    "updatedAt": "2022-07-03T02:20:30.000Z"
  }
}
```

## 数据结构


### <a id="DataStatementPermissionDto"></a> DataStatementPermissionDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| effect | string | 是 | 数据资源权限操作：ALLOW（允许）/DENY（拒绝）   | DENY |
| permissions | array | 是 | 资源权限列表，字符串数据资源和数组数据资源，没有 path 路径   |  `["namespaceCode/stringResourceCode/action","namespaceCode/arrayResourceCode/action","namespaceCode/treeResourceCode/path/action"]` |


### <a id="UpdateDataPolicyRespDto"></a> UpdateDataPolicyRespDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| policyId | string | 是 | 数据策略 ID   |  `60b49xxxxxxxxxxxxxxx6e68` |
| policyName | string | 是 | 数据策略名称，用户池唯一   |  `示例数据策略名称` |
| description | string | 否 | 数据策略描述   |  `示例数据策略描述` |
| createdAt | string | 是 | 数据策略创建时间   |  `2022-07-03T02:20:30.000Z` |
| updatedAt | string | 是 | 数据策略更新时间   |  `2022-07-03T02:20:30.000Z` |


