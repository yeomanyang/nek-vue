<template>
    <div style="padding: 100px">
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
        <div style="width: 500px; height: 500px; overflow: auto; background: yellow">
            <div class="myclass" style="height: 1000px; padding-top: 500px; background: red">
                <kl-dropdown>
                    <a href="javascript:;">下拉菜单</a>
                    <kl-dropdown-menu slot="list">
                        <kl-dropdown-item key="a">驴打滚</kl-dropdown-item>
                        <kl-dropdown-item>炸酱面</kl-dropdown-item>
                        <kl-dropdown-item disabled>豆汁儿</kl-dropdown-item>
                        <kl-dropdown-item divided>北京烤鸭</kl-dropdown-item>
                    </kl-dropdown-menu>
                </kl-dropdown>
            </div>
        </div>
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
