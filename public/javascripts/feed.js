$(document).ready(
    function() {
        var totalCharacters = 3;        

        $("#inputPost").keyup(function (event) {
            var inputText = event.target.value;
            $("#charRemaining").html(totalCharacters - inputText.length);
        });

        getHighscores();
        /**
         * When the page loads (or is refreshed) we request all comments from the server
         */
        function getHighscores() {			
            $.ajax({
                url: '/getHighscores/',
                type: 'GET',
                success: function (data) {
                    //console.log(data);
                    //console.log(data.length);
                    var posts = "<header class='masthead my-auto'>"+
                    "<div class='container h-100 my-auto'>"+
                      "<div class='row h-100 align-items-center'>"+
                        "<div class='col-12 text-center'>"+
                    "<div id = 'topScreen'><a href = '/'>Goblin Racers Leaderboard</a></div>"+
                    "<div id = 'tvScreen'"+
                    "style = 'margin:4px, 4px; padding:4px; background-color: green; "+
                    "overflow-x: hidden; " +
                    "overflow-x: auto;'>";
                    //alert(data.length);
                    var scoreBoard = [];
                    for(var i = 0; i < data.length; i++){
                        scoreBoard.push({name: data[i].userName, score: data[i].highScore});
                        //alert(scoreBoard[i].name);
                        console.log(scoreBoard[i].name);
                    }
                    scoreBoard.sort((a, b) => (a.score < b.score) ? 1 : -1);
                    for (var i = 0; i < data.length; i++) 
					{
                        //console.log(data[i].userName);

                        posts += "<div style = 'border: 1px solid black'; "+
                        "font-size: 2vw; "+
                        "font: 'BankGothicBold';>"+scoreBoard[i].name + " : "+
                        scoreBoard[i].score +"</div>";
                    }
                    posts += "</div><div id = 'bottomScreen'><br></div></div></div></div></header>";
                    $("#leaderboardDiv").html(posts);
                }
            });
            
        }
		//Recursively call getComments every 10 second
        setInterval(getHighscores, 10000);

        /**
         * Event handler for when the user posts a comment
         */
        /*
        $("#postBtn").click(function (event) {
            //var cleanComment = $('#inputPost').val();
            //cleanComment = parseInt(cleanComment)
            var name = $('#inputPost').val();
            $.ajax({
                url: '/addHighscore/',
                type: 'POST',
                data: {userName: name, highScore: 30000},
                success: function (data) {
                    //console.log(data);
                    getHighscores();
                }
            });
        });
        */

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