# 更新数据对象的字段

<!--
  警告⚠️：
  不要直接修改该文档，
  https://github.com/Authing/authing-docs-factory
  使用该项目进行生成
-->

<LastUpdated />

> 此文档根据 https://github.com/authing/authing-docs-factory 基于 https://api-explorer.authing.cn V3 API 自动生成，和 API 参数、返回结果保持一致，如此文档描述有误，请以 V3 API 为准。

更新相关数据对象的字段信息及基本校验规则

## 方法名称

`ManagementClient.UpdateField`

## 请求参数

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:60px">默认值</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- | ---- | ---- | ---- | ---- | ---- |
| userVisible | boolean | 是 | - | 用户中心是否显示，仅在 user 模块下有意义:<br>    - true: 用户中心展示<br>    - false: 用户中心不展示<br>      |  |
| relationOptionalRange | <a href="#RelationOptionalRange">RelationOptionalRange</a> | 是 | - | 关联数据可选范围  |  |
| relationShowKey | string | 是 | - | 关联数据要展示的属性  |  |
| forLogin | boolean | 是 | - | 是否可用于登录，仅在 user 模块下有意义:<br>    - true: 用于登录<br>    - false: 不用于登录<br>      |  |
| fuzzySearch | boolean | 是 | - | 是否支持模糊搜索:<br>    - true: 支持模糊搜索<br>    - false: 不支持模糊搜索<br>      |  |
| dropDown | string[] | 是 | - | 下拉菜单选项  |  |
| format | number | 是 | - | 前端格式化规则  | `
    - 0: 原始数据
    - 31: 保留一位小数
    - 32: 保留两位小数
    - 33: 保留三位小数
    - 34: 保留四位小数
    - 35: 千分位
    - 36: 带小数的千分位
    - 37: 百分比
    - 38: 带小数的百分比
    - 50: 'YYYY/MM/DD/ HH:mm:ss'
    - 51: 'YYYY/MM/DD'
    - 52: 'YYYY/MM/DDHH:mm'
    - 53: 'YYYY-MM-DD'
    - 54: 'YYYY-MM-DDHH:mm'
    - 55: 'MM-DD'
    - 56: 'MM/DD/YYYY'
    - 57: 'DD/MM/YYYY'
    ` |
| regexp | string | 是 | - | 字符串的校验匹配规则  |  |
| min | number | 是 | - | 如果类型是数字表示数字下限，如果类型是日期表示开始日期  |  |
| max | number | 是 | - | 如果类型是数字表示数字上限，如果类型是日期表示结束日期  |  |
| maxLength | number | 是 | - | 字符串长度限制  |  |
| unique | boolean | 是 | - | 是否唯一:<br>    - true: 唯一<br>    - false: 不唯一<br>      |  |
| require | boolean | 是 | - | 是否必填:<br>    - true: 必填<br>    - false: 不必填<br>      |  |
| default | object | 是 | - | 默认值  |  |
| help | string | 是 | - | 帮助说明  |  |
| editable | boolean | 是 | - | 是否可编辑:<br>    - true: 可编辑<br>    - false: 不可编辑<br>      |  |
| show | boolean | 是 | - | 是否展示:<br>    - true: 展示<br>    - false: 不展示<br>      |  |
| name | string | 是 | - | 字段名称  |  |
| modelId | string | 是 | - | 功能 id  |  |
| id | string | 是 | - | 字段 id  |  |




## 请求响应

类型： `FunctionModelFieldResDto`

| 名称 | 类型 | 描述 |
| ---- | ---- | ---- |
| statusCode | number | 业务状态码，可以通过此状态码判断操作是否成功，200 表示成功。 |
| message | string | 描述信息 |
| apiCode | number | 细分错误码，可通过此错误码得到具体的错误类型。详情可以查看开发准备中的 apiCode 细分说明 |
| requestId | string | 请求 ID。当请求失败时会返回。 |
| data | <a href="#FunctionModelFieldDto">FunctionModelFieldDto</a> | 响应数据 |



示例结果：

```json
{
  "statusCode": 200,
  "message": "操作成功",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "format": "\n    - 0: 原始数据\n    - 31: 保留一位小数\n    - 32: 保留两位小数\n    - 33: 保留三位小数\n    - 34: 保留四位小数\n    - 35: 千分位\n    - 36: 带小数的千分位\n    - 37: 百分比\n    - 38: 带小数的百分比\n    - 50: 'YYYY/MM/DD/ HH:mm:ss'\n    - 51: 'YYYY/MM/DD'\n    - 52: 'YYYY/MM/DDHH:mm'\n    - 53: 'YYYY-MM-DD'\n    - 54: 'YYYY-MM-DDHH:mm'\n    - 55: 'MM-DD'\n    - 56: 'MM/DD/YYYY'\n    - 57: 'DD/MM/YYYY'\n    ",
    "relationOptionalRange": {
      "conditions": {}
    }
  }
}
```

