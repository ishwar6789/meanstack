angular.module('app').controller('myNavBarLoginCtrl',function($scope,$http,mvIdentity,mvNotifier,mvAuth){
$scope.identity = mvIdentity;
$scope.signin=function(username,password){
mvAuth.authenticateUser(username,password).then(function(success){
if(success){
mvNotifier.notify('You have successfully signed in');

} else{
mvNotifier.notify('username / Password combination is incorrect');
}
});
    
}
});