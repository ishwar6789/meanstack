angular.module('app').controller('mvUserListCtrl',function($scope,mvUser){
$sccope.users = mvUser.query();

});