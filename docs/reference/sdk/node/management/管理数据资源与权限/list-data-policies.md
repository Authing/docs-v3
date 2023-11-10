# 获取数据策略列表

<!--
  警告⚠️：
  不要直接修改该文档，
  https://github.com/Authing/authing-docs-factory
  使用该项目进行生成
-->

<LastUpdated />

> 此文档根据 https://github.com/authing/authing-docs-factory 基于 https://api-explorer.authing.cn V3 API 自动生成，和 API 参数、返回结果保持一致，如此文档描述有误，请以 V3 API 为准。

分页查询数据策略列表，也可通过关键字搜索数据策略名称或者数据策略 Code 进行模糊查找。

## 方法名称

`ManagementClient.listDataPolices`

## 请求参数

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:60px">默认值</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- | ---- | ---- | ---- | ---- | ---- |
 | page | number  | 否 | 1 | 当前页数，从 1 开始  | `1` |
 | limit | number  | 否 | 10 | 每页数目，最大不能超过 50，默认为 10  | `10` |
 | query | string  | 否 | - | 数据策略名称关键字搜索  | `examplePolicyName` |




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

  const result = await managementClient.listDataPolices({
    page: 1,
    limit: 10,
    query: 'examplePolicyName',
  });

  console.log(JSON.stringify(result, null, 2));
})();

```




## 请求响应

类型： `ListDataPoliciesPaginatedRespDto`

| 名称 | 类型 | 描述 |
| ---- | ---- | ---- |
| statusCode | number | 业务状态码，可以通过此状态码判断操作是否成功，200 表示成功。 |
| message | string | 描述信息 |
| apiCode | number | 细分错误码，可通过此错误码得到具体的错误类型。详情可以查看开发准备中的 apiCode 细分说明 |
| requestId | string | 请求 ID。当请求失败时会返回。 |
| data | <a href="#DataPoliciesPaginatedRespDto">DataPoliciesPaginatedRespDto</a> | 响应数据 |



示例结果：

```json
{
  "statusCode": 200,
  "message": "操作成功",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "totalCount": 20,
    "list": {
      "policyName": "示例数据策略名称",
      "description": "示例数据策略描述",
      "resourceList": {
        "resourceId": "6301cexxxxxxxxx27478",
        "resourceName": "资源1"
      },
      "policyId": "60b49xxxxxxxxxxxxxxx6e68",
      "targetList": {
        "id": "6301cexxxxxxxxxxxxxxxxx78",
        "type": "USER",
        "name": "test"
      },
      "updatedAt": "2022-07-03T02:20:30.000Z"
    }
  }
}
```

## 数据结构


### <a id="DataPoliciesPaginatedRespDto"></a> DataPoliciesPaginatedRespDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| totalCount | number | 是 | 记录总数   |  `20` |
| list | array | 是 | 响应数据 嵌套类型：<a href="#ListDataPoliciesRespDto">ListDataPoliciesRespDto</a>。  |  |


### <a id="ListDataPoliciesRespDto"></a> ListDataPoliciesRespDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| policyName | string | 是 | 数据策略名称，用户池唯一   |  `示例数据策略名称` |
| description | string | 否 | 数据策略描述   |  `示例数据策略描述` |
| resourceList | array | 是 | 数据权限列表，每个策略下所有的数据资源 ID 和名称 嵌套类型：<a href="#DataResourceSimpleRespDto">DataResourceSimpleRespDto</a>。  |  |
| policyId | string | 是 | 数据策略 ID   |  `60b49xxxxxxxxxxxxxxx6e68` |
| targetList | array | 是 | 主体对象列表,包含数据策略下所有的主体对象,包括 USER、GROUP、ROLE、ORG 嵌套类型：<a href="#SubjectRespDto">SubjectRespDto</a>。  |  |
| updatedAt | string | 是 | 数据策略更新时间   |  `2022-07-03T02:20:30.000Z` |


### <a id="DataResourceSimpleRespDto"></a> DataResourceSimpleRespDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| resourceId | string | 是 | 数据权限所属的数据资源 ID   |  `6301cexxxxxxxxx27478` |
| resourceName | string | 是 | 数据权限所属的数据资源名称   |  `资源1` |


### <a id="SubjectRespDto"></a> SubjectRespDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| id | string | 是 | 主体 ID ，包含用户 ID、用户组 ID、角色 ID、组织机构 ID   |  `6301cexxxxxxxxxxxxxxxxx78` |
| type | string | 是 | 主体类型,包括 USER、GROUP、ROLE、ORG 四种类型   | USER |
| name | string | 是 | 主体名称，包含用户名称、用户组名称、角色名称、组织机构名称   |  `test` |


