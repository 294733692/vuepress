---
home: true
heroImage: /1.jpeg
actionText: 点击跳转 →
actionLink: /JavaScript/
footer: MIT Licensed | Copyright © 2018-present Evan You 脚部
---

<div class="features">
  <div class="feature">
    <h2>Simplicity First</h2>
    <p>Minimal setup with markdown-centered project structure helps you focus on writing.</p>
  </div>
  <div class="feature">
    <h2>Vue-Powered</h2>
    <p>Enjoy the dev experience of Vue + webpack, use Vue components in markdown, and develop custom themes with Vue.</p>
  </div>
  <div class="feature">
    <h2>{{ 1 + 2}}</h2>
    <span v-for=' i in 3'> {{i}}</span>
  </div>
</div>

### As Easy as 1, 2, 3

```vue
<script>
export default {
  mounted () {
    import('./lib-that-access-window-on-import').then(module => {
      {{ 1 + 2}}
    })
  }
}
</script>
```
切换dev分支测试