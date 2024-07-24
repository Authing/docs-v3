# 获取用户授权资源的结构列表

<!--
  警告⚠️：
  不要直接修改该文档，
  https://github.com/Authing/authing-docs-factory
  使用该项目进行生成
-->

<LastUpdated />

该接口主要用于获取用户授权的资源列表，通过权限空间 Code、用户 Id、资源 Code 获取用户资源的授权列表，通过不同的资源类型返回对应资源的授权。

### 获取用户授权字符串数据资源示例

- 入参

```json
{
  "namespaceCode": "examplePermissionNamespace",
  "userId": "63721xxxxxxxxxxxxdde14a3",
  "resourceCode": "exampleStrResourceCode"
}
```

- 出参

```json
{
  "statusCode": 200,
  "message": "操作成功",
  "apiCode": 20001,
  "data":{
    "namespaceCode": "exampleNamespaceCode",
    "resourceCode": "exampleStrResourceCode",
    "resourceType": "STRING",
    "strResourceAuthAction":{
      "value": "strTestValue",
      "actions": ["get","delete"]
    }
  }
}
```

### 获取用户授权数据数组资源示例

- 入参

```json
{
  "namespaceCode": "examplePermissionNamespace",
  "userId": "63721xxxxxxxxxxxxdde14a3",
  "resourceCode": "exampleArrResourceCode"
}
```

- 出参

```json
{
  "statusCode": 200,
  "message": "操作成功",
  "apiCode": 20001,
  "data":{
    "namespaceCode": "exampleNamespaceCode",
    "resourceCode": "exampleArrResourceCode",
    "resourceType": "ARRAY",
    "arrResourceAuthAction":{
      "values": ["arrTestValue1","arrTestValue2","arrTestValue3"],
      "actions": ["get","delete"]
    }
  }
}
```

### 获取用户授权树数据资源示例

- 入参

```json
{
  "namespaceCode": "examplePermissionNamespace",
  "userId": "63721xxxxxxxxxxxxdde14a3",
  "resourceCode": "exampleArrResourceCode"
}
```

- 出参

```json
{
  "statusCode": 200,
  "message": "操作成功",
  "apiCode": 20001,
  "data":{
    "namespaceCode": "exampleNamespaceCode",
    "resourceCode": "exampleArrResourceCode",
    "resourceType": "TREE",
    "treeResourceAuthAction":{
      "nodeAuthActionList":[{
        "code": "tree11",
        "name": "tree11",
        "value": "test11Value",
        "extendFieldValue": {
          "str": "str_value"
        },
        "actions": ["get","delete"],
        "children": [{
          "code": "tree111",
          "name": "tree111",
          "value": "test111Value",
          "actions": ["update","read"]
        }]
      },{
        "code": "tree22",
        "name": "tree22",
        "value": "test22Value",
        "actions": ["get","delete"]
      }]
    }
  }
}
```


## 方法名称

`ManagementClient.getUserResourceStruct`

## 请求参数

类型： `GetUserResourceStructDto`

| 名称            | 类型     | <div style="width:80px">是否必填</div> | <div style="width:60px">默认值</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
|---------------|--------|------------------------------------|-----------------------------------|-----------------------------------|------------------------------------|
| namespaceCode | string | 是                                  | -                                 | 权限空间 Code                         | `examplePermissionNamespace`       |
| resourceCode  | string | 是                                  | -                                 | 资源 Code                           | `exampleResourceCode`              |
| userId        | string | 是                                  | -                                 | 用户 ID                             | `6301ceaxxxxxxxxxxx27478`          |

## 示例代码

```java
package test.management.dataPermission.authentication;

import cn.authing.sdk.java.client.ManagementClient;
import cn.authing.sdk.java.dto.CheckPermissionDto;
import cn.authing.sdk.java.dto.CheckPermissionRespDto;
import cn.authing.sdk.java.dto.GetUserResourceStructDto;
import cn.authing.sdk.java.dto.GetUserResourceStructRespDto;
import cn.authing.sdk.java.model.ManagementClientOptions;
import cn.authing.sdk.java.util.JsonUtils;
import java.util.ArrayList;
import java.util.List;

public class GetUserResourceStructTest {
  
    // 需要替换成你的 Authing Access Key ID
    private static final String ACCESS_KEY_ID = "AUTHING_ACCESS_KEY_ID";
    // 需要替换成你的 Authing Access Key Secret
    private static final String ACCESS_KEY_SECRET = "AUTHING_ACCESS_KEY_SECRET";

    public static void main(String[] args) throws Throwable {
        ManagementClientOptions clientOptions = new ManagementClientOptions();
        clientOptions.setAccessKeyId(ACCESS_KEY_ID);
        clientOptions.setAccessKeySecret(ACCESS_KEY_SECRET);
        // 如果是私有化部署的客户，需要设置 Authing 服务域名
        // clientOptions.setHost("https://api.your-authing-service.com");
        ManagementClient client = new ManagementClient(clientOptions);

        GetUserResourceStructDto request = new GetUserResourceStructDto();
        request.setNamespaceCode("examplePermissionNamespace");
        request.setUserId("63721xxxxxxxxxxxxdde14a3");
        request.setResourceCode("exampleStrResourceCode");
        GetUserResourceStructRespDto response = client.getUserResourceStruct(request);
        System.out.println(JsonUtils.serialize(response));
    }
}

```




## 请求响应

类型： `GetUserResourceStructRespDto`

| 名称         | 类型                                                                       | 描述                               |
|------------|--------------------------------------------------------------------------|----------------------------------|
| statusCode | number                                                                   | 业务状态码，可以通过此状态码判断操作是否成功，200 表示成功。 |
| message    | string                                                                   | 描述信息                             |
| apiCode    | number                                                                   | 细分错误码，可通过此错误码得到具体的错误类型。          |
| requestId  | string                                                                   | 请求 ID。当请求失败时会返回。                 |
| data       | <a href="#GetUserResourceStructDataDto">GetUserResourceStructDataDto</a> | 响应数据                             |



