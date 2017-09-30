<template>
    <div class="account">
        <account-head></account-head>
        <account-content></account-content>
    </div>
</template>

<script>
import accountHead from './account-head'
import accountContent from './account-content'

export default {
    components: {
        'account-head': accountHead,
        'account-content': accountContent
    }
}
</script>

<style lang="less" scoped>

</style>


