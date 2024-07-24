# 创建数据资源扩展字段

<LastUpdated />

目前仅支持树类型数据资源
## 方法名称

`ManagementClient.getDnefList`

## 请求参数
类型： `GetDenfListDto`

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:60px">默认值</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- | ---- | ---- | ---- | ---- | ---- |
| namespaceCode | string | 是 | 权限空间 code   |  `examplePermissionNamespace` |
| resourceCode | string | 是 | 数据资源 code   |  `treeResourceCode` |
| startIndex | number | 否 | 起始索引，默认为 1，即从第 1 条开始  | 11 |
| maxSize | number | 否 | 当次查询最大数量，默认为 10   |  20 |
| query | string | 否 | 关键字搜索，可以是字段唯一标识、展示名称   |  `str` |

## 示例代码
```java
package test.management.dataPermission.resource;

import cn.authing.sdk.java.client.ManagementClient;
import cn.authing.sdk.java.dto.GetDenfListDto;
import cn.authing.sdk.java.dto.GetDenfListResponseDto;
import cn.authing.sdk.java.model.ManagementClientOptions;
import cn.authing.sdk.java.util.JsonUtils;

public class GetDnefListTest {

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
        GetDenfListDto getDenfListDto = new GetDenfListDto();
        getDenfListDto.setResourceCode("treeResourceCode");
        getDenfListDto.setNamespaceCode("examplePermissionNamespace");
        GetDenfListResponseDto dnefList = client.getDnefList(getDenfListDto);
        System.out.println(JsonUtils.serialize(dnefList));
    }

}
```
## 请求响应
类型： `GetDenfListResponseDto`

| 名称 | 类型 | 描述 |
| ---- | ---- | ---- |
| statusCode | number | 业务状态码，可以通过此状态码判断操作是否成功，200 表示成功。 |
| message | string | 描述信息 |
| apiCode | number | 细分错误码，可通过此错误码得到具体的错误类型（成功请求不返回）。详细错误码列表请见：[API Code 列表](https://api-explorer.authing.cn/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId | string | 请求 ID。当请求失败时会返回。 |
| data | <a href="#GetDenfListRespDto">GetDenfListRespDto</a> | 响应数据 |

## 数据结构
### <a id="GetDenfListRespDto"></a> GetDenfListRespDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| nextStartIndex | number | 是 | 下一页开始的索引，当最后一页时返回 -1   |  31 |
| truncated | boolean | 是 | 是否被截断，true 表示可以查询下一页，false 表示是最后一页数据   |  false |
| list | <a href="#Dnef">Dnef[]</a> | 是 | 字段列表  |  |

### <a id="Dnef"></a> Dnef
| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| key | string | 是 | 扩展字段 Key   |  `str` |
| valueType | ValueType | 是 | 扩展字段值类型  |  `STRING`（文本）、`SELECT`（单选） |
| label | string | 是 | 扩展字段显示名称   |  `str_label` |
| config | <a href="#DnefConfig">DnefConfig</a> | 否 | 字段配置，单选类型字段必传   | |

### <a id="DnefConfig"></a> DnefConfig
| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| options | <a href="#Option">Option[]</a> | 是 | 单选类型字段选项列表   | |

### <a id="Option"></a> Option
| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| value | string | 是 | 选项值   |  `option1` |