示例结果：

```json
{
  "statusCode": 200,
  "message": "操作成功",
  "apiCode": 0,
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "namespaceCode": "namespaceCode",
    "resourceCode": "resourceCode",
    "resourceType": "STRING",
    "strResourceAuthAction": {
      "value": "resourceCode",
      "actions": [
        "resourceCode"
      ]
    },
    "arrResourceAuthAction": {
      "values": [
        "resourceCode"
      ],
      "actions": [
        "resourceCode"
      ]
    },
    "treeResourceAuthAction": {
      "nodeAuthActionList": [
        {
          "code": "123",
          "name": "树数据资源",
          "value": "示例树资源策略节点",
          "actions": "read",
          "children": [
            {
              "code": "code1",
              "name": "子节点1",
              "value": "子节点值",
              "extendFieldValue": {
                "str": "str_value"
              },
              "actions": [
                "Create"
              ],
              "children": [
                {
                  "code": "code2",
                  "name": "子节点2",
                  "value": "子节点2值",
                  "actions": [
                    "get"
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  }
}
```

## 数据结构


### <a id="GetUserResourceStructDataDto"></a> GetUserResourceStructDataDto

| 名称                     | 类型                     | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div>                                                                                                                                                                                                              | <div style="width:200px">示例值</div> |
|------------------------|------------------------|------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------|
| namespaceCode          | string                 | 是                                  | 权限空间code                                                                                                                                                                                                                                       | `namespaceCode`                    |
| resourceCode           | string                 | 是                                  | 资源code                                                                                                                                                                                                                                         | `resourceCode`                     |
| resourceType           | string                 | 是                                  | 数据资源类型，嵌套类型，<a href="#ResourceType">ResourceType</a>。目前支持树结构（TREE）、字符串（STRING）、数组（ARRAY）三种类型，根据不同的类型返回不同的结构。<br>- `STRING`: 字符串类型结果 StrResourceAuthAction。 <br>- `ARRAY`: 数组类型 ArrResourceAuthAction。<br>- `TREE`: 树类型 TreeResourceAuthAction。 |                                    |
| strResourceAuthAction  | StrResourceAuthAction  | 否                                  | 字符串资源授权结构,嵌套类型：<a href="#StrResourceAuthAction">StrResourceAuthAction</a>。                                                                                                                                                                     |                                    |
| arrResourceAuthAction  | ArrResourceAuthAction  | 否                                  | 数组资源授权结构,嵌套类型：<a href="#ArrResourceAuthAction">ArrResourceAuthAction</a>。                                                                                                                                                                      |                                    |
| treeResourceAuthAction | TreeResourceAuthAction | 否                                  | 树资源授权结构,嵌套类型：<a href="#TreeResourceAuthAction">TreeResourceAuthAction</a>。树资源授权                                                                                                                                                                |                                    |

### <a id="ResourceType"></a> ResourceType

| 名称     | 类型   | 描述    |
|:-------|:-----|-------|
| STRING | enum | 字符串类型 |
| ARRAY  | enum | 数组类型  |
| TREE   | enum | 树类型   |

### <a id="StrResourceAuthAction"></a> StrResourceAuthAction

| 名称      | 类型     | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
|---------|--------|------------------------------------|-----------------------------------|------------------------------------|
| value   | string | 是                                  | 字符串数据资源的 Value                    | `resourceValue`                    |
| actions | array  | 是                                  | 字符串数据资源的权限操作列表                    | `["read","get"]`                   |

### <a id="ArrResourceAuthAction"></a> ArrResourceAuthAction

| 名称      | 类型    | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div>    |
|---------|-------|------------------------------------|-----------------------------------|---------------------------------------|
| values  | array | 是                                  | 数组数据资源的 Values                    | `["resourceValue1","resourceValue2"]` |
| actions | array | 是                                  | 数组数据资源的的权限操作列表                    | `["read","get"]`                      |

### <a id="TreeResourceAuthAction"></a> TreeResourceAuthAction

| 名称                 | 类型    | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div>                    | <div style="width:200px">示例值</div> |
|--------------------|-------|------------------------------------|------------------------------------------------------|------------------------------------|
| nodeAuthActionList | array | 是                                  | 树结构节点列表,嵌套类型：<a href="#TreeStructs">TreeStructs</a>。 | -                                  |

### <a id="TreeStructs"></a> TreeStructs

| 名称       | 类型          | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div>                              | <div style="width:200px">示例值</div>                                                                                                                                            |
|----------|-------------|------------------------------------|----------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| code     | string      | 是                                  | 树资源节点 Code, 同层级唯一                                              | `123`                                                                                                                                                                         |
| name     | string      | 是                                  | 树资源节点名称 ，同层级唯一                                                 | `数据资源`                                                                                                                                                                        |
| value    | string      | 否                                  | 树资源节点 Value                                                    | `示例资源策略节点`                                                                                                                                                                    |
| actions  | array       | 是                                  | 树数据资源策略节点的权限操作列表                                               | `read`                                                                                                                                                                        |
| children | TreeStructs | 否                                  | 子节点数据,子节点数据最多五个层级,嵌套类型：<a href="#TreeStructs">TreeStructs</a>。 | `[{"code":"code1","name":"子节点1","value":"子节点值","enabled":false,"action":"create","children":[{"code":"code2","name":"子节点2","value":"子节点2值","enabled":true,"action":"get"}]}]` |
|extendFieldValue| map | 否 | 扩展字段值 | `{"str":"str_value"}` |
