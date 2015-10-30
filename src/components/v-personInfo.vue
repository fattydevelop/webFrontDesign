<style lang="less">
.personInfoMain{
    background-color: blueviolet;
    .col-1{
        height:24px;
        div{
            float: left;
            padding-left: 20px;
            span{
                padding-right: 5px;
            }
        }

    }
    .col-2{
        height:24px;
        clear: both;
        .clientSex{
            width: 147px;
        }
        div{
            padding-left: 20px;
            float: left;
            span{
            padding-right: 5px;
            }
        }
    }
    .labelSpan{
        width: 100px;
        line-height: 45px;
        text-align: center;
    }
}
.dropdown-menu{
    min-width: 0px;
}
</style>
<template>
<div class="container-fluid">
<div class="row">
    <div class="col-md-1">客户姓名</div>
    <div class="col-md-2"><input type="text"/></div>
    <div class="col-md-1">客户电话</div>
    <div class="col-md-2"><input type="text"/></div>
    <div class="col-md-1">备用电话</div>
    <div class="col-md-1"><input type="text"/></div>
</div>
<div class="row">
    <div class="col-md-1">客户性别</div>
    <div class="col-md-2">
        先生<input type="radio" name="sex" checked="checked">
        女士<input type="radio" name="sex">
    </div>
    <div class="col-md-1">家庭住址</div>
    <div class="col-md-2">
    <div class="btn-group">
          <button class="btn btn-default dropdown-toggle" type="button" id="provinceBtn" data-toggle="dropdown" aria-expanded="false">
            省市
            <span class="caret"></span>
          </button>
          <ul class="dropdown-menu" role="menu" aria-labelledby="provinceBtn">
            <li  v-repeat="province:address">
                <a role="menuitem"  v-on="click:selectProvince($key)"  href="#">{{$key}}</a>
            </li>
          </ul>
    </div>
    <div class="btn-group">
          <button class="btn btn-default dropdown-toggle" type="button" id="cityBtn" data-toggle="dropdown" aria-expanded="false">
            {{cityLabel}}
          <span class="caret"></span>
          </button>
          <ul class="dropdown-menu" role="menu" aria-labelledby="cityBtn">
             <li v-repeat="eachCity:city">
                 <a role="menuitem"  v-on="click:selectCity($key)"  href="#">{{$key}}</a>
             </li>
          </ul>
    </div>
    <div class="btn-group">
          <button class="btn btn-default dropdown-toggle" type="button" id="town" data-toggle="dropdown" aria-expanded="false">
            {{townLabel}}
          <span class="caret"></span>
          </button>
          <ul class="dropdown-menu" role="menu" aria-labelledby="town">
             <li v-repeat="eachTown:town">
                 <a role="menuitem"  v-on="click:selectTown(eachTown)"  href="#">{{eachTown}}</a>
             </li>
          </ul>
    </div>
    </div>
</div>
</div>
</template>
<script>
module.exports = {
    created:function(){
        var store = require("./../store/address");
        var self = this;
        store.getAddress().done(function(data){
            self.address = data;
        })
    },
    data:function(){
        return{
            address:{},
            city:{},
            town:[],
            cityLabel:"区域",
            townLabel:"城市"
           }
    },
    methods:{
        selectProvince:function(key){
            $("#provinceBtn")[0].innerText =key;
            this.city=this.address[key];
            for(var name in this.city){
                this.cityLabel = name;
                this.town = this.city[name];
                for(var index in this.town){
                    this.townLabel = this.town[index];
                    break;
                }
            }
        },
        selectCity:function(key){
             this.cityLabel = key;
             this.town = this.city[key];
             for(var index in this.town){
                this.townLabel = this.town[index];
             }
        },
        selectTown:function(key){
            this.townLabel = key;
        },
        isEmptyObject:function(obj){
             for(var name in obj){
                 if(obj.hasOwnProperty)
                    return false;
             }
                return true;
        }

    }
}
</script>