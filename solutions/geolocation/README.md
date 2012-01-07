### Geolocation

用 js 的方式获取 geolocation。

### 使用方法：

    // 获取数据成功时的回调：successCallback(coords)，包含一个参数 coords {Array}，经纬度
    // 获取失败时的回调：errorCallback，包含一个参数 error {String}：错误消息
    var geo = new Geo(successCallback, errorCallback);

    
    // 实例化：
    var geo = new Geo(function(coords){
        alert('Latitude: ' + coords.latitude + '\nLongitude: ' + coords.longitude);
    }, function(error){
        alert('Error Message: ' + error);
    });

