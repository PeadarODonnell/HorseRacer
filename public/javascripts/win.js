
var chosenHorse = "";
var stake0;
var stake1;
var stake2;
var stake3;
var stake4;
var horse0 = "";
var horse1 = "";
var horse2 = "";
var horse3 = "";
var horse4 = "";
var stakers = [];
var horses = [];

function racingTime(){
    if(document.getElementById("theStakes").textContent == 0)
    {
        //empty
    }
    else{
    document.getElementById("tvScreen").style.display = 'none';
    document.getElementById("racingScreen").style.display = 'block';

    move(chosenHorse, stake0, stake1, stake2, stake3, stake4,
        document.getElementsByClassName("gob")[0].id,
        document.getElementsByClassName("gob")[1].id,
        document.getElementsByClassName("gob")[2].id,
        document.getElementsByClassName("gob")[3].id,
        document.getElementsByClassName("gob")[4].id, 0);
}
}
function win(){
    var yourCash = document.getElementById("amountOwned").textContent;
    var theWinnings = document.getElementById("theStakes").textContent;
    var YourNewCash = +yourCash + +theWinnings;

    document.getElementById("tvScreen").style.display = 'block';
    document.getElementById("racingScreen").style.display = 'none';
    document.getElementById("amountOwned").textContent = +YourNewCash;
    document.getElementById("theStakes").textContent = 0;
    document.getElementById("paragraph").textContent = 0;
}

function returnHorse(){
    return chosenHorse;
}



function lose(){
    document.getElementById("theStakes").textContent = 0;
    document.getElementById("paragraph").textContent = 0;
    if(document.getElementById("amountOwned").textContent < 5){
            alert("well you gone goofed up");
        }
    document.getElementById("tvScreen").style.display = 'block';
    document.getElementById("racingScreen").style.display = 'none';
}



function anotherFunction(elem){
    chosenHorse = elem.firstChild.nextSibling.textContent;
    document.getElementById("theStakes").textContent = parseInt(elem.lastChild.textContent)*document.getElementById("paragraph").textContent;

}



function myFunction(elem) {
    theContent = document.getElementById("paragraph").textContent;
    if(elem.id == 0){
        var oldAmount = +document.getElementById("amountOwned").textContent + +document.getElementById("paragraph").textContent;
        document.getElementById("amountOwned").textContent = +oldAmount;
        document.getElementById("paragraph").textContent = 0;
        document.getElementById("theStakes").textContent = 0;
    }
    else if((document.getElementById("amountOwned").textContent - +elem.id) < 0)
    {
        //empty
    }
    else{
        newContent = +elem.id + +theContent;
        document.getElementById("paragraph").textContent = newContent;
        document.getElementById("amountOwned").textContent -= +elem.id;

        }
    
}


function randomisedRacer(){
        stakes = new Array();
        racers = new Array();

        stakes = [11,2,3,4,5,6,7,8,9,10];
        racers[0] = "Albert";
        racers[1] = "Bunny";
        racers[2] = "Clark";
        racers[3] = "Donnie";
        racers[4] = "Elvis";
        racers[5] = "Frank";
        racers[6] = "Gordon";
        racers[7] = "Hilda";
        racers[8] = "Ingrid";
        racers[9] = "Jigger";

        for(var i = 0; i < 5; i++)
        {
            var randRacer = Math.floor(Math.random() * racers.length);
            var randomRacer = racers[randRacer];
            try{
                document.getElementsByClassName("gob")[i].id = randomRacer;
                //alert(document.getElementsByClassName("gob")[i].id);
                
            }
            catch(error){
                alert("error");
            }
            racers.splice(randRacer, 1);
            var randStake = Math.floor(Math.random() * stakes.length);
            var randomStake = stakes[randStake];
            
            if(i == 0){
                stake0 = parseInt(randomStake); 
                horse0 = randomRacer;
            }
            if(i == 1){
                stake1 = parseInt(randomStake);
                horse1 = randomRacer;
            }
            if(i == 2){
                stake2 = parseInt(randomStake);
                horse2 = randomRacer;
            }
            if(i == 3){
                stake3 = parseInt(randomStake);
                horse3 = randomRacer;
            }
            if(i == 4){
                stake4 = parseInt(randomStake);
                horse4 = randomRacer;
            }

            stakes.splice(randStake, 1);

            var itemA = document.getElementsByClassName('buttona')[i];
            itemA.firstChild.nextSibling.textContent = randomRacer;
            //stakers.push(stakeHolder[i]);
            document.getElementById("demo").textContent += randomStake+",";
            itemA.lastChild.textContent = randomStake + "/1";
        }
        /*
        for(var i = 0; i < 5; i++){
            horses.push(document.getElementsByClassName("gob")[i].id);
            console.log(horses[i]);
        }
        */
        
    }

    function unsure(){
        for(var i = 0; i < 5; i++){
            console.log(stakers[i]);
            console.log(horses[i]);
            alert(document.getElementsByClassName("gob")[i].id);
        }
        console.info(stakers);
        console.log(horses);
    }
    function testing(){

        var stakely = document.getElementById("demo").textContent;
        var stakeArray = stakely.split(',');
        for(var i = 0; i < 5; i++){
            stakers.push(parseInt(stakeArray[i]));
            console.log(stakers[i]);
        }
        for(var i = 0; i < 5; i++){
            horses.push(document.getElementsByClassName("gob")[i].id);
            console.log(horses[i]);
        }
        console.info(stakers);
        console.info(horses);
        
    }