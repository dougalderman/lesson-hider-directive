angular.module('directivePractice')
.controller('lessonCtrl', function($scope) {
    
    $scope.name = 'Doug';
    
    $scope.lessons = ['Services', 'Routing', 'Directives', 'Review', 'Firebase',
                   'No server project', 'Node', 'Express', 'Mongo'];
    
    $scope.test = 'Two way data binding!';
    
    $scope.announceDay = function(lesson, day) {
        alert(lesson + ' is active on ' + day + '.');
        
    }
    
    $scope.selectLineThrough = true;
    
    $scope.removeLesson = function(lessonToRemove) {
        var idx = $scope.lessons.indexOf(lessonToRemove);
        $scope.lessons.splice(idx, 1);
    }
    
})