angular.module('directivePractice').controller('lessonCtrl', function($scope, lessonService){

    $scope.lessons=[
        'Services', 
        'Routing', 
        'Directives', 
        'Review', 
        'Firebase', 
        'No server project', 
        'Node',
        'Express', 
        'Mongo'
        ];


        $scope.announceDay= function(lesson, day){
            alert(lesson + ' is active on ' + day + '.')
        }

})

// angular.module('directivePractice').controller('dCtrl', function ($scope, dSrv) {

//    $scope.lessons = ['Services', 'Routing', 'Directives', 'Review', 'Firebase', 'No server project', 'Node', 'Express', 'Mongo']

// $scope.announceDay = function(lesson, day){
//    alert(lesson + " is active on " + day + ".")
// }



// })