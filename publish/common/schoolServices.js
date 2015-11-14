angular.module('myApp.schoolServices', [])
.factory("schoolReviewService", function(){
	var factory = [];
	factory.getScore = function(reviews){
		var schoolScore = 0;
	 	if(reviews && reviews.length != 0)
	 	{
	 		var reviewLength = reviews.length;
		 	for(var i=0; i< reviewLength; i++)
		 	{
		 		schoolScore += reviews[i].generalScore
		 	}
			schoolScore = Math.round(schoolScore/reviewLength);
	 	}
	 	return schoolScore;
	}
	return factory;
})