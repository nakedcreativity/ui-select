uis.directive('uiSelectNull',
  ['uiSelectConfig', '$compile',
  function(uiSelectConfig, $compile) {

  return {
    restrict: 'EA',
    //require: '^uiSelect',
    replace: true,
    transclude: true,
    templateUrl: function(tElement) {
      // Gets theme attribute from parent (ui-select)
      var theme = tElement.parent().attr('theme') || uiSelectConfig.theme;
      return theme + '/null.tpl.html';
    },

    compile: function() {
      return function link(scope, element, attrs, $select, transcludeFn) {

        element.attr('ng-click', '$select.selectNull(false,$event)').attr('ng-mouseenter', '$select.setActiveItem(null)');
        $compile(element, transcludeFn)(scope); 
      };
    }
  };
}]);
