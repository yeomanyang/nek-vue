<template>
    <div style="padding: 100px">
        <kl-select @click="onClick" :value.sync="value">
            <kl-option v-for="item in list" :id="item.id" :name="item.name"></kl-option>
        </kl-select>
        {{value}}
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
                       name: '121233'
                   },
                   {
                       id: 4,
                       name: '123'
                   }
               ],
               model1: '',
               value: '4'
           };
       },
       methods: {
           onClick(e) {
               console.log(e);
           }
       }
   };
</script>
