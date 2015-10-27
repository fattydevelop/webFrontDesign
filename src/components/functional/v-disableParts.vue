<style lang="less">
.main{
    width:900px;
}
.list-group{
    margin-bottom: 0px;
}
li{
    list-style-type:none;
}
.title{
    position: relative;
    background: #f3f3f3;
    overflow: hidden;
}
.bottom{
    background: #f3f3f3;
    overflow: hidden;
}
.partsTitle{
    height:18px;
    line-height:18px;
    float:left;
    padding-right:5px;
    width:12%;
}
.singleItem{
    background: #fff4e8;
    height:50px;
    overflow: hidden;
}
.partAll{
    min-width:50px;
    text-align:center;
}
.partsItem{
    margin-top:5px;
    position:relative;
    line-height:18px;
    height:100%;
    float:left;
    padding-right:5px;
    width:12%;

}
.partName{
    min-width:100px;
    width:20%;
}
.partCode{
    min-width:100px;
    width:10%;
}
.partPrice{
    text-align:center;
    min-width:50px;
    width:8%;
}
.partNum{
    text-align:center;
    min-width:68px;

}
.miniNum{
    position: relative;
    width: 60px;
    margin: 0 auto;
}
.partFrom{
    min-width:50px;
    width:10%;
}
.partTotal{
    text-align:center;
    min-width:50px;
    width:10%;
}
.partAction{
    text-align:center;
    width:10%;
    min-width:150px;
}
.numInput{
    position:absolute;
    border: 1px solid #cacbcb;
    width: 31px;
    height: 18px;
    line-height: 18px;
    text-align: center;
    padding: 1px;
    margin: 0;
    font-size: 12px;
    font-family: verdana;
    color: #333;
    -webkit-appearance: none;
    left: 16px;
}
.decrease{
    float:left;
    border: 1px solid #cacbcb;
    border-right: 0;
    height: 18px;
    line-height: 14px;
    padding: 1px 0;
    width: 16px;
    text-align: center;
    color: #666;
    margin: 0;
    background: #fff;
    cursor:pointer;
    &:hover{
            text-decoration: none;
        }
}
.increase{
    float: right;
    border: 1px solid #cacbcb;
    border-left: 0;
    color: #666;
    height: 18px;
    line-height: 14px;
    padding: 1px 0;
    width: 16px;
    text-align: center;
    margin: 0;
    background: #fff;
    cursor:pointer;
    &:hover{
        text-decoration: none;
    }
}
.actionClass{
    cursor:pointer;
    font-size:12px;
    font-weight:normal;
    &:hover{
        color:red;
    }
}
.right{
    float:right;
}
.addParts{
    height:30px;
    position: relative;
    clear: both;
    text-align:right;
    #autoBox{
            float: right;
            width: 52%;
            padding-top: 20px;
        }
    button{
        position: absolute;
        top: 80px;
        right: 0px;
    }
}
.bottom-miniNum{
    position: relative;
    width: 74px;
    margin: 0 auto;
}
.partAnalysis{
    float: left;
    width:50%;
    border-right: 2px solid #ffffff;
    position:relative;
    thead{
        background:#f3f3f3;
        td{
            padding-left: 20px;
        }
    }
    tbody{
        background:#fff4e8;
        td{
            width: 20%;
            padding-left: 20px;
        }
    }
}
.partsListCommon{
    width:50%;
    float: right;
        position:relative;

    thead{
        background:#f3f3f3;
        td{
            padding-left: 20px;
        }
    }
    tbody{
        background:#fff4e8;
        td{
            width: 20%;
            padding-left: 20px;
        }
    }
}
</style>
<template>
<div class="main">
    <ul class="list-group">
        <li class="title">
            <div class="partsTitle partAll"><input type="checkbox" id="selectAll" v-on="click:selectAll"></div>
            <div class="partsTitle partName">配件名</div>
            <div class="partsTitle partCode">配件编号</div>
            <div class="partsTitle partPrice">单价</div>
            <div class="partsTitle partFrom">来源</div>
            <div class="partsTitle partNum">数量</div>
            <div class="partsTitle partTotal">小计</div>
            <div class="partsTitle partAction">操作</div>
        </li>
        <li v-repeat="part : partsList" track-by="partCode" class="singleItem">
            <div class="partsItem partAll"><input type="checkbox" class="partAllSelect"></div>
            <div class="partsItem partName">{{part.partName}}</div>
            <div class="partsItem partCode">{{part.partCode}}</div>
            <div class="partsItem partPrice">{{part.partPrice}}</div>
            <div class="partsItem partFrom">
                <select>
                    <option>原厂</option>
                    <option>4S店</option>
                </select>
            </div>

            <div class="partsItem partNum">
                <div class="miniNum">
                <a class="decrease" v-on="click:numChange('decrease',part)">-</a>
                <input class="numInput" type="text" v-model="part.partNum" v-on="keyup:numChange('keyup')">
                <a class="increase" v-on="click:numChange('increase',part)">+</a>
                </div>
            </div>
            <div class="partsItem partTotal">{{(part.partNum*part.partPrice).toFixed(2)}}</div>
            <div class="partsItem partAction">
                <div class="actionClass" v-on="click:deletePart($index)">删除</div>
                <div class="actionClass" v-on="click:addNormal">添加常用</div>
            </div>
        </li>
        <div style="overflow:hidden">
                <div class="right">
                <span class="glyphicon glyphicon-hand-right" aria-hidden="true"></span>
                总数量:
                <span class="badge">{{totalNum}}</span>
                <span class="glyphicon glyphicon-yen" aria-hidden="true"></span>
                总价格：
                <span class="badge">{{totalPrice}}</span>
                </div>

        </div>

    </ul>

    <div class="partAnalysis">
        <fieldset style="padding-right: 20px">
        <legend>数据分析</legend>
        <table>
        <thead>
            <tr><td>配件名</td><td>配件编码</td><td>单价</td><td>厂家</td><td>操作</td></tr>
        </thead>
        <tbody>
            <tr v-repeat="part:partAnalysis">
                <td>{{part.partName}}</td>
                <td>{{part.partCode}}</td>
                <td>{{part.partPrice}}</td>
                <td>{{part.partFactory}}</td>
                <td><a class="actionClass" v-on="click:selectFromAnalysis($index)">选择</a></td>
            </tr>
        </tbody>
        </table>
        </fieldset>
    </div>
    <div class="partsListCommon">
     <fieldset>
      <legend>常用</legend>
        <table>
                <thead>
                    <tr><td>配件名</td><td>配件编码</td><td>单价</td><td>厂家</td><td>操作</td></tr>
                </thead>
                <tbody>
                    <tr v-repeat="part:partsListCommon">
                        <td>{{part.partName}}</td>
                        <td>{{part.partCode}}</td>
                        <td>{{part.partPrice}}</td>
                        <td>{{part.partFactory}}</td>
                        <td><a class="actionClass" v-on="click:selectFromCommon($index)">选择</a></td>
                    </tr>
                </tbody>
        </table>
       </fieldset>
    </div>
     <div class="addParts">
           <div id="autoBox"></div>
           <button class="btn btn-primary" v-on="click:addToList">添加</button>
    </div>



