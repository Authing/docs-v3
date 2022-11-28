# 判断用户在同层级资源下的权限

<!--
  警告⚠️：
  不要直接修改该文档，
  https://github.com/Authing/authing-docs-factory
  使用该项目进行生成
-->

<LastUpdated />

该接口主要用于判断用户在同层级资源下的权限，通过权限空间 Code 、用户 ID、资源操作、资源或资源子节点查询用户是否有该同级资源的权限。
  
### 判断用户在同层级字符串资源权限示例

```json
{
  "namespaceCode": "权限空间1",
  "userId": "63721xxxxxxxxxxxxdde14a3",
  "action": "read"
  "resource":"strResourceCode1"
}
```

### 判断用户在同层级数组资源权限示例

```json
{
  "namespaceCode": "权限空间1",
  "userId": "63721xxxxxxxxxxxxdde14a3",
  "action": "read",
  "resource":"arrayResourceCode1"
}
```

### 判断用户在同层级树资源权限示例

```json
{
  "namespaceCode": "权限空间1",
  "userId": "63721xxxxxxxxxxxxdde14a3",
  "action": "read",
  "resource":"/treeResourceCode1/structCode1",
  "resourceNodeCodes": ["resourceStructChildrenCode1","resourceStructChildrenCode2","resourceStructChildrenCode3"]
}
```
  

## 方法名称

`ManagementClient.check_user_same_level_permission`

## 请求参数

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:60px">默认值</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- | ---- | ---- | ---- | ---- | ---- |
| resource | string | 是 | - | 资源路径  | `/treeResourceCode1/structCode1` |
| action | string | 是 | - | 数据资源权限操作  | `read` |
| userId | string | 是 | - | 用户 ID  | `63721xxxxxxxxxxxxdde14a3` |
| namespaceCode | string | 是 | - | 权限空间 Code  | `权限空间1` |
| resourceNodeCodes | string[] | 否 | - | 当前树资源路径子节点code  | `["resourceStructChildrenCode1","resourceStructChildrenCode2","resourceStructChildrenCode3"]` |




## 请求响应

类型： `CheckUserSameLevelPermissionResponseDto`

| 名称 | 类型 | 描述 |
| ---- | ---- | ---- |
| data | <a href="#CheckUserSameLevelPermissionDataDto">CheckUserSameLevelPermissionDataDto</a> | 响应数据 |



示例结果：

```json
{
  "data": {
    "checkLevelResultList": {
      "action": "get",
      "resourceNodeCode": "resourceStructChildrenCode1",
      "enabled": true
    }
  }
}
```

## 数据结构


### <a id="CheckUserSameLevelPermissionDataDto"></a> CheckUserSameLevelPermissionDataDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| checkLevelResultList | array | 是 | 响应结果列表 嵌套类型：<a href="#CheckUserSameLevelPermissionRespDto">CheckUserSameLevelPermissionRespDto</a>。  |  |


### <a id="CheckUserSameLevelPermissionRespDto"></a> CheckUserSameLevelPermissionRespDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| action | string | 是 | 数据资源权限操作   |  `get` |
| resourceNodeCode | string | 否 | 树资源节点code   |  `resourceStructChildrenCode1` |
| enabled | boolean | 是 | 是否拥有 action 权限   |  `true` |


