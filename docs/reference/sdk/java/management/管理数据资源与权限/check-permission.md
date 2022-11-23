# 判断用户权限

<!--
  警告⚠️：
  不要直接修改该文档，
  https://github.com/Authing/authing-docs-factory
  使用该项目进行生成
-->

<LastUpdated />

该接口用于判断用户权限，通过权限空间 Code、用户 ID、资源操作以及资源列表来判断用户是否对资源拥有操作权限。

### 判断用户对字符串和数组资源权限示例

- 入参

```json
{
  "namespaceCode": "权限空间1",
  "userId": "63721xxxxxxxxxxxxdde14a3",
  "action": "get"
  "resources":["strResourceCode1", "arrayResourceCode1"],
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
      "namespaceCode": "权限空间1",
      "action": "get",
      "resource": "strResourceCode1",
      "enabled": true     
    },{
      "namespaceCode": "权限空间1",
      "action": "get",
      "resource": "arrayResourceCode1",
      "enabled": true     
    }]
  }
}
```

### 判断用户对树资源权限示例

- 入参

```json
{
  "namespaceCode": "权限空间1",
  "userId": "63721xxxxxxxxxxxxdde14a3",
  "action": "get"
  "resources":["/treeResourceCode1/StructCode1/resourceStructChildrenCode1", "/treeResourceCode2/StructCode1/resourceStructChildrenCode1"],
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
      "namespaceCode": "权限空间1",
      "action": "get",
      "resource": "/treeResourceCode1/StructCode1/resourceStructChildrenCode1",
      "enabled": true     
    },{
      "namespaceCode": "权限空间1",
      "action": "get",
      "resource": "/treeResourceCode2/StructCode1/resourceStructChildrenCode1",
      "enabled": true     
    }]
  }
}
```
  

## 方法名称

`ManagementClient.checkPermission`

## 请求参数

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:60px">默认值</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- | ---- | ---- | ---- | ---- | ---- |
| resources | string[] | 是 | - | 数据资源路径列表,  | `["/treeResourceCode1/StructCode1/resourceStructChildrenCode1"]` |
| action | string | 是 | - | 数据资源权限操作, read、get、write 等动作  | `get` |
| userId | string | 是 | - | 用户 ID  | `63721xxxxxxxxxxxxdde14a3` |
| namespaceCode | string | 是 | - | 权限空间 Code  | `权限空间1` |




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
      "namespaceCode": "权限空间1",
      "action": "get",
      "resource": "strResource1",
      "enabled": true
    }
  }
}
```

## 数据结构


### <a id="CheckPermissionDataDto"></a> CheckPermissionDataDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| checkResultList | array | 是 | 检查结果列表 嵌套类型：<a href="#CheckPermissionsRespDto">CheckPermissionsRespDto</a>。  |  |


### <a id="CheckPermissionsRespDto"></a> CheckPermissionsRespDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| namespaceCode | string | 是 | 权限空间 Code   |  `权限空间1` |
| action | string | 是 | 数据资源权限操作   |  `get` |
| resource | string | 是 | 资源路径   |  `strResource1` |
| enabled | boolean | 是 | 用户在某个权限空间下是否具有该数据资源的某个操作   |  `true` |


