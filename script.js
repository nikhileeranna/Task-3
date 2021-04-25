var req = new XMLHttpRequest();
req.open('get','https://restcountries.eu/rest/v2/all',true);
req.send();
req.onload=function(){
var data = JSON.parse(this.response);

    for( var i in data)
    {
        var name = data[i].name;
        var lat = data[i].latlng[0];
        var lang = data[i].latlng[1]; 
        out(name, lat, lang);  
    }
};

var out = function(name, lat, lang)
{
    var req = new XMLHttpRequest();
    var url = 'https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lang+'&appid=7af5e33a26185974cb47d7a5e73a4208';

    req.open('get',url,true);
    req.send();
    req.onload=function()
    {
        var output = JSON.parse(this.response); 
        console.log(name+' : '+output.main.temp)
    }

};