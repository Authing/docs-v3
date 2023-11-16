# 数据对象高级搜索

<!--
  警告⚠️：
  不要直接修改该文档，
  https://github.com/Authing/authing-docs-factory
  使用该项目进行生成
-->

<LastUpdated />

> 此文档根据 https://github.com/authing/authing-docs-factory 基于 https://api-explorer.authing.cn V3 API 自动生成，和 API 参数、返回结果保持一致，如此文档描述有误，请以 V3 API 为准。

数据对象高级搜索

## 方法名称

`ManagementClient.list_row`

## 请求参数

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:60px">默认值</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- | ---- | ---- | ---- | ---- | ---- |
| modelId | string | 是 | - | 功能 id  |  |
| keywords | string | 否 | - | 关键字  |  |
| conjunction | string | 否 | - | 多个搜索条件的关系：<br>    - and: 且<br>    - or:  或<br>      |  |
| conditions | <a href="#Condition">Condition[]</a> | 否 | - | 搜索条件  |  |
| sort | object[] | 否 | - | 排序条件  | `[{"key1":"desc"},{"key2":"asc"}]` |
| page | number | 否 | 1 | 当前页数，从 1 开始  | `1` |
| limit | number | 否 | 10 | 每页数目，最大不能超过 50，默认为 10  | `10` |
| fetchAll | boolean | 否 | - | 是否不分页返回所有（仅支持树形结构获取子节点的场景）  |  |
| withPath | boolean | 否 | - | 是否返回节点的全路径（仅支持树形结构）  |  |
| showFieldId | boolean | 否 | - | 返回结果中是否使用字段 id 作为 key  |  |
| previewRelation | boolean | 否 | - | 返回结果中是包含关联数据的预览（前三个）  |  |
| getRelationFieldDetail | boolean | 否 | - | 是否返回关联数据的详细用户信息，当前只支持用户。  |  |
| scope | <a href="#ScopeDto">ScopeDto</a> | 否 | - | 限定检索范围为被某个功能关联的部分  |  |
| filterRelation | <a href="#ScopeDto">ScopeDto</a> | 否 | - | 过滤指定关联数据  |  |
| expand | <a href="#Expand">Expand[]</a> | 否 | - | 获取对应关联数据的详细字段  |  |




## 请求响应

类型： `FunctionModelValueListResDto`

| 名称 | 类型 | 描述 |
| ---- | ---- | ---- |
| statusCode | number | 业务状态码，可以通过此状态码判断操作是否成功，200 表示成功。 |
| message | string | 描述信息 |
| apiCode | number | 细分错误码，可通过此错误码得到具体的错误类型（成功请求不返回）。详细错误码列表请见：[API Code 列表](https://api-explorer.authing.cn/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| data | <a href="#FunctionModelValueListDto">FunctionModelValueListDto</a> | 响应数据 |



示例结果：

```json
{
  "statusCode": 200,
  "message": "操作成功",
  "apiCode": 20001,
  "data": {}
}
```

## 数据结构


### <a id="Condition"></a> Condition

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| key | string | 是 | 搜索字段的 key   |  |
| value | object | 是 | 搜索值   |  |
| operator | string | 是 | 操作类型：<br>    - eq: 等于<br>    - ne: 不等于<br>    - co: 包含<br>    - gt: 大于<br>    - lt: 小于<br>    - lte: 小于等于<br>    - gte: 大于等于<br>    - in: 数组包含<br>       |  |


### <a id="ScopeDto"></a> ScopeDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| modelId | string | 是 | 功能 id   |  |
| id | string | 是 | 行 id   |  |
| fieldId | string | 是 | 字段 id   |  |


### <a id="Expand"></a> Expand

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| field | string | 是 | 关联的字段 key   |  |
| select | array | 是 | 展开哪些关联字段   |  |


### <a id="FunctionModelValueListDto"></a> FunctionModelValueListDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| totalCount | number | 是 | 总行数   |  |
| list | array | 是 | 响应数据   |  |


