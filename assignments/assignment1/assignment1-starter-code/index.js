( function (){

'use strict';

angular.module('LunchCheck',[])

.controller('Mycontrol',function($scope){

$scope.inputlunch="";

$scope.check=function(){
  var length=0;
  //getting the items

  var items=$scope.inputlunch;
  var a=items.split(",");

  //for bonus i am considering
  for (var i = 0; i < a.length; i++) {
    if(a[i]!="")
    {
      length=length+1;
    }
  }

  if ($scope.inputlunch.length === 0 || typeof $scope.inputlunch === 'undefined') {
    //checking empty input
    $scope.message="Please enter data first";
  }
  else if (length<=3) {
    $scope.message="Enjoy!";
    }
  else {
    $scope.message="Too much!";
  }


};

});

})();
