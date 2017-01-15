(function(){
  'use strict';

  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController  )
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService) {
        var buy = this;

        var service = ShoppingListCheckOffService;
        buy.list = service.getToBuyList();
        buy.isEmpty = service.isToBuyListEmpty;
        console.log('length of buy list: ', buy.isEmpty());
        buy.checkOff = service.checkOff;
  }

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService) {
        var bought = this;

        var service = ShoppingListCheckOffService;
        bought.list = service.getBoughtList();
        bought.isEmpty = service.isBoughtListEmpty;
        console.log('length of bought list: ', bought.isEmpty());
  };

  // Service implementation
  function ShoppingListCheckOffService() {
      var service = this;

      service.toBuyList = [
                  {
                      name: "Bat",
                      quantity: "4"
                  },
                  {
                      name: "Ball",
                      quantity: "12"
                  },
                  {
                      name: "Hand Gloves",
                      quantity: "6"
                  },
                  {
                      name: "Pad",
                      quantity: "8"
                  },
                  {
                      name: "Helmet",
                      quantity: "6"
                  },
                  {
                      name: "Keeper Gloves",
                      quantity: "2"
                  },
                  {
                      name: "Gaurd",
                      quantity: "11"
                  }
              ];

      service.boughtList = [];

      service.isToBuyListEmpty = function () {
          console.log('inside isToBuyListEmpty');
          return service.toBuyList.length == 0;
      };

      service.isBoughtListEmpty = function () {
          console.log('inside isBoughtListEmpty');
          return service.boughtList.length == 0;
      };

      service.checkOff = function (itemIndex) {
          console.log('inside checkOff');
          var boughtItem = service.toBuyList.splice(itemIndex, 1)[0];
          service.boughtList.push(boughtItem);
      };

      service.getToBuyList = function () {
          console.log('inside getToBuyList');
          return service.toBuyList;
      };

      service.getBoughtList = function () {
          console.log('inside getBoughtList');
          return service.boughtList;
      };

  }

})();
