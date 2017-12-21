<template>
    <div>
        <kl-dropdown>
            <a href="javascript:;">下拉菜单</a>
            <kl-dropdown-menu slot="list">
                <kl-dropdown-item key="a">驴打滚</kl-dropdown-item>
                <kl-dropdown-item>炸酱面</kl-dropdown-item>
                <kl-dropdown-item disabled>豆汁儿</kl-dropdown-item>
                <kl-dropdown-item divided>北京烤鸭</kl-dropdown-item>
            </kl-dropdown-menu>
        </kl-dropdown>
        <kl-dropdown @onItemClick="onItemClick" trigger="custom" :visible="visible">
            <a href="javascript:;" @click="handleOpen">下拉菜单2</a>
            <kl-dropdown-menu slot="list">
                <kl-dropdown-item key="a">驴打滚</kl-dropdown-item>
                <kl-dropdown-item>炸酱面</kl-dropdown-item>
                <kl-dropdown-item disabled>豆汁儿</kl-dropdown-item>
                <kl-dropdown-item divided>北京烤鸭</kl-dropdown-item>
            </kl-dropdown-menu>
        </kl-dropdown>
    </div>
</template>
<script>
   export default {
       data() {
           return {
               visible: true
           };
       },
       methods: {
           onItemClick() {
               this.visible = true;

           },
           handleOpen() {
               this.visible = false;
           }
       }
   };
</script>
