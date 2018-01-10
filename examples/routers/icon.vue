<template>
    <div style="padding: 100px">

        <kl-icon type="home" color="red" fontSize="30"></kl-icon>
        <br>
        以下icon可以点击复制
        <br>
        <kl-icon type="home" @click="copy"></kl-icon>
        <kl-icon type="rotate-left" @click="copy"></kl-icon>
        <kl-icon type="upload" @click="copy"></kl-icon>
        <kl-icon type="download" @click="copy"></kl-icon>
        <kl-icon type="zoomin" @click="copy"></kl-icon>
        <kl-icon type="expand" @click="copy"></kl-icon>
        <kl-icon type="circle-trash" @click="copy"></kl-icon>
        <kl-icon type="zoomout" @click="copy"></kl-icon>
        <kl-icon type="rezoom" @click="copy"></kl-icon>
        <kl-icon type="rotate-right" @click="copy"></kl-icon>
        <kl-icon type="refresh" @click="copy"></kl-icon>
        <kl-icon type="warning" @click="copy"></kl-icon>
        <kl-icon type="edit" @click="copy"></kl-icon>
        <kl-icon type="info" @click="copy"></kl-icon>
        <kl-icon type="error" @click="copy"></kl-icon>
        <kl-icon type="success" @click="copy"></kl-icon>
        <kl-icon type="chevron-left" @click="copy"></kl-icon>
        <kl-icon type="chevron-right" @click="copy"></kl-icon>
        <kl-icon type="search" @click="copy"></kl-icon>
        <kl-icon type="remove" @click="copy"></kl-icon>
        <kl-icon type="ok" @click="copy"></kl-icon>
        <kl-icon type="check-empty" @click="copy"></kl-icon>
        <kl-icon type="chevron-down" @click="copy"></kl-icon>
        <kl-icon type="add" @click="copy"></kl-icon>
        <kl-icon type="calendar" @click="copy"></kl-icon>
        <kl-icon type="line" @click="copy"></kl-icon>
        <kl-icon type="trash" @click="copy"></kl-icon>
        <kl-icon type="plus" @click="copy"></kl-icon>
    </div>
</template>
<script>
   export default {
       methods: {
           copy(e) {
               const type = e.event.target.__vue__.type;
               let text = `<kl-icon type="${type}" />`;
               let copyFrom, body;
               copyFrom = document.createElement('textarea');
               copyFrom.textContent = text;
               body = document.getElementsByTagName('body')[0];
               body.appendChild(copyFrom);
               copyFrom.select();
               document.execCommand('copy');
               body.removeChild(copyFrom);
               console.log(`复制成功:${text}`);
           }
       }
   };
</script>
