# 获取用户权限列表

<!--
  警告⚠️：
  不要直接修改该文档，
  https://github.com/Authing/authing-docs-factory
  使用该项目进行生成
-->

<LastUpdated />

该接口用于用户列表权限查询，可以通过用户 ID 列表进行批量查询权限，也可以通过查询多个用户在同一个权限空间的权限。

### 查询一个用户拥有的数组资源、字符串资源和树资源权限列表示例

- 入参
  
```json
{
    "userIds": [
      "6301ceaxxxxxxxxxxx27478"  
    ]
}
```

- 出参
  
```json
{
    "statusCode": 200,
    "message": "操作成功",
    "apiCode": 20001,
    "data":{
      "userPermissionList": [{
        "userId": "6301ceaxxxxxxxxxxx27478",
        "namespaceCode": "权限空间1",
        "resourceList":[{
          "resourceCode": "str1",
          "actions":["get"]
        },{
        "userId": "6301ceaxxxxxxxxxxx27478",
        "namespaceCode": "权限空间1",
        "resourceList":[{
          "resourceCode": "str1",
          "actions":["get","read","update"]
        }]
      },{
        "namespaceCode": "权限空间1",
        "userId": "6301ceaxxxxxxxxxxx27478",
        "resourceList":[{
          "resourceCode": "tree1",
          "actions":[{
            "nodePath": "/node",
            "nodeActions": ["get","read","update"],
          }]
        }]
      }]
    }
}
```

### 查询多个用户权限列表示例

- 入参

```json
{
  "userIds": [
    "6301ceaxxxxxxxxxxx27478",
    "6121ceaxxxxxxxxxxx27312"
  ]
}
```

- 出参

```json
{
  "statusCode": 200,
  "message": "操作成功",
  "apiCode": 20001,
  "data": {
    "userPermissionList": [
    {
      "namespaceCode": "权限空间1",
      "userId": "6301ceaxxxxxxxxxxx27478",
      "resourceList": {
        "resourceCode": "tree1",
        "actions": [{
          "nodePath": "/node",
          "nodeActions": ["read","write" ]
        }]
      }
    }, {
      "namespaceCode": "权限空间1",
      "userId": "6301ceaxxxxxxxxxxx27478",
      "resourceList": {
        "resourceCode": "array1",
        "actions": ["read","write"]
      }
    },{
      "namespaceCode": "权限空间1",
      "userId": "6121ceaxxxxxxxxxxx27312",
      "resourceList": {
        "resourceCode": "tree1",
        "actions": [{
          "nodePath": "/node",
          "nodeActions": ["read","write" ]
        }]
      }
    }, {
      "namespaceCode": "权限空间1",
      "userId": "6121ceaxxxxxxxxxxx27312",
      "resourceList": {
        "resourceCode": "array1",
        "actions": ["read","write"]
      }
    }]
  }
}
```

### 查询多个用户在多个权限空间下权限列表示例

- 入参

```json
{
  "userIds": [
    "6301ceaxxxxxxxxxxx27478",
    "6121ceaxxxxxxxxxxx27312"
  ],
  "namespaceCodes": [
    "权限空间1",
    "权限空间2"
  ]
}
```

- 出参

```json
{
  "statusCode": 200,
  "message": "操作成功",
  "apiCode": 20001,
  "data": {
    "userPermissionList": [
    {
      "namespaceCode": "权限空间1",
      "userId": "6301ceaxxxxxxxxxxx27478",
      "resourceList": {
        "resourceCode": "tree1",
        "actions": [{
          "nodePath": "/node",
          "nodeActions": ["read","write" ]
        }]
      }
    },{
      "namespaceCode": "权限空间2",
      "userId": "6121ceaxxxxxxxxxxx27312",
      "resourceList": {
        "resourceCode": "tree1",
        "actions": [{
          "nodePath": "/node",
          "nodeActions": ["read","write" ]
        }]
      }
    }]
  }
}
```
  

## 方法名称

`ManagementClient.GetUserPermissionList`

## 请求参数

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:60px">默认值</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- | ---- | ---- | ---- | ---- | ---- |
| userIds | string[] | 是 | - | 用户 ID 列表  | `["6301ceaxxxxxxxxxxx27478"]` |
| namespaceCodes | string[] | 否 | - | 权限空间 Code 列表  | `["权限空间1"]` |




## 请求响应

类型： `GetUserPermissionListRespDto`

| 名称 | 类型 | 描述 |
| ---- | ---- | ---- |
| statusCode | number | 业务状态码，可以通过此状态码判断操作是否成功，200 表示成功。 |
| message | string | 描述信息 |
| apiCode | number | 细分错误码，可通过此错误码得到具体的错误类型。 |
| data | <a href="#GetUserPermissionListDataDto">GetUserPermissionListDataDto</a> | 响应数据 |



示例结果：

```json
{
  "statusCode": 200,
  "message": "操作成功",
  "apiCode": 20001,
  "data": {
    "userPermissionList": {
      "userId": "6301cexxxxxxxxxxxxxxxxx78",
      "namespaceCode": "6301cexxxxxxxxxxxxxxxxx78"
    }
  }
}
```

## 数据结构


### <a id="GetUserPermissionListDataDto"></a> GetUserPermissionListDataDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| userPermissionList | array | 是 | 用户权限列表 嵌套类型：<a href="#UserPermissionListDto">UserPermissionListDto</a>。  |  |


### <a id="UserPermissionListDto"></a> UserPermissionListDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| userId | string | 是 | 数据策略授权的用户 ID   |  `6301cexxxxxxxxxxxxxxxxx78` |
| namespaceCode | string | 是 | 数据策略授权的权限空间 Code   |  `6301cexxxxxxxxxxxxxxxxx78` |
| resourceList |  | 是 | 用户在权限空间下所有的数据策略资源列表   |  |


