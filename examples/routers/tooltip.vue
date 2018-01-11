<template>
    <div style="padding: 100px">
        <kl-tooltip>
            test
            <div slot="tip">
                123123123
            </div>
        </kl-tooltip>

        <kl-tooltip tip="12312312">
            test2
        </kl-tooltip>

        <kl-tooltip :tip="12312312312312">
            <kl-icon type="warning" />
        </kl-tooltip>
    </div>
</template>
<script>
   export default {
   };
</script>
