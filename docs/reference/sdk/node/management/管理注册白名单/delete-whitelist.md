# 删除注册白名单

<!--
  警告⚠️：
  不要直接修改该文档，
  https://github.com/Authing/authing-docs-factory
  使用该项目进行生成
-->

<LastUpdated />

> 此文档根据 https://github.com/authing/authing-docs-factory 基于 https://api-explorer.authing.cn V3 API 自动生成，和 API 参数、返回结果保持一致，如此文档描述有误，请以 V3 API 为准。

通过指定多个注册白名单数据,以数组的形式进行注册白名单的删除

## 方法名称

`ManagementClient.deleteWhitelist`

## 请求参数

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:60px">默认值</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- | ---- | ---- | ---- | ---- | ---- |
| type | string | 是 | - | 白名单类型  | `EMAIL` |
| list | string[] | 否 | - | 类型参数  | `["12580@163.com"]` |




## 请求响应

类型： `IsSuccessDto`

| 名称 | 类型 | 描述 |
| ---- | ---- | ---- |
| success | boolean | 操作是否成功 |



示例结果：

```json
{
  "success": true
}
```

## 数据结构