## 数据结构


### <a id="RelationOptionalRange"></a> RelationOptionalRange

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| conjunction | string | 是 | 多个搜索条件的关系：<br>    - and: 且<br>    - or:  或<br>       |  |
| conditions |  | 是 | 搜索条件 嵌套类型：<a href="#Condition">Condition</a>。  |  |


### <a id="Condition"></a> Condition

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| key | string | 是 | 搜索字段的 key   |  |
| value | object | 是 | 搜索值   |  |
| operator | string | 是 | 操作类型：<br>    - eq: 等于<br>    - ne: 不等于<br>    - co: 包含<br>    - gt: 大于<br>    - lt: 小于<br>    - lte: 小于等于<br>    - gte: 大于等于<br>    - in: 数组包含<br>       |  |


### <a id="FunctionModelFieldDto"></a> FunctionModelFieldDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| id | string | 是 | 字段 id   |  |
| modelId | string | 是 | 功能 id   |  |
| name | string | 是 | 字段名称   |  |
| key | string | 是 | 字段属性名   |  |
| type | number | 是 | 字段类型:<br>    - 1: 单行文本<br>    - 2: 多行文本<br>    - 3: 数字<br>    - 4: 布尔类型<br>    - 5: 日期<br>    - 6: 枚举<br>    - 7: 关联类型<br>    - 8: 反向关联数据展示<br>       |  |
| show | boolean | 是 | 是否展示:<br>    - true: 展示<br>    - false: 不展示<br>       |  |
| editable | boolean | 是 | 是否可编辑:<br>    - true: 可编辑<br>    - false: 不可编辑<br>       |  |
| help | string | 是 | 帮助说明   |  |
| default | string | 是 | 默认值   |  |
| require | boolean | 是 | 是否必填:<br>    - true: 必填<br>    - false: 不必填<br>       |  |
| unique | boolean | 是 | 是否唯一:<br>    - true: 唯一<br>    - false: 不唯一<br>       |  |
| maxLength | number | 是 | 字符串长度限制   |  |
| max | number | 是 | 如果类型是数字表示数字上限，如果类型是日期表示结束日期   |  |
| min | number | 是 | 如果类型是数字表示数字下限，如果类型是日期表示开始日期   |  |
| regexp | string | 是 | 字符串的校验匹配规则   |  |
| format | number | 是 | 前端格式化显示规则:   |  `
    - 0: 原始数据
    - 31: 保留一位小数
    - 32: 保留两位小数
    - 33: 保留三位小数
    - 34: 保留四位小数
    - 35: 千分位
    - 36: 带小数的千分位
    - 37: 百分比
    - 38: 带小数的百分比
    - 50: 'YYYY/MM/DD/ HH:mm:ss'
    - 51: 'YYYY/MM/DD'
    - 52: 'YYYY/MM/DDHH:mm'
    - 53: 'YYYY-MM-DD'
    - 54: 'YYYY-MM-DDHH:mm'
    - 55: 'MM-DD'
    - 56: 'MM/DD/YYYY'
    - 57: 'DD/MM/YYYY'
    ` |
| dropDown | number | 是 | 下拉菜单选项   |  |
| relationType | string | 是 | 关联数据要展示的属性   |  |
| relationMultiple | boolean | 是 | 关联关系是否为 1-N:<br>    - true: 是 1-N 的关系<br>    - false: 不是 1-N 的关系<br>       |  |
| relationShowKey | string | 是 | 关联数据要展示的属性   |  |
| relationOptionalRange |  | 是 | 关联数据可选范围 嵌套类型：<a href="#RelationOptionalRange">RelationOptionalRange</a>。  |  |
| userVisible | boolean | 是 | 用户中心是否显示，仅在 user 模块下有意义:<br>    - true: 用户中心展示<br>    - false: 用户中心不展示<br>       |  |


### <a id="RelationOptionalRange"></a> RelationOptionalRange

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| conjunction | string | 是 | 多个搜索条件的关系：<br>    - and: 且<br>    - or:  或<br>       |  |
| conditions |  | 是 | 搜索条件 嵌套类型：<a href="#Condition">Condition</a>。  |  |


### <a id="Condition"></a> Condition

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| key | string | 是 | 搜索字段的 key   |  |
| value | object | 是 | 搜索值   |  |
| operator | string | 是 | 操作类型：<br>    - eq: 等于<br>    - ne: 不等于<br>    - co: 包含<br>    - gt: 大于<br>    - lt: 小于<br>    - lte: 小于等于<br>    - gte: 大于等于<br>    - in: 数组包含<br>       |  |


