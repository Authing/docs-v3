# 获取资源被授权的用户列表

<!--
  警告⚠️：
  不要直接修改该文档，
  https://github.com/Authing/authing-docs-factory
  使用该项目进行生成
-->

<LastUpdated />

该接口主要用于获取资源被授权的用户列表，通过权限空间 Code 、资源操作列表以及资源列表查询有权限的用户列表。
  
### 获取字符串和数组资源被授权的用户列表示例

- 入参
    
```json
{
  "namespaceCode": "权限空间1",
  "actions": ["get", "update", "read"]
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
    "authUserList": [{
      "resource": "strResourceCode1",
      "actionAuthList": [{
        "userIds": ["63721xxxxxxxxxxxxdde14a3"]
        "action": "get",
      },{
        "userIds": ["63721xxxxxxxxxxxxdde14a3"]
        "action": "update",
      },{
        "userIds": ["63721xxxxxxxxxxxxdde14a3"]
        "action": "read",
      }]  
    },{
        "resource": "arrayResourceCode1",
        "actionAuthList": [{
        "userIds": ["63721xxxxxxxxxxxxdde14a3"]
        "action": "get",
      },{
        "userIds": ["63721xxxxxxxxxxxxdde14a3"]
        "action": "update",
      },{
        "userIds": ["63721xxxxxxxxxxxxdde14a3"]
        "action": "read",
      }] 
    }]
  }
}
```
    
### 获取树资源被授权的用户列表示例
    
- 入参
    
```json
{
  "namespaceCode": "权限空间1",
  "actions": ["get", "update", "delete"]
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
    "authUserList": [{
      "resource": "/treeResourceCode1/StructCode1/resourceStructChildrenCode1",
      "actionAuthList": [{
        "userIds": ["63721xxxxxxxxxxxxdde14a3"]
        "action": "get",
      },{
        "userIds": ["63721xxxxxxxxxxxxdde14a3"]
        "action": "update",
      },{
        "userIds": ["63721xxxxxxxxxxxxdde14a3"]
        "action": "delete",
      }]  
    },{
      "resource": "/treeResourceCode2/StructCode1/resourceStructChildrenCode1",
      "actionAuthList": [{
        "userIds": ["63721xxxxxxxxxxxxdde14a3"]
        "action": "get",
      },{
        "userIds": ["63721xxxxxxxxxxxxdde14a3"]
        "action": "update",
      },{
        "userIds": ["63721xxxxxxxxxxxxdde14a3"]
        "action": "delete",
      }] 
    }]
  }
}
```
  

## 方法名称

`AuthenticationClient.list_resource_targets`

## 请求参数

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:60px">默认值</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- | ---- | ---- | ---- | ---- | ---- |
| resources | string[] | 是 | - | 数据策略所属的数据资源路径列表 数组长度限制：50。 | `["strResourceCode1","arrayResourceCode1"]` |
| actions | string[] | 是 | - | 数据资源权限操作列表 数组长度限制：50。 | `["get","update","read"]` |
| namespaceCode | string | 是 | - | 权限空间 Code  | `权限空间1` |



  
## 请求响应

类型： `ListResourceTargetsRespDto`

| 名称 | 类型 | 描述 |
| ---- | ---- | ---- |
| statusCode | number | 业务状态码，可以通过此状态码判断操作是否成功，200 表示成功。 |
| message | string | 描述信息 |
| apiCode | number | 细分错误码，可通过此错误码得到具体的错误类型。 |
| requestId | string | 请求 ID。当请求失败时会返回。 |
| data | <a href="#ListResourceTargetsDataDto">ListResourceTargetsDataDto</a> | 响应数据 |



示例结果：

```json
{
  "statusCode": 200,
  "message": "操作成功",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "authUserList": {
      "resource": "strResourceCode1",
      "actionAuthList": {
        "userIds": "[\"63721xxxxxxxxxxxxdde14a3\"]",
        "action": "get"
      }
    }
  }
}
```

## 数据结构


### <a id="ListResourceTargetsDataDto"></a> ListResourceTargetsDataDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| authUserList | array | 是 | 用户授权列表 嵌套类型：<a href="#ListResourceTargetsDto">ListResourceTargetsDto</a>。  |  |


### <a id="ListResourceTargetsDto"></a> ListResourceTargetsDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| resource | string | 是 | 资源路径   |  `strResourceCode1` |
| actionAuthList | array | 是 | 数据资源权限操作列表 嵌套类型：<a href="#ActionAuth">ActionAuth</a>。  |  |


### <a id="ActionAuth"></a> ActionAuth

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| userIds | array | 是 | 数据策略授权用户 ID 列表   |  `["63721xxxxxxxxxxxxdde14a3"]` |
| action | string | 是 | 数据资源权限操作   |  `get` |


