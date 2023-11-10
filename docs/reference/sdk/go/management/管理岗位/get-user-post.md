# 获取用户关联岗位

<!--
  警告⚠️：
  不要直接修改该文档，
  https://github.com/Authing/authing-docs-factory
  使用该项目进行生成
-->

<LastUpdated />

> 此文档根据 https://github.com/authing/authing-docs-factory 基于 https://api-explorer.authing.cn V3 API 自动生成，和 API 参数、返回结果保持一致，如此文档描述有误，请以 V3 API 为准。

此接口只会返回一个岗位，已废弃，请使用 /api/v3/get-user-posts 接口

## 方法名称

`ManagementClient.GetUserPost`

## 请求参数

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:60px">默认值</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- | ---- | ---- | ---- | ---- | ---- |
 | userId | string  | 是 | - | 用户 id  | `xxxxx` |
 | withCustomData | boolean  | 否 | - | 是否获取自定义数据  |  |




## 请求响应

类型： `CreatePostDto`

| 名称 | 类型 | 描述 |
| ---- | ---- | ---- |
| code | string | 分组 code |
| name | string | 分组名称 |
| description | string | 分组描述 |
| departmentIdList | string | 部门 id 列表 |



示例结果：

```json
{
  "code": "developer",
  "name": "研发",
  "description": "描述内容",
  "departmentIdList": "[\"xxx\"]"
}
```

## 数据结构


