# 修改 Pipeline 函数顺序

<!--
  警告⚠️：
  不要直接修改该文档，
  https://github.com/Authing/authing-docs-factory
  使用该项目进行生成
-->

<LastUpdated />

修改 Pipeline 函数顺序

## 方法名称

`ManagementClient.updatePipelineOrder`

## 请求参数

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:60px">默认值</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- | ---- | ---- | ---- | ---- | ---- |
| order | string[] | 是 | - | 新的排序方式，按照函数 ID 的先后顺序进行排列。  | `[]` |
| scene | string | 是 | - | 函数的触发场景：<br>- `PRE_REGISTER`: 注册前<br>- `POST_REGISTER`: 注册后<br>- `PRE_AUTHENTICATION`: 认证前<br>- `POST_AUTHENTICATION`: 认证后<br>- `PRE_OIDC_ID_TOKEN_ISSUED`: OIDC ID Token 签发前<br>- `PRE_OIDC_ACCESS_TOKEN_ISSUED`: OIDC Access Token 签发前<br>- `PRE_COMPLETE_USER_INFO`: 补全用户信息前<br>      | `PRE_REGISTER` |




## 请求响应

类型： `CommonResponseDto`

| 名称 | 类型 | 描述 |
| ---- | ---- | ---- |
| statusCode | number | 业务状态码，可以通过此状态码判断操作是否成功，200 表示成功。 |
| message | string | 描述信息 |
| apiCode | number | 细分错误码，可通过此错误码得到具体的错误类型。 |
| requestId | string | 请求 ID。当请求失败时会返回。 |



示例结果：

```json
{
  "statusCode": 200,
  "message": "操作成功",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c"
}
```

## 数据结构


