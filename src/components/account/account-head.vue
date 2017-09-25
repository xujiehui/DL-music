<template>
    <div class="account-head">
        <div class="head-wrapper">
            <div class="avatar">
                <img width="60" height="60" src="./avatar.jpg" alt="用户头像">
            </div>
            <div class="user-wrapper">
                <div class="userName">测试用户</div>
                <div class="userLevel">Lv 1</div>
            </div>
            <div class="userSign">签到</div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.account-head {
    position: relative;
    overflow: hidden;
    color: #fff;
    background: rgba(7, 17, 27, 0.5);
    .head-wrapper {
        position: relative;
        padding: 12px 10px 10px 10px;
        font-size: 0;
        border-bottom: 2px solid #111;
        .avatar {
            display: inline-block;
            vertical-align: top;
            img {
                border-radius: 6px;
            }
        }
        .user-wrapper {
            display: inline-block;
            margin-left: 10px;
            vertical-align: top;
            color: #000;
            .userName {
                margin-top: 10px;
                font-size: 16px;
            }
            .userLevel {
                margin-top: 15px;
                font-size: 14px;
            }
        }
        .userSign {
            display: inline-block;
            position: absolute;
            top: 40%;
            right: 20px;
            width: 50px;
            color: #111;
            padding: 4px;
            text-align: center;
            font-size: 12px;
            border: 1px solid #111;
            border-radius: 10px;
        }
    }
}
</style>


