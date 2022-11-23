# 获取用户指定资源权限列表

<!--
  警告⚠️：
  不要直接修改该文档，
  https://github.com/Authing/authing-docs-factory
  使用该项目进行生成
-->

<LastUpdated />

该接口主要用于获取用户指定资源的权限列表,通过权限空间 Code、用户 ID 以及资源列表查询所有权限。
  
### 获取用户字符串和数组资源权限示例

- 入参
  
```json
{
  "namespaceCode": "权限空间1",
  "userId": "63721xxxxxxxxxxxxdde14a3",
  "resources":["strResourceCode1", "arrayResourceCode1"]
}
```

- 出参

```json
{

  "statusCode": 200,
  "message": "操作成功",
  "apiCode": 20001,
  "data":{
    "permissionList": [{
      "namespaceCode": "权限空间1",
      "actionList": ["read","get"]  
      "resource": "strResourceCode1",
    },{
      "namespaceCode": "权限空间1",
      "actionList": ["read","update","delete"]      
      "resource": "arrayResourceCode1",
    }]
  }
}
```
  
### 获取用户树资源权限示例
  
- 入参
  
```json
{
  "namespaceCode": "权限空间1",
  "userId": "63721xxxxxxxxxxxxdde14a3",
  "resources":["/treeResourceCode1/StructCode1/resourceStructChildrenCode1", "/treeResourceCode2/StructCode1/resourceStructChildrenCode1"]
}
```

- 出参

```json
{
  "statusCode": 200,
  "message": "操作成功",
  "apiCode": 20001,
  "data":{
    "permissionList": [{
      "namespaceCode": "权限空间1",
      "actionList": ["read", "update", "delete"]  
      "resource": "/treeResourceCode1/StructCode1/resourceStructChildrenCode1",
    },{
      "namespaceCode": "权限空间1",
      "actionList": ["read", "get", "delete"]      
      "resource": "/treeResourceCode2/StructCode1/resourceStructChildrenCode1",
    }]
  }
}
```
  

## 方法名称

`ManagementClient.get_user_resource_permission_list`

## 请求参数

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:60px">默认值</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- | ---- | ---- | ---- | ---- | ---- |
| resources | string[] | 是 | - | 资源路径列表  | `["strResourceCode1","arrayResourceCode1"]` |
| userId | string | 是 | - | 用户 ID  | `6301ceaxxxxxxxxx27478` |
| namespaceCode | string | 是 | - | 权限空间 Code  | `权限空间1` |




## 请求响应

类型： `GetUserResourcePermissionListRespDto`

| 名称 | 类型 | 描述 |
| ---- | ---- | ---- |
| statusCode | number | 业务状态码，可以通过此状态码判断操作是否成功，200 表示成功。 |
| message | string | 描述信息 |
| apiCode | number | 细分错误码，可通过此错误码得到具体的错误类型。 |
| requestId | string | 请求 ID。当请求失败时会返回。 |
| data | <a href="#GetUserResourcePermissionListDataDto">GetUserResourcePermissionListDataDto</a> | 响应数据 |



示例结果：

```json
{
  "statusCode": 200,
  "message": "操作成功",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "permissionList": {
      "namespaceCode": "权限空间1",
      "actions": "[\"get\",\"read\",\"write\",\"delete\"]",
      "resources": "strResourceCode1"
    }
  }
}
```

## 数据结构


### <a id="GetUserResourcePermissionListDataDto"></a> GetUserResourcePermissionListDataDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| permissionList | array | 是 | 权限列表 嵌套类型：<a href="#GetUserResourcePermissionList">GetUserResourcePermissionList</a>。  |  |


### <a id="GetUserResourcePermissionList"></a> GetUserResourcePermissionList

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| namespaceCode | string | 是 | 权限空间 code   |  `权限空间1` |
| actions | array | 是 | 数据资源权限操作列表   |  `["get","read","write","delete"]` |
| resources | string | 是 | 资源路径   |  `strResourceCode1` |


