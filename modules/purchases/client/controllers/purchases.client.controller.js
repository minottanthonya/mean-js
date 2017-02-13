(function () {
  'use strict';

  // Purchases controller
  angular
    .module('purchases')
    .controller('PurchasesController', PurchasesController);

  PurchasesController.$inject = ['$scope', '$state', 'Authentication', 'purchaseResolve'];

  function PurchasesController ($scope, $state, Authentication, purchase) {
    var vm = this;

    vm.authentication = Authentication;
    vm.purchase = purchase;
    vm.error = null;
    vm.form = {};
    vm.remove = remove;
    vm.save = save;

    // Remove existing Purchase
    function remove() {
      if (confirm('Are you sure you want to delete?')) {
        vm.purchase.$remove($state.go('purchases.list'));
      }
    }

    // Save Purchase
    function save(isValid) {
      if (!isValid) {
        $scope.$broadcast('show-errors-check-validity', 'vm.form.purchaseForm');
        return false;
      }

      // TODO: move create/update logic to service
      if (vm.purchase._id) {
        vm.purchase.$update(successCallback, errorCallback);
      } else {
        vm.purchase.$save(successCallback, errorCallback);
      }

      function successCallback(res) {
        $state.go('purchases.view', {
          purchaseId: res._id
        });
      }

      function errorCallback(res) {
        vm.error = res.data.message;
      }
    }
  }
})();
