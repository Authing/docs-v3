# 岗位列表

<!--
  警告⚠️：
  不要直接修改该文档，
  https://github.com/Authing/authing-docs-factory
  使用该项目进行生成
-->

<LastUpdated />

> 此文档根据 https://github.com/authing/authing-docs-factory 基于 https://api-explorer.authing.cn V3 API 自动生成，和 API 参数、返回结果保持一致，如此文档描述有误，请以 V3 API 为准。

岗位列表

## 方法名称

`ManagementClient.postList`

## 请求参数

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:60px">默认值</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- | ---- | ---- | ---- | ---- | ---- |
 | keywords | string  | 否 | - | 搜索岗位 code 或名称  | `xxx` |
 | skipCount | boolean  | 否 | - | 是否统计岗位关联的部门数和用户数  |  |
 | page | number  | 否 | 1 | 当前页数，从 1 开始  | `1` |
 | limit | number  | 否 | 10 | 每页数目，最大不能超过 50，默认为 10  | `10` |
 | withMetadata | boolean  | 否 | - | 是否展示元数据内容  |  |
 | withCustomData | boolean  | 否 | - | 是否获取自定义数据  |  |
 | flatCustomData | boolean  | 否 | - | 是否拍平扩展字段  |  |




## 请求响应

类型： `PostPaginatedRespDto`

| 名称 | 类型 | 描述 |
| ---- | ---- | ---- |
| statusCode | number | 业务状态码，可以通过此状态码判断操作是否成功，200 表示成功。 |
| message | string | 描述信息 |
| apiCode | number | 细分错误码，可通过此错误码得到具体的错误类型。详情可以查看开发准备中的 apiCode 细分说明 |
| requestId | string | 请求 ID。当请求失败时会返回。 |
| data | <a href="#PostPagingDto">PostPagingDto</a> | 响应数据 |



示例结果：

```json
{
  "statusCode": 200,
  "message": "操作成功",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "list": {
      "code": "developer",
      "name": "研发",
      "description": "描述内容"
    }
  }
}
```

## 数据结构


### <a id="PostPagingDto"></a> PostPagingDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| totalCount | number | 是 | 记录总数   |  |
| list | array | 是 | 响应数据 嵌套类型：<a href="#PostItemDto">PostItemDto</a>。  |  |


### <a id="PostItemDto"></a> PostItemDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| code | string | 是 | 分组 code   |  `developer` |
| name | string | 是 | 分组名称   |  `研发` |
| description | string | 否 | 分组描述   |  `描述内容` |
| userCount | number | 是 | 岗位关联用户数，只有在 skipCount 不为 true 时才存在   |  |
| departmentCount | number | 是 | 岗位关联部门数，只有在 skipCount 不为 true 时才存在   |  |
| metadataSource | array | 是 | 岗位元数据信息   |  |


