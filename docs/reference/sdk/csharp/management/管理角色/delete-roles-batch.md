# 单个权限分组（权限空间）内删除角色

<!--
  警告⚠️：
  不要直接修改该文档，
  https://github.com/Authing/authing-docs-factory
  使用该项目进行生成
-->

<LastUpdated />

单个权限分组（权限空间）内删除角色，可以批量删除。

## 方法名称

`ManagementClient.DeleteRolesBatch`

## 请求参数

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:60px">默认值</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- | ---- | ---- | ---- | ---- | ---- |
| codeList | string[] | 是 | - | 角色 code 列表 数组长度限制：50。 | `["code1","code2"]` |
| namespace | string | 否 | default | 所属权限分组(权限空间)的 code  | `default` |




## 示例代码

```csharp
using Authing.CSharp.SDK.Services;
using System;
using System.Threading.Tasks;
using Authing.CSharp.SDK.Models;
using System.Collections.Generic;
using System.Linq;

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

            CreateRoleDto dto = new CreateRoleDto()
            {
                Code = "AUTHING_ROLE_CODE",
                Namespace = "AUTHING_NAMESPACE",
                Description = "AUTHING_DESCRIPTION"
            };

            RoleSingleRespDto roleSingle = await managementClient.CreateRole(dto);

            dto = new CreateRoleDto()
            {
                Code = "AUTHING_ROLE_CODE1",
                Namespace = "AUTHING_NAMESPACE",
                Description = "AUTHING_DESCRIPTION"
            };

            roleSingle = await managementClient.CreateRole(dto);


            DeleteRoleDto deleteRoleDto = new DeleteRoleDto()
            {
                CodeList = new List<string> { "AUTHING_ROLE_CODE", "AUTHING_ROLE_CODE1" },
                Namespace = "AUTHING_NAMESPACE"
            };

            IsSuccessRespDto isSuccess = await managementClient.DeleteRolesBatch(deleteRoleDto);


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


### <a id="IsSuccessDto"></a> IsSuccessDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| success | boolean | 是 | 操作是否成功   |  `true` |


