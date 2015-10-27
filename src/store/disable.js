/**
 * Created by doub on 2015/10/21 0021.
 */
var cachePartsList = {};
var cachePartsListCommon ={};
var cachePartAnalysis = {};
module.exports={
    getPartsList:function(id){
        var deferred = $.Deferred();
        if(cachePartsList.id){
            deferred.resolve(cachePartsList.id);
        }else{
            $.getJSON("../../mock/disable.json").done(function(data){
                cachePartsList.id=data.partsList;
                deferred.resolve(cachePartsList.id);
            });
        }
        return deferred.promise();
    },
    getPartsListCommon:function(id){
        var deferred = $.Deferred();
        if(cachePartsListCommon.id){
            deferred.resolve(cachePartsListCommon.id);
        }else{
            $.getJSON("../../mock/disable.json").done(function(data){
                cachePartsListCommon.id=data.partsListCommon;
                deferred.resolve(cachePartsListCommon.id);
            });
        }
        return deferred.promise();
    },
    getPartAnalysis:function(id){
        var deferred = $.Deferred();
        if(cachePartAnalysis.id){
            deferred.resolve(cachePartAnalysis.id);
        }else{
            $.getJSON("../../mock/disable.json").done(function(data){
                cachePartAnalysis.id=data.partAnalysis;
                deferred.resolve(cachePartAnalysis.id);
            });
        }
        return deferred.promise();
    },
    getAutoCompleteData:function(query){
        var deferred = $.Deferred();
        $.getJSON("../../mock/tips.json").done(function(data){
            deferred.resolve(data);
        })
        return deferred.promise();
    },
    setAutoComplete:function(data){
        var partsList = data;
        var encode = AutoComplete.htmlEncode;
        var partsNameData = function(option){
            var html ='';
            html+='<span style="color: #000088">'+option.value.partName+'</span>';
            html+='--'+'<span style="color: #333333">'+encode(option.value.partCode)+'</span>';
            html+='--￥'+'<span style="color:red">'+encode(option.value.partPrice)+'</span>';
            return html;
        }
        var configAutocomplete = {
            placeholderHTML:"选择配件",
            maxTokenGroups:1,
            showErrors: 'console',
            lists:{
                partsList:{
                    optionHTML:partsNameData,
                    options:partsList
                }
            }
        };
        return configAutocomplete;
    },
}