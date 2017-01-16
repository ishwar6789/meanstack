angular.module('app').controller('mainctrl',function($scope){
    $scope.courses =[
        {name:"C# data" ,featured:true,published: new Date('1/2/2017')  },
        {name:"C data" ,featured:false,published: new Date('1/2/2017')  },
        {name:"java data" ,featured:true,published: new Date('1/2/2017')  },
        {name:"python data" ,featured:true,published: new Date('1/2/2017')  }
    
    
    ]
});