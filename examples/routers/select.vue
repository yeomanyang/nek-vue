<template>
    <div style="padding: 100px">
        <kl-select>
            <kl-option v-for="item in list">{{ item.name }}</kl-option>
        </kl-select>
    </div>
</template>
<script>
   export default {
       data() {
           return {
               list: [
                   {
                       id: 1,
                       name: '123'
                   },
                   {
                       id: 2,
                       name: '123'
                   },
                   {
                       id: 3,
                       name: '123'
                   },
                   {
                       id: 4,
                       name: '123'
                   }
               ],
               model1: ''
           };
       }
   };
</script>
