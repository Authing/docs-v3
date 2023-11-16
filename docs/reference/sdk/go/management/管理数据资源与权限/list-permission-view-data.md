# 获取权限视图数据列表

<!--
  警告⚠️：
  不要直接修改该文档，
  https://github.com/Authing/authing-docs-factory
  使用该项目进行生成
-->

<LastUpdated />

> 此文档根据 https://github.com/authing/authing-docs-factory 基于 https://api-explorer.authing.cn V3 API 自动生成，和 API 参数、返回结果保持一致，如此文档描述有误，请以 V3 API 为准。


  ## 描述
  此接口用于导出菜单：权限管理 -> 数据权限 -> 权限试图列表数据，如果你需要拉取我们数据权限的授权数据（所有用户拥有的所有资源的所有权限），则可以使用此接口。
  

## 方法名称

`ManagementClient.ListPermissionView`

## 请求参数

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:60px">默认值</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- | ---- | ---- | ---- | ---- | ---- |
| page | number | 否 | 1 | 当前页数，从 1 开始  | `1` |
| limit | number | 否 | 10 | 每页数目，最大不能超过 50，默认为 10  | `10` |
| keyword | string | 否 | - | 关键字搜索,可以支持 userName 搜索  | `123` |




## 请求响应

类型： `ListPermissionViewResponseDto`

| 名称 | 类型 | 描述 |
| ---- | ---- | ---- |
| statusCode | number | 业务状态码，可以通过此状态码判断操作是否成功，200 表示成功。 |
| message | string | 描述信息 |
| apiCode | number | 细分错误码，可通过此错误码得到具体的错误类型（成功请求不返回）。详细错误码列表请见：[API Code 列表](https://api-explorer.authing.cn/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId | string | 请求 ID。当请求失败时会返回。 |
| data | <a href="#ListPermissionViewPaginatedRespDto">ListPermissionViewPaginatedRespDto</a> | 响应数据 |



示例结果：

```json
{
  "statusCode": 200,
  "message": "操作成功",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "totalCount": 20,
    "list": {
      "userId": "6229ffaxxxxxxxxcade3e3d9",
      "username": "张三",
      "namespaceId": "6229ffaxxxxxxxxcade3e3d9",
      "namespaceCode": "examplePermissionNamespace",
      "namespaceName": "示例权限空间",
      "dataResourceId": "6229ffaxxxxxxxxcade3e3d9",
      "dataResourceCode": "exampleDataResource",
      "dataResourceName": "示例数据资源名称",
      "dataPolicyList": {
        "dataPolicyId": "6229ffaxxxxxxxxcade3e3d9",
        "dataPolicyName": "示例数据策略"
      },
      "roleList": {
        "roleId": "6229ffaxxxxxxxxcade3e3d9",
        "roleName": "示例角色",
        "roleCode": "exampleCode"
      },
      "groupList": {
        "groupId": "6229ffaxxxxxxxxcade3e3d9",
        "groupName": "示例用户组",
        "groupCode": "exampleCode"
      },
      "nodeList": {
        "nodeId": "6229ffaxxxxxxxxcade3e3d9",
        "nodeName": "示例组织机构",
        "nodeCode": "exampleCode"
      }
    }
  }
}
```

## 数据结构


### <a id="ListPermissionViewPaginatedRespDto"></a> ListPermissionViewPaginatedRespDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| totalCount | number | 是 | 记录总数   |  `20` |
| list | array | 是 | 响应数据 嵌套类型：<a href="#ListPermissionViewRespDto">ListPermissionViewRespDto</a>。  |  |


### <a id="ListPermissionViewRespDto"></a> ListPermissionViewRespDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| userId | string | 是 | 用户的唯一标志，可以是用户 ID、用户名、邮箱、手机号、externalId、在外部身份源的 ID，详情见 userIdType 字段的说明。默认为用户 id 。   |  `6229ffaxxxxxxxxcade3e3d9` |
| username | string | 否 | 用户真实名称，不具备唯一性   |  `张三` |
| namespaceId | string | 是 | 权限空间 id   |  `6229ffaxxxxxxxxcade3e3d9` |
| namespaceCode | string | 是 | 权限空间 Code   |  `examplePermissionNamespace` |
| namespaceName | string | 是 | 权限空间名称   |  `示例权限空间` |
| dataResourceId | string | 是 | 数据资源 id   |  `6229ffaxxxxxxxxcade3e3d9` |
| dataResourceCode | string | 是 | 数据资源 Code   |  `exampleDataResource` |
| dataResourceName | string | 是 | 数据资源 名称   |  `示例数据资源名称` |
| dataPolicyList | array | 是 | 数据策略列表 嵌套类型：<a href="#PolicyBo">PolicyBo</a>。  |  |
| roleList | array | 是 | 角色列表 嵌套类型：<a href="#RoleBo">RoleBo</a>。  |  |
| groupList | array | 是 | 用户组列表 嵌套类型：<a href="#GroupBo">GroupBo</a>。  |  |
| nodeList | array | 是 | 组织机构列表 嵌套类型：<a href="#NodeBo">NodeBo</a>。  |  |


### <a id="PolicyBo"></a> PolicyBo

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| dataPolicyId | string | 是 | 数据策略 id   |  `6229ffaxxxxxxxxcade3e3d9` |
| dataPolicyName | string | 是 | 数据策略名称名称   |  `示例数据策略` |


### <a id="RoleBo"></a> RoleBo

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| roleId | string | 是 | 角色 id   |  `6229ffaxxxxxxxxcade3e3d9` |
| roleName | string | 是 | 角色名称   |  `示例角色` |
| roleCode | string | 是 | 角色 Code   |  `exampleCode` |


### <a id="GroupBo"></a> GroupBo

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| groupId | string | 是 | 用户组 id   |  `6229ffaxxxxxxxxcade3e3d9` |
| groupName | string | 是 | 用户组名称   |  `示例用户组` |
| groupCode | string | 是 | 用户组 Code   |  `exampleCode` |


### <a id="NodeBo"></a> NodeBo

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| nodeId | string | 是 | 组织机构 id   |  `6229ffaxxxxxxxxcade3e3d9` |
| nodeName | string | 是 | 组织机构名称   |  `示例组织机构` |
| nodeCode | string | 是 | 组织机构 Code   |  `exampleCode` |


