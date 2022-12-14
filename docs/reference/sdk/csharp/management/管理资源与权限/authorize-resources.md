# 授权资源

<!--
  警告⚠️：
  不要直接修改该文档，
  https://github.com/Authing/authing-docs-factory
  使用该项目进行生成
-->

<LastUpdated />

将一个/多个资源授权给用户、角色、分组、组织机构等主体，且可以分别指定不同的操作权限。

## 方法名称

`ManagementClient.AuthorizeResources`

## 请求参数

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:60px">默认值</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- | ---- | ---- | ---- | ---- | ---- |
| list | <a href="#AuthorizeResourceItem">AuthorizeResourceItem[]</a> | 是 | - | 授权资源列表 数组长度限制：10。 |  |
| namespace | string | 否 | - | 所属权限分组(权限空间)的 Code  | `default` |




## 示例代码

```csharp
using Authing.CSharp.SDK.Services;
using System;
using System.Threading.Tasks;
using Authing.CSharp.SDK.Models;
using System.Collections.Generic;

namespace ConsoleManagement
{
    public class Program
    {
        static void Main(string[] args)
        {
            MainAsync().GetAwaiter().GetResult();
        }

        private static async Task MainAsync()
        {
            // 设置初始化参数
            ManagementClientOptions clientOptions = new ManagementClientOptions
            {
                AccessKeyId = "AUTHING_ACCESS_KEY_ID",// Authing Access Key ID
                AccessKeySecret = "AUTHING_ACCESS_KEY_SECRET", // Authing Access Key Secret
            };

            // 初始化 ManagementClient
            ManagementClient managementClient = new ManagementClient(clientOptions);

            List<ResourceAction> resourceActions = new List<ResourceAction>();
            resourceActions.Add(new ResourceAction { Name = "start", Description = "启动 ECS 服务器" });
            resourceActions.Add(new ResourceAction { Name = "stop", Description = "启动 ECS 服务器" });

            List<AuthorizeResourceItem> items = new List<AuthorizeResourceItem>();

            List<ResourceItemDto> resourceItemDtos = new List<ResourceItemDto>();
            resourceItemDtos.Add(new ResourceItemDto { Actions = new List<string> { "start", "stop" }, Code = "ecs", ResourceType = ResourceItemDto.resourceType.API });



            items.Add(new AuthorizeResourceItem { TargetType = AuthorizeResourceItem.targetType.USER, TargetIdentifiers = new List<string> { "634fc0a6ebc13285a2ac8dd2" }, Resources = resourceItemDtos });

            AuthorizeResourcesDto authorizedResourceDto = new AuthorizeResourcesDto()
            {
                Namespace = "default",
                List = items
            };

            IsSuccessRespDto dto = await managementClient.AuthorizeResources(authorizedResourceDto);

        }
    }
}
```




## 请求响应

类型： `IsSuccessRespDto`

| 名称 | 类型 | 描述 |
| ---- | ---- | ---- |
| statusCode | number | 业务状态码，可以通过此状态码判断操作是否成功，200 表示成功。 |
| message | string | 描述信息 |
| apiCode | number | 细分错误码，可通过此错误码得到具体的错误类型。 |
| requestId | string | 请求 ID。当请求失败时会返回。 |
| data | <a href="#IsSuccessDto">IsSuccessDto</a> | 操作是否成功 |



示例结果：

```json
{
  "statusCode": 200,
  "message": "操作成功",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "success": true
  }
}
```

## 数据结构


### <a id="AuthorizeResourceItem"></a> AuthorizeResourceItem

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| targetType | string | 是 | 目标对象类型：<br>- `USER`: 用户<br>- `ROLE`: 角色<br>- `GROUP`: 分组<br>- `DEPARTMENT`: 部门<br>       | USER |
| targetIdentifiers | array | 是 | 目标对象的唯一标志符：<br>- 如果是用户，为用户的 ID，如 `6343b98b7cfxxx9366e9b7c`<br>- 如果是角色，为角色的 code，如 `admin`<br>- 如果是分组，为分组的 code，如 `developer`<br>- 如果是部门，为部门的 ID，如 `6343bafc019xxxx889206c4c`<br>         数组长度限制：100。  |  `["userId1","userId2"]` |
| resources | array | 是 | 授权的资源列表 嵌套类型：<a href="#ResourceItemDto">ResourceItemDto</a>。  |  |


### <a id="ResourceItemDto"></a> ResourceItemDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| code | string | 是 | 资源唯一标志符   |  `ecs` |
| actions | array | 是 | 资源定义的操作类型 数组长度限制：50。  |  `["ecs:Stop","ecs:Start"]` |
| resourceType | string | 是 | 资源类型，如数据、API、按钮、菜单   | DATA |


### <a id="IsSuccessDto"></a> IsSuccessDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| success | boolean | 是 | 操作是否成功   |  `true` |


