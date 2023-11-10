# 获取/搜索公共账号列表

<!--
  警告⚠️：
  不要直接修改该文档，
  https://github.com/Authing/authing-docs-factory
  使用该项目进行生成
-->

<LastUpdated />

> 此文档根据 https://github.com/authing/authing-docs-factory 基于 https://api-explorer.authing.cn V3 API 自动生成，和 API 参数、返回结果保持一致，如此文档描述有误，请以 V3 API 为准。


此接口用于获取用户列表，支持模糊搜索，以及通过用户基础字段、用户自定义字段、用户所在部门、用户历史登录应用等维度筛选用户。

### 模糊搜素示例

模糊搜索默认会从 `phone`, `email`, `name`, `username`, `nickname` 五个字段对用户进行模糊搜索，你也可以通过设置 `options.fuzzySearchOn`
决定模糊匹配的字段范围：

```json
{
  "keywords": "北京",
  "options": {
    "fuzzySearchOn": [
      "address"
    ]
  }
}
```

### 高级搜索示例

你可以通过 `advancedFilter` 进行高级搜索，高级搜索支持通过用户的基础信息、自定义数据、所在部门、用户来源、登录应用、外部身份源信息等维度对用户进行筛选。
**且这些筛选条件可以任意组合。**

#### 筛选状态为禁用的用户

用户状态（`status`）为字符串类型，可选值为 `Activated` 和 `Suspended`： 

```json
{
  "advancedFilter": [
    {
      "field": "status",
      "operator": "EQUAL",
      "value": "Suspended"
    }
  ]
}
```

#### 筛选邮箱中包含 `@example.com` 的用户

用户邮箱（`email`）为字符串类型，可以进行模糊搜索：

```json
{
  "advancedFilter": [
    {
      "field": "email",
      "operator": "CONTAINS",
      "value": "@example.com"
    }
  ]
}
```

#### 根据用户的任意扩展字段进行搜索

```json
{
  "advancedFilter": [
    {
      "field": "some-custom-key",
      "operator": "EQUAL",
      "value": "some-value"
    }
  ]
}
```

#### 根据用户登录次数筛选

筛选登录次数大于 10 的用户：

```json
{
  "advancedFilter": [
    {
      "field": "loginsCount",
      "operator": "GREATER",
      "value": 10
    }
  ]
}
```

筛选登录次数在 10 - 100 次的用户：

```json
{
  "advancedFilter": [
    {
      "field": "loginsCount",
      "operator": "BETWEEN",
      "value": [10, 100]
    }
  ]
}
```

#### 根据用户上次登录时间进行筛选

筛选最近 7 天内登录过的用户：

```json
{
  "advancedFilter": [
    {
      "field": "lastLoginTime",
      "operator": "GREATER",
      "value": new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
    }
  ]
}
```

筛选在某一段时间内登录过的用户：

```json
{
  "advancedFilter": [
    {
      "field": "lastLogin",
      "operator": "BETWEEN",
      "value": [
        Date.now() - 14 * 24 * 60 * 60 * 1000,
        Date.now() - 7 * 24 * 60 * 60 * 1000
      ]
    }
  ]
}
```

#### 根据用户曾经登录过的应用筛选

筛选出曾经登录过应用 `appId1` 或者 `appId2` 的用户：

```json
{
  "advancedFilter": [
    {
      "field": "loggedInApps",
      "operator": "IN",
      "value": [
        "appId1",
        "appId2"
      ]
    }
  ]
}
```

#### 根据用户所在部门进行筛选

```json
{
  "advancedFilter": [
    {
      "field": "department",
      "operator": "IN",
      "value": [
        {
          "organizationCode": "steamory",
          "departmentId": "root",
          "departmentIdType": "department_id",
          "includeChildrenDepartments": true
        }
      ]
    }
  ]
}
```

  

## 方法名称

`ManagementClient.ListPublicAccounts`

## 请求参数

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:60px">默认值</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- | ---- | ---- | ---- | ---- | ---- |
| keywords | string | 否 | - | 模糊搜索关键字  | `张三` |
| advancedFilter | <a href="#ListPublicAccountsAdvancedFilterItemDto">ListPublicAccountsAdvancedFilterItemDto[]</a> | 否 | - | 高级搜索  | `[{"field":"status","operator":"EQUAL","value":"Activated"}]` |
| searchQuery | object | 否 | - | 使用 ES 查询语句执行搜索命令  | `{"query":{"bool":{"must":[{"term":{"phone":"18818888888"}}],"must_not":[]}},"sort":["_score",{"created_at":"ASC"}]}` |
| options | <a href="#ListPublicAccountsOptionsDto">ListPublicAccountsOptionsDto</a> | 否 | - | 可选项  | `{"pagination":{"page":1,"limit":10},"fuzzySearchOn":["phone","email","name","username","nickname","identityNumber"],"withCustomData":true,"withDepartmentIds":true}` |




