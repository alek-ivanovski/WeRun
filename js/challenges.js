/**
 * Created by Филип on 13.09.2017.
 */
$(function(){
    // $("#challengeTime").click(function(){
    //     $("#enterTime").toggle();
    // });

    //<div class="panel panel-default"><div class="panel-body">Run 10k for 42min</div><div class="panel-footer"><span>Kilometers:<span id="km">10</span></span><span>Time:<span id="time">42</span></span><br><br><div class="progress"><div class="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style="width:70%">70%</div></div></div>
    $("#addNewChallenge").click(function(){
        //create new challenge
        var challengeName = $("#chName").val();
        var challengeDistanceInMeters = $("#chDistance").val();
        var hours = $("#chHour").val();
        var min = $("#chMinutes").val();
        var sec = $("#chSeconds").val();
        var randomNumber = Math.floor((Math.random() * 100) + 1);
        //alert(randomNumber);
        var progressColor = "";
        if(randomNumber < 33){
            progressColor = "progress-bar-danger";
        }else if(randomNumber >33 && randomNumber < 66){
            progressColor = "progress-bar-warning";
        }else{
            progressColor = "progress-bar-success";
        }
        var timeInSeconds = (Number(hours) * 3600) + (Number(min) * 60) + Number(sec);
        var timeInMinutes = timeInSeconds / 60;
        var timeInHours = timeInMinutes / 60.0;
        //timeInHours = Math.round(timeInHours * 100) / 100;
        var distanceInKm = Number(challengeDistanceInMeters / 1000);
        var kilometersPerHour = distanceInKm / timeInHours;
        var pace  = timeInMinutes  / distanceInKm;

        var floatingPointDigits = (pace * 100) % 100;
        floatingPointDigits = floatingPointDigits * 0.6;

        //works for pace under 10.0
        //var firstDigit = Number(String(pace).charAt(0));
        //pace = firstDigit + ((floatingPointDigits * 100) / 10000);

        var firstDigits = Math.floor(pace);
        pace = firstDigits + ((floatingPointDigits * 100) / 10000);

        //two deciamals round
        kilometersPerHour = Math.round(kilometersPerHour * 100) / 100;
        pace = Math.round(pace * 100) / 100;
        //timeInHours = Math.round(timeInHours * 100) / 100;

        //alert("Time:" + hours + ":" + min + ":" + sec  + "\nIn sec / min:" + timeInSeconds + "/" + timeInMinutes + "\nSpeed:" + kilometersPerHour + "km/h" + "\nPace:" + pace +  "min/km");

        //alert("Name:"+ challengeName + " Kilometers:" + challengeDistance + "Time:" + hours + ":" + min + ":" + sec);
        if(checkValidation(challengeName, challengeDistanceInMeters, hours, min, sec) == true){
            var panel = '<div class="col-sm-4"><div class="panel panel-default"><div class="panel-body"><h4>' + challengeName + '</h4></div><div class="panel-footer"><span>Distance:<span id="km">' + distanceInKm + ' km </span></span><br><span>Speed: <span>' + kilometersPerHour + ' km/h</span></span><br><span>Pace: <span>' + pace + ' min/km</span></span><br><span>Time - <span id="time">' + "Hours:" + hours + " Minutes:" + min + " Seconds:" + sec + '</span></span><br><br><div class="progress"><div class="progress-bar ' + progressColor + '" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style="width:' + randomNumber + '%">'+ randomNumber + '%</div></div></div></div>';
            $("#challenges").append(panel);
            $("#validationAlert").hide();
            $("#close").click();
            var form = document.getElementById("newChallengeForm");
            form.reset();
        }else{
            $("#validationAlert").show();
        }

    });

    function checkValidation(name, dist, hours, min, sec){
        if(name != "" && dist != "" && hours != "" && min != "" && sec != "" ){
            return true
        }else{
            return false;
        }
    }
});