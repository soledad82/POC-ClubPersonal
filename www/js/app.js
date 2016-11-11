var myApp = angular.module('app', []);
myApp.controller('SplitterController', function() {
        this.load = function(page) {
            mySplitter.content.load(page)
                .then(function() {
                    mySplitter.left.close();
                });
        };
    });