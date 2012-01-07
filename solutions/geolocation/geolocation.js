/*
 * @Name: Geolocation
 * @Overview: the javascript way to fetch the geolocation
 * @Author: sofish Lin <http://sofish.de>
 */

// TODO: error handler for ie

function Geo(successCallback, errorCallback) {
    
    var that = this,
    
        // native geolocation API
        _w3cAPI = navigator.geolocation;
    
    // get ip-base geolocation
    // fallback for the w3c way
    function _ipBaseWay(){
        var that = this;
        
        var doc = document,
            script = doc.createElement('script');
            
        script.setAttribute('src','http://j.maxmind.com/app/geoip.js');
        doc.body.appendChild(script);
        
        script.attachEvent('onreadystatechange', function(){
            var target = window.event.srcElement;
            if(/loaded|complete/.test(target.readyState)){
                var coords = {
                    latitude: geoip_latitude(),
                    longitude: geoip_longitude()
                };
                return successCallback.call(that, coords);
            }
        });
    };
        
    // fetch coords using w3c Geoloactions API
    function _w3cWay (){
        var that = this;
        
        _w3cAPI.getCurrentPosition(function(position){
            successCallback.call(that, position.coords);
        },function(error){
            var err;
            switch (error.code) {
                case error.PERMISSION_DENIED:
                	err = 'You did not share geolocation data!'; break;
                case error.POSITION_UNAVAILABLE:
                	err = 'Could not detect current position!'; break;
                case error.TIMEOUT:
                	err = 'Retrieving position timedout!'; break;
                default:
                	err = 'Unknown error';
            };
            errorCallback.call(that, err);
        });

    };
            
    // create the position
    !!(_w3cAPI) ? _w3cWay() : _ipBaseWay();  
};