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
  "resource":"strResourceCode1",
}
```

### 判断用户在同层级数组资源权限示例

```json
{
  "namespaceCode": "权限空间1",
  "userId": "63721xxxxxxxxxxxxdde14a3",
  "action": "read"
  "resource":"arrayResourceCode1",
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
| enabled | boolean | 是 | - | 是否拥有 action 权限  | `true` |
| action | string | 是 | - | 数据资源权限操作  | `get` |
| resourceNodeCode | string | 否 | - | 树资源节点code  | `resourceStructChildrenCode1` |




## 请求响应

类型： `CheckUserSameLevelPermissionRespDto`

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
| checkLevelResultList | array | 是 | 响应结果列表 嵌套类型：<a href="#CheckUserSameLevelPermissionDto">CheckUserSameLevelPermissionDto</a>。  |  |


### <a id="CheckUserSameLevelPermissionDto"></a> CheckUserSameLevelPermissionDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| action | string | 是 | 数据资源权限操作   |  `get` |
| resourceNodeCode | string | 否 | 树资源节点code   |  `resourceStructChildrenCode1` |
| enabled | boolean | 是 | 是否拥有 action 权限   |  `true` |


