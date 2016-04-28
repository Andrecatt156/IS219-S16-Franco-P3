app.controller('homeController', ['$scope', function($scope) {
	
	
	/* THESE ARE YOUR LIST OF MOVIES AND ACCOMPANYING METADATA
	//	
	// 	They are in the following format:
	// 	title (String): the name of the movie
	// 	iscore (Number): the IMDB score
	// 	rating (String): the movie's MPAA rating 
	// 	released (Date): the release date
	// 	country (String): the country of production
	// 	posters (Array): an array of String values with the URL to movie posters
	// 	imdb (String): the URL to the corresponding IMDB website
	// 	website (String): the URL to the corresponding official website
	// 	likes (Number): a fictitious number of user likes
	// 	dislikes (Number): a fictitious number of user dislikes
	// 	posterindex (Number): a counter to use with the "posters" array to keep track of the current displayed poster index
	//
	// FOR STEP 16, ADD THREE OF YOUR OWN FAVORITE MOVIES WITH METADATA TO THE END OF THIS LIST
	*/
	$scope.movies = [
    { 
      title:	'The Shawshank Redemption', 
      iscore:	9.3,
      rating:	'R',
      runtime:	142,
      released:	new Date('1994', '10', '14'),
      country:	'USA',
      posters:	['img/shawshank.jpg','img/shawshank2.jpg','img/shawshank3.jpg'],
      imdb:		'http://www.imdb.com/title/tt0111161',
      website:	'https://www.facebook.com/ShawshankRedemptionFilm',
      likes:	1021,
      dislikes:	122,
      posterindex: 0
	},
    { 
      title:	'The Godfather', 
      iscore:	9.2,
      rating:	'R',
      runtime:	175,
      released:	new Date('1972', '03', '24'),
      country:	'USA',
      posters:	['img/godfather.jpg','img/godfather_2.jpg','img/godfather_3.jpg'],
      imdb:		'[http://www.imdb.com/title/tt0068646',
      website:	'https://www.facebook.com/thegodfather',
      likes:	928,
      dislikes:	109,
      posterindex: 0
	},
    { 
      title:	'The Godfather: Part II', 
      iscore:	9.0,
      rating:	'R',
      runtime:	202,
      released:	new Date('1974', '12', '20'),
      country:	'USA',
      posters:	['img/godfather2.jpg','img/godfather2_2.jpg'],
      imdb:		'http://www.imdb.com/title/tt0071562',
      website:	'https://www.facebook.com/thegodfather',
      likes:	855,
      dislikes:	99,
      posterindex: 0
	},
    { 
      title:	'The Dark Knight', 
      iscore:	8.9,
      rating:	'PG-13',
      runtime:	152,
      released:	new Date('2008', '07', '18'),
      country:	'USA',
      posters:	['img/darkknight.jpg','img/darkknight2.jpg'],
      imdb:		'http://www.imdb.com/title/tt0468569',
      website:	'http://www.42entertainment.com/work/whysoserious',
      likes:	828,
      dislikes:	127,
      posterindex: 0
	},
    { 
      title:	'Schindler\'s List', 
      iscore:	8.9,
      rating:	'R',
      runtime:	195,
      released:	new Date('1993', '11', '30'),
      country:	'USA',
      posters:	['img/schindlerslist.jpg'],
      imdb:		'http://www.imdb.com/title/tt0108052',
      website:	'https://www.uphe.com/schindlers-list',
      likes:	812,
      dislikes:	101,
      posterindex: 0
	},
        
          {
                title: 'Grind',
                iscore: 6.0,
                rating: 'PG-13',
                runtime: 145,
                released: new Date('2003', '08', '15'),
                country: 'USA',
                posters: ['img/grind.jpg', 'img/grind.jpg', 'img/grind.jpg'],
                imdb: 'http://www.imdb.com/title/tt0338077/?ref_=tt_mv_close',
                website: 'https://en.wikipedia.org/wiki/Grind_(2003_film)',
                likes: 1000,
                dislikes: 50,
                posterindex: 0
            },
            {
                title: 'American Sniper',
                iscore: 7.3,
                rating: 'R',
                runtime: 213,
                released: new Date('2015', '01', '16'),
                country: 'USA',
                posters: ['img/sniper.jpg', 'img/sniper.jpg'],
                imdb: 'http://www.imdb.com/title/tt2179136/?ref_=tt_mv_close',
                website: 'http://www.americansnipermovie.com/',
                likes: 3000,
                dislikes: 99,
                posterindex: 0
            },
            {
                title: 'Fast and the Furious',
                iscore: 6.7,
                rating: 'PG-13',
                runtime: 146,
                released: new Date('2001', '06', '21'),
                country: 'USA',
                posters: ['img/fast.jpg', 'img/fast.jpg'],
                imdb: 'http://www.imdb.com/title/tt0112573/',
                website: 'http://www.imdb.com/title/tt0232500/?ref_=tt_mv_close',
                likes: 500,
                dislikes: 150,
                posterindex: 0
            }        
        
    
	
	
  ];
  
  
  
  
  
  
	
	

	
	/* ADD VARIABLES FOR STEP 3 HERE */
        
    $scope.title = "IMDB + Andres' Top 8 Movies";
    $scope.owner = "Andres Franco";
    $scope.github = "https://github.com/Andrecatt156/IS219-S16-Franco-P3";
	
	/* ADD FUNCTIONS FOR STEP 7 HERE */
		
        $scope.like = function (index) 
        {
            $scope.movies[index].likes++;
        }

        $scope.dislike = function (index) 
        {
            $scope.movies[index].dislikes++;
        }

        $scope.posterClick = function (index) 
        {
            $scope.movies[index].posterindex++;
            if ($scope.movies[index].posterindex == $scope.movies[index].posters.length) 
            {
                $scope.movies[index].posterindex = 0;
            }
        }

        $scope.timeText = function (minutes) 
        {
            $scope.hour = Math.floor(minutes / 60);
            $scope.min = minutes % 60;
            return $scope.hour + " hours " + $scope.min + " minutes";
        }
	
	
	
	
	
	
	
}]);
