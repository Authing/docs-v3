# 获取数据对象详情

<!--
  警告⚠️：
  不要直接修改该文档，
  https://github.com/Authing/authing-docs-factory
  使用该项目进行生成
-->

<LastUpdated />

> 此文档根据 https://github.com/authing/authing-docs-factory 基于 https://api-explorer.authing.cn V3 API 自动生成，和 API 参数、返回结果保持一致，如此文档描述有误，请以 V3 API 为准。

利用功能 id ，获取数据对象的详细信息

## 方法名称

`ManagementClient.GetModel`

## 请求参数

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:60px">默认值</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- | ---- | ---- | ---- | ---- | ---- |
 | id | string  | 是 | - | 功能 id 可以从控制台页面获取  |  |




## 请求响应

类型： `FunctionModelResDto`

| 名称 | 类型 | 描述 |
| ---- | ---- | ---- |
| statusCode | number | 业务状态码，可以通过此状态码判断操作是否成功，200 表示成功。 |
| message | string | 描述信息 |
| apiCode | number | 细分错误码，可通过此错误码得到具体的错误类型。详情可以查看开发准备中的 apiCode 细分说明 |
| requestId | string | 请求 ID。当请求失败时会返回。 |
| data | <a href="#FunctionModelDto">FunctionModelDto</a> | 响应数据 |



示例结果：

```json
{
  "statusCode": 200,
  "message": "操作成功",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "dataType": "list"
  }
}
```

## 数据结构


### <a id="FunctionModelDto"></a> FunctionModelDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| id | string | 是 | 功能 id   |  |
| userPoolId | string | 是 | 用户池 id   |  |
| name | string | 是 | 功能名称   |  |
| description | string | 是 | 功能描述   |  |
| dataType | string | 是 | 数据类型：<br>    - list: 列表类型数据。<br>    - tree: 树状结构数据。<br>       | list |
| enable | boolean | 是 | 功能是否启用:<br>    - true: 启用<br>    - false: 不启用<br>       |  |
| parentKey | string | 是 | 父级菜单   |  |
| createdAt | string | 是 | 创建时间   |  |
| updatedAt | string | 是 | 更新时间   |  |
| type | string | 是 | 功能类型：<br>    - user: 用户<br>    - post: 岗位<br>    - group: 用户组<br>    - ueba: ueba<br>    - department: 树状结构数据<br>    - organization: 组织<br>    - device: 设备<br>    - device_rely: 设备<br>    - custom: 自定义<br>       | ueba |
| fieldOrder | string | 是 | 字段排序   |  |
| config | object | 是 | 详情页配置   |  |


