app.controller("MainController",
	['$scope',function($scope){
		$scope.title = "Top Sellers in Books";
		$scope.promo = "Best Romances";
		$scope.products = [
			{
				name : "Responsive Web Design", 
				cover : "imgs/covers/aba-04.png",
				price : 19,
				pubdate : new Date('2014','03','08'),
				likes : 0,
				dislikes : 0
			},
			{
				name : "The Business Book", 
				cover : "imgs/covers/business_bookcover.png",
				price : 23.99,
				pubdate : new Date('2017','08','08'),
				likes : 0,
				dislikes : 0
			},
			{
				name : "The Creative Book", 
				cover : "imgs/covers/creative_bookcover.png",
				price : 26.79,
				pubdate : new Date('2017','08','08'),
				likes : 0,
				dislikes : 0
			},
			{
				name : "The Vintage Book", 
				cover : "imgs/covers/vintage_bookcover.png",
				price : 20.59,
				pubdate : new Date('2017','08','08'),
				likes : 0,
				dislikes : 0
			}
		];
		$scope.plusOne = function(index) { 
			$scope.products[index].likes += 1; 
		};
		$scope.minusOne = function(index) { 
			$scope.products[index].dislikes += 1; 
		};
		//APP MARKET
		$scope.move = {
			icon: 'img/app_market/move.jpg',
			title: 'MOVE',
			developer: 'MOVE, Inc.',
			price: 0.99
		};
		$scope.shutterbugg = {
			icon: 'img/app_market/shutterbugg.jpg',
			title: 'Shutterbugg',
			developer: 'Chico Dusty',
			price: 2.99
		};
		$scope.gameboard = {
			icon: 'img/app_market/gameboard.jpg',
			title: 'Gameboard',
			developer: 'Armando P.',
			price: 1.99
		};
		$scope.forecast = {
			icon: 'img/app_market/forecast.jpg',
			title: 'Forecast',
			developer: 'Armando P.',
			price: 1.99
		};
		$scope.apps = [
		{ 
			icon: 'img/app_market/move.jpg', 
			title: 'MOVE', 
			developer: 'MOVE, Inc.', 
			price: 0.99 
		}, 
		{ 
			icon: 'img/app_market/shutterbugg.jpg', 
			title: 'Shutterbugg', 
			developer: 'Chico Dusty', 
			price: 2.99 
		},
		{ 
			icon: 'img/app_market/gameboard.jpg', 
			title: 'GAMEBOARD', 
			developer: 'MOVE, Inc.', 
			price: 0.99 
		}, 
		{ 
			icon: 'img/app_market/forecast.jpg', 
			title: 'Forecast', 
			developer: 'Chico Dusty', 
			price: 2.99 
		} 
		]

	}]
);