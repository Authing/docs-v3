# 获取角色列表

<!--
  警告⚠️：
  不要直接修改该文档，
  https://github.com/Authing/authing-docs-factory
  使用该项目进行生成
-->

<LastUpdated />

获取角色列表

## 方法名称

`AuthenticationClient.getRoleList`

## 请求参数

| 名称 | 类型 | <div style="width:80px">是否必填</div> | 默认值 | <div style="width:300px">描述</div> | <div style="width:200px"></div>示例值</div> |
| ---- | ---- | ---- | ---- | ---- | ---- |
 | namespace | string  | 否 | - | 所属权限分组(权限空间)的 Code  | `default` |




## 示例代码

```ts
import { AuthenticationClient, Models } from 'authing-node-sdk';

const authenticationClient = new AuthenticationClient({
  // 需要替换成你的 Authing AppId、 Secret 和 Host
  appId: 'AUTHING_APP_ID',
  appSecret: 'AUTHING_APP_SECRET',
  appHost: 'AUTHING_APP_HOST'
});

(async () => {

  // 请先调用登录接口获取 access_token，并调用 setAccessToken 方法设置 access_token
  authenticationClient.setAccessToken("REPLACE_ME_WITH_REAL_ACCESS_TOKEN");

  const result = await authenticationClient.getRoleList({
    namespace: 'default'
  });


  console.log(JSON.stringify(result, null, 2));
})();

```




## 请求响应

类型： `RoleListRespDto`

| 名称 | 类型 | 描述 |
| ---- | ---- | ---- |
| statusCode | number | 业务状态码，可以通过此状态码判断操作是否成功，200 表示成功。 |
| message | string | 描述信息 |
| apiCode | number | 细分错误码，可通过此错误码得到具体的错误类型。 |
| requestId | string | 请求 ID。当请求失败时会返回。 |
| data | array | 响应数据 |



示例结果：

```json
{
  "statusCode": 200,
  "message": "操作成功",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "code": "role1",
    "name": "role1",
    "description": "this is role description",
    "namespace": "default",
    "namespaceName": "示例权限名称",
    "status": "ENABLE",
    "disableTime": "1669881887852"
  }
}
```

## 数据结构


### <a id="RoleDto"></a> RoleDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| code | string | 是 | 权限分组(权限空间)内角色的唯一标识符 Code   |  `role1` |
| name | string | 是 | 权限分组(权限空间)内角色名称   |  `role1` |
| description | string | 是 | 角色描述   |  `this is role description` |
| namespace | string | 是 | 所属权限分组(权限空间)的 Code   |  `default` |
| namespaceName | string | 是 | 所属权限分组(权限空间)的名称   |  `示例权限名称` |
| status | string | 否 | 角色状态，ENABLE-表示正常，DISABLE-表示禁止   |  `ENABLE` |
| disableTime | number | 否 | 角色自动禁止时间，单位毫秒, 如果传null表示永久有效   |  `1669881887852` |


