<template>
    <div class="account-content">
        <ul>
            <li class="content-item" v-for="item of listItems">
                <i class="item-icon">icon</i>
                {{ item }}
                <span class="arrow-right">→</span>
            </li>
        </ul>
        <div class="log-out">退出登录</div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            listItems: ['我的信息', '我的好友', '会员中心', '个性皮肤', '设置', '关于', '联系客服']
        }
    }
}
</script>

<style lang="less" scoped>
.account-content {
    padding-bottom: 45px;
    .content-item {
        position: relative;
        padding: 20px 10px;
        font-size: 14px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.2);
        .arrow-right {
            position: absolute;
            right: 15px;
        }
    }
    .log-out {
        text-align: center;
        color: red;
        font-size: 14px;
        font-weight: 400;
        height: 35px;
        line-height: 35px;
        &:hover{
            background: #f04a4a;
            color: #111;
        }
    }
}
</style>


