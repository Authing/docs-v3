# 获取已归档的用户列表

<!--
  警告⚠️：
  不要直接修改该文档，
  https://github.com/Authing/authing-docs-factory
  使用该项目进行生成
-->

<LastUpdated />

获取已归档的用户列表，支持分页，可以筛选开始时间等。

## 方法名称

`ManagementClient.ListArchivedUsers`

## 请求参数

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:60px">默认值</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- | ---- | ---- | ---- | ---- | ---- |
 | page | number  | 否 | 1 | 当前页数，从 1 开始  | `1` |
 | limit | number  | 否 | 10 | 每页数目，最大不能超过 50，默认为 10  | `10` |
 | startAt | number  | 否 | - | 开始时间，为精确到秒的 UNIX 时间戳，默认不指定  | `1655714763890` |




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

            ListArchivedUsersSingleRespDto result = await managementClient.ListArchivedUsers(new ListArchivedUsersDto { });

        }
    }
}
```




## 请求响应

类型： `ListArchivedUsersSingleRespDto`

| 名称 | 类型 | 描述 |
| ---- | ---- | ---- |
| statusCode | number | 业务状态码，可以通过此状态码判断操作是否成功，200 表示成功。 |
| message | string | 描述信息 |
| apiCode | number | 细分错误码，可通过此错误码得到具体的错误类型。 |
| requestId | string | 请求 ID。当请求失败时会返回。 |
| data | <a href="#ArchivedUsersListPagingDto">ArchivedUsersListPagingDto</a> | 数据 |



示例结果：

```json
{
  "statusCode": 200,
  "message": "操作成功",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "list": {
      "userId": "userId",
      "archivedAt": "2022-07-03T02:20:30.000Z"
    }
  }
}
```

## 数据结构


### <a id="ArchivedUsersListPagingDto"></a> ArchivedUsersListPagingDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| totalCount | number | 是 | 记录总数   |  |
| list | array | 是 | 响应数据 嵌套类型：<a href="#ListArchivedUsersRespDto">ListArchivedUsersRespDto</a>。  |  |


### <a id="ListArchivedUsersRespDto"></a> ListArchivedUsersRespDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| userId | string | 是 | 用户 ID   |  `userId` |
| archivedAt | string | 是 | 归档时间   |  `2022-07-03T02:20:30.000Z` |


