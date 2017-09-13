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
        var hours = Number($("#chHour").val()) / 1000;
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
        var distanceInKm = Number(challengeDistanceInMeters / 1000);
        var kilometersPerHour = (distanceInKm * 1000) / (timeInSeconds * 3600);
        var pace  = distanceInKm * timeInSeconds;

        alert("Time:" + hours + ":" + min + ":" + sec  + " In sec:" + timeInSeconds + " km/h:" + kilometersPerHour + " Pace:" + pace);

        //alert("Name:"+ challengeName + " Kilometers:" + challengeDistance + "Time:" + hours + ":" + min + ":" + sec);
        if(checkValidation(challengeName, challengeDistanceInMeters, hours, min, sec) == true){
            var panel = '<div class="col-sm-4"><div class="panel panel-default"><div class="panel-body"><h4>' + challengeName + '</h4></div><div class="panel-footer"><span>Kilometers:<span id="km">' + distanceInKm + ' </span></span><br><span>Time - <span id="time">' + "Hours:" + hours + " Minutes:" + min + " Seconds:" + sec + '</span></span><br><br><div class="progress"><div class="progress-bar ' + progressColor + '" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style="width:' + randomNumber + '%">'+ randomNumber + '%</div></div></div></div>';
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
        if(name != "" && dist != "" && hours != "" && min != "" && sec != "" && Number(sec) < 60 && Number(min) < 60 ){
            return true
        }else{
            return false;
        }
    }
});