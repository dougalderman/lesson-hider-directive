angular.module('directivePractice')
.service('lessonService', function($http) {
    
    this.getSchedule = function() {
        var url = '/js/schedule.json';
        return $http({
            method: 'GET',
            url: url,
        });
    }
         
});