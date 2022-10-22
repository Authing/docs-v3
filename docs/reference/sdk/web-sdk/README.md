# 单点登录 SSO

- 多个应用系统中，**用户只需要登录一次**就可以**访问所有**相互信任的应用系统，无需多次登录。
- 支持 **跳转登录**、 **弹窗登录**、**静默登录** 等多种登录方式，使用更方便。
  - 跳转登录：从当前页面跳转到 Authing 的托管登录页进行登录。
  - 弹窗登录：弹出一个窗口，在弹出窗口中加载 Authing 托管的登录页，无需页面跳转。
  - 静默登录：将多个自建应用添加到 **单点登录 SSO** 面板s，如果用户已经登录过其中的一个应用，那么在同一浏览器另一个标签页访问其他应用的时候，就可以实现静默登录，直接获取到用户信息，实现单点登录效果。

## 代码地址

|条目|说明|
|-----|----|
|最新版本|5.1.0|
|仓库地址|https://github.com/authing/authing-js-sdk|

<br />

<span style="background-color: #215ae5; a:link:color:#FFF; padding:8px; border-radius: 4px;">
  <a href="./quick.html" style="color:#FFF;">快速开始 →</a>
</span>