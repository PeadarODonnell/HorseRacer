var leftPosition1 = 0;
var leftPosition2 = 0;
var leftPosition3 = 0;
var leftPosition4 = 0;
var leftPosition5 = 0;
var topPosition = 0;
var counter10 = 0;
var counter20 = 0;
var theStart = 0;
var speedBoostCounter = 0;
var horizontalSpeed1 = (Math.random()*2);
var horizontalSpeed2 = (Math.random()*2);
var horizontalSpeed3 = (Math.random()*2);
var horizontalSpeed4 = (Math.random()*2);
var horizontalSpeed5 = (Math.random()*2);
var lapCounter = 0;

goblinImage = "http://www.psychicsoftware.com/goblin_run_1.png";

function speedBooster(){
	if(speedBoostCounter != 5){
		speedBoostCounter++;
		return 20;
	}
	else{return 0;}
}

function move(chosenHorse, odds1, odds2, odds3, odds4, odds5, 
idName1, idName2, idName3, idName4, idName5, speedBoost)
{
	var y1 = Number(odds1);
	var y2 = Number(odds2);
	var y3 = Number(odds3);
	var y4 = Number(odds4);
	var y5 = Number(odds5);

	leftPosition1 += horizontalSpeed1;
	leftPosition2 += horizontalSpeed2;
	leftPosition3 += horizontalSpeed3;
	leftPosition4 += horizontalSpeed4;
	leftPosition5 += horizontalSpeed5;

	horizontalSpeed1 = (Math.random()*2);
	horizontalSpeed2 = (Math.random()*2);
	horizontalSpeed3 = (Math.random()*2);
	horizontalSpeed4 = (Math.random()*2);
	horizontalSpeed5 = (Math.random()*2);
	
	var x1 = leftPosition1 % y1;
	var x2 = leftPosition2 % y2;
	var x3 = leftPosition3 % y3;
	var x4 = leftPosition4 % y4;
	var x5 = leftPosition5 % y5;

	var inc1 = Math.floor(Math.random() * 5) + 1;
	var inc2 = Math.floor(Math.random() * 5) + 1;
	var inc3 = Math.floor(Math.random() * 5) + 1;
	var inc4 = Math.floor(Math.random() * 5) + 1;
	var inc5 = Math.floor(Math.random() * 5) + 1;
	var inc6 = Math.floor(Math.random() * 5) + 1;

	if(inc6 == 1){
		horizontalSpeed1 = (Math.random()*(y1/2)*1.2)+1;
	}
	if(inc6 == 2){
		horizontalSpeed2 = (Math.random()*(y2/2)*1.2)+1;
	}
	if(inc6 == 3){
		horizontalSpeed3 = (Math.random()*(y3/2)*1.2)+1;
	}
	if(inc6 == 4){
		horizontalSpeed4 = (Math.random()*(y4/2)*1.2)+1;
	}
	if(inc6 == 5){
		horizontalSpeed5 = (Math.random()*(y5/2)*1.2)+1;
	}

	if(inc1 == 5){
		horizontalSpeed1 = (Math.random()*(y1/3)*1.2)+1;
	}
	if(inc2 == 5){
		horizontalSpeed2 = (Math.random()*(y2/3)*1.2)+1;
	}
	if(inc3 == 5){
		horizontalSpeed3 = (Math.random()*(y3/3)*1.2)+1;
	}

	if(inc4 == 5){
		horizontalSpeed4 = (Math.random()*(y4/3)*1.2)+1;
	}

	if(inc5 == 5){
		horizontalSpeed5 = (Math.random()*(y5/3)*1.2)+1;
	}
	/*
	alert(inc1 +"\n" +inc2 +"\n" +inc3 +"\n" +
	inc4 +"\n" +inc5);
	alert(horizontalSpeed1+"\n"+horizontalSpeed2+"\n"+
	horizontalSpeed3+"\n"+horizontalSpeed4+"\n"+
	horizontalSpeed5+"\n");
	*/
	if(lapCounter == 0){
	if(leftPosition1 >= 94 && chosenHorse == idName1 && counter10 == 0){
		leftPosition1 = 0;
		lapCounter++;
		counter10++;
        alert(chosenHorse+" won");
        win();
	}else if((leftPosition2 >= 94 && chosenHorse == idName2 && counter10 == 0)){
		leftPosition2 = 0;
		counter10++;
		lapCounter++;
        alert(chosenHorse+" won");
        win();
	}else if((leftPosition3 >= 94 && chosenHorse == idName3 && counter10 == 0)){
		leftPosition3 = 0;
		counter10++;
		lapCounter++;
        alert(chosenHorse+" won");
        win();
	}else if((leftPosition4 >= 94 && chosenHorse == idName4 && counter10 == 0)){
		leftPosition4 = 0;
		counter10++;
		lapCounter++;
        alert(chosenHorse+" won");
        win();
	}else if((leftPosition5 >= 94 && chosenHorse == idName5 && counter10 == 0)){
		leftPosition5 = 0;
		counter10++;
		lapCounter++;
        alert(chosenHorse+" won");
        win();
	}else if((leftPosition1 >= 94 && chosenHorse != idName1 && counter10 == 0)){
		leftPosition1 = 0;
		counter10++;
		lapCounter++;
        alert(chosenHorse+" lost, "+idName1+" won");
        lose();
	}else if((leftPosition2 >= 94 && chosenHorse != idName2 && counter10 == 0)){
		leftPosition3 = 0;
		counter10++;
		lapCounter++;
        alert(chosenHorse+" lost, "+idName2+" won");
        lose();
	}else if((leftPosition3 >= 94 && chosenHorse != idName3 && counter10 == 0)){
		leftPosition3 = 0;
		counter10++;
		lapCounter++;
        alert(chosenHorse+" lost, "+idName3+" won");
        lose();
	}else if((leftPosition4 >= 94 && chosenHorse != idName4 && counter10 == 0)){
		leftPosition4 = 0;
		counter10++;
		lapCounter++;
        alert(chosenHorse+" lost, "+idName4+" won");
        lose();
	}else if((leftPosition5 >= 94 && chosenHorse != idName5 && counter10 == 0)){
		leftPosition5 = 0;
		counter10++;
		lapCounter++;
        alert(chosenHorse+" lost, "+idName5+" won");
        lose();
	}
}else{
	console.log(leftPosition1);
	console.log(leftPosition2);
	console.log(leftPosition3);
	console.log(leftPosition4);
	console.log(leftPosition5);
	counter10 = 0;
	lapCounter = 0;
	leftPosition1 = 0;
	leftPosition2 = 0;
	leftPosition3 = 0;
	leftPosition4 = 0;
	leftPosition5 = 0;
	document.getElementById(idName1).style.left = leftPosition1 + "%";
	document.getElementById(idName2).style.left = leftPosition2 + "%";
	document.getElementById(idName3).style.left = leftPosition3 + "%";
	document.getElementById(idName4).style.left = leftPosition4 + "%";
	document.getElementById(idName5).style.left = leftPosition5 + "%";
	randomisedRacer();
	return;
}


		document.getElementById(idName1).style.left = leftPosition1 + "%";
		document.getElementById(idName2).style.left = leftPosition2 + "%";
		document.getElementById(idName3).style.left = leftPosition3 + "%";
		document.getElementById(idName4).style.left = leftPosition4 + "%";
		document.getElementById(idName5).style.left = leftPosition5 + "%";

		/*
		document.getElementById("tellMe1").innerHTML = horizontalSpeed1+" "+speedBoostCounter;
		document.getElementById("tellMe2").innerHTML = horizontalSpeed2;
		document.getElementById("counter1").innerHTML = "laps: "+counter10+" distance ran: "+leftPosition1;
		document.getElementById("counter2").innerHTML = "laps: "+counter20 +" distance ran: "+leftPosition2;
		*/

		window.setTimeout(move, 50, chosenHorse, odds1, odds2, odds3, odds4, odds5, idName1, idName2, idName3, idName4, idName5, speedBoost);
	}	



		function switchImage(){
			goblinArray = ["http://www.psychicsoftware.com/goblin_run_1.png",
							"http://www.psychicsoftware.com/goblin_run_2.png",
							"http://www.psychicsoftware.com/goblin_run_3.png",
							"http://www.psychicsoftware.com/goblin_run_4.png",
							"http://www.psychicsoftware.com/goblin_run_5.png",
							"http://www.psychicsoftware.com/goblin_run_6.png"
						];
		if(leftPosition1 != 0){
			switch(goblinImage)
			{
				case goblinArray[0]:
					goblinImage = goblinArray[1];
					break;
				case goblinArray[1]:
					goblinImage = goblinArray[2];
					break;
				case goblinArray[2]:
					goblinImage = goblinArray[3];
					break;
				case goblinArray[3]:
					goblinImage = goblinArray[4];
					break;
				case goblinArray[4]:
					goblinImage = goblinArray[5];
					break;
				case goblinArray[5]:
					goblinImage = goblinArray[0];
					break;
			}
		}

		
		document.getElementById("imgGoblin").src = goblinImage;
		document.getElementById("imgGoblin2").src = goblinImage;
		document.getElementById("imgGoblin3").src = goblinImage;
		document.getElementById("imgGoblin4").src = goblinImage;
		document.getElementById("imgGoblin5").src = goblinImage;
		window.setTimeout(switchImage, 80);
	}	


	function timer(){
		var start = Date.now();
		var timer = setInterval(function(){
			var delta = Date.now() - start;
			//document.getElementById("demo").textContent = Math.floor(delta/1000);
			if( Math.floor(delta/1000) >= 15){
				//leaderboard();
				//alert("time up boy");
				var person = "";
				while((person == null || person == ""
				|| person.length == 0 || person.length == 1
				|| person.length == 2 || person.length >= 4)){

					person = prompt("Enter Your 3 initials:", "");
				}
				var cash = document.getElementById("amountOwned").textContent;
				cash = parseInt(cash);
				$.ajax({
					url: '/addHighscore/',
					type: 'POST',
					data: {userName: person, highScore: cash},
					success: function (data) {
						console.log(data);
						//getHighscores();
					}
				});

				window.location.href = "/feed";
				clearInterval(timer);
			}
			//document.getElementById("demo").textContent += "\n"+ new Date().toUTCString();
		}, 1000);
	}