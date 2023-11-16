# 检查数据资源 Code 或者名称是否可用

<!--
  警告⚠️：
  不要直接修改该文档，
  https://github.com/Authing/authing-docs-factory
  使用该项目进行生成
-->

<LastUpdated />

> 此文档根据 https://github.com/authing/authing-docs-factory 基于 https://api-explorer.authing.cn V3 API 自动生成，和 API 参数、返回结果保持一致，如此文档描述有误，请以 V3 API 为准。

检查数据资源名称或者 Code 在权限空间内是否有效,通过数据资源名称或者数据资源 Code 以及所属权限空间 Code,判断在指定的权限空间内是否可用。

### 数据资源 Code 有效示例

- 入参

```json
{
  "namespaceCode": "examplePermissionNamespace",
  "resourceCode": "test"
}
```

- 出参

```json
{
  "statusCode": 200,
  "message": "操作成功",
  "apiCode": 0,
  "data": {
      "isValid": "true"
    }
}
```

### 数据资源名称有效示例

- 入参

```json
{
  "namespaceCode": "examplePermissionNamespace",
  "resourceName": "test"
}
```

- 出参

```json
{
  "statusCode": 200,
  "message": "操作成功",
  "apiCode": 0,
  "data": {
      "isValid": "true"
    }
}
```

### 数据资源 Code 无效示例

- 入参

```json
{
  "namespaceCode": "examplePermissionNamespace",
  "resourceCode": "test"
}
```

- 出参

```json
{
  "statusCode": 200,
  "message": "操作成功",
  "apiCode": 0,
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
      "isValid": "false",
      "message": "data resource code already exist"
  }
}
```
  

## 方法名称

`ManagementClient.checkDataResourceExists`

## 请求参数

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:60px">默认值</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- | ---- | ---- | ---- | ---- | ---- |
 | namespaceCode | string  | 是 | - | 数据资源所属的权限空间 Code  | `examplePermissionNamespace` |
 | resourceName | string  | 否 | - | 数据资源名称, 权限空间内唯一  | `示例数据资源名称` |
 | resourceCode | string  | 否 | - | 数据资源 Code, 权限空间内唯一  | `dataResourceTestCode` |




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

  const result = await managementClient.checkDataResourceExists({
    namespaceCode: 'examplePermissionNamespace',
    resourceName: '示例树数据资源名称'
  });


  console.log(JSON.stringify(result, null, 2));
})();

```




## 请求响应

类型： `CheckParamsDataResourceResponseDto`

| 名称 | 类型 | 描述 |
| ---- | ---- | ---- |
| statusCode | number | 业务状态码，可以通过此状态码判断操作是否成功，200 表示成功。 |
| message | string | 描述信息 |
| apiCode | number | 细分错误码，可通过此错误码得到具体的错误类型（成功请求不返回）。详细错误码列表请见：[API Code 列表](https://api-explorer.authing.cn/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId | string | 请求 ID。当请求失败时会返回。 |
| data | <a href="#CheckParamsDataResourceRespDto">CheckParamsDataResourceRespDto</a> | 响应数据 |



示例结果：

```json
{
  "statusCode": 200,
  "message": "操作成功",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "isValid": "false",
    "message": "data resource name already exist"
  }
}
```

## 数据结构


### <a id="CheckParamsDataResourceRespDto"></a> CheckParamsDataResourceRespDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| isValid | boolean | 是 | 数据资源名称或者 Code 校验是否有效   |  `false` |
| message | string | 否 | 数据资源名称或者 Code 校验失败提示信息,如果校验成功, message 不返回   |  `data resource name already exist` |


