# 获取数据资源信息

<!--
  警告⚠️：
  不要直接修改该文档，
  https://github.com/Authing/authing-docs-factory
  使用该项目进行生成
-->

<LastUpdated />

获取数据资源,通过数据资源 ID 查询对应的数据资源信息,包含数据资源名称、数据资源 Code、数据资源类型（TREE、STRING、ARRAY）、数据资源所属权限空间 ID、数据资源所属权限空间 Code 以及数据资源操作列表等基本信息。

## 方法名称

`ManagementClient.getDataResource`

## 请求参数

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:60px">默认值</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- | ---- | ---- | ---- | ---- | ---- |
 | namespaceCode | string  | 是 | - | 数据资源所属的权限空间 Code  | `examplePermissionNamespace` |
 | resourceCode | string  | 是 | - | 数据资源 Code,权限空间内唯一  | `dataResourceTestCode` |




## 请求响应

类型： `GetDataResourceResponseDto`

| 名称 | 类型 | 描述 |
| ---- | ---- | ---- |
| statusCode | number | 业务状态码，可以通过此状态码判断操作是否成功，200 表示成功。 |
| message | string | 描述信息 |
| apiCode | number | 细分错误码，可通过此错误码得到具体的错误类型。 |
| requestId | string | 请求 ID。当请求失败时会返回。 |
| data | <a href="#GetDataResourceRespDto">GetDataResourceRespDto</a> | 响应数据 |



示例结果：

```json
{
  "statusCode": 200,
  "message": "操作成功",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "resourceName": "示例数据资源名称",
    "resourceCode": "dataResourceTestCode",
    "type": "TREE",
    "description": "示例数据资源描述",
    "namespaceCode": "code1",
    "actionList": "[\"read\",\"get\"]"
  }
}
```

## 数据结构


### <a id="GetDataResourceRespDto"></a> GetDataResourceRespDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| resourceName | string | 是 | 数据资源名称,权限空间内唯一   |  `示例数据资源名称` |
| resourceCode | string | 是 | 数据资源 Code,权限空间内唯一   |  `dataResourceTestCode` |
| type | string | 是 | 数据资源类型，目前支持树结构（TREE）、字符串（STRING）、数组（ARRAY）   | TREE |
| description | string | 否 | 数据资源描述   |  `示例数据资源描述` |
| struct |  | 是 | 数据资源节点类型，支持字符串（STRING）、树结构（TREE）和数组结构（ARRAY）。   |  |
| namespaceCode | string | 是 | 数据策略所在的权限空间 Code   |  `code1` |
| actionList | array | 是 | 数据资源权限操作列表 数组长度限制：50。  |  `["read","get"]` |


