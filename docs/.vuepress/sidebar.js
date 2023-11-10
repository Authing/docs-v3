const BRAND_NAME_ZH_CN = 'Authing';
const BRAND_NAME_ZH_CN_LOWER_CASE = 'authing';
const BRAND_NAME_EN_US = 'Authing';
const BRAND_NAME_EN_US_LOWER_CASE = 'authing';

const DATABASE_CONNECTION_MENU_EN = {
  title: 'Custom database',
  path: '/guides/database-connection/overview.html',
  children: [
    {
      title: 'Configure database connection and scripting',
      path: '/guides/database-connection/configuration/'
    },
    {
      title: `Lazy migration of users to ${BRAND_NAME_EN_US}`,
      path: '/guides/database-connection/lazy-migration'
    },
    {
      title: 'Fully use a custom database to save user data',
      path: '/guides/database-connection/custom-user-store.md'
    },
    {
      title: 'Best Practice',
      path: '/guides/database-connection/best-practices.md'
    }
  ]
};

/**
 * 中文菜单
 */
const zhCnNavBar = {
  '/reference/': [
    {
      title: 'API',
      redirect: '/reference/api/authentication/',
      children: [
        {
          title: '用户认证 API',
          path: '/reference/api/authentication/'
        },
        {
          title: '管理 API',
          path: '/reference/api/management/'
        }
      ]
    },
    {
      title: 'SDK',
      path: '/reference/sdk/',
      redirect: '/reference/sdk/java/install.html',
      children: [
        // 自动生成粘贴开始

        {
          "title": "Java",
          "path": "/reference/sdk/java/",
          "redirect": "/reference/sdk/java/install.html",
          "children": [
            {
              "title": "安装使用",
              "path": "/reference/sdk/java/install.md"
            },
            {
              "title": "用户认证模块",
              "children": [
                {
                  "title": "登录",
                  "children": [
                    {
                      "title": "账号密码登录",
                      "path": "/reference/sdk/java/authentication/登录/signin-by-account-password.md"
                    },
                    {
                      "title": "用户名密码登录",
                      "path": "/reference/sdk/java/authentication/登录/signin-by-username-password.md"
                    },
                    {
                      "title": "手机号密码登录",
                      "path": "/reference/sdk/java/authentication/登录/signin-by-phone-password.md"
                    },
                    {
                      "title": "邮箱密码登录",
                      "path": "/reference/sdk/java/authentication/登录/signin-by-email-password.md"
                    },
                    {
                      "title": "邮箱验证码登录",
                      "path": "/reference/sdk/java/authentication/登录/signin-by-email-passcode.md"
                    },
                    {
                      "title": "手机号验证码登录",
                      "path": "/reference/sdk/java/authentication/登录/signin-by-phone-passcode.md"
                    },
                    {
                      "title": "LDAP 账号登录",
                      "path": "/reference/sdk/java/authentication/登录/signin-by-ldap.md"
                    },
                    {
                      "title": "AD 账号登录",
                      "path": "/reference/sdk/java/authentication/登录/signin-by-ad.md"
                    },
                    {
                      "title": "生成登录地址",
                      "path": "/reference/sdk/java/authentication/登录/build-authorize-url.md"
                    },
                    {
                      "title": "使用用户凭证登录",
                      "path": "/reference/sdk/java/authentication/登录/signin"
                    },
                    {
                      "title": "使用移动端社会化登录",
                      "path": "/reference/sdk/java/authentication/登录/signin-by-mobile"
                    },
                    {
                      "title": "公共账号切换登录",
                      "path": "/reference/sdk/java/authentication/登录/switch-login-by-user"
                    },
                    {
                      "title": "获取支付宝 AuthInfo",
                      "path": "/reference/sdk/java/authentication/登录/get-alipay-authinfo"
                    },
                    {
                      "title": "生成用于登录的二维码",
                      "path": "/reference/sdk/java/authentication/登录/gene-qrcode"
                    },
                    {
                      "title": "查询二维码状态",
                      "path": "/reference/sdk/java/authentication/登录/check-qrcode-status"
                    },
                    {
                      "title": "使用二维码 ticket 换取 TokenSet",
                      "path": "/reference/sdk/java/authentication/登录/exchange-tokenset-with-qrcode-ticket"
                    },
                    {
                      "title": "自建 APP 扫码登录：APP 端修改二维码状态",
                      "path": "/reference/sdk/java/authentication/登录/change-qrcode-status"
                    },
                    {
                      "title": "推送登录",
                      "path": "/reference/sdk/java/authentication/登录/signin-by-push"
                    },
                    {
                      "title": "查询推送码状态",
                      "path": "/reference/sdk/java/authentication/登录/check-pushcode-status"
                    },
                    {
                      "title": "推送登录：APP 端修改推送码状态",
                      "path": "/reference/sdk/java/authentication/登录/change-pushcode-status"
                    },
                    {
                      "title": "获取推送登录请求关联的客户端应用",
                      "path": "/reference/sdk/java/authentication/登录/get-pushlogin-relation-apps"
                    },
                    {
                      "title": "获取快速认证二维码数据",
                      "path": "/reference/sdk/java/authentication/登录/gene-fastpass-qrcode-info"
                    },
                    {
                      "title": "获取 WebAuthn 认证请求初始化参数",
                      "path": "/reference/sdk/java/authentication/登录/webauthn-authentication"
                    }
                  ]
                },
                {
                  "title": "登出",
                  "children": [
                    {
                      "title": "前端登出",
                      "path": "/reference/sdk/java/authentication/登出/front-channel-logout.md"
                    },
                    {
                      "title": "后端登出",
                      "path": "/reference/sdk/java/authentication/登出/backend-channel-logout.md"
                    }
                  ]
                },
                {
                  "title": "管理 Token",
                  "children": [
                    {
                      "title": "获取 Token",
                      "path": "/reference/sdk/java/authentication/管理-token/get-access-token.md"
                    },
                    {
                      "title": "校验 Token",
                      "path": "/reference/sdk/java/authentication/管理-token/introspect-token.md"
                    },
                    {
                      "title": "撤销 Token",
                      "path": "/reference/sdk/java/authentication/管理-token/revoke-token.md"
                    }
                  ]
                },
                {
                  "title": "注册",
                  "children": [
                    {
                      "title": "用户名密码注册",
                      "path": "/reference/sdk/java/authentication/注册/signup-by-username-password.md"
                    },
                    {
                      "title": "邮箱密码注册",
                      "path": "/reference/sdk/java/authentication/注册/signup-by-email-password.md"
                    },
                    {
                      "title": "手机号验证码注册",
                      "path": "/reference/sdk/java/authentication/注册/signup-by-phone-passcode.md"
                    },
                    {
                      "title": "邮箱验证码注册",
                      "path": "/reference/sdk/java/authentication/注册/signup-by-email-passcode.md"
                    },
                    {
                      "title": "注册",
                      "path": "/reference/sdk/java/authentication/注册/signup"
                    }
                  ]
                },
                {
                  "title": "用户资料",
                  "children": [
                    {
                      "title": "获取用户资料",
                      "path": "/reference/sdk/java/authentication/用户资料/get-profile"
                    },
                    {
                      "title": "修改用户资料",
                      "path": "/reference/sdk/java/authentication/用户资料/update-profile"
                    },
                    {
                      "title": "绑定邮箱",
                      "path": "/reference/sdk/java/authentication/用户资料/bind-email"
                    },
                    {
                      "title": "解绑邮箱",
                      "path": "/reference/sdk/java/authentication/用户资料/unbind-email"
                    },
                    {
                      "title": "绑定手机号",
                      "path": "/reference/sdk/java/authentication/用户资料/bind-phone"
                    },
                    {
                      "title": "解绑手机号",
                      "path": "/reference/sdk/java/authentication/用户资料/unbind-phone"
                    },
                    {
                      "title": "获取密码强度和账号安全等级评分",
                      "path": "/reference/sdk/java/authentication/用户资料/get-security-info"
                    },
                    {
                      "title": "修改密码",
                      "path": "/reference/sdk/java/authentication/用户资料/update-password"
                    },
                    {
                      "title": "发起修改邮箱的验证请求",
                      "path": "/reference/sdk/java/authentication/用户资料/verify-update-email-request"
                    },
                    {
                      "title": "修改邮箱",
                      "path": "/reference/sdk/java/authentication/用户资料/update-email"
                    },
                    {
                      "title": "发起修改手机号的验证请求",
                      "path": "/reference/sdk/java/authentication/用户资料/verify-update-phone-request"
                    },
                    {
                      "title": "修改手机号",
                      "path": "/reference/sdk/java/authentication/用户资料/update-phone"
                    },
                    {
                      "title": "发起忘记密码请求",
                      "path": "/reference/sdk/java/authentication/用户资料/verify-reset-password-request"
                    },
                    {
                      "title": "忘记密码",
                      "path": "/reference/sdk/java/authentication/用户资料/reset-password"
                    },
                    {
                      "title": "发起注销账号请求",
                      "path": "/reference/sdk/java/authentication/用户资料/verify-delete-account-request"
                    },
                    {
                      "title": "注销账户",
                      "path": "/reference/sdk/java/authentication/用户资料/delete-account"
                    },
                    {
                      "title": "查询当前登录用户可切换登录的公共账号列表",
                      "path": "/reference/sdk/java/authentication/用户资料/get-user-select-login-public-accounts"
                    },
                    {
                      "title": "获取 webauthn 凭证创建初始化参数",
                      "path": "/reference/sdk/java/authentication/用户资料/webauthn-registration"
                    },
                    {
                      "title": "我的设备列表",
                      "path": "/reference/sdk/java/authentication/用户资料/mydevices-list"
                    },
                    {
                      "title": "移除设备",
                      "path": "/reference/sdk/java/authentication/用户资料/mydevices-unbind"
                    },
                    {
                      "title": "从设备上退出登录",
                      "path": "/reference/sdk/java/authentication/用户资料/mydevices-revoke-session"
                    }
                  ]
                },
                {
                  "title": "账号绑定",
                  "children": [
                    {
                      "title": "生成绑定外部身份源的链接",
                      "path": "/reference/sdk/java/authentication/账号绑定/generate-link-extidp-url"
                    },
                    {
                      "title": "解绑外部身份源",
                      "path": "/reference/sdk/java/authentication/账号绑定/unlink-extidp"
                    },
                    {
                      "title": "获取绑定的外部身份源",
                      "path": "/reference/sdk/java/authentication/账号绑定/get-identities"
                    },
                    {
                      "title": "获取应用开启的外部身份源列表",
                      "path": "/reference/sdk/java/authentication/账号绑定/get-application-enabled-extidps"
                    }
                  ]
                },
                {
                  "title": "MFA 要素管理",
                  "children": [
                    {
                      "title": "发起绑定 MFA 认证要素请求",
                      "path": "/reference/sdk/java/authentication/mfa-要素管理/send-enroll-factor-request"
                    },
                    {
                      "title": "绑定 MFA 认证要素",
                      "path": "/reference/sdk/java/authentication/mfa-要素管理/enroll-factor"
                    },
                    {
                      "title": "解绑 MFA 认证要素",
                      "path": "/reference/sdk/java/authentication/mfa-要素管理/reset-factor"
                    },
                    {
                      "title": "获取绑定的所有 MFA 认证要素",
                      "path": "/reference/sdk/java/authentication/mfa-要素管理/list-enrolled-factors"
                    },
                    {
                      "title": "获取绑定的某个 MFA 认证要素",
                      "path": "/reference/sdk/java/authentication/mfa-要素管理/get-factor"
                    },
                    {
                      "title": "获取可绑定的 MFA 认证要素",
                      "path": "/reference/sdk/java/authentication/mfa-要素管理/list-factors-to-enroll"
                    },
                    {
                      "title": "校验用户 MFA 绑定的 OTP",
                      "path": "/reference/sdk/java/authentication/mfa-要素管理/mfa-totp-verify"
                    }
                  ]
                },
                {
                  "title": "用户相关资源",
                  "children": [
                    {
                      "title": "获取登录日志",
                      "path": "/reference/sdk/java/authentication/用户相关资源/get-my-login-history"
                    },
                    {
                      "title": "获取登录应用",
                      "path": "/reference/sdk/java/authentication/用户相关资源/get-my-logged-in-apps"
                    },
                    {
                      "title": "获取具备访问权限的应用",
                      "path": "/reference/sdk/java/authentication/用户相关资源/get-my-accessible-apps"
                    },
                    {
                      "title": "获取租户列表",
                      "path": "/reference/sdk/java/authentication/用户相关资源/get-my-tenant-list"
                    },
                    {
                      "title": "获取角色列表",
                      "path": "/reference/sdk/java/authentication/用户相关资源/get-my-role-list"
                    },
                    {
                      "title": "获取分组列表",
                      "path": "/reference/sdk/java/authentication/用户相关资源/get-my-group-list"
                    },
                    {
                      "title": "获取部门列表",
                      "path": "/reference/sdk/java/authentication/用户相关资源/get-my-department-list"
                    },
                    {
                      "title": "获取被授权的资源列表",
                      "path": "/reference/sdk/java/authentication/用户相关资源/get-my-authorized-resources"
                    }
                  ]
                },
                {
                  "title": "消息服务",
                  "children": [
                    {
                      "title": "发送短信",
                      "path": "/reference/sdk/java/authentication/消息服务/send-sms"
                    },
                    {
                      "title": "发送邮件",
                      "path": "/reference/sdk/java/authentication/消息服务/send-email"
                    }
                  ]
                },
                {
                  "title": "鉴权",
                  "children": [
                    {
                      "title": "字符串类型资源鉴权",
                      "path": "/reference/sdk/java/authentication/鉴权/check-permission-string-resource"
                    },
                    {
                      "title": "数组类型资源鉴权",
                      "path": "/reference/sdk/java/authentication/鉴权/check-permission-array-resource"
                    },
                    {
                      "title": "树类型资源鉴权",
                      "path": "/reference/sdk/java/authentication/鉴权/check-permission-tree-resource"
                    },
                    {
                      "title": "获取用户在登录应用下被授权资源列表",
                      "path": "/reference/sdk/java/authentication/鉴权/get-user-auth-resource-list"
                    },
                    {
                      "title": "获取用户指定资源权限列表",
                      "path": "/reference/sdk/java/authentication/鉴权/get-user-auth-resource-permission-list"
                    }
                  ]
                },
                {
                  "title": "微信相关接口",
                  "children": [
                    {
                      "title": "解密微信小程序数据",
                      "path": "/reference/sdk/java/authentication/微信相关接口/decrypt-wechat-miniprogram-data"
                    },
                    {
                      "title": "获取微信小程序、公众号 Access Token",
                      "path": "/reference/sdk/java/authentication/微信相关接口/get-wechat-access-token"
                    },
                    {
                      "title": "获取微信小程序、公众号 Access Token",
                      "path": "/reference/sdk/java/authentication/微信相关接口/get-wechat-access-token-info"
                    }
                  ]
                },
                {
                  "title": "公开信息端点",
                  "children": [
                    {
                      "title": "获取服务器公开信息",
                      "path": "/reference/sdk/java/authentication/公开信息端点/system"
                    },
                    {
                      "title": "获取国家列表",
                      "path": "/reference/sdk/java/authentication/公开信息端点/get-country-list"
                    }
                  ]
                },
                {
                  "title": "OIDC 模块",
                  "path": "/reference/sdk/java/authentication/oidc.md"
                },
                {
                  "title": "OAuth 模块",
                  "path": "/reference/sdk/java/authentication/oauth.md"
                },
                {
                  "title": "SAML 模块",
                  "path": "/reference/sdk/java/authentication/saml.md"
                },
                {
                  "title": "CAS 模块",
                  "path": "/reference/sdk/java/authentication/cas.md"
                },
                {
                  "title": "事件",
                  "path": "/reference/sdk/java/authentication/events.md"
                }
              ]
            },
            {
              "title": "管理模块",
              "children": [
                {
                  "title": "管理用户",
                  "children": [
                    {
                      "title": "获取用户列表",
                      "path": "/reference/sdk/java/management/管理用户/list-users"
                    },
                    {
                      "title": "获取用户信息",
                      "path": "/reference/sdk/java/management/管理用户/get-user"
                    },
                    {
                      "title": "批量获取用户信息",
                      "path": "/reference/sdk/java/management/管理用户/get-user-batch"
                    },
                    {
                      "title": "创建用户",
                      "path": "/reference/sdk/java/management/管理用户/create-user"
                    },
                    {
                      "title": "批量创建用户",
                      "path": "/reference/sdk/java/management/管理用户/create-users-batch"
                    },
                    {
                      "title": "修改用户资料",
                      "path": "/reference/sdk/java/management/管理用户/update-user"
                    },
                    {
                      "title": "批量修改用户资料",
                      "path": "/reference/sdk/java/management/管理用户/update-user-batch"
                    },
                    {
                      "title": "批量删除用户",
                      "path": "/reference/sdk/java/management/管理用户/delete-users-batch"
                    },
                    {
                      "title": "获取用户的外部身份源",
                      "path": "/reference/sdk/java/management/管理用户/get-user-identities"
                    },
                    {
                      "title": "获取用户角色列表",
                      "path": "/reference/sdk/java/management/管理用户/get-user-roles"
                    },
                    {
                      "title": "获取用户实名认证信息",
                      "path": "/reference/sdk/java/management/管理用户/get-user-principal-authentication-info"
                    },
                    {
                      "title": "删除用户实名认证信息",
                      "path": "/reference/sdk/java/management/管理用户/reset-user-principal-authentication-info"
                    },
                    {
                      "title": "获取用户部门列表",
                      "path": "/reference/sdk/java/management/管理用户/get-user-departments"
                    },
                    {
                      "title": "设置用户所在部门",
                      "path": "/reference/sdk/java/management/管理用户/set-user-departments"
                    },
                    {
                      "title": "获取用户分组列表",
                      "path": "/reference/sdk/java/management/管理用户/get-user-groups"
                    },
                    {
                      "title": "获取用户 MFA 绑定信息",
                      "path": "/reference/sdk/java/management/管理用户/get-user-mfa-info"
                    },
                    {
                      "title": "获取已归档的用户列表",
                      "path": "/reference/sdk/java/management/管理用户/list-archived-users"
                    },
                    {
                      "title": "强制下线用户",
                      "path": "/reference/sdk/java/management/管理用户/kick-users"
                    },
                    {
                      "title": "判断用户是否存在",
                      "path": "/reference/sdk/java/management/管理用户/is-user-exists"
                    },
                    {
                      "title": "获取用户可访问的应用",
                      "path": "/reference/sdk/java/management/管理用户/get-user-accessible-apps"
                    },
                    {
                      "title": "获取用户授权的应用",
                      "path": "/reference/sdk/java/management/管理用户/get-user-authorized-apps"
                    },
                    {
                      "title": "判断用户是否有某个角色",
                      "path": "/reference/sdk/java/management/管理用户/has-any-role"
                    },
                    {
                      "title": "获取用户的登录历史记录",
                      "path": "/reference/sdk/java/management/管理用户/get-user-login-history"
                    },
                    {
                      "title": "获取用户曾经登录过的应用",
                      "path": "/reference/sdk/java/management/管理用户/get-user-loggedin-apps"
                    },
                    {
                      "title": "获取用户曾经登录过的身份源",
                      "path": "/reference/sdk/java/management/管理用户/get-user-logged-in-identities"
                    },
                    {
                      "title": "离职用户",
                      "path": "/reference/sdk/java/management/管理用户/resign-user"
                    },
                    {
                      "title": "批量离职用户",
                      "path": "/reference/sdk/java/management/管理用户/resign-user-batch"
                    },
                    {
                      "title": "获取用户被授权的所有资源",
                      "path": "/reference/sdk/java/management/管理用户/get-user-authorized-resources"
                    },
                    {
                      "title": "检查某个用户在应用下是否具备 Session 登录态",
                      "path": "/reference/sdk/java/management/管理用户/check-session-status"
                    },
                    {
                      "title": "导入用户的 OTP",
                      "path": "/reference/sdk/java/management/管理用户/import-otp"
                    },
                    {
                      "title": "获取用户绑定 OTP 的秘钥",
                      "path": "/reference/sdk/java/management/管理用户/get-otp-secret-by-user"
                    },
                    {
                      "title": "获取用户自定义加密的密码",
                      "path": "/reference/sdk/java/management/管理用户/get-user-password-ciphertext"
                    },
                    {
                      "title": "给用户绑定一个身份信息",
                      "path": "/reference/sdk/java/management/管理用户/link-identity"
                    },
                    {
                      "title": "解除绑定用户在身份源下的所有身份信息",
                      "path": "/reference/sdk/java/management/管理用户/unlink-identity"
                    },
                    {
                      "title": "设置用户 MFA 状态",
                      "path": "/reference/sdk/java/management/管理用户/set-mfa-status"
                    },
                    {
                      "title": "获取用户 MFA 状态",
                      "path": "/reference/sdk/java/management/管理用户/get-mfa-status"
                    },
                    {
                      "title": "获取用户绑定的第三方同步关系",
                      "path": "/reference/sdk/java/management/管理用户/get-user-sync-relations"
                    },
                    {
                      "title": "删除用户同步关联关系",
                      "path": "/reference/sdk/java/management/管理用户/delete-user-sync-relations"
                    }
                  ]
                },
                {
                  "title": "管理公共账号",
                  "children": [
                    {
                      "title": "获取/搜索公共账号列表",
                      "path": "/reference/sdk/java/management/管理公共账号/list-public-accounts"
                    },
                    {
                      "title": "获取公共账号信息",
                      "path": "/reference/sdk/java/management/管理公共账号/get-public-account"
                    },
                    {
                      "title": "批量获取公共账号信息",
                      "path": "/reference/sdk/java/management/管理公共账号/get-public-account-batch"
                    },
                    {
                      "title": "创建公共账号",
                      "path": "/reference/sdk/java/management/管理公共账号/create-public-account"
                    },
                    {
                      "title": "批量创建公共账号",
                      "path": "/reference/sdk/java/management/管理公共账号/create-public-accounts-batch"
                    },
                    {
                      "title": "修改公共账号资料",
                      "path": "/reference/sdk/java/management/管理公共账号/update-public-account"
                    },
                    {
                      "title": "批量修改公共账号资料",
                      "path": "/reference/sdk/java/management/管理公共账号/update-public-account-batch"
                    },
                    {
                      "title": "批量删除公共账号",
                      "path": "/reference/sdk/java/management/管理公共账号/delete-public-accounts-batch"
                    },
                    {
                      "title": "强制下线公共账号",
                      "path": "/reference/sdk/java/management/管理公共账号/kick-public-accounts"
                    },
                    {
                      "title": "个人账号转换为公共账号",
                      "path": "/reference/sdk/java/management/管理公共账号/transfer-into-public-account"
                    },
                    {
                      "title": "获取用户的公共账号列表",
                      "path": "/reference/sdk/java/management/管理公共账号/get-public-accounts-of-user"
                    },
                    {
                      "title": "公共账号的用户列表",
                      "path": "/reference/sdk/java/management/管理公共账号/get-users-of-public-account"
                    },
                    {
                      "title": "公共账号绑定批量用户",
                      "path": "/reference/sdk/java/management/管理公共账号/set-public-account-of-users"
                    },
                    {
                      "title": "用户绑定批量公共账号",
                      "path": "/reference/sdk/java/management/管理公共账号/set-user-of-public-accounts"
                    },
                    {
                      "title": "公共账号解绑用户",
                      "path": "/reference/sdk/java/management/管理公共账号/unbind-public-account-of-user"
                    },
                    {
                      "title": "获取公共账号的角色列表",
                      "path": "/reference/sdk/java/management/管理公共账号/get-roles-of-public-account"
                    },
                    {
                      "title": "获取角色的公共账号列表",
                      "path": "/reference/sdk/java/management/管理公共账号/get-public-accounts-of-role"
                    },
                    {
                      "title": "公共账号绑定批量角色",
                      "path": "/reference/sdk/java/management/管理公共账号/set-public-account-of-roles"
                    },
                    {
                      "title": "获取分组的公共账号列表",
                      "path": "/reference/sdk/java/management/管理公共账号/get-public-accounts-of-group"
                    },
                    {
                      "title": "获取公共账号分组列表",
                      "path": "/reference/sdk/java/management/管理公共账号/get-groups-of-public-account"
                    },
                    {
                      "title": "公共账号添加批量分组",
                      "path": "/reference/sdk/java/management/管理公共账号/set-public-account-of-groups"
                    },
                    {
                      "title": "获取部门的公共账号列表",
                      "path": "/reference/sdk/java/management/管理公共账号/get-public-accounts-of-department"
                    },
                    {
                      "title": "获取公共账号的部门列表",
                      "path": "/reference/sdk/java/management/管理公共账号/get-departments-of-public-account"
                    },
                    {
                      "title": "设置公共账号所在部门",
                      "path": "/reference/sdk/java/management/管理公共账号/set-public-account-of-departments"
                    },
                    {
                      "title": "批量离职用户",
                      "path": "/reference/sdk/java/management/管理公共账号/resign-public-account-batch"
                    },
                    {
                      "title": "获取公共账号的岗位",
                      "path": "/reference/sdk/java/management/管理公共账号/get-post-of-public-account"
                    },
                    {
                      "title": "获取岗位的公共账号列表",
                      "path": "/reference/sdk/java/management/管理公共账号/get-public-accounts-of-post"
                    },
                    {
                      "title": "设置公共账号的岗位",
                      "path": "/reference/sdk/java/management/管理公共账号/set-public-account-of-post"
                    },
                    {
                      "title": "解绑公共账号关联岗位",
                      "path": "/reference/sdk/java/management/管理公共账号/unbind-public-account-of-post"
                    }
                  ]
                },
                {
                  "title": "管理组织机构",
                  "children": [
                    {
                      "title": "获取组织机构详情",
                      "path": "/reference/sdk/java/management/管理组织机构/get-organization"
                    },
                    {
                      "title": "批量获取组织机构详情",
                      "path": "/reference/sdk/java/management/管理组织机构/get-organization-batch"
                    },
                    {
                      "title": "获取组织机构列表",
                      "path": "/reference/sdk/java/management/管理组织机构/list-organizations"
                    },
                    {
                      "title": "创建组织机构",
                      "path": "/reference/sdk/java/management/管理组织机构/create-organization"
                    },
                    {
                      "title": "修改组织机构",
                      "path": "/reference/sdk/java/management/管理组织机构/update-organization"
                    },
                    {
                      "title": "删除组织机构",
                      "path": "/reference/sdk/java/management/管理组织机构/delete-organization"
                    },
                    {
                      "title": "搜索组织机构列表",
                      "path": "/reference/sdk/java/management/管理组织机构/search-organizations"
                    },
                    {
                      "title": "更新组织机构状态",
                      "path": "/reference/sdk/java/management/管理组织机构/update-organization-status"
                    },
                    {
                      "title": "获取部门信息",
                      "path": "/reference/sdk/java/management/管理组织机构/get-department"
                    },
                    {
                      "title": "创建部门",
                      "path": "/reference/sdk/java/management/管理组织机构/create-department"
                    },
                    {
                      "title": "修改部门",
                      "path": "/reference/sdk/java/management/管理组织机构/update-department"
                    },
                    {
                      "title": "删除部门",
                      "path": "/reference/sdk/java/management/管理组织机构/delete-department"
                    },
                    {
                      "title": "搜索部门",
                      "path": "/reference/sdk/java/management/管理组织机构/search-departments"
                    },
                    {
                      "title": "搜索部门",
                      "path": "/reference/sdk/java/management/管理组织机构/search-departments-list"
                    },
                    {
                      "title": "获取子部门列表",
                      "path": "/reference/sdk/java/management/管理组织机构/list-children-departments"
                    },
                    {
                      "title": "获取所有部门列表",
                      "path": "/reference/sdk/java/management/管理组织机构/get-all-departments"
                    },
                    {
                      "title": "获取部门成员列表",
                      "path": "/reference/sdk/java/management/管理组织机构/list-department-members"
                    },
                    {
                      "title": "获取部门直属成员 ID 列表",
                      "path": "/reference/sdk/java/management/管理组织机构/list-department-member-ids"
                    },
                    {
                      "title": "搜索部门下的成员",
                      "path": "/reference/sdk/java/management/管理组织机构/search-department-members"
                    },
                    {
                      "title": "部门下添加成员",
                      "path": "/reference/sdk/java/management/管理组织机构/add-department-members"
                    },
                    {
                      "title": "部门下删除成员",
                      "path": "/reference/sdk/java/management/管理组织机构/remove-department-members"
                    },
                    {
                      "title": "获取父部门信息",
                      "path": "/reference/sdk/java/management/管理组织机构/get-parent-department"
                    },
                    {
                      "title": "判断用户是否在某个部门下",
                      "path": "/reference/sdk/java/management/管理组织机构/is-user-in-department"
                    },
                    {
                      "title": "根据部门id查询部门",
                      "path": "/reference/sdk/java/management/管理组织机构/get-department-by-id"
                    },
                    {
                      "title": "根据组织树批量创建部门",
                      "path": "/reference/sdk/java/management/管理组织机构/create-department-tree"
                    },
                    {
                      "title": "获取部门绑定的第三方同步关系",
                      "path": "/reference/sdk/java/management/管理组织机构/get-department-sync-relations"
                    },
                    {
                      "title": "删除部门同步关联关系",
                      "path": "/reference/sdk/java/management/管理组织机构/delete-department-sync-relations"
                    },
                    {
                      "title": "更新部门状态",
                      "path": "/reference/sdk/java/management/管理组织机构/update-department-status"
                    }
                  ]
                },
                {
                  "title": "管理角色",
                  "children": [
                    {
                      "title": "获取角色详情",
                      "path": "/reference/sdk/java/management/管理角色/get-role"
                    },
                    {
                      "title": "单个角色批量授权",
                      "path": "/reference/sdk/java/management/管理角色/assign-role"
                    },
                    {
                      "title": "批量分配角色",
                      "path": "/reference/sdk/java/management/管理角色/assign-role-batch"
                    },
                    {
                      "title": "移除分配的角色",
                      "path": "/reference/sdk/java/management/管理角色/revoke-role"
                    },
                    {
                      "title": "批量移除分配的角色",
                      "path": "/reference/sdk/java/management/管理角色/revoke-role-batch"
                    },
                    {
                      "title": "获取角色被授权的资源列表",
                      "path": "/reference/sdk/java/management/管理角色/get-role-authorized-resources"
                    },
                    {
                      "title": "获取角色成员列表",
                      "path": "/reference/sdk/java/management/管理角色/list-role-members"
                    },
                    {
                      "title": "获取角色的部门列表",
                      "path": "/reference/sdk/java/management/管理角色/list-role-departments"
                    },
                    {
                      "title": "创建角色",
                      "path": "/reference/sdk/java/management/管理角色/create-role"
                    },
                    {
                      "title": "获取角色列表",
                      "path": "/reference/sdk/java/management/管理角色/list-roles"
                    },
                    {
                      "title": "单个权限分组（权限空间）内删除角色",
                      "path": "/reference/sdk/java/management/管理角色/delete-roles-batch"
                    },
                    {
                      "title": "批量创建角色",
                      "path": "/reference/sdk/java/management/管理角色/create-roles-batch"
                    },
                    {
                      "title": "修改角色",
                      "path": "/reference/sdk/java/management/管理角色/update-role"
                    },
                    {
                      "title": "跨权限分组（空间）删除角色",
                      "path": "/reference/sdk/java/management/管理角色/multiple-namespace-delete-roles-batch"
                    },
                    {
                      "title": "校验角色 Code 或者名称是否可用",
                      "path": "/reference/sdk/java/management/管理角色/check-role-params"
                    },
                    {
                      "title": "获取角色授权列表",
                      "path": "/reference/sdk/java/management/管理角色/list-role-assignments"
                    },
                    {
                      "title": "创建管理员角色",
                      "path": "/reference/sdk/java/management/管理角色/create-admin-role"
                    },
                    {
                      "title": "删除管理员自定义角色",
                      "path": "/reference/sdk/java/management/管理角色/delete-admin-roles"
                    }
                  ]
                },
                {
                  "title": "管理用户分组",
                  "children": [
                    {
                      "title": "获取分组详情",
                      "path": "/reference/sdk/java/management/管理用户分组/get-group"
                    },
                    {
                      "title": "获取分组列表",
                      "path": "/reference/sdk/java/management/管理用户分组/list-groups"
                    },
                    {
                      "title": "获取所有分组",
                      "path": "/reference/sdk/java/management/管理用户分组/get-all-groups"
                    },
                    {
                      "title": "创建分组",
                      "path": "/reference/sdk/java/management/管理用户分组/create-group"
                    },
                    {
                      "title": "创建或修改分组",
                      "path": "/reference/sdk/java/management/管理用户分组/create-or-update-group"
                    },
                    {
                      "title": "批量创建分组",
                      "path": "/reference/sdk/java/management/管理用户分组/create-groups-batch"
                    },
                    {
                      "title": "修改分组",
                      "path": "/reference/sdk/java/management/管理用户分组/update-group"
                    },
                    {
                      "title": "批量删除分组",
                      "path": "/reference/sdk/java/management/管理用户分组/delete-groups-batch"
                    },
                    {
                      "title": "添加分组成员",
                      "path": "/reference/sdk/java/management/管理用户分组/add-group-members"
                    },
                    {
                      "title": "批量移除分组成员",
                      "path": "/reference/sdk/java/management/管理用户分组/remove-group-members"
                    },
                    {
                      "title": "获取分组成员列表",
                      "path": "/reference/sdk/java/management/管理用户分组/list-group-members"
                    },
                    {
                      "title": "获取分组被授权的资源列表",
                      "path": "/reference/sdk/java/management/管理用户分组/get-group-authorized-resources"
                    }
                  ]
                },
                {
                  "title": "管理自定义字段",
                  "children": [
                    {
                      "title": "获取用户内置字段列表",
                      "path": "/reference/sdk/java/management/管理自定义字段/get-user-base-fields"
                    },
                    {
                      "title": "获取用户内置字段列表",
                      "path": "/reference/sdk/java/management/管理自定义字段/list-user-base-fields"
                    },
                    {
                      "title": "修改用户内置字段配置",
                      "path": "/reference/sdk/java/management/管理自定义字段/set-user-base-fields"
                    },
                    {
                      "title": "获取自定义字段列表",
                      "path": "/reference/sdk/java/management/管理自定义字段/get-custom-fields"
                    },
                    {
                      "title": "获取自定义字段列表",
                      "path": "/reference/sdk/java/management/管理自定义字段/list-custom-fields"
                    },
                    {
                      "title": "创建/修改自定义字段定义",
                      "path": "/reference/sdk/java/management/管理自定义字段/set-custom-fields"
                    },
                    {
                      "title": "删除自定义字段定义",
                      "path": "/reference/sdk/java/management/管理自定义字段/delete-custom-fields"
                    },
                    {
                      "title": "设置自定义字段的值",
                      "path": "/reference/sdk/java/management/管理自定义字段/set-custom-data"
                    },
                    {
                      "title": "获取用户、分组、角色、组织机构的自定义字段值",
                      "path": "/reference/sdk/java/management/管理自定义字段/get-custom-data"
                    }
                  ]
                },
                {
                  "title": "管理资源与权限",
                  "children": [
                    {
                      "title": "创建资源",
                      "path": "/reference/sdk/java/management/管理资源与权限/create-resource"
                    },
                    {
                      "title": "批量创建资源",
                      "path": "/reference/sdk/java/management/管理资源与权限/create-resources-batch"
                    },
                    {
                      "title": "获取资源详情",
                      "path": "/reference/sdk/java/management/管理资源与权限/get-resource"
                    },
                    {
                      "title": "批量获取资源详情",
                      "path": "/reference/sdk/java/management/管理资源与权限/get-resources-batch"
                    },
                    {
                      "title": "分页获取常规资源列表",
                      "path": "/reference/sdk/java/management/管理资源与权限/list-common-resource"
                    },
                    {
                      "title": "分页获取资源列表",
                      "path": "/reference/sdk/java/management/管理资源与权限/list-resources"
                    },
                    {
                      "title": "修改资源",
                      "path": "/reference/sdk/java/management/管理资源与权限/update-resource"
                    },
                    {
                      "title": "删除资源",
                      "path": "/reference/sdk/java/management/管理资源与权限/delete-resource"
                    },
                    {
                      "title": "批量删除资源",
                      "path": "/reference/sdk/java/management/管理资源与权限/delete-resources-batch"
                    },
                    {
                      "title": "批量删除资源",
                      "path": "/reference/sdk/java/management/管理资源与权限/delete-common-resources-batch"
                    },
                    {
                      "title": "关联/取消关联应用资源到租户",
                      "path": "/reference/sdk/java/management/管理资源与权限/associate-tenant-resource"
                    },
                    {
                      "title": "创建权限分组",
                      "path": "/reference/sdk/java/management/管理资源与权限/create-namespace"
                    },
                    {
                      "title": "批量创建权限分组",
                      "path": "/reference/sdk/java/management/管理资源与权限/create-namespaces-batch"
                    },
                    {
                      "title": "获取权限分组详情",
                      "path": "/reference/sdk/java/management/管理资源与权限/get-namespace"
                    },
                    {
                      "title": "批量获取权限分组详情",
                      "path": "/reference/sdk/java/management/管理资源与权限/get-namespaces-batch"
                    },
                    {
                      "title": "修改权限分组信息",
                      "path": "/reference/sdk/java/management/管理资源与权限/update-namespace"
                    },
                    {
                      "title": "删除权限分组信息",
                      "path": "/reference/sdk/java/management/管理资源与权限/delete-namespace"
                    },
                    {
                      "title": "批量删除权限分组",
                      "path": "/reference/sdk/java/management/管理资源与权限/delete-namespaces-batch"
                    },
                    {
                      "title": "分页获取权限分组列表",
                      "path": "/reference/sdk/java/management/管理资源与权限/list-namespaces"
                    },
                    {
                      "title": "分页权限分组下所有的角色列表",
                      "path": "/reference/sdk/java/management/管理资源与权限/list-namespace-roles"
                    },
                    {
                      "title": "授权资源",
                      "path": "/reference/sdk/java/management/管理资源与权限/authorize-resources"
                    },
                    {
                      "title": "获取某个主体被授权的资源列表",
                      "path": "/reference/sdk/java/management/管理资源与权限/get-authorized-resources"
                    },
                    {
                      "title": "判断用户是否对某个资源的某个操作有权限",
                      "path": "/reference/sdk/java/management/管理资源与权限/is-action-allowed"
                    },
                    {
                      "title": "获取资源被授权的主体",
                      "path": "/reference/sdk/java/management/管理资源与权限/get-resource-authorized-targets"
                    }
                  ]
                },
                {
                  "title": "管理数据资源与权限",
                  "children": [
                    {
                      "title": "创建权限空间",
                      "path": "/reference/sdk/java/management/管理数据资源与权限/create-permission-namespace"
                    },
                    {
                      "title": "批量创建权限空间",
                      "path": "/reference/sdk/java/management/管理数据资源与权限/create-permission-namespaces-batch"
                    },
                    {
                      "title": "获取权限空间详情",
                      "path": "/reference/sdk/java/management/管理数据资源与权限/get-permission-namespace"
                    },
                    {
                      "title": "批量获取权限空间详情列表",
                      "path": "/reference/sdk/java/management/管理数据资源与权限/get-permission-namespaces-batch"
                    },
                    {
                      "title": "分页获取权限空间列表",
                      "path": "/reference/sdk/java/management/管理数据资源与权限/list-permission-namespaces"
                    },
                    {
                      "title": "修改权限空间",
                      "path": "/reference/sdk/java/management/管理数据资源与权限/update-permission-namespace"
                    },
                    {
                      "title": "删除权限空间",
                      "path": "/reference/sdk/java/management/管理数据资源与权限/delete-permission-namespace"
                    },
                    {
                      "title": "批量删除权限空间",
                      "path": "/reference/sdk/java/management/管理数据资源与权限/delete-permission-namespaces-batch"
                    },
                    {
                      "title": "校验权限空间 Code 或者名称是否可用",
                      "path": "/reference/sdk/java/management/管理数据资源与权限/check-permission-namespace-exists"
                    },
                    {
                      "title": "分页查询权限空间下所有的角色列表",
                      "path": "/reference/sdk/java/management/管理数据资源与权限/list-permission-namespace-roles"
                    },
                    {
                      "title": "创建数据资源（推荐、重点）",
                      "path": "/reference/sdk/java/management/管理数据资源与权限/create-data-resource"
                    },
                    {
                      "title": "创建字符串数据资源",
                      "path": "/reference/sdk/java/management/管理数据资源与权限/create-string-data-resource"
                    },
                    {
                      "title": "创建数组数据资源",
                      "path": "/reference/sdk/java/management/管理数据资源与权限/create-array-data-resource"
                    },
                    {
                      "title": "创建树数据资源",
                      "path": "/reference/sdk/java/management/管理数据资源与权限/create-tree-data-resource"
                    },
                    {
                      "title": "获取数据资源列表",
                      "path": "/reference/sdk/java/management/管理数据资源与权限/list-data-resources"
                    },
                    {
                      "title": "获取数据资源详情",
                      "path": "/reference/sdk/java/management/管理数据资源与权限/get-data-resource"
                    },
                    {
                      "title": "修改数据资源",
                      "path": "/reference/sdk/java/management/管理数据资源与权限/update-data-resource"
                    },
                    {
                      "title": "删除数据资源",
                      "path": "/reference/sdk/java/management/管理数据资源与权限/delete-data-resource"
                    },
                    {
                      "title": "检查数据资源 Code 或者名称是否可用",
                      "path": "/reference/sdk/java/management/管理数据资源与权限/check-data-resource-exists"
                    },
                    {
                      "title": "创建数据策略（重点）",
                      "path": "/reference/sdk/java/management/管理数据资源与权限/create-data-policy"
                    },
                    {
                      "title": "获取数据策略列表",
                      "path": "/reference/sdk/java/management/管理数据资源与权限/list-data-policies"
                    },
                    {
                      "title": "获取数据策略简略信息列表",
                      "path": "/reference/sdk/java/management/管理数据资源与权限/list-simple-data-policies"
                    },
                    {
                      "title": "获取数据策略详情",
                      "path": "/reference/sdk/java/management/管理数据资源与权限/get-data-policy"
                    },
                    {
                      "title": "修改数据策略",
                      "path": "/reference/sdk/java/management/管理数据资源与权限/update-data-policy"
                    },
                    {
                      "title": "删除数据策略",
                      "path": "/reference/sdk/java/management/管理数据资源与权限/delete-data-policy"
                    },
                    {
                      "title": "检查数据策略名称是否可用",
                      "path": "/reference/sdk/java/management/管理数据资源与权限/check-data-policy-exists"
                    },
                    {
                      "title": "获取数据策略授权的主体列表",
                      "path": "/reference/sdk/java/management/管理数据资源与权限/list-data-policy-targets"
                    },
                    {
                      "title": "授权数据策略",
                      "path": "/reference/sdk/java/management/管理数据资源与权限/authorize-data-policies"
                    },
                    {
                      "title": "删除数据策略授权",
                      "path": "/reference/sdk/java/management/管理数据资源与权限/revoke-data-policy"
                    },
                    {
                      "title": "获取用户权限列表",
                      "path": "/reference/sdk/java/management/管理数据资源与权限/get-user-permission-list"
                    },
                    {
                      "title": "判断用户权限（重点）",
                      "path": "/reference/sdk/java/management/管理数据资源与权限/check-permission"
                    },
                    {
                      "title": "判断外部用户权限",
                      "path": "/reference/sdk/java/management/管理数据资源与权限/check-external-user-permission"
                    },
                    {
                      "title": "获取用户拥有某些资源的权限列表（推荐）",
                      "path": "/reference/sdk/java/management/管理数据资源与权限/get-user-resource-permission-list"
                    },
                    {
                      "title": "获取拥有某些资源权限的用户列表",
                      "path": "/reference/sdk/java/management/管理数据资源与权限/list-resource-targets"
                    },
                    {
                      "title": "判断用户在树资源同层级下的权限（推荐）",
                      "path": "/reference/sdk/java/management/管理数据资源与权限/check-user-same-level-permission"
                    },
                    {
                      "title": "获取权限视图数据列表",
                      "path": "/reference/sdk/java/management/管理数据资源与权限/list-permission-view-data"
                    }
                  ]
                },
                {
                  "title": "管理应用",
                  "children": [
                    {
                      "title": "获取应用详情",
                      "path": "/reference/sdk/java/management/管理应用/get-application"
                    },
                    {
                      "title": "主体授权详情",
                      "path": "/reference/sdk/java/management/管理应用/get-subject-auth-detail"
                    },
                    {
                      "title": "主体授权列表",
                      "path": "/reference/sdk/java/management/管理应用/list-subject-auth"
                    },
                    {
                      "title": "应用授权列表",
                      "path": "/reference/sdk/java/management/管理应用/list-applications-auth"
                    },
                    {
                      "title": "更新授权开关",
                      "path": "/reference/sdk/java/management/管理应用/update-auth-enabled"
                    },
                    {
                      "path": "/reference/sdk/java/management/管理应用/batch-applications-auth"
                    },
                    {
                      "title": "获取应用列表",
                      "path": "/reference/sdk/java/management/管理应用/list-applications"
                    },
                    {
                      "title": "获取应用简单信息",
                      "path": "/reference/sdk/java/management/管理应用/get-application-simple-info"
                    },
                    {
                      "title": "获取应用简单信息列表",
                      "path": "/reference/sdk/java/management/管理应用/list-application-simple-info"
                    },
                    {
                      "title": "创建应用",
                      "path": "/reference/sdk/java/management/管理应用/create-application"
                    },
                    {
                      "title": "删除应用",
                      "path": "/reference/sdk/java/management/管理应用/delete-application"
                    },
                    {
                      "title": "获取应用密钥",
                      "path": "/reference/sdk/java/management/管理应用/get-application-secret"
                    },
                    {
                      "title": "刷新应用密钥",
                      "path": "/reference/sdk/java/management/管理应用/refresh-application-secret"
                    },
                    {
                      "title": "获取应用当前登录用户",
                      "path": "/reference/sdk/java/management/管理应用/list-application-active-users"
                    },
                    {
                      "title": "获取应用默认访问授权策略",
                      "path": "/reference/sdk/java/management/管理应用/get-application-permission-strategy"
                    },
                    {
                      "title": "更新应用默认访问授权策略",
                      "path": "/reference/sdk/java/management/管理应用/update-application-permission-strategy"
                    },
                    {
                      "title": "授权应用访问权限",
                      "path": "/reference/sdk/java/management/管理应用/authorize-application-access"
                    },
                    {
                      "title": "删除应用访问授权记录",
                      "path": "/reference/sdk/java/management/管理应用/revoke-application-access"
                    },
                    {
                      "title": "检测域名是否可用",
                      "path": "/reference/sdk/java/management/管理应用/check-domain-available"
                    },
                    {
                      "title": "获取租户应用列表",
                      "path": "/reference/sdk/java/management/管理应用/list-tenant-applications"
                    },
                    {
                      "title": "获取用户池租户配置信息",
                      "path": "/reference/sdk/java/management/管理应用/userpool-tenant-config"
                    },
                    {
                      "title": "更新租户控制台扫码登录状态",
                      "path": "/reference/sdk/java/management/管理应用/update-userpool-tenant-appqrcode-state"
                    },
                    {
                      "title": "设置用户池多租户身份源连接",
                      "path": "/reference/sdk/java/management/管理应用/change-userpool-tenant-ext-idp-conn-state"
                    },
                    {
                      "title": "修改应用多因素认证配置",
                      "path": "/reference/sdk/java/management/管理应用/update-application-mfa-settings"
                    },
                    {
                      "title": "获取应用下用户 MFA 触发数据",
                      "path": "/reference/sdk/java/management/管理应用/get-mfa-trigger-data"
                    },
                    {
                      "title": "创建 ASA 账号",
                      "path": "/reference/sdk/java/management/管理应用/create-asa-account"
                    },
                    {
                      "title": "批量创建 ASA 账号",
                      "path": "/reference/sdk/java/management/管理应用/create-asa-accounts-batch"
                    },
                    {
                      "title": "更新 ASA 账号",
                      "path": "/reference/sdk/java/management/管理应用/update-asa-account"
                    },
                    {
                      "title": "获取 ASA 账号列表",
                      "path": "/reference/sdk/java/management/管理应用/list-asa-accounts"
                    },
                    {
                      "title": "获取 ASA 账号",
                      "path": "/reference/sdk/java/management/管理应用/get-asa-account"
                    },
                    {
                      "title": "批量获取 ASA 账号",
                      "path": "/reference/sdk/java/management/管理应用/get-asa-accounts-batch"
                    },
                    {
                      "title": "删除 ASA 账号",
                      "path": "/reference/sdk/java/management/管理应用/delete-asa-account"
                    },
                    {
                      "title": "批量删除 ASA 账号",
                      "path": "/reference/sdk/java/management/管理应用/delete-asa-accounts-batch"
                    },
                    {
                      "title": "分配 ASA 账号",
                      "path": "/reference/sdk/java/management/管理应用/assign-asa-account"
                    },
                    {
                      "title": "取消分配 ASA 账号",
                      "path": "/reference/sdk/java/management/管理应用/unassign-asa-account"
                    },
                    {
                      "title": "获取 ASA 账号分配的主体列表",
                      "path": "/reference/sdk/java/management/管理应用/get-asa-account-assigned-targets"
                    },
                    {
                      "title": "获取主体被分配的 ASA 账号",
                      "path": "/reference/sdk/java/management/管理应用/get-assigned-account"
                    }
                  ]
                },
                {
                  "title": "管理身份源",
                  "children": [
                    {
                      "title": "获取身份源列表",
                      "path": "/reference/sdk/java/management/管理身份源/list-ext-idp"
                    },
                    {
                      "title": "获取身份源详情",
                      "path": "/reference/sdk/java/management/管理身份源/get-ext-idp"
                    },
                    {
                      "title": "创建身份源",
                      "path": "/reference/sdk/java/management/管理身份源/create-ext-idp"
                    },
                    {
                      "title": "更新身份源配置",
                      "path": "/reference/sdk/java/management/管理身份源/update-ext-idp"
                    },
                    {
                      "title": "删除身份源",
                      "path": "/reference/sdk/java/management/管理身份源/delete-ext-idp"
                    },
                    {
                      "title": "在某个已有身份源下创建新连接",
                      "path": "/reference/sdk/java/management/管理身份源/create-ext-idp-conn"
                    },
                    {
                      "title": "更新身份源连接",
                      "path": "/reference/sdk/java/management/管理身份源/update-ext-idp-conn"
                    },
                    {
                      "title": "删除身份源连接",
                      "path": "/reference/sdk/java/management/管理身份源/delete-ext-idp-conn"
                    },
                    {
                      "title": "身份源连接开关",
                      "path": "/reference/sdk/java/management/管理身份源/change-ext-idp-conn-state"
                    },
                    {
                      "title": "租户关联身份源",
                      "path": "/reference/sdk/java/management/管理身份源/change-ext-idp-conn-association-state"
                    },
                    {
                      "title": "租户控制台获取身份源列表",
                      "path": "/reference/sdk/java/management/管理身份源/list-tenant-ext-idp"
                    },
                    {
                      "title": "身份源下应用的连接详情",
                      "path": "/reference/sdk/java/management/管理身份源/ext-idp-conn-apps"
                    }
                  ]
                },
                {
                  "title": "管理安全配置",
                  "children": [
                    {
                      "title": "获取安全配置",
                      "path": "/reference/sdk/java/management/管理安全配置/get-security-settings"
                    },
                    {
                      "title": "修改安全配置",
                      "path": "/reference/sdk/java/management/管理安全配置/update-security-settings"
                    },
                    {
                      "title": "获取全局多因素认证配置",
                      "path": "/reference/sdk/java/management/管理安全配置/get-global-mfa-settings"
                    },
                    {
                      "title": "修改全局多因素认证配置",
                      "path": "/reference/sdk/java/management/管理安全配置/update-global-mfa-settings"
                    }
                  ]
                },
                {
                  "title": "管理注册白名单",
                  "children": [
                    {
                      "title": "创建注册白名单",
                      "path": "/reference/sdk/java/management/管理注册白名单/add-whitelist"
                    },
                    {
                      "title": "获取注册白名单列表",
                      "path": "/reference/sdk/java/management/管理注册白名单/list-whitelist"
                    },
                    {
                      "title": "删除注册白名单",
                      "path": "/reference/sdk/java/management/管理注册白名单/delete-whitelist"
                    }
                  ]
                },
                {
                  "title": "管理消息服务",
                  "children": [
                    {
                      "title": "获取邮件模版列表",
                      "path": "/reference/sdk/java/management/管理消息服务/get-email-templates"
                    },
                    {
                      "title": "修改邮件模版",
                      "path": "/reference/sdk/java/management/管理消息服务/update-email-template"
                    },
                    {
                      "title": "预览邮件模版",
                      "path": "/reference/sdk/java/management/管理消息服务/preview-email-template"
                    },
                    {
                      "title": "获取第三方邮件服务配置",
                      "path": "/reference/sdk/java/management/管理消息服务/get-email-provider"
                    },
                    {
                      "title": "配置第三方邮件服务",
                      "path": "/reference/sdk/java/management/管理消息服务/config-email-provider"
                    }
                  ]
                },
                {
                  "title": "管理同步中心",
                  "children": [
                    {
                      "title": "获取同步任务详情",
                      "path": "/reference/sdk/java/management/管理同步中心/get-sync-task"
                    },
                    {
                      "title": "获取同步任务列表",
                      "path": "/reference/sdk/java/management/管理同步中心/list-sync-tasks"
                    },
                    {
                      "title": "创建同步任务",
                      "path": "/reference/sdk/java/management/管理同步中心/create-sync-task"
                    },
                    {
                      "title": "修改同步任务",
                      "path": "/reference/sdk/java/management/管理同步中心/update-sync-task"
                    },
                    {
                      "title": "执行同步任务",
                      "path": "/reference/sdk/java/management/管理同步中心/trigger-sync-task"
                    },
                    {
                      "title": "获取同步作业详情",
                      "path": "/reference/sdk/java/management/管理同步中心/get-sync-job"
                    },
                    {
                      "title": "获取同步作业详情",
                      "path": "/reference/sdk/java/management/管理同步中心/list-sync-jobs"
                    },
                    {
                      "title": "获取同步作业详情",
                      "path": "/reference/sdk/java/management/管理同步中心/list-sync-job-logs"
                    },
                    {
                      "title": "获取同步风险操作列表",
                      "path": "/reference/sdk/java/management/管理同步中心/list-sync-risk-operations"
                    },
                    {
                      "title": "执行同步风险操作",
                      "path": "/reference/sdk/java/management/管理同步中心/trigger-sync-risk-operations"
                    },
                    {
                      "title": "取消同步风险操作",
                      "path": "/reference/sdk/java/management/管理同步中心/cancel-sync-risk-operation"
                    }
                  ]
                },
                {
                  "title": "管理事件",
                  "children": [
                    {
                      "title": "创建自定义事件应用",
                      "path": "/reference/sdk/java/management/管理事件/create-event-app"
                    },
                    {
                      "title": "获取事件应用列表",
                      "path": "/reference/sdk/java/management/管理事件/list-event-apps"
                    },
                    {
                      "title": "获取事件列表",
                      "path": "/reference/sdk/java/management/管理事件/list-events"
                    },
                    {
                      "title": "定义自定义事件",
                      "path": "/reference/sdk/java/management/管理事件/define-event"
                    },
                    {
                      "title": "推送自定义事件",
                      "path": "/reference/sdk/java/management/管理事件/pub-event"
                    },
                    {
                      "title": "认证端推送自定义事件",
                      "path": "/reference/sdk/java/management/管理事件/pub-userEvent"
                    }
                  ]
                },
                {
                  "title": "管理岗位",
                  "children": [
                    {
                      "title": "岗位列表",
                      "path": "/reference/sdk/java/management/管理岗位/list-post"
                    },
                    {
                      "title": "获取岗位",
                      "path": "/reference/sdk/java/management/管理岗位/get-post"
                    },
                    {
                      "title": "获取用户关联岗位",
                      "path": "/reference/sdk/java/management/管理岗位/get-user-posts"
                    },
                    {
                      "title": "获取用户关联岗位",
                      "path": "/reference/sdk/java/management/管理岗位/get-user-post"
                    },
                    {
                      "title": "获取岗位信息",
                      "path": "/reference/sdk/java/management/管理岗位/get-post-by-id"
                    },
                    {
                      "title": "创建岗位",
                      "path": "/reference/sdk/java/management/管理岗位/create-post"
                    },
                    {
                      "title": "更新岗位信息",
                      "path": "/reference/sdk/java/management/管理岗位/update-post"
                    },
                    {
                      "title": "删除岗位",
                      "path": "/reference/sdk/java/management/管理岗位/remove-post"
                    },
                    {
                      "title": "用户设置岗位",
                      "path": "/reference/sdk/java/management/管理岗位/set-user-posts"
                    },
                    {
                      "title": "用户关联岗位",
                      "path": "/reference/sdk/java/management/管理岗位/user-connection-post"
                    }
                  ]
                },
                {
                  "title": "管理数据对象",
                  "children": [
                    {
                      "title": "数据对象高级搜索",
                      "path": "/reference/sdk/java/management/管理数据对象/metadata-filter"
                    },
                    {
                      "title": "获取数据对象行信息",
                      "path": "/reference/sdk/java/management/管理数据对象/metadata-get-row"
                    },
                    {
                      "title": "根据属性值获取数据对象行信息",
                      "path": "/reference/sdk/java/management/管理数据对象/metadata-get-row-by-value"
                    },
                    {
                      "title": "批量获取行信息",
                      "path": "/reference/sdk/java/management/管理数据对象/-get-row-batch"
                    },
                    {
                      "title": "添加行",
                      "path": "/reference/sdk/java/management/管理数据对象/metadata-create-row"
                    },
                    {
                      "title": "更新行",
                      "path": "/reference/sdk/java/management/管理数据对象/metadata-update-row"
                    },
                    {
                      "title": "删除行",
                      "path": "/reference/sdk/java/management/管理数据对象/metadata-remove-row"
                    },
                    {
                      "title": "创建数据对象",
                      "path": "/reference/sdk/java/management/管理数据对象/metadata-create-model"
                    },
                    {
                      "title": "获取数据对象详情",
                      "path": "/reference/sdk/java/management/管理数据对象/metadata-get-model"
                    },
                    {
                      "title": "获取数据对象列表",
                      "path": "/reference/sdk/java/management/管理数据对象/metadata-list-model"
                    },
                    {
                      "title": "删除数据对象",
                      "path": "/reference/sdk/java/management/管理数据对象/metadata-remove-model"
                    },
                    {
                      "title": "更新数据对象",
                      "path": "/reference/sdk/java/management/管理数据对象/metadata-update-model"
                    },
                    {
                      "title": "创建数据对象的字段",
                      "path": "/reference/sdk/java/management/管理数据对象/metadata-create-field"
                    },
                    {
                      "title": "更新数据对象的字段",
                      "path": "/reference/sdk/java/management/管理数据对象/metadata-update-field"
                    },
                    {
                      "title": "删除数据对象的字段",
                      "path": "/reference/sdk/java/management/管理数据对象/metadata-remove-field"
                    },
                    {
                      "title": "获取数据对象字段列表",
                      "path": "/reference/sdk/java/management/管理数据对象/metadata-list-field"
                    },
                    {
                      "title": "导出全部数据",
                      "path": "/reference/sdk/java/management/管理数据对象/metadata-export"
                    },
                    {
                      "title": "导入数据",
                      "path": "/reference/sdk/java/management/管理数据对象/metadata-import"
                    },
                    {
                      "title": "获取导入模板",
                      "path": "/reference/sdk/java/management/管理数据对象/metadata-get-import-template"
                    },
                    {
                      "title": "创建自定义操作",
                      "path": "/reference/sdk/java/management/管理数据对象/metadata-create-operate"
                    },
                    {
                      "title": "移除自定义操作",
                      "path": "/reference/sdk/java/management/管理数据对象/metadata-remove-operate"
                    },
                    {
                      "title": "执行自定义操作",
                      "path": "/reference/sdk/java/management/管理数据对象/metadata-execute-operate"
                    },
                    {
                      "title": "复制自定义操作",
                      "path": "/reference/sdk/java/management/管理数据对象/metadata-copy-operate"
                    },
                    {
                      "title": "操作管理列表(分页)",
                      "path": "/reference/sdk/java/management/管理数据对象/metadata-list-operate"
                    },
                    {
                      "title": "全部操作管理列表",
                      "path": "/reference/sdk/java/management/管理数据对象/metadata-all-operate"
                    },
                    {
                      "title": "更新操作管理",
                      "path": "/reference/sdk/java/management/管理数据对象/metadata-update-operate"
                    },
                    {
                      "title": "获取关联数据详情",
                      "path": "/reference/sdk/java/management/管理数据对象/metadata-get-relation-info"
                    },
                    {
                      "title": "创建行关联数据",
                      "path": "/reference/sdk/java/management/管理数据对象/metadata-create-row-relation"
                    },
                    {
                      "title": "获取行关联数据",
                      "path": "/reference/sdk/java/management/管理数据对象/metadata-get-row-relation"
                    },
                    {
                      "title": "删除行关联数据",
                      "path": "/reference/sdk/java/management/管理数据对象/metadata-remove-row-relation"
                    }
                  ]
                },
                {
                  "title": "管理 Pipeline",
                  "children": [
                    {
                      "title": "创建 Pipeline 函数",
                      "path": "/reference/sdk/java/management/管理-pipeline/create-pipeline-function"
                    },
                    {
                      "title": "获取 Pipeline 函数详情",
                      "path": "/reference/sdk/java/management/管理-pipeline/get-pipeline-function"
                    },
                    {
                      "title": "重新上传 Pipeline 函数",
                      "path": "/reference/sdk/java/management/管理-pipeline/reupload-pipeline-function"
                    },
                    {
                      "title": "修改 Pipeline 函数",
                      "path": "/reference/sdk/java/management/管理-pipeline/update-pipeline-function"
                    },
                    {
                      "title": "修改 Pipeline 函数顺序",
                      "path": "/reference/sdk/java/management/管理-pipeline/update-pipeline-order"
                    },
                    {
                      "title": "删除 Pipeline 函数",
                      "path": "/reference/sdk/java/management/管理-pipeline/delete-pipeline-function"
                    },
                    {
                      "title": "获取 Pipeline 函数列表",
                      "path": "/reference/sdk/java/management/管理-pipeline/list-pipeline-functions"
                    },
                    {
                      "title": "获取 Pipeline 日志",
                      "path": "/reference/sdk/java/management/管理-pipeline/get-pipeline-logs"
                    }
                  ]
                },
                {
                  "title": "管理 Webhook",
                  "children": [
                    {
                      "title": "创建 Webhook",
                      "path": "/reference/sdk/java/management/管理-webhook/create-webhook"
                    },
                    {
                      "title": "获取 Webhook 列表",
                      "path": "/reference/sdk/java/management/管理-webhook/list-webhooks"
                    },
                    {
                      "title": "修改 Webhook 配置",
                      "path": "/reference/sdk/java/management/管理-webhook/update-webhook"
                    },
                    {
                      "title": "删除 Webhook",
                      "path": "/reference/sdk/java/management/管理-webhook/delete-webhook"
                    },
                    {
                      "title": "获取 Webhook 日志",
                      "path": "/reference/sdk/java/management/管理-webhook/get-webhook-logs"
                    },
                    {
                      "title": "手动触发 Webhook 执行",
                      "path": "/reference/sdk/java/management/管理-webhook/trigger-webhook"
                    },
                    {
                      "title": "获取 Webhook 详情",
                      "path": "/reference/sdk/java/management/管理-webhook/get-webhook"
                    },
                    {
                      "title": "获取 Webhook 事件列表",
                      "path": "/reference/sdk/java/management/管理-webhook/get-webhook-event-list"
                    }
                  ]
                },
                {
                  "title": "管理审计日志",
                  "children": [
                    {
                      "title": "获取用户行为日志",
                      "path": "/reference/sdk/java/management/管理审计日志/get-user-action-logs"
                    },
                    {
                      "title": "获取管理员操作日志",
                      "path": "/reference/sdk/java/management/管理审计日志/get-admin-audit-logs"
                    }
                  ]
                },
                {
                  "title": "管理计量计费",
                  "children": [
                    {
                      "title": "获取套餐详情",
                      "path": "/reference/sdk/java/management/管理计量计费/get-current-package-info"
                    },
                    {
                      "title": "获取用量详情",
                      "path": "/reference/sdk/java/management/管理计量计费/get-usage-info"
                    },
                    {
                      "title": "获取 MAU 使用记录",
                      "path": "/reference/sdk/java/management/管理计量计费/get-mau-period-usage-history"
                    },
                    {
                      "title": "获取所有权益",
                      "path": "/reference/sdk/java/management/管理计量计费/get-all-rights-items"
                    },
                    {
                      "title": "获取订单列表",
                      "path": "/reference/sdk/java/management/管理计量计费/get-orders"
                    },
                    {
                      "title": "获取订单详情",
                      "path": "/reference/sdk/java/management/管理计量计费/get-order-detail"
                    },
                    {
                      "title": "获取订单支付明细",
                      "path": "/reference/sdk/java/management/管理计量计费/get-order-pay-detail"
                    }
                  ]
                },
                {
                  "title": "管理终端设备",
                  "children": [
                    {
                      "title": "移除绑定(用户详情页)",
                      "path": "/reference/sdk/java/management/管理终端设备/delete-device-by-user"
                    },
                    {
                      "title": "挂起设备(用户详情页)",
                      "path": "/reference/sdk/java/management/管理终端设备/suspend-device-by-user"
                    },
                    {
                      "title": "停用设备(用户详情页)",
                      "path": "/reference/sdk/java/management/管理终端设备/disable-device-by-user"
                    },
                    {
                      "title": "启用设备(用户详情页)",
                      "path": "/reference/sdk/java/management/管理终端设备/enable-device-by-user"
                    },
                    {
                      "title": "获取设备状态",
                      "path": "/reference/sdk/java/management/管理终端设备/device-status"
                    },
                    {
                      "title": "移除设备",
                      "path": "/reference/sdk/java/management/管理终端设备/delete-device"
                    },
                    {
                      "title": "挂起设备",
                      "path": "/reference/sdk/java/management/管理终端设备/suspend-device"
                    },
                    {
                      "title": "停用设备",
                      "path": "/reference/sdk/java/management/管理终端设备/disable-device"
                    },
                    {
                      "title": "启用设备",
                      "path": "/reference/sdk/java/management/管理终端设备/enable-device"
                    }
                  ]
                },
                {
                  "title": "管理风险名单",
                  "children": [
                    {
                      "title": "获取 ip 列表",
                      "path": "/reference/sdk/java/management/管理风险名单/ip-list"
                    },
                    {
                      "title": "获取用户列表",
                      "path": "/reference/sdk/java/management/管理风险名单/user-list"
                    },
                    {
                      "title": "获取风险策略列表",
                      "path": "/reference/sdk/java/management/管理风险名单/risk-list-policy"
                    }
                  ]
                },
                {
                  "title": "事件",
                  "path": "/reference/sdk/java/management/events.md"
                }
              ]
            }
          ]
        },
        {
          "title": "Node.js",
          "path": "/reference/sdk/node/",
          "redirect": "/reference/sdk/node/install.html",
          "children": [
            {
              "title": "安装使用",
              "path": "/reference/sdk/node/install.md"
            },
            {
              "title": "用户认证模块",
              "children": [
                {
                  "title": "登录",
                  "children": [
                    {
                      "title": "账号密码登录",
                      "path": "/reference/sdk/node/authentication/登录/signin-by-account-password.md"
                    },
                    {
                      "title": "用户名密码登录",
                      "path": "/reference/sdk/node/authentication/登录/signin-by-username-password.md"
                    },
                    {
                      "title": "手机号密码登录",
                      "path": "/reference/sdk/node/authentication/登录/signin-by-phone-password.md"
                    },
                    {
                      "title": "邮箱密码登录",
                      "path": "/reference/sdk/node/authentication/登录/signin-by-email-password.md"
                    },
                    {
                      "title": "邮箱验证码登录",
                      "path": "/reference/sdk/node/authentication/登录/signin-by-email-passcode.md"
                    },
                    {
                      "title": "手机号验证码登录",
                      "path": "/reference/sdk/node/authentication/登录/signin-by-phone-passcode.md"
                    },
                    {
                      "title": "LDAP 账号登录",
                      "path": "/reference/sdk/node/authentication/登录/signin-by-ldap.md"
                    },
                    {
                      "title": "AD 账号登录",
                      "path": "/reference/sdk/node/authentication/登录/signin-by-ad.md"
                    },
                    {
                      "title": "生成登录地址",
                      "path": "/reference/sdk/node/authentication/登录/build-authorize-url.md"
                    },
                    {
                      "title": "使用用户凭证登录",
                      "path": "/reference/sdk/node/authentication/登录/signin"
                    },
                    {
                      "title": "使用移动端社会化登录",
                      "path": "/reference/sdk/node/authentication/登录/signin-by-mobile"
                    },
                    {
                      "title": "公共账号切换登录",
                      "path": "/reference/sdk/node/authentication/登录/switch-login-by-user"
                    },
                    {
                      "title": "获取支付宝 AuthInfo",
                      "path": "/reference/sdk/node/authentication/登录/get-alipay-authinfo"
                    },
                    {
                      "title": "生成用于登录的二维码",
                      "path": "/reference/sdk/node/authentication/登录/gene-qrcode"
                    },
                    {
                      "title": "查询二维码状态",
                      "path": "/reference/sdk/node/authentication/登录/check-qrcode-status"
                    },
                    {
                      "title": "使用二维码 ticket 换取 TokenSet",
                      "path": "/reference/sdk/node/authentication/登录/exchange-tokenset-with-qrcode-ticket"
                    },
                    {
                      "title": "自建 APP 扫码登录：APP 端修改二维码状态",
                      "path": "/reference/sdk/node/authentication/登录/change-qrcode-status"
                    },
                    {
                      "title": "推送登录",
                      "path": "/reference/sdk/node/authentication/登录/signin-by-push"
                    },
                    {
                      "title": "查询推送码状态",
                      "path": "/reference/sdk/node/authentication/登录/check-pushcode-status"
                    },
                    {
                      "title": "推送登录：APP 端修改推送码状态",
                      "path": "/reference/sdk/node/authentication/登录/change-pushcode-status"
                    },
                    {
                      "title": "获取推送登录请求关联的客户端应用",
                      "path": "/reference/sdk/node/authentication/登录/get-pushlogin-relation-apps"
                    },
                    {
                      "title": "获取快速认证二维码数据",
                      "path": "/reference/sdk/node/authentication/登录/gene-fastpass-qrcode-info"
                    },
                    {
                      "title": "获取 WebAuthn 认证请求初始化参数",
                      "path": "/reference/sdk/node/authentication/登录/webauthn-authentication"
                    }
                  ]
                },
                {
                  "title": "登出",
                  "children": [
                    {
                      "title": "前端登出",
                      "path": "/reference/sdk/node/authentication/登出/front-channel-logout.md"
                    },
                    {
                      "title": "后端登出",
                      "path": "/reference/sdk/node/authentication/登出/backend-channel-logout.md"
                    }
                  ]
                },
                {
                  "title": "管理 Token",
                  "children": [
                    {
                      "title": "获取 Token",
                      "path": "/reference/sdk/node/authentication/管理-token/get-access-token.md"
                    },
                    {
                      "title": "校验 Token",
                      "path": "/reference/sdk/node/authentication/管理-token/introspect-token.md"
                    },
                    {
                      "title": "撤销 Token",
                      "path": "/reference/sdk/node/authentication/管理-token/revoke-token.md"
                    }
                  ]
                },
                {
                  "title": "注册",
                  "children": [
                    {
                      "title": "用户名密码注册",
                      "path": "/reference/sdk/node/authentication/注册/signup-by-username-password.md"
                    },
                    {
                      "title": "邮箱密码注册",
                      "path": "/reference/sdk/node/authentication/注册/signup-by-email-password.md"
                    },
                    {
                      "title": "手机号验证码注册",
                      "path": "/reference/sdk/node/authentication/注册/signup-by-phone-passcode.md"
                    },
                    {
                      "title": "邮箱验证码注册",
                      "path": "/reference/sdk/node/authentication/注册/signup-by-email-passcode.md"
                    },
                    {
                      "title": "注册",
                      "path": "/reference/sdk/node/authentication/注册/signup"
                    }
                  ]
                },
                {
                  "title": "用户资料",
                  "children": [
                    {
                      "title": "获取用户资料",
                      "path": "/reference/sdk/node/authentication/用户资料/get-profile"
                    },
                    {
                      "title": "修改用户资料",
                      "path": "/reference/sdk/node/authentication/用户资料/update-profile"
                    },
                    {
                      "title": "绑定邮箱",
                      "path": "/reference/sdk/node/authentication/用户资料/bind-email"
                    },
                    {
                      "title": "解绑邮箱",
                      "path": "/reference/sdk/node/authentication/用户资料/unbind-email"
                    },
                    {
                      "title": "绑定手机号",
                      "path": "/reference/sdk/node/authentication/用户资料/bind-phone"
                    },
                    {
                      "title": "解绑手机号",
                      "path": "/reference/sdk/node/authentication/用户资料/unbind-phone"
                    },
                    {
                      "title": "获取密码强度和账号安全等级评分",
                      "path": "/reference/sdk/node/authentication/用户资料/get-security-info"
                    },
                    {
                      "title": "修改密码",
                      "path": "/reference/sdk/node/authentication/用户资料/update-password"
                    },
                    {
                      "title": "发起修改邮箱的验证请求",
                      "path": "/reference/sdk/node/authentication/用户资料/verify-update-email-request"
                    },
                    {
                      "title": "修改邮箱",
                      "path": "/reference/sdk/node/authentication/用户资料/update-email"
                    },
                    {
                      "title": "发起修改手机号的验证请求",
                      "path": "/reference/sdk/node/authentication/用户资料/verify-update-phone-request"
                    },
                    {
                      "title": "修改手机号",
                      "path": "/reference/sdk/node/authentication/用户资料/update-phone"
                    },
                    {
                      "title": "发起忘记密码请求",
                      "path": "/reference/sdk/node/authentication/用户资料/verify-reset-password-request"
                    },
                    {
                      "title": "忘记密码",
                      "path": "/reference/sdk/node/authentication/用户资料/reset-password"
                    },
                    {
                      "title": "发起注销账号请求",
                      "path": "/reference/sdk/node/authentication/用户资料/verify-delete-account-request"
                    },
                    {
                      "title": "注销账户",
                      "path": "/reference/sdk/node/authentication/用户资料/delete-account"
                    },
                    {
                      "title": "查询当前登录用户可切换登录的公共账号列表",
                      "path": "/reference/sdk/node/authentication/用户资料/get-user-select-login-public-accounts"
                    },
                    {
                      "title": "获取 webauthn 凭证创建初始化参数",
                      "path": "/reference/sdk/node/authentication/用户资料/webauthn-registration"
                    },
                    {
                      "title": "我的设备列表",
                      "path": "/reference/sdk/node/authentication/用户资料/mydevices-list"
                    },
                    {
                      "title": "移除设备",
                      "path": "/reference/sdk/node/authentication/用户资料/mydevices-unbind"
                    },
                    {
                      "title": "从设备上退出登录",
                      "path": "/reference/sdk/node/authentication/用户资料/mydevices-revoke-session"
                    }
                  ]
                },
                {
                  "title": "账号绑定",
                  "children": [
                    {
                      "title": "生成绑定外部身份源的链接",
                      "path": "/reference/sdk/node/authentication/账号绑定/generate-link-extidp-url"
                    },
                    {
                      "title": "解绑外部身份源",
                      "path": "/reference/sdk/node/authentication/账号绑定/unlink-extidp"
                    },
                    {
                      "title": "获取绑定的外部身份源",
                      "path": "/reference/sdk/node/authentication/账号绑定/get-identities"
                    },
                    {
                      "title": "获取应用开启的外部身份源列表",
                      "path": "/reference/sdk/node/authentication/账号绑定/get-application-enabled-extidps"
                    }
                  ]
                },
                {
                  "title": "MFA 要素管理",
                  "children": [
                    {
                      "title": "发起绑定 MFA 认证要素请求",
                      "path": "/reference/sdk/node/authentication/mfa-要素管理/send-enroll-factor-request"
                    },
                    {
                      "title": "绑定 MFA 认证要素",
                      "path": "/reference/sdk/node/authentication/mfa-要素管理/enroll-factor"
                    },
                    {
                      "title": "解绑 MFA 认证要素",
                      "path": "/reference/sdk/node/authentication/mfa-要素管理/reset-factor"
                    },
                    {
                      "title": "获取绑定的所有 MFA 认证要素",
                      "path": "/reference/sdk/node/authentication/mfa-要素管理/list-enrolled-factors"
                    },
                    {
                      "title": "获取绑定的某个 MFA 认证要素",
                      "path": "/reference/sdk/node/authentication/mfa-要素管理/get-factor"
                    },
                    {
                      "title": "获取可绑定的 MFA 认证要素",
                      "path": "/reference/sdk/node/authentication/mfa-要素管理/list-factors-to-enroll"
                    },
                    {
                      "title": "校验用户 MFA 绑定的 OTP",
                      "path": "/reference/sdk/node/authentication/mfa-要素管理/mfa-totp-verify"
                    }
                  ]
                },
                {
                  "title": "用户相关资源",
                  "children": [
                    {
                      "title": "获取登录日志",
                      "path": "/reference/sdk/node/authentication/用户相关资源/get-my-login-history"
                    },
                    {
                      "title": "获取登录应用",
                      "path": "/reference/sdk/node/authentication/用户相关资源/get-my-logged-in-apps"
                    },
                    {
                      "title": "获取具备访问权限的应用",
                      "path": "/reference/sdk/node/authentication/用户相关资源/get-my-accessible-apps"
                    },
                    {
                      "title": "获取租户列表",
                      "path": "/reference/sdk/node/authentication/用户相关资源/get-my-tenant-list"
                    },
                    {
                      "title": "获取角色列表",
                      "path": "/reference/sdk/node/authentication/用户相关资源/get-my-role-list"
                    },
                    {
                      "title": "获取分组列表",
                      "path": "/reference/sdk/node/authentication/用户相关资源/get-my-group-list"
                    },
                    {
                      "title": "获取部门列表",
                      "path": "/reference/sdk/node/authentication/用户相关资源/get-my-department-list"
                    },
                    {
                      "title": "获取被授权的资源列表",
                      "path": "/reference/sdk/node/authentication/用户相关资源/get-my-authorized-resources"
                    }
                  ]
                },
                {
                  "title": "消息服务",
                  "children": [
                    {
                      "title": "发送短信",
                      "path": "/reference/sdk/node/authentication/消息服务/send-sms"
                    },
                    {
                      "title": "发送邮件",
                      "path": "/reference/sdk/node/authentication/消息服务/send-email"
                    }
                  ]
                },
                {
                  "title": "鉴权",
                  "children": [
                    {
                      "title": "字符串类型资源鉴权",
                      "path": "/reference/sdk/node/authentication/鉴权/check-permission-string-resource"
                    },
                    {
                      "title": "数组类型资源鉴权",
                      "path": "/reference/sdk/node/authentication/鉴权/check-permission-array-resource"
                    },
                    {
                      "title": "树类型资源鉴权",
                      "path": "/reference/sdk/node/authentication/鉴权/check-permission-tree-resource"
                    },
                    {
                      "title": "获取用户在登录应用下被授权资源列表",
                      "path": "/reference/sdk/node/authentication/鉴权/get-user-auth-resource-list"
                    },
                    {
                      "title": "获取用户指定资源权限列表",
                      "path": "/reference/sdk/node/authentication/鉴权/get-user-auth-resource-permission-list"
                    }
                  ]
                },
                {
                  "title": "微信相关接口",
                  "children": [
                    {
                      "title": "解密微信小程序数据",
                      "path": "/reference/sdk/node/authentication/微信相关接口/decrypt-wechat-miniprogram-data"
                    },
                    {
                      "title": "获取微信小程序、公众号 Access Token",
                      "path": "/reference/sdk/node/authentication/微信相关接口/get-wechat-access-token"
                    },
                    {
                      "title": "获取微信小程序、公众号 Access Token",
                      "path": "/reference/sdk/node/authentication/微信相关接口/get-wechat-access-token-info"
                    }
                  ]
                },
                {
                  "title": "公开信息端点",
                  "children": [
                    {
                      "title": "获取服务器公开信息",
                      "path": "/reference/sdk/node/authentication/公开信息端点/system"
                    },
                    {
                      "title": "获取国家列表",
                      "path": "/reference/sdk/node/authentication/公开信息端点/get-country-list"
                    }
                  ]
                },
                {
                  "title": "OIDC 模块",
                  "path": "/reference/sdk/node/authentication/oidc.md"
                },
                {
                  "title": "OAuth 模块",
                  "path": "/reference/sdk/node/authentication/oauth.md"
                },
                {
                  "title": "SAML 模块",
                  "path": "/reference/sdk/node/authentication/saml.md"
                },
                {
                  "title": "CAS 模块",
                  "path": "/reference/sdk/node/authentication/cas.md"
                },
                {
                  "title": "事件",
                  "path": "/reference/sdk/node/authentication/events.md"
                }
              ]
            },
            {
              "title": "管理模块",
              "children": [
                {
                  "title": "管理用户",
                  "children": [
                    {
                      "title": "获取用户列表",
                      "path": "/reference/sdk/node/management/管理用户/list-users"
                    },
                    {
                      "title": "获取用户信息",
                      "path": "/reference/sdk/node/management/管理用户/get-user"
                    },
                    {
                      "title": "批量获取用户信息",
                      "path": "/reference/sdk/node/management/管理用户/get-user-batch"
                    },
                    {
                      "title": "创建用户",
                      "path": "/reference/sdk/node/management/管理用户/create-user"
                    },
                    {
                      "title": "批量创建用户",
                      "path": "/reference/sdk/node/management/管理用户/create-users-batch"
                    },
                    {
                      "title": "修改用户资料",
                      "path": "/reference/sdk/node/management/管理用户/update-user"
                    },
                    {
                      "title": "批量修改用户资料",
                      "path": "/reference/sdk/node/management/管理用户/update-user-batch"
                    },
                    {
                      "title": "批量删除用户",
                      "path": "/reference/sdk/node/management/管理用户/delete-users-batch"
                    },
                    {
                      "title": "获取用户的外部身份源",
                      "path": "/reference/sdk/node/management/管理用户/get-user-identities"
                    },
                    {
                      "title": "获取用户角色列表",
                      "path": "/reference/sdk/node/management/管理用户/get-user-roles"
                    },
                    {
                      "title": "获取用户实名认证信息",
                      "path": "/reference/sdk/node/management/管理用户/get-user-principal-authentication-info"
                    },
                    {
                      "title": "删除用户实名认证信息",
                      "path": "/reference/sdk/node/management/管理用户/reset-user-principal-authentication-info"
                    },
                    {
                      "title": "获取用户部门列表",
                      "path": "/reference/sdk/node/management/管理用户/get-user-departments"
                    },
                    {
                      "title": "设置用户所在部门",
                      "path": "/reference/sdk/node/management/管理用户/set-user-departments"
                    },
                    {
                      "title": "获取用户分组列表",
                      "path": "/reference/sdk/node/management/管理用户/get-user-groups"
                    },
                    {
                      "title": "获取用户 MFA 绑定信息",
                      "path": "/reference/sdk/node/management/管理用户/get-user-mfa-info"
                    },
                    {
                      "title": "获取已归档的用户列表",
                      "path": "/reference/sdk/node/management/管理用户/list-archived-users"
                    },
                    {
                      "title": "强制下线用户",
                      "path": "/reference/sdk/node/management/管理用户/kick-users"
                    },
                    {
                      "title": "判断用户是否存在",
                      "path": "/reference/sdk/node/management/管理用户/is-user-exists"
                    },
                    {
                      "title": "获取用户可访问的应用",
                      "path": "/reference/sdk/node/management/管理用户/get-user-accessible-apps"
                    },
                    {
                      "title": "获取用户授权的应用",
                      "path": "/reference/sdk/node/management/管理用户/get-user-authorized-apps"
                    },
                    {
                      "title": "判断用户是否有某个角色",
                      "path": "/reference/sdk/node/management/管理用户/has-any-role"
                    },
                    {
                      "title": "获取用户的登录历史记录",
                      "path": "/reference/sdk/node/management/管理用户/get-user-login-history"
                    },
                    {
                      "title": "获取用户曾经登录过的应用",
                      "path": "/reference/sdk/node/management/管理用户/get-user-loggedin-apps"
                    },
                    {
                      "title": "获取用户曾经登录过的身份源",
                      "path": "/reference/sdk/node/management/管理用户/get-user-logged-in-identities"
                    },
                    {
                      "title": "离职用户",
                      "path": "/reference/sdk/node/management/管理用户/resign-user"
                    },
                    {
                      "title": "批量离职用户",
                      "path": "/reference/sdk/node/management/管理用户/resign-user-batch"
                    },
                    {
                      "title": "获取用户被授权的所有资源",
                      "path": "/reference/sdk/node/management/管理用户/get-user-authorized-resources"
                    },
                    {
                      "title": "检查某个用户在应用下是否具备 Session 登录态",
                      "path": "/reference/sdk/node/management/管理用户/check-session-status"
                    },
                    {
                      "title": "导入用户的 OTP",
                      "path": "/reference/sdk/node/management/管理用户/import-otp"
                    },
                    {
                      "title": "获取用户绑定 OTP 的秘钥",
                      "path": "/reference/sdk/node/management/管理用户/get-otp-secret-by-user"
                    },
                    {
                      "title": "获取用户自定义加密的密码",
                      "path": "/reference/sdk/node/management/管理用户/get-user-password-ciphertext"
                    },
                    {
                      "title": "给用户绑定一个身份信息",
                      "path": "/reference/sdk/node/management/管理用户/link-identity"
                    },
                    {
                      "title": "解除绑定用户在身份源下的所有身份信息",
                      "path": "/reference/sdk/node/management/管理用户/unlink-identity"
                    },
                    {
                      "title": "设置用户 MFA 状态",
                      "path": "/reference/sdk/node/management/管理用户/set-mfa-status"
                    },
                    {
                      "title": "获取用户 MFA 状态",
                      "path": "/reference/sdk/node/management/管理用户/get-mfa-status"
                    },
                    {
                      "title": "获取用户绑定的第三方同步关系",
                      "path": "/reference/sdk/node/management/管理用户/get-user-sync-relations"
                    },
                    {
                      "title": "删除用户同步关联关系",
                      "path": "/reference/sdk/node/management/管理用户/delete-user-sync-relations"
                    }
                  ]
                },
                {
                  "title": "管理公共账号",
                  "children": [
                    {
                      "title": "获取/搜索公共账号列表",
                      "path": "/reference/sdk/node/management/管理公共账号/list-public-accounts"
                    },
                    {
                      "title": "获取公共账号信息",
                      "path": "/reference/sdk/node/management/管理公共账号/get-public-account"
                    },
                    {
                      "title": "批量获取公共账号信息",
                      "path": "/reference/sdk/node/management/管理公共账号/get-public-account-batch"
                    },
                    {
                      "title": "创建公共账号",
                      "path": "/reference/sdk/node/management/管理公共账号/create-public-account"
                    },
                    {
                      "title": "批量创建公共账号",
                      "path": "/reference/sdk/node/management/管理公共账号/create-public-accounts-batch"
                    },
                    {
                      "title": "修改公共账号资料",
                      "path": "/reference/sdk/node/management/管理公共账号/update-public-account"
                    },
                    {
                      "title": "批量修改公共账号资料",
                      "path": "/reference/sdk/node/management/管理公共账号/update-public-account-batch"
                    },
                    {
                      "title": "批量删除公共账号",
                      "path": "/reference/sdk/node/management/管理公共账号/delete-public-accounts-batch"
                    },
                    {
                      "title": "强制下线公共账号",
                      "path": "/reference/sdk/node/management/管理公共账号/kick-public-accounts"
                    },
                    {
                      "title": "个人账号转换为公共账号",
                      "path": "/reference/sdk/node/management/管理公共账号/transfer-into-public-account"
                    },
                    {
                      "title": "获取用户的公共账号列表",
                      "path": "/reference/sdk/node/management/管理公共账号/get-public-accounts-of-user"
                    },
                    {
                      "title": "公共账号的用户列表",
                      "path": "/reference/sdk/node/management/管理公共账号/get-users-of-public-account"
                    },
                    {
                      "title": "公共账号绑定批量用户",
                      "path": "/reference/sdk/node/management/管理公共账号/set-public-account-of-users"
                    },
                    {
                      "title": "用户绑定批量公共账号",
                      "path": "/reference/sdk/node/management/管理公共账号/set-user-of-public-accounts"
                    },
                    {
                      "title": "公共账号解绑用户",
                      "path": "/reference/sdk/node/management/管理公共账号/unbind-public-account-of-user"
                    },
                    {
                      "title": "获取公共账号的角色列表",
                      "path": "/reference/sdk/node/management/管理公共账号/get-roles-of-public-account"
                    },
                    {
                      "title": "获取角色的公共账号列表",
                      "path": "/reference/sdk/node/management/管理公共账号/get-public-accounts-of-role"
                    },
                    {
                      "title": "公共账号绑定批量角色",
                      "path": "/reference/sdk/node/management/管理公共账号/set-public-account-of-roles"
                    },
                    {
                      "title": "获取分组的公共账号列表",
                      "path": "/reference/sdk/node/management/管理公共账号/get-public-accounts-of-group"
                    },
                    {
                      "title": "获取公共账号分组列表",
                      "path": "/reference/sdk/node/management/管理公共账号/get-groups-of-public-account"
                    },
                    {
                      "title": "公共账号添加批量分组",
                      "path": "/reference/sdk/node/management/管理公共账号/set-public-account-of-groups"
                    },
                    {
                      "title": "获取部门的公共账号列表",
                      "path": "/reference/sdk/node/management/管理公共账号/get-public-accounts-of-department"
                    },
                    {
                      "title": "获取公共账号的部门列表",
                      "path": "/reference/sdk/node/management/管理公共账号/get-departments-of-public-account"
                    },
                    {
                      "title": "设置公共账号所在部门",
                      "path": "/reference/sdk/node/management/管理公共账号/set-public-account-of-departments"
                    },
                    {
                      "title": "批量离职用户",
                      "path": "/reference/sdk/node/management/管理公共账号/resign-public-account-batch"
                    },
                    {
                      "title": "获取公共账号的岗位",
                      "path": "/reference/sdk/node/management/管理公共账号/get-post-of-public-account"
                    },
                    {
                      "title": "获取岗位的公共账号列表",
                      "path": "/reference/sdk/node/management/管理公共账号/get-public-accounts-of-post"
                    },
                    {
                      "title": "设置公共账号的岗位",
                      "path": "/reference/sdk/node/management/管理公共账号/set-public-account-of-post"
                    },
                    {
                      "title": "解绑公共账号关联岗位",
                      "path": "/reference/sdk/node/management/管理公共账号/unbind-public-account-of-post"
                    }
                  ]
                },
                {
                  "title": "管理组织机构",
                  "children": [
                    {
                      "title": "获取组织机构详情",
                      "path": "/reference/sdk/node/management/管理组织机构/get-organization"
                    },
                    {
                      "title": "批量获取组织机构详情",
                      "path": "/reference/sdk/node/management/管理组织机构/get-organization-batch"
                    },
                    {
                      "title": "获取组织机构列表",
                      "path": "/reference/sdk/node/management/管理组织机构/list-organizations"
                    },
                    {
                      "title": "创建组织机构",
                      "path": "/reference/sdk/node/management/管理组织机构/create-organization"
                    },
                    {
                      "title": "修改组织机构",
                      "path": "/reference/sdk/node/management/管理组织机构/update-organization"
                    },
                    {
                      "title": "删除组织机构",
                      "path": "/reference/sdk/node/management/管理组织机构/delete-organization"
                    },
                    {
                      "title": "搜索组织机构列表",
                      "path": "/reference/sdk/node/management/管理组织机构/search-organizations"
                    },
                    {
                      "title": "更新组织机构状态",
                      "path": "/reference/sdk/node/management/管理组织机构/update-organization-status"
                    },
                    {
                      "title": "获取部门信息",
                      "path": "/reference/sdk/node/management/管理组织机构/get-department"
                    },
                    {
                      "title": "创建部门",
                      "path": "/reference/sdk/node/management/管理组织机构/create-department"
                    },
                    {
                      "title": "修改部门",
                      "path": "/reference/sdk/node/management/管理组织机构/update-department"
                    },
                    {
                      "title": "删除部门",
                      "path": "/reference/sdk/node/management/管理组织机构/delete-department"
                    },
                    {
                      "title": "搜索部门",
                      "path": "/reference/sdk/node/management/管理组织机构/search-departments"
                    },
                    {
                      "title": "搜索部门",
                      "path": "/reference/sdk/node/management/管理组织机构/search-departments-list"
                    },
                    {
                      "title": "获取子部门列表",
                      "path": "/reference/sdk/node/management/管理组织机构/list-children-departments"
                    },
                    {
                      "title": "获取所有部门列表",
                      "path": "/reference/sdk/node/management/管理组织机构/get-all-departments"
                    },
                    {
                      "title": "获取部门成员列表",
                      "path": "/reference/sdk/node/management/管理组织机构/list-department-members"
                    },
                    {
                      "title": "获取部门直属成员 ID 列表",
                      "path": "/reference/sdk/node/management/管理组织机构/list-department-member-ids"
                    },
                    {
                      "title": "搜索部门下的成员",
                      "path": "/reference/sdk/node/management/管理组织机构/search-department-members"
                    },
                    {
                      "title": "部门下添加成员",
                      "path": "/reference/sdk/node/management/管理组织机构/add-department-members"
                    },
                    {
                      "title": "部门下删除成员",
                      "path": "/reference/sdk/node/management/管理组织机构/remove-department-members"
                    },
                    {
                      "title": "获取父部门信息",
                      "path": "/reference/sdk/node/management/管理组织机构/get-parent-department"
                    },
                    {
                      "title": "判断用户是否在某个部门下",
                      "path": "/reference/sdk/node/management/管理组织机构/is-user-in-department"
                    },
                    {
                      "title": "根据部门id查询部门",
                      "path": "/reference/sdk/node/management/管理组织机构/get-department-by-id"
                    },
                    {
                      "title": "根据组织树批量创建部门",
                      "path": "/reference/sdk/node/management/管理组织机构/create-department-tree"
                    },
                    {
                      "title": "获取部门绑定的第三方同步关系",
                      "path": "/reference/sdk/node/management/管理组织机构/get-department-sync-relations"
                    },
                    {
                      "title": "删除部门同步关联关系",
                      "path": "/reference/sdk/node/management/管理组织机构/delete-department-sync-relations"
                    },
                    {
                      "title": "更新部门状态",
                      "path": "/reference/sdk/node/management/管理组织机构/update-department-status"
                    }
                  ]
                },
                {
                  "title": "管理角色",
                  "children": [
                    {
                      "title": "获取角色详情",
                      "path": "/reference/sdk/node/management/管理角色/get-role"
                    },
                    {
                      "title": "单个角色批量授权",
                      "path": "/reference/sdk/node/management/管理角色/assign-role"
                    },
                    {
                      "title": "批量分配角色",
                      "path": "/reference/sdk/node/management/管理角色/assign-role-batch"
                    },
                    {
                      "title": "移除分配的角色",
                      "path": "/reference/sdk/node/management/管理角色/revoke-role"
                    },
                    {
                      "title": "批量移除分配的角色",
                      "path": "/reference/sdk/node/management/管理角色/revoke-role-batch"
                    },
                    {
                      "title": "获取角色被授权的资源列表",
                      "path": "/reference/sdk/node/management/管理角色/get-role-authorized-resources"
                    },
                    {
                      "title": "获取角色成员列表",
                      "path": "/reference/sdk/node/management/管理角色/list-role-members"
                    },
                    {
                      "title": "获取角色的部门列表",
                      "path": "/reference/sdk/node/management/管理角色/list-role-departments"
                    },
                    {
                      "title": "创建角色",
                      "path": "/reference/sdk/node/management/管理角色/create-role"
                    },
                    {
                      "title": "获取角色列表",
                      "path": "/reference/sdk/node/management/管理角色/list-roles"
                    },
                    {
                      "title": "单个权限分组（权限空间）内删除角色",
                      "path": "/reference/sdk/node/management/管理角色/delete-roles-batch"
                    },
                    {
                      "title": "批量创建角色",
                      "path": "/reference/sdk/node/management/管理角色/create-roles-batch"
                    },
                    {
                      "title": "修改角色",
                      "path": "/reference/sdk/node/management/管理角色/update-role"
                    },
                    {
                      "title": "跨权限分组（空间）删除角色",
                      "path": "/reference/sdk/node/management/管理角色/multiple-namespace-delete-roles-batch"
                    },
                    {
                      "title": "校验角色 Code 或者名称是否可用",
                      "path": "/reference/sdk/node/management/管理角色/check-role-params"
                    },
                    {
                      "title": "获取角色授权列表",
                      "path": "/reference/sdk/node/management/管理角色/list-role-assignments"
                    },
                    {
                      "title": "创建管理员角色",
                      "path": "/reference/sdk/node/management/管理角色/create-admin-role"
                    },
                    {
                      "title": "删除管理员自定义角色",
                      "path": "/reference/sdk/node/management/管理角色/delete-admin-roles"
                    }
                  ]
                },
                {
                  "title": "管理用户分组",
                  "children": [
                    {
                      "title": "获取分组详情",
                      "path": "/reference/sdk/node/management/管理用户分组/get-group"
                    },
                    {
                      "title": "获取分组列表",
                      "path": "/reference/sdk/node/management/管理用户分组/list-groups"
                    },
                    {
                      "title": "获取所有分组",
                      "path": "/reference/sdk/node/management/管理用户分组/get-all-groups"
                    },
                    {
                      "title": "创建分组",
                      "path": "/reference/sdk/node/management/管理用户分组/create-group"
                    },
                    {
                      "title": "创建或修改分组",
                      "path": "/reference/sdk/node/management/管理用户分组/create-or-update-group"
                    },
                    {
                      "title": "批量创建分组",
                      "path": "/reference/sdk/node/management/管理用户分组/create-groups-batch"
                    },
                    {
                      "title": "修改分组",
                      "path": "/reference/sdk/node/management/管理用户分组/update-group"
                    },
                    {
                      "title": "批量删除分组",
                      "path": "/reference/sdk/node/management/管理用户分组/delete-groups-batch"
                    },
                    {
                      "title": "添加分组成员",
                      "path": "/reference/sdk/node/management/管理用户分组/add-group-members"
                    },
                    {
                      "title": "批量移除分组成员",
                      "path": "/reference/sdk/node/management/管理用户分组/remove-group-members"
                    },
                    {
                      "title": "获取分组成员列表",
                      "path": "/reference/sdk/node/management/管理用户分组/list-group-members"
                    },
                    {
                      "title": "获取分组被授权的资源列表",
                      "path": "/reference/sdk/node/management/管理用户分组/get-group-authorized-resources"
                    }
                  ]
                },
                {
                  "title": "管理自定义字段",
                  "children": [
                    {
                      "title": "获取用户内置字段列表",
                      "path": "/reference/sdk/node/management/管理自定义字段/get-user-base-fields"
                    },
                    {
                      "title": "获取用户内置字段列表",
                      "path": "/reference/sdk/node/management/管理自定义字段/list-user-base-fields"
                    },
                    {
                      "title": "修改用户内置字段配置",
                      "path": "/reference/sdk/node/management/管理自定义字段/set-user-base-fields"
                    },
                    {
                      "title": "获取自定义字段列表",
                      "path": "/reference/sdk/node/management/管理自定义字段/get-custom-fields"
                    },
                    {
                      "title": "获取自定义字段列表",
                      "path": "/reference/sdk/node/management/管理自定义字段/list-custom-fields"
                    },
                    {
                      "title": "创建/修改自定义字段定义",
                      "path": "/reference/sdk/node/management/管理自定义字段/set-custom-fields"
                    },
                    {
                      "title": "删除自定义字段定义",
                      "path": "/reference/sdk/node/management/管理自定义字段/delete-custom-fields"
                    },
                    {
                      "title": "设置自定义字段的值",
                      "path": "/reference/sdk/node/management/管理自定义字段/set-custom-data"
                    },
                    {
                      "title": "获取用户、分组、角色、组织机构的自定义字段值",
                      "path": "/reference/sdk/node/management/管理自定义字段/get-custom-data"
                    }
                  ]
                },
                {
                  "title": "管理资源与权限",
                  "children": [
                    {
                      "title": "创建资源",
                      "path": "/reference/sdk/node/management/管理资源与权限/create-resource"
                    },
                    {
                      "title": "批量创建资源",
                      "path": "/reference/sdk/node/management/管理资源与权限/create-resources-batch"
                    },
                    {
                      "title": "获取资源详情",
                      "path": "/reference/sdk/node/management/管理资源与权限/get-resource"
                    },
                    {
                      "title": "批量获取资源详情",
                      "path": "/reference/sdk/node/management/管理资源与权限/get-resources-batch"
                    },
                    {
                      "title": "分页获取常规资源列表",
                      "path": "/reference/sdk/node/management/管理资源与权限/list-common-resource"
                    },
                    {
                      "title": "分页获取资源列表",
                      "path": "/reference/sdk/node/management/管理资源与权限/list-resources"
                    },
                    {
                      "title": "修改资源",
                      "path": "/reference/sdk/node/management/管理资源与权限/update-resource"
                    },
                    {
                      "title": "删除资源",
                      "path": "/reference/sdk/node/management/管理资源与权限/delete-resource"
                    },
                    {
                      "title": "批量删除资源",
                      "path": "/reference/sdk/node/management/管理资源与权限/delete-resources-batch"
                    },
                    {
                      "title": "批量删除资源",
                      "path": "/reference/sdk/node/management/管理资源与权限/delete-common-resources-batch"
                    },
                    {
                      "title": "关联/取消关联应用资源到租户",
                      "path": "/reference/sdk/node/management/管理资源与权限/associate-tenant-resource"
                    },
                    {
                      "title": "创建权限分组",
                      "path": "/reference/sdk/node/management/管理资源与权限/create-namespace"
                    },
                    {
                      "title": "批量创建权限分组",
                      "path": "/reference/sdk/node/management/管理资源与权限/create-namespaces-batch"
                    },
                    {
                      "title": "获取权限分组详情",
                      "path": "/reference/sdk/node/management/管理资源与权限/get-namespace"
                    },
                    {
                      "title": "批量获取权限分组详情",
                      "path": "/reference/sdk/node/management/管理资源与权限/get-namespaces-batch"
                    },
                    {
                      "title": "修改权限分组信息",
                      "path": "/reference/sdk/node/management/管理资源与权限/update-namespace"
                    },
                    {
                      "title": "删除权限分组信息",
                      "path": "/reference/sdk/node/management/管理资源与权限/delete-namespace"
                    },
                    {
                      "title": "批量删除权限分组",
                      "path": "/reference/sdk/node/management/管理资源与权限/delete-namespaces-batch"
                    },
                    {
                      "title": "分页获取权限分组列表",
                      "path": "/reference/sdk/node/management/管理资源与权限/list-namespaces"
                    },
                    {
                      "title": "分页权限分组下所有的角色列表",
                      "path": "/reference/sdk/node/management/管理资源与权限/list-namespace-roles"
                    },
                    {
                      "title": "授权资源",
                      "path": "/reference/sdk/node/management/管理资源与权限/authorize-resources"
                    },
                    {
                      "title": "获取某个主体被授权的资源列表",
                      "path": "/reference/sdk/node/management/管理资源与权限/get-authorized-resources"
                    },
                    {
                      "title": "判断用户是否对某个资源的某个操作有权限",
                      "path": "/reference/sdk/node/management/管理资源与权限/is-action-allowed"
                    },
                    {
                      "title": "获取资源被授权的主体",
                      "path": "/reference/sdk/node/management/管理资源与权限/get-resource-authorized-targets"
                    }
                  ]
                },
                {
                  "title": "管理数据资源与权限",
                  "children": [
                    {
                      "title": "创建权限空间",
                      "path": "/reference/sdk/node/management/管理数据资源与权限/create-permission-namespace"
                    },
                    {
                      "title": "批量创建权限空间",
                      "path": "/reference/sdk/node/management/管理数据资源与权限/create-permission-namespaces-batch"
                    },
                    {
                      "title": "获取权限空间详情",
                      "path": "/reference/sdk/node/management/管理数据资源与权限/get-permission-namespace"
                    },
                    {
                      "title": "批量获取权限空间详情列表",
                      "path": "/reference/sdk/node/management/管理数据资源与权限/get-permission-namespaces-batch"
                    },
                    {
                      "title": "分页获取权限空间列表",
                      "path": "/reference/sdk/node/management/管理数据资源与权限/list-permission-namespaces"
                    },
                    {
                      "title": "修改权限空间",
                      "path": "/reference/sdk/node/management/管理数据资源与权限/update-permission-namespace"
                    },
                    {
                      "title": "删除权限空间",
                      "path": "/reference/sdk/node/management/管理数据资源与权限/delete-permission-namespace"
                    },
                    {
                      "title": "批量删除权限空间",
                      "path": "/reference/sdk/node/management/管理数据资源与权限/delete-permission-namespaces-batch"
                    },
                    {
                      "title": "校验权限空间 Code 或者名称是否可用",
                      "path": "/reference/sdk/node/management/管理数据资源与权限/check-permission-namespace-exists"
                    },
                    {
                      "title": "分页查询权限空间下所有的角色列表",
                      "path": "/reference/sdk/node/management/管理数据资源与权限/list-permission-namespace-roles"
                    },
                    {
                      "title": "创建数据资源（推荐、重点）",
                      "path": "/reference/sdk/node/management/管理数据资源与权限/create-data-resource"
                    },
                    {
                      "title": "创建字符串数据资源",
                      "path": "/reference/sdk/node/management/管理数据资源与权限/create-string-data-resource"
                    },
                    {
                      "title": "创建数组数据资源",
                      "path": "/reference/sdk/node/management/管理数据资源与权限/create-array-data-resource"
                    },
                    {
                      "title": "创建树数据资源",
                      "path": "/reference/sdk/node/management/管理数据资源与权限/create-tree-data-resource"
                    },
                    {
                      "title": "获取数据资源列表",
                      "path": "/reference/sdk/node/management/管理数据资源与权限/list-data-resources"
                    },
                    {
                      "title": "获取数据资源详情",
                      "path": "/reference/sdk/node/management/管理数据资源与权限/get-data-resource"
                    },
                    {
                      "title": "修改数据资源",
                      "path": "/reference/sdk/node/management/管理数据资源与权限/update-data-resource"
                    },
                    {
                      "title": "删除数据资源",
                      "path": "/reference/sdk/node/management/管理数据资源与权限/delete-data-resource"
                    },
                    {
                      "title": "检查数据资源 Code 或者名称是否可用",
                      "path": "/reference/sdk/node/management/管理数据资源与权限/check-data-resource-exists"
                    },
                    {
                      "title": "创建数据策略（重点）",
                      "path": "/reference/sdk/node/management/管理数据资源与权限/create-data-policy"
                    },
                    {
                      "title": "获取数据策略列表",
                      "path": "/reference/sdk/node/management/管理数据资源与权限/list-data-policies"
                    },
                    {
                      "title": "获取数据策略简略信息列表",
                      "path": "/reference/sdk/node/management/管理数据资源与权限/list-simple-data-policies"
                    },
                    {
                      "title": "获取数据策略详情",
                      "path": "/reference/sdk/node/management/管理数据资源与权限/get-data-policy"
                    },
                    {
                      "title": "修改数据策略",
                      "path": "/reference/sdk/node/management/管理数据资源与权限/update-data-policy"
                    },
                    {
                      "title": "删除数据策略",
                      "path": "/reference/sdk/node/management/管理数据资源与权限/delete-data-policy"
                    },
                    {
                      "title": "检查数据策略名称是否可用",
                      "path": "/reference/sdk/node/management/管理数据资源与权限/check-data-policy-exists"
                    },
                    {
                      "title": "获取数据策略授权的主体列表",
                      "path": "/reference/sdk/node/management/管理数据资源与权限/list-data-policy-targets"
                    },
                    {
                      "title": "授权数据策略",
                      "path": "/reference/sdk/node/management/管理数据资源与权限/authorize-data-policies"
                    },
                    {
                      "title": "删除数据策略授权",
                      "path": "/reference/sdk/node/management/管理数据资源与权限/revoke-data-policy"
                    },
                    {
                      "title": "获取用户权限列表",
                      "path": "/reference/sdk/node/management/管理数据资源与权限/get-user-permission-list"
                    },
                    {
                      "title": "判断用户权限（重点）",
                      "path": "/reference/sdk/node/management/管理数据资源与权限/check-permission"
                    },
                    {
                      "title": "判断外部用户权限",
                      "path": "/reference/sdk/node/management/管理数据资源与权限/check-external-user-permission"
                    },
                    {
                      "title": "获取用户拥有某些资源的权限列表（推荐）",
                      "path": "/reference/sdk/node/management/管理数据资源与权限/get-user-resource-permission-list"
                    },
                    {
                      "title": "获取拥有某些资源权限的用户列表",
                      "path": "/reference/sdk/node/management/管理数据资源与权限/list-resource-targets"
                    },
                    {
                      "title": "判断用户在树资源同层级下的权限（推荐）",
                      "path": "/reference/sdk/node/management/管理数据资源与权限/check-user-same-level-permission"
                    },
                    {
                      "title": "获取权限视图数据列表",
                      "path": "/reference/sdk/node/management/管理数据资源与权限/list-permission-view-data"
                    }
                  ]
                },
                {
                  "title": "管理应用",
                  "children": [
                    {
                      "title": "获取应用详情",
                      "path": "/reference/sdk/node/management/管理应用/get-application"
                    },
                    {
                      "title": "主体授权详情",
                      "path": "/reference/sdk/node/management/管理应用/get-subject-auth-detail"
                    },
                    {
                      "title": "主体授权列表",
                      "path": "/reference/sdk/node/management/管理应用/list-subject-auth"
                    },
                    {
                      "title": "应用授权列表",
                      "path": "/reference/sdk/node/management/管理应用/list-applications-auth"
                    },
                    {
                      "title": "更新授权开关",
                      "path": "/reference/sdk/node/management/管理应用/update-auth-enabled"
                    },
                    {
                      "path": "/reference/sdk/node/management/管理应用/batch-applications-auth"
                    },
                    {
                      "title": "获取应用列表",
                      "path": "/reference/sdk/node/management/管理应用/list-applications"
                    },
                    {
                      "title": "获取应用简单信息",
                      "path": "/reference/sdk/node/management/管理应用/get-application-simple-info"
                    },
                    {
                      "title": "获取应用简单信息列表",
                      "path": "/reference/sdk/node/management/管理应用/list-application-simple-info"
                    },
                    {
                      "title": "创建应用",
                      "path": "/reference/sdk/node/management/管理应用/create-application"
                    },
                    {
                      "title": "删除应用",
                      "path": "/reference/sdk/node/management/管理应用/delete-application"
                    },
                    {
                      "title": "获取应用密钥",
                      "path": "/reference/sdk/node/management/管理应用/get-application-secret"
                    },
                    {
                      "title": "刷新应用密钥",
                      "path": "/reference/sdk/node/management/管理应用/refresh-application-secret"
                    },
                    {
                      "title": "获取应用当前登录用户",
                      "path": "/reference/sdk/node/management/管理应用/list-application-active-users"
                    },
                    {
                      "title": "获取应用默认访问授权策略",
                      "path": "/reference/sdk/node/management/管理应用/get-application-permission-strategy"
                    },
                    {
                      "title": "更新应用默认访问授权策略",
                      "path": "/reference/sdk/node/management/管理应用/update-application-permission-strategy"
                    },
                    {
                      "title": "授权应用访问权限",
                      "path": "/reference/sdk/node/management/管理应用/authorize-application-access"
                    },
                    {
                      "title": "删除应用访问授权记录",
                      "path": "/reference/sdk/node/management/管理应用/revoke-application-access"
                    },
                    {
                      "title": "检测域名是否可用",
                      "path": "/reference/sdk/node/management/管理应用/check-domain-available"
                    },
                    {
                      "title": "获取租户应用列表",
                      "path": "/reference/sdk/node/management/管理应用/list-tenant-applications"
                    },
                    {
                      "title": "获取用户池租户配置信息",
                      "path": "/reference/sdk/node/management/管理应用/userpool-tenant-config"
                    },
                    {
                      "title": "更新租户控制台扫码登录状态",
                      "path": "/reference/sdk/node/management/管理应用/update-userpool-tenant-appqrcode-state"
                    },
                    {
                      "title": "设置用户池多租户身份源连接",
                      "path": "/reference/sdk/node/management/管理应用/change-userpool-tenant-ext-idp-conn-state"
                    },
                    {
                      "title": "修改应用多因素认证配置",
                      "path": "/reference/sdk/node/management/管理应用/update-application-mfa-settings"
                    },
                    {
                      "title": "获取应用下用户 MFA 触发数据",
                      "path": "/reference/sdk/node/management/管理应用/get-mfa-trigger-data"
                    },
                    {
                      "title": "创建 ASA 账号",
                      "path": "/reference/sdk/node/management/管理应用/create-asa-account"
                    },
                    {
                      "title": "批量创建 ASA 账号",
                      "path": "/reference/sdk/node/management/管理应用/create-asa-accounts-batch"
                    },
                    {
                      "title": "更新 ASA 账号",
                      "path": "/reference/sdk/node/management/管理应用/update-asa-account"
                    },
                    {
                      "title": "获取 ASA 账号列表",
                      "path": "/reference/sdk/node/management/管理应用/list-asa-accounts"
                    },
                    {
                      "title": "获取 ASA 账号",
                      "path": "/reference/sdk/node/management/管理应用/get-asa-account"
                    },
                    {
                      "title": "批量获取 ASA 账号",
                      "path": "/reference/sdk/node/management/管理应用/get-asa-accounts-batch"
                    },
                    {
                      "title": "删除 ASA 账号",
                      "path": "/reference/sdk/node/management/管理应用/delete-asa-account"
                    },
                    {
                      "title": "批量删除 ASA 账号",
                      "path": "/reference/sdk/node/management/管理应用/delete-asa-accounts-batch"
                    },
                    {
                      "title": "分配 ASA 账号",
                      "path": "/reference/sdk/node/management/管理应用/assign-asa-account"
                    },
                    {
                      "title": "取消分配 ASA 账号",
                      "path": "/reference/sdk/node/management/管理应用/unassign-asa-account"
                    },
                    {
                      "title": "获取 ASA 账号分配的主体列表",
                      "path": "/reference/sdk/node/management/管理应用/get-asa-account-assigned-targets"
                    },
                    {
                      "title": "获取主体被分配的 ASA 账号",
                      "path": "/reference/sdk/node/management/管理应用/get-assigned-account"
                    }
                  ]
                },
                {
                  "title": "管理身份源",
                  "children": [
                    {
                      "title": "获取身份源列表",
                      "path": "/reference/sdk/node/management/管理身份源/list-ext-idp"
                    },
                    {
                      "title": "获取身份源详情",
                      "path": "/reference/sdk/node/management/管理身份源/get-ext-idp"
                    },
                    {
                      "title": "创建身份源",
                      "path": "/reference/sdk/node/management/管理身份源/create-ext-idp"
                    },
                    {
                      "title": "更新身份源配置",
                      "path": "/reference/sdk/node/management/管理身份源/update-ext-idp"
                    },
                    {
                      "title": "删除身份源",
                      "path": "/reference/sdk/node/management/管理身份源/delete-ext-idp"
                    },
                    {
                      "title": "在某个已有身份源下创建新连接",
                      "path": "/reference/sdk/node/management/管理身份源/create-ext-idp-conn"
                    },
                    {
                      "title": "更新身份源连接",
                      "path": "/reference/sdk/node/management/管理身份源/update-ext-idp-conn"
                    },
                    {
                      "title": "删除身份源连接",
                      "path": "/reference/sdk/node/management/管理身份源/delete-ext-idp-conn"
                    },
                    {
                      "title": "身份源连接开关",
                      "path": "/reference/sdk/node/management/管理身份源/change-ext-idp-conn-state"
                    },
                    {
                      "title": "租户关联身份源",
                      "path": "/reference/sdk/node/management/管理身份源/change-ext-idp-conn-association-state"
                    },
                    {
                      "title": "租户控制台获取身份源列表",
                      "path": "/reference/sdk/node/management/管理身份源/list-tenant-ext-idp"
                    },
                    {
                      "title": "身份源下应用的连接详情",
                      "path": "/reference/sdk/node/management/管理身份源/ext-idp-conn-apps"
                    }
                  ]
                },
                {
                  "title": "管理安全配置",
                  "children": [
                    {
                      "title": "获取安全配置",
                      "path": "/reference/sdk/node/management/管理安全配置/get-security-settings"
                    },
                    {
                      "title": "修改安全配置",
                      "path": "/reference/sdk/node/management/管理安全配置/update-security-settings"
                    },
                    {
                      "title": "获取全局多因素认证配置",
                      "path": "/reference/sdk/node/management/管理安全配置/get-global-mfa-settings"
                    },
                    {
                      "title": "修改全局多因素认证配置",
                      "path": "/reference/sdk/node/management/管理安全配置/update-global-mfa-settings"
                    }
                  ]
                },
                {
                  "title": "管理注册白名单",
                  "children": [
                    {
                      "title": "创建注册白名单",
                      "path": "/reference/sdk/node/management/管理注册白名单/add-whitelist"
                    },
                    {
                      "title": "获取注册白名单列表",
                      "path": "/reference/sdk/node/management/管理注册白名单/list-whitelist"
                    },
                    {
                      "title": "删除注册白名单",
                      "path": "/reference/sdk/node/management/管理注册白名单/delete-whitelist"
                    }
                  ]
                },
                {
                  "title": "管理消息服务",
                  "children": [
                    {
                      "title": "获取邮件模版列表",
                      "path": "/reference/sdk/node/management/管理消息服务/get-email-templates"
                    },
                    {
                      "title": "修改邮件模版",
                      "path": "/reference/sdk/node/management/管理消息服务/update-email-template"
                    },
                    {
                      "title": "预览邮件模版",
                      "path": "/reference/sdk/node/management/管理消息服务/preview-email-template"
                    },
                    {
                      "title": "获取第三方邮件服务配置",
                      "path": "/reference/sdk/node/management/管理消息服务/get-email-provider"
                    },
                    {
                      "title": "配置第三方邮件服务",
                      "path": "/reference/sdk/node/management/管理消息服务/config-email-provider"
                    }
                  ]
                },
                {
                  "title": "管理同步中心",
                  "children": [
                    {
                      "title": "获取同步任务详情",
                      "path": "/reference/sdk/node/management/管理同步中心/get-sync-task"
                    },
                    {
                      "title": "获取同步任务列表",
                      "path": "/reference/sdk/node/management/管理同步中心/list-sync-tasks"
                    },
                    {
                      "title": "创建同步任务",
                      "path": "/reference/sdk/node/management/管理同步中心/create-sync-task"
                    },
                    {
                      "title": "修改同步任务",
                      "path": "/reference/sdk/node/management/管理同步中心/update-sync-task"
                    },
                    {
                      "title": "执行同步任务",
                      "path": "/reference/sdk/node/management/管理同步中心/trigger-sync-task"
                    },
                    {
                      "title": "获取同步作业详情",
                      "path": "/reference/sdk/node/management/管理同步中心/get-sync-job"
                    },
                    {
                      "title": "获取同步作业详情",
                      "path": "/reference/sdk/node/management/管理同步中心/list-sync-jobs"
                    },
                    {
                      "title": "获取同步作业详情",
                      "path": "/reference/sdk/node/management/管理同步中心/list-sync-job-logs"
                    },
                    {
                      "title": "获取同步风险操作列表",
                      "path": "/reference/sdk/node/management/管理同步中心/list-sync-risk-operations"
                    },
                    {
                      "title": "执行同步风险操作",
                      "path": "/reference/sdk/node/management/管理同步中心/trigger-sync-risk-operations"
                    },
                    {
                      "title": "取消同步风险操作",
                      "path": "/reference/sdk/node/management/管理同步中心/cancel-sync-risk-operation"
                    }
                  ]
                },
                {
                  "title": "管理事件",
                  "children": [
                    {
                      "title": "创建自定义事件应用",
                      "path": "/reference/sdk/node/management/管理事件/create-event-app"
                    },
                    {
                      "title": "获取事件应用列表",
                      "path": "/reference/sdk/node/management/管理事件/list-event-apps"
                    },
                    {
                      "title": "获取事件列表",
                      "path": "/reference/sdk/node/management/管理事件/list-events"
                    },
                    {
                      "title": "定义自定义事件",
                      "path": "/reference/sdk/node/management/管理事件/define-event"
                    },
                    {
                      "title": "推送自定义事件",
                      "path": "/reference/sdk/node/management/管理事件/pub-event"
                    },
                    {
                      "title": "认证端推送自定义事件",
                      "path": "/reference/sdk/node/management/管理事件/pub-userEvent"
                    }
                  ]
                },
                {
                  "title": "管理岗位",
                  "children": [
                    {
                      "title": "岗位列表",
                      "path": "/reference/sdk/node/management/管理岗位/list-post"
                    },
                    {
                      "title": "获取岗位",
                      "path": "/reference/sdk/node/management/管理岗位/get-post"
                    },
                    {
                      "title": "获取用户关联岗位",
                      "path": "/reference/sdk/node/management/管理岗位/get-user-posts"
                    },
                    {
                      "title": "获取用户关联岗位",
                      "path": "/reference/sdk/node/management/管理岗位/get-user-post"
                    },
                    {
                      "title": "获取岗位信息",
                      "path": "/reference/sdk/node/management/管理岗位/get-post-by-id"
                    },
                    {
                      "title": "创建岗位",
                      "path": "/reference/sdk/node/management/管理岗位/create-post"
                    },
                    {
                      "title": "更新岗位信息",
                      "path": "/reference/sdk/node/management/管理岗位/update-post"
                    },
                    {
                      "title": "删除岗位",
                      "path": "/reference/sdk/node/management/管理岗位/remove-post"
                    },
                    {
                      "title": "用户设置岗位",
                      "path": "/reference/sdk/node/management/管理岗位/set-user-posts"
                    },
                    {
                      "title": "用户关联岗位",
                      "path": "/reference/sdk/node/management/管理岗位/user-connection-post"
                    }
                  ]
                },
                {
                  "title": "管理数据对象",
                  "children": [
                    {
                      "title": "数据对象高级搜索",
                      "path": "/reference/sdk/node/management/管理数据对象/metadata-filter"
                    },
                    {
                      "title": "获取数据对象行信息",
                      "path": "/reference/sdk/node/management/管理数据对象/metadata-get-row"
                    },
                    {
                      "title": "根据属性值获取数据对象行信息",
                      "path": "/reference/sdk/node/management/管理数据对象/metadata-get-row-by-value"
                    },
                    {
                      "title": "批量获取行信息",
                      "path": "/reference/sdk/node/management/管理数据对象/-get-row-batch"
                    },
                    {
                      "title": "添加行",
                      "path": "/reference/sdk/node/management/管理数据对象/metadata-create-row"
                    },
                    {
                      "title": "更新行",
                      "path": "/reference/sdk/node/management/管理数据对象/metadata-update-row"
                    },
                    {
                      "title": "删除行",
                      "path": "/reference/sdk/node/management/管理数据对象/metadata-remove-row"
                    },
                    {
                      "title": "创建数据对象",
                      "path": "/reference/sdk/node/management/管理数据对象/metadata-create-model"
                    },
                    {
                      "title": "获取数据对象详情",
                      "path": "/reference/sdk/node/management/管理数据对象/metadata-get-model"
                    },
                    {
                      "title": "获取数据对象列表",
                      "path": "/reference/sdk/node/management/管理数据对象/metadata-list-model"
                    },
                    {
                      "title": "删除数据对象",
                      "path": "/reference/sdk/node/management/管理数据对象/metadata-remove-model"
                    },
                    {
                      "title": "更新数据对象",
                      "path": "/reference/sdk/node/management/管理数据对象/metadata-update-model"
                    },
                    {
                      "title": "创建数据对象的字段",
                      "path": "/reference/sdk/node/management/管理数据对象/metadata-create-field"
                    },
                    {
                      "title": "更新数据对象的字段",
                      "path": "/reference/sdk/node/management/管理数据对象/metadata-update-field"
                    },
                    {
                      "title": "删除数据对象的字段",
                      "path": "/reference/sdk/node/management/管理数据对象/metadata-remove-field"
                    },
                    {
                      "title": "获取数据对象字段列表",
                      "path": "/reference/sdk/node/management/管理数据对象/metadata-list-field"
                    },
                    {
                      "title": "导出全部数据",
                      "path": "/reference/sdk/node/management/管理数据对象/metadata-export"
                    },
                    {
                      "title": "导入数据",
                      "path": "/reference/sdk/node/management/管理数据对象/metadata-import"
                    },
                    {
                      "title": "获取导入模板",
                      "path": "/reference/sdk/node/management/管理数据对象/metadata-get-import-template"
                    },
                    {
                      "title": "创建自定义操作",
                      "path": "/reference/sdk/node/management/管理数据对象/metadata-create-operate"
                    },
                    {
                      "title": "移除自定义操作",
                      "path": "/reference/sdk/node/management/管理数据对象/metadata-remove-operate"
                    },
                    {
                      "title": "执行自定义操作",
                      "path": "/reference/sdk/node/management/管理数据对象/metadata-execute-operate"
                    },
                    {
                      "title": "复制自定义操作",
                      "path": "/reference/sdk/node/management/管理数据对象/metadata-copy-operate"
                    },
                    {
                      "title": "操作管理列表(分页)",
                      "path": "/reference/sdk/node/management/管理数据对象/metadata-list-operate"
                    },
                    {
                      "title": "全部操作管理列表",
                      "path": "/reference/sdk/node/management/管理数据对象/metadata-all-operate"
                    },
                    {
                      "title": "更新操作管理",
                      "path": "/reference/sdk/node/management/管理数据对象/metadata-update-operate"
                    },
                    {
                      "title": "获取关联数据详情",
                      "path": "/reference/sdk/node/management/管理数据对象/metadata-get-relation-info"
                    },
                    {
                      "title": "创建行关联数据",
                      "path": "/reference/sdk/node/management/管理数据对象/metadata-create-row-relation"
                    },
                    {
                      "title": "获取行关联数据",
                      "path": "/reference/sdk/node/management/管理数据对象/metadata-get-row-relation"
                    },
                    {
                      "title": "删除行关联数据",
                      "path": "/reference/sdk/node/management/管理数据对象/metadata-remove-row-relation"
                    }
                  ]
                },
                {
                  "title": "管理 Pipeline",
                  "children": [
                    {
                      "title": "创建 Pipeline 函数",
                      "path": "/reference/sdk/node/management/管理-pipeline/create-pipeline-function"
                    },
                    {
                      "title": "获取 Pipeline 函数详情",
                      "path": "/reference/sdk/node/management/管理-pipeline/get-pipeline-function"
                    },
                    {
                      "title": "重新上传 Pipeline 函数",
                      "path": "/reference/sdk/node/management/管理-pipeline/reupload-pipeline-function"
                    },
                    {
                      "title": "修改 Pipeline 函数",
                      "path": "/reference/sdk/node/management/管理-pipeline/update-pipeline-function"
                    },
                    {
                      "title": "修改 Pipeline 函数顺序",
                      "path": "/reference/sdk/node/management/管理-pipeline/update-pipeline-order"
                    },
                    {
                      "title": "删除 Pipeline 函数",
                      "path": "/reference/sdk/node/management/管理-pipeline/delete-pipeline-function"
                    },
                    {
                      "title": "获取 Pipeline 函数列表",
                      "path": "/reference/sdk/node/management/管理-pipeline/list-pipeline-functions"
                    },
                    {
                      "title": "获取 Pipeline 日志",
                      "path": "/reference/sdk/node/management/管理-pipeline/get-pipeline-logs"
                    }
                  ]
                },
                {
                  "title": "管理 Webhook",
                  "children": [
                    {
                      "title": "创建 Webhook",
                      "path": "/reference/sdk/node/management/管理-webhook/create-webhook"
                    },
                    {
                      "title": "获取 Webhook 列表",
                      "path": "/reference/sdk/node/management/管理-webhook/list-webhooks"
                    },
                    {
                      "title": "修改 Webhook 配置",
                      "path": "/reference/sdk/node/management/管理-webhook/update-webhook"
                    },
                    {
                      "title": "删除 Webhook",
                      "path": "/reference/sdk/node/management/管理-webhook/delete-webhook"
                    },
                    {
                      "title": "获取 Webhook 日志",
                      "path": "/reference/sdk/node/management/管理-webhook/get-webhook-logs"
                    },
                    {
                      "title": "手动触发 Webhook 执行",
                      "path": "/reference/sdk/node/management/管理-webhook/trigger-webhook"
                    },
                    {
                      "title": "获取 Webhook 详情",
                      "path": "/reference/sdk/node/management/管理-webhook/get-webhook"
                    },
                    {
                      "title": "获取 Webhook 事件列表",
                      "path": "/reference/sdk/node/management/管理-webhook/get-webhook-event-list"
                    }
                  ]
                },
                {
                  "title": "管理审计日志",
                  "children": [
                    {
                      "title": "获取用户行为日志",
                      "path": "/reference/sdk/node/management/管理审计日志/get-user-action-logs"
                    },
                    {
                      "title": "获取管理员操作日志",
                      "path": "/reference/sdk/node/management/管理审计日志/get-admin-audit-logs"
                    }
                  ]
                },
                {
                  "title": "管理计量计费",
                  "children": [
                    {
                      "title": "获取套餐详情",
                      "path": "/reference/sdk/node/management/管理计量计费/get-current-package-info"
                    },
                    {
                      "title": "获取用量详情",
                      "path": "/reference/sdk/node/management/管理计量计费/get-usage-info"
                    },
                    {
                      "title": "获取 MAU 使用记录",
                      "path": "/reference/sdk/node/management/管理计量计费/get-mau-period-usage-history"
                    },
                    {
                      "title": "获取所有权益",
                      "path": "/reference/sdk/node/management/管理计量计费/get-all-rights-items"
                    },
                    {
                      "title": "获取订单列表",
                      "path": "/reference/sdk/node/management/管理计量计费/get-orders"
                    },
                    {
                      "title": "获取订单详情",
                      "path": "/reference/sdk/node/management/管理计量计费/get-order-detail"
                    },
                    {
                      "title": "获取订单支付明细",
                      "path": "/reference/sdk/node/management/管理计量计费/get-order-pay-detail"
                    }
                  ]
                },
                {
                  "title": "管理终端设备",
                  "children": [
                    {
                      "title": "移除绑定(用户详情页)",
                      "path": "/reference/sdk/node/management/管理终端设备/delete-device-by-user"
                    },
                    {
                      "title": "挂起设备(用户详情页)",
                      "path": "/reference/sdk/node/management/管理终端设备/suspend-device-by-user"
                    },
                    {
                      "title": "停用设备(用户详情页)",
                      "path": "/reference/sdk/node/management/管理终端设备/disable-device-by-user"
                    },
                    {
                      "title": "启用设备(用户详情页)",
                      "path": "/reference/sdk/node/management/管理终端设备/enable-device-by-user"
                    },
                    {
                      "title": "获取设备状态",
                      "path": "/reference/sdk/node/management/管理终端设备/device-status"
                    },
                    {
                      "title": "移除设备",
                      "path": "/reference/sdk/node/management/管理终端设备/delete-device"
                    },
                    {
                      "title": "挂起设备",
                      "path": "/reference/sdk/node/management/管理终端设备/suspend-device"
                    },
                    {
                      "title": "停用设备",
                      "path": "/reference/sdk/node/management/管理终端设备/disable-device"
                    },
                    {
                      "title": "启用设备",
                      "path": "/reference/sdk/node/management/管理终端设备/enable-device"
                    }
                  ]
                },
                {
                  "title": "管理风险名单",
                  "children": [
                    {
                      "title": "获取 ip 列表",
                      "path": "/reference/sdk/node/management/管理风险名单/ip-list"
                    },
                    {
                      "title": "获取用户列表",
                      "path": "/reference/sdk/node/management/管理风险名单/user-list"
                    },
                    {
                      "title": "获取风险策略列表",
                      "path": "/reference/sdk/node/management/管理风险名单/risk-list-policy"
                    }
                  ]
                },
                {
                  "title": "事件",
                  "path": "/reference/sdk/node/management/events.md"
                }
              ]
            }
          ]
        },
        {
          "title": "Go",
          "path": "/reference/sdk/go/",
          "redirect": "/reference/sdk/go/install.html",
          "children": [
            {
              "title": "安装使用",
              "path": "/reference/sdk/go/install.md"
            },
            {
              "title": "用户认证模块",
              "children": [
                {
                  "title": "登录",
                  "children": [
                    {
                      "title": "账号密码登录",
                      "path": "/reference/sdk/go/authentication/登录/signin-by-account-password.md"
                    },
                    {
                      "title": "用户名密码登录",
                      "path": "/reference/sdk/go/authentication/登录/signin-by-username-password.md"
                    },
                    {
                      "title": "手机号密码登录",
                      "path": "/reference/sdk/go/authentication/登录/signin-by-phone-password.md"
                    },
                    {
                      "title": "邮箱密码登录",
                      "path": "/reference/sdk/go/authentication/登录/signin-by-email-password.md"
                    },
                    {
                      "title": "邮箱验证码登录",
                      "path": "/reference/sdk/go/authentication/登录/signin-by-email-passcode.md"
                    },
                    {
                      "title": "手机号验证码登录",
                      "path": "/reference/sdk/go/authentication/登录/signin-by-phone-passcode.md"
                    },
                    {
                      "title": "LDAP 账号登录",
                      "path": "/reference/sdk/go/authentication/登录/signin-by-ldap.md"
                    },
                    {
                      "title": "AD 账号登录",
                      "path": "/reference/sdk/go/authentication/登录/signin-by-ad.md"
                    },
                    {
                      "title": "生成登录地址",
                      "path": "/reference/sdk/go/authentication/登录/build-authorize-url.md"
                    },
                    {
                      "title": "使用用户凭证登录",
                      "path": "/reference/sdk/go/authentication/登录/signin"
                    },
                    {
                      "title": "使用移动端社会化登录",
                      "path": "/reference/sdk/go/authentication/登录/signin-by-mobile"
                    },
                    {
                      "title": "公共账号切换登录",
                      "path": "/reference/sdk/go/authentication/登录/switch-login-by-user"
                    },
                    {
                      "title": "获取支付宝 AuthInfo",
                      "path": "/reference/sdk/go/authentication/登录/get-alipay-authinfo"
                    },
                    {
                      "title": "生成用于登录的二维码",
                      "path": "/reference/sdk/go/authentication/登录/gene-qrcode"
                    },
                    {
                      "title": "查询二维码状态",
                      "path": "/reference/sdk/go/authentication/登录/check-qrcode-status"
                    },
                    {
                      "title": "使用二维码 ticket 换取 TokenSet",
                      "path": "/reference/sdk/go/authentication/登录/exchange-tokenset-with-qrcode-ticket"
                    },
                    {
                      "title": "自建 APP 扫码登录：APP 端修改二维码状态",
                      "path": "/reference/sdk/go/authentication/登录/change-qrcode-status"
                    },
                    {
                      "title": "推送登录",
                      "path": "/reference/sdk/go/authentication/登录/signin-by-push"
                    },
                    {
                      "title": "查询推送码状态",
                      "path": "/reference/sdk/go/authentication/登录/check-pushcode-status"
                    },
                    {
                      "title": "推送登录：APP 端修改推送码状态",
                      "path": "/reference/sdk/go/authentication/登录/change-pushcode-status"
                    },
                    {
                      "title": "获取推送登录请求关联的客户端应用",
                      "path": "/reference/sdk/go/authentication/登录/get-pushlogin-relation-apps"
                    },
                    {
                      "title": "获取快速认证二维码数据",
                      "path": "/reference/sdk/go/authentication/登录/gene-fastpass-qrcode-info"
                    },
                    {
                      "title": "获取 WebAuthn 认证请求初始化参数",
                      "path": "/reference/sdk/go/authentication/登录/webauthn-authentication"
                    }
                  ]
                },
                {
                  "title": "登出",
                  "children": [
                    {
                      "title": "前端登出",
                      "path": "/reference/sdk/go/authentication/登出/front-channel-logout.md"
                    },
                    {
                      "title": "后端登出",
                      "path": "/reference/sdk/go/authentication/登出/backend-channel-logout.md"
                    }
                  ]
                },
                {
                  "title": "管理 Token",
                  "children": [
                    {
                      "title": "获取 Token",
                      "path": "/reference/sdk/go/authentication/管理-token/get-access-token.md"
                    },
                    {
                      "title": "校验 Token",
                      "path": "/reference/sdk/go/authentication/管理-token/introspect-token.md"
                    },
                    {
                      "title": "撤销 Token",
                      "path": "/reference/sdk/go/authentication/管理-token/revoke-token.md"
                    }
                  ]
                },
                {
                  "title": "注册",
                  "children": [
                    {
                      "title": "用户名密码注册",
                      "path": "/reference/sdk/go/authentication/注册/signup-by-username-password.md"
                    },
                    {
                      "title": "邮箱密码注册",
                      "path": "/reference/sdk/go/authentication/注册/signup-by-email-password.md"
                    },
                    {
                      "title": "手机号验证码注册",
                      "path": "/reference/sdk/go/authentication/注册/signup-by-phone-passcode.md"
                    },
                    {
                      "title": "邮箱验证码注册",
                      "path": "/reference/sdk/go/authentication/注册/signup-by-email-passcode.md"
                    },
                    {
                      "title": "注册",
                      "path": "/reference/sdk/go/authentication/注册/signup"
                    }
                  ]
                },
                {
                  "title": "用户资料",
                  "children": [
                    {
                      "title": "获取用户资料",
                      "path": "/reference/sdk/go/authentication/用户资料/get-profile"
                    },
                    {
                      "title": "修改用户资料",
                      "path": "/reference/sdk/go/authentication/用户资料/update-profile"
                    },
                    {
                      "title": "绑定邮箱",
                      "path": "/reference/sdk/go/authentication/用户资料/bind-email"
                    },
                    {
                      "title": "解绑邮箱",
                      "path": "/reference/sdk/go/authentication/用户资料/unbind-email"
                    },
                    {
                      "title": "绑定手机号",
                      "path": "/reference/sdk/go/authentication/用户资料/bind-phone"
                    },
                    {
                      "title": "解绑手机号",
                      "path": "/reference/sdk/go/authentication/用户资料/unbind-phone"
                    },
                    {
                      "title": "获取密码强度和账号安全等级评分",
                      "path": "/reference/sdk/go/authentication/用户资料/get-security-info"
                    },
                    {
                      "title": "修改密码",
                      "path": "/reference/sdk/go/authentication/用户资料/update-password"
                    },
                    {
                      "title": "发起修改邮箱的验证请求",
                      "path": "/reference/sdk/go/authentication/用户资料/verify-update-email-request"
                    },
                    {
                      "title": "修改邮箱",
                      "path": "/reference/sdk/go/authentication/用户资料/update-email"
                    },
                    {
                      "title": "发起修改手机号的验证请求",
                      "path": "/reference/sdk/go/authentication/用户资料/verify-update-phone-request"
                    },
                    {
                      "title": "修改手机号",
                      "path": "/reference/sdk/go/authentication/用户资料/update-phone"
                    },
                    {
                      "title": "发起忘记密码请求",
                      "path": "/reference/sdk/go/authentication/用户资料/verify-reset-password-request"
                    },
                    {
                      "title": "忘记密码",
                      "path": "/reference/sdk/go/authentication/用户资料/reset-password"
                    },
                    {
                      "title": "发起注销账号请求",
                      "path": "/reference/sdk/go/authentication/用户资料/verify-delete-account-request"
                    },
                    {
                      "title": "注销账户",
                      "path": "/reference/sdk/go/authentication/用户资料/delete-account"
                    },
                    {
                      "title": "查询当前登录用户可切换登录的公共账号列表",
                      "path": "/reference/sdk/go/authentication/用户资料/get-user-select-login-public-accounts"
                    },
                    {
                      "title": "获取 webauthn 凭证创建初始化参数",
                      "path": "/reference/sdk/go/authentication/用户资料/webauthn-registration"
                    },
                    {
                      "title": "我的设备列表",
                      "path": "/reference/sdk/go/authentication/用户资料/mydevices-list"
                    },
                    {
                      "title": "移除设备",
                      "path": "/reference/sdk/go/authentication/用户资料/mydevices-unbind"
                    },
                    {
                      "title": "从设备上退出登录",
                      "path": "/reference/sdk/go/authentication/用户资料/mydevices-revoke-session"
                    }
                  ]
                },
                {
                  "title": "账号绑定",
                  "children": [
                    {
                      "title": "生成绑定外部身份源的链接",
                      "path": "/reference/sdk/go/authentication/账号绑定/generate-link-extidp-url"
                    },
                    {
                      "title": "解绑外部身份源",
                      "path": "/reference/sdk/go/authentication/账号绑定/unlink-extidp"
                    },
                    {
                      "title": "获取绑定的外部身份源",
                      "path": "/reference/sdk/go/authentication/账号绑定/get-identities"
                    },
                    {
                      "title": "获取应用开启的外部身份源列表",
                      "path": "/reference/sdk/go/authentication/账号绑定/get-application-enabled-extidps"
                    }
                  ]
                },
                {
                  "title": "MFA 要素管理",
                  "children": [
                    {
                      "title": "发起绑定 MFA 认证要素请求",
                      "path": "/reference/sdk/go/authentication/mfa-要素管理/send-enroll-factor-request"
                    },
                    {
                      "title": "绑定 MFA 认证要素",
                      "path": "/reference/sdk/go/authentication/mfa-要素管理/enroll-factor"
                    },
                    {
                      "title": "解绑 MFA 认证要素",
                      "path": "/reference/sdk/go/authentication/mfa-要素管理/reset-factor"
                    },
                    {
                      "title": "获取绑定的所有 MFA 认证要素",
                      "path": "/reference/sdk/go/authentication/mfa-要素管理/list-enrolled-factors"
                    },
                    {
                      "title": "获取绑定的某个 MFA 认证要素",
                      "path": "/reference/sdk/go/authentication/mfa-要素管理/get-factor"
                    },
                    {
                      "title": "获取可绑定的 MFA 认证要素",
                      "path": "/reference/sdk/go/authentication/mfa-要素管理/list-factors-to-enroll"
                    },
                    {
                      "title": "校验用户 MFA 绑定的 OTP",
                      "path": "/reference/sdk/go/authentication/mfa-要素管理/mfa-totp-verify"
                    }
                  ]
                },
                {
                  "title": "用户相关资源",
                  "children": [
                    {
                      "title": "获取登录日志",
                      "path": "/reference/sdk/go/authentication/用户相关资源/get-my-login-history"
                    },
                    {
                      "title": "获取登录应用",
                      "path": "/reference/sdk/go/authentication/用户相关资源/get-my-logged-in-apps"
                    },
                    {
                      "title": "获取具备访问权限的应用",
                      "path": "/reference/sdk/go/authentication/用户相关资源/get-my-accessible-apps"
                    },
                    {
                      "title": "获取租户列表",
                      "path": "/reference/sdk/go/authentication/用户相关资源/get-my-tenant-list"
                    },
                    {
                      "title": "获取角色列表",
                      "path": "/reference/sdk/go/authentication/用户相关资源/get-my-role-list"
                    },
                    {
                      "title": "获取分组列表",
                      "path": "/reference/sdk/go/authentication/用户相关资源/get-my-group-list"
                    },
                    {
                      "title": "获取部门列表",
                      "path": "/reference/sdk/go/authentication/用户相关资源/get-my-department-list"
                    },
                    {
                      "title": "获取被授权的资源列表",
                      "path": "/reference/sdk/go/authentication/用户相关资源/get-my-authorized-resources"
                    }
                  ]
                },
                {
                  "title": "消息服务",
                  "children": [
                    {
                      "title": "发送短信",
                      "path": "/reference/sdk/go/authentication/消息服务/send-sms"
                    },
                    {
                      "title": "发送邮件",
                      "path": "/reference/sdk/go/authentication/消息服务/send-email"
                    }
                  ]
                },
                {
                  "title": "鉴权",
                  "children": [
                    {
                      "title": "字符串类型资源鉴权",
                      "path": "/reference/sdk/go/authentication/鉴权/check-permission-string-resource"
                    },
                    {
                      "title": "数组类型资源鉴权",
                      "path": "/reference/sdk/go/authentication/鉴权/check-permission-array-resource"
                    },
                    {
                      "title": "树类型资源鉴权",
                      "path": "/reference/sdk/go/authentication/鉴权/check-permission-tree-resource"
                    },
                    {
                      "title": "获取用户在登录应用下被授权资源列表",
                      "path": "/reference/sdk/go/authentication/鉴权/get-user-auth-resource-list"
                    },
                    {
                      "title": "获取用户指定资源权限列表",
                      "path": "/reference/sdk/go/authentication/鉴权/get-user-auth-resource-permission-list"
                    }
                  ]
                },
                {
                  "title": "微信相关接口",
                  "children": [
                    {
                      "title": "解密微信小程序数据",
                      "path": "/reference/sdk/go/authentication/微信相关接口/decrypt-wechat-miniprogram-data"
                    },
                    {
                      "title": "获取微信小程序、公众号 Access Token",
                      "path": "/reference/sdk/go/authentication/微信相关接口/get-wechat-access-token"
                    },
                    {
                      "title": "获取微信小程序、公众号 Access Token",
                      "path": "/reference/sdk/go/authentication/微信相关接口/get-wechat-access-token-info"
                    }
                  ]
                },
                {
                  "title": "公开信息端点",
                  "children": [
                    {
                      "title": "获取服务器公开信息",
                      "path": "/reference/sdk/go/authentication/公开信息端点/system"
                    },
                    {
                      "title": "获取国家列表",
                      "path": "/reference/sdk/go/authentication/公开信息端点/get-country-list"
                    }
                  ]
                },
                {
                  "title": "OIDC 模块",
                  "path": "/reference/sdk/go/authentication/oidc.md"
                },
                {
                  "title": "OAuth 模块",
                  "path": "/reference/sdk/go/authentication/oauth.md"
                },
                {
                  "title": "SAML 模块",
                  "path": "/reference/sdk/go/authentication/saml.md"
                },
                {
                  "title": "CAS 模块",
                  "path": "/reference/sdk/go/authentication/cas.md"
                },
                {
                  "title": "事件",
                  "path": "/reference/sdk/go/authentication/events.md"
                }
              ]
            },
            {
              "title": "管理模块",
              "children": [
                {
                  "title": "管理用户",
                  "children": [
                    {
                      "title": "获取用户列表",
                      "path": "/reference/sdk/go/management/管理用户/list-users"
                    },
                    {
                      "title": "获取用户信息",
                      "path": "/reference/sdk/go/management/管理用户/get-user"
                    },
                    {
                      "title": "批量获取用户信息",
                      "path": "/reference/sdk/go/management/管理用户/get-user-batch"
                    },
                    {
                      "title": "创建用户",
                      "path": "/reference/sdk/go/management/管理用户/create-user"
                    },
                    {
                      "title": "批量创建用户",
                      "path": "/reference/sdk/go/management/管理用户/create-users-batch"
                    },
                    {
                      "title": "修改用户资料",
                      "path": "/reference/sdk/go/management/管理用户/update-user"
                    },
                    {
                      "title": "批量修改用户资料",
                      "path": "/reference/sdk/go/management/管理用户/update-user-batch"
                    },
                    {
                      "title": "批量删除用户",
                      "path": "/reference/sdk/go/management/管理用户/delete-users-batch"
                    },
                    {
                      "title": "获取用户的外部身份源",
                      "path": "/reference/sdk/go/management/管理用户/get-user-identities"
                    },
                    {
                      "title": "获取用户角色列表",
                      "path": "/reference/sdk/go/management/管理用户/get-user-roles"
                    },
                    {
                      "title": "获取用户实名认证信息",
                      "path": "/reference/sdk/go/management/管理用户/get-user-principal-authentication-info"
                    },
                    {
                      "title": "删除用户实名认证信息",
                      "path": "/reference/sdk/go/management/管理用户/reset-user-principal-authentication-info"
                    },
                    {
                      "title": "获取用户部门列表",
                      "path": "/reference/sdk/go/management/管理用户/get-user-departments"
                    },
                    {
                      "title": "设置用户所在部门",
                      "path": "/reference/sdk/go/management/管理用户/set-user-departments"
                    },
                    {
                      "title": "获取用户分组列表",
                      "path": "/reference/sdk/go/management/管理用户/get-user-groups"
                    },
                    {
                      "title": "获取用户 MFA 绑定信息",
                      "path": "/reference/sdk/go/management/管理用户/get-user-mfa-info"
                    },
                    {
                      "title": "获取已归档的用户列表",
                      "path": "/reference/sdk/go/management/管理用户/list-archived-users"
                    },
                    {
                      "title": "强制下线用户",
                      "path": "/reference/sdk/go/management/管理用户/kick-users"
                    },
                    {
                      "title": "判断用户是否存在",
                      "path": "/reference/sdk/go/management/管理用户/is-user-exists"
                    },
                    {
                      "title": "获取用户可访问的应用",
                      "path": "/reference/sdk/go/management/管理用户/get-user-accessible-apps"
                    },
                    {
                      "title": "获取用户授权的应用",
                      "path": "/reference/sdk/go/management/管理用户/get-user-authorized-apps"
                    },
                    {
                      "title": "判断用户是否有某个角色",
                      "path": "/reference/sdk/go/management/管理用户/has-any-role"
                    },
                    {
                      "title": "获取用户的登录历史记录",
                      "path": "/reference/sdk/go/management/管理用户/get-user-login-history"
                    },
                    {
                      "title": "获取用户曾经登录过的应用",
                      "path": "/reference/sdk/go/management/管理用户/get-user-loggedin-apps"
                    },
                    {
                      "title": "获取用户曾经登录过的身份源",
                      "path": "/reference/sdk/go/management/管理用户/get-user-logged-in-identities"
                    },
                    {
                      "title": "离职用户",
                      "path": "/reference/sdk/go/management/管理用户/resign-user"
                    },
                    {
                      "title": "批量离职用户",
                      "path": "/reference/sdk/go/management/管理用户/resign-user-batch"
                    },
                    {
                      "title": "获取用户被授权的所有资源",
                      "path": "/reference/sdk/go/management/管理用户/get-user-authorized-resources"
                    },
                    {
                      "title": "检查某个用户在应用下是否具备 Session 登录态",
                      "path": "/reference/sdk/go/management/管理用户/check-session-status"
                    },
                    {
                      "title": "导入用户的 OTP",
                      "path": "/reference/sdk/go/management/管理用户/import-otp"
                    },
                    {
                      "title": "获取用户绑定 OTP 的秘钥",
                      "path": "/reference/sdk/go/management/管理用户/get-otp-secret-by-user"
                    },
                    {
                      "title": "获取用户自定义加密的密码",
                      "path": "/reference/sdk/go/management/管理用户/get-user-password-ciphertext"
                    },
                    {
                      "title": "给用户绑定一个身份信息",
                      "path": "/reference/sdk/go/management/管理用户/link-identity"
                    },
                    {
                      "title": "解除绑定用户在身份源下的所有身份信息",
                      "path": "/reference/sdk/go/management/管理用户/unlink-identity"
                    },
                    {
                      "title": "设置用户 MFA 状态",
                      "path": "/reference/sdk/go/management/管理用户/set-mfa-status"
                    },
                    {
                      "title": "获取用户 MFA 状态",
                      "path": "/reference/sdk/go/management/管理用户/get-mfa-status"
                    },
                    {
                      "title": "获取用户绑定的第三方同步关系",
                      "path": "/reference/sdk/go/management/管理用户/get-user-sync-relations"
                    },
                    {
                      "title": "删除用户同步关联关系",
                      "path": "/reference/sdk/go/management/管理用户/delete-user-sync-relations"
                    }
                  ]
                },
                {
                  "title": "管理公共账号",
                  "children": [
                    {
                      "title": "获取/搜索公共账号列表",
                      "path": "/reference/sdk/go/management/管理公共账号/list-public-accounts"
                    },
                    {
                      "title": "获取公共账号信息",
                      "path": "/reference/sdk/go/management/管理公共账号/get-public-account"
                    },
                    {
                      "title": "批量获取公共账号信息",
                      "path": "/reference/sdk/go/management/管理公共账号/get-public-account-batch"
                    },
                    {
                      "title": "创建公共账号",
                      "path": "/reference/sdk/go/management/管理公共账号/create-public-account"
                    },
                    {
                      "title": "批量创建公共账号",
                      "path": "/reference/sdk/go/management/管理公共账号/create-public-accounts-batch"
                    },
                    {
                      "title": "修改公共账号资料",
                      "path": "/reference/sdk/go/management/管理公共账号/update-public-account"
                    },
                    {
                      "title": "批量修改公共账号资料",
                      "path": "/reference/sdk/go/management/管理公共账号/update-public-account-batch"
                    },
                    {
                      "title": "批量删除公共账号",
                      "path": "/reference/sdk/go/management/管理公共账号/delete-public-accounts-batch"
                    },
                    {
                      "title": "强制下线公共账号",
                      "path": "/reference/sdk/go/management/管理公共账号/kick-public-accounts"
                    },
                    {
                      "title": "个人账号转换为公共账号",
                      "path": "/reference/sdk/go/management/管理公共账号/transfer-into-public-account"
                    },
                    {
                      "title": "获取用户的公共账号列表",
                      "path": "/reference/sdk/go/management/管理公共账号/get-public-accounts-of-user"
                    },
                    {
                      "title": "公共账号的用户列表",
                      "path": "/reference/sdk/go/management/管理公共账号/get-users-of-public-account"
                    },
                    {
                      "title": "公共账号绑定批量用户",
                      "path": "/reference/sdk/go/management/管理公共账号/set-public-account-of-users"
                    },
                    {
                      "title": "用户绑定批量公共账号",
                      "path": "/reference/sdk/go/management/管理公共账号/set-user-of-public-accounts"
                    },
                    {
                      "title": "公共账号解绑用户",
                      "path": "/reference/sdk/go/management/管理公共账号/unbind-public-account-of-user"
                    },
                    {
                      "title": "获取公共账号的角色列表",
                      "path": "/reference/sdk/go/management/管理公共账号/get-roles-of-public-account"
                    },
                    {
                      "title": "获取角色的公共账号列表",
                      "path": "/reference/sdk/go/management/管理公共账号/get-public-accounts-of-role"
                    },
                    {
                      "title": "公共账号绑定批量角色",
                      "path": "/reference/sdk/go/management/管理公共账号/set-public-account-of-roles"
                    },
                    {
                      "title": "获取分组的公共账号列表",
                      "path": "/reference/sdk/go/management/管理公共账号/get-public-accounts-of-group"
                    },
                    {
                      "title": "获取公共账号分组列表",
                      "path": "/reference/sdk/go/management/管理公共账号/get-groups-of-public-account"
                    },
                    {
                      "title": "公共账号添加批量分组",
                      "path": "/reference/sdk/go/management/管理公共账号/set-public-account-of-groups"
                    },
                    {
                      "title": "获取部门的公共账号列表",
                      "path": "/reference/sdk/go/management/管理公共账号/get-public-accounts-of-department"
                    },
                    {
                      "title": "获取公共账号的部门列表",
                      "path": "/reference/sdk/go/management/管理公共账号/get-departments-of-public-account"
                    },
                    {
                      "title": "设置公共账号所在部门",
                      "path": "/reference/sdk/go/management/管理公共账号/set-public-account-of-departments"
                    },
                    {
                      "title": "批量离职用户",
                      "path": "/reference/sdk/go/management/管理公共账号/resign-public-account-batch"
                    },
                    {
                      "title": "获取公共账号的岗位",
                      "path": "/reference/sdk/go/management/管理公共账号/get-post-of-public-account"
                    },
                    {
                      "title": "获取岗位的公共账号列表",
                      "path": "/reference/sdk/go/management/管理公共账号/get-public-accounts-of-post"
                    },
                    {
                      "title": "设置公共账号的岗位",
                      "path": "/reference/sdk/go/management/管理公共账号/set-public-account-of-post"
                    },
                    {
                      "title": "解绑公共账号关联岗位",
                      "path": "/reference/sdk/go/management/管理公共账号/unbind-public-account-of-post"
                    }
                  ]
                },
                {
                  "title": "管理组织机构",
                  "children": [
                    {
                      "title": "获取组织机构详情",
                      "path": "/reference/sdk/go/management/管理组织机构/get-organization"
                    },
                    {
                      "title": "批量获取组织机构详情",
                      "path": "/reference/sdk/go/management/管理组织机构/get-organization-batch"
                    },
                    {
                      "title": "获取组织机构列表",
                      "path": "/reference/sdk/go/management/管理组织机构/list-organizations"
                    },
                    {
                      "title": "创建组织机构",
                      "path": "/reference/sdk/go/management/管理组织机构/create-organization"
                    },
                    {
                      "title": "修改组织机构",
                      "path": "/reference/sdk/go/management/管理组织机构/update-organization"
                    },
                    {
                      "title": "删除组织机构",
                      "path": "/reference/sdk/go/management/管理组织机构/delete-organization"
                    },
                    {
                      "title": "搜索组织机构列表",
                      "path": "/reference/sdk/go/management/管理组织机构/search-organizations"
                    },
                    {
                      "title": "更新组织机构状态",
                      "path": "/reference/sdk/go/management/管理组织机构/update-organization-status"
                    },
                    {
                      "title": "获取部门信息",
                      "path": "/reference/sdk/go/management/管理组织机构/get-department"
                    },
                    {
                      "title": "创建部门",
                      "path": "/reference/sdk/go/management/管理组织机构/create-department"
                    },
                    {
                      "title": "修改部门",
                      "path": "/reference/sdk/go/management/管理组织机构/update-department"
                    },
                    {
                      "title": "删除部门",
                      "path": "/reference/sdk/go/management/管理组织机构/delete-department"
                    },
                    {
                      "title": "搜索部门",
                      "path": "/reference/sdk/go/management/管理组织机构/search-departments"
                    },
                    {
                      "title": "搜索部门",
                      "path": "/reference/sdk/go/management/管理组织机构/search-departments-list"
                    },
                    {
                      "title": "获取子部门列表",
                      "path": "/reference/sdk/go/management/管理组织机构/list-children-departments"
                    },
                    {
                      "title": "获取所有部门列表",
                      "path": "/reference/sdk/go/management/管理组织机构/get-all-departments"
                    },
                    {
                      "title": "获取部门成员列表",
                      "path": "/reference/sdk/go/management/管理组织机构/list-department-members"
                    },
                    {
                      "title": "获取部门直属成员 ID 列表",
                      "path": "/reference/sdk/go/management/管理组织机构/list-department-member-ids"
                    },
                    {
                      "title": "搜索部门下的成员",
                      "path": "/reference/sdk/go/management/管理组织机构/search-department-members"
                    },
                    {
                      "title": "部门下添加成员",
                      "path": "/reference/sdk/go/management/管理组织机构/add-department-members"
                    },
                    {
                      "title": "部门下删除成员",
                      "path": "/reference/sdk/go/management/管理组织机构/remove-department-members"
                    },
                    {
                      "title": "获取父部门信息",
                      "path": "/reference/sdk/go/management/管理组织机构/get-parent-department"
                    },
                    {
                      "title": "判断用户是否在某个部门下",
                      "path": "/reference/sdk/go/management/管理组织机构/is-user-in-department"
                    },
                    {
                      "title": "根据部门id查询部门",
                      "path": "/reference/sdk/go/management/管理组织机构/get-department-by-id"
                    },
                    {
                      "title": "根据组织树批量创建部门",
                      "path": "/reference/sdk/go/management/管理组织机构/create-department-tree"
                    },
                    {
                      "title": "获取部门绑定的第三方同步关系",
                      "path": "/reference/sdk/go/management/管理组织机构/get-department-sync-relations"
                    },
                    {
                      "title": "删除部门同步关联关系",
                      "path": "/reference/sdk/go/management/管理组织机构/delete-department-sync-relations"
                    },
                    {
                      "title": "更新部门状态",
                      "path": "/reference/sdk/go/management/管理组织机构/update-department-status"
                    }
                  ]
                },
                {
                  "title": "管理角色",
                  "children": [
                    {
                      "title": "获取角色详情",
                      "path": "/reference/sdk/go/management/管理角色/get-role"
                    },
                    {
                      "title": "单个角色批量授权",
                      "path": "/reference/sdk/go/management/管理角色/assign-role"
                    },
                    {
                      "title": "批量分配角色",
                      "path": "/reference/sdk/go/management/管理角色/assign-role-batch"
                    },
                    {
                      "title": "移除分配的角色",
                      "path": "/reference/sdk/go/management/管理角色/revoke-role"
                    },
                    {
                      "title": "批量移除分配的角色",
                      "path": "/reference/sdk/go/management/管理角色/revoke-role-batch"
                    },
                    {
                      "title": "获取角色被授权的资源列表",
                      "path": "/reference/sdk/go/management/管理角色/get-role-authorized-resources"
                    },
                    {
                      "title": "获取角色成员列表",
                      "path": "/reference/sdk/go/management/管理角色/list-role-members"
                    },
                    {
                      "title": "获取角色的部门列表",
                      "path": "/reference/sdk/go/management/管理角色/list-role-departments"
                    },
                    {
                      "title": "创建角色",
                      "path": "/reference/sdk/go/management/管理角色/create-role"
                    },
                    {
                      "title": "获取角色列表",
                      "path": "/reference/sdk/go/management/管理角色/list-roles"
                    },
                    {
                      "title": "单个权限分组（权限空间）内删除角色",
                      "path": "/reference/sdk/go/management/管理角色/delete-roles-batch"
                    },
                    {
                      "title": "批量创建角色",
                      "path": "/reference/sdk/go/management/管理角色/create-roles-batch"
                    },
                    {
                      "title": "修改角色",
                      "path": "/reference/sdk/go/management/管理角色/update-role"
                    },
                    {
                      "title": "跨权限分组（空间）删除角色",
                      "path": "/reference/sdk/go/management/管理角色/multiple-namespace-delete-roles-batch"
                    },
                    {
                      "title": "校验角色 Code 或者名称是否可用",
                      "path": "/reference/sdk/go/management/管理角色/check-role-params"
                    },
                    {
                      "title": "获取角色授权列表",
                      "path": "/reference/sdk/go/management/管理角色/list-role-assignments"
                    },
                    {
                      "title": "创建管理员角色",
                      "path": "/reference/sdk/go/management/管理角色/create-admin-role"
                    },
                    {
                      "title": "删除管理员自定义角色",
                      "path": "/reference/sdk/go/management/管理角色/delete-admin-roles"
                    }
                  ]
                },
                {
                  "title": "管理用户分组",
                  "children": [
                    {
                      "title": "获取分组详情",
                      "path": "/reference/sdk/go/management/管理用户分组/get-group"
                    },
                    {
                      "title": "获取分组列表",
                      "path": "/reference/sdk/go/management/管理用户分组/list-groups"
                    },
                    {
                      "title": "获取所有分组",
                      "path": "/reference/sdk/go/management/管理用户分组/get-all-groups"
                    },
                    {
                      "title": "创建分组",
                      "path": "/reference/sdk/go/management/管理用户分组/create-group"
                    },
                    {
                      "title": "创建或修改分组",
                      "path": "/reference/sdk/go/management/管理用户分组/create-or-update-group"
                    },
                    {
                      "title": "批量创建分组",
                      "path": "/reference/sdk/go/management/管理用户分组/create-groups-batch"
                    },
                    {
                      "title": "修改分组",
                      "path": "/reference/sdk/go/management/管理用户分组/update-group"
                    },
                    {
                      "title": "批量删除分组",
                      "path": "/reference/sdk/go/management/管理用户分组/delete-groups-batch"
                    },
                    {
                      "title": "添加分组成员",
                      "path": "/reference/sdk/go/management/管理用户分组/add-group-members"
                    },
                    {
                      "title": "批量移除分组成员",
                      "path": "/reference/sdk/go/management/管理用户分组/remove-group-members"
                    },
                    {
                      "title": "获取分组成员列表",
                      "path": "/reference/sdk/go/management/管理用户分组/list-group-members"
                    },
                    {
                      "title": "获取分组被授权的资源列表",
                      "path": "/reference/sdk/go/management/管理用户分组/get-group-authorized-resources"
                    }
                  ]
                },
                {
                  "title": "管理自定义字段",
                  "children": [
                    {
                      "title": "获取用户内置字段列表",
                      "path": "/reference/sdk/go/management/管理自定义字段/get-user-base-fields"
                    },
                    {
                      "title": "获取用户内置字段列表",
                      "path": "/reference/sdk/go/management/管理自定义字段/list-user-base-fields"
                    },
                    {
                      "title": "修改用户内置字段配置",
                      "path": "/reference/sdk/go/management/管理自定义字段/set-user-base-fields"
                    },
                    {
                      "title": "获取自定义字段列表",
                      "path": "/reference/sdk/go/management/管理自定义字段/get-custom-fields"
                    },
                    {
                      "title": "获取自定义字段列表",
                      "path": "/reference/sdk/go/management/管理自定义字段/list-custom-fields"
                    },
                    {
                      "title": "创建/修改自定义字段定义",
                      "path": "/reference/sdk/go/management/管理自定义字段/set-custom-fields"
                    },
                    {
                      "title": "删除自定义字段定义",
                      "path": "/reference/sdk/go/management/管理自定义字段/delete-custom-fields"
                    },
                    {
                      "title": "设置自定义字段的值",
                      "path": "/reference/sdk/go/management/管理自定义字段/set-custom-data"
                    },
                    {
                      "title": "获取用户、分组、角色、组织机构的自定义字段值",
                      "path": "/reference/sdk/go/management/管理自定义字段/get-custom-data"
                    }
                  ]
                },
                {
                  "title": "管理资源与权限",
                  "children": [
                    {
                      "title": "创建资源",
                      "path": "/reference/sdk/go/management/管理资源与权限/create-resource"
                    },
                    {
                      "title": "批量创建资源",
                      "path": "/reference/sdk/go/management/管理资源与权限/create-resources-batch"
                    },
                    {
                      "title": "获取资源详情",
                      "path": "/reference/sdk/go/management/管理资源与权限/get-resource"
                    },
                    {
                      "title": "批量获取资源详情",
                      "path": "/reference/sdk/go/management/管理资源与权限/get-resources-batch"
                    },
                    {
                      "title": "分页获取常规资源列表",
                      "path": "/reference/sdk/go/management/管理资源与权限/list-common-resource"
                    },
                    {
                      "title": "分页获取资源列表",
                      "path": "/reference/sdk/go/management/管理资源与权限/list-resources"
                    },
                    {
                      "title": "修改资源",
                      "path": "/reference/sdk/go/management/管理资源与权限/update-resource"
                    },
                    {
                      "title": "删除资源",
                      "path": "/reference/sdk/go/management/管理资源与权限/delete-resource"
                    },
                    {
                      "title": "批量删除资源",
                      "path": "/reference/sdk/go/management/管理资源与权限/delete-resources-batch"
                    },
                    {
                      "title": "批量删除资源",
                      "path": "/reference/sdk/go/management/管理资源与权限/delete-common-resources-batch"
                    },
                    {
                      "title": "关联/取消关联应用资源到租户",
                      "path": "/reference/sdk/go/management/管理资源与权限/associate-tenant-resource"
                    },
                    {
                      "title": "创建权限分组",
                      "path": "/reference/sdk/go/management/管理资源与权限/create-namespace"
                    },
                    {
                      "title": "批量创建权限分组",
                      "path": "/reference/sdk/go/management/管理资源与权限/create-namespaces-batch"
                    },
                    {
                      "title": "获取权限分组详情",
                      "path": "/reference/sdk/go/management/管理资源与权限/get-namespace"
                    },
                    {
                      "title": "批量获取权限分组详情",
                      "path": "/reference/sdk/go/management/管理资源与权限/get-namespaces-batch"
                    },
                    {
                      "title": "修改权限分组信息",
                      "path": "/reference/sdk/go/management/管理资源与权限/update-namespace"
                    },
                    {
                      "title": "删除权限分组信息",
                      "path": "/reference/sdk/go/management/管理资源与权限/delete-namespace"
                    },
                    {
                      "title": "批量删除权限分组",
                      "path": "/reference/sdk/go/management/管理资源与权限/delete-namespaces-batch"
                    },
                    {
                      "title": "分页获取权限分组列表",
                      "path": "/reference/sdk/go/management/管理资源与权限/list-namespaces"
                    },
                    {
                      "title": "分页权限分组下所有的角色列表",
                      "path": "/reference/sdk/go/management/管理资源与权限/list-namespace-roles"
                    },
                    {
                      "title": "授权资源",
                      "path": "/reference/sdk/go/management/管理资源与权限/authorize-resources"
                    },
                    {
                      "title": "获取某个主体被授权的资源列表",
                      "path": "/reference/sdk/go/management/管理资源与权限/get-authorized-resources"
                    },
                    {
                      "title": "判断用户是否对某个资源的某个操作有权限",
                      "path": "/reference/sdk/go/management/管理资源与权限/is-action-allowed"
                    },
                    {
                      "title": "获取资源被授权的主体",
                      "path": "/reference/sdk/go/management/管理资源与权限/get-resource-authorized-targets"
                    }
                  ]
                },
                {
                  "title": "管理数据资源与权限",
                  "children": [
                    {
                      "title": "创建权限空间",
                      "path": "/reference/sdk/go/management/管理数据资源与权限/create-permission-namespace"
                    },
                    {
                      "title": "批量创建权限空间",
                      "path": "/reference/sdk/go/management/管理数据资源与权限/create-permission-namespaces-batch"
                    },
                    {
                      "title": "获取权限空间详情",
                      "path": "/reference/sdk/go/management/管理数据资源与权限/get-permission-namespace"
                    },
                    {
                      "title": "批量获取权限空间详情列表",
                      "path": "/reference/sdk/go/management/管理数据资源与权限/get-permission-namespaces-batch"
                    },
                    {
                      "title": "分页获取权限空间列表",
                      "path": "/reference/sdk/go/management/管理数据资源与权限/list-permission-namespaces"
                    },
                    {
                      "title": "修改权限空间",
                      "path": "/reference/sdk/go/management/管理数据资源与权限/update-permission-namespace"
                    },
                    {
                      "title": "删除权限空间",
                      "path": "/reference/sdk/go/management/管理数据资源与权限/delete-permission-namespace"
                    },
                    {
                      "title": "批量删除权限空间",
                      "path": "/reference/sdk/go/management/管理数据资源与权限/delete-permission-namespaces-batch"
                    },
                    {
                      "title": "校验权限空间 Code 或者名称是否可用",
                      "path": "/reference/sdk/go/management/管理数据资源与权限/check-permission-namespace-exists"
                    },
                    {
                      "title": "分页查询权限空间下所有的角色列表",
                      "path": "/reference/sdk/go/management/管理数据资源与权限/list-permission-namespace-roles"
                    },
                    {
                      "title": "创建数据资源（推荐、重点）",
                      "path": "/reference/sdk/go/management/管理数据资源与权限/create-data-resource"
                    },
                    {
                      "title": "创建字符串数据资源",
                      "path": "/reference/sdk/go/management/管理数据资源与权限/create-string-data-resource"
                    },
                    {
                      "title": "创建数组数据资源",
                      "path": "/reference/sdk/go/management/管理数据资源与权限/create-array-data-resource"
                    },
                    {
                      "title": "创建树数据资源",
                      "path": "/reference/sdk/go/management/管理数据资源与权限/create-tree-data-resource"
                    },
                    {
                      "title": "获取数据资源列表",
                      "path": "/reference/sdk/go/management/管理数据资源与权限/list-data-resources"
                    },
                    {
                      "title": "获取数据资源详情",
                      "path": "/reference/sdk/go/management/管理数据资源与权限/get-data-resource"
                    },
                    {
                      "title": "修改数据资源",
                      "path": "/reference/sdk/go/management/管理数据资源与权限/update-data-resource"
                    },
                    {
                      "title": "删除数据资源",
                      "path": "/reference/sdk/go/management/管理数据资源与权限/delete-data-resource"
                    },
                    {
                      "title": "检查数据资源 Code 或者名称是否可用",
                      "path": "/reference/sdk/go/management/管理数据资源与权限/check-data-resource-exists"
                    },
                    {
                      "title": "创建数据策略（重点）",
                      "path": "/reference/sdk/go/management/管理数据资源与权限/create-data-policy"
                    },
                    {
                      "title": "获取数据策略列表",
                      "path": "/reference/sdk/go/management/管理数据资源与权限/list-data-policies"
                    },
                    {
                      "title": "获取数据策略简略信息列表",
                      "path": "/reference/sdk/go/management/管理数据资源与权限/list-simple-data-policies"
                    },
                    {
                      "title": "获取数据策略详情",
                      "path": "/reference/sdk/go/management/管理数据资源与权限/get-data-policy"
                    },
                    {
                      "title": "修改数据策略",
                      "path": "/reference/sdk/go/management/管理数据资源与权限/update-data-policy"
                    },
                    {
                      "title": "删除数据策略",
                      "path": "/reference/sdk/go/management/管理数据资源与权限/delete-data-policy"
                    },
                    {
                      "title": "检查数据策略名称是否可用",
                      "path": "/reference/sdk/go/management/管理数据资源与权限/check-data-policy-exists"
                    },
                    {
                      "title": "获取数据策略授权的主体列表",
                      "path": "/reference/sdk/go/management/管理数据资源与权限/list-data-policy-targets"
                    },
                    {
                      "title": "授权数据策略",
                      "path": "/reference/sdk/go/management/管理数据资源与权限/authorize-data-policies"
                    },
                    {
                      "title": "删除数据策略授权",
                      "path": "/reference/sdk/go/management/管理数据资源与权限/revoke-data-policy"
                    },
                    {
                      "title": "获取用户权限列表",
                      "path": "/reference/sdk/go/management/管理数据资源与权限/get-user-permission-list"
                    },
                    {
                      "title": "判断用户权限（重点）",
                      "path": "/reference/sdk/go/management/管理数据资源与权限/check-permission"
                    },
                    {
                      "title": "判断外部用户权限",
                      "path": "/reference/sdk/go/management/管理数据资源与权限/check-external-user-permission"
                    },
                    {
                      "title": "获取用户拥有某些资源的权限列表（推荐）",
                      "path": "/reference/sdk/go/management/管理数据资源与权限/get-user-resource-permission-list"
                    },
                    {
                      "title": "获取拥有某些资源权限的用户列表",
                      "path": "/reference/sdk/go/management/管理数据资源与权限/list-resource-targets"
                    },
                    {
                      "title": "判断用户在树资源同层级下的权限（推荐）",
                      "path": "/reference/sdk/go/management/管理数据资源与权限/check-user-same-level-permission"
                    },
                    {
                      "title": "获取权限视图数据列表",
                      "path": "/reference/sdk/go/management/管理数据资源与权限/list-permission-view-data"
                    }
                  ]
                },
                {
                  "title": "管理应用",
                  "children": [
                    {
                      "title": "获取应用详情",
                      "path": "/reference/sdk/go/management/管理应用/get-application"
                    },
                    {
                      "title": "主体授权详情",
                      "path": "/reference/sdk/go/management/管理应用/get-subject-auth-detail"
                    },
                    {
                      "title": "主体授权列表",
                      "path": "/reference/sdk/go/management/管理应用/list-subject-auth"
                    },
                    {
                      "title": "应用授权列表",
                      "path": "/reference/sdk/go/management/管理应用/list-applications-auth"
                    },
                    {
                      "title": "更新授权开关",
                      "path": "/reference/sdk/go/management/管理应用/update-auth-enabled"
                    },
                    {
                      "path": "/reference/sdk/go/management/管理应用/batch-applications-auth"
                    },
                    {
                      "title": "获取应用列表",
                      "path": "/reference/sdk/go/management/管理应用/list-applications"
                    },
                    {
                      "title": "获取应用简单信息",
                      "path": "/reference/sdk/go/management/管理应用/get-application-simple-info"
                    },
                    {
                      "title": "获取应用简单信息列表",
                      "path": "/reference/sdk/go/management/管理应用/list-application-simple-info"
                    },
                    {
                      "title": "创建应用",
                      "path": "/reference/sdk/go/management/管理应用/create-application"
                    },
                    {
                      "title": "删除应用",
                      "path": "/reference/sdk/go/management/管理应用/delete-application"
                    },
                    {
                      "title": "获取应用密钥",
                      "path": "/reference/sdk/go/management/管理应用/get-application-secret"
                    },
                    {
                      "title": "刷新应用密钥",
                      "path": "/reference/sdk/go/management/管理应用/refresh-application-secret"
                    },
                    {
                      "title": "获取应用当前登录用户",
                      "path": "/reference/sdk/go/management/管理应用/list-application-active-users"
                    },
                    {
                      "title": "获取应用默认访问授权策略",
                      "path": "/reference/sdk/go/management/管理应用/get-application-permission-strategy"
                    },
                    {
                      "title": "更新应用默认访问授权策略",
                      "path": "/reference/sdk/go/management/管理应用/update-application-permission-strategy"
                    },
                    {
                      "title": "授权应用访问权限",
                      "path": "/reference/sdk/go/management/管理应用/authorize-application-access"
                    },
                    {
                      "title": "删除应用访问授权记录",
                      "path": "/reference/sdk/go/management/管理应用/revoke-application-access"
                    },
                    {
                      "title": "检测域名是否可用",
                      "path": "/reference/sdk/go/management/管理应用/check-domain-available"
                    },
                    {
                      "title": "获取租户应用列表",
                      "path": "/reference/sdk/go/management/管理应用/list-tenant-applications"
                    },
                    {
                      "title": "获取用户池租户配置信息",
                      "path": "/reference/sdk/go/management/管理应用/userpool-tenant-config"
                    },
                    {
                      "title": "更新租户控制台扫码登录状态",
                      "path": "/reference/sdk/go/management/管理应用/update-userpool-tenant-appqrcode-state"
                    },
                    {
                      "title": "设置用户池多租户身份源连接",
                      "path": "/reference/sdk/go/management/管理应用/change-userpool-tenant-ext-idp-conn-state"
                    },
                    {
                      "title": "修改应用多因素认证配置",
                      "path": "/reference/sdk/go/management/管理应用/update-application-mfa-settings"
                    },
                    {
                      "title": "获取应用下用户 MFA 触发数据",
                      "path": "/reference/sdk/go/management/管理应用/get-mfa-trigger-data"
                    },
                    {
                      "title": "创建 ASA 账号",
                      "path": "/reference/sdk/go/management/管理应用/create-asa-account"
                    },
                    {
                      "title": "批量创建 ASA 账号",
                      "path": "/reference/sdk/go/management/管理应用/create-asa-accounts-batch"
                    },
                    {
                      "title": "更新 ASA 账号",
                      "path": "/reference/sdk/go/management/管理应用/update-asa-account"
                    },
                    {
                      "title": "获取 ASA 账号列表",
                      "path": "/reference/sdk/go/management/管理应用/list-asa-accounts"
                    },
                    {
                      "title": "获取 ASA 账号",
                      "path": "/reference/sdk/go/management/管理应用/get-asa-account"
                    },
                    {
                      "title": "批量获取 ASA 账号",
                      "path": "/reference/sdk/go/management/管理应用/get-asa-accounts-batch"
                    },
                    {
                      "title": "删除 ASA 账号",
                      "path": "/reference/sdk/go/management/管理应用/delete-asa-account"
                    },
                    {
                      "title": "批量删除 ASA 账号",
                      "path": "/reference/sdk/go/management/管理应用/delete-asa-accounts-batch"
                    },
                    {
                      "title": "分配 ASA 账号",
                      "path": "/reference/sdk/go/management/管理应用/assign-asa-account"
                    },
                    {
                      "title": "取消分配 ASA 账号",
                      "path": "/reference/sdk/go/management/管理应用/unassign-asa-account"
                    },
                    {
                      "title": "获取 ASA 账号分配的主体列表",
                      "path": "/reference/sdk/go/management/管理应用/get-asa-account-assigned-targets"
                    },
                    {
                      "title": "获取主体被分配的 ASA 账号",
                      "path": "/reference/sdk/go/management/管理应用/get-assigned-account"
                    }
                  ]
                },
                {
                  "title": "管理身份源",
                  "children": [
                    {
                      "title": "获取身份源列表",
                      "path": "/reference/sdk/go/management/管理身份源/list-ext-idp"
                    },
                    {
                      "title": "获取身份源详情",
                      "path": "/reference/sdk/go/management/管理身份源/get-ext-idp"
                    },
                    {
                      "title": "创建身份源",
                      "path": "/reference/sdk/go/management/管理身份源/create-ext-idp"
                    },
                    {
                      "title": "更新身份源配置",
                      "path": "/reference/sdk/go/management/管理身份源/update-ext-idp"
                    },
                    {
                      "title": "删除身份源",
                      "path": "/reference/sdk/go/management/管理身份源/delete-ext-idp"
                    },
                    {
                      "title": "在某个已有身份源下创建新连接",
                      "path": "/reference/sdk/go/management/管理身份源/create-ext-idp-conn"
                    },
                    {
                      "title": "更新身份源连接",
                      "path": "/reference/sdk/go/management/管理身份源/update-ext-idp-conn"
                    },
                    {
                      "title": "删除身份源连接",
                      "path": "/reference/sdk/go/management/管理身份源/delete-ext-idp-conn"
                    },
                    {
                      "title": "身份源连接开关",
                      "path": "/reference/sdk/go/management/管理身份源/change-ext-idp-conn-state"
                    },
                    {
                      "title": "租户关联身份源",
                      "path": "/reference/sdk/go/management/管理身份源/change-ext-idp-conn-association-state"
                    },
                    {
                      "title": "租户控制台获取身份源列表",
                      "path": "/reference/sdk/go/management/管理身份源/list-tenant-ext-idp"
                    },
                    {
                      "title": "身份源下应用的连接详情",
                      "path": "/reference/sdk/go/management/管理身份源/ext-idp-conn-apps"
                    }
                  ]
                },
                {
                  "title": "管理安全配置",
                  "children": [
                    {
                      "title": "获取安全配置",
                      "path": "/reference/sdk/go/management/管理安全配置/get-security-settings"
                    },
                    {
                      "title": "修改安全配置",
                      "path": "/reference/sdk/go/management/管理安全配置/update-security-settings"
                    },
                    {
                      "title": "获取全局多因素认证配置",
                      "path": "/reference/sdk/go/management/管理安全配置/get-global-mfa-settings"
                    },
                    {
                      "title": "修改全局多因素认证配置",
                      "path": "/reference/sdk/go/management/管理安全配置/update-global-mfa-settings"
                    }
                  ]
                },
                {
                  "title": "管理注册白名单",
                  "children": [
                    {
                      "title": "创建注册白名单",
                      "path": "/reference/sdk/go/management/管理注册白名单/add-whitelist"
                    },
                    {
                      "title": "获取注册白名单列表",
                      "path": "/reference/sdk/go/management/管理注册白名单/list-whitelist"
                    },
                    {
                      "title": "删除注册白名单",
                      "path": "/reference/sdk/go/management/管理注册白名单/delete-whitelist"
                    }
                  ]
                },
                {
                  "title": "管理消息服务",
                  "children": [
                    {
                      "title": "获取邮件模版列表",
                      "path": "/reference/sdk/go/management/管理消息服务/get-email-templates"
                    },
                    {
                      "title": "修改邮件模版",
                      "path": "/reference/sdk/go/management/管理消息服务/update-email-template"
                    },
                    {
                      "title": "预览邮件模版",
                      "path": "/reference/sdk/go/management/管理消息服务/preview-email-template"
                    },
                    {
                      "title": "获取第三方邮件服务配置",
                      "path": "/reference/sdk/go/management/管理消息服务/get-email-provider"
                    },
                    {
                      "title": "配置第三方邮件服务",
                      "path": "/reference/sdk/go/management/管理消息服务/config-email-provider"
                    }
                  ]
                },
                {
                  "title": "管理同步中心",
                  "children": [
                    {
                      "title": "获取同步任务详情",
                      "path": "/reference/sdk/go/management/管理同步中心/get-sync-task"
                    },
                    {
                      "title": "获取同步任务列表",
                      "path": "/reference/sdk/go/management/管理同步中心/list-sync-tasks"
                    },
                    {
                      "title": "创建同步任务",
                      "path": "/reference/sdk/go/management/管理同步中心/create-sync-task"
                    },
                    {
                      "title": "修改同步任务",
                      "path": "/reference/sdk/go/management/管理同步中心/update-sync-task"
                    },
                    {
                      "title": "执行同步任务",
                      "path": "/reference/sdk/go/management/管理同步中心/trigger-sync-task"
                    },
                    {
                      "title": "获取同步作业详情",
                      "path": "/reference/sdk/go/management/管理同步中心/get-sync-job"
                    },
                    {
                      "title": "获取同步作业详情",
                      "path": "/reference/sdk/go/management/管理同步中心/list-sync-jobs"
                    },
                    {
                      "title": "获取同步作业详情",
                      "path": "/reference/sdk/go/management/管理同步中心/list-sync-job-logs"
                    },
                    {
                      "title": "获取同步风险操作列表",
                      "path": "/reference/sdk/go/management/管理同步中心/list-sync-risk-operations"
                    },
                    {
                      "title": "执行同步风险操作",
                      "path": "/reference/sdk/go/management/管理同步中心/trigger-sync-risk-operations"
                    },
                    {
                      "title": "取消同步风险操作",
                      "path": "/reference/sdk/go/management/管理同步中心/cancel-sync-risk-operation"
                    }
                  ]
                },
                {
                  "title": "管理事件",
                  "children": [
                    {
                      "title": "创建自定义事件应用",
                      "path": "/reference/sdk/go/management/管理事件/create-event-app"
                    },
                    {
                      "title": "获取事件应用列表",
                      "path": "/reference/sdk/go/management/管理事件/list-event-apps"
                    },
                    {
                      "title": "获取事件列表",
                      "path": "/reference/sdk/go/management/管理事件/list-events"
                    },
                    {
                      "title": "定义自定义事件",
                      "path": "/reference/sdk/go/management/管理事件/define-event"
                    },
                    {
                      "title": "推送自定义事件",
                      "path": "/reference/sdk/go/management/管理事件/pub-event"
                    },
                    {
                      "title": "认证端推送自定义事件",
                      "path": "/reference/sdk/go/management/管理事件/pub-userEvent"
                    }
                  ]
                },
                {
                  "title": "管理岗位",
                  "children": [
                    {
                      "title": "岗位列表",
                      "path": "/reference/sdk/go/management/管理岗位/list-post"
                    },
                    {
                      "title": "获取岗位",
                      "path": "/reference/sdk/go/management/管理岗位/get-post"
                    },
                    {
                      "title": "获取用户关联岗位",
                      "path": "/reference/sdk/go/management/管理岗位/get-user-posts"
                    },
                    {
                      "title": "获取用户关联岗位",
                      "path": "/reference/sdk/go/management/管理岗位/get-user-post"
                    },
                    {
                      "title": "获取岗位信息",
                      "path": "/reference/sdk/go/management/管理岗位/get-post-by-id"
                    },
                    {
                      "title": "创建岗位",
                      "path": "/reference/sdk/go/management/管理岗位/create-post"
                    },
                    {
                      "title": "更新岗位信息",
                      "path": "/reference/sdk/go/management/管理岗位/update-post"
                    },
                    {
                      "title": "删除岗位",
                      "path": "/reference/sdk/go/management/管理岗位/remove-post"
                    },
                    {
                      "title": "用户设置岗位",
                      "path": "/reference/sdk/go/management/管理岗位/set-user-posts"
                    },
                    {
                      "title": "用户关联岗位",
                      "path": "/reference/sdk/go/management/管理岗位/user-connection-post"
                    }
                  ]
                },
                {
                  "title": "管理数据对象",
                  "children": [
                    {
                      "title": "数据对象高级搜索",
                      "path": "/reference/sdk/go/management/管理数据对象/metadata-filter"
                    },
                    {
                      "title": "获取数据对象行信息",
                      "path": "/reference/sdk/go/management/管理数据对象/metadata-get-row"
                    },
                    {
                      "title": "根据属性值获取数据对象行信息",
                      "path": "/reference/sdk/go/management/管理数据对象/metadata-get-row-by-value"
                    },
                    {
                      "title": "批量获取行信息",
                      "path": "/reference/sdk/go/management/管理数据对象/-get-row-batch"
                    },
                    {
                      "title": "添加行",
                      "path": "/reference/sdk/go/management/管理数据对象/metadata-create-row"
                    },
                    {
                      "title": "更新行",
                      "path": "/reference/sdk/go/management/管理数据对象/metadata-update-row"
                    },
                    {
                      "title": "删除行",
                      "path": "/reference/sdk/go/management/管理数据对象/metadata-remove-row"
                    },
                    {
                      "title": "创建数据对象",
                      "path": "/reference/sdk/go/management/管理数据对象/metadata-create-model"
                    },
                    {
                      "title": "获取数据对象详情",
                      "path": "/reference/sdk/go/management/管理数据对象/metadata-get-model"
                    },
                    {
                      "title": "获取数据对象列表",
                      "path": "/reference/sdk/go/management/管理数据对象/metadata-list-model"
                    },
                    {
                      "title": "删除数据对象",
                      "path": "/reference/sdk/go/management/管理数据对象/metadata-remove-model"
                    },
                    {
                      "title": "更新数据对象",
                      "path": "/reference/sdk/go/management/管理数据对象/metadata-update-model"
                    },
                    {
                      "title": "创建数据对象的字段",
                      "path": "/reference/sdk/go/management/管理数据对象/metadata-create-field"
                    },
                    {
                      "title": "更新数据对象的字段",
                      "path": "/reference/sdk/go/management/管理数据对象/metadata-update-field"
                    },
                    {
                      "title": "删除数据对象的字段",
                      "path": "/reference/sdk/go/management/管理数据对象/metadata-remove-field"
                    },
                    {
                      "title": "获取数据对象字段列表",
                      "path": "/reference/sdk/go/management/管理数据对象/metadata-list-field"
                    },
                    {
                      "title": "导出全部数据",
                      "path": "/reference/sdk/go/management/管理数据对象/metadata-export"
                    },
                    {
                      "title": "导入数据",
                      "path": "/reference/sdk/go/management/管理数据对象/metadata-import"
                    },
                    {
                      "title": "获取导入模板",
                      "path": "/reference/sdk/go/management/管理数据对象/metadata-get-import-template"
                    },
                    {
                      "title": "创建自定义操作",
                      "path": "/reference/sdk/go/management/管理数据对象/metadata-create-operate"
                    },
                    {
                      "title": "移除自定义操作",
                      "path": "/reference/sdk/go/management/管理数据对象/metadata-remove-operate"
                    },
                    {
                      "title": "执行自定义操作",
                      "path": "/reference/sdk/go/management/管理数据对象/metadata-execute-operate"
                    },
                    {
                      "title": "复制自定义操作",
                      "path": "/reference/sdk/go/management/管理数据对象/metadata-copy-operate"
                    },
                    {
                      "title": "操作管理列表(分页)",
                      "path": "/reference/sdk/go/management/管理数据对象/metadata-list-operate"
                    },
                    {
                      "title": "全部操作管理列表",
                      "path": "/reference/sdk/go/management/管理数据对象/metadata-all-operate"
                    },
                    {
                      "title": "更新操作管理",
                      "path": "/reference/sdk/go/management/管理数据对象/metadata-update-operate"
                    },
                    {
                      "title": "获取关联数据详情",
                      "path": "/reference/sdk/go/management/管理数据对象/metadata-get-relation-info"
                    },
                    {
                      "title": "创建行关联数据",
                      "path": "/reference/sdk/go/management/管理数据对象/metadata-create-row-relation"
                    },
                    {
                      "title": "获取行关联数据",
                      "path": "/reference/sdk/go/management/管理数据对象/metadata-get-row-relation"
                    },
                    {
                      "title": "删除行关联数据",
                      "path": "/reference/sdk/go/management/管理数据对象/metadata-remove-row-relation"
                    }
                  ]
                },
                {
                  "title": "管理 Pipeline",
                  "children": [
                    {
                      "title": "创建 Pipeline 函数",
                      "path": "/reference/sdk/go/management/管理-pipeline/create-pipeline-function"
                    },
                    {
                      "title": "获取 Pipeline 函数详情",
                      "path": "/reference/sdk/go/management/管理-pipeline/get-pipeline-function"
                    },
                    {
                      "title": "重新上传 Pipeline 函数",
                      "path": "/reference/sdk/go/management/管理-pipeline/reupload-pipeline-function"
                    },
                    {
                      "title": "修改 Pipeline 函数",
                      "path": "/reference/sdk/go/management/管理-pipeline/update-pipeline-function"
                    },
                    {
                      "title": "修改 Pipeline 函数顺序",
                      "path": "/reference/sdk/go/management/管理-pipeline/update-pipeline-order"
                    },
                    {
                      "title": "删除 Pipeline 函数",
                      "path": "/reference/sdk/go/management/管理-pipeline/delete-pipeline-function"
                    },
                    {
                      "title": "获取 Pipeline 函数列表",
                      "path": "/reference/sdk/go/management/管理-pipeline/list-pipeline-functions"
                    },
                    {
                      "title": "获取 Pipeline 日志",
                      "path": "/reference/sdk/go/management/管理-pipeline/get-pipeline-logs"
                    }
                  ]
                },
                {
                  "title": "管理 Webhook",
                  "children": [
                    {
                      "title": "创建 Webhook",
                      "path": "/reference/sdk/go/management/管理-webhook/create-webhook"
                    },
                    {
                      "title": "获取 Webhook 列表",
                      "path": "/reference/sdk/go/management/管理-webhook/list-webhooks"
                    },
                    {
                      "title": "修改 Webhook 配置",
                      "path": "/reference/sdk/go/management/管理-webhook/update-webhook"
                    },
                    {
                      "title": "删除 Webhook",
                      "path": "/reference/sdk/go/management/管理-webhook/delete-webhook"
                    },
                    {
                      "title": "获取 Webhook 日志",
                      "path": "/reference/sdk/go/management/管理-webhook/get-webhook-logs"
                    },
                    {
                      "title": "手动触发 Webhook 执行",
                      "path": "/reference/sdk/go/management/管理-webhook/trigger-webhook"
                    },
                    {
                      "title": "获取 Webhook 详情",
                      "path": "/reference/sdk/go/management/管理-webhook/get-webhook"
                    },
                    {
                      "title": "获取 Webhook 事件列表",
                      "path": "/reference/sdk/go/management/管理-webhook/get-webhook-event-list"
                    }
                  ]
                },
                {
                  "title": "管理审计日志",
                  "children": [
                    {
                      "title": "获取用户行为日志",
                      "path": "/reference/sdk/go/management/管理审计日志/get-user-action-logs"
                    },
                    {
                      "title": "获取管理员操作日志",
                      "path": "/reference/sdk/go/management/管理审计日志/get-admin-audit-logs"
                    }
                  ]
                },
                {
                  "title": "管理计量计费",
                  "children": [
                    {
                      "title": "获取套餐详情",
                      "path": "/reference/sdk/go/management/管理计量计费/get-current-package-info"
                    },
                    {
                      "title": "获取用量详情",
                      "path": "/reference/sdk/go/management/管理计量计费/get-usage-info"
                    },
                    {
                      "title": "获取 MAU 使用记录",
                      "path": "/reference/sdk/go/management/管理计量计费/get-mau-period-usage-history"
                    },
                    {
                      "title": "获取所有权益",
                      "path": "/reference/sdk/go/management/管理计量计费/get-all-rights-items"
                    },
                    {
                      "title": "获取订单列表",
                      "path": "/reference/sdk/go/management/管理计量计费/get-orders"
                    },
                    {
                      "title": "获取订单详情",
                      "path": "/reference/sdk/go/management/管理计量计费/get-order-detail"
                    },
                    {
                      "title": "获取订单支付明细",
                      "path": "/reference/sdk/go/management/管理计量计费/get-order-pay-detail"
                    }
                  ]
                },
                {
                  "title": "管理终端设备",
                  "children": [
                    {
                      "title": "移除绑定(用户详情页)",
                      "path": "/reference/sdk/go/management/管理终端设备/delete-device-by-user"
                    },
                    {
                      "title": "挂起设备(用户详情页)",
                      "path": "/reference/sdk/go/management/管理终端设备/suspend-device-by-user"
                    },
                    {
                      "title": "停用设备(用户详情页)",
                      "path": "/reference/sdk/go/management/管理终端设备/disable-device-by-user"
                    },
                    {
                      "title": "启用设备(用户详情页)",
                      "path": "/reference/sdk/go/management/管理终端设备/enable-device-by-user"
                    },
                    {
                      "title": "获取设备状态",
                      "path": "/reference/sdk/go/management/管理终端设备/device-status"
                    },
                    {
                      "title": "移除设备",
                      "path": "/reference/sdk/go/management/管理终端设备/delete-device"
                    },
                    {
                      "title": "挂起设备",
                      "path": "/reference/sdk/go/management/管理终端设备/suspend-device"
                    },
                    {
                      "title": "停用设备",
                      "path": "/reference/sdk/go/management/管理终端设备/disable-device"
                    },
                    {
                      "title": "启用设备",
                      "path": "/reference/sdk/go/management/管理终端设备/enable-device"
                    }
                  ]
                },
                {
                  "title": "管理风险名单",
                  "children": [
                    {
                      "title": "获取 ip 列表",
                      "path": "/reference/sdk/go/management/管理风险名单/ip-list"
                    },
                    {
                      "title": "获取用户列表",
                      "path": "/reference/sdk/go/management/管理风险名单/user-list"
                    },
                    {
                      "title": "获取风险策略列表",
                      "path": "/reference/sdk/go/management/管理风险名单/risk-list-policy"
                    }
                  ]
                },
                {
                  "title": "事件",
                  "path": "/reference/sdk/go/management/events.md"
                }
              ]
            }
          ]
        },
        {
          "title": "Python",
          "path": "/reference/sdk/python/",
          "redirect": "/reference/sdk/python/install.html",
          "children": [
            {
              "title": "安装使用",
              "path": "/reference/sdk/python/install.md"
            },
            {
              "title": "用户认证模块",
              "children": [
                {
                  "title": "登录",
                  "children": [
                    {
                      "title": "账号密码登录",
                      "path": "/reference/sdk/python/authentication/登录/signin-by-account-password.md"
                    },
                    {
                      "title": "用户名密码登录",
                      "path": "/reference/sdk/python/authentication/登录/signin-by-username-password.md"
                    },
                    {
                      "title": "手机号密码登录",
                      "path": "/reference/sdk/python/authentication/登录/signin-by-phone-password.md"
                    },
                    {
                      "title": "邮箱密码登录",
                      "path": "/reference/sdk/python/authentication/登录/signin-by-email-password.md"
                    },
                    {
                      "title": "邮箱验证码登录",
                      "path": "/reference/sdk/python/authentication/登录/signin-by-email-passcode.md"
                    },
                    {
                      "title": "手机号验证码登录",
                      "path": "/reference/sdk/python/authentication/登录/signin-by-phone-passcode.md"
                    },
                    {
                      "title": "LDAP 账号登录",
                      "path": "/reference/sdk/python/authentication/登录/signin-by-ldap.md"
                    },
                    {
                      "title": "AD 账号登录",
                      "path": "/reference/sdk/python/authentication/登录/signin-by-ad.md"
                    },
                    {
                      "title": "生成登录地址",
                      "path": "/reference/sdk/python/authentication/登录/build-authorize-url.md"
                    },
                    {
                      "title": "使用用户凭证登录",
                      "path": "/reference/sdk/python/authentication/登录/signin"
                    },
                    {
                      "title": "使用移动端社会化登录",
                      "path": "/reference/sdk/python/authentication/登录/signin-by-mobile"
                    },
                    {
                      "title": "公共账号切换登录",
                      "path": "/reference/sdk/python/authentication/登录/switch-login-by-user"
                    },
                    {
                      "title": "获取支付宝 AuthInfo",
                      "path": "/reference/sdk/python/authentication/登录/get-alipay-authinfo"
                    },
                    {
                      "title": "生成用于登录的二维码",
                      "path": "/reference/sdk/python/authentication/登录/gene-qrcode"
                    },
                    {
                      "title": "查询二维码状态",
                      "path": "/reference/sdk/python/authentication/登录/check-qrcode-status"
                    },
                    {
                      "title": "使用二维码 ticket 换取 TokenSet",
                      "path": "/reference/sdk/python/authentication/登录/exchange-tokenset-with-qrcode-ticket"
                    },
                    {
                      "title": "自建 APP 扫码登录：APP 端修改二维码状态",
                      "path": "/reference/sdk/python/authentication/登录/change-qrcode-status"
                    },
                    {
                      "title": "推送登录",
                      "path": "/reference/sdk/python/authentication/登录/signin-by-push"
                    },
                    {
                      "title": "查询推送码状态",
                      "path": "/reference/sdk/python/authentication/登录/check-pushcode-status"
                    },
                    {
                      "title": "推送登录：APP 端修改推送码状态",
                      "path": "/reference/sdk/python/authentication/登录/change-pushcode-status"
                    },
                    {
                      "title": "获取推送登录请求关联的客户端应用",
                      "path": "/reference/sdk/python/authentication/登录/get-pushlogin-relation-apps"
                    },
                    {
                      "title": "获取快速认证二维码数据",
                      "path": "/reference/sdk/python/authentication/登录/gene-fastpass-qrcode-info"
                    },
                    {
                      "title": "获取 WebAuthn 认证请求初始化参数",
                      "path": "/reference/sdk/python/authentication/登录/webauthn-authentication"
                    }
                  ]
                },
                {
                  "title": "登出",
                  "children": [
                    {
                      "title": "前端登出",
                      "path": "/reference/sdk/python/authentication/登出/front-channel-logout.md"
                    },
                    {
                      "title": "后端登出",
                      "path": "/reference/sdk/python/authentication/登出/backend-channel-logout.md"
                    }
                  ]
                },
                {
                  "title": "管理 Token",
                  "children": [
                    {
                      "title": "获取 Token",
                      "path": "/reference/sdk/python/authentication/管理-token/get-access-token.md"
                    },
                    {
                      "title": "校验 Token",
                      "path": "/reference/sdk/python/authentication/管理-token/introspect-token.md"
                    },
                    {
                      "title": "撤销 Token",
                      "path": "/reference/sdk/python/authentication/管理-token/revoke-token.md"
                    }
                  ]
                },
                {
                  "title": "注册",
                  "children": [
                    {
                      "title": "用户名密码注册",
                      "path": "/reference/sdk/python/authentication/注册/signup-by-username-password.md"
                    },
                    {
                      "title": "邮箱密码注册",
                      "path": "/reference/sdk/python/authentication/注册/signup-by-email-password.md"
                    },
                    {
                      "title": "手机号验证码注册",
                      "path": "/reference/sdk/python/authentication/注册/signup-by-phone-passcode.md"
                    },
                    {
                      "title": "邮箱验证码注册",
                      "path": "/reference/sdk/python/authentication/注册/signup-by-email-passcode.md"
                    },
                    {
                      "title": "注册",
                      "path": "/reference/sdk/python/authentication/注册/signup"
                    }
                  ]
                },
                {
                  "title": "用户资料",
                  "children": [
                    {
                      "title": "获取用户资料",
                      "path": "/reference/sdk/python/authentication/用户资料/get-profile"
                    },
                    {
                      "title": "修改用户资料",
                      "path": "/reference/sdk/python/authentication/用户资料/update-profile"
                    },
                    {
                      "title": "绑定邮箱",
                      "path": "/reference/sdk/python/authentication/用户资料/bind-email"
                    },
                    {
                      "title": "解绑邮箱",
                      "path": "/reference/sdk/python/authentication/用户资料/unbind-email"
                    },
                    {
                      "title": "绑定手机号",
                      "path": "/reference/sdk/python/authentication/用户资料/bind-phone"
                    },
                    {
                      "title": "解绑手机号",
                      "path": "/reference/sdk/python/authentication/用户资料/unbind-phone"
                    },
                    {
                      "title": "获取密码强度和账号安全等级评分",
                      "path": "/reference/sdk/python/authentication/用户资料/get-security-info"
                    },
                    {
                      "title": "修改密码",
                      "path": "/reference/sdk/python/authentication/用户资料/update-password"
                    },
                    {
                      "title": "发起修改邮箱的验证请求",
                      "path": "/reference/sdk/python/authentication/用户资料/verify-update-email-request"
                    },
                    {
                      "title": "修改邮箱",
                      "path": "/reference/sdk/python/authentication/用户资料/update-email"
                    },
                    {
                      "title": "发起修改手机号的验证请求",
                      "path": "/reference/sdk/python/authentication/用户资料/verify-update-phone-request"
                    },
                    {
                      "title": "修改手机号",
                      "path": "/reference/sdk/python/authentication/用户资料/update-phone"
                    },
                    {
                      "title": "发起忘记密码请求",
                      "path": "/reference/sdk/python/authentication/用户资料/verify-reset-password-request"
                    },
                    {
                      "title": "忘记密码",
                      "path": "/reference/sdk/python/authentication/用户资料/reset-password"
                    },
                    {
                      "title": "发起注销账号请求",
                      "path": "/reference/sdk/python/authentication/用户资料/verify-delete-account-request"
                    },
                    {
                      "title": "注销账户",
                      "path": "/reference/sdk/python/authentication/用户资料/delete-account"
                    },
                    {
                      "title": "查询当前登录用户可切换登录的公共账号列表",
                      "path": "/reference/sdk/python/authentication/用户资料/get-user-select-login-public-accounts"
                    },
                    {
                      "title": "获取 webauthn 凭证创建初始化参数",
                      "path": "/reference/sdk/python/authentication/用户资料/webauthn-registration"
                    },
                    {
                      "title": "我的设备列表",
                      "path": "/reference/sdk/python/authentication/用户资料/mydevices-list"
                    },
                    {
                      "title": "移除设备",
                      "path": "/reference/sdk/python/authentication/用户资料/mydevices-unbind"
                    },
                    {
                      "title": "从设备上退出登录",
                      "path": "/reference/sdk/python/authentication/用户资料/mydevices-revoke-session"
                    }
                  ]
                },
                {
                  "title": "账号绑定",
                  "children": [
                    {
                      "title": "生成绑定外部身份源的链接",
                      "path": "/reference/sdk/python/authentication/账号绑定/generate-link-extidp-url"
                    },
                    {
                      "title": "解绑外部身份源",
                      "path": "/reference/sdk/python/authentication/账号绑定/unlink-extidp"
                    },
                    {
                      "title": "获取绑定的外部身份源",
                      "path": "/reference/sdk/python/authentication/账号绑定/get-identities"
                    },
                    {
                      "title": "获取应用开启的外部身份源列表",
                      "path": "/reference/sdk/python/authentication/账号绑定/get-application-enabled-extidps"
                    }
                  ]
                },
                {
                  "title": "MFA 要素管理",
                  "children": [
                    {
                      "title": "发起绑定 MFA 认证要素请求",
                      "path": "/reference/sdk/python/authentication/mfa-要素管理/send-enroll-factor-request"
                    },
                    {
                      "title": "绑定 MFA 认证要素",
                      "path": "/reference/sdk/python/authentication/mfa-要素管理/enroll-factor"
                    },
                    {
                      "title": "解绑 MFA 认证要素",
                      "path": "/reference/sdk/python/authentication/mfa-要素管理/reset-factor"
                    },
                    {
                      "title": "获取绑定的所有 MFA 认证要素",
                      "path": "/reference/sdk/python/authentication/mfa-要素管理/list-enrolled-factors"
                    },
                    {
                      "title": "获取绑定的某个 MFA 认证要素",
                      "path": "/reference/sdk/python/authentication/mfa-要素管理/get-factor"
                    },
                    {
                      "title": "获取可绑定的 MFA 认证要素",
                      "path": "/reference/sdk/python/authentication/mfa-要素管理/list-factors-to-enroll"
                    },
                    {
                      "title": "校验用户 MFA 绑定的 OTP",
                      "path": "/reference/sdk/python/authentication/mfa-要素管理/mfa-totp-verify"
                    }
                  ]
                },
                {
                  "title": "用户相关资源",
                  "children": [
                    {
                      "title": "获取登录日志",
                      "path": "/reference/sdk/python/authentication/用户相关资源/get-my-login-history"
                    },
                    {
                      "title": "获取登录应用",
                      "path": "/reference/sdk/python/authentication/用户相关资源/get-my-logged-in-apps"
                    },
                    {
                      "title": "获取具备访问权限的应用",
                      "path": "/reference/sdk/python/authentication/用户相关资源/get-my-accessible-apps"
                    },
                    {
                      "title": "获取租户列表",
                      "path": "/reference/sdk/python/authentication/用户相关资源/get-my-tenant-list"
                    },
                    {
                      "title": "获取角色列表",
                      "path": "/reference/sdk/python/authentication/用户相关资源/get-my-role-list"
                    },
                    {
                      "title": "获取分组列表",
                      "path": "/reference/sdk/python/authentication/用户相关资源/get-my-group-list"
                    },
                    {
                      "title": "获取部门列表",
                      "path": "/reference/sdk/python/authentication/用户相关资源/get-my-department-list"
                    },
                    {
                      "title": "获取被授权的资源列表",
                      "path": "/reference/sdk/python/authentication/用户相关资源/get-my-authorized-resources"
                    }
                  ]
                },
                {
                  "title": "消息服务",
                  "children": [
                    {
                      "title": "发送短信",
                      "path": "/reference/sdk/python/authentication/消息服务/send-sms"
                    },
                    {
                      "title": "发送邮件",
                      "path": "/reference/sdk/python/authentication/消息服务/send-email"
                    }
                  ]
                },
                {
                  "title": "鉴权",
                  "children": [
                    {
                      "title": "字符串类型资源鉴权",
                      "path": "/reference/sdk/python/authentication/鉴权/check-permission-string-resource"
                    },
                    {
                      "title": "数组类型资源鉴权",
                      "path": "/reference/sdk/python/authentication/鉴权/check-permission-array-resource"
                    },
                    {
                      "title": "树类型资源鉴权",
                      "path": "/reference/sdk/python/authentication/鉴权/check-permission-tree-resource"
                    },
                    {
                      "title": "获取用户在登录应用下被授权资源列表",
                      "path": "/reference/sdk/python/authentication/鉴权/get-user-auth-resource-list"
                    },
                    {
                      "title": "获取用户指定资源权限列表",
                      "path": "/reference/sdk/python/authentication/鉴权/get-user-auth-resource-permission-list"
                    }
                  ]
                },
                {
                  "title": "微信相关接口",
                  "children": [
                    {
                      "title": "解密微信小程序数据",
                      "path": "/reference/sdk/python/authentication/微信相关接口/decrypt-wechat-miniprogram-data"
                    },
                    {
                      "title": "获取微信小程序、公众号 Access Token",
                      "path": "/reference/sdk/python/authentication/微信相关接口/get-wechat-access-token"
                    },
                    {
                      "title": "获取微信小程序、公众号 Access Token",
                      "path": "/reference/sdk/python/authentication/微信相关接口/get-wechat-access-token-info"
                    }
                  ]
                },
                {
                  "title": "公开信息端点",
                  "children": [
                    {
                      "title": "获取服务器公开信息",
                      "path": "/reference/sdk/python/authentication/公开信息端点/system"
                    },
                    {
                      "title": "获取国家列表",
                      "path": "/reference/sdk/python/authentication/公开信息端点/get-country-list"
                    }
                  ]
                },
                {
                  "title": "OIDC 模块",
                  "path": "/reference/sdk/python/authentication/oidc.md"
                },
                {
                  "title": "OAuth 模块",
                  "path": "/reference/sdk/python/authentication/oauth.md"
                },
                {
                  "title": "SAML 模块",
                  "path": "/reference/sdk/python/authentication/saml.md"
                },
                {
                  "title": "CAS 模块",
                  "path": "/reference/sdk/python/authentication/cas.md"
                },
                {
                  "title": "事件",
                  "path": "/reference/sdk/python/authentication/events.md"
                }
              ]
            },
            {
              "title": "管理模块",
              "children": [
                {
                  "title": "管理用户",
                  "children": [
                    {
                      "title": "获取用户列表",
                      "path": "/reference/sdk/python/management/管理用户/list-users"
                    },
                    {
                      "title": "获取用户信息",
                      "path": "/reference/sdk/python/management/管理用户/get-user"
                    },
                    {
                      "title": "批量获取用户信息",
                      "path": "/reference/sdk/python/management/管理用户/get-user-batch"
                    },
                    {
                      "title": "创建用户",
                      "path": "/reference/sdk/python/management/管理用户/create-user"
                    },
                    {
                      "title": "批量创建用户",
                      "path": "/reference/sdk/python/management/管理用户/create-users-batch"
                    },
                    {
                      "title": "修改用户资料",
                      "path": "/reference/sdk/python/management/管理用户/update-user"
                    },
                    {
                      "title": "批量修改用户资料",
                      "path": "/reference/sdk/python/management/管理用户/update-user-batch"
                    },
                    {
                      "title": "批量删除用户",
                      "path": "/reference/sdk/python/management/管理用户/delete-users-batch"
                    },
                    {
                      "title": "获取用户的外部身份源",
                      "path": "/reference/sdk/python/management/管理用户/get-user-identities"
                    },
                    {
                      "title": "获取用户角色列表",
                      "path": "/reference/sdk/python/management/管理用户/get-user-roles"
                    },
                    {
                      "title": "获取用户实名认证信息",
                      "path": "/reference/sdk/python/management/管理用户/get-user-principal-authentication-info"
                    },
                    {
                      "title": "删除用户实名认证信息",
                      "path": "/reference/sdk/python/management/管理用户/reset-user-principal-authentication-info"
                    },
                    {
                      "title": "获取用户部门列表",
                      "path": "/reference/sdk/python/management/管理用户/get-user-departments"
                    },
                    {
                      "title": "设置用户所在部门",
                      "path": "/reference/sdk/python/management/管理用户/set-user-departments"
                    },
                    {
                      "title": "获取用户分组列表",
                      "path": "/reference/sdk/python/management/管理用户/get-user-groups"
                    },
                    {
                      "title": "获取用户 MFA 绑定信息",
                      "path": "/reference/sdk/python/management/管理用户/get-user-mfa-info"
                    },
                    {
                      "title": "获取已归档的用户列表",
                      "path": "/reference/sdk/python/management/管理用户/list-archived-users"
                    },
                    {
                      "title": "强制下线用户",
                      "path": "/reference/sdk/python/management/管理用户/kick-users"
                    },
                    {
                      "title": "判断用户是否存在",
                      "path": "/reference/sdk/python/management/管理用户/is-user-exists"
                    },
                    {
                      "title": "获取用户可访问的应用",
                      "path": "/reference/sdk/python/management/管理用户/get-user-accessible-apps"
                    },
                    {
                      "title": "获取用户授权的应用",
                      "path": "/reference/sdk/python/management/管理用户/get-user-authorized-apps"
                    },
                    {
                      "title": "判断用户是否有某个角色",
                      "path": "/reference/sdk/python/management/管理用户/has-any-role"
                    },
                    {
                      "title": "获取用户的登录历史记录",
                      "path": "/reference/sdk/python/management/管理用户/get-user-login-history"
                    },
                    {
                      "title": "获取用户曾经登录过的应用",
                      "path": "/reference/sdk/python/management/管理用户/get-user-loggedin-apps"
                    },
                    {
                      "title": "获取用户曾经登录过的身份源",
                      "path": "/reference/sdk/python/management/管理用户/get-user-logged-in-identities"
                    },
                    {
                      "title": "离职用户",
                      "path": "/reference/sdk/python/management/管理用户/resign-user"
                    },
                    {
                      "title": "批量离职用户",
                      "path": "/reference/sdk/python/management/管理用户/resign-user-batch"
                    },
                    {
                      "title": "获取用户被授权的所有资源",
                      "path": "/reference/sdk/python/management/管理用户/get-user-authorized-resources"
                    },
                    {
                      "title": "检查某个用户在应用下是否具备 Session 登录态",
                      "path": "/reference/sdk/python/management/管理用户/check-session-status"
                    },
                    {
                      "title": "导入用户的 OTP",
                      "path": "/reference/sdk/python/management/管理用户/import-otp"
                    },
                    {
                      "title": "获取用户绑定 OTP 的秘钥",
                      "path": "/reference/sdk/python/management/管理用户/get-otp-secret-by-user"
                    },
                    {
                      "title": "获取用户自定义加密的密码",
                      "path": "/reference/sdk/python/management/管理用户/get-user-password-ciphertext"
                    },
                    {
                      "title": "给用户绑定一个身份信息",
                      "path": "/reference/sdk/python/management/管理用户/link-identity"
                    },
                    {
                      "title": "解除绑定用户在身份源下的所有身份信息",
                      "path": "/reference/sdk/python/management/管理用户/unlink-identity"
                    },
                    {
                      "title": "设置用户 MFA 状态",
                      "path": "/reference/sdk/python/management/管理用户/set-mfa-status"
                    },
                    {
                      "title": "获取用户 MFA 状态",
                      "path": "/reference/sdk/python/management/管理用户/get-mfa-status"
                    },
                    {
                      "title": "获取用户绑定的第三方同步关系",
                      "path": "/reference/sdk/python/management/管理用户/get-user-sync-relations"
                    },
                    {
                      "title": "删除用户同步关联关系",
                      "path": "/reference/sdk/python/management/管理用户/delete-user-sync-relations"
                    }
                  ]
                },
                {
                  "title": "管理公共账号",
                  "children": [
                    {
                      "title": "获取/搜索公共账号列表",
                      "path": "/reference/sdk/python/management/管理公共账号/list-public-accounts"
                    },
                    {
                      "title": "获取公共账号信息",
                      "path": "/reference/sdk/python/management/管理公共账号/get-public-account"
                    },
                    {
                      "title": "批量获取公共账号信息",
                      "path": "/reference/sdk/python/management/管理公共账号/get-public-account-batch"
                    },
                    {
                      "title": "创建公共账号",
                      "path": "/reference/sdk/python/management/管理公共账号/create-public-account"
                    },
                    {
                      "title": "批量创建公共账号",
                      "path": "/reference/sdk/python/management/管理公共账号/create-public-accounts-batch"
                    },
                    {
                      "title": "修改公共账号资料",
                      "path": "/reference/sdk/python/management/管理公共账号/update-public-account"
                    },
                    {
                      "title": "批量修改公共账号资料",
                      "path": "/reference/sdk/python/management/管理公共账号/update-public-account-batch"
                    },
                    {
                      "title": "批量删除公共账号",
                      "path": "/reference/sdk/python/management/管理公共账号/delete-public-accounts-batch"
                    },
                    {
                      "title": "强制下线公共账号",
                      "path": "/reference/sdk/python/management/管理公共账号/kick-public-accounts"
                    },
                    {
                      "title": "个人账号转换为公共账号",
                      "path": "/reference/sdk/python/management/管理公共账号/transfer-into-public-account"
                    },
                    {
                      "title": "获取用户的公共账号列表",
                      "path": "/reference/sdk/python/management/管理公共账号/get-public-accounts-of-user"
                    },
                    {
                      "title": "公共账号的用户列表",
                      "path": "/reference/sdk/python/management/管理公共账号/get-users-of-public-account"
                    },
                    {
                      "title": "公共账号绑定批量用户",
                      "path": "/reference/sdk/python/management/管理公共账号/set-public-account-of-users"
                    },
                    {
                      "title": "用户绑定批量公共账号",
                      "path": "/reference/sdk/python/management/管理公共账号/set-user-of-public-accounts"
                    },
                    {
                      "title": "公共账号解绑用户",
                      "path": "/reference/sdk/python/management/管理公共账号/unbind-public-account-of-user"
                    },
                    {
                      "title": "获取公共账号的角色列表",
                      "path": "/reference/sdk/python/management/管理公共账号/get-roles-of-public-account"
                    },
                    {
                      "title": "获取角色的公共账号列表",
                      "path": "/reference/sdk/python/management/管理公共账号/get-public-accounts-of-role"
                    },
                    {
                      "title": "公共账号绑定批量角色",
                      "path": "/reference/sdk/python/management/管理公共账号/set-public-account-of-roles"
                    },
                    {
                      "title": "获取分组的公共账号列表",
                      "path": "/reference/sdk/python/management/管理公共账号/get-public-accounts-of-group"
                    },
                    {
                      "title": "获取公共账号分组列表",
                      "path": "/reference/sdk/python/management/管理公共账号/get-groups-of-public-account"
                    },
                    {
                      "title": "公共账号添加批量分组",
                      "path": "/reference/sdk/python/management/管理公共账号/set-public-account-of-groups"
                    },
                    {
                      "title": "获取部门的公共账号列表",
                      "path": "/reference/sdk/python/management/管理公共账号/get-public-accounts-of-department"
                    },
                    {
                      "title": "获取公共账号的部门列表",
                      "path": "/reference/sdk/python/management/管理公共账号/get-departments-of-public-account"
                    },
                    {
                      "title": "设置公共账号所在部门",
                      "path": "/reference/sdk/python/management/管理公共账号/set-public-account-of-departments"
                    },
                    {
                      "title": "批量离职用户",
                      "path": "/reference/sdk/python/management/管理公共账号/resign-public-account-batch"
                    },
                    {
                      "title": "获取公共账号的岗位",
                      "path": "/reference/sdk/python/management/管理公共账号/get-post-of-public-account"
                    },
                    {
                      "title": "获取岗位的公共账号列表",
                      "path": "/reference/sdk/python/management/管理公共账号/get-public-accounts-of-post"
                    },
                    {
                      "title": "设置公共账号的岗位",
                      "path": "/reference/sdk/python/management/管理公共账号/set-public-account-of-post"
                    },
                    {
                      "title": "解绑公共账号关联岗位",
                      "path": "/reference/sdk/python/management/管理公共账号/unbind-public-account-of-post"
                    }
                  ]
                },
                {
                  "title": "管理组织机构",
                  "children": [
                    {
                      "title": "获取组织机构详情",
                      "path": "/reference/sdk/python/management/管理组织机构/get-organization"
                    },
                    {
                      "title": "批量获取组织机构详情",
                      "path": "/reference/sdk/python/management/管理组织机构/get-organization-batch"
                    },
                    {
                      "title": "获取组织机构列表",
                      "path": "/reference/sdk/python/management/管理组织机构/list-organizations"
                    },
                    {
                      "title": "创建组织机构",
                      "path": "/reference/sdk/python/management/管理组织机构/create-organization"
                    },
                    {
                      "title": "修改组织机构",
                      "path": "/reference/sdk/python/management/管理组织机构/update-organization"
                    },
                    {
                      "title": "删除组织机构",
                      "path": "/reference/sdk/python/management/管理组织机构/delete-organization"
                    },
                    {
                      "title": "搜索组织机构列表",
                      "path": "/reference/sdk/python/management/管理组织机构/search-organizations"
                    },
                    {
                      "title": "更新组织机构状态",
                      "path": "/reference/sdk/python/management/管理组织机构/update-organization-status"
                    },
                    {
                      "title": "获取部门信息",
                      "path": "/reference/sdk/python/management/管理组织机构/get-department"
                    },
                    {
                      "title": "创建部门",
                      "path": "/reference/sdk/python/management/管理组织机构/create-department"
                    },
                    {
                      "title": "修改部门",
                      "path": "/reference/sdk/python/management/管理组织机构/update-department"
                    },
                    {
                      "title": "删除部门",
                      "path": "/reference/sdk/python/management/管理组织机构/delete-department"
                    },
                    {
                      "title": "搜索部门",
                      "path": "/reference/sdk/python/management/管理组织机构/search-departments"
                    },
                    {
                      "title": "搜索部门",
                      "path": "/reference/sdk/python/management/管理组织机构/search-departments-list"
                    },
                    {
                      "title": "获取子部门列表",
                      "path": "/reference/sdk/python/management/管理组织机构/list-children-departments"
                    },
                    {
                      "title": "获取所有部门列表",
                      "path": "/reference/sdk/python/management/管理组织机构/get-all-departments"
                    },
                    {
                      "title": "获取部门成员列表",
                      "path": "/reference/sdk/python/management/管理组织机构/list-department-members"
                    },
                    {
                      "title": "获取部门直属成员 ID 列表",
                      "path": "/reference/sdk/python/management/管理组织机构/list-department-member-ids"
                    },
                    {
                      "title": "搜索部门下的成员",
                      "path": "/reference/sdk/python/management/管理组织机构/search-department-members"
                    },
                    {
                      "title": "部门下添加成员",
                      "path": "/reference/sdk/python/management/管理组织机构/add-department-members"
                    },
                    {
                      "title": "部门下删除成员",
                      "path": "/reference/sdk/python/management/管理组织机构/remove-department-members"
                    },
                    {
                      "title": "获取父部门信息",
                      "path": "/reference/sdk/python/management/管理组织机构/get-parent-department"
                    },
                    {
                      "title": "判断用户是否在某个部门下",
                      "path": "/reference/sdk/python/management/管理组织机构/is-user-in-department"
                    },
                    {
                      "title": "根据部门id查询部门",
                      "path": "/reference/sdk/python/management/管理组织机构/get-department-by-id"
                    },
                    {
                      "title": "根据组织树批量创建部门",
                      "path": "/reference/sdk/python/management/管理组织机构/create-department-tree"
                    },
                    {
                      "title": "获取部门绑定的第三方同步关系",
                      "path": "/reference/sdk/python/management/管理组织机构/get-department-sync-relations"
                    },
                    {
                      "title": "删除部门同步关联关系",
                      "path": "/reference/sdk/python/management/管理组织机构/delete-department-sync-relations"
                    },
                    {
                      "title": "更新部门状态",
                      "path": "/reference/sdk/python/management/管理组织机构/update-department-status"
                    }
                  ]
                },
                {
                  "title": "管理角色",
                  "children": [
                    {
                      "title": "获取角色详情",
                      "path": "/reference/sdk/python/management/管理角色/get-role"
                    },
                    {
                      "title": "单个角色批量授权",
                      "path": "/reference/sdk/python/management/管理角色/assign-role"
                    },
                    {
                      "title": "批量分配角色",
                      "path": "/reference/sdk/python/management/管理角色/assign-role-batch"
                    },
                    {
                      "title": "移除分配的角色",
                      "path": "/reference/sdk/python/management/管理角色/revoke-role"
                    },
                    {
                      "title": "批量移除分配的角色",
                      "path": "/reference/sdk/python/management/管理角色/revoke-role-batch"
                    },
                    {
                      "title": "获取角色被授权的资源列表",
                      "path": "/reference/sdk/python/management/管理角色/get-role-authorized-resources"
                    },
                    {
                      "title": "获取角色成员列表",
                      "path": "/reference/sdk/python/management/管理角色/list-role-members"
                    },
                    {
                      "title": "获取角色的部门列表",
                      "path": "/reference/sdk/python/management/管理角色/list-role-departments"
                    },
                    {
                      "title": "创建角色",
                      "path": "/reference/sdk/python/management/管理角色/create-role"
                    },
                    {
                      "title": "获取角色列表",
                      "path": "/reference/sdk/python/management/管理角色/list-roles"
                    },
                    {
                      "title": "单个权限分组（权限空间）内删除角色",
                      "path": "/reference/sdk/python/management/管理角色/delete-roles-batch"
                    },
                    {
                      "title": "批量创建角色",
                      "path": "/reference/sdk/python/management/管理角色/create-roles-batch"
                    },
                    {
                      "title": "修改角色",
                      "path": "/reference/sdk/python/management/管理角色/update-role"
                    },
                    {
                      "title": "跨权限分组（空间）删除角色",
                      "path": "/reference/sdk/python/management/管理角色/multiple-namespace-delete-roles-batch"
                    },
                    {
                      "title": "校验角色 Code 或者名称是否可用",
                      "path": "/reference/sdk/python/management/管理角色/check-role-params"
                    },
                    {
                      "title": "获取角色授权列表",
                      "path": "/reference/sdk/python/management/管理角色/list-role-assignments"
                    },
                    {
                      "title": "创建管理员角色",
                      "path": "/reference/sdk/python/management/管理角色/create-admin-role"
                    },
                    {
                      "title": "删除管理员自定义角色",
                      "path": "/reference/sdk/python/management/管理角色/delete-admin-roles"
                    }
                  ]
                },
                {
                  "title": "管理用户分组",
                  "children": [
                    {
                      "title": "获取分组详情",
                      "path": "/reference/sdk/python/management/管理用户分组/get-group"
                    },
                    {
                      "title": "获取分组列表",
                      "path": "/reference/sdk/python/management/管理用户分组/list-groups"
                    },
                    {
                      "title": "获取所有分组",
                      "path": "/reference/sdk/python/management/管理用户分组/get-all-groups"
                    },
                    {
                      "title": "创建分组",
                      "path": "/reference/sdk/python/management/管理用户分组/create-group"
                    },
                    {
                      "title": "创建或修改分组",
                      "path": "/reference/sdk/python/management/管理用户分组/create-or-update-group"
                    },
                    {
                      "title": "批量创建分组",
                      "path": "/reference/sdk/python/management/管理用户分组/create-groups-batch"
                    },
                    {
                      "title": "修改分组",
                      "path": "/reference/sdk/python/management/管理用户分组/update-group"
                    },
                    {
                      "title": "批量删除分组",
                      "path": "/reference/sdk/python/management/管理用户分组/delete-groups-batch"
                    },
                    {
                      "title": "添加分组成员",
                      "path": "/reference/sdk/python/management/管理用户分组/add-group-members"
                    },
                    {
                      "title": "批量移除分组成员",
                      "path": "/reference/sdk/python/management/管理用户分组/remove-group-members"
                    },
                    {
                      "title": "获取分组成员列表",
                      "path": "/reference/sdk/python/management/管理用户分组/list-group-members"
                    },
                    {
                      "title": "获取分组被授权的资源列表",
                      "path": "/reference/sdk/python/management/管理用户分组/get-group-authorized-resources"
                    }
                  ]
                },
                {
                  "title": "管理自定义字段",
                  "children": [
                    {
                      "title": "获取用户内置字段列表",
                      "path": "/reference/sdk/python/management/管理自定义字段/get-user-base-fields"
                    },
                    {
                      "title": "获取用户内置字段列表",
                      "path": "/reference/sdk/python/management/管理自定义字段/list-user-base-fields"
                    },
                    {
                      "title": "修改用户内置字段配置",
                      "path": "/reference/sdk/python/management/管理自定义字段/set-user-base-fields"
                    },
                    {
                      "title": "获取自定义字段列表",
                      "path": "/reference/sdk/python/management/管理自定义字段/get-custom-fields"
                    },
                    {
                      "title": "获取自定义字段列表",
                      "path": "/reference/sdk/python/management/管理自定义字段/list-custom-fields"
                    },
                    {
                      "title": "创建/修改自定义字段定义",
                      "path": "/reference/sdk/python/management/管理自定义字段/set-custom-fields"
                    },
                    {
                      "title": "删除自定义字段定义",
                      "path": "/reference/sdk/python/management/管理自定义字段/delete-custom-fields"
                    },
                    {
                      "title": "设置自定义字段的值",
                      "path": "/reference/sdk/python/management/管理自定义字段/set-custom-data"
                    },
                    {
                      "title": "获取用户、分组、角色、组织机构的自定义字段值",
                      "path": "/reference/sdk/python/management/管理自定义字段/get-custom-data"
                    }
                  ]
                },
                {
                  "title": "管理资源与权限",
                  "children": [
                    {
                      "title": "创建资源",
                      "path": "/reference/sdk/python/management/管理资源与权限/create-resource"
                    },
                    {
                      "title": "批量创建资源",
                      "path": "/reference/sdk/python/management/管理资源与权限/create-resources-batch"
                    },
                    {
                      "title": "获取资源详情",
                      "path": "/reference/sdk/python/management/管理资源与权限/get-resource"
                    },
                    {
                      "title": "批量获取资源详情",
                      "path": "/reference/sdk/python/management/管理资源与权限/get-resources-batch"
                    },
                    {
                      "title": "分页获取常规资源列表",
                      "path": "/reference/sdk/python/management/管理资源与权限/list-common-resource"
                    },
                    {
                      "title": "分页获取资源列表",
                      "path": "/reference/sdk/python/management/管理资源与权限/list-resources"
                    },
                    {
                      "title": "修改资源",
                      "path": "/reference/sdk/python/management/管理资源与权限/update-resource"
                    },
                    {
                      "title": "删除资源",
                      "path": "/reference/sdk/python/management/管理资源与权限/delete-resource"
                    },
                    {
                      "title": "批量删除资源",
                      "path": "/reference/sdk/python/management/管理资源与权限/delete-resources-batch"
                    },
                    {
                      "title": "批量删除资源",
                      "path": "/reference/sdk/python/management/管理资源与权限/delete-common-resources-batch"
                    },
                    {
                      "title": "关联/取消关联应用资源到租户",
                      "path": "/reference/sdk/python/management/管理资源与权限/associate-tenant-resource"
                    },
                    {
                      "title": "创建权限分组",
                      "path": "/reference/sdk/python/management/管理资源与权限/create-namespace"
                    },
                    {
                      "title": "批量创建权限分组",
                      "path": "/reference/sdk/python/management/管理资源与权限/create-namespaces-batch"
                    },
                    {
                      "title": "获取权限分组详情",
                      "path": "/reference/sdk/python/management/管理资源与权限/get-namespace"
                    },
                    {
                      "title": "批量获取权限分组详情",
                      "path": "/reference/sdk/python/management/管理资源与权限/get-namespaces-batch"
                    },
                    {
                      "title": "修改权限分组信息",
                      "path": "/reference/sdk/python/management/管理资源与权限/update-namespace"
                    },
                    {
                      "title": "删除权限分组信息",
                      "path": "/reference/sdk/python/management/管理资源与权限/delete-namespace"
                    },
                    {
                      "title": "批量删除权限分组",
                      "path": "/reference/sdk/python/management/管理资源与权限/delete-namespaces-batch"
                    },
                    {
                      "title": "分页获取权限分组列表",
                      "path": "/reference/sdk/python/management/管理资源与权限/list-namespaces"
                    },
                    {
                      "title": "分页权限分组下所有的角色列表",
                      "path": "/reference/sdk/python/management/管理资源与权限/list-namespace-roles"
                    },
                    {
                      "title": "授权资源",
                      "path": "/reference/sdk/python/management/管理资源与权限/authorize-resources"
                    },
                    {
                      "title": "获取某个主体被授权的资源列表",
                      "path": "/reference/sdk/python/management/管理资源与权限/get-authorized-resources"
                    },
                    {
                      "title": "判断用户是否对某个资源的某个操作有权限",
                      "path": "/reference/sdk/python/management/管理资源与权限/is-action-allowed"
                    },
                    {
                      "title": "获取资源被授权的主体",
                      "path": "/reference/sdk/python/management/管理资源与权限/get-resource-authorized-targets"
                    }
                  ]
                },
                {
                  "title": "管理数据资源与权限",
                  "children": [
                    {
                      "title": "创建权限空间",
                      "path": "/reference/sdk/python/management/管理数据资源与权限/create-permission-namespace"
                    },
                    {
                      "title": "批量创建权限空间",
                      "path": "/reference/sdk/python/management/管理数据资源与权限/create-permission-namespaces-batch"
                    },
                    {
                      "title": "获取权限空间详情",
                      "path": "/reference/sdk/python/management/管理数据资源与权限/get-permission-namespace"
                    },
                    {
                      "title": "批量获取权限空间详情列表",
                      "path": "/reference/sdk/python/management/管理数据资源与权限/get-permission-namespaces-batch"
                    },
                    {
                      "title": "分页获取权限空间列表",
                      "path": "/reference/sdk/python/management/管理数据资源与权限/list-permission-namespaces"
                    },
                    {
                      "title": "修改权限空间",
                      "path": "/reference/sdk/python/management/管理数据资源与权限/update-permission-namespace"
                    },
                    {
                      "title": "删除权限空间",
                      "path": "/reference/sdk/python/management/管理数据资源与权限/delete-permission-namespace"
                    },
                    {
                      "title": "批量删除权限空间",
                      "path": "/reference/sdk/python/management/管理数据资源与权限/delete-permission-namespaces-batch"
                    },
                    {
                      "title": "校验权限空间 Code 或者名称是否可用",
                      "path": "/reference/sdk/python/management/管理数据资源与权限/check-permission-namespace-exists"
                    },
                    {
                      "title": "分页查询权限空间下所有的角色列表",
                      "path": "/reference/sdk/python/management/管理数据资源与权限/list-permission-namespace-roles"
                    },
                    {
                      "title": "创建数据资源（推荐、重点）",
                      "path": "/reference/sdk/python/management/管理数据资源与权限/create-data-resource"
                    },
                    {
                      "title": "创建字符串数据资源",
                      "path": "/reference/sdk/python/management/管理数据资源与权限/create-string-data-resource"
                    },
                    {
                      "title": "创建数组数据资源",
                      "path": "/reference/sdk/python/management/管理数据资源与权限/create-array-data-resource"
                    },
                    {
                      "title": "创建树数据资源",
                      "path": "/reference/sdk/python/management/管理数据资源与权限/create-tree-data-resource"
                    },
                    {
                      "title": "获取数据资源列表",
                      "path": "/reference/sdk/python/management/管理数据资源与权限/list-data-resources"
                    },
                    {
                      "title": "获取数据资源详情",
                      "path": "/reference/sdk/python/management/管理数据资源与权限/get-data-resource"
                    },
                    {
                      "title": "修改数据资源",
                      "path": "/reference/sdk/python/management/管理数据资源与权限/update-data-resource"
                    },
                    {
                      "title": "删除数据资源",
                      "path": "/reference/sdk/python/management/管理数据资源与权限/delete-data-resource"
                    },
                    {
                      "title": "检查数据资源 Code 或者名称是否可用",
                      "path": "/reference/sdk/python/management/管理数据资源与权限/check-data-resource-exists"
                    },
                    {
                      "title": "创建数据策略（重点）",
                      "path": "/reference/sdk/python/management/管理数据资源与权限/create-data-policy"
                    },
                    {
                      "title": "获取数据策略列表",
                      "path": "/reference/sdk/python/management/管理数据资源与权限/list-data-policies"
                    },
                    {
                      "title": "获取数据策略简略信息列表",
                      "path": "/reference/sdk/python/management/管理数据资源与权限/list-simple-data-policies"
                    },
                    {
                      "title": "获取数据策略详情",
                      "path": "/reference/sdk/python/management/管理数据资源与权限/get-data-policy"
                    },
                    {
                      "title": "修改数据策略",
                      "path": "/reference/sdk/python/management/管理数据资源与权限/update-data-policy"
                    },
                    {
                      "title": "删除数据策略",
                      "path": "/reference/sdk/python/management/管理数据资源与权限/delete-data-policy"
                    },
                    {
                      "title": "检查数据策略名称是否可用",
                      "path": "/reference/sdk/python/management/管理数据资源与权限/check-data-policy-exists"
                    },
                    {
                      "title": "获取数据策略授权的主体列表",
                      "path": "/reference/sdk/python/management/管理数据资源与权限/list-data-policy-targets"
                    },
                    {
                      "title": "授权数据策略",
                      "path": "/reference/sdk/python/management/管理数据资源与权限/authorize-data-policies"
                    },
                    {
                      "title": "删除数据策略授权",
                      "path": "/reference/sdk/python/management/管理数据资源与权限/revoke-data-policy"
                    },
                    {
                      "title": "获取用户权限列表",
                      "path": "/reference/sdk/python/management/管理数据资源与权限/get-user-permission-list"
                    },
                    {
                      "title": "判断用户权限（重点）",
                      "path": "/reference/sdk/python/management/管理数据资源与权限/check-permission"
                    },
                    {
                      "title": "判断外部用户权限",
                      "path": "/reference/sdk/python/management/管理数据资源与权限/check-external-user-permission"
                    },
                    {
                      "title": "获取用户拥有某些资源的权限列表（推荐）",
                      "path": "/reference/sdk/python/management/管理数据资源与权限/get-user-resource-permission-list"
                    },
                    {
                      "title": "获取拥有某些资源权限的用户列表",
                      "path": "/reference/sdk/python/management/管理数据资源与权限/list-resource-targets"
                    },
                    {
                      "title": "判断用户在树资源同层级下的权限（推荐）",
                      "path": "/reference/sdk/python/management/管理数据资源与权限/check-user-same-level-permission"
                    },
                    {
                      "title": "获取权限视图数据列表",
                      "path": "/reference/sdk/python/management/管理数据资源与权限/list-permission-view-data"
                    }
                  ]
                },
                {
                  "title": "管理应用",
                  "children": [
                    {
                      "title": "获取应用详情",
                      "path": "/reference/sdk/python/management/管理应用/get-application"
                    },
                    {
                      "title": "主体授权详情",
                      "path": "/reference/sdk/python/management/管理应用/get-subject-auth-detail"
                    },
                    {
                      "title": "主体授权列表",
                      "path": "/reference/sdk/python/management/管理应用/list-subject-auth"
                    },
                    {
                      "title": "应用授权列表",
                      "path": "/reference/sdk/python/management/管理应用/list-applications-auth"
                    },
                    {
                      "title": "更新授权开关",
                      "path": "/reference/sdk/python/management/管理应用/update-auth-enabled"
                    },
                    {
                      "path": "/reference/sdk/python/management/管理应用/batch-applications-auth"
                    },
                    {
                      "title": "获取应用列表",
                      "path": "/reference/sdk/python/management/管理应用/list-applications"
                    },
                    {
                      "title": "获取应用简单信息",
                      "path": "/reference/sdk/python/management/管理应用/get-application-simple-info"
                    },
                    {
                      "title": "获取应用简单信息列表",
                      "path": "/reference/sdk/python/management/管理应用/list-application-simple-info"
                    },
                    {
                      "title": "创建应用",
                      "path": "/reference/sdk/python/management/管理应用/create-application"
                    },
                    {
                      "title": "删除应用",
                      "path": "/reference/sdk/python/management/管理应用/delete-application"
                    },
                    {
                      "title": "获取应用密钥",
                      "path": "/reference/sdk/python/management/管理应用/get-application-secret"
                    },
                    {
                      "title": "刷新应用密钥",
                      "path": "/reference/sdk/python/management/管理应用/refresh-application-secret"
                    },
                    {
                      "title": "获取应用当前登录用户",
                      "path": "/reference/sdk/python/management/管理应用/list-application-active-users"
                    },
                    {
                      "title": "获取应用默认访问授权策略",
                      "path": "/reference/sdk/python/management/管理应用/get-application-permission-strategy"
                    },
                    {
                      "title": "更新应用默认访问授权策略",
                      "path": "/reference/sdk/python/management/管理应用/update-application-permission-strategy"
                    },
                    {
                      "title": "授权应用访问权限",
                      "path": "/reference/sdk/python/management/管理应用/authorize-application-access"
                    },
                    {
                      "title": "删除应用访问授权记录",
                      "path": "/reference/sdk/python/management/管理应用/revoke-application-access"
                    },
                    {
                      "title": "检测域名是否可用",
                      "path": "/reference/sdk/python/management/管理应用/check-domain-available"
                    },
                    {
                      "title": "获取租户应用列表",
                      "path": "/reference/sdk/python/management/管理应用/list-tenant-applications"
                    },
                    {
                      "title": "获取用户池租户配置信息",
                      "path": "/reference/sdk/python/management/管理应用/userpool-tenant-config"
                    },
                    {
                      "title": "更新租户控制台扫码登录状态",
                      "path": "/reference/sdk/python/management/管理应用/update-userpool-tenant-appqrcode-state"
                    },
                    {
                      "title": "设置用户池多租户身份源连接",
                      "path": "/reference/sdk/python/management/管理应用/change-userpool-tenant-ext-idp-conn-state"
                    },
                    {
                      "title": "修改应用多因素认证配置",
                      "path": "/reference/sdk/python/management/管理应用/update-application-mfa-settings"
                    },
                    {
                      "title": "获取应用下用户 MFA 触发数据",
                      "path": "/reference/sdk/python/management/管理应用/get-mfa-trigger-data"
                    },
                    {
                      "title": "创建 ASA 账号",
                      "path": "/reference/sdk/python/management/管理应用/create-asa-account"
                    },
                    {
                      "title": "批量创建 ASA 账号",
                      "path": "/reference/sdk/python/management/管理应用/create-asa-accounts-batch"
                    },
                    {
                      "title": "更新 ASA 账号",
                      "path": "/reference/sdk/python/management/管理应用/update-asa-account"
                    },
                    {
                      "title": "获取 ASA 账号列表",
                      "path": "/reference/sdk/python/management/管理应用/list-asa-accounts"
                    },
                    {
                      "title": "获取 ASA 账号",
                      "path": "/reference/sdk/python/management/管理应用/get-asa-account"
                    },
                    {
                      "title": "批量获取 ASA 账号",
                      "path": "/reference/sdk/python/management/管理应用/get-asa-accounts-batch"
                    },
                    {
                      "title": "删除 ASA 账号",
                      "path": "/reference/sdk/python/management/管理应用/delete-asa-account"
                    },
                    {
                      "title": "批量删除 ASA 账号",
                      "path": "/reference/sdk/python/management/管理应用/delete-asa-accounts-batch"
                    },
                    {
                      "title": "分配 ASA 账号",
                      "path": "/reference/sdk/python/management/管理应用/assign-asa-account"
                    },
                    {
                      "title": "取消分配 ASA 账号",
                      "path": "/reference/sdk/python/management/管理应用/unassign-asa-account"
                    },
                    {
                      "title": "获取 ASA 账号分配的主体列表",
                      "path": "/reference/sdk/python/management/管理应用/get-asa-account-assigned-targets"
                    },
                    {
                      "title": "获取主体被分配的 ASA 账号",
                      "path": "/reference/sdk/python/management/管理应用/get-assigned-account"
                    }
                  ]
                },
                {
                  "title": "管理身份源",
                  "children": [
                    {
                      "title": "获取身份源列表",
                      "path": "/reference/sdk/python/management/管理身份源/list-ext-idp"
                    },
                    {
                      "title": "获取身份源详情",
                      "path": "/reference/sdk/python/management/管理身份源/get-ext-idp"
                    },
                    {
                      "title": "创建身份源",
                      "path": "/reference/sdk/python/management/管理身份源/create-ext-idp"
                    },
                    {
                      "title": "更新身份源配置",
                      "path": "/reference/sdk/python/management/管理身份源/update-ext-idp"
                    },
                    {
                      "title": "删除身份源",
                      "path": "/reference/sdk/python/management/管理身份源/delete-ext-idp"
                    },
                    {
                      "title": "在某个已有身份源下创建新连接",
                      "path": "/reference/sdk/python/management/管理身份源/create-ext-idp-conn"
                    },
                    {
                      "title": "更新身份源连接",
                      "path": "/reference/sdk/python/management/管理身份源/update-ext-idp-conn"
                    },
                    {
                      "title": "删除身份源连接",
                      "path": "/reference/sdk/python/management/管理身份源/delete-ext-idp-conn"
                    },
                    {
                      "title": "身份源连接开关",
                      "path": "/reference/sdk/python/management/管理身份源/change-ext-idp-conn-state"
                    },
                    {
                      "title": "租户关联身份源",
                      "path": "/reference/sdk/python/management/管理身份源/change-ext-idp-conn-association-state"
                    },
                    {
                      "title": "租户控制台获取身份源列表",
                      "path": "/reference/sdk/python/management/管理身份源/list-tenant-ext-idp"
                    },
                    {
                      "title": "身份源下应用的连接详情",
                      "path": "/reference/sdk/python/management/管理身份源/ext-idp-conn-apps"
                    }
                  ]
                },
                {
                  "title": "管理安全配置",
                  "children": [
                    {
                      "title": "获取安全配置",
                      "path": "/reference/sdk/python/management/管理安全配置/get-security-settings"
                    },
                    {
                      "title": "修改安全配置",
                      "path": "/reference/sdk/python/management/管理安全配置/update-security-settings"
                    },
                    {
                      "title": "获取全局多因素认证配置",
                      "path": "/reference/sdk/python/management/管理安全配置/get-global-mfa-settings"
                    },
                    {
                      "title": "修改全局多因素认证配置",
                      "path": "/reference/sdk/python/management/管理安全配置/update-global-mfa-settings"
                    }
                  ]
                },
                {
                  "title": "管理注册白名单",
                  "children": [
                    {
                      "title": "创建注册白名单",
                      "path": "/reference/sdk/python/management/管理注册白名单/add-whitelist"
                    },
                    {
                      "title": "获取注册白名单列表",
                      "path": "/reference/sdk/python/management/管理注册白名单/list-whitelist"
                    },
                    {
                      "title": "删除注册白名单",
                      "path": "/reference/sdk/python/management/管理注册白名单/delete-whitelist"
                    }
                  ]
                },
                {
                  "title": "管理消息服务",
                  "children": [
                    {
                      "title": "获取邮件模版列表",
                      "path": "/reference/sdk/python/management/管理消息服务/get-email-templates"
                    },
                    {
                      "title": "修改邮件模版",
                      "path": "/reference/sdk/python/management/管理消息服务/update-email-template"
                    },
                    {
                      "title": "预览邮件模版",
                      "path": "/reference/sdk/python/management/管理消息服务/preview-email-template"
                    },
                    {
                      "title": "获取第三方邮件服务配置",
                      "path": "/reference/sdk/python/management/管理消息服务/get-email-provider"
                    },
                    {
                      "title": "配置第三方邮件服务",
                      "path": "/reference/sdk/python/management/管理消息服务/config-email-provider"
                    }
                  ]
                },
                {
                  "title": "管理同步中心",
                  "children": [
                    {
                      "title": "获取同步任务详情",
                      "path": "/reference/sdk/python/management/管理同步中心/get-sync-task"
                    },
                    {
                      "title": "获取同步任务列表",
                      "path": "/reference/sdk/python/management/管理同步中心/list-sync-tasks"
                    },
                    {
                      "title": "创建同步任务",
                      "path": "/reference/sdk/python/management/管理同步中心/create-sync-task"
                    },
                    {
                      "title": "修改同步任务",
                      "path": "/reference/sdk/python/management/管理同步中心/update-sync-task"
                    },
                    {
                      "title": "执行同步任务",
                      "path": "/reference/sdk/python/management/管理同步中心/trigger-sync-task"
                    },
                    {
                      "title": "获取同步作业详情",
                      "path": "/reference/sdk/python/management/管理同步中心/get-sync-job"
                    },
                    {
                      "title": "获取同步作业详情",
                      "path": "/reference/sdk/python/management/管理同步中心/list-sync-jobs"
                    },
                    {
                      "title": "获取同步作业详情",
                      "path": "/reference/sdk/python/management/管理同步中心/list-sync-job-logs"
                    },
                    {
                      "title": "获取同步风险操作列表",
                      "path": "/reference/sdk/python/management/管理同步中心/list-sync-risk-operations"
                    },
                    {
                      "title": "执行同步风险操作",
                      "path": "/reference/sdk/python/management/管理同步中心/trigger-sync-risk-operations"
                    },
                    {
                      "title": "取消同步风险操作",
                      "path": "/reference/sdk/python/management/管理同步中心/cancel-sync-risk-operation"
                    }
                  ]
                },
                {
                  "title": "管理事件",
                  "children": [
                    {
                      "title": "创建自定义事件应用",
                      "path": "/reference/sdk/python/management/管理事件/create-event-app"
                    },
                    {
                      "title": "获取事件应用列表",
                      "path": "/reference/sdk/python/management/管理事件/list-event-apps"
                    },
                    {
                      "title": "获取事件列表",
                      "path": "/reference/sdk/python/management/管理事件/list-events"
                    },
                    {
                      "title": "定义自定义事件",
                      "path": "/reference/sdk/python/management/管理事件/define-event"
                    },
                    {
                      "title": "推送自定义事件",
                      "path": "/reference/sdk/python/management/管理事件/pub-event"
                    },
                    {
                      "title": "认证端推送自定义事件",
                      "path": "/reference/sdk/python/management/管理事件/pub-userEvent"
                    }
                  ]
                },
                {
                  "title": "管理岗位",
                  "children": [
                    {
                      "title": "岗位列表",
                      "path": "/reference/sdk/python/management/管理岗位/list-post"
                    },
                    {
                      "title": "获取岗位",
                      "path": "/reference/sdk/python/management/管理岗位/get-post"
                    },
                    {
                      "title": "获取用户关联岗位",
                      "path": "/reference/sdk/python/management/管理岗位/get-user-posts"
                    },
                    {
                      "title": "获取用户关联岗位",
                      "path": "/reference/sdk/python/management/管理岗位/get-user-post"
                    },
                    {
                      "title": "获取岗位信息",
                      "path": "/reference/sdk/python/management/管理岗位/get-post-by-id"
                    },
                    {
                      "title": "创建岗位",
                      "path": "/reference/sdk/python/management/管理岗位/create-post"
                    },
                    {
                      "title": "更新岗位信息",
                      "path": "/reference/sdk/python/management/管理岗位/update-post"
                    },
                    {
                      "title": "删除岗位",
                      "path": "/reference/sdk/python/management/管理岗位/remove-post"
                    },
                    {
                      "title": "用户设置岗位",
                      "path": "/reference/sdk/python/management/管理岗位/set-user-posts"
                    },
                    {
                      "title": "用户关联岗位",
                      "path": "/reference/sdk/python/management/管理岗位/user-connection-post"
                    }
                  ]
                },
                {
                  "title": "管理数据对象",
                  "children": [
                    {
                      "title": "数据对象高级搜索",
                      "path": "/reference/sdk/python/management/管理数据对象/metadata-filter"
                    },
                    {
                      "title": "获取数据对象行信息",
                      "path": "/reference/sdk/python/management/管理数据对象/metadata-get-row"
                    },
                    {
                      "title": "根据属性值获取数据对象行信息",
                      "path": "/reference/sdk/python/management/管理数据对象/metadata-get-row-by-value"
                    },
                    {
                      "title": "批量获取行信息",
                      "path": "/reference/sdk/python/management/管理数据对象/-get-row-batch"
                    },
                    {
                      "title": "添加行",
                      "path": "/reference/sdk/python/management/管理数据对象/metadata-create-row"
                    },
                    {
                      "title": "更新行",
                      "path": "/reference/sdk/python/management/管理数据对象/metadata-update-row"
                    },
                    {
                      "title": "删除行",
                      "path": "/reference/sdk/python/management/管理数据对象/metadata-remove-row"
                    },
                    {
                      "title": "创建数据对象",
                      "path": "/reference/sdk/python/management/管理数据对象/metadata-create-model"
                    },
                    {
                      "title": "获取数据对象详情",
                      "path": "/reference/sdk/python/management/管理数据对象/metadata-get-model"
                    },
                    {
                      "title": "获取数据对象列表",
                      "path": "/reference/sdk/python/management/管理数据对象/metadata-list-model"
                    },
                    {
                      "title": "删除数据对象",
                      "path": "/reference/sdk/python/management/管理数据对象/metadata-remove-model"
                    },
                    {
                      "title": "更新数据对象",
                      "path": "/reference/sdk/python/management/管理数据对象/metadata-update-model"
                    },
                    {
                      "title": "创建数据对象的字段",
                      "path": "/reference/sdk/python/management/管理数据对象/metadata-create-field"
                    },
                    {
                      "title": "更新数据对象的字段",
                      "path": "/reference/sdk/python/management/管理数据对象/metadata-update-field"
                    },
                    {
                      "title": "删除数据对象的字段",
                      "path": "/reference/sdk/python/management/管理数据对象/metadata-remove-field"
                    },
                    {
                      "title": "获取数据对象字段列表",
                      "path": "/reference/sdk/python/management/管理数据对象/metadata-list-field"
                    },
                    {
                      "title": "导出全部数据",
                      "path": "/reference/sdk/python/management/管理数据对象/metadata-export"
                    },
                    {
                      "title": "导入数据",
                      "path": "/reference/sdk/python/management/管理数据对象/metadata-import"
                    },
                    {
                      "title": "获取导入模板",
                      "path": "/reference/sdk/python/management/管理数据对象/metadata-get-import-template"
                    },
                    {
                      "title": "创建自定义操作",
                      "path": "/reference/sdk/python/management/管理数据对象/metadata-create-operate"
                    },
                    {
                      "title": "移除自定义操作",
                      "path": "/reference/sdk/python/management/管理数据对象/metadata-remove-operate"
                    },
                    {
                      "title": "执行自定义操作",
                      "path": "/reference/sdk/python/management/管理数据对象/metadata-execute-operate"
                    },
                    {
                      "title": "复制自定义操作",
                      "path": "/reference/sdk/python/management/管理数据对象/metadata-copy-operate"
                    },
                    {
                      "title": "操作管理列表(分页)",
                      "path": "/reference/sdk/python/management/管理数据对象/metadata-list-operate"
                    },
                    {
                      "title": "全部操作管理列表",
                      "path": "/reference/sdk/python/management/管理数据对象/metadata-all-operate"
                    },
                    {
                      "title": "更新操作管理",
                      "path": "/reference/sdk/python/management/管理数据对象/metadata-update-operate"
                    },
                    {
                      "title": "获取关联数据详情",
                      "path": "/reference/sdk/python/management/管理数据对象/metadata-get-relation-info"
                    },
                    {
                      "title": "创建行关联数据",
                      "path": "/reference/sdk/python/management/管理数据对象/metadata-create-row-relation"
                    },
                    {
                      "title": "获取行关联数据",
                      "path": "/reference/sdk/python/management/管理数据对象/metadata-get-row-relation"
                    },
                    {
                      "title": "删除行关联数据",
                      "path": "/reference/sdk/python/management/管理数据对象/metadata-remove-row-relation"
                    }
                  ]
                },
                {
                  "title": "管理 Pipeline",
                  "children": [
                    {
                      "title": "创建 Pipeline 函数",
                      "path": "/reference/sdk/python/management/管理-pipeline/create-pipeline-function"
                    },
                    {
                      "title": "获取 Pipeline 函数详情",
                      "path": "/reference/sdk/python/management/管理-pipeline/get-pipeline-function"
                    },
                    {
                      "title": "重新上传 Pipeline 函数",
                      "path": "/reference/sdk/python/management/管理-pipeline/reupload-pipeline-function"
                    },
                    {
                      "title": "修改 Pipeline 函数",
                      "path": "/reference/sdk/python/management/管理-pipeline/update-pipeline-function"
                    },
                    {
                      "title": "修改 Pipeline 函数顺序",
                      "path": "/reference/sdk/python/management/管理-pipeline/update-pipeline-order"
                    },
                    {
                      "title": "删除 Pipeline 函数",
                      "path": "/reference/sdk/python/management/管理-pipeline/delete-pipeline-function"
                    },
                    {
                      "title": "获取 Pipeline 函数列表",
                      "path": "/reference/sdk/python/management/管理-pipeline/list-pipeline-functions"
                    },
                    {
                      "title": "获取 Pipeline 日志",
                      "path": "/reference/sdk/python/management/管理-pipeline/get-pipeline-logs"
                    }
                  ]
                },
                {
                  "title": "管理 Webhook",
                  "children": [
                    {
                      "title": "创建 Webhook",
                      "path": "/reference/sdk/python/management/管理-webhook/create-webhook"
                    },
                    {
                      "title": "获取 Webhook 列表",
                      "path": "/reference/sdk/python/management/管理-webhook/list-webhooks"
                    },
                    {
                      "title": "修改 Webhook 配置",
                      "path": "/reference/sdk/python/management/管理-webhook/update-webhook"
                    },
                    {
                      "title": "删除 Webhook",
                      "path": "/reference/sdk/python/management/管理-webhook/delete-webhook"
                    },
                    {
                      "title": "获取 Webhook 日志",
                      "path": "/reference/sdk/python/management/管理-webhook/get-webhook-logs"
                    },
                    {
                      "title": "手动触发 Webhook 执行",
                      "path": "/reference/sdk/python/management/管理-webhook/trigger-webhook"
                    },
                    {
                      "title": "获取 Webhook 详情",
                      "path": "/reference/sdk/python/management/管理-webhook/get-webhook"
                    },
                    {
                      "title": "获取 Webhook 事件列表",
                      "path": "/reference/sdk/python/management/管理-webhook/get-webhook-event-list"
                    }
                  ]
                },
                {
                  "title": "管理审计日志",
                  "children": [
                    {
                      "title": "获取用户行为日志",
                      "path": "/reference/sdk/python/management/管理审计日志/get-user-action-logs"
                    },
                    {
                      "title": "获取管理员操作日志",
                      "path": "/reference/sdk/python/management/管理审计日志/get-admin-audit-logs"
                    }
                  ]
                },
                {
                  "title": "管理计量计费",
                  "children": [
                    {
                      "title": "获取套餐详情",
                      "path": "/reference/sdk/python/management/管理计量计费/get-current-package-info"
                    },
                    {
                      "title": "获取用量详情",
                      "path": "/reference/sdk/python/management/管理计量计费/get-usage-info"
                    },
                    {
                      "title": "获取 MAU 使用记录",
                      "path": "/reference/sdk/python/management/管理计量计费/get-mau-period-usage-history"
                    },
                    {
                      "title": "获取所有权益",
                      "path": "/reference/sdk/python/management/管理计量计费/get-all-rights-items"
                    },
                    {
                      "title": "获取订单列表",
                      "path": "/reference/sdk/python/management/管理计量计费/get-orders"
                    },
                    {
                      "title": "获取订单详情",
                      "path": "/reference/sdk/python/management/管理计量计费/get-order-detail"
                    },
                    {
                      "title": "获取订单支付明细",
                      "path": "/reference/sdk/python/management/管理计量计费/get-order-pay-detail"
                    }
                  ]
                },
                {
                  "title": "管理终端设备",
                  "children": [
                    {
                      "title": "移除绑定(用户详情页)",
                      "path": "/reference/sdk/python/management/管理终端设备/delete-device-by-user"
                    },
                    {
                      "title": "挂起设备(用户详情页)",
                      "path": "/reference/sdk/python/management/管理终端设备/suspend-device-by-user"
                    },
                    {
                      "title": "停用设备(用户详情页)",
                      "path": "/reference/sdk/python/management/管理终端设备/disable-device-by-user"
                    },
                    {
                      "title": "启用设备(用户详情页)",
                      "path": "/reference/sdk/python/management/管理终端设备/enable-device-by-user"
                    },
                    {
                      "title": "获取设备状态",
                      "path": "/reference/sdk/python/management/管理终端设备/device-status"
                    },
                    {
                      "title": "移除设备",
                      "path": "/reference/sdk/python/management/管理终端设备/delete-device"
                    },
                    {
                      "title": "挂起设备",
                      "path": "/reference/sdk/python/management/管理终端设备/suspend-device"
                    },
                    {
                      "title": "停用设备",
                      "path": "/reference/sdk/python/management/管理终端设备/disable-device"
                    },
                    {
                      "title": "启用设备",
                      "path": "/reference/sdk/python/management/管理终端设备/enable-device"
                    }
                  ]
                },
                {
                  "title": "管理风险名单",
                  "children": [
                    {
                      "title": "获取 ip 列表",
                      "path": "/reference/sdk/python/management/管理风险名单/ip-list"
                    },
                    {
                      "title": "获取用户列表",
                      "path": "/reference/sdk/python/management/管理风险名单/user-list"
                    },
                    {
                      "title": "获取风险策略列表",
                      "path": "/reference/sdk/python/management/管理风险名单/risk-list-policy"
                    }
                  ]
                },
                {
                  "title": "事件",
                  "path": "/reference/sdk/python/management/events.md"
                }
              ]
            }
          ]
        },
        {
          title: 'PHP',
          path: '/reference/sdk/php/',
          redirect: '/reference/sdk/php/install.html',
          children: [
            {
              title: '安装使用',
              path: '/reference/sdk/php/install.md'
            },
            {
              title: '用户认证模块',
              children: [
                {
                  title: '登录',
                  children: [
                    {
                      title: '账号密码登录',
                      path: '/reference/sdk/php/authentication/登录/signin-by-account-password.md'
                    },
                    {
                      title: '用户名密码登录',
                      path: '/reference/sdk/php/authentication/登录/signin-by-username-password.md'
                    },
                    {
                      title: '手机号密码登录',
                      path: '/reference/sdk/php/authentication/登录/signin-by-phone-password.md'
                    },
                    {
                      title: '邮箱密码登录',
                      path: '/reference/sdk/php/authentication/登录/signin-by-email-password.md'
                    },
                    {
                      title: '邮箱验证码登录',
                      path: '/reference/sdk/php/authentication/登录/signin-by-email-passcode.md'
                    },
                    {
                      title: '手机号验证码登录',
                      path: '/reference/sdk/php/authentication/登录/signin-by-phone-passcode.md'
                    },
                    {
                      title: 'LDAP 账号登录',
                      path: '/reference/sdk/php/authentication/登录/signin-by-ldap.md'
                    },
                    {
                      title: 'AD 账号登录',
                      path: '/reference/sdk/php/authentication/登录/signin-by-ad.md'
                    },
                    {
                      title: '使用用户凭证登录',
                      path: '/reference/sdk/php/authentication/登录/signin'
                    },
                    {
                      title: '使用移动端社会化登录',
                      path: '/reference/sdk/php/authentication/登录/signin-by-mobile'
                    },
                    {
                      title: '获取支付宝 AuthInfo',
                      path: '/reference/sdk/php/authentication/登录/get-alipay-authinfo'
                    },
                    {
                      title: '生成用于登录的二维码',
                      path: '/reference/sdk/php/authentication/登录/gene-qrcode'
                    },
                    {
                      title: '查询二维码状态',
                      path: '/reference/sdk/php/authentication/登录/check-qrcode-status'
                    },
                    {
                      title: '使用二维码 ticket 换取 TokenSet',
                      path: '/reference/sdk/php/authentication/登录/exchange-tokenset-with-qrcode-ticket'
                    },
                    {
                      title: '自建 APP 扫码登录：APP 端修改二维码状态',
                      path: '/reference/sdk/php/authentication/登录/change-qrcode-status'
                    }
                  ]
                },
                {
                  title: '登出',
                  children: [
                    {
                      title: '前端登出',
                      path: '/reference/sdk/php/authentication/登出/front-channel-logout.md'
                    },
                    {
                      title: '后端登出',
                      path: '/reference/sdk/php/authentication/登出/backend-channel-logout.md'
                    }
                  ]
                },
                {
                  title: '注册',
                  children: [
                    {
                      title: '用户名密码注册',
                      path: '/reference/sdk/php/authentication/注册/signup-by-username-password.md'
                    },
                    {
                      title: '邮箱密码注册',
                      path: '/reference/sdk/php/authentication/注册/signup-by-email-password.md'
                    },
                    {
                      title: '手机号验证码注册',
                      path: '/reference/sdk/php/authentication/注册/signup-by-phone-passcode.md'
                    },
                    {
                      title: '邮箱验证码注册',
                      path: '/reference/sdk/php/authentication/注册/signup-by-email-passcode.md'
                    },
                    {
                      title: '注册',
                      path: '/reference/sdk/php/authentication/注册/signup'
                    }
                  ]
                },
                {
                  title: '用户资料',
                  children: [
                    {
                      title: '获取用户资料',
                      path: '/reference/sdk/php/authentication/用户资料/get-profile'
                    },
                    {
                      title: '修改用户资料',
                      path: '/reference/sdk/php/authentication/用户资料/update-profile'
                    },
                    {
                      title: '绑定邮箱',
                      path: '/reference/sdk/php/authentication/用户资料/bind-email'
                    },
                    {
                      title: '解绑邮箱',
                      path: '/reference/sdk/php/authentication/用户资料/unbind-email'
                    },
                    {
                      title: '绑定手机号',
                      path: '/reference/sdk/php/authentication/用户资料/bind-phone'
                    },
                    {
                      title: '解绑手机号',
                      path: '/reference/sdk/php/authentication/用户资料/unbind-phone'
                    },
                    {
                      title: '获取密码强度和账号安全等级评分',
                      path: '/reference/sdk/php/authentication/用户资料/get-security-info'
                    },
                    {
                      title: '修改密码',
                      path: '/reference/sdk/php/authentication/用户资料/update-password'
                    },
                    {
                      title: '发起修改邮箱的验证请求',
                      path: '/reference/sdk/php/authentication/用户资料/verify-update-email-request'
                    },
                    {
                      title: '修改邮箱',
                      path: '/reference/sdk/php/authentication/用户资料/update-email'
                    },
                    {
                      title: '发起修改手机号的验证请求',
                      path: '/reference/sdk/php/authentication/用户资料/verify-update-phone-request'
                    },
                    {
                      title: '修改手机号',
                      path: '/reference/sdk/php/authentication/用户资料/update-phone'
                    },
                    {
                      title: '发起忘记密码请求',
                      path: '/reference/sdk/php/authentication/用户资料/verify-reset-password-request'
                    },
                    {
                      title: '忘记密码',
                      path: '/reference/sdk/php/authentication/用户资料/reset-password'
                    },
                    {
                      title: '发起注销账号请求',
                      path: '/reference/sdk/php/authentication/用户资料/verify-delete-account-request'
                    },
                    {
                      title: '注销账户',
                      path: '/reference/sdk/php/authentication/用户资料/delete-account'
                    }
                  ]
                },
                {
                  title: '账号绑定',
                  children: [
                    {
                      title: '生成绑定外部身份源的链接',
                      path: '/reference/sdk/php/authentication/账号绑定/generate-link-extidp-url'
                    },
                    {
                      title: '解绑外部身份源',
                      path: '/reference/sdk/php/authentication/账号绑定/unlink-extidp'
                    },
                    {
                      title: '获取绑定的外部身份源',
                      path: '/reference/sdk/php/authentication/账号绑定/get-identities'
                    },
                    {
                      title: '获取应用开启的外部身份源列表',
                      path: '/reference/sdk/php/authentication/账号绑定/get-application-enabled-extidps'
                    }
                  ]
                },
                {
                  title: 'MFA 要素管理',
                  children: [
                    {
                      title: '发起绑定 MFA 认证要素请求',
                      path: '/reference/sdk/php/authentication/mfa-要素管理/send-enroll-factor-request'
                    },
                    {
                      title: '绑定 MFA 认证要素',
                      path: '/reference/sdk/php/authentication/mfa-要素管理/enroll-factor'
                    },
                    {
                      title: '解绑 MFA 认证要素',
                      path: '/reference/sdk/php/authentication/mfa-要素管理/reset-factor'
                    },
                    {
                      title: '获取绑定的所有 MFA 认证要素',
                      path: '/reference/sdk/php/authentication/mfa-要素管理/list-enrolled-factors'
                    },
                    {
                      title: '获取绑定的某个 MFA 认证要素',
                      path: '/reference/sdk/php/authentication/mfa-要素管理/get-factor'
                    },
                    {
                      title: '获取可绑定的 MFA 认证要素',
                      path: '/reference/sdk/php/authentication/mfa-要素管理/list-factors-to-enroll'
                    }
                  ]
                },
                {
                  title: '用户相关资源',
                  children: [
                    {
                      title: '获取登录日志',
                      path: '/reference/sdk/php/authentication/用户相关资源/get-my-login-history'
                    },
                    {
                      title: '获取登录应用',
                      path: '/reference/sdk/php/authentication/用户相关资源/get-my-logged-in-apps'
                    },
                    {
                      title: '获取具备访问权限的应用',
                      path: '/reference/sdk/php/authentication/用户相关资源/get-my-accessible-apps'
                    },
                    {
                      title: '获取租户列表',
                      path: '/reference/sdk/php/authentication/用户相关资源/get-my-tenant-list'
                    },
                    {
                      title: '获取角色列表',
                      path: '/reference/sdk/php/authentication/用户相关资源/get-my-role-list'
                    },
                    {
                      title: '获取分组列表',
                      path: '/reference/sdk/php/authentication/用户相关资源/get-my-group-list'
                    },
                    {
                      title: '获取部门列表',
                      path: '/reference/sdk/php/authentication/用户相关资源/get-my-department-list'
                    },
                    {
                      title: '获取被授权的资源列表',
                      path: '/reference/sdk/php/authentication/用户相关资源/get-my-authorized-resources'
                    }
                  ]
                },
                {
                  title: '消息服务',
                  children: [
                    {
                      title: '发送短信',
                      path: '/reference/sdk/php/authentication/消息服务/send-sms'
                    },
                    {
                      title: '发送邮件',
                      path: '/reference/sdk/php/authentication/消息服务/send-email'
                    }
                  ]
                },
                {
                  title: '微信相关接口',
                  children: [
                    {
                      title: '解密微信小程序数据',
                      path: '/reference/sdk/php/authentication/微信相关接口/decrypt-wechat-miniprogram-data'
                    },
                    {
                      title: '获取小程序的手机号',
                      path: '/reference/sdk/php/authentication/微信相关接口/get-wechat-miniprogram-phone'
                    },
                    {
                      title:
                        '获取 Authing 服务器缓存的微信小程序、公众号 Access Token',
                      path: '/reference/sdk/php/authentication/微信相关接口/get-wechat-access-token'
                    }
                  ]
                },
                {
                  title: '其他',
                  children: [
                    {
                      title: '获取服务器公开信息',
                      path: '/reference/sdk/php/authentication/其他/system'
                    },
                    {
                      title: '获取国家列表',
                      path: '/reference/sdk/php/authentication/其他/get-country-list'
                    }
                  ]
                },
                {
                  title: 'OIDC 模块',
                  path: '/reference/sdk/php/authentication/oidc.md'
                },
                {
                  title: 'OAuth 模块',
                  path: '/reference/sdk/php/authentication/oauth.md'
                },
                {
                  title: 'SAML 模块',
                  path: '/reference/sdk/php/authentication/saml.md'
                },
                {
                  title: 'CAS 模块',
                  path: '/reference/sdk/php/authentication/cas.md'
                },
                {
                  "title": "事件",
                  "path": "/reference/sdk/php/authentication/events.md"
                }
              ]
            },
            {
              title: '管理模块',
              children: [
                {
                  title: '管理用户',
                  children: [
                    {
                      title: '获取用户列表',
                      path: '/reference/sdk/php/management/管理用户/list-users'
                    },
                    {
                      title: '获取用户信息',
                      path: '/reference/sdk/php/management/管理用户/get-user'
                    },
                    {
                      title: '批量获取用户信息',
                      path: '/reference/sdk/php/management/管理用户/get-user-batch'
                    },
                    {
                      title: '创建用户',
                      path: '/reference/sdk/php/management/管理用户/create-user'
                    },
                    {
                      title: '批量创建用户',
                      path: '/reference/sdk/php/management/管理用户/create-users-batch'
                    },
                    {
                      title: '修改用户资料',
                      path: '/reference/sdk/php/management/管理用户/update-user'
                    },
                    {
                      title: '批量修改用户资料',
                      path: '/reference/sdk/php/management/管理用户/update-user-batch'
                    },
                    {
                      title: '删除用户',
                      path: '/reference/sdk/php/management/管理用户/delete-users-batch'
                    },
                    {
                      title: '获取用户的外部身份源',
                      path: '/reference/sdk/php/management/管理用户/get-user-identities'
                    },
                    {
                      title: '获取用户角色列表',
                      path: '/reference/sdk/php/management/管理用户/get-user-roles'
                    },
                    {
                      title: '获取用户实名认证信息',
                      path: '/reference/sdk/php/management/管理用户/get-user-principal-authentication-info'
                    },
                    {
                      title: '删除用户实名认证信息',
                      path: '/reference/sdk/php/management/管理用户/reset-user-principal-authentication-info'
                    },
                    {
                      title: '获取用户部门列表',
                      path: '/reference/sdk/php/management/管理用户/get-user-departments'
                    },
                    {
                      title: '设置用户所在部门',
                      path: '/reference/sdk/php/management/管理用户/set-user-departments'
                    },
                    {
                      title: '获取用户分组列表',
                      path: '/reference/sdk/php/management/管理用户/get-user-groups'
                    },
                    {
                      title: '获取用户 MFA 绑定信息',
                      path: '/reference/sdk/php/management/管理用户/get-user-mfa-info'
                    },
                    {
                      title: '获取已归档的用户列表',
                      path: '/reference/sdk/php/management/管理用户/list-archived-users'
                    },
                    {
                      title: '强制下线用户',
                      path: '/reference/sdk/php/management/管理用户/kick-users'
                    },
                    {
                      title: '判断用户是否存在',
                      path: '/reference/sdk/php/management/管理用户/is-user-exists'
                    },
                    {
                      title: '获取用户可访问的应用',
                      path: '/reference/sdk/php/management/管理用户/get-user-accessible-apps'
                    },
                    {
                      title: '获取用户授权的应用',
                      path: '/reference/sdk/php/management/管理用户/get-user-authorized-apps'
                    },
                    {
                      title: '判断用户是否有某个角色',
                      path: '/reference/sdk/php/management/管理用户/has-any-role'
                    },
                    {
                      title: '获取用户的登录历史记录',
                      path: '/reference/sdk/php/management/管理用户/get-user-login-history'
                    },
                    {
                      title: '获取用户曾经登录过的应用',
                      path: '/reference/sdk/php/management/管理用户/get-user-loggedin-apps'
                    },
                    {
                      title: '获取用户曾经登录过的身份源',
                      path: '/reference/sdk/php/management/管理用户/get-user-logged-in-identities'
                    },
                    {
                      title: '用户离职',
                      path: '/reference/sdk/php/management/管理用户/resign-user'
                    },
                    {
                      title: '批量用户离职',
                      path: '/reference/sdk/php/management/管理用户/resign-user-batch'
                    },
                    {
                      title: '获取用户被授权的所有资源',
                      path: '/reference/sdk/php/management/管理用户/get-user-authorized-resources'
                    },
                    {
                      title: '检查某个用户在应用下是否具备 Session 登录态',
                      path: '/reference/sdk/php/management/管理用户/check-session-status'
                    },
                    {
                      title: '导入用户的 OTP',
                      path: '/reference/sdk/php/management/管理用户/import-otp'
                    }
                  ]
                },
                {
                  title: '管理组织机构',
                  children: [
                    {
                      title: '获取组织机构详情',
                      path: '/reference/sdk/php/management/管理组织机构/get-organization'
                    },
                    {
                      title: '批量获取组织机构详情',
                      path: '/reference/sdk/php/management/管理组织机构/get-organization-batch'
                    },
                    {
                      title: '获取组织机构列表',
                      path: '/reference/sdk/php/management/管理组织机构/list-organizations'
                    },
                    {
                      title: '创建组织机构',
                      path: '/reference/sdk/php/management/管理组织机构/create-organization'
                    },
                    {
                      title: '修改组织机构',
                      path: '/reference/sdk/php/management/管理组织机构/update-organization'
                    },
                    {
                      title: '删除组织机构',
                      path: '/reference/sdk/php/management/管理组织机构/delete-organization'
                    },
                    {
                      title: '搜索组织机构列表',
                      path: '/reference/sdk/php/management/管理组织机构/search-organizations'
                    },
                    {
                      title: '获取部门信息',
                      path: '/reference/sdk/php/management/管理组织机构/get-department'
                    },
                    {
                      title: '创建部门',
                      path: '/reference/sdk/php/management/管理组织机构/create-department'
                    },
                    {
                      title: '修改部门',
                      path: '/reference/sdk/php/management/管理组织机构/update-department'
                    },
                    {
                      title: '删除部门',
                      path: '/reference/sdk/php/management/管理组织机构/delete-department'
                    },
                    {
                      title: '搜索部门',
                      path: '/reference/sdk/php/management/管理组织机构/search-departments'
                    },
                    {
                      title: '获取子部门列表',
                      path: '/reference/sdk/php/management/管理组织机构/list-children-departments'
                    },
                    {
                      title: '获取部门成员列表',
                      path: '/reference/sdk/php/management/管理组织机构/list-department-members'
                    },
                    {
                      title: '获取部门直属成员 ID 列表',
                      path: '/reference/sdk/php/management/管理组织机构/list-department-member-ids'
                    },
                    {
                      title: '搜索部门下的成员',
                      path: '/reference/sdk/php/management/管理组织机构/search-department-members'
                    },
                    {
                      title: '部门下添加成员',
                      path: '/reference/sdk/php/management/管理组织机构/add-department-members'
                    },
                    {
                      title: '部门下删除成员',
                      path: '/reference/sdk/php/management/管理组织机构/remove-department-members'
                    },
                    {
                      title: '获取父部门信息',
                      path: '/reference/sdk/php/management/管理组织机构/get-parent-department'
                    },
                    {
                      title: '判断用户是否在某个部门下',
                      path: '/reference/sdk/php/management/管理组织机构/is-user-in-department'
                    }
                  ]
                },
                {
                  title: '管理角色',
                  children: [
                    {
                      title: '获取角色详情',
                      path: '/reference/sdk/php/management/管理角色/get-role'
                    },
                    {
                      title: '分配角色',
                      path: '/reference/sdk/php/management/管理角色/assign-role'
                    },
                    {
                      title: '移除分配的角色',
                      path: '/reference/sdk/php/management/管理角色/revoke-role'
                    },
                    {
                      title: '获取角色被授权的资源列表',
                      path: '/reference/sdk/php/management/管理角色/get-role-authorized-resources'
                    },
                    {
                      title: '获取角色成员列表',
                      path: '/reference/sdk/php/management/管理角色/list-role-members'
                    },
                    {
                      title: '获取角色的部门列表',
                      path: '/reference/sdk/php/management/管理角色/list-role-departments'
                    },
                    {
                      title: '创建角色',
                      path: '/reference/sdk/php/management/管理角色/create-role'
                    },
                    {
                      title: '获取角色列表',
                      path: '/reference/sdk/php/management/管理角色/list-roles'
                    },
                    {
                      title: '删除角色',
                      path: '/reference/sdk/php/management/管理角色/delete-roles-batch'
                    },
                    {
                      title: '批量创建角色',
                      path: '/reference/sdk/php/management/管理角色/create-roles-batch'
                    },
                    {
                      title: '修改角色',
                      path: '/reference/sdk/php/management/管理角色/update-role'
                    }
                  ]
                },
                {
                  title: '管理用户分组',
                  children: [
                    {
                      title: '获取分组详情',
                      path: '/reference/sdk/php/management/管理用户分组/get-group'
                    },
                    {
                      title: '获取分组列表',
                      path: '/reference/sdk/php/management/管理用户分组/list-groups'
                    },
                    {
                      title: '创建分组',
                      path: '/reference/sdk/php/management/管理用户分组/create-group'
                    },
                    {
                      title: '批量创建分组',
                      path: '/reference/sdk/php/management/管理用户分组/create-groups-batch'
                    },
                    {
                      title: '修改分组',
                      path: '/reference/sdk/php/management/管理用户分组/update-group'
                    },
                    {
                      title: '批量删除分组',
                      path: '/reference/sdk/php/management/管理用户分组/delete-groups-batch'
                    },
                    {
                      title: '添加分组成员',
                      path: '/reference/sdk/php/management/管理用户分组/add-group-members'
                    },
                    {
                      title: '批量移除分组成员',
                      path: '/reference/sdk/php/management/管理用户分组/remove-group-members'
                    },
                    {
                      title: '获取分组成员列表',
                      path: '/reference/sdk/php/management/管理用户分组/list-group-members'
                    },
                    {
                      title: '获取分组被授权的资源列表',
                      path: '/reference/sdk/php/management/管理用户分组/get-group-authorized-resources'
                    }
                  ]
                },
                {
                  title: '管理自定义字段',
                  children: [
                    {
                      title: '获取用户内置字段列表',
                      path: '/reference/sdk/php/management/管理自定义字段/get-user-base-fields'
                    },
                    {
                      title: '修改用户内置字段配置',
                      path: '/reference/sdk/php/management/管理自定义字段/set-user-base-fields'
                    },
                    {
                      title: '获取自定义字段列表',
                      path: '/reference/sdk/php/management/管理自定义字段/get-custom-fields'
                    },
                    {
                      title: '创建/修改自定义字段定义',
                      path: '/reference/sdk/php/management/管理自定义字段/set-custom-fields'
                    },
                    {
                      title: '设置自定义字段的值',
                      path: '/reference/sdk/php/management/管理自定义字段/set-custom-data'
                    },
                    {
                      title: '获取用户、分组、角色、组织机构的自定义字段值',
                      path: '/reference/sdk/php/management/管理自定义字段/get-custom-data'
                    }
                  ]
                },
                {
                  title: '管理资源与权限',
                  children: [
                    {
                      title: '创建资源',
                      path: '/reference/sdk/php/management/管理资源与权限/create-resource'
                    },
                    {
                      title: '批量创建资源',
                      path: '/reference/sdk/php/management/管理资源与权限/create-resources-batch'
                    },
                    {
                      title: '获取资源详情',
                      path: '/reference/sdk/php/management/管理资源与权限/get-resource'
                    },
                    {
                      title: '批量获取资源详情',
                      path: '/reference/sdk/php/management/管理资源与权限/get-resources-batch'
                    },
                    {
                      title: '分页获取资源列表',
                      path: '/reference/sdk/php/management/管理资源与权限/list-resources'
                    },
                    {
                      title: '修改资源',
                      path: '/reference/sdk/php/management/管理资源与权限/update-resource'
                    },
                    {
                      title: '删除资源',
                      path: '/reference/sdk/php/management/管理资源与权限/delete-resource'
                    },
                    {
                      title: '批量删除资源',
                      path: '/reference/sdk/php/management/管理资源与权限/delete-resources-batch'
                    },
                    {
                      title: '关联/取消关联应用资源到租户',
                      path: '/reference/sdk/php/management/管理资源与权限/associate-tenant-resource'
                    },
                    {
                      title: '创建权限分组',
                      path: '/reference/sdk/php/management/管理资源与权限/create-namespace'
                    },
                    {
                      title: '批量创建权限分组',
                      path: '/reference/sdk/php/management/管理资源与权限/create-namespaces-batch'
                    },
                    {
                      title: '获取权限分组详情',
                      path: '/reference/sdk/php/management/管理资源与权限/get-namespace'
                    },
                    {
                      title: '批量获取权限分组详情',
                      path: '/reference/sdk/php/management/管理资源与权限/get-namespaces-batch'
                    },
                    {
                      title: '修改权限分组信息',
                      path: '/reference/sdk/php/management/管理资源与权限/update-namespace'
                    },
                    {
                      title: '删除权限分组信息',
                      path: '/reference/sdk/php/management/管理资源与权限/delete-namespace'
                    },
                    {
                      title: '批量删除权限分组',
                      path: '/reference/sdk/php/management/管理资源与权限/delete-namespaces-batch'
                    },
                    {
                      title: '授权资源',
                      path: '/reference/sdk/php/management/管理资源与权限/authorize-resources'
                    },
                    {
                      title: '获取某个主体被授权的资源列表',
                      path: '/reference/sdk/php/management/管理资源与权限/get-authorized-resources'
                    },
                    {
                      title: '判断用户是否对某个资源的某个操作有权限',
                      path: '/reference/sdk/php/management/管理资源与权限/is-action-allowed'
                    },
                    {
                      title: '获取资源被授权的主体',
                      path: '/reference/sdk/php/management/管理资源与权限/get-resource-authorized-targets'
                    }
                  ]
                },
                {
                  title: '管理应用',
                  children: [
                    {
                      title: '获取应用详情',
                      path: '/reference/sdk/php/management/管理应用/get-application'
                    },
                    {
                      title: '获取应用列表',
                      path: '/reference/sdk/php/management/管理应用/list-applications'
                    },
                    {
                      title: '获取应用简单信息',
                      path: '/reference/sdk/php/management/管理应用/get-application-simple-info'
                    },
                    {
                      title: '获取应用简单信息列表',
                      path: '/reference/sdk/php/management/管理应用/list-application-simple-info'
                    },
                    {
                      title: '创建应用',
                      path: '/reference/sdk/php/management/管理应用/create-application'
                    },
                    {
                      title: '删除应用',
                      path: '/reference/sdk/php/management/管理应用/delete-application'
                    },
                    {
                      title: '获取应用密钥',
                      path: '/reference/sdk/php/management/管理应用/get-application-secret'
                    },
                    {
                      title: '刷新应用密钥',
                      path: '/reference/sdk/php/management/管理应用/refresh-application-secret'
                    },
                    {
                      title: '获取应用当前登录用户',
                      path: '/reference/sdk/php/management/管理应用/list-application-active-users'
                    },
                    {
                      title: '获取应用默认访问授权策略',
                      path: '/reference/sdk/php/management/管理应用/get-application-permission-strategy'
                    },
                    {
                      title: '更新应用默认访问授权策略',
                      path: '/reference/sdk/php/management/管理应用/update-application-permission-strategy'
                    },
                    {
                      title: '授权应用访问权限',
                      path: '/reference/sdk/php/management/管理应用/authorize-application-access'
                    },
                    {
                      title: '删除应用访问授权记录',
                      path: '/reference/sdk/php/management/管理应用/revoke-application-access'
                    },
                    {
                      title: '检测域名是否可用',
                      path: '/reference/sdk/php/management/管理应用/check-domain-available'
                    }
                  ]
                },
                {
                  title: '管理身份源',
                  children: [
                    {
                      title: '获取身份源列表',
                      path: '/reference/sdk/php/management/管理身份源/list-ext-idp'
                    },
                    {
                      title: '获取身份源详情',
                      path: '/reference/sdk/php/management/管理身份源/get-ext-idp'
                    },
                    {
                      title: '创建身份源',
                      path: '/reference/sdk/php/management/管理身份源/create-ext-idp'
                    },
                    {
                      title: '更新身份源配置',
                      path: '/reference/sdk/php/management/管理身份源/update-ext-idp'
                    },
                    {
                      title: '删除身份源',
                      path: '/reference/sdk/php/management/管理身份源/delete-ext-idp'
                    },
                    {
                      title: '在某个已有身份源下创建新连接',
                      path: '/reference/sdk/php/management/管理身份源/create-ext-idp-conn'
                    },
                    {
                      title: '更新身份源连接',
                      path: '/reference/sdk/php/management/管理身份源/update-ext-idp-conn'
                    },
                    {
                      title: '删除身份源连接',
                      path: '/reference/sdk/php/management/管理身份源/delete-ext-idp-conn'
                    },
                    {
                      title: '身份源连接开关',
                      path: '/reference/sdk/php/management/管理身份源/change-ext-idp-conn-state'
                    },
                    {
                      title: '租户关联身份源',
                      path: '/reference/sdk/php/management/管理身份源/change-ext-idp-conn-association-state'
                    },
                    {
                      title: '租户控制台获取身份源列表',
                      path: '/reference/sdk/php/management/管理身份源/list-tenant-ext-idp'
                    },
                    {
                      title: '身份源下应用的连接详情',
                      path: '/reference/sdk/php/management/管理身份源/ext-idp-conn-apps'
                    }
                  ]
                },
                {
                  title: '管理安全配置',
                  children: [
                    {
                      title: '获取安全配置',
                      path: '/reference/sdk/php/management/管理安全配置/get-security-settings'
                    },
                    {
                      title: '修改安全配置',
                      path: '/reference/sdk/php/management/管理安全配置/update-security-settings'
                    },
                    {
                      title: '获取全局多因素认证配置',
                      path: '/reference/sdk/php/management/管理安全配置/get-global-mfa-settings'
                    },
                    {
                      title: '修改全局多因素认证配置',
                      path: '/reference/sdk/php/management/管理安全配置/update-global-mfa-settings'
                    }
                  ]
                },
                {
                  title: '管理消息服务',
                  children: [
                    {
                      title: '获取邮件模版列表',
                      path: '/reference/sdk/php/management/管理消息服务/get-email-templates'
                    },
                    {
                      title: '修改邮件模版',
                      path: '/reference/sdk/php/management/管理消息服务/update-email-template'
                    },
                    {
                      title: '预览邮件模版',
                      path: '/reference/sdk/php/management/管理消息服务/preview-email-template'
                    },
                    {
                      title: '获取第三方邮件服务配置',
                      path: '/reference/sdk/php/management/管理消息服务/get-email-provider'
                    },
                    {
                      title: '配置第三方邮件服务',
                      path: '/reference/sdk/php/management/管理消息服务/config-email-provier'
                    }
                  ]
                },
                {
                  title: '管理同步中心',
                  children: [
                    {
                      title: '获取同步任务详情',
                      path: '/reference/sdk/php/management/管理同步中心/get-sync-task'
                    },
                    {
                      title: '获取同步任务列表',
                      path: '/reference/sdk/php/management/管理同步中心/list-sync-tasks'
                    },
                    {
                      title: '创建同步任务',
                      path: '/reference/sdk/php/management/管理同步中心/create-sync-task'
                    },
                    {
                      title: '修改同步任务',
                      path: '/reference/sdk/php/management/管理同步中心/update-sync-task'
                    },
                    {
                      title: '执行同步任务',
                      path: '/reference/sdk/php/management/管理同步中心/trigger-sync-task'
                    },
                    {
                      title: '获取同步作业详情',
                      path: '/reference/sdk/php/management/管理同步中心/get-sync-job'
                    },
                    {
                      title: '获取同步作业详情',
                      path: '/reference/sdk/php/management/管理同步中心/list-sync-jobs'
                    },
                    {
                      title: '获取同步作业详情',
                      path: '/reference/sdk/php/management/管理同步中心/list-sync-job-logs'
                    },
                    {
                      title: '获取同步风险操作列表',
                      path: '/reference/sdk/php/management/管理同步中心/list-sync-risk-operations'
                    },
                    {
                      title: '执行同步风险操作',
                      path: '/reference/sdk/php/management/管理同步中心/trigger-sync-risk-operations'
                    },
                    {
                      title: '取消同步风险操作',
                      path: '/reference/sdk/php/management/管理同步中心/cancel-sync-risk-operation'
                    }
                  ]
                },
                {
                  title: '管理 Pipeline',
                  children: [
                    {
                      title: '创建 Pipeline 函数',
                      path: '/reference/sdk/php/management/管理-pipeline/create-pipeline-function'
                    },
                    {
                      title: '获取 Pipeline 函数详情',
                      path: '/reference/sdk/php/management/管理-pipeline/get-pipeline-function'
                    },
                    {
                      title: '重新上传 Pipeline 函数',
                      path: '/reference/sdk/php/management/管理-pipeline/reupload-pipeline-function'
                    },
                    {
                      title: '修改 Pipeline 函数',
                      path: '/reference/sdk/php/management/管理-pipeline/update-pipeline-function'
                    },
                    {
                      title: '修改 Pipeline 函数顺序',
                      path: '/reference/sdk/php/management/管理-pipeline/update-pipeline-order'
                    },
                    {
                      title: '删除 Pipeline 函数',
                      path: '/reference/sdk/php/management/管理-pipeline/delete-pipeline-function'
                    },
                    {
                      title: '获取 Pipeline 函数列表',
                      path: '/reference/sdk/php/management/管理-pipeline/list-pipeline-functions'
                    },
                    {
                      title: '获取 Pipeline 日志',
                      path: '/reference/sdk/php/management/管理-pipeline/get-pipeline-logs'
                    }
                  ]
                },
                {
                  title: '管理 Webhook',
                  children: [
                    {
                      title: '创建 Webhook',
                      path: '/reference/sdk/php/management/管理-webhook/create-webhook'
                    },
                    {
                      title: '获取 Webhook 列表',
                      path: '/reference/sdk/php/management/管理-webhook/list-webhooks'
                    },
                    {
                      title: '修改 Webhook 配置',
                      path: '/reference/sdk/php/management/管理-webhook/update-webhook'
                    },
                    {
                      title: '删除 Webhook',
                      path: '/reference/sdk/php/management/管理-webhook/delete-webhook'
                    },
                    {
                      title: '获取 Webhook 日志',
                      path: '/reference/sdk/php/management/管理-webhook/get-webhook-logs'
                    },
                    {
                      title: '手动触发 Webhook 执行',
                      path: '/reference/sdk/php/management/管理-webhook/trigger-webhook'
                    },
                    {
                      title: '获取 Webhook 详情',
                      path: '/reference/sdk/php/management/管理-webhook/get-webhook'
                    },
                    {
                      title: '获取 Webhook 事件列表',
                      path: '/reference/sdk/php/management/管理-webhook/get-webhook-event-list'
                    }
                  ]
                },
                {
                  title: '获取审计日志',
                  children: [
                    {
                      title: '获取用户行为日志',
                      path: '/reference/sdk/php/management/获取审计日志/get-user-action-logs'
                    },
                    {
                      title: '获取管理员操作日志',
                      path: '/reference/sdk/php/management/获取审计日志/get-admin-audit-logs'
                    }
                  ]
                },
                {
                  title: '管理计量计费',
                  children: [
                    {
                      title: '获取套餐详情',
                      path: '/reference/sdk/php/management/管理计量计费/get-current-package-info'
                    },
                    {
                      title: '获取用量详情',
                      path: '/reference/sdk/php/management/管理计量计费/get-usage-info'
                    },
                    {
                      title: '获取 MAU 使用记录',
                      path: '/reference/sdk/php/management/管理计量计费/get-mau-period-usage-history'
                    },
                    {
                      title: '获取所有权益',
                      path: '/reference/sdk/php/management/管理计量计费/get-all-rights-items'
                    },
                    {
                      title: '获取订单列表',
                      path: '/reference/sdk/php/management/管理计量计费/get-orders'
                    },
                    {
                      title: '获取订单详情',
                      path: '/reference/sdk/php/management/管理计量计费/get-order-detail'
                    },
                    {
                      title: '获取订单支付明细',
                      path: '/reference/sdk/php/management/管理计量计费/get-order-pay-detail'
                    }
                  ]
                },
                {
                  title: '事件',
                  path: '/reference/sdk/php/management/events.md'
                }
              ]
            }
          ]
        },
        {
          title: 'C#',
          path: '/reference/sdk/csharp/',
          redirect: '/reference/sdk/csharp/install.html',
          children: [
            {
              title: '安装使用',
              path: '/reference/sdk/csharp/install.md'
            },
            {
              title: '用户认证模块',
              children: [
                {
                  title: '登录',
                  children: [
                    {
                      title: '账号密码登录',
                      path: '/reference/sdk/csharp/authentication/登录/signin-by-account-password.md'
                    },
                    {
                      title: '用户名密码登录',
                      path: '/reference/sdk/csharp/authentication/登录/signin-by-username-password.md'
                    },
                    {
                      title: '手机号密码登录',
                      path: '/reference/sdk/csharp/authentication/登录/signin-by-phone-password.md'
                    },
                    {
                      title: '邮箱密码登录',
                      path: '/reference/sdk/csharp/authentication/登录/signin-by-email-password.md'
                    },
                    {
                      title: '邮箱验证码登录',
                      path: '/reference/sdk/csharp/authentication/登录/signin-by-email-passcode.md'
                    },
                    {
                      title: '手机号验证码登录',
                      path: '/reference/sdk/csharp/authentication/登录/signin-by-phone-passcode.md'
                    },
                    {
                      title: 'LDAP 账号登录',
                      path: '/reference/sdk/csharp/authentication/登录/signin-by-ldap.md'
                    },
                    {
                      title: 'AD 账号登录',
                      path: '/reference/sdk/csharp/authentication/登录/signin-by-ad.md'
                    },
                    {
                      title: '使用用户凭证登录',
                      path: '/reference/sdk/csharp/authentication/登录/signin'
                    },
                    {
                      title: '使用移动端社会化登录',
                      path: '/reference/sdk/csharp/authentication/登录/signin-by-mobile'
                    },
                    {
                      title: '获取支付宝 AuthInfo',
                      path: '/reference/sdk/csharp/authentication/登录/get-alipay-authinfo'
                    },
                    {
                      title: '生成用于登录的二维码',
                      path: '/reference/sdk/csharp/authentication/登录/gene-qrcode'
                    },
                    {
                      title: '查询二维码状态',
                      path: '/reference/sdk/csharp/authentication/登录/check-qrcode-status'
                    },
                    {
                      title: '使用二维码 ticket 换取 TokenSet',
                      path: '/reference/sdk/csharp/authentication/登录/exchange-tokenset-with-qrcode-ticket'
                    },
                    {
                      title: '自建 APP 扫码登录：APP 端修改二维码状态',
                      path: '/reference/sdk/csharp/authentication/登录/change-qrcode-status'
                    }
                  ]
                },
                {
                  title: '登出',
                  children: [
                    {
                      title: '前端登出',
                      path: '/reference/sdk/csharp/authentication/登出/front-channel-logout.md'
                    },
                    {
                      title: '后端登出',
                      path: '/reference/sdk/csharp/authentication/登出/backend-channel-logout.md'
                    }
                  ]
                },
                {
                  title: '注册',
                  children: [
                    {
                      title: '用户名密码注册',
                      path: '/reference/sdk/csharp/authentication/注册/signup-by-username-password.md'
                    },
                    {
                      title: '邮箱密码注册',
                      path: '/reference/sdk/csharp/authentication/注册/signup-by-email-password.md'
                    },
                    {
                      title: '手机号验证码注册',
                      path: '/reference/sdk/csharp/authentication/注册/signup-by-phone-passcode.md'
                    },
                    {
                      title: '邮箱验证码注册',
                      path: '/reference/sdk/csharp/authentication/注册/signup-by-email-passcode.md'
                    },
                    {
                      title: '注册',
                      path: '/reference/sdk/csharp/authentication/注册/signup'
                    }
                  ]
                },
                {
                  title: '用户资料',
                  children: [
                    {
                      title: '获取用户资料',
                      path: '/reference/sdk/csharp/authentication/用户资料/get-profile'
                    },
                    {
                      title: '修改用户资料',
                      path: '/reference/sdk/csharp/authentication/用户资料/update-profile'
                    },
                    {
                      title: '绑定邮箱',
                      path: '/reference/sdk/csharp/authentication/用户资料/bind-email'
                    },
                    {
                      title: '解绑邮箱',
                      path: '/reference/sdk/csharp/authentication/用户资料/unbind-email'
                    },
                    {
                      title: '绑定手机号',
                      path: '/reference/sdk/csharp/authentication/用户资料/bind-phone'
                    },
                    {
                      title: '解绑手机号',
                      path: '/reference/sdk/csharp/authentication/用户资料/unbind-phone'
                    },
                    {
                      title: '获取密码强度和账号安全等级评分',
                      path: '/reference/sdk/csharp/authentication/用户资料/get-security-info'
                    },
                    {
                      title: '修改密码',
                      path: '/reference/sdk/csharp/authentication/用户资料/update-password'
                    },
                    {
                      title: '发起修改邮箱的验证请求',
                      path: '/reference/sdk/csharp/authentication/用户资料/verify-update-email-request'
                    },
                    {
                      title: '修改邮箱',
                      path: '/reference/sdk/csharp/authentication/用户资料/update-email'
                    },
                    {
                      title: '发起修改手机号的验证请求',
                      path: '/reference/sdk/csharp/authentication/用户资料/verify-update-phone-request'
                    },
                    {
                      title: '修改手机号',
                      path: '/reference/sdk/csharp/authentication/用户资料/update-phone'
                    },
                    {
                      title: '发起忘记密码请求',
                      path: '/reference/sdk/csharp/authentication/用户资料/verify-reset-password-request'
                    },
                    {
                      title: '忘记密码',
                      path: '/reference/sdk/csharp/authentication/用户资料/reset-password'
                    },
                    {
                      title: '发起注销账号请求',
                      path: '/reference/sdk/csharp/authentication/用户资料/verify-delete-account-request'
                    },
                    {
                      title: '注销账户',
                      path: '/reference/sdk/csharp/authentication/用户资料/delete-account'
                    }
                  ]
                },
                {
                  title: '账号绑定',
                  children: [
                    {
                      title: '生成绑定外部身份源的链接',
                      path: '/reference/sdk/csharp/authentication/账号绑定/generate-link-extidp-url'
                    },
                    {
                      title: '解绑外部身份源',
                      path: '/reference/sdk/csharp/authentication/账号绑定/unlink-extidp'
                    },
                    {
                      title: '获取绑定的外部身份源',
                      path: '/reference/sdk/csharp/authentication/账号绑定/get-identities'
                    },
                    {
                      title: '获取应用开启的外部身份源列表',
                      path: '/reference/sdk/csharp/authentication/账号绑定/get-application-enabled-extidps'
                    }
                  ]
                },
                {
                  title: 'MFA 要素管理',
                  children: [
                    {
                      title: '发起绑定 MFA 认证要素请求',
                      path: '/reference/sdk/csharp/authentication/mfa-要素管理/send-enroll-factor-request'
                    },
                    {
                      title: '绑定 MFA 认证要素',
                      path: '/reference/sdk/csharp/authentication/mfa-要素管理/enroll-factor'
                    },
                    {
                      title: '解绑 MFA 认证要素',
                      path: '/reference/sdk/csharp/authentication/mfa-要素管理/reset-factor'
                    },
                    {
                      title: '获取绑定的所有 MFA 认证要素',
                      path: '/reference/sdk/csharp/authentication/mfa-要素管理/list-enrolled-factors'
                    },
                    {
                      title: '获取绑定的某个 MFA 认证要素',
                      path: '/reference/sdk/csharp/authentication/mfa-要素管理/get-factor'
                    },
                    {
                      title: '获取可绑定的 MFA 认证要素',
                      path: '/reference/sdk/csharp/authentication/mfa-要素管理/list-factors-to-enroll'
                    }
                  ]
                },
                {
                  title: '用户相关资源',
                  children: [
                    {
                      title: '获取登录日志',
                      path: '/reference/sdk/csharp/authentication/用户相关资源/get-my-login-history'
                    },
                    {
                      title: '获取登录应用',
                      path: '/reference/sdk/csharp/authentication/用户相关资源/get-my-logged-in-apps'
                    },
                    {
                      title: '获取具备访问权限的应用',
                      path: '/reference/sdk/csharp/authentication/用户相关资源/get-my-accessible-apps'
                    },
                    {
                      title: '获取租户列表',
                      path: '/reference/sdk/csharp/authentication/用户相关资源/get-my-tenant-list'
                    },
                    {
                      title: '获取角色列表',
                      path: '/reference/sdk/csharp/authentication/用户相关资源/get-my-role-list'
                    },
                    {
                      title: '获取分组列表',
                      path: '/reference/sdk/csharp/authentication/用户相关资源/get-my-group-list'
                    },
                    {
                      title: '获取部门列表',
                      path: '/reference/sdk/csharp/authentication/用户相关资源/get-my-department-list'
                    },
                    {
                      title: '获取被授权的资源列表',
                      path: '/reference/sdk/csharp/authentication/用户相关资源/get-my-authorized-resources'
                    }
                  ]
                },
                {
                  title: '消息服务',
                  children: [
                    {
                      title: '发送短信',
                      path: '/reference/sdk/csharp/authentication/消息服务/send-sms'
                    },
                    {
                      title: '发送邮件',
                      path: '/reference/sdk/csharp/authentication/消息服务/send-email'
                    }
                  ]
                },
                {
                  title: '微信相关接口',
                  children: [
                    {
                      title: '解密微信小程序数据',
                      path: '/reference/sdk/csharp/authentication/微信相关接口/decrypt-wechat-miniprogram-data'
                    },
                    {
                      title: '获取小程序的手机号',
                      path: '/reference/sdk/csharp/authentication/微信相关接口/get-wechat-miniprogram-phone'
                    },
                    {
                      title:
                        '获取 Authing 服务器缓存的微信小程序、公众号 Access Token',
                      path: '/reference/sdk/csharp/authentication/微信相关接口/get-wechat-access-token'
                    }
                  ]
                },
                {
                  title: '其他',
                  children: [
                    {
                      title: '获取服务器公开信息',
                      path: '/reference/sdk/csharp/authentication/其他/system'
                    },
                    {
                      title: '获取国家列表',
                      path: '/reference/sdk/csharp/authentication/其他/get-country-list'
                    }
                  ]
                },
                {
                  title: 'OIDC 模块',
                  path: '/reference/sdk/csharp/authentication/oidc.md'
                },
                {
                  title: 'OAuth 模块',
                  path: '/reference/sdk/csharp/authentication/oauth.md'
                },
                {
                  title: 'SAML 模块',
                  path: '/reference/sdk/csharp/authentication/saml.md'
                },
                {
                  title: 'CAS 模块',
                  path: '/reference/sdk/csharp/authentication/cas.md'
                },
                {
                  "title": "事件",
                  "path": "/reference/sdk/csharp/authentication/events.md"
                }
              ]
            },
            {
              title: '管理模块',
              children: [
                {
                  title: '管理用户',
                  children: [
                    {
                      title: '获取用户列表',
                      path: '/reference/sdk/csharp/management/管理用户/list-users'
                    },
                    {
                      title: '获取用户信息',
                      path: '/reference/sdk/csharp/management/管理用户/get-user'
                    },
                    {
                      title: '批量获取用户信息',
                      path: '/reference/sdk/csharp/management/管理用户/get-user-batch'
                    },
                    {
                      title: '创建用户',
                      path: '/reference/sdk/csharp/management/管理用户/create-user'
                    },
                    {
                      title: '批量创建用户',
                      path: '/reference/sdk/csharp/management/管理用户/create-users-batch'
                    },
                    {
                      title: '修改用户资料',
                      path: '/reference/sdk/csharp/management/管理用户/update-user'
                    },
                    {
                      title: '批量修改用户资料',
                      path: '/reference/sdk/csharp/management/管理用户/update-user-batch'
                    },
                    {
                      title: '删除用户',
                      path: '/reference/sdk/csharp/management/管理用户/delete-users-batch'
                    },
                    {
                      title: '获取用户的外部身份源',
                      path: '/reference/sdk/csharp/management/管理用户/get-user-identities'
                    },
                    {
                      title: '获取用户角色列表',
                      path: '/reference/sdk/csharp/management/管理用户/get-user-roles'
                    },
                    {
                      title: '获取用户实名认证信息',
                      path: '/reference/sdk/csharp/management/管理用户/get-user-principal-authentication-info'
                    },
                    {
                      title: '删除用户实名认证信息',
                      path: '/reference/sdk/csharp/management/管理用户/reset-user-principal-authentication-info'
                    },
                    {
                      title: '获取用户部门列表',
                      path: '/reference/sdk/csharp/management/管理用户/get-user-departments'
                    },
                    {
                      title: '设置用户所在部门',
                      path: '/reference/sdk/csharp/management/管理用户/set-user-departments'
                    },
                    {
                      title: '获取用户分组列表',
                      path: '/reference/sdk/csharp/management/管理用户/get-user-groups'
                    },
                    {
                      title: '获取用户 MFA 绑定信息',
                      path: '/reference/sdk/csharp/management/管理用户/get-user-mfa-info'
                    },
                    {
                      title: '获取已归档的用户列表',
                      path: '/reference/sdk/csharp/management/管理用户/list-archived-users'
                    },
                    {
                      title: '强制下线用户',
                      path: '/reference/sdk/csharp/management/管理用户/kick-users'
                    },
                    {
                      title: '判断用户是否存在',
                      path: '/reference/sdk/csharp/management/管理用户/is-user-exists'
                    },
                    {
                      title: '获取用户可访问的应用',
                      path: '/reference/sdk/csharp/management/管理用户/get-user-accessible-apps'
                    },
                    {
                      title: '获取用户授权的应用',
                      path: '/reference/sdk/csharp/management/管理用户/get-user-authorized-apps'
                    },
                    {
                      title: '判断用户是否有某个角色',
                      path: '/reference/sdk/csharp/management/管理用户/has-any-role'
                    },
                    {
                      title: '获取用户的登录历史记录',
                      path: '/reference/sdk/csharp/management/管理用户/get-user-login-history'
                    },
                    {
                      title: '获取用户曾经登录过的应用',
                      path: '/reference/sdk/csharp/management/管理用户/get-user-loggedin-apps'
                    },
                    {
                      title: '获取用户曾经登录过的身份源',
                      path: '/reference/sdk/csharp/management/管理用户/get-user-logged-in-identities'
                    },
                    {
                      title: '用户离职',
                      path: '/reference/sdk/csharp/management/管理用户/resign-user'
                    },
                    {
                      title: '批量用户离职',
                      path: '/reference/sdk/csharp/management/管理用户/resign-user-batch'
                    },
                    {
                      title: '获取用户被授权的所有资源',
                      path: '/reference/sdk/csharp/management/管理用户/get-user-authorized-resources'
                    },
                    {
                      title: '检查某个用户在应用下是否具备 Session 登录态',
                      path: '/reference/sdk/csharp/management/管理用户/check-session-status'
                    },
                    {
                      title: '导入用户的 OTP',
                      path: '/reference/sdk/csharp/management/管理用户/import-otp'
                    }
                  ]
                },
                {
                  title: '管理组织机构',
                  children: [
                    {
                      title: '获取组织机构详情',
                      path: '/reference/sdk/csharp/management/管理组织机构/get-organization'
                    },
                    {
                      title: '批量获取组织机构详情',
                      path: '/reference/sdk/csharp/management/管理组织机构/get-organization-batch'
                    },
                    {
                      title: '获取组织机构列表',
                      path: '/reference/sdk/csharp/management/管理组织机构/list-organizations'
                    },
                    {
                      title: '创建组织机构',
                      path: '/reference/sdk/csharp/management/管理组织机构/create-organization'
                    },
                    {
                      title: '修改组织机构',
                      path: '/reference/sdk/csharp/management/管理组织机构/update-organization'
                    },
                    {
                      title: '删除组织机构',
                      path: '/reference/sdk/csharp/management/管理组织机构/delete-organization'
                    },
                    {
                      title: '搜索组织机构列表',
                      path: '/reference/sdk/csharp/management/管理组织机构/search-organizations'
                    },
                    {
                      title: '获取部门信息',
                      path: '/reference/sdk/csharp/management/管理组织机构/get-department'
                    },
                    {
                      title: '创建部门',
                      path: '/reference/sdk/csharp/management/管理组织机构/create-department'
                    },
                    {
                      title: '修改部门',
                      path: '/reference/sdk/csharp/management/管理组织机构/update-department'
                    },
                    {
                      title: '删除部门',
                      path: '/reference/sdk/csharp/management/管理组织机构/delete-department'
                    },
                    {
                      title: '搜索部门',
                      path: '/reference/sdk/csharp/management/管理组织机构/search-departments'
                    },
                    {
                      title: '获取子部门列表',
                      path: '/reference/sdk/csharp/management/管理组织机构/list-children-departments'
                    },
                    {
                      title: '获取部门成员列表',
                      path: '/reference/sdk/csharp/management/管理组织机构/list-department-members'
                    },
                    {
                      title: '获取部门直属成员 ID 列表',
                      path: '/reference/sdk/csharp/management/管理组织机构/list-department-member-ids'
                    },
                    {
                      title: '搜索部门下的成员',
                      path: '/reference/sdk/csharp/management/管理组织机构/search-department-members'
                    },
                    {
                      title: '部门下添加成员',
                      path: '/reference/sdk/csharp/management/管理组织机构/add-department-members'
                    },
                    {
                      title: '部门下删除成员',
                      path: '/reference/sdk/csharp/management/管理组织机构/remove-department-members'
                    },
                    {
                      title: '获取父部门信息',
                      path: '/reference/sdk/csharp/management/管理组织机构/get-parent-department'
                    },
                    {
                      title: '判断用户是否在某个部门下',
                      path: '/reference/sdk/csharp/management/管理组织机构/is-user-in-department'
                    }
                  ]
                },
                {
                  title: '管理角色',
                  children: [
                    {
                      title: '获取角色详情',
                      path: '/reference/sdk/csharp/management/管理角色/get-role'
                    },
                    {
                      title: '分配角色',
                      path: '/reference/sdk/csharp/management/管理角色/assign-role'
                    },
                    {
                      title: '移除分配的角色',
                      path: '/reference/sdk/csharp/management/管理角色/revoke-role'
                    },
                    {
                      title: '获取角色被授权的资源列表',
                      path: '/reference/sdk/csharp/management/管理角色/get-role-authorized-resources'
                    },
                    {
                      title: '获取角色成员列表',
                      path: '/reference/sdk/csharp/management/管理角色/list-role-members'
                    },
                    {
                      title: '获取角色的部门列表',
                      path: '/reference/sdk/csharp/management/管理角色/list-role-departments'
                    },
                    {
                      title: '创建角色',
                      path: '/reference/sdk/csharp/management/管理角色/create-role'
                    },
                    {
                      title: '获取角色列表',
                      path: '/reference/sdk/csharp/management/管理角色/list-roles'
                    },
                    {
                      title: '删除角色',
                      path: '/reference/sdk/csharp/management/管理角色/delete-roles-batch'
                    },
                    {
                      title: '批量创建角色',
                      path: '/reference/sdk/csharp/management/管理角色/create-roles-batch'
                    },
                    {
                      title: '修改角色',
                      path: '/reference/sdk/csharp/management/管理角色/update-role'
                    }
                  ]
                },
                {
                  title: '管理用户分组',
                  children: [
                    {
                      title: '获取分组详情',
                      path: '/reference/sdk/csharp/management/管理用户分组/get-group'
                    },
                    {
                      title: '获取分组列表',
                      path: '/reference/sdk/csharp/management/管理用户分组/list-groups'
                    },
                    {
                      title: '创建分组',
                      path: '/reference/sdk/csharp/management/管理用户分组/create-group'
                    },
                    {
                      title: '批量创建分组',
                      path: '/reference/sdk/csharp/management/管理用户分组/create-groups-batch'
                    },
                    {
                      title: '修改分组',
                      path: '/reference/sdk/csharp/management/管理用户分组/update-group'
                    },
                    {
                      title: '批量删除分组',
                      path: '/reference/sdk/csharp/management/管理用户分组/delete-groups-batch'
                    },
                    {
                      title: '添加分组成员',
                      path: '/reference/sdk/csharp/management/管理用户分组/add-group-members'
                    },
                    {
                      title: '批量移除分组成员',
                      path: '/reference/sdk/csharp/management/管理用户分组/remove-group-members'
                    },
                    {
                      title: '获取分组成员列表',
                      path: '/reference/sdk/csharp/management/管理用户分组/list-group-members'
                    },
                    {
                      title: '获取分组被授权的资源列表',
                      path: '/reference/sdk/csharp/management/管理用户分组/get-group-authorized-resources'
                    }
                  ]
                },
                {
                  title: '管理自定义字段',
                  children: [
                    {
                      title: '获取用户内置字段列表',
                      path: '/reference/sdk/csharp/management/管理自定义字段/get-user-base-fields'
                    },
                    {
                      title: '修改用户内置字段配置',
                      path: '/reference/sdk/csharp/management/管理自定义字段/set-user-base-fields'
                    },
                    {
                      title: '获取自定义字段列表',
                      path: '/reference/sdk/csharp/management/管理自定义字段/get-custom-fields'
                    },
                    {
                      title: '创建/修改自定义字段定义',
                      path: '/reference/sdk/csharp/management/管理自定义字段/set-custom-fields'
                    },
                    {
                      title: '设置自定义字段的值',
                      path: '/reference/sdk/csharp/management/管理自定义字段/set-custom-data'
                    },
                    {
                      title: '获取用户、分组、角色、组织机构的自定义字段值',
                      path: '/reference/sdk/csharp/management/管理自定义字段/get-custom-data'
                    }
                  ]
                },
                {
                  title: '管理资源与权限',
                  children: [
                    {
                      title: '创建资源',
                      path: '/reference/sdk/csharp/management/管理资源与权限/create-resource'
                    },
                    {
                      title: '批量创建资源',
                      path: '/reference/sdk/csharp/management/管理资源与权限/create-resources-batch'
                    },
                    {
                      title: '获取资源详情',
                      path: '/reference/sdk/csharp/management/管理资源与权限/get-resource'
                    },
                    {
                      title: '批量获取资源详情',
                      path: '/reference/sdk/csharp/management/管理资源与权限/get-resources-batch'
                    },
                    {
                      title: '分页获取资源列表',
                      path: '/reference/sdk/csharp/management/管理资源与权限/list-resources'
                    },
                    {
                      title: '修改资源',
                      path: '/reference/sdk/csharp/management/管理资源与权限/update-resource'
                    },
                    {
                      title: '删除资源',
                      path: '/reference/sdk/csharp/management/管理资源与权限/delete-resource'
                    },
                    {
                      title: '批量删除资源',
                      path: '/reference/sdk/csharp/management/管理资源与权限/delete-resources-batch'
                    },
                    {
                      title: '关联/取消关联应用资源到租户',
                      path: '/reference/sdk/csharp/management/管理资源与权限/associate-tenant-resource'
                    },
                    {
                      title: '创建权限分组',
                      path: '/reference/sdk/csharp/management/管理资源与权限/create-namespace'
                    },
                    {
                      title: '批量创建权限分组',
                      path: '/reference/sdk/csharp/management/管理资源与权限/create-namespaces-batch'
                    },
                    {
                      title: '获取权限分组详情',
                      path: '/reference/sdk/csharp/management/管理资源与权限/get-namespace'
                    },
                    {
                      title: '批量获取权限分组详情',
                      path: '/reference/sdk/csharp/management/管理资源与权限/get-namespaces-batch'
                    },
                    {
                      title: '修改权限分组信息',
                      path: '/reference/sdk/csharp/management/管理资源与权限/update-namespace'
                    },
                    {
                      title: '删除权限分组信息',
                      path: '/reference/sdk/csharp/management/管理资源与权限/delete-namespace'
                    },
                    {
                      title: '批量删除权限分组',
                      path: '/reference/sdk/csharp/management/管理资源与权限/delete-namespaces-batch'
                    },
                    {
                      title: '授权资源',
                      path: '/reference/sdk/csharp/management/管理资源与权限/authorize-resources'
                    },
                    {
                      title: '获取某个主体被授权的资源列表',
                      path: '/reference/sdk/csharp/management/管理资源与权限/get-authorized-resources'
                    },
                    {
                      title: '判断用户是否对某个资源的某个操作有权限',
                      path: '/reference/sdk/csharp/management/管理资源与权限/is-action-allowed'
                    },
                    {
                      title: '获取资源被授权的主体',
                      path: '/reference/sdk/csharp/management/管理资源与权限/get-resource-authorized-targets'
                    }
                  ]
                },
                {
                  title: '管理应用',
                  children: [
                    {
                      title: '获取应用详情',
                      path: '/reference/sdk/csharp/management/管理应用/get-application'
                    },
                    {
                      title: '获取应用列表',
                      path: '/reference/sdk/csharp/management/管理应用/list-applications'
                    },
                    {
                      title: '获取应用简单信息',
                      path: '/reference/sdk/csharp/management/管理应用/get-application-simple-info'
                    },
                    {
                      title: '获取应用简单信息列表',
                      path: '/reference/sdk/csharp/management/管理应用/list-application-simple-info'
                    },
                    {
                      title: '创建应用',
                      path: '/reference/sdk/csharp/management/管理应用/create-application'
                    },
                    {
                      title: '删除应用',
                      path: '/reference/sdk/csharp/management/管理应用/delete-application'
                    },
                    {
                      title: '获取应用密钥',
                      path: '/reference/sdk/csharp/management/管理应用/get-application-secret'
                    },
                    {
                      title: '刷新应用密钥',
                      path: '/reference/sdk/csharp/management/管理应用/refresh-application-secret'
                    },
                    {
                      title: '获取应用当前登录用户',
                      path: '/reference/sdk/csharp/management/管理应用/list-application-active-users'
                    },
                    {
                      title: '获取应用默认访问授权策略',
                      path: '/reference/sdk/csharp/management/管理应用/get-application-permission-strategy'
                    },
                    {
                      title: '更新应用默认访问授权策略',
                      path: '/reference/sdk/csharp/management/管理应用/update-application-permission-strategy'
                    },
                    {
                      title: '授权应用访问权限',
                      path: '/reference/sdk/csharp/management/管理应用/authorize-application-access'
                    },
                    {
                      title: '删除应用访问授权记录',
                      path: '/reference/sdk/csharp/management/管理应用/revoke-application-access'
                    },
                    {
                      title: '检测域名是否可用',
                      path: '/reference/sdk/csharp/management/管理应用/check-domain-available'
                    }
                  ]
                },
                {
                  title: '管理身份源',
                  children: [
                    {
                      title: '获取身份源列表',
                      path: '/reference/sdk/csharp/management/管理身份源/list-ext-idp'
                    },
                    {
                      title: '获取身份源详情',
                      path: '/reference/sdk/csharp/management/管理身份源/get-ext-idp'
                    },
                    {
                      title: '创建身份源',
                      path: '/reference/sdk/csharp/management/管理身份源/create-ext-idp'
                    },
                    {
                      title: '更新身份源配置',
                      path: '/reference/sdk/csharp/management/管理身份源/update-ext-idp'
                    },
                    {
                      title: '删除身份源',
                      path: '/reference/sdk/csharp/management/管理身份源/delete-ext-idp'
                    },
                    {
                      title: '在某个已有身份源下创建新连接',
                      path: '/reference/sdk/csharp/management/管理身份源/create-ext-idp-conn'
                    },
                    {
                      title: '更新身份源连接',
                      path: '/reference/sdk/csharp/management/管理身份源/update-ext-idp-conn'
                    },
                    {
                      title: '删除身份源连接',
                      path: '/reference/sdk/csharp/management/管理身份源/delete-ext-idp-conn'
                    },
                    {
                      title: '身份源连接开关',
                      path: '/reference/sdk/csharp/management/管理身份源/change-ext-idp-conn-state'
                    },
                    {
                      title: '租户关联身份源',
                      path: '/reference/sdk/csharp/management/管理身份源/change-ext-idp-conn-association-state'
                    },
                    {
                      title: '租户控制台获取身份源列表',
                      path: '/reference/sdk/csharp/management/管理身份源/list-tenant-ext-idp'
                    },
                    {
                      title: '身份源下应用的连接详情',
                      path: '/reference/sdk/csharp/management/管理身份源/ext-idp-conn-apps'
                    }
                  ]
                },
                {
                  title: '管理安全配置',
                  children: [
                    {
                      title: '获取安全配置',
                      path: '/reference/sdk/csharp/management/管理安全配置/get-security-settings'
                    },
                    {
                      title: '修改安全配置',
                      path: '/reference/sdk/csharp/management/管理安全配置/update-security-settings'
                    },
                    {
                      title: '获取全局多因素认证配置',
                      path: '/reference/sdk/csharp/management/管理安全配置/get-global-mfa-settings'
                    },
                    {
                      title: '修改全局多因素认证配置',
                      path: '/reference/sdk/csharp/management/管理安全配置/update-global-mfa-settings'
                    }
                  ]
                },
                {
                  title: '管理消息服务',
                  children: [
                    {
                      title: '获取邮件模版列表',
                      path: '/reference/sdk/csharp/management/管理消息服务/get-email-templates'
                    },
                    {
                      title: '修改邮件模版',
                      path: '/reference/sdk/csharp/management/管理消息服务/update-email-template'
                    },
                    {
                      title: '预览邮件模版',
                      path: '/reference/sdk/csharp/management/管理消息服务/preview-email-template'
                    },
                    {
                      title: '获取第三方邮件服务配置',
                      path: '/reference/sdk/csharp/management/管理消息服务/get-email-provider'
                    },
                    {
                      title: '配置第三方邮件服务',
                      path: '/reference/sdk/csharp/management/管理消息服务/config-email-provier'
                    }
                  ]
                },
                {
                  title: '管理同步中心',
                  children: [
                    {
                      title: '获取同步任务详情',
                      path: '/reference/sdk/csharp/management/管理同步中心/get-sync-task'
                    },
                    {
                      title: '获取同步任务列表',
                      path: '/reference/sdk/csharp/management/管理同步中心/list-sync-tasks'
                    },
                    {
                      title: '创建同步任务',
                      path: '/reference/sdk/csharp/management/管理同步中心/create-sync-task'
                    },
                    {
                      title: '修改同步任务',
                      path: '/reference/sdk/csharp/management/管理同步中心/update-sync-task'
                    },
                    {
                      title: '执行同步任务',
                      path: '/reference/sdk/csharp/management/管理同步中心/trigger-sync-task'
                    },
                    {
                      title: '获取同步作业详情',
                      path: '/reference/sdk/csharp/management/管理同步中心/get-sync-job'
                    },
                    {
                      title: '获取同步作业详情',
                      path: '/reference/sdk/csharp/management/管理同步中心/list-sync-jobs'
                    },
                    {
                      title: '获取同步作业详情',
                      path: '/reference/sdk/csharp/management/管理同步中心/list-sync-job-logs'
                    },
                    {
                      title: '获取同步风险操作列表',
                      path: '/reference/sdk/csharp/management/管理同步中心/list-sync-risk-operations'
                    },
                    {
                      title: '执行同步风险操作',
                      path: '/reference/sdk/csharp/management/管理同步中心/trigger-sync-risk-operations'
                    },
                    {
                      title: '取消同步风险操作',
                      path: '/reference/sdk/csharp/management/管理同步中心/cancel-sync-risk-operation'
                    }
                  ]
                },
                {
                  title: '管理 Pipeline',
                  children: [
                    {
                      title: '创建 Pipeline 函数',
                      path: '/reference/sdk/csharp/management/管理-pipeline/create-pipeline-function'
                    },
                    {
                      title: '获取 Pipeline 函数详情',
                      path: '/reference/sdk/csharp/management/管理-pipeline/get-pipeline-function'
                    },
                    {
                      title: '重新上传 Pipeline 函数',
                      path: '/reference/sdk/csharp/management/管理-pipeline/reupload-pipeline-function'
                    },
                    {
                      title: '修改 Pipeline 函数',
                      path: '/reference/sdk/csharp/management/管理-pipeline/update-pipeline-function'
                    },
                    {
                      title: '修改 Pipeline 函数顺序',
                      path: '/reference/sdk/csharp/management/管理-pipeline/update-pipeline-order'
                    },
                    {
                      title: '删除 Pipeline 函数',
                      path: '/reference/sdk/csharp/management/管理-pipeline/delete-pipeline-function'
                    },
                    {
                      title: '获取 Pipeline 函数列表',
                      path: '/reference/sdk/csharp/management/管理-pipeline/list-pipeline-functions'
                    },
                    {
                      title: '获取 Pipeline 日志',
                      path: '/reference/sdk/csharp/management/管理-pipeline/get-pipeline-logs'
                    }
                  ]
                },
                {
                  title: '管理 Webhook',
                  children: [
                    {
                      title: '创建 Webhook',
                      path: '/reference/sdk/csharp/management/管理-webhook/create-webhook'
                    },
                    {
                      title: '获取 Webhook 列表',
                      path: '/reference/sdk/csharp/management/管理-webhook/list-webhooks'
                    },
                    {
                      title: '修改 Webhook 配置',
                      path: '/reference/sdk/csharp/management/管理-webhook/update-webhook'
                    },
                    {
                      title: '删除 Webhook',
                      path: '/reference/sdk/csharp/management/管理-webhook/delete-webhook'
                    },
                    {
                      title: '获取 Webhook 日志',
                      path: '/reference/sdk/csharp/management/管理-webhook/get-webhook-logs'
                    },
                    {
                      title: '手动触发 Webhook 执行',
                      path: '/reference/sdk/csharp/management/管理-webhook/trigger-webhook'
                    },
                    {
                      title: '获取 Webhook 详情',
                      path: '/reference/sdk/csharp/management/管理-webhook/get-webhook'
                    },
                    {
                      title: '获取 Webhook 事件列表',
                      path: '/reference/sdk/csharp/management/管理-webhook/get-webhook-event-list'
                    }
                  ]
                },
                {
                  title: '获取审计日志',
                  children: [
                    {
                      title: '获取用户行为日志',
                      path: '/reference/sdk/csharp/management/获取审计日志/get-user-action-logs'
                    },
                    {
                      title: '获取管理员操作日志',
                      path: '/reference/sdk/csharp/management/获取审计日志/get-admin-audit-logs'
                    }
                  ]
                },
                {
                  title: '管理计量计费',
                  children: [
                    {
                      title: '获取套餐详情',
                      path: '/reference/sdk/csharp/management/管理计量计费/get-current-package-info'
                    },
                    {
                      title: '获取用量详情',
                      path: '/reference/sdk/csharp/management/管理计量计费/get-usage-info'
                    },
                    {
                      title: '获取 MAU 使用记录',
                      path: '/reference/sdk/csharp/management/管理计量计费/get-mau-period-usage-history'
                    },
                    {
                      title: '获取所有权益',
                      path: '/reference/sdk/csharp/management/管理计量计费/get-all-rights-items'
                    },
                    {
                      title: '获取订单列表',
                      path: '/reference/sdk/csharp/management/管理计量计费/get-orders'
                    },
                    {
                      title: '获取订单详情',
                      path: '/reference/sdk/csharp/management/管理计量计费/get-order-detail'
                    },
                    {
                      title: '获取订单支付明细',
                      path: '/reference/sdk/csharp/management/管理计量计费/get-order-pay-detail'
                    }
                  ]
                },
                {
                  title: '事件',
                  path: '/reference/sdk/csharp/management/events.md'
                }

              ]
            }
          ]
        },
        // 自动生成粘贴结束
        {
          title: 'Android',
          path: '/reference/mobile/sdk-for-android/',
          redirect: '/reference/mobile/sdk-for-android/install.html',
          children: [
            {
              title: '安装使用',
              path: '/reference/mobile/sdk-for-android/install'
            },
            {
              title: '用户认证模块',
              children: [
                {
                  title: '登录',
                  children: [
                    {
                      title: '账号密码登录',
                      path: '/reference/mobile/sdk-for-android/apis/登录/signin-by-account-password.md'
                    },
                    {
                      title: '用户名密码登录',
                      path: '/reference/mobile/sdk-for-android/apis/登录/signin-by-username-password.md'
                    },
                    {
                      title: '手机号密码登录',
                      path: '/reference/mobile/sdk-for-android/apis/登录/signin-by-phone-password.md'
                    },
                    {
                      title: '邮箱密码登录',
                      path: '/reference/mobile/sdk-for-android/apis/登录/signin-by-email-password.md'
                    },
                    {
                      title: '邮箱验证码登录',
                      path: '/reference/mobile/sdk-for-android/apis/登录/signin-by-email-passcode.md'
                    },
                    {
                      title: '手机号验证码登录',
                      path: '/reference/mobile/sdk-for-android/apis/登录/signin-by-phone-passcode.md'
                    },
                    {
                      title: 'LDAP 账号登录',
                      path: '/reference/mobile/sdk-for-android/apis/登录/signin-by-ldap.md'
                    },
                    {
                      title: 'AD 账号登录',
                      path: '/reference/mobile/sdk-for-android/apis/登录/signin-by-ad.md'
                    },
                    {
                      title: '使用手机号一键登录',
                      path: '/reference/mobile/sdk-for-android/apis/登录/signin-by-oneauth'
                    },
                    {
                      title: '使用移动端社会化登录',
                      path: '/reference/mobile/sdk-for-android/apis/登录/signin-by-mobile'
                    },
                    {
                      title: '查询二维码状态',
                      path: '/reference/mobile/sdk-for-android/apis/登录/check-qrcode-status'
                    },
                    {
                      title: '自建 APP 扫码登录：APP 端修改二维码状态',
                      path: '/reference/mobile/sdk-for-android/apis/登录/change-qrcode-status'
                    }
                  ]
                },
                {
                  title: '注册',
                  children: [
                    {
                      title: '用户名密码注册',
                      path: '/reference/mobile/sdk-for-android/apis/注册/signup-by-username-password.md'
                    },
                    {
                      title: '邮箱密码注册',
                      path: '/reference/mobile/sdk-for-android/apis/注册/signup-by-email-password.md'
                    },
                    {
                      title: '手机号验证码注册',
                      path: '/reference/mobile/sdk-for-android/apis/注册/signup-by-phone-passcode.md'
                    },
                    {
                      title: '邮箱验证码注册',
                      path: '/reference/mobile/sdk-for-android/apis/注册/signup-by-email-passcode.md'
                    }
                  ]
                },
                {
                  title: '用户资料',
                  children: [
                    {
                      title: '获取用户资料',
                      path: '/reference/mobile/sdk-for-android/apis/用户资料/get-profile'
                    },
                    {
                      title: '修改用户资料',
                      path: '/reference/mobile/sdk-for-android/apis/用户资料/update-profile'
                    },
                    {
                      title: '绑定邮箱',
                      path: '/reference/mobile/sdk-for-android/apis/用户资料/bind-email'
                    },
                    {
                      title: '解绑邮箱',
                      path: '/reference/mobile/sdk-for-android/apis/用户资料/unbind-email'
                    },
                    {
                      title: '绑定手机号',
                      path: '/reference/mobile/sdk-for-android/apis/用户资料/bind-phone'
                    },
                    {
                      title: '解绑手机号',
                      path: '/reference/mobile/sdk-for-android/apis/用户资料/unbind-phone'
                    },
                    {
                      title: '获取密码强度和账号安全等级评分',
                      path: '/reference/mobile/sdk-for-android/apis/用户资料/get-security-info'
                    },
                    {
                      title: '修改密码',
                      path: '/reference/mobile/sdk-for-android/apis/用户资料/update-password'
                    },
                    {
                      title: '发起修改邮箱的验证请求',
                      path: '/reference/mobile/sdk-for-android/apis/用户资料/verify-update-email-request'
                    },
                    {
                      title: '修改邮箱',
                      path: '/reference/mobile/sdk-for-android/apis/用户资料/update-email'
                    },
                    {
                      title: '发起修改手机号的验证请求',
                      path: '/reference/mobile/sdk-for-android/apis/用户资料/verify-update-phone-request'
                    },
                    {
                      title: '修改手机号',
                      path: '/reference/mobile/sdk-for-android/apis/用户资料/update-phone'
                    },
                    {
                      title: '发起忘记密码请求',
                      path: '/reference/mobile/sdk-for-android/apis/用户资料/verify-reset-password-request'
                    },
                    {
                      title: '忘记密码',
                      path: '/reference/mobile/sdk-for-android/apis/用户资料/reset-password'
                    },
                    {
                      title: '发起注销账号请求',
                      path: '/reference/mobile/sdk-for-android/apis/用户资料/verify-delete-account-request'
                    },
                    {
                      title: '注销账户',
                      path: '/reference/mobile/sdk-for-android/apis/用户资料/delete-account'
                    }
                  ]
                },
                {
                  title: '账号绑定',
                  children: [
                    {
                      title: '绑定外部身份源',
                      path: '/reference/mobile/sdk-for-android/apis/账号绑定/link-extidp'
                    },
                    {
                      title: '解绑外部身份源',
                      path: '/reference/mobile/sdk-for-android/apis/账号绑定/unlink-extidp'
                    },
                    {
                      title: '获取绑定的外部身份源',
                      path: '/reference/mobile/sdk-for-android/apis/账号绑定/get-identities'
                    },
                    {
                      title: '获取应用开启的外部身份源列表',
                      path: '/reference/mobile/sdk-for-android/apis/账号绑定/get-extidps'
                    }
                  ]
                },
                {
                  title: 'MFA 要素管理',
                  children: [
                    {
                      title: '发起绑定 MFA 认证要素请求',
                      path: '/reference/mobile/sdk-for-android/apis/mfa-要素管理/send-enroll-factor-request'
                    },
                    {
                      title: '绑定 MFA 认证要素',
                      path: '/reference/mobile/sdk-for-android/apis/mfa-要素管理/enroll-factor'
                    },
                    {
                      title: '解绑 MFA 认证要素',
                      path: '/reference/mobile/sdk-for-android/apis/mfa-要素管理/reset-factor'
                    },
                    {
                      title: '获取绑定的所有 MFA 认证要素',
                      path: '/reference/mobile/sdk-for-android/apis/mfa-要素管理/list-enrolled-factors'
                    },
                    {
                      title: '获取绑定的某个 MFA 认证要素',
                      path: '/reference/mobile/sdk-for-android/apis/mfa-要素管理/get-factor'
                    },
                    {
                      title: '获取可绑定的 MFA 认证要素',
                      path: '/reference/mobile/sdk-for-android/apis/mfa-要素管理/list-factors-to-enroll'
                    }
                  ]
                },
                {
                  title: '用户相关资源',
                  children: [
                    {
                      title: '获取登录日志',
                      path: '/reference/mobile/sdk-for-android/apis/用户相关资源/get-my-login-history'
                    },
                    {
                      title: '获取登录应用',
                      path: '/reference/mobile/sdk-for-android/apis/用户相关资源/get-my-logged-in-apps'
                    },
                    {
                      title: '获取具备访问权限的应用',
                      path: '/reference/mobile/sdk-for-android/apis/用户相关资源/get-my-accessible-apps'
                    },
                    {
                      title: '获取租户列表',
                      path: '/reference/mobile/sdk-for-android/apis/用户相关资源/get-my-tenant-list'
                    },
                    {
                      title: '获取角色列表',
                      path: '/reference/mobile/sdk-for-android/apis/用户相关资源/get-my-role-list'
                    },
                    {
                      title: '获取分组列表',
                      path: '/reference/mobile/sdk-for-android/apis/用户相关资源/get-my-group-list'
                    },
                    {
                      title: '获取部门列表',
                      path: '/reference/mobile/sdk-for-android/apis/用户相关资源/get-my-department-list'
                    },
                    {
                      title: '获取被授权的资源列表',
                      path: '/reference/mobile/sdk-for-android/apis/用户相关资源/get-my-authorized-resources'
                    }
                  ]
                },
                {
                  title: '消息服务',
                  children: [
                    {
                      title: '发送短信',
                      path: '/reference/mobile/sdk-for-android/apis/消息服务/send-sms'
                    },
                    {
                      title: '发送邮件',
                      path: '/reference/mobile/sdk-for-android/apis/消息服务/send-email'
                    }
                  ]
                },
                {
                  title: '其他',
                  children: [
                    {
                      title: '获取服务器公开信息',
                      path: '/reference/mobile/sdk-for-android/apis/其他/system'
                    },
                    {
                      title: '获取国家列表',
                      path: '/reference/mobile/sdk-for-android/apis/其他/get-country-list'
                    }
                  ]
                },
                {
                  title: 'OIDC 模块',
                  path: '/reference/mobile/sdk-for-android/apis/oidc.md'
                },
                {
                  title: '事件',
                  path: '/reference/mobile/sdk-for-android/apis/events.md'
                }
              ]
            }
          ]
        },
        {
          title: 'Flutter',
          path: '/reference/mobile/sdk-for-flutter/',
          children: [
            {
              title: '安装使用',
              path: '/reference/mobile/sdk-for-flutter/quick'
            },
            {
              title: '用户认证模块',
              path: '/reference/mobile/sdk-for-flutter/apis/',
              children: [
                '/reference/mobile/sdk-for-flutter/apis/login',
                '/reference/mobile/sdk-for-flutter/apis/register',
                '/reference/mobile/sdk-for-flutter/apis/user',
                '/reference/mobile/sdk-for-flutter/apis/mfa',
                '/reference/mobile/sdk-for-flutter/apis/user-resources',
                '/reference/mobile/sdk-for-flutter/apis/message',
                '/reference/mobile/sdk-for-flutter/apis/utils',
                '/reference/mobile/sdk-for-flutter/apis/oidc',
                '/reference/mobile/sdk-for-flutter/apis/options',
                '/reference/mobile/sdk-for-flutter/apis/enum'
              ]
            },
            {
              title: 'Flutter SDK 更新日志',
              path: '/reference/mobile/sdk-for-flutter/change-log'
            }
          ]
        },
        {
          title: 'iOS',
          path: '/reference/mobile/sdk-for-ios/',
          children: [
            {
              title: '安装使用',
              path: '/reference/mobile/sdk-for-ios/quick'
            },
            {
              title: '用户认证模块',
              path: '/reference/mobile/sdk-for-ios/apis/',
              children: [
                '/reference/mobile/sdk-for-ios/apis/login',
                '/reference/mobile/sdk-for-ios/apis/register',
                '/reference/mobile/sdk-for-ios/apis/user',
                '/reference/mobile/sdk-for-ios/apis/mfa',
                '/reference/mobile/sdk-for-ios/apis/user-resources',
                '/reference/mobile/sdk-for-ios/apis/message',
                '/reference/mobile/sdk-for-ios/apis/utils',
                '/reference/mobile/sdk-for-ios/apis/oidc',
                '/reference/mobile/sdk-for-ios/apis/options',
                '/reference/mobile/sdk-for-ios/apis/enum',
                '/reference/mobile/sdk-for-ios/apis/events'
              ]
            },
            {
              title: '返回码',
              path: '/reference/mobile/sdk-for-ios/errorcode'
            },
            {
              title: 'iOS SDK 更新日志',
              path: '/reference/mobile/sdk-for-ios/change-log'
            }
          ]
        },
        {
          title: '微信小程序',
          path: '/reference/sdk/miniapp/',
          children: [
            {
              title: '开始集成',
              path: '/reference/sdk/miniapp/quick'
            },
            {
              title: '错误处理',
              path: '/reference/sdk/miniapp/process-error'
            },
            {
              title: '版本更新',
              path: '/reference/sdk/miniapp/changelog'
            }
          ]
        },
        // {
        // title: '微信网页授权（开发中）',
        // path: '/reference/sdk/weixin-official-account/',
        // children: [
        //   {
        //     title: '开始集成',
        //     path: '/reference/sdk/weixin-official-account/quick'
        //   },
        //   {
        //     title: '版本更新',
        //     path: '/reference/sdk/changelog-authing-js-sdk'
        //   }
        // ]
        // },
        // {
        //   title: '单点登录 SSO',
        //   path: '/reference/sdk/web',
        //   children: [
        //     {
        //       title: '开始集成',
        //       path: '/reference/sdk/web/quick'
        //     },
        //     {
        //       title: '版本更新',
        //       path: '/reference/sdk/web/changelog'
        //     }
        //   ]
        // }
      ]
    },
    // {
    // title: 'Guard 登录组件（开发中）',
    // path: '/reference/guard/',
    // children: [
    //   {
    //     title: 'Web Guard（开发中）',
    //     path: '/reference/guard/web'
    //   },
    //   {
    //     title: '更新日志',
    //     children: [
    //       {
    //         title: "Web Guard 更新日志",
    //         path: "/reference/guard/changelog-web"
    //       }
    //     ]
    //   }
    // ]
    // },
    {
      title: '框架集成',
      path: 'https://docs.authing.cn/v2/reference/frameworks.html'
    },
    {
      title: 'Radius',
      path: 'https://docs.authing.cn/v2/reference/radius/'
    },
    {
      title: '错误码',
      path: '/reference/error-code'
    }
  ]
};

/**
 * 英文菜单
 */
const translatedZhCnNavBar = {};

const addPrefixToLink = (navbar, prefix) => {
  if (!navbar) {
    return;
  }
  return navbar.map((item) => ({
    ...item,
    path: item.path && `${prefix}${item.path}`,
    children:
      item.children &&
      item.children.map((link) => {
        if (typeof link === 'string') {
          return `${prefix}${link}`;
        }
        return {
          ...link,
          path: `${prefix}${link.path}`,
          children: addPrefixToLink(link.children, prefix)
        };
      })
  }));
};

/**
 * 给所有路径加上 /en
 */
const getEnUsNavBar = (sidebars) => {
  const enUsNavBar = {};

  for (let attr in sidebars) {
    enUsNavBar[`/en${attr}`] = addPrefixToLink(sidebars[attr], '/en');
  }

  return enUsNavBar;
};

module.exports = {
  zhCnNavBar,
  enUsNavBar: getEnUsNavBar(translatedZhCnNavBar),
  BRAND_NAME_ZH_CN,
  BRAND_NAME_EN_US
};
