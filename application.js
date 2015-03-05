/**
 * @fileoverview This is project entry point
 *
 * @autor Dmitry Lukianenko on 3/4/15.
 *
 * @license
 */
(function() {
    'use strict';

    var app = angular.module('CodeSample', []);

    /**
     * CodeSampleController
     * @param {!angular.Scope} $scope
     */
    app.controller('CodeSampleController', ['$scope', function($scope) {

    	/**
    	 * Name value
    	 * @type {String}
    	 * @public
    	 */
        $scope.name = 'Bob Smith';

        /**
    	 * isShowText flag
    	 * @type {Boolean}
    	 * @public
    	 */
        $scope.isShowText = true;

        /**
    	 * Edit handler
    	 * @param {Object} editNameForm - form object
    	 * @public
    	 */
        $scope.editHandler = function(editNameForm) {
            if ($scope.isShowText) {
                $scope.isShowText = false;
            } else {
                if (editNameForm.$valid) {
                    $scope.isShowText = true;
                } else {
                    editNameForm.name.$dirty = true;
                }
            }
        };

    }]);
})();
