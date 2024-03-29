# 获取 Pipeline 函数详情

<!--
  警告⚠️：
  不要直接修改该文档，
  https://github.com/Authing/authing-docs-factory
  使用该项目进行生成
-->

<LastUpdated />

> 此文档根据 https://github.com/authing/authing-docs-factory 基于 https://api-explorer.authing.cn V3 API 自动生成，和 API 参数、返回结果保持一致，如此文档描述有误，请以 V3 API 为准。

获取 Pipeline 函数详情

## 方法名称

`ManagementClient.getPipelineFunction`

## 请求参数

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:60px">默认值</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- | ---- | ---- | ---- | ---- | ---- |
 | funcId | string  | 是 | - | Pipeline 函数 ID  | `62ce9135dxxxxb83e373f5d6` |




## 示例代码

```java
package test.management;

import cn.authing.sdk.java.client.ManagementClient;
import cn.authing.sdk.java.dto.CostGetCurrentUsageRespDto;
import cn.authing.sdk.java.dto.GetPipelineFunctionDto;
import cn.authing.sdk.java.dto.PipelineFunctionSingleRespDto;
import cn.authing.sdk.java.model.ManagementClientOptions;
import cn.authing.sdk.java.util.JsonUtils;

public class GetPipelineFunctionTest {
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

        GetPipelineFunctionDto getPipelineFunctionDto = new GetPipelineFunctionDto();
        getPipelineFunctionDto.setFuncId("AUTHING_FUNC_ID");
        PipelineFunctionSingleRespDto pipelineFunction = client.getPipelineFunction(getPipelineFunctionDto);
        System.out.println(JsonUtils.serialize(pipelineFunction));
    }
}

```




## 请求响应

类型： `PipelineFunctionSingleRespDto`

| 名称 | 类型 | 描述 |
| ---- | ---- | ---- |
| statusCode | number | 业务状态码，可以通过此状态码判断操作是否成功，200 表示成功。 |
| message | string | 描述信息 |
| apiCode | number | 细分错误码，可通过此错误码得到具体的错误类型（成功请求不返回）。详细错误码列表请见：[API Code 列表](https://api-explorer.authing.cn/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId | string | 请求 ID。当请求失败时会返回。 |
| data | <a href="#PipelineFunctionDto">PipelineFunctionDto</a> | 响应数据 |



示例结果：

```json
{
  "statusCode": 200,
  "message": "操作成功",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "funcId": "62ce9135dxxxxb83e373f5d6",
    "funcName": "每周日凌晨 3-6 点系统维护禁止注册/登录",
    "funcDescription": "每周日凌晨 3-6 点系统维护禁止注册/登录。",
    "scene": "PRE_REGISTER",
    "createdAt": "2022-07-03T03:20:30.000Z",
    "updatedAt": "2022-07-03T03:20:30.000Z",
    "timeout": 3,
    "sourceCode": "async function pipe(user, context, callback) {\n  const date = new Date();\n  const d = date.getDay();\n  const n = date.getHours();\n  // 每周日凌晨 3-6 点禁止注册\n  if (d === 0 && (3 <= n && n <= 6)) {\n    return callback(new Error('系统维护中，暂时停止注册！'));\n  }\n  callback(null, user, context)\n}",
    "status": "success"
  }
}
```

## 数据结构


### <a id="PipelineFunctionDto"></a> PipelineFunctionDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| funcId | string | 是 | 函数 ID   |  `62ce9135dxxxxb83e373f5d6` |
| funcName | string | 是 | 函数名称   |  `每周日凌晨 3-6 点系统维护禁止注册/登录` |
| funcDescription | string | 否 | 函数描述   |  `每周日凌晨 3-6 点系统维护禁止注册/登录。` |
| scene | string | 是 | 函数的触发场景：<br>- `PRE_REGISTER`: 注册前<br>- `POST_REGISTER`: 注册后<br>- `PRE_AUTHENTICATION`: 认证前<br>- `POST_AUTHENTICATION`: 认证后<br>- `PRE_OIDC_ID_TOKEN_ISSUED`: OIDC ID Token 签发前<br>- `PRE_OIDC_ACCESS_TOKEN_ISSUED`: OIDC Access Token 签发前<br>- `PRE_COMPLETE_USER_INFO`: 补全用户信息前<br>       | PRE_REGISTER |
| createdAt | string | 是 | 函数创建时间   |  `2022-07-03T03:20:30.000Z` |
| updatedAt | string | 是 | 函数修改时间   |  `2022-07-03T03:20:30.000Z` |
| isAsynchronous | boolean | 是 | 是否异步执行。设置为异步执行的函数不会阻塞整个流程的执行，适用于异步通知的场景，比如飞书群通知、钉钉群通知等。   |  |
| timeout | number | 是 | 函数运行超时时间，最短为 1 秒，最长为 60 秒，默认为 3 秒。   |  `3` |
| terminateOnTimeout | boolean | 是 | 如果函数运行超时，是否终止整个流程，默认为否。   |  |
| sourceCode | string | 是 | 函数源代码   |  `async function pipe(user, context, callback) {
  const date = new Date();
  const d = date.getDay();
  const n = date.getHours();
  // 每周日凌晨 3-6 点禁止注册
  if (d === 0 && (3 <= n && n <= 6)) {
    return callback(new Error('系统维护中，暂时停止注册！'));
  }
  callback(null, user, context)
}` |
| status | string | 是 | 函数当前状态：<br>- `uploading`: 上传中<br>- `success`: 上传成功<br>- `failed`: 上传失败    <br>   | uploading |
| uploadErrMsg | string | 否 | 上传失败的错误提示   |  |
| enabled | boolean | 是 | 此 Pipeline 是否被启用   |  |


