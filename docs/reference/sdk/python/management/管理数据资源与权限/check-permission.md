# 判断用户权限（重点）

<!--
  警告⚠️：
  不要直接修改该文档，
  https://github.com/Authing/authing-docs-factory
  使用该项目进行生成
-->

<LastUpdated />

> 此文档根据 https://github.com/authing/authing-docs-factory 基于 https://api-explorer.authing.cn V3 API 自动生成，和 API 参数、返回结果保持一致，如此文档描述有误，请以 V3 API 为准。


  ## 描述
  当你需要判断用户是否拥有某些资源的指定权限时可以使用此接口
  ## 注意
  - 该接口通过传递资源 code 定位对应的数据资源（如果是树类型，则需要传递节点的完整 code 路径）。
  - 如果你在配置数据策略时配置了**环境属性**的条件判断，那么需要设置参数`judgeConditionEnabled`为`true`（默认为 false），并且通过参数`authEnvParams`传递请求时所处的环境信息（如 IP、设备类型、系统类型等），否则条件判断会不生效，导致数据策略不生效。

## 场景举例
用户在删除某条数据时，需要判断他是否拥有此资源的删除权限，则可以使用此接口。

## 请求示例
### 判断用户对字符串和数组资源权限示例（无条件判断）

- 入参

```json
{
  "namespaceCode": "examplePermissionNamespace",
  "userId": "63721xxxxxxxxxxxxdde14a3",
  "action": "get",
  "resources":["strResourceCode1", "arrayResourceCode1"]
}
```

- 出参

```json
{
  "statusCode": 200,
  "message": "操作成功",
  "apiCode": 20001,
  "data": {
      "checkResultList": [
          {
              "namespaceCode": "examplePermissionNamespace",
              "resource": "strResourceCode1",
              "action": "get",
              "enabled": true
          },
          {
              "namespaceCode": "examplePermissionNamespace",
              "resource": "arrayResourceCode1",
              "action": "get",
              "enabled": true
          }
      ]
  }
}
```

### 判断用户对字符串和数组资源权限示例（开启条件判断）

- 入参

```json
{
  "namespaceCode": "examplePermissionNamespace",
  "userId": "63721xxxxxxxxxxxxdde14a3",
  "action": "get",
  "resources": ["strResourceCode1", "arrayResourceCode1"],
  "judgeConditionEnabled": true,
  "authEnvParams":{
      "ip":"110.96.0.0",
      "city":"北京",
      "province":"北京",
      "country":"中国",
      "deviceType":"PC",
      "systemType":"ios",
      "browserType":"IE",
      "requestDate":"2022-12-26 17:40:00"
  }
}
```

- 出参

```json
{
  "statusCode": 200,
  "message": "操作成功",
  "apiCode": 20001,
  "data": {
      "checkResultList": [
          {
              "namespaceCode": "examplePermissionNamespace",
              "resource": "strResourceCode1",
              "action": "get",
              "enabled": false
          },
          {
              "namespaceCode": "examplePermissionNamespace",
              "resource": "arrayResourceCode1",
              "action": "get",
              "enabled": false
          }
      ]
  }
}
```

### 判断用户对树资源权限示例

- 入参

```json
{
  "namespaceCode": "examplePermissionNamespace",
  "userId": "63721xxxxxxxxxxxxdde14a3",
  "action": "get",
  "resources":["treeResourceCode1/StructCode1/resourceStructChildrenCode1", "treeResourceCode2/StructCode1/resourceStructChildrenCode1"]
}
```

- 出参

```json
{
  "statusCode": 200,
  "message": "操作成功",
  "apiCode": 20001,
  "data":{
    "checkResultList": [{
      "namespaceCode": "examplePermissionNamespace",
      "action": "get",
      "resource": "treeResourceCode1/StructCode1/resourceStructChildrenCode1",
      "enabled": true     
    },{
      "namespaceCode": "examplePermissionNamespace",
      "action": "get",
      "resource": "treeResourceCode2/StructCode1/resourceStructChildrenCode1",
      "enabled": true     
    }]
  }
}
```
  

## 方法名称

`ManagementClient.check_permission`

## 请求参数

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:60px">默认值</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- | ---- | ---- | ---- | ---- | ---- |
| resources | string[] | 是 | - | 资源路径列表,**树资源需到具体树节点**  | `["strResourceCode","arrResourceCode","treeResourceCode/StructCode1/resourceStructChildrenCode1"]` |
| action | string | 是 | - | 数据资源权限操作, read、get、write 等动作  | `get` |
| userId | string | 是 | - | 用户 ID  | `63721xxxxxxxxxxxxdde14a3` |
| namespaceCode | string | 是 | - | 权限空间 Code  | `examplePermissionNamespace` |
| judgeConditionEnabled | boolean | 否 | - | 是否开启条件判断，默认 false 不开启  |  |
| authEnvParams | <a href="#AuthEnvParams">AuthEnvParams</a> | 否 | - | 条件环境属性，若开启条件判断则使用  | `{"ip":"127.0.0.1"}` |




## 请求响应

类型： `CheckPermissionRespDto`

| 名称 | 类型 | 描述 |
| ---- | ---- | ---- |
| statusCode | number | 业务状态码，可以通过此状态码判断操作是否成功，200 表示成功。 |
| message | string | 描述信息 |
| apiCode | number | 细分错误码，可通过此错误码得到具体的错误类型。 |
| data | <a href="#CheckPermissionDataDto">CheckPermissionDataDto</a> | 响应数据 |



示例结果：

```json
{
  "statusCode": 200,
  "message": "操作成功",
  "apiCode": 20001,
  "data": {
    "checkResultList": {
      "namespaceCode": "examplePermissionNamespace",
      "action": "get",
      "resource": "treeResource1",
      "enabled": true
    }
  }
}
```

## 数据结构


### <a id="AuthEnvParams"></a> AuthEnvParams

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| ip | string | 否 | ip   |  `127.0.0.1` |
| city | string | 否 | 城市   |  `北京` |
| province | string | 否 | 省份   |  `湖北` |
| country | string | 否 | 国家   |  `中国` |
| deviceType | string | 否 | 设备类型：PC/Mobile   | PC |
| systemType | string | 否 | 操作类型：Windows、Android、iOS、MacOS   | Windows |
| browserType | string | 否 | 浏览器类型：IE/Chrome/Firefox   | IE |
| requestDate | string | 否 | 请求时间   |  `2022-07-03T02:20:30.000Z` |


### <a id="CheckPermissionDataDto"></a> CheckPermissionDataDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| checkResultList | array | 是 | 检查结果列表 嵌套类型：<a href="#CheckPermissionsRespDto">CheckPermissionsRespDto</a>。  |  |


### <a id="CheckPermissionsRespDto"></a> CheckPermissionsRespDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| namespaceCode | string | 是 | 权限空间 Code   |  `examplePermissionNamespace` |
| action | string | 是 | 数据资源权限操作   |  `get` |
| resource | string | 是 | 资源路径   |  `treeResource1` |
| enabled | boolean | 是 | 用户在某个权限空间下是否具有该数据资源的某个操作   |  `true` |


