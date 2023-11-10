# 判断外部用户权限

<!--
  警告⚠️：
  不要直接修改该文档，
  https://github.com/Authing/authing-docs-factory
  使用该项目进行生成
-->

<LastUpdated />

> 此文档根据 https://github.com/authing/authing-docs-factory 基于 https://api-explorer.authing.cn V3 API 自动生成，和 API 参数、返回结果保持一致，如此文档描述有误，请以 V3 API 为准。


  ## 描述
  当你的用户是外部用户，需要判断其是否拥有某资源的某一权限时，可以使用此接口，通过`externalId`来传递用户的 ID
  

## 方法名称

`ManagementClient.CheckExternalUserPermission`

## 请求参数

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:60px">默认值</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- | ---- | ---- | ---- | ---- | ---- |
| resources | string[] | 是 | - | 资源路径列表,**树资源需到具体树节点**  | `["strResourceCode","arrResourceCode","treeResourceCode/StructCode1/resourceStructChildrenCode1"]` |
| action | string | 是 | - | 数据资源权限操作, read、get、write 等动作  | `get` |
| externalId | string | 是 | - | 外部用户 ID  | `63721xxxxxxxxxxxxdde14a3` |
| namespaceCode | string | 是 | - | 权限空间 Code  | `examplePermissionNamespace` |
| judgeConditionEnabled | boolean | 否 | - | 是否开启条件判断，默认 true 开启  | `true` |
| authEnvParams | <a href="#AuthEnvParams">AuthEnvParams</a> | 否 | - | 条件环境属性，若开启条件判断则使用  | `{"ip":"127.0.0.1"}` |




## 请求响应

类型： `CheckExternalUserPermissionRespDto`

| 名称 | 类型 | 描述 |
| ---- | ---- | ---- |
| statusCode | number | 业务状态码，可以通过此状态码判断操作是否成功，200 表示成功。 |
| message | string | 描述信息 |
| apiCode | number | 细分错误码，可通过此错误码得到具体的错误类型。 |
| data | <a href="#CheckExternalUserPermissionDataDto">CheckExternalUserPermissionDataDto</a> | 响应数据 |



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


### <a id="CheckExternalUserPermissionDataDto"></a> CheckExternalUserPermissionDataDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| checkResultList | array | 是 | 检查结果列表 嵌套类型：<a href="#CheckExternalUserPermissionsRespDto">CheckExternalUserPermissionsRespDto</a>。  |  |


### <a id="CheckExternalUserPermissionsRespDto"></a> CheckExternalUserPermissionsRespDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| namespaceCode | string | 是 | 权限空间 Code   |  `examplePermissionNamespace` |
| action | string | 是 | 数据资源权限操作   |  `get` |
| resource | string | 是 | 资源路径   |  `treeResource1` |
| enabled | boolean | 是 | 用户在某个权限空间下是否具有该数据资源的某个操作   |  `true` |