## 请求响应

类型： `PublicAccountPaginatedRespDto`

| 名称 | 类型 | 描述 |
| ---- | ---- | ---- |
| statusCode | number | 业务状态码，可以通过此状态码判断操作是否成功，200 表示成功。 |
| message | string | 描述信息 |
| apiCode | number | 细分错误码，可通过此错误码得到具体的错误类型。详情可以查看开发准备中的 apiCode 细分说明 |
| requestId | string | 请求 ID。当请求失败时会返回。 |
| data | <a href="#PublicAccountPagingDto">PublicAccountPagingDto</a> | 响应数据 |



示例结果：

```json
{
  "statusCode": 200,
  "message": "操作成功",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "list": {
      "userId": "6229ffaxxxxxxxxcade3e3d9",
      "createdAt": "2022-07-03T02:20:30.000Z",
      "updatedAt": "2022-07-03T02:20:30.000Z",
      "status": "Activated",
      "workStatus": "Active",
      "externalId": "10010",
      "email": "test@example.com",
      "phone": "188xxxx8888",
      "phoneCountryCode": "+86",
      "username": "bob",
      "name": "张三",
      "nickname": "张三",
      "photo": "https://files.authing.co/authing-console/default-user-avatar.png",
      "loginsCount": 3,
      "lastLogin": "2022-07-03T02:20:30.000Z",
      "lastIp": "127.0.0.1",
      "gender": "M",
      "emailVerified": true,
      "phoneVerified": true,
      "passwordLastSetAt": "2022-07-03T02:20:30.000Z",
      "birthdate": "2022-06-03",
      "country": "CN",
      "province": "BJ",
      "city": "BJ",
      "address": "北京朝阳",
      "streetAddress": "北京朝阳区 xxx 街道",
      "postalCode": "438100",
      "company": "steamory",
      "browser": "Mozilla/5.0 (Linux; Android 10; V2001A; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/87.0.4280.141 Mobile Safari/537.36 VivoBrowser/10.2.10.0",
      "device": "iOS",
      "givenName": "三",
      "familyName": "张",
      "middleName": "James",
      "profile": "alice",
      "preferredUsername": "alice",
      "website": "https://my-website.com",
      "zoneinfo": "GMT-08:00",
      "locale": "af",
      "formatted": "132, My Street, Kingston, New York 12401.",
      "region": "Xinjiang Uyghur Autonomous Region",
      "userSourceType": "register",
      "passwordSecurityLevel": 1,
      "departmentIds": "[\"624d930c3xxxx5c08dd4986e\",\"624d93102xxxx012f33cd2fe\"]",
      "identityNumber": "420421xxxxxxxx1234",
      "customData": {
        "school": "北京大学",
        "age": 22
      },
      "statusChangedAt": "2022-07-03T02:20:30.000Z"
    }
  }
}
```

## 数据结构


### <a id="ListPublicAccountsAdvancedFilterItemDto"></a> ListPublicAccountsAdvancedFilterItemDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| field | string | 是 | 高级搜索指定的公共账号字段：<br>- `id`: 公共账号 ID<br>- `phone`: 手机号   <br>- `email`: 邮箱<br>- `username`: 用户名<br>- `externalId`: 公共账号在外部系统的 ID<br>- `name`: 姓名<br>- `status`: 公共账号状态，可选值为 `Activated` 和 `Suspended`<br>- `gender`: 公共账号性别，可选值为 `M`（男性）、`F`（女性） 和 `U`（未知）<br>- `birthdate`: 出生日期<br>- `givenName`: 名<br>- `familyName`: 姓<br>- `preferredUsername`: Preferred Username<br>- `profile`: 个人资料<br>- `country`: 国家<br>- `province`: 省份<br>- `zoneinfo`: 时区<br>- `website`: 个人网站<br>- `address`: 地址<br>- `streetAddress`: 街道地址<br>- `company`: 公司<br>- `postalCode`: 邮政编码<br>- `formatted`: 格式化的地址<br>- `signedUp`: 注册时间<br>- `locale`: 语言信息<br>- `lastLogin`: 上次登录时间，为时间戳类型<br>- `loginsCount`: 登录次数，为数字类型<br>- `lastLoginApp`: 上次登录的应用 ID<br>- `userSource`: 公共账号来源，具体使用见示例<br>- `department`: 公共账号部门，具体使用见示例<br>- `loggedInApps`: 曾经登录过的应用，具体使用见示例<br>- ... 其他自定义字段<br>   |  `nickname` |
| operator | string | 是 | 运算符，可选值为：<br>- `EQUAL`: 全等，适用于数字和字符串的全等匹配<br>- `NOT_EQUAL`: 不等于，适用于数字和字符串的匹配<br>- `CONTAINS`: 字符串包含<br>- `NOT_CONTAINS`: 字符串不包含<br>- `IS_NULL`: 为空<br>- `NOT_NULL`: 不为空<br>- `IN`: 为某个数组中的元素<br>- `GREATER`: 大于或等于，适用于数字、日期类型数据的比较<br>- `LESSER`: 小于或等于，适用于数字、日期类型数据的比较<br>- `BETWEEN`: 介于什么什么之间，适用于数字、日期类型数据的比较<br>       | EQUAL |
| value | object | 否 | 搜索值，不同的 `field` 对应的 `value` 类型可能不一样，详情见示例。   |  `test` |


