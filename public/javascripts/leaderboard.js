$(document).ready(
    function() {

function getLeaderboard() {			
    $.ajax({
        url: '/getLeaderboard/',
        type: 'GET',
        success: function (data) {
            console.log(data)
            var posts = "<div id = 'tvScreen'>"+
            "<div id = 'horseAndBet'>";
            for (var i = 0; i < data.length; i++) 
            {
                posts += + data[i].user_name + " : "+
                data[i].highscore;
            }
            posts += "</div></div>";
            $("#leaderboardDiv").html(posts);
        }
    });
    
}
//Recursively call getComments every 10 second
setInterval(getLeaderboard, 10000);

});