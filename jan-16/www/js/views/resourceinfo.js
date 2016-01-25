define(['js/app', 'knockout'], function (app, ko) {
    var getQueryParameters = function(str) {
        return (str || window.location.search).replace(/(^\?)/,'').split("&").map(function(n){return n = n.split("="),this[n[0]] = n[1],this}.bind({}))[0];
    };

    var query = getQueryParameters();
    var resourceid = query.id;

    // get data from db with resourceid
    var data = app.getResourceById(resourceid, function(data){
        data.save = function(data){
            app.updatePrimaryName(data.resourceid, data.name());
        };
        ko.applyBindings(data);
    });
});