### <a id="ListPublicAccountsOptionsDto"></a> ListPublicAccountsOptionsDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| pagination |  | 否 | 分页配置 嵌套类型：<a href="#PaginationDto">PaginationDto</a>。  |  `{"page":1,"limit":10}` |
| sort | array | 否 | 排序设置，可以设置多项按照多个字段进行排序 嵌套类型：<a href="#SortingDto">SortingDto</a>。  |  `[{"field":"createdAt","direction":"desc"},{"field":"loginsCount","direction":"desc"}]` |
| fuzzySearchOn | array | 否 | 模糊搜索匹配的公共账号字段，可选值为：<br>- `phone`: 公共账号手机号，不能包含手机号区号，默认包含<br>- `email`: 公共账号邮箱，默认包含<br>- `name`: 公共账号名称，默认包含<br>- `username`: 用户名，默认包含<br>- `nickname`: 公共账号昵称，默认包含<br>- `id`: 公共账号 ID<br>- `company`: 公司<br>- `givenName`: 名<br>- `familyName`: 姓<br>- `middleName`: 中间名<br>- `preferredUsername`: Preferred Username<br>- `profile`: 个人资料<br>- `website`: 个人网站<br>- `address`: 地址<br>- `formatted`: 格式化地址<br>- `streetAddress`: 街道地址<br>- `postalCode`: 邮编号码<br>   |  |
| withCustomData | boolean | 否 | 是否获取自定义数据   |  `true` |
| withDepartmentIds | boolean | 否 | 是否获取部门 ID 列表   |  `true` |


### <a id="PaginationDto"></a> PaginationDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| page | number | 否 | 当前页数，从 1 开始   |  `1` |
| limit | number | 否 | 每页数目，最大不能超过 50，默认为 10   |  `10` |


### <a id="SortingDto"></a> SortingDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| field | string | 是 | 进行排序的字段，可选值为：<br>- `createdAt`: 创建时间<br>- `updatedAt`: 修改时间<br>- `email`: 邮箱<br>- `phone`: 手机号<br>- `username`: 用户名<br>- `externalId`: 外部 ID<br>- `status`: 公共账号状态<br>- `statusChangedAt`: 状态修改时间<br>- `passwordLastSetAt`: 密码修改时间<br>- `loginsCount`: 登录次数<br>- `gender`: 性别<br>- `lastLogin`: 上次登录时间<br>- `userSourceType`: 公共账号注册来源<br>- `lastMfaTime`: 上次 MFA 认证时间<br>- `passwordSecurityLevel`: 密码安全等级<br>- `phoneCountryCode`: 手机区号<br>- `lastIp`: 上次登录时使用的 IP<br>   | createdAt |
| order | string | 是 | 排序顺序：<br>- `desc`: 按照从大到小降序。<br>- `asc`: 按照从小到大升序。<br>       | desc |


### <a id="PublicAccountPagingDto"></a> PublicAccountPagingDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| totalCount | number | 是 | 记录总数   |  |
| list | array | 是 | 数据列表 嵌套类型：<a href="#PublicAccountDto">PublicAccountDto</a>。  |  |


