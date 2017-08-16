app.factory('photos', ['$http', function($http) { 
  return $http.get('js/json/photos.json') 
    .success(function(data) { 
      return data; 
    }) 
    .error(function(err) { 
      return err; 
    }); 
}]);
