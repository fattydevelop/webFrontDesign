/**
 * Created by doub on 2015/10/30 0030.
 */
module.exports ={
    getAddress:function(){
        var deferred = $.Deferred();
        $.getJSON("../../mock/address.json").done(function(data){
            deferred.resolve(data);
        })
        return deferred.promise();
    }
}