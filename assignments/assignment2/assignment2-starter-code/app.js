( function(){
  'use strict';
  angular.module('assignment2',[])
  .controller('ToBuyController',ToBuyController)
  .controller('AlreadyBoughtController',AlreadyBoughtController)
  .service('ShoppingListCheckOffService',ShoppingListCheckOffService);

  ToBuyController.$inject=['ShoppingListCheckOffService'];
  var items1=[];
  function ToBuyController(ShoppingListCheckOffService){
    var tobuy=this;
    tobuy.items=ShoppingListCheckOffService.getItems();
    tobuy.removeItem=function(index){
      ShoppingListCheckOffService.removeItem(index);
    }


  }

  AlreadyBoughtController.$inject=['ShoppingListCheckOffService'];

  function AlreadyBoughtController(ShoppingListCheckOffService){

    var already=this;
    already.items=items1;
  }

  function ShoppingListCheckOffService(){
    var service=this;
    var items=[
      {
        name:"Cookies",
        quantity:"10 packs"
      },
      {
        name:"Coke",
        quantity:"5 bottels"
      },
      {
        name:"Burger",
        quantity:"10 piece "
      },
      {
        name:"Uncle Chips",
        quantity:"5 packs"
      },
      {
        name:"Five star",
        quantity:"3 packs"
      }
    ];

    service.getItems=function(){
      return items;
      };


    service.removeItem=function(index){
      var item={
        name:items[index].name,
        quantity:items[index].quantity
      };
      items1.push(item);
      items.splice(index,1);
      };

      }






})();
