$(".teams").click(function(){
    var url = "https://api.mysportsfeeds.com/v2.1/pull/nhl/2014-2018/games.json"; 
    var key = "{c37e73f5-2870-4919-a9c1-4439a9}"

    $.ajax
    ({
        type: "GET",
        url: url,
        dataType: 'json',
        async: false,
        headers: {
            "Authorization": "Basic " + btoa(key + ":" + MYSPORTSFEEDS)
    },
    data: '{ "comment" }',
        success: function (response){
            alert(response); 
    }
    });
});