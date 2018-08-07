# 工具函数

## 引用组件

<template>
<OtherComponent/>
<Foo-Bar/>
<dome-1/>

</template>

## 转义
::: v-pre
`{{ This will be displayed as-is }}`
:::

## vue语法

```vue
<template>
    <div>
        {{query}}
    </div>
</template>

<script>
    export default{
        data:{
            query : '模板解析'
        }
    }
</script>
```
<template>
    <div>
        {{query}}
    </div>
</template>

<script>
    export default{
        data(){
            return {
                query : '模板解析'
            }
        }
    }
</script>