### <a id="PublicAccountDto"></a> PublicAccountDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| userId | string | 是 | 用户的唯一标志，可以是用户 ID、用户名、邮箱、手机号、externalId、在外部身份源的 ID，详情见 userIdType 字段的说明。默认为用户 id 。   |  `6229ffaxxxxxxxxcade3e3d9` |
| createdAt | string | 是 | 创建时间   |  `2022-07-03T02:20:30.000Z` |
| updatedAt | string | 是 | 更新时间   |  `2022-07-03T02:20:30.000Z` |
| status | string | 是 | 账户当前状态   | Suspended |
| workStatus | string | 是 | 账户当前工作状态   | Closed |
| externalId | string | 否 | 第三方外部 ID   |  `10010` |
| email | string | 否 | 邮箱，不区分大小写   |  `test@example.com` |
| phone | string | 否 | 手机号，不带区号。如果是国外手机号，请在 phoneCountryCode 参数中指定区号。   |  `188xxxx8888` |
| phoneCountryCode | string | 否 | 手机区号，中国大陆手机号可不填。Authing 短信服务暂不内置支持国际手机号，你需要在 Authing 控制台配置对应的国际短信服务。完整的手机区号列表可参阅 https://en.wikipedia.org/wiki/List_of_country_calling_codes。   |  `+86` |
| username | string | 否 | 用户名，用户池内唯一   |  `bob` |
| name | string | 否 | 用户真实名称，不具备唯一性   |  `张三` |
| nickname | string | 否 | 昵称   |  `张三` |
| photo | string | 否 | 头像链接   |  `https://files.authing.co/authing-console/default-user-avatar.png` |
| loginsCount | number | 否 | 历史总登录次数   |  `3` |
| lastLogin | string | 否 | 上次登录时间   |  `2022-07-03T02:20:30.000Z` |
| lastIp | string | 否 | 上次登录 IP   |  `127.0.0.1` |
| gender | string | 是 | 性别:<br>- `M`: 男性，`male`<br>- `F`: 女性，`female`<br>- `U`: 未知，`unknown`<br>     | M |
| emailVerified | boolean | 是 | 邮箱是否验证   |  `true` |
| phoneVerified | boolean | 是 | 手机号是否验证   |  `true` |
| passwordLastSetAt | string | 否 | 用户上次密码修改时间   |  `2022-07-03T02:20:30.000Z` |
| birthdate | string | 否 | 出生日期   |  `2022-06-03` |
| country | string | 否 | 所在国家   |  `CN` |
| province | string | 否 | 所在省份   |  `BJ` |
| city | string | 否 | 所在城市   |  `BJ` |
| address | string | 否 | 所处地址   |  `北京朝阳` |
| streetAddress | string | 否 | 所处街道地址   |  `北京朝阳区 xxx 街道` |
| postalCode | string | 否 | 邮政编码号   |  `438100` |
| company | string | 否 | 所在公司   |  `steamory` |
| browser | string | 否 | 最近一次登录时使用的浏览器 UA   |  `Mozilla/5.0 (Linux; Android 10; V2001A; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/87.0.4280.141 Mobile Safari/537.36 VivoBrowser/10.2.10.0` |
| device | string | 否 | 最近一次登录时使用的设备   |  `iOS` |
| givenName | string | 否 | 名   |  `三` |
| familyName | string | 否 | 姓   |  `张` |
| middleName | string | 否 | 中间名   |  `James` |
| profile | string | 否 | Preferred Username   |  `alice` |
| preferredUsername | string | 否 | Preferred Username   |  `alice` |
| website | string | 否 | 用户个人网页   |  `https://my-website.com` |
| zoneinfo | string | 否 | 用户时区信息   |  `GMT-08:00` |
| locale | string | 否 | Locale   |  `af` |
| formatted | string | 否 | 标准的完整地址   |  `132, My Street, Kingston, New York 12401.` |
| region | string | 否 | 用户所在区域   |  `Xinjiang Uyghur Autonomous Region` |
| userSourceType | string | 是 | 来源类型:<br>- `excel`: 通过 excel 导入<br>- `register`: 用户自主注册<br>- `adminCreated`: 管理员后台手动创建（包含使用管理 API 创建用户 ）<br>- `syncTask`: 同步中心的同步任务  <br>   | excel |
| userSourceId | string | 否 | 应用 ID 或者同步任务 ID   |  |
| lastLoginApp | string | 否 | 用户上次登录的应用 ID   |  |
| mainDepartmentId | string | 否 | 用户主部门 ID   |  |
| lastMfaTime | string | 否 | 用户上次进行 MFA 认证的时间   |  |
| passwordSecurityLevel | number | 否 | 用户密码安全强度等级   |  `1` |
| resetPasswordOnNextLogin | boolean | 否 | 下次登录要求重置密码   |  |
| registerSource | array | 否 | 注册方式   |  |
| departmentIds | array | 否 | 公共账号所属部门 ID 列表   |  `["624d930c3xxxx5c08dd4986e","624d93102xxxx012f33cd2fe"]` |
| identityNumber | string | 否 | 用户身份证号码   |  `420421xxxxxxxx1234` |
| customData | object | 否 | 公共账号的扩展字段数据   |  `{"school":"北京大学","age":22}` |
| statusChangedAt | string | 否 | 公共账号状态上次修改时间   |  `2022-07-03T02:20:30.000Z` |
| tenantId | string | 否 | 用户租户 ID   |  |


