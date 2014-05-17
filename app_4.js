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
      soldOut: false,
      reviews: [
        {
          stars: 5,
          body: 'I love this product!',
          author: 'joe@thomas.com'
        },
        {
          stars: 2,
          body: 'Meh',
          author: 'hater@gmail.com'
        },
        {
          stars: 4,
          body: 'Its very OK',
          author: 'matt@matt.com'
        }
      ]
    },
    {
      name: 'Not Ruby',
      price: 5.55,
      description: 'Amazingly beutiful gem that makes everyone happy....NOT',
      canPurchase: true,
      soldOut: true,
      reviews: [
        {
          stars: 5,
          body: 'I love this product!',
          author: 'joe@thomas.com'
        },
        {
          stars: 2,
          body: 'Meh',
          author: 'hater@gmail.com'
        },
        {
          stars: 4,
          body: 'Its very OK',
          author: 'matt@matt.com'
        }
      ]
    },
    {
      name: 'Some Other Gem',
      price: 0,
      description: 'Nothing here for you.',
      canPurchase: false,
      soldOut: false,
      reviews: [
        {
          stars: 5,
          body: 'I love this product!',
          author: 'joe@thomas.com'
        },
        {
          stars: 2,
          body: 'Meh',
          author: 'hater@gmail.com'
        },
        {
          stars: 4,
          body: 'Its very OK',
          author: 'matt@matt.com'
        }
      ]
    }
  ];

  app.controller('PanelController', function(){
    this.tab = 1;

    this.selectTab = function(setTab){
      this.tab = setTab;
    };

    this.isSelected = function(checkTab){
      return this.tab === checkTab;
    };
  });

  app.controller('ReviewController', function(){
    this.review = {};

    this.addReview = function(product){
      product.reviews.push(this.review);
      this.review = {};
    };
  });

  // custom directive
  app.directive('productTitle', function(){
    return {
      // declaring a new HTML element
      // A stands for attribute to add to the existing HTML element
      restrict: 'E',
      // pulls the HTML partial
      templateUrl: 'product-title.html'
    };
  });

})();

