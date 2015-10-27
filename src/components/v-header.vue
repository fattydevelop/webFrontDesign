
<style lang="less">
@import '../main.less';
  .header {
    border:1px solid #D4D4D4;
    color: @headerColor;
    font-family: 'Microsoft YaHei';
    font-size:20px;
    font-weight:normal;
    width:100%;
    min-width:720px;
    background-color: @headerBgColor;
    height: 70px;
    .header-wrap{
        position: relative;
        width: 90%;
        height: 100%;
        margin: 0 auto;
        }
    .logo{
      position:absolute;
      width:50%;
      height:100%;
      line-height:70px;
      left:0px;
      background-color:@logoBgColor;
      img{
        float:left;
        height:100%;
        padding-right:10px;
      }
      .titleText{
        float:left;
        font-size:22px;
      }
    }
    .userInfo{
      position:absolute;
      right:10px;
      line-height:50px;
      div{
        float:left;
        padding-left:20px;
      }
    }
  }
</style>

<template>
  <div class="header">
    <div class="header-wrap">
      <div class="logo">
        <img v-attr="src:logoSrc"/>
        <div class="titleText">{{headerTitle}}</div>
      </div>
      <div class="userInfo">
        <div>{{userName}}</div>
        <div>{{userIdentity}}</div>
      </div>
    </div>
  </div>

</template>

<script>
  module.exports = {
    data: function () {
      return {

      }
    },
    props:['logoSrc','headerTitle','userName','userIdentity']
  }
</script>