# 获取国家列表

<!--
  警告⚠️：
  不要直接修改该文档，
  https://github.com/Authing/authing-docs-factory
  使用该项目进行生成
-->

<LastUpdated />

动态获取国家列表，可以用于前端登录页面国家选择和国际短信输入框选择，以减少前端静态资源体积。

## 方法名称

`AuthenticationClient.GetCountryList`

## 请求参数

| 名称 | 类型 | <div style="width:80px">是否必填</div> | 默认值 | <div style="width:300px">描述</div> | <div style="width:200px"></div>示例值</div> |
| ---- | ---- | ---- | ---- | ---- | ---- |




## 示例代码

```csharp
using System.Threading.Tasks;
using Authing.CSharp.SDK.Models;
using Authing.CSharp.SDK.Models.Authentication;
using Authing.CSharp.SDK.Services;

namespace ConsoleApplication
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
            AuthenticationClientInitOptions clientOptions = new AuthenticationClientInitOptions
            {
                AppId = "AUTHING_APP_ID",// Authing 应用 ID
                AppSecret = "AUTHING_APP_SECRET",// Authing 应用密钥
                AppHost = "AUTHING_APP_DOMAIN", // Authing 应用域名，如 https://example.authing.cn。注意：Host 地址为示例样式，不同版本用户池的应用 Host 地址样式有所差异，实际地址以 自建应用->应用配置->认证配置 下 `认证地址 `字段为准。
                RedirectUri = "AUTHING_APP_REDIRECT_URI",// Authing 应用配置的登录回调地址
            };

            // 初始化 AuthenticationClient
            AuthenticationClient authenticationClient = new AuthenticationClient(clientOptions);

            //登录临时用户
            LoginTokenRespDto loginTokenRespDto = await authenticationClient.SignInByAccountPassword("AUTHING_USERNAME", "AUTHING_USER_PASSWORD");
            authenticationClient.setAccessToken(loginTokenRespDto.Data.Access_token);
            
            var res = await authenticationClient.GetCountryList();
        }
    }
}
```




## 请求响应

类型： `GetCountryListRespDto`

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
    "alpha2": "CN",
    "alpha3": "CHN",
    "phoneCountryCode": "+86",
    "flag": "🇨🇳",
    "name": {
      "zh-CN": {
        "enabled": false,
        "value": "中国"
      },
      "en-US": {
        "enabled": false,
        "value": "China"
      }
    }
  }
}
```

## 数据结构


### <a id="CountryDetailInfo"></a> CountryDetailInfo

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| alpha2 | string | 是 | [ISO 3166 国际标准](https://www.iban.com/country-codes)中国家的 Alpha-2 简称   |  `CN` |
| alpha3 | string | 是 | [ISO 3166 国际标准](https://www.iban.com/country-codes)中国家的 Alpha-3 简称   |  `CHN` |
| phoneCountryCode | string | 是 | 国家手机区号   |  `+86` |
| flag | string | 是 | 国旗图标   |  `🇨🇳` |
| name |  | 是 | 名称，多语言结构，目前只支持中文和英文 嵌套类型：<a href="#LangObject">LangObject</a>。  |  `{"zh-CN":{"enabled":false,"value":"中国"},"en-US":{"enabled":false,"value":"China"}}` |


### <a id="LangObject"></a> LangObject

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| zh-CN |  | 是 | 多语言的中文内容 嵌套类型：<a href="#LangUnit">LangUnit</a>。  |  `{"enabled":false,"value":"中文"}` |
| en-US |  | 是 | 多语言的英文内容 嵌套类型：<a href="#LangUnit">LangUnit</a>。  |  `{"enabled":false,"value":"English"}` |
| zh-TW |  | 是 | 多语言的繁体中文内容 嵌套类型：<a href="#LangUnit">LangUnit</a>。  |  `{"enabled":false,"value":"繁體中文"}` |
| ja-JP |  | 是 | 多语言的日语内容 嵌套类型：<a href="#LangUnit">LangUnit</a>。  |  `{"enabled":false,"value":"日本語"}` |


### <a id="LangUnit"></a> LangUnit

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| enabled | boolean | 是 | 是否已开启。若开启，且控制台选择该语言，则展示该内容。（默认关闭）   |  |
| value | string | 是 | 多语言内容   |  |


