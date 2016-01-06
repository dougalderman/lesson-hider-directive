angular.module('directivePractice')
.directive('lessonHider', function() {
    return {
        restrict: 'E',
        templateUrl: '../html/lessonHider.html', 
        scope: {
            lessonAtr: '=',
            selectLineThrough: '=',
            dayAlert: '&'
        },
        link: function(scope, elem, attrs) {
            /* console.log('scope = ') + console.log(scope);
            console.log('elem = ') + console.log(elem);
            console.log('attrs = ') + console.log(attrs);
            elem.css('color', 'blue'); */
            scope.lineThrough = false;
            scope.getSchedule
            .then(function(response) {
               if (response.status === 200) {
                   scope.schedule = response.data;
                   for (var i = 0; i < scope.schedule.length; i++) {
                       if (scope.lessonAtr === scope.schedule[i].lesson) {
                           scope.lineThrough = true; // elem.css('text-decoration', 'line-through');
                           scope.lessonDay = scope.schedule[i].weekday;
                           return;
                       }
                   }
               }
               else
                   console.log('status code is ' + response.status);
            })
            .catch(function(err) {
                console.log('Error code: ' + err.status);
                console.log(err);
            });
        },
        controller: function($scope, lessonService) {
            $scope.getSchedule = lessonService.getSchedule();
        }
        
    }
});