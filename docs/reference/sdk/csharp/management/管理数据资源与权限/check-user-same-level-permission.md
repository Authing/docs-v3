# 判断用户在树资源同层级资源下的权限

<!--
  警告⚠️：
  不要直接修改该文档，
  https://github.com/Authing/authing-docs-factory
  使用该项目进行生成
-->

<LastUpdated />

该接口主要用于判断用户在树资源同层级下的权限，通过权限空间 Code 、用户 ID、资源操作、资源或资源子节点查询用户是否有该树资源同级路径的权限。可选传条件属性参数，默认不开启条件判断。

### 判断用户在同层级字符串资源权限示例（无条件判断）

```json
{
  "namespaceCode": "examplePermissionNamespace",
  "userId": "63721xxxxxxxxxxxxdde14a3",
  "action": "read",
  "resource": "treeResourceCode/structCode",
  "resourceNodeCodes": ["resourceStructChildrenCode1","resourceStructChildrenCode2","resourceStructChildrenCode3"]
}
```

### 判断用户在同层级字符串资源权限示例（开启条件判断）

```json
{
  "namespaceCode": "examplePermissionNamespace",
  "userId": "63721xxxxxxxxxxxxdde14a3",
  "action": "read",
  "resource": "treeResourceCode/structCode",
  "resourceNodeCodes": ["resourceStructChildrenCode1","resourceStructChildrenCode2","resourceStructChildrenCode3"],
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


## 方法名称

`ManagementClient.CheckUserSameLevelPermission`

## 请求参数

类型： `CheckUserSameLevelPermissionDto`

| 名称                    | 类型                                         | <div style="width:80px">是否必填</div> | <div style="width:60px">默认值</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
|-----------------------|--------------------------------------------|------------------------------------|-----------------------------------|-----------------------------------|------------------------------------|
| namespaceCode         | string                                     | 是                                  | -                                 | 权限空间 Code                         | `examplePermissionNamespace`       |
| userId                | string                                     | 是                                  | -                                 | 用户 ID                             | `63721xxxxxxxxxxxxdde14a3`         |
| action                | string                                     | 是                                  | -                                 | 数据资源权限操作                          | `read`                             |
| resource              | string                                     | 是                                  | -                                 | 资源路径                              | `treeResourceCode1/structCode1`    |
| resourceNodeCodes     | array                                      | 是                                  | -                                 | 当前树资源路径子节点 Code                   | `["resourceStructChildrenCode1"]`  |
| judgeConditionEnabled | boolean                                    | 否                                  | -                                 | 是否开启条件判断，默认 false 不开启             | `true`                             |
| authEnvParams         | <a href="#AuthEnvParams">AuthEnvParams</a> | 否                                  | -                                 | 条件环境属性，若开启条件判断则使用                 | `{"ip":"127.0.0.1"}`               |

### <a id="AuthEnvParams"></a> AuthEnvParams

| 名称          | 类型     | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
|-------------|--------|------------------------------------|-----------------------------------|------------------------------------|
| ip          | string | 否                                  | ip                                | `127.0.0.1`                        |
| city        | string | 否                                  | 城市                                | `北京`                               |
| province    | string | 否                                  | 省份                                | `湖北`                               |
| country     | string | 否                                  | 国家                                | `中国`                               |
| deviceType  | string | 否                                  | 设备类型：PC/Mobile                    | PC                                 |
| systemType  | string | 否                                  | 操作类型：Windows、Android、iOS、MacOS    | Windows                            |
| browserType | string | 否                                  | 浏览器类型：IE/Chrome/Firefox           | IE                                 |
| requestDate | string | 否                                  | 请求时间                              | `2022-07-03T02:20:30.000Z`         |



## 示例代码

```csharp
using Authing.CSharp.SDK.Services;
using System.Threading.Tasks;
using Authing.CSharp.SDK.Models;
using System.Collections.Generic;
using System.Linq;
using System.Xml.Linq;

namespace ConsoleManagement
{
    public class Program
    {
        static async Task Main(string[] args)
        {
            // 设置初始化参数
            ManagementClientOptions clientOptions = new ManagementClientOptions
            {
                AccessKeyId = "AUTHING_ACCESS_KEY_ID",// Authing Access Key ID
                AccessKeySecret = "AUTHING_ACCESS_KEY_SECRET", // Authing Access Key Secret
            };

            // 初始化 ManagementClient
            ManagementClient managementClient = new ManagementClient(clientOptions);

            CheckUserSameLevelPermissionResponseDto result = await managementClient.CheckUserSameLevelPermission(new CheckUserSameLevelPermissionDto
            {
                NamespaceCode = "examplePermissionNamespace",
                UserId = "63721xxxxxxxxxxxxdde14a3",
                Action = "read",
                Resource = "treeResourceCode",
                ResourceNodeCodes=new List<string> { "resourceStructChildrenCode1" }
            });

        }
    }
}

```




## 请求响应

类型： `CheckUserSameLevelPermissionResponseDto`

| 名称         | 类型                                                                                     | 描述                               |
|------------|----------------------------------------------------------------------------------------|----------------------------------|
| statusCode | number                                                                                 | 业务状态码，可以通过此状态码判断操作是否成功，200 表示成功。 |
| message    | string                                                                                 | 描述信息                             |
| apiCode    | number                                                                                 | 细分错误码，可通过此错误码得到具体的错误类型。          |
| requestId  | string                                                                                 | 请求 ID。当请求失败时会返回。                 |
| data       | <a href="#CheckUserSameLevelPermissionDataDto">CheckUserSameLevelPermissionDataDto</a> | 响应数据                             |



示例结果：

```json
{
  "statusCode": 200,
  "message": "操作成功",
  "apiCode": 0,
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "checkLevelResultList": [
      {
        "action": "get",
        "resourceNodeCode": "treeResourceStructChildrenCode1",
        "enabled": true
      }
    ]
  }
}
```

## 数据结构




### <a id="CheckUserSameLevelPermissionDataDto"></a> CheckUserSameLevelPermissionDataDto

| 名称                   | 类型    | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div>                                                                   | <div style="width:200px">示例值</div> |
|----------------------|-------|------------------------------------|-----------------------------------------------------------------------------------------------------|------------------------------------|
| checkLevelResultList | array | 是                                  | 响应结果列表 嵌套类型：<a href="#CheckUserSameLevelPermissionRespDto">CheckUserSameLevelPermissionRespDto</a>。 |                                    |


### <a id="CheckUserSameLevelPermissionRespDto"></a> CheckUserSameLevelPermissionRespDto

| 名称               | 类型      | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
|------------------|---------|------------------------------------|-----------------------------------|------------------------------------|
| action           | string  | 是                                  | 数据资源权限操作                          | `get`                              |
| resourceNodeCode | string  | 否                                  | 树资源节点code                         | `treeResourceStructChildrenCode1`  |
| enabled          | boolean | 是                                  | 是否拥有 action 权限                    | `true`                             |

