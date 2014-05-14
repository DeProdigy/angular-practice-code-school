// wrap the whole thing in a closure
(function(){
  var app = angular.module('store', []);

  app.controller('StoreController', function(){
    this.products = gems;
  });

  var gems = [
    {
      name: 'Ruby',
      price: 2.95,
      description: 'Amazingly beutiful gem that makes everyone happy.',
      canPurchase: true,
      soldOut: false
    },
    {
      name: 'Not Ruby',
      price: 5.55,
      description: 'Amazingly beutiful gem that makes everyone happy....NOT',
      canPurchase: true,
      soldOut: true
    },
    {
      name: 'Some Other Gem',
      price: 0,
      description: 'Nothing here for you.',
      canPurchase: false,
      soldOut: false
    }
  ];


})();