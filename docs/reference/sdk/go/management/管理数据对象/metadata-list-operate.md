# 操作管理列表(分页)

<!--
  警告⚠️：
  不要直接修改该文档，
  https://github.com/Authing/authing-docs-factory
  使用该项目进行生成
-->

<LastUpdated />

> 此文档根据 https://github.com/authing/authing-docs-factory 基于 https://api-explorer.authing.cn V3 API 自动生成，和 API 参数、返回结果保持一致，如此文档描述有误，请以 V3 API 为准。

操作管理列表(分页)

## 方法名称

`ManagementClient.ListOperate`

## 请求参数

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:60px">默认值</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- | ---- | ---- | ---- | ---- | ---- |
 | modelId | string  | 是 | - | model Id  |  |
 | keywords | string  | 否 | - | 搜索功能名称  |  |
 | page | number  | 否 | 1 | 当前页数，从 1 开始  | `1` |
 | limit | number  | 否 | 10 | 每页数目，最大不能超过 50，默认为 10  | `10` |




## 请求响应

类型： `OperateModelDto`

| 名称 | 类型 | 描述 |
| ---- | ---- | ---- |
| id | string | 操作 id |
| userPoolId | string | 用户池 id |
| modelId | string | 功能 id |
| operateName | string | 操作名称 |
| operateKey | string | 操作方法 key |
| show | boolean | 是否展示:<br>    - true: 展示<br>    - false: 不展示<br>     |
| isDefault | boolean | 是否为默认操作:<br>    - true 是默认操作<br>    - fasle 不是默认操作<br>     |
| createdAt | string | 创建时间 |
| updatedAt | string | 更新时间 |



示例结果：

```json
{}
```

## 数据结构


