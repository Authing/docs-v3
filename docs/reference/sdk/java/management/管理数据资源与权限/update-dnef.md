# 创建数据资源扩展字段

<LastUpdated />

目前仅支持树类型数据资源
## 方法名称

`ManagementClient.UpdateDnef`

## 请求参数
类型： `UpdateDenfDto`

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:60px">默认值</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- | ---- | ---- | ---- | ---- | ---- |
| namespaceCode | string | 是 | 权限空间 code   |  `examplePermissionNamespace` |
| resourceCode | string | 是 | 数据资源 code   |  `treeResourceCode` |
| key | string | 是 | 扩展字段 Key   |  `str` |
| valueType | ValueType | 否 | 扩展字段值类型  |  `STRING`（文本）、`SELECT`（单选） |
| label | string | 否 | 扩展字段显示名称   |  `str_label` |
| config | <a href="#DnefConfig">DnefConfig</a> | 否 | 字段配置 |   

## 示例代码
```java
package test.management.dataPermission.resource;

import cn.authing.sdk.java.client.ManagementClient;
import cn.authing.sdk.java.dto.Dnef.ValueType;
import cn.authing.sdk.java.dto.DnefConfig;
import cn.authing.sdk.java.dto.IsSuccessRespDto;
import cn.authing.sdk.java.dto.UpdateDenfDto;
import cn.authing.sdk.java.model.ManagementClientOptions;
import cn.authing.sdk.java.util.JsonUtils;
import cn.hutool.core.collection.ListUtil;

public class UpdateDnefTest {

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
        UpdateDenfDto updateDenfDto = new UpdateDenfDto();
        updateDenfDto.setResourceCode("treeResourceCode");
        updateDenfDto.setNamespaceCode("examplePermissionNamespace");
        updateDenfDto.setKey("select");
        updateDenfDto.setValueType(ValueType.SELECT);
        updateDenfDto.setDescription("select1");
        updateDenfDto.setLabel("select1");
        updateDenfDto.setConfig(new DnefConfig(ListUtil.of(new DnefConfig.Option("str_value_1"))));
        IsSuccessRespDto res = client.updateDnef(updateDenfDto);
        System.out.println(JsonUtils.serialize(res));
    }

}
```
## 请求响应
类型： `IsSuccessRespDto`

| 名称 | 类型 | 描述 |
| ---- | ---- | ---- |
| statusCode | number | 业务状态码，可以通过此状态码判断操作是否成功，200 表示成功。 |
| message | string | 描述信息 |
| apiCode | number | 细分错误码，可通过此错误码得到具体的错误类型（成功请求不返回）。详细错误码列表请见：[API Code 列表](https://api-explorer.authing.cn/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId | string | 请求 ID。当请求失败时会返回。 |
| data | <a href="#IsSuccessDto">IsSuccessDto</a> | 操作是否成功 |


## 数据结构
### <a id="IsSuccessDto"></a> IsSuccessDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| success | boolean | 是 | 操作是否成功   |  `true` |

### <a id="DnefConfig"></a> DnefConfig
| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| options | <a href="#Option">Option[]</a> | 是 | 单选类型字段选项列表   | |

### <a id="Option"></a> Option
| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| value | string | 是 | 选项值   |  `option1` |
