<style lang="less">
.right-login{
    margin-left:1000px;
    margin-top:50px;
}
.left-vad{
    width:800px;
    margin-top:50px;
    margin-left:100px;
}
</style>
<template>
   <vheader logo-src={{logoSrc}} header-title={{headerTitle}} user-name={{userName}} user-identity={{userIdentity}}></vheader>
   <vlogin class="right-login"></vlogin>
   <div class="left-vad"><vad></vad></div>
   <vperson></vperson>
</template>

<script>
    module.exports = {
        data: function () {
              return {
                logoSrc:'http://www.easyicon.net/api/resizeApi.php?id=1126395&size=128',
                headerTitle:'账号登录',
                userName:'',
                userIdentity:'',
                msg: ''
              }
            },
        components:{
            //vheader:require('../components/v-header.vue'),
            //vdisable:require('../components/functional/v-disableParts.vue')
            //vlogin:require('../components/v-login.vue'),
            //vad:require('../components/v-ad.vue')
            vperson:require('../components/v-personInfo.vue')
        }
    }
</script>