# 创建身份源

<!--
  警告⚠️：
  不要直接修改该文档，
  https://github.com/Authing/authing-docs-factory
  使用该项目进行生成
-->

<LastUpdated />

创建身份源，可以设置身份源名称、连接类型、租户 ID 等。

## 方法名称

`ManagementClient.createExtIdp`

## 请求参数

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:60px">默认值</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- | ---- | ---- | ---- | ---- | ---- |
| type | string | 是 | - | 身份源连接类型  | `ad` |
| name | string | 是 | - | 身份源名称  | `exampleName` |
| tenantId | string | 否 | - | 租户 ID  | `60b49eb83fd80adb96f26e68` |




## 示例代码

```ts
import { ManagementClient, Models } from 'authing-node-sdk';

// 初始化 ManagementClient
const managementClient = new ManagementClient({
  // 需要替换成你的 Authing Access Key ID
  accessKeyId: 'AUTHING_ACCESS_KEY_ID',
  // 需要替换成你的 Authing Access Key Secret
  accessKeySecret: 'AUTHING_ACCESS_KEY_SECRET',
  // 如果是私有化部署的客户，需要设置 Authing 服务域名
  // host: 'https://api.your-authing-service.com'
});

(async () => {

  const result = await managementClient.createExtIdp({
    name: 'exampleName',
    type: Models.CreateExtIdpDto.type.AD,
    tenantId: '60b49exxxxxadb96f26e68'
  });


  console.log(JSON.stringify(result, null, 2));
})();

```




## 请求响应

类型： `ExtIdpSingleRespDto`

| 名称 | 类型 | 描述 |
| ---- | ---- | ---- |
| statusCode | number | 业务状态码，可以通过此状态码判断操作是否成功，200 表示成功。 |
| message | string | 描述信息 |
| apiCode | number | 细分错误码，可通过此错误码得到具体的错误类型。 |
| requestId | string | 请求 ID。当请求失败时会返回。 |
| data | <a href="#ExtIdpDto">ExtIdpDto</a> | 响应数据 |



示例结果：

```json
{
  "statusCode": 200,
  "message": "操作成功",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "id": "60b49eb83fd80adb96f26e68",
    "name": "default",
    "logo": "https://files.authing.co/authing-console/social-connections/wechatIdentitySource.svg",
    "tenantId": "60b49eb83fd80adb96f26e68",
    "type": "wechat"
  }
}
```

## 数据结构


### <a id="ExtIdpDto"></a> ExtIdpDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| id | string | 是 | 身份源 id   |  `60b49eb83fd80adb96f26e68` |
| name | string | 是 | 身份源名称   |  `default` |
| logo | string | 是 | 身份源的 Logo   |  `https://files.authing.co/authing-console/social-connections/wechatIdentitySource.svg` |
| tenantId | string | 否 | 租户 ID   |  `60b49eb83fd80adb96f26e68` |
| type | string | 是 | 身份源类型   |  `wechat` |


