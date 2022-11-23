# 分页获取权限分组（列表

<!--
  警告⚠️：
  不要直接修改该文档，
  https://github.com/Authing/authing-docs-factory
  使用该项目进行生成
-->

<LastUpdated />

根据筛选条件，分页获取资源详情列表。

## 方法名称

`AuthenticationClient.ListNamespaces`

## 请求参数

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:60px">默认值</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- | ---- | ---- | ---- | ---- | ---- |
 | page | number  | 否 | 1 | 当前页数，从 1 开始  | `1` |
 | limit | number  | 否 | 10 | 每页数目，最大不能超过 50，默认为 10  | `10` |
 | keywords | string  | 否 | - | 搜索权限分组 Code  | `test` |



  
## 请求响应

类型： `NamespaceListPaginatedRespDto`

| 名称 | 类型 | 描述 |
| ---- | ---- | ---- |
| statusCode | number | 业务状态码，可以通过此状态码判断操作是否成功，200 表示成功。 |
| message | string | 描述信息 |
| apiCode | number | 细分错误码，可通过此错误码得到具体的错误类型。 |
| requestId | string | 请求 ID。当请求失败时会返回。 |
| data | <a href="#NamespaceListPagingDto">NamespaceListPagingDto</a> | 响应数据 |



示例结果：

```json
{
  "statusCode": 200,
  "message": "操作成功",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "list": {
      "name": "系统权限组",
      "code": "system",
      "description": "示例权限分组描述",
      "status": 1
    }
  }
}
```

## 数据结构


### <a id="NamespaceListPagingDto"></a> NamespaceListPagingDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| totalCount | number | 是 | 记录总数   |  |
| list | array | 是 | 响应数据 嵌套类型：<a href="#NamespacesListRespDto">NamespacesListRespDto</a>。  |  |


### <a id="NamespacesListRespDto"></a> NamespacesListRespDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| name | string | 是 | 权限分组 名称   |  `系统权限组` |
| code | string | 是 | 权限分组 Code   |  `system` |
| description | string | 否 | 权限分组描述信息   |  `示例权限分组描述` |
| status | number | 否 | 权限分组状态：0 -> 关闭、1 -> 开启   |  `1` |


