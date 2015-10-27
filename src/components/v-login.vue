<style lang="less">
.mainLogin{
    position: absolute;
    border: 1px solid #D4D4D4;
    padding-top: 20px;
    background-color: #fff;
    min-width: 292px;
    min-height: 320px;
    background: rgba(255,255,255,0.3);
    .loginWrap{
        width:80%;
        margin:0 auto;
        .login-error{

        }
    }
}
.alert-size{
    padding:5px;
}
</style>
<template>
<form>
<div class="mainLogin">
    <div class="loginWrap">
        <div class="login-error">
            <div class="alert alert-danger alert-size" role="alert">
                <span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
                <span class="sr-only">Error:</span>
                  {{errorInfo}}
            </div>
        </div>
        <div class="form-group">
             <label for="userNameInput">登录名</label>
             <input type="text" class="form-control" id="userNameInput">
        </div>
        <div class="form-group">
             <label for="passwordInput">密码</label>
             <input type="password" class="form-control" id="passwordInput">
        </div>

        <button class="btn btn-primary btn-block" type="submit">登录</button>
    </div>
</div>
</form>
</template>

<script>
module.exports = {
    data:function(){
    return {
         errorInfo:'密码错误'
        }
    }
}
</script>