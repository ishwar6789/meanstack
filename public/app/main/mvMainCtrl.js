angular.module('app').controller('mainctrl',function($scope){
    $scope.courses =[
        {name:"C# data types and Navigation" ,featured:true,published: new Date('1/2/2017')  },
        {name:"C data structures and algoritms" ,featured:false,published: new Date('1/2/2017')  },
        {name:"java advanced and semi advanced" ,featured:true,published: new Date('1/2/2017')  },
        {name:"python data and perl together" ,featured:true,published: new Date('1/2/2017')  }
    
    
    ]
});