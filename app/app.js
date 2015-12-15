angular.module("solitaire", ["klondike", "ngDraggable"]);

angular.element(document).ready(function () {
  angular.bootstrap(document, ["solitaire"]);
});