$(document).ready(
    function() {
        var totalCharacters = 3;        

        $("#inputPost").keyup(function (event) {
            var inputText = event.target.value;
            $("#charRemaining").html(totalCharacters - inputText.length);
        });

        //getComments();
        /**
         * When the page loads (or is refreshed) we request all comments from the server
         */
        function getHighscores() {			
            $.ajax({
                url: '/getHighscores/',
                type: 'GET',
                success: function (data) {
                    console.log(data);
                    console.log(data.length);
					var posts = "<div id = 'tvScreen'>"+
                                "<div id = 'horseAndBet'>";
                    //alert(data.length);
                    for (var i = 0; i < data.length; i++) 
					{
                        console.log(data[i].userName);
                        posts += data[i].userName + " : "+
                        data[i].highScore +"\n";
                    }
                    posts += "</div></div>";
                    $("#leaderboardDiv").html(posts);
                }
            });
            
        }
		//Recursively call getComments every 10 second
        setInterval(getHighscores, 10000);

        /**
         * Event handler for when the user posts a comment
         */
        $("#postBtn").click(function (event) {
            //var cleanComment = $('#inputPost').val();
            //cleanComment = parseInt(cleanComment)
            var name = $('#inputPost').val();
            $.ajax({
                url: '/addHighscore/',
                type: 'POST',
                data: {userName: name, highScore: 30000},
                success: function (data) {
                    console.log(data);
                    getHighscores();
                }
            });
        });

        function manuallyAddHighscore(initials){
            
            $.ajax({
                url: '/addHighscore/',
                type: 'POST',
                data: {userName: initials, highScore: 30000},
                success: function (data) {
                    console.log(data);
                    //getHighscores();
                }
            });
        }



    }
);