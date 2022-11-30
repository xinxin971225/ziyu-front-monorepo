# Button 按钮

常用操作按钮

## 基础用法

基础的函数用法

:::demo 使用`color`、`plain`、`size`、`rounded`属性来定义 Button 的样式。

<div class="mb-4">
  <SFCButton color="blue">主要按钮</SFCButton>
  <SFCButton color="green">绿色按钮</SFCButton>
  <SFCButton color="gray">灰色按钮</SFCButton>
  <SFCButton color="yellow">黄色按钮</SFCButton>
  <SFCButton color="red">红色按钮</SFCButton>
</div>
<div class="mb-4">
  <SFCButton color="blue" plain>主要按钮</SFCButton>
  <SFCButton color="green" plain>绿色按钮</SFCButton>
  <SFCButton color="gray" plain>灰色按钮</SFCButton>
  <SFCButton color="yellow" plain>黄色按钮</SFCButton>
  <SFCButton color="red" plain>红色按钮</SFCButton>
</div>
<div class="mb-4">
  <SFCButton color="blue" rounded plain>主要按钮</SFCButton>
  <SFCButton color="green" rounded plain>绿色按钮</SFCButton>
  <SFCButton color="gray" rounded plain>灰色按钮</SFCButton>
  <SFCButton color="yellow" rounded plain>黄色按钮</SFCButton>
  <SFCButton color="red" rounded plain>红色按钮</SFCButton>
</div>

```vue
<template id="button">
  <div class="mb-4">
    <SFCButton color="blue">主要按钮</SFCButton>
    <SFCButton color="green">绿色按钮</SFCButton>
    <SFCButton color="gray">灰色按钮</SFCButton>
    <SFCButton color="yellow">黄色按钮</SFCButton>
    <SFCButton color="red">红色按钮</SFCButton>
  </div>
  <div class="mb-4">
    <SFCButton color="blue" plain>主要按钮</SFCButton>
    <SFCButton color="green" plain>绿色按钮</SFCButton>
    <SFCButton color="gray" plain>灰色按钮</SFCButton>
    <SFCButton color="yellow" plain>黄色按钮</SFCButton>
    <SFCButton color="red" plain>红色按钮</SFCButton>
  </div>
  <div class="mb-4">
    <SFCButton color="blue" rounded plain>主要按钮</SFCButton>
    <SFCButton color="green" rounded plain>绿色按钮</SFCButton>
    <SFCButton color="gray" rounded plain>灰色按钮</SFCButton>
    <SFCButton color="yellow" rounded plain>黄色按钮</SFCButton>
    <SFCButton color="red" rounded plain>红色按钮</SFCButton>
  </div>
</template>
```

:::
