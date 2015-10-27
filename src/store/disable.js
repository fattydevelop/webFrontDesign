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
    configName:{
        autocomplete:{
            serviceUrl:"../../mock/disable.json",
            paramName:"tipsName"
        }
    },
    configCode:{
        autocomplete:{
            serviceUrl:"../../mock/disable.json",
            paramName:"tipsCode"
        }
    }
}