</div>
</template>

<script>
    module.exports={
        created:function(){
            var store = require("../../store/disable");
            var self = this;
            store.getPartsList(1).done(function(data){self.partsList = data});
            store.getPartAnalysis(1).done(function(data){self.partAnalysis = data});
            store.getPartsListCommon(1).done(function(data){self.partsListCommon =data});

        },
        ready:function() {
            var store = require("../../store/disable");
            var self = this;
            store.getAutoCompleteData(1).done(function(data){
                var config = store.setAutoComplete(data);
                self.autoWidget = new AutoComplete('autoBox', config);
            });
        },
        data:function(){
            return {
                partsList:[],
                partAnalysis:[],
                partsListCommon:[],
                totalNum:0,
                totalPrice:0,
                autoWidget:{}
            }
        },
        computed:{
            totalNum:function(){
                var total = 0;
                this.partsList.forEach(function(data){
                    total+=data.partNum;
                });
                return total;
            },
            totalPrice:function(){
                var total = 0;
                this.partsList.forEach(function(data){
                    total+=data.partNum*data.partPrice;
                });
                return total.toFixed(2);
            }
        },
        methods:{
           numChange:function(arg,part){
               if(!arg) return;
               if(arg=="increase"){
                    part.partNum++;
               }else if (arg=="decrease"){
                    if(part.partNum>0)
                        part.partNum--;
                    else return;
               }else if (arg=="keyup"){

               }
           },
           deletePart:function(index){
                this.partsList.$remove(index);
           },
           addNormal:function(){
           },
           selectFromCommon:function(index){
                this.pushInPartsList(this.partsListCommon,index);
           },
           selectFromAnalysis:function(index) {
                this.pushInPartsList(this.partAnalysis,index);
           },
           selectAll:function(){
                if($("#selectAll")[0].checked){
                    $(".partAllSelect").attr("checked",true);
                }else{
                    $(".partAllSelect").attr("checked",false);
                }
           },
           addToList:function(){
                if(this.autoWidget.getValue().length){
                   var obj = this.autoWidget.getValue()[0][0].value;
                   this.pushInPartsList(obj);
                }
           },
           pushInPartsList:function(data,index){
               var flag = true;
               this.partsList.forEach(function(e){
                   if(index){
                       if(e.partCode===data[index].partCode){
                           flag=false;
                           ++e.partNum;
                           return;
                       }
                   }else{
                        if(e.partCode===data.partCode){
                            flag=false;
                            ++e.partNum;
                            return;
                         }
                   }
               });
               if(flag===true){
                 if(index)
                    this.partsList.push(data[index]);
                 else{
                    data.partNum=0;
                    this.partsList.push(data);
                 }
               }

           }
        }
    }
</script>